import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  FileText,
  Sparkles,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { StudioFaqSection } from '../components/StudioFaqSection';
import { CtaSection } from '../components/CtaSection';
import {
  PROFILE_CONFIG,
  PROJECTS,
  SERVICES,
  PROCESS_STAGES,
  INSIGHT_NOTES,
} from '../data/studioData';

export function HomePage() {
  // Feature 3 core engineered systems alongside the hero RE:FRAME showcase
  const featuredProjects = PROJECTS.filter((p) => p.slug !== 'reframe').slice(0, 3);

  return (
    <div>
      <PageMeta
        title="AKSHIT SUKHIJA — Independent Digital Content & Solutions Studio"
        description="AKSHIT SUKHIJA | Independent Digital Content & Solutions Studio. Creative ideas. Clear stories. Digital experiences. Ideas worth noticing. Stories worth remembering. Digital experiences that work."
      />

      {/* 1. Homepage Hero: Studio Identity + RE:FRAME Primary Visual Showcase */}
      <section className="relative bg-[#0B0E14] border-b border-[#252C3D] pt-10 pb-20 px-6 overflow-hidden">
        {/* Subtle radial blue/cyan & gold ambient studio glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 w-[640px] h-[640px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(212,174,92,0.12) 55%, transparent 75%)',
          }}
        />

        <div className="max-w-[1240px] mx-auto relative z-10 space-y-12">
          {/* Top Studio Positioning & Hero Copy + Primary RE:FRAME Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Studio Positioning & Primary Actions */}
            <MotionReveal className="lg:col-span-6 space-y-7">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
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

                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#A6A9B8]">
                  Creative ideas. Clear stories. Digital experiences.
                </p>

                <h1
                  className="font-display text-[#F4F0E8] leading-[1.04] tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4.25rem)' }}
                >
                  Ideas worth noticing. Stories worth remembering. Digital experiences that work.
                </h1>

                <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed max-w-xl">
                  An independent studio combining <strong className="text-[#F4F0E8] font-medium">brand storytelling</strong>,{' '}
                  <strong className="text-[#F4F0E8] font-medium">visual content production</strong>,{' '}
                  <strong className="text-[#F4F0E8] font-medium">custom websites</strong>, and{' '}
                  <strong className="text-[#F4F0E8] font-medium">AI-powered digital solutions</strong> for founders, brands, and product teams.
                </p>
              </div>

              {/* Primary CTA Actions: Explore RE:FRAME & Start a Project */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  to="/work/reframe"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore RE:FRAME</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/enquire"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F4F0E8] bg-[#131722] border border-[#252C3D] hover:border-[#D4AE5C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AE5C]" />
                </Link>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#38BDF8] px-2 py-2 transition-colors"
                >
                  <span>Explore Studio Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4 Studio Pillars Strip */}
              <div className="pt-6 border-t border-[#252C3D] grid grid-cols-2 sm:grid-cols-4 gap-4">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    to={`/solutions#${service.id}`}
                    className="group space-y-1"
                  >
                    <p className="font-mono text-[11px] text-[#38BDF8]">{service.number}</p>
                    <p className="text-xs font-medium text-[#F4F0E8] group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {service.title}
                    </p>
                  </Link>
                ))}
              </div>
            </MotionReveal>

            {/* Right Column: Featured Visual Showcase — RE:FRAME */}
            <MotionReveal delay={0.08} className="lg:col-span-6">
              <div className="bg-[#131722] border border-[#28334A] rounded-2xl overflow-hidden shadow-2xl">
                {/* Top Recognition Bar */}
                <div className="px-5 py-3.5 bg-[#0B0E14]/90 border-b border-[#252C3D] flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs font-medium">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>1st Place · REVIVEX · ZERO² 2026</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A6A9B8]">
                    Featured Studio Concept Showcase
                  </span>
                </div>

                {/* Main RE:FRAME Hero Image */}
                <Link to="/work/reframe" className="block relative group overflow-hidden bg-[#0B0E14]">
                  <img
                    src="/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg"
                    alt="RE:FRAME — Smart Glasses, A More Focused You concept showcase"
                    className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-500"
                  />
                </Link>

                {/* Caption, Studio Context Note & Supporting Proof Strip */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-mono text-xs text-[#38BDF8]">
                        RE:FRAME · Smart Glasses Product Strategy &amp; Visual Concept
                      </p>
                      <h2 className="font-display text-2xl text-[#F4F0E8]">
                        Reimagining Google Glass Around a Contextual Focus Engine
                      </h2>
                    </div>
                    <a
                      href="/assets/aistudio/REFRAME_Smart_Glasses_Product_Concept_97e4e1df.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0E14] border border-[#252C3D] hover:border-[#38BDF8] font-mono text-xs text-[#E6D3A7] shrink-0 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>15-Slide Deck (PDF)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <p className="text-xs text-[#A6A9B8] leading-relaxed">
                    An independent, unbuilt product concept illustrating how our studio approaches
                    competitive research, product ecosystem architecture, and visual storytelling.
                    Presented by Akshit Sukhija &amp; Adyot Ohri (<span className="text-[#E6D3A7]">Special Video Credit: Adyot Ohri</span>).
                  </p>

                  {/* Genuine Award & Team Thumbnail Strip */}
                  <div className="pt-3 border-t border-[#252C3D] grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link
                      to="/work/reframe#award-and-team"
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0B0E14] border border-[#252C3D] hover:border-[#38BDF8]/60 transition-colors"
                    >
                      <img
                        src="/assets/aistudio/Award_Photo_a60e7a36.png"
                        alt="REVIVEX 1st Position Trophy and Certificate at ZERO² 2026"
                        className="w-12 h-12 rounded-lg object-cover shrink-0 border border-[#252C3D]"
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
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0B0E14] border border-[#252C3D] hover:border-[#38BDF8]/60 transition-colors"
                    >
                      <img
                        src="/assets/aistudio/Winning_Photo_5d3b58d1.png"
                        alt="Akshit Sukhija and Adyot Ohri receiving 1st Place at ZERO² 2026"
                        className="w-12 h-12 rounded-lg object-cover object-top shrink-0 border border-[#252C3D]"
                      />
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] text-[#38BDF8] truncate">
                          Award Presentation
                        </p>
                        <p className="text-xs text-[#F4F0E8] truncate">
                          Akshit Sukhija &amp; Adyot Ohri
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Studio Services — Four Client-Focused Pillars (Warm Ivory Editorial Section) */}
      <section className="bg-[#F5F1E8] text-[#0B0E14] border-b border-[#D4CBB8] py-20 px-6 bg-ivory-grid">
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
        </div>
      </section>

      {/* 3. Selected Work — Live Digital Experiences, AI Tools & Research */}
      <section className="bg-[#0B0E14] border-b border-[#252C3D] py-20 px-6">
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
      <section className="bg-[#131722] border-b border-[#252C3D] py-20 px-6">
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
      <section className="bg-[#F5F1E8] text-[#0B0E14] border-b border-[#D4CBB8] py-20 px-6">
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
