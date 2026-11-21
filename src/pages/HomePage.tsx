import { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Users,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { StudioFaqSection } from '../components/StudioFaqSection';
import { CtaSection } from '../components/CtaSection';
import { HeroVideoShowcase } from '../components/HeroVideoShowcase';
import { ServiceComparison } from '../components/ServiceComparison';
import { StudioPortrait } from '../components/StudioPortrait';
import { StoryHighlights } from '../components/StoryHighlights';
import {
  PROFILE_CONFIG,
  PROJECTS,
  SERVICES,
  PROCESS_STAGES,
  INSIGHT_NOTES,
  VERIFIED_EXPERIENCE,
  VERIFIED_ACADEMIC_RECORD,
} from '../data/studioData';
import {
  resolveStudioGuideAnimation,
  type HomepageSectionKey,
  type StudioGuideAnimation,
} from '../utils/studioLogic';

// Lazy-load StudioGuide.tsx so it is not loaded during initial synchronous page render
const LazyStudioGuide = lazy(() => import('../components/StudioGuide'));

function StudioGuideStaticFallback({ className = '' }: { className?: string }) {
  return (
    <div
      data-testid="studio-guide-suspense-fallback"
      className={`relative isolate overflow-hidden select-none pointer-events-none ${className}`}
      role="img"
      aria-label="Animated digital studio guide"
      data-model-ready="false"
    >
      <img
        src="/assets/3d/studio-guide-fallback.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain pointer-events-none"
        loading="eager"
      />
    </div>
  );
}

export function HomePage() {
  // Feature non-RE:FRAME projects in the Selected Work Wall (RE:FRAME has its own Featured Work Bento)
  const selectedWallProjects = PROJECTS.filter((p) => p.slug !== 'reframe');

  // Defer mounting LazyStudioGuide until after initial page render
  const [mountGuide, setMountGuide] = useState(false);
  const [welcomeCompleted, setWelcomeCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState<HomepageSectionKey>('hero');
  const [expandedServiceIds, setExpandedServiceIds] = useState<Record<string, boolean>>({});

  const toggleServiceAccordion = (id: string) => {
    setExpandedServiceIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMountGuide(true);
    }, 50);
    return () => window.clearTimeout(timer);
  }, []);

  // IntersectionObserver to determine which homepage section is active in the viewport
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sectionMapping: { id: string; key: HomepageSectionKey }[] = [
      { id: 'hero-welcome', key: 'hero' },
      { id: 'featured-reframe', key: 'work' },
      { id: 'selected-work', key: 'work' },
      { id: 'studio-services', key: 'services' },
      { id: 'studio-process', key: 'process' },
      { id: 'proof-insights', key: 'insights' },
    ];

    const ratios = new Map<string, { key: HomepageSectionKey; ratio: number }>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = sectionMapping.find((m) => m.id === entry.target.id);
          if (!match) return;
          ratios.set(entry.target.id, {
            key: match.key,
            ratio: entry.isIntersecting ? entry.intersectionRatio : 0,
          });
        });

        let bestSection: HomepageSectionKey | null = null;
        let bestRatio = 0;

        ratios.forEach(({ key, ratio }) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestSection = key;
          }
        });

        if (bestSection && bestRatio >= 0.12) {
          setActiveSection((prev) => {
            if (prev !== 'hero' && bestSection === 'hero') {
              // Returning to the hero always settles into Idle - Gentle Breathing
              setWelcomeCompleted(true);
            }
            return bestSection!;
          });
        }
      },
      {
        threshold: [0, 0.15, 0.35, 0.6],
        rootMargin: '-10% 0px -15% 0px',
      }
    );

    sectionMapping.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentGuideAnimation: StudioGuideAnimation = resolveStudioGuideAnimation(
    activeSection,
    welcomeCompleted
  );

  return (
    <div className="space-y-0">
      <PageMeta
        title="AKSHIT SUKHIJA — Independent Digital Content & Solutions Studio"
        description="AKSHIT SUKHIJA | Independent Digital Content & Solutions Studio. Creative ideas. Clear stories. Digital experiences that work."
      />

      {/* 1. Asymmetric 12-Column Editorial Hero Bento (Design Brief §6.1) */}
      <section
        id="hero-welcome"
        className="theme-bg bg-lamplit-glow pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-stretch">
            {/* Left Cover Bento Card (7 Columns): Large Editorial Headline + Positioning + 2 Pill CTAs */}
            <MotionReveal className="lg:col-span-7 bento-card p-6 sm:p-9 md:p-11 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-3.5">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="font-semibold tracking-[0.12em] theme-accent uppercase">
                      {PROFILE_CONFIG.name}
                    </span>
                    <span aria-hidden="true" className="theme-text-muted">
                      ·
                    </span>
                    <span className="theme-text-muted">{PROFILE_CONFIG.roleSubtitle}</span>
                  </div>
                  <span className="font-hand text-lg theme-accent-secondary">
                    New Delhi · Direct 1-on-1 Studio
                  </span>
                </div>

                {/* Editorial Display Headline with One Script Accent Word */}
                <h1
                  className="font-display theme-text leading-[1.04] tracking-tight"
                  style={{ fontSize: 'clamp(2.65rem, 4.7vw, 4.65rem)' }}
                >
                  Creative ideas.{' '}
                  <span className="font-script theme-accent font-normal px-1">Clear</span> stories.
                  Digital experiences that work.
                </h1>

                <p className="text-base sm:text-[18px] theme-text-muted leading-[1.6] max-w-2xl">
                  An independent digital content and product studio combining{' '}
                  <strong className="theme-text font-semibold">brand storytelling</strong>,{' '}
                  <strong className="theme-text font-semibold">visual content direction</strong>,{' '}
                  <strong className="theme-text font-semibold">custom React websites</strong>, and{' '}
                  <strong className="theme-text font-semibold">
                    rule-backed AI &amp; data solutions
                  </strong>{' '}
                  for founders, brands, and product teams.
                </p>

                {/* Primary & Secondary Pill CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-[14.5px] font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-sm"
                  >
                    <span>Explore Selected Work</span>
                    <ArrowRight className="w-4 h-4 text-[#D9B873]" />
                  </Link>

                  <Link
                    to="/enquire"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-[14.5px] font-semibold theme-text theme-surface-raised hover:border-[var(--accent)] border theme-border rounded-full transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 theme-accent" />
                  </Link>
                </div>
              </div>

              {/* Bottom 4 Studio Service Pillars Strip inside Cover Card */}
              <div className="pt-5 border-t theme-border grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/solutions#${service.id}`}
                    className="group space-y-1 p-2.5 rounded-2xl theme-surface-raised border border-transparent hover:border-[var(--accent)] transition-colors"
                  >
                    <p className="font-mono text-[11px] theme-accent font-semibold">
                      {service.number}
                    </p>
                    <p className="text-xs font-semibold theme-text group-hover:theme-accent transition-colors leading-snug">
                      {service.title}
                    </p>
                  </Link>
                ))}
              </div>
            </MotionReveal>

            {/* Right Identity, Proof & Quiet 3D Studio Guide Card (5 Columns) */}
            <MotionReveal
              delay={0.05}
              className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between gap-5"
            >
              {/* Top Identity & Availability Header */}
              <div className="space-y-3 border-b theme-border pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                      Studio Signature &amp; Proof
                    </p>
                    <h2 className="font-display text-2xl theme-text mt-0.5">
                      {PROFILE_CONFIG.fullName}
                    </h2>
                    <p className="text-xs theme-text-muted mt-0.5">
                      {PROFILE_CONFIG.availability.responseWindow}
                    </p>
                  </div>
                  <Link
                    to="/work/reframe"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6B2635]/15 border border-[#6B2635]/40 font-mono text-[11px] theme-accent font-semibold shrink-0"
                  >
                    <Award className="w-3.5 h-3.5 theme-accent-secondary" />
                    <span>1st Place · ZERO² 2026</span>
                  </Link>
                </div>

                {/* Verified Experience & Practice Strip */}
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] theme-text-muted">
                  <span className="px-2.5 py-1 rounded-full theme-surface-raised border theme-border theme-text">
                    ResolX.ai · AI Solutioning
                  </span>
                  <span className="px-2.5 py-1 rounded-full theme-surface-raised border theme-border theme-text">
                    CareerWithDishani · Research
                  </span>
                  <span className="px-2.5 py-1 rounded-full theme-surface-raised border theme-border">
                    New Delhi (INR)
                  </span>
                </div>
              </div>

              {/* Quiet 3D Studio Guide Signature Companion (No Debug Pose Buttons) */}
              <div
                data-testid="hero-studio-guide-card"
                className="bento-card-raised p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[175px]">
                    {mountGuide ? (
                      <Suspense
                        fallback={<StudioGuideStaticFallback className="h-[195px] w-full" />}
                      >
                        <LazyStudioGuide
                          animation={currentGuideAnimation}
                          src="/assets/3d/studio-guide.glb"
                          fallbackSrc="/assets/3d/studio-guide-fallback.png"
                          className="h-[195px] w-full"
                          ariaLabel="Animated 3D digital studio guide in the homepage hero"
                          onWelcomeComplete={() => setWelcomeCompleted(true)}
                        />
                      </Suspense>
                    ) : (
                      <StudioGuideStaticFallback className="h-[195px] w-full" />
                    )}
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] theme-accent font-semibold uppercase tracking-wider">
                      Interactive 3D Guide
                    </span>
                    <span
                      data-testid="studio-guide-active-state"
                      className="sr-only"
                    >
                      {currentGuideAnimation}
                    </span>
                  </div>
                  <p className="font-hand text-xl theme-accent-secondary leading-tight">
                    “Welcome to the studio—look around at the stories, live apps, and research.”
                  </p>
                  <p className="text-xs theme-text-muted leading-relaxed">
                    You collaborate directly with the person researching the problem, shaping the
                    narrative, and writing the code.
                  </p>
                </div>
              </div>

              {/* Three Verified Studio Proof Metrics (No Fabricated Claims) */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bento-card-raised p-3.5 space-y-1">
                  <p className="font-display text-xl sm:text-2xl theme-accent tabular-nums">
                    1st Place
                  </p>
                  <p className="font-mono text-[10px] theme-text-muted leading-snug">
                    REVIVEX · ZERO² 2026 (RE:FRAME)
                  </p>
                </div>
                <div className="bento-card-raised p-3.5 space-y-1">
                  <p className="font-display text-xl sm:text-2xl theme-text tabular-nums">
                    5 Live Apps
                  </p>
                  <p className="font-mono text-[10px] theme-text-muted leading-snug">
                    Deployed Web &amp; AI Tools on Vercel
                  </p>
                </div>
                <div className="bento-card-raised p-3.5 space-y-1">
                  <p className="font-display text-xl sm:text-2xl theme-accent-secondary tabular-nums">
                    9.10 CGPA
                  </p>
                  <p className="font-mono text-[10px] theme-text-muted leading-snug">
                    BCA at IITM (GGSIPU) · 2 Internships
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* 3. Quick Project Highlights (Circular Story Highlights) + Capabilities Marquee */}
          <MotionReveal delay={0.08}>
            <StoryHighlights showMarquee={true} />
          </MotionReveal>
        </div>
      </section>

      {/* 2. Featured Work Bento — RE:FRAME (1st Place · REVIVEX · ZERO² 2026) */}
      <section
        id="featured-reframe"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-5 border-b theme-border">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider theme-accent font-semibold">
                  <Award className="w-4 h-4 theme-accent-secondary" />
                  <span>Featured Work · 1st Place · REVIVEX · ZERO² 2026</span>
                </span>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Collaborative Product Concept &amp; 15-Slide Revival Strategy
                </span>
              </div>
              <h2
                className="font-display theme-text leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.25rem)' }}
              >
                RE:FRAME — Reimagining Smart Glasses Around Calm, Heads-Up Clarity
              </h2>
              <p className="text-base theme-text-muted leading-relaxed">
                An independent competition product concept examining why 2014 Google Glass failed
                ($1,500 price, cyborg aesthetics, surveillance anxiety, and notification overload)
                and proposing a modular <strong className="theme-text">₹39,999</strong> everyday
                eyewear ecosystem powered by the <strong className="theme-text">Focus Engine</strong>.
              </p>
            </div>

            <Link
              to="/work/reframe"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-[14.5px] font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              <span>Read Full RE:FRAME Story &amp; 15-Slide Deck</span>
              <ArrowRight className="w-4 h-4 text-[#D9B873]" />
            </Link>
          </MotionReveal>

          {/* Asymmetric 12-Column RE:FRAME Story Bento: Single Video Showcase (7 cols) + Role, Credits & Genuine Event Photos (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
            <MotionReveal className="lg:col-span-7">
              <HeroVideoShowcase variant="hero" />
            </MotionReveal>

            <MotionReveal delay={0.06} className="lg:col-span-5 space-y-4">
              {/* Role, Collaborator Attribution & Unbuilt Concept Transparency Card */}
              <div className="bento-card p-6 space-y-4">
                <div className="flex items-center justify-between border-b theme-border pb-3">
                  <span className="font-mono text-xs theme-accent font-semibold inline-flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Role &amp; Team Attribution</span>
                  </span>
                  <span className="font-mono text-[11px] theme-accent-secondary">
                    Team Product Concept
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm theme-text leading-relaxed">
                  <p>
                    <strong className="font-semibold">Akshit Sukhija (Primary Contribution):</strong>{' '}
                    Led the 2014 Google Glass limitation diagnosis, wearables market teardown,
                    RE:FRAME product architecture, Focus Engine notification filter logic, 5-pillar
                    revival strategy, and ₹39,999 pricing model.
                  </p>
                  <p className="theme-text-muted">
                    <strong className="theme-text font-semibold">
                      Adyot Ohri (Teammate &amp; Co-Presenter):
                    </strong>{' '}
                    Co-presented the winning REVIVEX pitch on stage at ZERO² 2026 and edited the
                    30-second concept film.
                  </p>
                </div>

                <div className="bento-card-raised px-4 py-2.5 flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 theme-accent-secondary font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Special Video Credit: Adyot Ohri</span>
                  </span>
                  <Link
                    to="/work/reframe#slide-deck-gallery"
                    className="theme-accent hover:underline font-semibold"
                  >
                    15 Slides →
                  </Link>
                </div>
              </div>

              {/* Genuine Award & Stage Photographs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/work/reframe#award-and-team"
                  className="polaroid-frame group block space-y-2.5"
                >
                  <div className="rounded-[18px] overflow-hidden border theme-border bg-[#171516] h-36">
                    <img
                      src="/assets/aistudio/Award_Photo_a60e7a36.png"
                      alt="REVIVEX 1st Position Trophy and Certificate at ZERO² 2026"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-1">
                    <p className="font-mono text-[11px] theme-accent font-semibold">
                      Verified Trophy &amp; Certificate
                    </p>
                    <p className="text-xs theme-text font-medium truncate">
                      1st Position · REVIVEX (IITM)
                    </p>
                  </div>
                </Link>

                <Link
                  to="/work/reframe#award-and-team"
                  className="polaroid-frame group block space-y-2.5"
                >
                  <div className="rounded-[18px] overflow-hidden border theme-border bg-[#171516] h-36">
                    <img
                      src="/assets/aistudio/Winning_Photo_5d3b58d1.png"
                      alt="Akshit Sukhija and Adyot Ohri receiving 1st Place at ZERO² 2026"
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-1">
                    <p className="font-mono text-[11px] theme-accent-secondary font-semibold">
                      Stage Presentation Photo
                    </p>
                    <p className="text-xs theme-text font-medium truncate">
                      Akshit Sukhija &amp; Adyot Ohri
                    </p>
                  </div>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 4. Selected Work Wall — Visual-First Polaroid / Paper Bento Gallery */}
      <section
        id="selected-work"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border bg-ivory-grid"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b theme-border">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                  Selected Work Wall · Live Web Systems, AI Tools &amp; BI Studies
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Real screenshots, documented roles &amp; verified outcomes
                </span>
              </div>
              <h2
                className="font-display theme-text leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)' }}
              >
                Shipped Web Applications, Deterministic AI Workflows &amp; Data Studies
              </h2>
              <p className="text-sm sm:text-base theme-text-muted leading-relaxed">
                Alongside creative product concepts like RE:FRAME, explore live deployed web
                applications, automated PDF risk engines, and source-backed customer retention
                studies.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-full font-mono text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>View All Work &amp; Research Studies</span>
              <ArrowRight className="w-4 h-4 text-[#D9B873]" />
            </Link>
          </MotionReveal>

          {/* Polaroid Bento Wall Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] items-stretch">
            {selectedWallProjects.map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.04} className="flex">
                <ProjectCard project={project} compact />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Studio Services — Four Compact Outcome-Led Cards with Expandable Accordions + ServiceComparison */}
      <section
        id="studio-services"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b theme-border">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold tracking-wider uppercase">
                  Studio Services · What We Create
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Strategy, content, websites &amp; AI under one roof
                </span>
              </div>
              <h2
                className="font-display theme-text leading-tight"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)' }}
              >
                Four Outcome-Led Services Built for Founders &amp; Product Teams
              </h2>
              <p className="text-sm sm:text-base theme-text-muted leading-relaxed">
                Work directly with the person researching your category, shaping the narrative, and
                engineering the digital system—without agency hand-off friction.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] text-xs font-mono font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>Explore Services &amp; Solution Finder</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {SERVICES.map((service, index) => {
              const isOpen = !!expandedServiceIds[service.id];
              return (
                <MotionReveal
                  key={service.id}
                  delay={index * 0.04}
                  className="bento-card p-6 sm:p-7 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="theme-accent font-semibold">
                        {service.number} · {service.targetAudience}
                      </span>
                      <span className="theme-accent-secondary">
                        {service.plainTagline.split(',')[0]}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl theme-text">
                      {service.title}
                    </h3>

                    <p className="text-sm theme-text-muted leading-relaxed">
                      {service.description}
                    </p>

                    {/* Expandable "See what is included" Accordion */}
                    <div className="pt-2 border-t theme-border">
                      <button
                        type="button"
                        onClick={() => toggleServiceAccordion(service.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between py-1.5 font-mono text-xs theme-text hover:theme-accent cursor-pointer"
                      >
                        <span className="font-semibold">
                          {isOpen ? 'Hide included deliverables' : 'See what is included'}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 theme-accent" />
                        ) : (
                          <ChevronDown className="w-4 h-4 theme-text-muted" />
                        )}
                      </button>

                      {isOpen && (
                        <ul className="mt-2.5 space-y-1.5 bento-card-raised p-4 text-xs theme-text">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2 leading-relaxed">
                              <span className="font-mono theme-accent font-semibold">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t theme-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="theme-text-muted">
                      Proof:{' '}
                      <strong className="theme-text font-medium">
                        {service.portfolioProof.map((p) => p.title).join(' · ')}
                      </strong>
                    </span>
                    <Link
                      to={`/solutions#${service.id}`}
                      className="theme-accent font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Full Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

          {/* Side-by-Side Service Tier Comparison: Data Intelligence vs Product Prototyping */}
          <MotionReveal delay={0.06}>
            <ServiceComparison />
          </MotionReveal>
        </div>
      </section>

      {/* 6. Studio Process Strip: Discover · Define · Create · Deliver */}
      <section
        id="studio-process"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b theme-border">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                  How We Work · Four Clear Stages
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — No black-box handoffs
                </span>
              </div>
              <h2
                className="font-display theme-text"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Discover · Define · Create · Deliver
              </h2>
              <p className="text-sm sm:text-base theme-text-muted">
                A transparent four-stage workflow from initial research and story framing to
                shipping the finished presentation, website, or AI tool.
              </p>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 font-mono text-xs theme-accent font-semibold hover:underline whitespace-nowrap shrink-0"
            >
              <span>Explore Full Studio Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {PROCESS_STAGES.map((stage) => (
              <div
                key={stage.stepNumber}
                className="bento-card p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs theme-accent font-semibold">
                    {stage.shortLabel}
                  </span>
                  <h3 className="font-display text-2xl theme-text">
                    {stage.title.split('—')[0].trim()}
                  </h3>
                  <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                    {stage.clientExperience}
                  </p>
                </div>
                <p className="font-mono text-[11px] theme-accent-secondary pt-3 border-t theme-border">
                  {stage.keyPrinciple}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Preview Bento — Genuine Portrait, Story & Verified Experience */}
      <section
        id="about-preview"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border bg-ivory-grid"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
          <MotionReveal className="lg:col-span-7 bento-card p-6 sm:p-9 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                  About the Builder · Direct 1-on-1 Practice
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Research discipline + engineering execution
                </span>
              </div>
              <h2
                className="font-display theme-text leading-tight"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}
              >
                One Person Who Researches the Problem, Shapes the Story &amp; Builds the System
              </h2>
            </div>

            <p className="text-base theme-text-muted leading-relaxed">
              {PROFILE_CONFIG.extendedBio}
            </p>

            {/* Verified Experience & Education Bento Mini-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              {VERIFIED_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="bento-card-raised p-4 space-y-1.5">
                  <p className="font-mono text-[11px] theme-accent font-semibold">
                    {exp.organisation}
                  </p>
                  <p className="font-display text-lg theme-text leading-snug">{exp.role}</p>
                  <p className="text-xs theme-text-muted leading-relaxed line-clamp-3">
                    {exp.plainSummary}
                  </p>
                </div>
              ))}

              <div className="bento-card-raised p-4 space-y-1.5">
                <p className="font-mono text-[11px] theme-accent-secondary font-semibold">
                  {VERIFIED_ACADEMIC_RECORD.institution}
                </p>
                <p className="font-display text-lg theme-text leading-snug">
                  BCA · {VERIFIED_ACADEMIC_RECORD.cgpa} CGPA
                </p>
                <p className="text-xs theme-text-muted leading-relaxed">
                  {VERIFIED_ACADEMIC_RECORD.affiliation} ({VERIFIED_ACADEMIC_RECORD.aggregatePercentage}{' '}
                  aggregate).
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-full text-xs font-mono font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] transition-colors"
              >
                <span>Read Full Bio &amp; Credentials</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
              </Link>
              <Link
                to="/enquire"
                className="inline-flex items-center gap-1.5 font-mono text-xs theme-accent font-semibold hover:underline"
              >
                <span>Work Directly With Akshit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06} className="lg:col-span-5">
            <StudioPortrait variant="hero" showQuickContacts={true} />
          </MotionReveal>
        </div>
      </section>

      {/* 8. Editorial Research & Insights Preview */}
      <section
        id="proof-insights"
        className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-5 border-b theme-border">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
                  Insights &amp; Perspectives
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Grounded in real datasets &amp; studio builds
                </span>
              </div>
              <h2
                className="font-display theme-text"
                style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}
              >
                Notes on Brand Strategy, Product Discovery &amp; Applied AI
              </h2>
              <p className="text-sm sm:text-base theme-text-muted">
                Original writing connecting brand perception, customer behaviour data, and practical
                software engineering.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs theme-accent font-semibold hover:underline whitespace-nowrap shrink-0"
            >
              <span>Read All {INSIGHT_NOTES.length} Research Notes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {INSIGHT_NOTES.slice(0, 3).map((note) => (
              <Link
                key={note.id}
                to="/insights"
                className="bento-card-interactive p-6 flex flex-col justify-between gap-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs theme-accent-secondary">
                    <span>{note.category}</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl theme-text group-hover:theme-accent transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                    {note.thesis}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs theme-accent font-semibold pt-3 border-t theme-border">
                  <span>Read research note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together FAQ */}
      <StudioFaqSection showCtaLink={true} />

      {/* Final Wine Bento CTA Panel */}
      <CtaSection />
    </div>
  );
}
