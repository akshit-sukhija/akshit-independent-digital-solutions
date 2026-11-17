import { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Sparkles,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { StudioFaqSection } from '../components/StudioFaqSection';
import { CtaSection } from '../components/CtaSection';
import { VideoHero } from '../components/VideoHero';
import { HeroVideoShowcase } from '../components/HeroVideoShowcase';
import { ServiceComparison } from '../components/ServiceComparison';
import {
  PROFILE_CONFIG,
  PROJECTS,
  SERVICES,
  PROCESS_STAGES,
  INSIGHT_NOTES,
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
  // Feature 3 core engineered systems alongside the hero RE:FRAME showcase
  const featuredProjects = PROJECTS.filter((p) => p.slug !== 'reframe').slice(0, 3);

  // Defer mounting LazyStudioGuide until after initial page render
  const [mountGuide, setMountGuide] = useState(false);
  const [welcomeCompleted, setWelcomeCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState<HomepageSectionKey>('hero');
  const [manualClipOverride, setManualClipOverride] = useState<StudioGuideAnimation | null>(null);

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
      { id: 'studio-services', key: 'services' },
      { id: 'selected-work', key: 'work' },
      { id: 'studio-process', key: 'process' },
      { id: 'proof-insights', key: 'insights' },
    ];

    const ratios = new Map<HomepageSectionKey, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = sectionMapping.find((m) => m.id === entry.target.id);
          if (!match) return;
          ratios.set(match.key, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestSection: HomepageSectionKey | null = null;
        let bestRatio = 0;

        ratios.forEach((ratio, key) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestSection = key;
          }
        });

        if (bestSection && bestRatio >= 0.12) {
          setManualClipOverride(null);
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

  const currentGuideAnimation: StudioGuideAnimation =
    manualClipOverride ?? resolveStudioGuideAnimation(activeSection, welcomeCompleted);

  return (
    <div>
      <PageMeta
        title="AKSHIT SUKHIJA — Independent Digital Content & Solutions Studio"
        description="AKSHIT SUKHIJA | Independent Digital Content & Solutions Studio. Creative ideas. Clear stories. Digital experiences that work."
      />

      {/* 1. Homepage Hero: Background VideoHero + Studio Positioning + RE:FRAME Video Showcase + Supporting 3D Studio Guide */}
      <section
        id="hero-welcome"
        className="relative bg-[#0B0E14] border-b border-[#252C3D] pt-8 pb-16 sm:pt-10 sm:pb-20 px-6 overflow-hidden"
      >
        {/* Background VideoHero positioned behind hero content using z-0 */}
        <VideoHero />

        {/* Subtle radial blue/cyan & gold ambient studio glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 z-0 w-[640px] h-[640px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(212,174,92,0.12) 55%, transparent 75%)',
          }}
        />

        <div className="max-w-[1240px] mx-auto relative z-10 space-y-8">
          {/* Primary First-Fold Grid: Studio Positioning (Left) + Front-Page Video Showcase (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Studio Positioning, Supporting 3D Studio Guide Companion & Primary Actions */}
            <MotionReveal className="lg:col-span-5 space-y-6 pt-1">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#38BDF8] uppercase">
                    {PROFILE_CONFIG.name}
                  </span>
                  <span aria-hidden="true" className="text-[#252C3D]">
                    /
                  </span>
                  <span className="font-mono text-xs text-[#E6D3A7]">
                    {PROFILE_CONFIG.roleSubtitle}
                  </span>
                </div>

                {/* Single Scannable Trust Cue */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131722] border border-[#252C3D] text-xs font-mono text-[#D4AE5C]">
                  <Award className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>1st Place · REVIVEX · ZERO² 2026 · Featured Concept Showcase</span>
                </div>

                <h1
                  className="font-display text-[#F4F0E8] leading-[1.04] tracking-tight"
                  style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)' }}
                >
                  Creative ideas. Clear stories. Digital experiences that work.
                </h1>

                <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed">
                  An independent studio combining{' '}
                  <strong className="text-[#F4F0E8] font-medium">brand storytelling</strong>,{' '}
                  <strong className="text-[#F4F0E8] font-medium">visual content production</strong>,{' '}
                  <strong className="text-[#F4F0E8] font-medium">custom websites</strong>, and{' '}
                  <strong className="text-[#F4F0E8] font-medium">
                    AI-powered digital solutions
                  </strong>{' '}
                  for founders, brands, and product teams.
                </p>
              </div>

              {/* Primary CTA Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/enquire"
                  className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-[#F4F0E8] bg-[#131722] border border-[#252C3D] hover:border-[#D4AE5C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AE5C]" />
                </Link>

                <Link
                  to="/work/reframe"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#38BDF8] px-1.5 py-2 transition-colors"
                >
                  <span>Explore RE:FRAME</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Supporting Hero Visual: 3D Studio Guide Companion (Non-overlapping, pointer-events-none canvas) */}
              <div
                data-testid="hero-studio-guide-card"
                className="bg-[#131722] border border-[#252C3D] rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
              >
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[190px]">
                    {mountGuide ? (
                      <Suspense fallback={<StudioGuideStaticFallback className="h-[200px] w-full" />}>
                        <LazyStudioGuide
                          animation={currentGuideAnimation}
                          src="/assets/3d/studio-guide.glb"
                          fallbackSrc="/assets/3d/studio-guide-fallback.png"
                          className="h-[200px] w-full"
                          ariaLabel="Animated 3D digital studio guide in the homepage hero"
                          onWelcomeComplete={() => setWelcomeCompleted(true)}
                        />
                      </Suspense>
                    ) : (
                      <StudioGuideStaticFallback className="h-[200px] w-full" />
                    )}
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-[#38BDF8] uppercase tracking-wider">
                      Studio Guide · 3D Companion
                    </span>
                    <span
                      data-testid="studio-guide-active-state"
                      className="font-mono text-[10px] text-[#E6D3A7]"
                    >
                      {currentGuideAnimation}
                    </span>
                  </div>

                  <p className="text-xs text-[#F4F0E8] leading-relaxed">
                    Greets visitors on arrival, then responds as you explore{' '}
                    <span className="text-[#38BDF8]">Services &amp; Work</span> or reflect on{' '}
                    <span className="text-[#D4AE5C]">Process &amp; Insights</span>.
                  </p>

                  {/* Accessible HTML Pose Selector Buttons for Inspecting All 4 Clips */}
                  <div
                    role="group"
                    aria-label="Preview Studio Guide animations"
                    className="grid grid-cols-2 gap-1.5 pt-1"
                  >
                    {(
                      [
                        { clip: 'Wave - Welcome', short: '01 · Welcome' },
                        { clip: 'Idle - Gentle Breathing', short: '02 · Idle' },
                        { clip: 'Present - Showcase', short: '03 · Showcase' },
                        { clip: 'Think - Reflect', short: '04 · Reflect' },
                      ] as const
                    ).map(({ clip, short }) => {
                      const isActive = currentGuideAnimation === clip;
                      return (
                        <button
                          key={clip}
                          type="button"
                          onClick={() => setManualClipOverride(clip)}
                          aria-pressed={isActive}
                          className={`px-2.5 py-1.5 rounded-lg font-mono text-[10px] text-left border transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-[#38BDF8]/15 border-[#38BDF8] text-[#F4F0E8]'
                              : 'bg-[#0B0E14] border-[#252C3D] text-[#A6A9B8] hover:border-[#D4AE5C]/60 hover:text-[#F4F0E8]'
                          }`}
                        >
                          {short}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 4 Studio Pillars Strip */}
              <div className="pt-3 border-t border-[#252C3D] grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/solutions#${service.id}`}
                    className="group space-y-0.5"
                  >
                    <p className="font-mono text-[11px] text-[#38BDF8]">{service.number}</p>
                    <p className="text-xs font-medium text-[#F4F0E8] group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {service.title}
                    </p>
                  </Link>
                ))}
              </div>
            </MotionReveal>

            {/* Right Column: Front-Page Interactive Video Showcase — RE:FRAME */}
            <MotionReveal delay={0.06} className="lg:col-span-7 space-y-4">
              <HeroVideoShowcase variant="hero" />

              {/* Genuine Award & Team Thumbnail Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  to="/work/reframe#award-and-team"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#131722] border border-[#252C3D] hover:border-[#38BDF8]/60 transition-colors"
                >
                  <img
                    src="/assets/aistudio/Award_Photo_a60e7a36.png"
                    alt="REVIVEX 1st Position Trophy and Certificate at ZERO² 2026"
                    className="w-11 h-11 rounded-lg object-cover shrink-0 border border-[#252C3D]"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-[#D4AE5C] truncate">
                      Verified Trophy &amp; Certificate
                    </p>
                    <p className="text-xs text-[#F4F0E8] truncate">
                      1st Position · REVIVEX (IITM)
                    </p>
                  </div>
                </Link>

                <Link
                  to="/work/reframe#award-and-team"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#131722] border border-[#252C3D] hover:border-[#38BDF8]/60 transition-colors"
                >
                  <img
                    src="/assets/aistudio/Winning_Photo_5d3b58d1.png"
                    alt="Akshit Sukhija and Adyot Ohri receiving 1st Place at ZERO² 2026"
                    className="w-11 h-11 rounded-lg object-cover object-top shrink-0 border border-[#252C3D]"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-[#38BDF8] truncate">
                      Award Presentation &amp; Video Credit
                    </p>
                    <p className="text-xs text-[#F4F0E8] truncate">
                      Akshit Sukhija &amp; Adyot Ohri
                    </p>
                  </div>
                </Link>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Studio Services — Four Client-Focused Pillars + ServiceComparison (Warm Ivory Editorial Section) */}
      <section
        id="studio-services"
        className="bg-[#F5F1E8] text-[#0B0E14] border-b border-[#D4CBB8] py-20 px-6 bg-ivory-grid"
      >
        <div className="max-w-[1240px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4CBB8]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#0284C7] font-semibold tracking-wider uppercase">
                Studio Services · What We Create
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0B0E14] leading-tight">
                Storytelling, Content, Websites &amp; AI Solutions Under One Roof
              </h2>
              <p className="text-sm sm:text-base text-[#1E202E]/85 leading-relaxed">
                You work directly with the person researching the category, shaping the story, and
                engineering the digital experience—without agency bloat or disconnected hand-offs.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#F4F0E8] bg-[#0B0E14] hover:bg-[#1E202E] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore All 4 Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <MotionReveal
                key={service.id}
                delay={index * 0.05}
                className="bg-white/90 border border-[#D4CBB8] rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#0284C7] font-semibold">
                      Service {service.number}
                    </span>
                    <span className="text-[#7A5B14]">{service.plainTagline.split(',')[0]}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#0B0E14]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#1E202E] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-[#D4CBB8]/70 text-xs text-[#1E202E]/90">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="font-mono text-[#0284C7]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D4CBB8] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#7A5B14]">
                    Proof: {service.portfolioProof.map((p) => p.title).join(' · ')}
                  </span>
                  <Link
                    to={`/solutions#${service.id}`}
                    className="text-[#0284C7] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* Side-by-Side Service Tier Comparison: Data Intelligence vs Product Prototyping */}
          <MotionReveal delay={0.08}>
            <ServiceComparison variant="ivory" />
          </MotionReveal>
        </div>
      </section>

      {/* 3. Selected Work — Live Digital Experiences, AI Tools & Research */}
      <section
        id="selected-work"
        className="bg-[#0B0E14] border-b border-[#252C3D] py-20 px-6"
      >
        <div className="max-w-[1240px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#252C3D]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
                Selected Work · Engineered Systems &amp; Case Studies
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F4F0E8]">
                Real Websites, AI Workflows &amp; Research Studies
              </h2>
              <p className="text-sm sm:text-base text-[#A6A9B8]">
                Alongside creative product concepts like RE:FRAME, explore live deployed web
                applications, automated reporting systems, and source-backed data studies.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#38BDF8] hover:text-[#F4F0E8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Complete Selected Work Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>

          {/* Curated Categories Navigation Strip */}
          <div className="pt-8 border-t border-[#252C3D] grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#131722] border rounded-2xl p-6 md:p-8">
            <div className="md:col-span-7 space-y-2">
              <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wide inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore the Full Studio Portfolio</span>
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8]">
                Live Prototypes, Research Studies &amp; Product Concepts
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                Browse additional live applications (Clarity Redemption AI, SIGNAL – Prompt Forge,
                InsightForgeAI, Lureline), econometric &amp; retention studies, and strategic
                product teardowns on the Work page.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap md:justify-end gap-3">
              <Link
                to="/work#selected-projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors"
              >
                <span>01 · Selected Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/work#research-analytics"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F4F0E8] bg-[#0B0E14] border border-[#252C3D] hover:border-[#38BDF8] rounded-lg transition-colors"
              >
                <span>02 · Research &amp; Analytics</span>
              </Link>
              <Link
                to="/work#product-concepts"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F4F0E8] bg-[#0B0E14] border border-[#252C3D] hover:border-[#38BDF8] rounded-lg transition-colors"
              >
                <span>03 · Product Concepts</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Studio Process Preview: Discover, Define, Create, Deliver */}
      <section
        id="studio-process"
        className="bg-[#131722] border-b border-[#252C3D] py-20 px-6"
      >
        <div className="max-w-[1240px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#252C3D]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wider">
                How We Work · Four Clear Stages
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                Discover · Define · Create · Deliver
              </h2>
              <p className="text-sm text-[#A6A9B8]">
                A structured, transparent workflow from initial research and story framing to
                shipping the finished presentation, website, or AI tool.
              </p>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#38BDF8] hover:text-[#F4F0E8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Full Studio Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STAGES.map((stage) => (
              <div
                key={stage.stepNumber}
                className="bg-[#0B0E14] border border-[#252C3D] rounded-xl p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#38BDF8]">{stage.shortLabel}</span>
                  <h3 className="font-display text-2xl text-[#F4F0E8]">
                    {stage.title.split('—')[0].trim()}
                  </h3>
                  <p className="text-xs text-[#A6A9B8] leading-relaxed">
                    {stage.clientExperience}
                  </p>
                </div>
                <p className="font-mono text-[11px] text-[#E6D3A7] pt-3 border-t border-[#252C3D]">
                  {stage.keyPrinciple}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Research & Insights Preview (Warm Ivory Section) */}
      <section
        id="proof-insights"
        className="bg-[#F5F1E8] text-[#0B0E14] border-b border-[#D4CBB8] py-20 px-6"
      >
        <div className="max-w-[1240px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4CBB8]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#0284C7] font-semibold uppercase tracking-wide">
                Insights &amp; Perspectives
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0B0E14]">
                Articles on Brand Strategy, Product Discovery &amp; Applied AI
              </h2>
              <p className="text-sm sm:text-base text-[#1E202E]/85">
                Original writing connecting brand perception, customer behaviour data, and practical
                software engineering.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#0284C7] font-semibold hover:underline whitespace-nowrap shrink-0"
            >
              <span>Read All {INSIGHT_NOTES.length} Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_NOTES.slice(0, 3).map((note) => (
              <Link
                key={note.id}
                to="/insights"
                className="group border-t border-[#0B0E14]/30 pt-5 flex flex-col justify-between gap-4 hover:border-[#0284C7] transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs text-[#7A5B14]">
                    <span>{note.category}</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0B0E14] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs text-[#1E202E]/85 leading-relaxed">{note.thesis}</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#0284C7] font-medium">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Working Together FAQ */}
      <StudioFaqSection variant="dark" showCtaLink={true} />

      {/* 7. Clear Contact & Project Enquiry Invitation */}
      <CtaSection variant="dark" />
    </div>
  );
}
