import { useEffect, useRef, useState } from 'react';

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
 * Lazy Three.js viewer for studio-guide.glb.
 * Three.js is dynamically imported so routes that do not render the guide
 * do not pay the cost of loading the 3D engine.
 *
 * Install Three.js before mounting: bun add three
 */
export function StudioGuide({
  animation = 'Idle - Gentle Breathing',
  src = '/assets/3d/studio-guide.glb.gz',
  fallbackSrc = '/assets/3d/studio-guide-fallback.png',
  className = '',
  ariaLabel = 'Animated digital studio guide',
}: StudioGuideProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const mixerRef = useRef<any>(null);
  const actionsRef = useRef<Map<string, any>>(new Map());
  const currentActionRef = useRef<any>(null);
  const requestedAnimationRef = useRef<StudioGuideAnimation>(animation);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    requestedAnimationRef.current = animation;
    const next = actionsRef.current.get(animation);
    if (!next) return;

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
    let renderer: any = null;
    let frameId = 0;
    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mixer: any = null;
    let model: any = null;
    let scene: any = null;
    let camera: any = null;
    let THREE: any = null;
    let pageVisible = !document.hidden;
    let inViewport = true;
    let lastFrameTime = 0;

    const renderOnce = () => {
      if (renderer && scene && camera) renderer.render(scene, camera);
    };

    const stopAndDispose = () => {
      if (disposed) return;
      disposed = true;
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
      resizeObserver?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      reduceMotionQuery.removeEventListener('change', onMotionPreference);
      mixer?.stopAllAction();
      if (model && THREE) {
        model.traverse((object: any) => {
          if (object.isMesh) {
            object.geometry?.dispose?.();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material: any) => material?.dispose?.());
          }
        });
      }
      renderer?.dispose?.();
      renderer?.domElement?.remove?.();
      mixerRef.current = null;
      actionsRef.current.clear();
      currentActionRef.current = null;
    };

    const onVisibility = () => {
      pageVisible = !document.hidden;
      lastFrameTime = 0;
    };

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotionPreference = () => {
      if (reduceMotionQuery.matches) {
        currentActionRef.current?.stop();
        currentActionRef.current = null;
        renderOnce();
      } else {
        const next = actionsRef.current.get(requestedAnimationRef.current)
          ?? actionsRef.current.get('Idle - Gentle Breathing');
        next?.reset().fadeIn(0.2).play();
        currentActionRef.current = next ?? null;
      }
    };

    const initialize = async () => {
      try {
        // @ts-ignore Three.js is installed by the integration step before this component is mounted.
        const threePromise = import('three');
        // @ts-ignore GLTFLoader ships in the three package's addons directory.
        const loaderPromise = import('three/addons/loaders/GLTFLoader.js');
        const [threeModule, loaderModule] = await Promise.all([threePromise, loaderPromise]);
        if (disposed) return;

        THREE = threeModule;
        const GLTFLoader = loaderModule.GLTFLoader;

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
        renderer.domElement.style.cssText =
          'position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity .35s ease;';
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
          lastFrameTime = 0;
        }, { threshold: 0.05 });
        observer.observe(host);

        document.addEventListener('visibilitychange', onVisibility);
        reduceMotionQuery.addEventListener('change', onMotionPreference);

        const loader = new GLTFLoader();
        const loadModel = async () => {
          const response = await fetch(src, { cache: 'force-cache' });
          if (!response.ok) throw new Error(`Studio Guide model request failed: ${response.status}`);
          let modelBytes = await response.arrayBuffer();
          const signature = new Uint8Array(modelBytes, 0, Math.min(2, modelBytes.byteLength));
          if (signature[0] === 0x1f && signature[1] === 0x8b) {
            if (typeof DecompressionStream === 'undefined') {
              throw new Error('This browser cannot decompress the compressed GLB asset.');
            }
            const stream = new Blob([modelBytes]).stream().pipeThrough(new DecompressionStream('gzip'));
            modelBytes = await new Response(stream).arrayBuffer();
          }

          loader.parse(
            modelBytes,
            new URL('.', window.location.href).href,
            (gltf: any) => {
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
              const actions = new Map<string, any>();
              gltf.animations.forEach((clip: any) => actions.set(clip.name, mixer.clipAction(clip)));
              actionsRef.current = actions;

              const initial = actions.get(requestedAnimationRef.current)
                ?? actions.get('Idle - Gentle Breathing');
              if (initial && !reduceMotionQuery.matches) {
                initial.play();
                currentActionRef.current = initial;
              }

              setReady(true);
              renderer.domElement.style.opacity = '1';
              renderOnce();
            },
            (error: unknown) => {
              console.error('Studio Guide GLB parsing failed. Showing the static fallback.', error);
            },
          );
        };
        void loadModel().catch((error) => {
          console.error('Studio Guide GLB could not be loaded. Showing the static fallback.', error);
        });

        const animate = (time: number) => {
          if (disposed) return;
          frameId = window.requestAnimationFrame(animate);
          if (pageVisible && inViewport && !reduceMotionQuery.matches) {
            const delta = lastFrameTime ? Math.min((time - lastFrameTime) / 1000, 0.05) : 0;
            mixer?.update(delta);
            lastFrameTime = time;
            renderOnce();
          } else {
            lastFrameTime = 0;
          }
        };
        frameId = window.requestAnimationFrame(animate);
      } catch (error) {
        console.error('WebGL/Three.js unavailable. Showing the static Studio Guide fallback.', error);
        renderer?.dispose?.();
        renderer?.domElement?.remove?.();
      }
    };

    // The static fallback is retained for visitors who prefer reduced motion.
    if (!reduceMotionQuery.matches) initialize();
    return stopAndDispose;
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
