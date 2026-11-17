import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  REFRAME_POSTER_ASSET_PATH,
  REFRAME_VIDEO_ASSET_PATH,
} from '../utils/studioLogic';

export interface VideoHeroProps {
  videoSrc?: string;
  fallbackImageSrc?: string;
  className?: string;
}

/**
 * Background video element for the homepage hero with autoPlay, muted, loop, and playsInline.
 * Positioned absolutely behind the homepage hero content using z-index (z-0),
 * with an automatic static image fallback for reduced-motion or video load errors.
 */
export function VideoHero({
  videoSrc = REFRAME_VIDEO_ASSET_PATH,
  fallbackImageSrc = REFRAME_POSTER_ASSET_PATH,
  className = '',
}: VideoHeroProps) {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play().catch(() => {});
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const isLight = theme === 'light';

  return (
    <div
      data-testid="video-hero-background"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {/* Static fallback image always present behind the video or when video fails / reduced-motion */}
      <img
        src={fallbackImageSrc}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center ${
          isLight ? 'opacity-12' : 'opacity-20'
        }`}
        loading="eager"
      />

      {!videoFailed && !reducedMotion && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={fallbackImageSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover object-center ${
            isLight ? 'opacity-15' : 'opacity-25'
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Theme-aware editorial gradient veil so foreground HTML copy, CTAs, and 3D Studio Guide remain crisp in both Dark and Light modes */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: isLight
            ? 'linear-gradient(105deg, rgba(246,242,233,0.95) 0%, rgba(246,242,233,0.88) 52%, rgba(246,242,233,0.94) 100%)'
            : 'linear-gradient(105deg, rgba(11,14,20,0.95) 0%, rgba(11,14,20,0.86) 52%, rgba(11,14,20,0.92) 100%)',
        }}
      />
    </div>
  );
}

export default VideoHero;
