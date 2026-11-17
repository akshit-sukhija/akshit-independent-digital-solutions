import { useEffect, useRef, useState } from 'react';
import type * as THREE_TYPES from 'three';

export type StudioGuideAnimation =
  | 'Idle - Gentle Breathing'
  | 'Wave - Welcome'
  | 'Present - Showcase'
  | 'Think - Reflect';

export type StudioGuideFallbackReason =
  | 'reduced-motion'
  | 'mobile-default'
  | 'low-power'
  | 'webgl-unavailable'
  | 'glb-load-error'
  | null;

export interface StudioGuideProps {
  animation?: StudioGuideAnimation;
  src?: string;
  fallbackSrc?: string;
  className?: string;
  ariaLabel?: string;
  enableOnMobile?: boolean;
  onWelcomeComplete?: () => void;
}

/**
 * Lightweight Three.js viewer for the supplied studio-guide.glb.
 * The GLB uses a hierarchical transform-node rig with four embedded animation clips:
 * - Wave - Welcome
 * - Idle - Gentle Breathing
 * - Present - Showcase
 * - Think - Reflect
 *
 * Features:
 * - Lazy-loads Three.js, GLTFLoader, RoomEnvironment, and studio-guide.glb after initial render
 * - Keeps static PNG fallback visible until WebGL + GLB are ready
 * - Falls back cleanly on mobile by default, reduced-motion, low-power devices, WebGL unavailability, or GLB error
 * - Smoothly cross-fades between clips without abrupt restarts
 * - Automatically cross-fades from 'Wave - Welcome' to 'Idle - Gentle Breathing' upon welcome completion
 * - Pauses the animation loop when offscreen or when the browser tab is hidden
 * - Caps devicePixelRatio (<= 2 on hardware GPU, 1 on software WebGL) and disposes all GPU resources on unmount
 */
