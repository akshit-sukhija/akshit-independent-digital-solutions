import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

type StudioGuideAnimation =
  | 'Idle - Gentle Breathing'
  | 'Wave - Welcome'
  | 'Present - Showcase'
  | 'Think - Reflect';

interface StudioGuideProps {
  animation?: StudioGuideAnimation;
  src?: string;
  fallbackSrc?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Lightweight Three.js viewer for the supplied studio-guide.glb.
 * The GLB uses a hierarchical transform-node rig with embedded animation clips.
 */
export function StudioGuide({
  animation = 'Idle - Gentle Breathing',
  src = '/assets/3d/studio-guide.glb',
  fallbackSrc = '/assets/3d/studio-guide-fallback.png',
  className = '',
  ariaLabel = 'Animated digital studio guide',
}: StudioGuideProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionsRef = useRef<Map<string, THREE.AnimationAction>>(new Map());
  const currentActionRef = useRef<THREE.AnimationAction | null>(null);
  const requestedAnimationRef = useRef<StudioGuideAnimation>(animation);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestedAnimationRef.current = animation;
    const mixer = mixerRef.current;
    const actions = actionsRef.current;
    const next = actions.get(animation);
    if (!mixer || !next) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const current = currentActionRef.current;
    if (reduceMotion) {
      current?.stop();
      currentActionRef.current = null;
      return;
    }

    if (current === next) return;
    next.reset().fadeIn(0.25).play();
    current?.fadeOut(0.25);
    currentActionRef.current = next;
  }, [animation]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let renderer: THREE.WebGLRenderer | null = null;
    let frameId = 0;
    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Object3D | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    const clock = new THREE.Clock();
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let pageVisible = true;
    let inViewport = true;

    const renderOnce = () => {
      if (!renderer || !scene || !camera) return;
      renderer.render(scene, camera);
    };

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.domElement.setAttribute('aria-hidden', 'true');
      renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .35s ease;';
      host.appendChild(renderer.domElement);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
      camera.position.set(0, 1.32, 4.8);
      camera.lookAt(0, 1.32, 0);

      scene.add(new THREE.HemisphereLight(0xe7f4ff, 0x263248, 2.0));
      const key = new THREE.DirectionalLight(0xffffff, 2.5);
      key.position.set(3, 5, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x51c9ff, 1.15);
      fill.position.set(-4, 2, 2);
      scene.add(fill);
      const rim = new THREE.PointLight(0x38bdf8, 18, 8);
      rim.position.set(1.8, 2.7, -1.4);
      scene.add(rim);

      const resize = () => {
        if (!renderer || !camera || !host) return;
        const width = Math.max(1, host.clientWidth);
        const height = Math.max(1, host.clientHeight);
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderOnce();
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      observer = new IntersectionObserver(([entry]) => {
        inViewport = entry.isIntersecting;
        if (inViewport) clock.getDelta();
      }, { threshold: 0.05 });
      observer.observe(host);

      const onVisibility = () => {
        pageVisible = !document.hidden;
        clock.getDelta();
      };
      document.addEventListener('visibilitychange', onVisibility);

      const loader = new GLTFLoader();
      loader.load(
        src,
        (gltf) => {
          if (disposed || !scene || !renderer) return;
          model = gltf.scene;
          const bounds = new THREE.Box3().setFromObject(model);
          const center = bounds.getCenter(new THREE.Vector3());
          model.position.x -= center.x;
          model.position.z -= center.z;
          model.position.y -= bounds.min.y;
          scene.add(model);

          mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          const actions = new Map<string, THREE.AnimationAction>();
          gltf.animations.forEach((clip) => actions.set(clip.name, mixer!.clipAction(clip)));
          actionsRef.current = actions;

          const initial = actions.get(requestedAnimationRef.current) ?? actions.get('Idle - Gentle Breathing');
          if (initial && !reduceMotionQuery.matches) {
            initial.play();
            currentActionRef.current = initial;
          }

          setReady(true);
          renderer.domElement.style.opacity = '1';
          renderOnce();
        },
        undefined,
        (error) => {
          console.error('Studio Guide GLB could not be loaded. Showing the static fallback.', error);
        },
      );

      const animate = () => {
        if (disposed) return;
        frameId = window.requestAnimationFrame(animate);
        if (pageVisible && inViewport && !reduceMotionQuery.matches) {
          const delta = Math.min(clock.getDelta(), 0.05);
          mixer?.update(delta);
        } else {
          clock.getDelta();
        }
        renderOnce();
      };
      animate();

      const onMotionPreference = () => {
        const action = currentActionRef.current;
        if (reduceMotionQuery.matches) {
          action?.stop();
          currentActionRef.current = null;
        } else {
          const next = actionsRef.current.get(requestedAnimationRef.current)
            ?? actionsRef.current.get('Idle - Gentle Breathing');
          next?.reset().fadeIn(0.2).play();
          currentActionRef.current = next ?? null;
        }
      };
      reduceMotionQuery.addEventListener('change', onMotionPreference);

      return () => {
        reduceMotionQuery.removeEventListener('change', onMotionPreference);
        document.removeEventListener('visibilitychange', onVisibility);
        disposed = true;
        window.cancelAnimationFrame(frameId);
        observer?.disconnect();
        resizeObserver?.disconnect();
        mixer?.stopAllAction();
        if (model) {
          model.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              object.geometry.dispose();
              const materials = Array.isArray(object.material) ? object.material : [object.material];
              materials.forEach((material) => material.dispose());
            }
          });
        }
        renderer?.dispose();
        renderer?.domElement.remove();
        mixerRef.current = null;
        actionsRef.current.clear();
        currentActionRef.current = null;
      };
    } catch (error) {
      console.error('WebGL is unavailable. Showing the static Studio Guide fallback.', error);
      renderer?.dispose();
      renderer?.domElement.remove();
      return () => {
        disposed = true;
        observer?.disconnect();
        resizeObserver?.disconnect();
      };
    }
  }, [src]);

  return (
    <div
      ref={hostRef}
      className={`relative isolate overflow-hidden ${className}`}
      role="img"
      aria-label={ariaLabel}
      data-model-ready={ready}
    >
      <img
        src={fallbackSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${ready ? 'opacity-0' : 'opacity-100'}`}
        loading="eager"
      />
    </div>
  );
}
