import { useEffect, useState } from 'react';

interface ReadingProgressBarProps {
  accentColor?: string;
  label?: string;
}

export function ReadingProgressBar({
  accentColor = '#38BDF8',
  label = 'Case study reading progress',
}: ReadingProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    let rafId: number | null = null;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const rawPercentage = (scrollTop / docHeight) * 100;
      const clampedPercentage = Math.min(100, Math.max(0, Math.round(rawPercentage * 10) / 10));
      setProgress(clampedPercentage);
    };

    const onScrollOrResize = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      rafId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="fixed top-0 left-0 right-0 z-[60] h-1 bg-[#0E0F14]/80 pointer-events-none"
    >
      <div
        className={
          prefersReducedMotion
            ? 'h-full'
            : 'h-full transition-[width] duration-150 ease-out'
        }
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${accentColor} 0%, #D4AE5C 100%)`,
        }}
      />
    </div>
  );
}