export function StudioGuide({
  animation = 'Wave - Welcome',
  src = '/assets/3d/studio-guide.glb',
  fallbackSrc = '/assets/3d/studio-guide-fallback.png',
  className = '',
  ariaLabel = 'Animated digital studio guide',
  enableOnMobile = false,
  onWelcomeComplete,
}: StudioGuideProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const mixerRef = useRef<THREE_TYPES.AnimationMixer | null>(null);
  const actionsRef = useRef<Map<string, THREE_TYPES.AnimationAction>>(new Map());
  const currentActionRef = useRef<THREE_TYPES.AnimationAction | null>(null);
  const currentClipNameRef = useRef<StudioGuideAnimation>(animation);
  const requestedAnimationRef = useRef<StudioGuideAnimation>(animation);
  const onWelcomeCompleteRef = useRef<(() => void) | undefined>(onWelcomeComplete);
  const renderOnceRef = useRef<(() => void) | null>(null);

  const [ready, setReady] = useState(false);
  const [activeClipName, setActiveClipName] = useState<StudioGuideAnimation>(animation);
  const [fallbackReason, setFallbackReason] = useState<StudioGuideFallbackReason>(null);
  const [loopPaused, setLoopPaused] = useState(false);

  useEffect(() => {
    onWelcomeCompleteRef.current = onWelcomeComplete;
  }, [onWelcomeComplete]);

  // Smooth cross-fade whenever the requested animation prop changes
  useEffect(() => {
    requestedAnimationRef.current = animation;
    const mixer = mixerRef.current;
    const actions = actionsRef.current;
    const next = actions.get(animation);
    if (!mixer || !next) {
      setActiveClipName(animation);
      return;
    }

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const current = currentActionRef.current;
    if (reduceMotion) {
      current?.stop();
      currentActionRef.current = null;
      return;
    }

    if (current === next && currentClipNameRef.current === animation) {
      return;
    }

    next.enabled = true;
    next.setEffectiveTimeScale(1);
    next.setEffectiveWeight(1);
    next.time = 0;

    if (current && current !== next) {
      current.crossFadeTo(next, 0.35, false);
      next.play();
    } else {
      next.reset().fadeIn(0.35).play();
    }

    currentActionRef.current = next;
    currentClipNameRef.current = animation;
    hostRef.current?.setAttribute('data-active-animation', animation);
    setActiveClipName(animation);

    // Advance a tiny step and render once so even if offscreen the cross-fade state is applied
    mixer.update(0.016);
    renderOnceRef.current?.();
  }, [animation]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof window === 'undefined') return;

    setReady(false);
    setFallbackReason(null);

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotionQuery.matches) {
      setFallbackReason('reduced-motion');
      return;
    }

    // Mobile fallback by default unless explicitly enabled
    const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;
    if (!enableOnMobile && isMobileViewport) {
      setFallbackReason('mobile-default');
      return;
    }

    // Low-powered device check (Save-Data or 1 CPU core / <= 1GB deviceMemory)
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const isLowPower =
      Boolean(nav.connection?.saveData) ||
      (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 1) ||
      (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 1);

    if (isLowPower) {
      setFallbackReason('low-power');
      return;
    }

    // Probe WebGL availability and software renderer status before booting Three.js
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = (probeCanvas.getContext('webgl2') ||
        probeCanvas.getContext('webgl')) as WebGLRenderingContext | null;
      if (!gl) {
        setFallbackReason('webgl-unavailable');
        return;
      }
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      const rendererParam = debugInfo ? debugInfo.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpuName = String(gl.getParameter(rendererParam) || '');
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpuName);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setFallbackReason('webgl-unavailable');
      return;
    }

    let disposed = false;
    let initTimerId = 0;
    let welcomeTimerId = 0;
    let frameId = 0;
    let timeoutId = 0;
    let renderer: THREE_TYPES.WebGLRenderer | null = null;
    let envTexture: THREE_TYPES.Texture | null = null;
    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let mixer: THREE_TYPES.AnimationMixer | null = null;
    let model: THREE_TYPES.Object3D | null = null;
    let scene: THREE_TYPES.Scene | null = null;
    let camera: THREE_TYPES.PerspectiveCamera | null = null;
    let onVisibilityHandler: (() => void) | null = null;
    let onMotionPreferenceHandler: (() => void) | null = null;
    let pageVisible = !document.hidden;
    let inViewport = true;
    let loopRunning = false;
    let hasTriggeredLoad = false;

    const renderOnce = () => {
      if (!renderer || !scene || !camera || disposed) return;
      renderer.render(scene, camera);
    };
    renderOnceRef.current = renderOnce;

    const cancelScheduledFrame = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = 0;
      }
      loopRunning = false;
    };

    const crossFadeToIdleAfterWelcome = () => {
      if (disposed || !mixer) return;
      if (requestedAnimationRef.current !== 'Wave - Welcome') return;
      const idleAction = actionsRef.current.get('Idle - Gentle Breathing');
      const waveAction = actionsRef.current.get('Wave - Welcome');
      if (!idleAction) return;

      idleAction.enabled = true;
      idleAction.setEffectiveTimeScale(1);
      idleAction.setEffectiveWeight(1);
      idleAction.time = 0;

      if (waveAction && currentActionRef.current === waveAction) {
        waveAction.crossFadeTo(idleAction, 0.35, false);
        idleAction.play();
      } else {
        idleAction.reset().fadeIn(0.35).play();
      }

      currentActionRef.current = idleAction;
      currentClipNameRef.current = 'Idle - Gentle Breathing';
      requestedAnimationRef.current = 'Idle - Gentle Breathing';
      host.setAttribute('data-active-animation', 'Idle - Gentle Breathing');
      setActiveClipName('Idle - Gentle Breathing');
      mixer.update(0.016);
      renderOnce();
      onWelcomeCompleteRef.current?.();
    };

    const bootThreeAndLoadModel = async () => {
      if (disposed || hasTriggeredLoad) return;
      hasTriggeredLoad = true;

      try {
        const [threeModule, loaderModule, envModule] = await Promise.all([
          import('three'),
          import('three/addons/loaders/GLTFLoader.js'),
          import('three/addons/environments/RoomEnvironment.js'),
        ]);
        if (disposed) return;

        const THREE = threeModule;
        const { GLTFLoader } = loaderModule;
        const { RoomEnvironment } = envModule;

        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: !isSoftwareGl,
          powerPreference: 'low-power',
        });
        renderer.setPixelRatio(
          isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 2)
        );
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        renderer.domElement.setAttribute('aria-hidden', 'true');
        renderer.domElement.tabIndex = -1;
        renderer.domElement.style.cssText =
          'position:absolute;inset:0;width:100%;height:100%;opacity:0;pointer-events:none;transition:opacity .35s ease;';
        host.appendChild(renderer.domElement);

        scene = new THREE.Scene();

        // Studio environment reflections for PBR materials
        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = envTexture;
        pmremGenerator.dispose();

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
          if (!renderer || !camera || !host || disposed) return;
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

        let lastTimestamp = performance.now();
        const getDeltaSeconds = () => {
          const now = performance.now();
          const dt = Math.max(0, (now - lastTimestamp) / 1000);
          lastTimestamp = now;
          return dt;
        };

        const afterDraw = (cb: () => void) => {
          if (disposed || !renderer) return;
          const gl = renderer.getContext() as WebGL2RenderingContext | WebGLRenderingContext;
          if ('fenceSync' in gl && typeof gl.fenceSync === 'function') {
            const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
            gl.flush();
            const poll = () => {
              if (disposed) return;
              const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
              if (state === gl.UNSIGNALED) {
                timeoutId = window.setTimeout(poll, 5);
              } else {
                if (sync) gl.deleteSync(sync);
                timeoutId = window.setTimeout(cb, 80);
              }
            };
            timeoutId = window.setTimeout(poll, 5);
          } else {
            timeoutId = window.setTimeout(cb, 80);
          }
        };

        const tick = () => {
          if (disposed) return;
          if (!pageVisible || !inViewport || reduceMotionQuery.matches) {
            loopRunning = false;
            host.setAttribute('data-loop-paused', 'true');
            setLoopPaused(true);
            getDeltaSeconds();
            return;
          }

          const delta = Math.min(getDeltaSeconds(), 0.05);
          mixer?.update(delta);
          renderOnce();

          if (isSoftwareGl) {
            afterDraw(tick);
          } else {
            frameId = window.requestAnimationFrame(tick);
          }
        };

        const syncLoopState = () => {
          if (disposed) return;
          const shouldRun = pageVisible && inViewport && !reduceMotionQuery.matches;
          host.setAttribute('data-loop-paused', String(!shouldRun));
          setLoopPaused(!shouldRun);
          if (shouldRun && !loopRunning) {
            loopRunning = true;
            getDeltaSeconds();
            if (isSoftwareGl) {
              afterDraw(tick);
            } else {
              frameId = window.requestAnimationFrame(tick);
            }
          } else if (!shouldRun && loopRunning) {
            cancelScheduledFrame();
          }
        };

        onVisibilityHandler = () => {
          pageVisible = !document.hidden;
          getDeltaSeconds();
          syncLoopState();
        };
        document.addEventListener('visibilitychange', onVisibilityHandler);

        onMotionPreferenceHandler = () => {
          if (reduceMotionQuery.matches) {
            currentActionRef.current?.stop();
            currentActionRef.current = null;
            cancelScheduledFrame();
            setReady(false);
            setFallbackReason('reduced-motion');
            if (renderer?.domElement) {
              renderer.domElement.style.opacity = '0';
            }
          } else {
            setFallbackReason(null);
            const next =
              actionsRef.current.get(requestedAnimationRef.current) ??
              actionsRef.current.get('Idle - Gentle Breathing');
            if (next) {
              next.reset().fadeIn(0.25).play();
              currentActionRef.current = next;
              setReady(true);
              if (renderer?.domElement) {
                renderer.domElement.style.opacity = '1';
              }
            }
            syncLoopState();
          }
        };
        reduceMotionQuery.addEventListener('change', onMotionPreferenceHandler);

        // Store cleanup callbacks on host dataset/closure
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
            const actions = new Map<string, THREE_TYPES.AnimationAction>();
            gltf.animations.forEach((clip) => {
              const action = mixer!.clipAction(clip);
              if (clip.name === 'Wave - Welcome') {
                action.setLoop(THREE.LoopOnce, 1);
                action.clampWhenFinished = true;
              } else {
                action.setLoop(THREE.LoopRepeat, Infinity);
              }
              actions.set(clip.name, action);
            });
            actionsRef.current = actions;

            mixer.addEventListener('finished', (event: { action?: THREE_TYPES.AnimationAction }) => {
              const finishedClipName = event.action?.getClip()?.name;
              if (finishedClipName === 'Wave - Welcome') {
                crossFadeToIdleAfterWelcome();
              }
            });

            const initialClipName = requestedAnimationRef.current;
            const initial =
              actions.get(initialClipName) ?? actions.get('Idle - Gentle Breathing');
            if (initial && !reduceMotionQuery.matches) {
              initial.reset().play();
              currentActionRef.current = initial;
              currentClipNameRef.current = initialClipName;
              host.setAttribute('data-active-animation', initialClipName);
              setActiveClipName(initialClipName);
              mixer.update(0.016);

              if (initialClipName === 'Wave - Welcome') {
                const waveClip = gltf.animations.find((c) => c.name === 'Wave - Welcome');
                const durationMs = Math.max(1800, Math.round((waveClip?.duration ?? 2.25) * 1000));
                welcomeTimerId = window.setTimeout(() => {
                  crossFadeToIdleAfterWelcome();
                }, durationMs);
              }
            }

            host.setAttribute('data-model-ready', 'true');
            setReady(true);
            setFallbackReason(null);
            renderer.domElement.style.opacity = '1';
            renderOnce();
            syncLoopState();
          },
          undefined,
          (error) => {
            console.error('Studio Guide GLB could not be loaded. Showing the static fallback.', error);
            if (!disposed) {
              host.setAttribute('data-model-ready', 'false');
              host.setAttribute('data-fallback-reason', 'glb-load-error');
              setReady(false);
              setFallbackReason('glb-load-error');
            }
          }
        );

        // Update observer callback now that syncLoopState exists
        observer?.disconnect();
        observer = new IntersectionObserver(
          ([entry]) => {
            inViewport = entry.isIntersecting;
            getDeltaSeconds();
            syncLoopState();
          },
          { threshold: 0.05 }
        );
        observer.observe(host);
      } catch (error) {
        console.error('WebGL is unavailable. Showing the static Studio Guide fallback.', error);
        if (!disposed) {
          host.setAttribute('data-model-ready', 'false');
          host.setAttribute('data-fallback-reason', 'webgl-unavailable');
          setReady(false);
          setFallbackReason('webgl-unavailable');
        }
      }
    };

    // Lazy-load the 3D engine & GLB when the hero container enters/approaches the viewport after initial render
    observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry.isIntersecting;
        setLoopPaused(!inViewport || document.hidden);
        if (entry.isIntersecting && !hasTriggeredLoad) {
          initTimerId = window.setTimeout(() => {
            void bootThreeAndLoadModel();
          }, 40);
        }
      },
      { rootMargin: '120px 0px', threshold: 0.01 }
    );
    observer.observe(host);

    return () => {
      disposed = true;
      renderOnceRef.current = null;
      if (initTimerId) window.clearTimeout(initTimerId);
      if (welcomeTimerId) window.clearTimeout(welcomeTimerId);
      cancelScheduledFrame();
      if (onVisibilityHandler) {
        document.removeEventListener('visibilitychange', onVisibilityHandler);
      }
      if (onMotionPreferenceHandler) {
        reduceMotionQuery.removeEventListener('change', onMotionPreferenceHandler);
      }
      observer?.disconnect();
      resizeObserver?.disconnect();
      mixer?.stopAllAction();
      if (model) {
        model.traverse((object) => {
          const mesh = object as THREE_TYPES.Mesh;
          if (mesh.isMesh) {
            mesh.geometry?.dispose?.();
            const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            materials.forEach((material) => {
              if (!material) return;
              const matRecord = material as unknown as Record<string, unknown>;
              ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'aoMap'].forEach(
                (texKey) => {
                  const tex = matRecord[texKey] as THREE_TYPES.Texture | undefined;
                  tex?.dispose?.();
                }
              );
              material.dispose?.();
            });
          }
        });
      }
      envTexture?.dispose?.();
      renderer?.dispose?.();
      renderer?.domElement?.remove?.();
      mixerRef.current = null;
      actionsRef.current.clear();
      currentActionRef.current = null;
    };
  }, [src, enableOnMobile]);

  return (
    <div
      ref={hostRef}
      data-testid="studio-guide-viewer"
      className={`relative isolate overflow-hidden select-none pointer-events-none ${className}`}
      role="img"
      aria-label={ariaLabel}
      data-model-ready={ready}
      data-active-animation={activeClipName}
      data-fallback-reason={fallbackReason ?? 'none'}
      data-loop-paused={loopPaused}
    >
      <img
        src={fallbackSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 pointer-events-none ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
      />
    </div>
  );
}

export default StudioGuide;
