import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {
  REFRAME_VIDEO_ASSET_PATH,
  REFRAME_POSTER_ASSET_PATH,
  REFRAME_VIDEO_CHAPTERS,
} from '../utils/studioLogic';

interface HeroVideoShowcaseProps {
  variant?: 'hero' | 'case-study';
}

const SESSION_PLAYED_KEY = 'akshit_studio_hero_video_played_v1';

export function HeroVideoShowcase({ variant = 'hero' }: HeroVideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [hasEndedOnce, setHasEndedOnce] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30.53);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Sync active chapter with current video playback timestamp
  useEffect(() => {
    let matchedIndex = 0;
    for (let i = 0; i < REFRAME_VIDEO_CHAPTERS.length; i++) {
      if (currentTime >= REFRAME_VIDEO_CHAPTERS[i].startTime) {
        matchedIndex = i;
      }
    }
    setActiveChapterIndex(matchedIndex);
  }, [currentTime]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    const saveData = Boolean(conn?.saveData);

    // Ensure muted inline properties are set directly on DOM element for reliable browser autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let wasPlayingBeforeHidden = false;

    const startInitialPlayback = async () => {
      if (reduceMotion || saveData) {
        setAutoplayBlocked(true);
        setIsPlaying(false);
        return;
      }

      try {
        await video.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
        try {
          window.sessionStorage.setItem(SESSION_PLAYED_KEY, 'true');
        } catch {
          // Ignore sessionStorage errors
        }
      } catch {
        // Browser blocked autoplay; keep poster visible with explicit Play control
        setIsPlaying(false);
        setAutoplayBlocked(true);
      }
    };

    void startInitialPlayback();

    // Pause when video scrolls out of viewport, resume when back in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;
        if (!entry.isIntersecting) {
          if (!video.paused) {
            wasPlayingBeforeHidden = true;
            video.pause();
          }
        } else if (wasPlayingBeforeHidden && !reduceMotion && !saveData && !document.hidden) {
          wasPlayingBeforeHidden = false;
          void video.play().catch(() => {});
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(container);

    // Pause when browser tab becomes hidden
    const handleVisibilityChange = () => {
      if (!video) return;
      if (document.hidden) {
        if (!video.paused) {
          wasPlayingBeforeHidden = true;
          video.pause();
        }
      } else if (wasPlayingBeforeHidden && !reduceMotion && !saveData) {
        wasPlayingBeforeHidden = false;
        void video.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleTogglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) {
        video.currentTime = 0;
      }
      try {
        await video.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
        setHasEndedOnce(false);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && video.paused) {
      void video.play().catch(() => {});
    }
  };

  const handleReplay = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    try {
      await video.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
      setHasEndedOnce(false);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleJumpToChapter = async (startTime: number, index: number) => {
    const video = videoRef.current;
    setActiveChapterIndex(index);
    if (!video) return;
    video.currentTime = startTime;
    setCurrentTime(startTime);
    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch {
        // Keep paused if blocked
      }
    }
  };

  const activeChapter =
    REFRAME_VIDEO_CHAPTERS[activeChapterIndex] ?? REFRAME_VIDEO_CHAPTERS[0];
  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const formatTime = (sec: number) => {
    const whole = Math.max(0, Math.floor(sec));
    const mins = Math.floor(whole / 60);
    const secs = whole % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div
      ref={containerRef}
      data-testid={variant === 'hero' ? 'frontpage-hero-video-showcase' : 'casestudy-video-showcase'}
      className="theme-surface border theme-border rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Top Studio Recognition & Video Status Bar */}
      <div className="px-5 py-3.5 theme-bg border-b theme-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 font-semibold theme-accent">
            <Award className="w-3.5 h-3.5 theme-accent-secondary shrink-0" />
            <span>1st Place · REVIVEX · ZERO² 2026</span>
          </span>
          <span aria-hidden="true" className="theme-text-muted">
            ·
          </span>
          <span className="theme-text-muted">RE:FRAME Product Concept Film (00:30)</span>
        </div>

        <span className="font-mono text-xs theme-accent-secondary inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span>Special Video Credit: Adyot Ohri</span>
        </span>
      </div>

      {/* Main Front-Page Video Viewport */}
      <div className="video-viewport-dark relative bg-[#05070B] aspect-video w-full overflow-hidden group">
        <video
          ref={videoRef}
          data-testid={variant === 'hero' ? 'frontpage-hero-video' : 'casestudy-video'}
          src={REFRAME_VIDEO_ASSET_PATH}
          poster={REFRAME_POSTER_ASSET_PATH}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          onPlay={() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            setHasEndedOnce(true);
          }}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => {
            if (e.currentTarget.duration && Number.isFinite(e.currentTarget.duration)) {
              setDuration(e.currentTarget.duration);
            }
          }}
          aria-label="RE:FRAME Smart Glasses Product Concept Film — look up and live it"
          className="w-full h-full object-cover"
        >
          <source src={REFRAME_VIDEO_ASSET_PATH} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Subtle bottom contrast scrim for readable controls */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
        />

        {/* Fallback Play Overlay when Autoplay is Blocked or Paused */}
        {(autoplayBlocked || (!isPlaying && hasEndedOnce)) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px] p-4">
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={hasEndedOnce ? 'Replay RE:FRAME concept video' : 'Play RE:FRAME concept video'}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0B0E14] font-mono text-xs font-semibold shadow-lg transition-transform hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              {hasEndedOnce ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  <span>Replay Concept Film</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play RE:FRAME Concept Film</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Live Scene Caption + Interactive Control Bar */}
        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex flex-col gap-2.5">
          {/* Progress Track */}
          <div
            role="progressbar"
            aria-label="Video playback progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progressPercent)}
            className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-[#38BDF8] transition-[width] duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Active Scene Label */}
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-xs text-[#38BDF8] font-semibold tabular-nums shrink-0">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <span aria-hidden="true" className="text-white/40">
                ·
              </span>
              <span className="text-xs text-[#F4F7FB] font-medium truncate">
                {activeChapter.label}: {activeChapter.summary}
              </span>
            </div>

            {/* Accessible Playback Controls: Play/Pause, Unmute/Mute, Replay */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleTogglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0E14]/90 hover:bg-[#1B2534] text-[#F4F7FB] border border-white/20 font-mono text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleToggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                aria-pressed={!isMuted}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0E14]/90 hover:bg-[#1B2534] text-[#F4F7FB] border border-white/20 font-mono text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#D4AE5C]" />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#7AD992]" />
                    <span>Sound On</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReplay}
                aria-label="Replay video from start"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#0B0E14]/90 hover:bg-[#1B2534] text-[#F4F7FB] border border-white/20 font-mono text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="hidden sm:inline">Replay</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Video Storyboard Chapters (Deep Analysis of the 30.5s RE:FRAME Film) */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono theme-text-muted">
            <span>Jump to Concept Film Scene (00:00 – 00:30)</span>
            <span className="theme-accent">{activeChapter.timecode}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {REFRAME_VIDEO_CHAPTERS.map((chapter, idx) => {
              const isSelected = idx === activeChapterIndex;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => handleJumpToChapter(chapter.startTime, idx)}
                  className={`text-left px-3 py-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'theme-surface-raised border-[#38BDF8] theme-text font-medium'
                      : 'theme-bg theme-border theme-text-muted hover:theme-text'
                  }`}
                >
                  <span className="font-mono text-[11px] theme-accent block tabular-nums">
                    {chapter.timecode}
                  </span>
                  <span className="truncate block">{chapter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Context & Attribution */}
        <div className="pt-3 border-t theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs theme-text-muted leading-relaxed">
            <strong className="theme-text font-medium">RE:FRAME — Smart Glasses Concept Film:</strong>{' '}
            Demonstrates heads-up navigation, live translation, Focus Engine notification filtering,
            and phone-tethered privacy controls. Independent, unbuilt competition concept presented
            by Akshit Sukhija &amp; Adyot Ohri.
          </p>

          {variant === 'hero' && (
            <Link
              to="/work/reframe"
              className="inline-flex items-center gap-1.5 font-mono text-xs theme-accent hover:underline whitespace-nowrap shrink-0"
            >
              <span>Inspect RE:FRAME Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
