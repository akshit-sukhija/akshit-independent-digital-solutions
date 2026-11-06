import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { StudioPortrait } from '../components/StudioPortrait';
import { ProjectCard } from '../components/ProjectCard';
import { StudioFaqSection } from '../components/StudioFaqSection';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  PROFILE_CONFIG,
  PROJECTS,
  SERVICES,
  SUPPORTING_CAPABILITIES,
  INSIGHT_NOTES,
} from '../data/studioData';

export function HomePage() {
  const [showCodeProfile, setShowCodeProfile] = useState(false);
  const featuredProjects = PROJECTS.slice(0, 3);
  const secondaryProjects = PROJECTS.slice(3);

  return (
    <div>
      <PageMeta
        title="Good Ideas Deserve to Become Useful Solutions"
        description="AKSHIT SUKHIJA — Independent Digital & Product Solutions. I turn business problems and early ideas into useful digital solutions through research, data, AI and technology."
      />

      {/* 1. Expressive Hero — Understandable within 30 seconds */}
      <section className="relative bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-12 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <p className="font-mono text-xs text-[#D4AE5C] tracking-[0.14em] uppercase">
                  {PROFILE_CONFIG.name} · {PROFILE_CONFIG.roleSubtitle}
                </p>

                <h1
                  className="font-display text-[#F4F0E8] leading-[1.05] tracking-tight"
                  style={{ fontSize: 'clamp(2.85rem, 5.2vw, 4.65rem)' }}
                >
                  {BRAND_IDENTITY.heroHeadline}
                </h1>

                <p className="text-lg sm:text-xl text-[#E6D3A7] font-normal leading-relaxed max-w-2xl">
                  {PROFILE_CONFIG.shortBio}
                </p>
              </div>

              {/* Clean editorial summary of the 3 Core Capabilities (open rules, not boxed cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#2C2F42]">
                {PROFILE_CONFIG.capabilities.core.map((cap, idx) => (
                  <div key={cap.title} className="space-y-1.5">
                    <p className="font-mono text-xs text-[#D4AE5C]">0{idx + 1}</p>
                    <h2 className="text-sm font-semibold text-[#F4F0E8]">{cap.title}</h2>
                    <p className="text-xs text-[#A6A9B8] leading-relaxed">{cap.summary}</p>
                  </div>
                ))}
              </div>

              {/* Primary Actions & Direct Contact */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Explore Selected Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F4F0E8] bg-[#161822] border border-[#2C2F42] hover:border-[#D4AE5C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Find the Right Solution</span>
                  </Link>
                  <Link
                    to="/enquire"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#F4F0E8] px-2 py-2 transition-colors"
                  >
                    <span>Contact Directly</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="pt-4 border-t border-[#2C2F42]/80 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#A6A9B8]">
                  <span className="inline-flex items-center gap-1.5 text-[#7AD992]">
                    <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
                    Independent Solo Studio
                  </span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                    className="text-[#E6D3A7] hover:text-[#F4F0E8] transition-colors"
                  >
                    {PROFILE_CONFIG.contact.emailPrimary.address}
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE_CONFIG.contact.phone.telHref}
                    className="text-[#A6A9B8] hover:text-[#F4F0E8] transition-colors"
                  >
                    {PROFILE_CONFIG.contact.phone.displayNumber}
                  </a>
                </div>
              </div>
            </MotionReveal>

            {/* Right: Genuine Personal Studio Portrait */}
            <MotionReveal delay={0.08} className="lg:col-span-5">
              <StudioPortrait variant="hero" showQuickContacts={true} />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Personal First-Person Introduction & Core vs. Supporting Capabilities (Warm Ivory Editorial Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-20 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs text-[#7A5B14] tracking-wide uppercase">
                How I Work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14] leading-tight">
                You work directly with the person researching the problem and building the software.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#1E202E] leading-relaxed">
              <p>{PROFILE_CONFIG.extendedBio}</p>
              <p className="text-sm text-[#1E202E]/85">
                Instead of handing you a generic template or hiding behind agency layers, I focus on
                three core areas—supported by product thinking, market research, and reliable
                software quality.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4A32C4] font-medium hover:underline"
                >
                  <span>More About My Background &amp; Tools</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setShowCodeProfile((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#0E0F14] bg-[#EAE3D5] border border-[#D4CBB8] hover:border-[#4A32C4] rounded-lg cursor-pointer transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#4A32C4]" />
                  <span>
                    {showCodeProfile
                      ? 'Hide Developer Summary'
                      : 'Optional: View Developer Summary (.ts)'}
                  </span>
                </button>
              </div>
            </div>
          </MotionReveal>

          {showCodeProfile && (
            <div className="bg-[#0E0F14] text-[#F4F0E8] border border-[#2C2F42] rounded-xl p-6 font-mono text-xs overflow-x-auto">
              <pre className="leading-relaxed text-[#E6D3A7]">{`export const studioIdentity = {
  brand: "AKSHIT SUKHIJA — Independent Digital & Product Solutions",
  positioning: "I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.",
  coreCapabilities: [
    "Data & Business Intelligence (Python, SQL, Power BI)",
    "AI & Workflow Automation (LLMs + Deterministic Rules)",
    "Digital Products & Prototyping (React 19, TypeScript, FastAPI, ReportLab)"
  ],
  supportingCapabilities: [
    "Product Strategy & UX",
    "Brand & Market Research",
    "Software Quality"
  ]
};`}</pre>
            </div>
          )}

          {/* Open Editorial Capability Layout (No heavy dark cards) */}
          <div className="pt-8 border-t border-[#D4CBB8] space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="space-y-3 border-t-2 border-[#0E0F14] pt-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-[#4A32C4] font-medium">
                      Core Capability {service.number}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#0E0F14]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#1E202E] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs font-mono text-[#7A5B14]">
                    <span>Proof: {service.portfolioProof[0]?.title}</span>
                    <Link
                      to="/solutions"
                      className="text-[#4A32C4] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Capabilities Strip */}
            <div className="pt-8 border-t border-[#D4CBB8] grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-[#7A5B14] uppercase tracking-wide">
                  Supporting Capabilities
                </p>
                <p className="text-xs text-[#1E202E]/80 mt-1">
                  Built into how I research, design, and test every project.
                </p>
              </div>
              <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {SUPPORTING_CAPABILITIES.map((cap) => (
                  <div key={cap.id} className="space-y-1.5">
                    <h4 className="font-display text-xl text-[#0E0F14]">{cap.title}</h4>
                    <p className="text-xs text-[#1E202E]/85 leading-relaxed">{cap.tagline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Work — Product-Thinking Case Studies */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2C2F42]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
                Selected Work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F4F0E8]">
                Projects Built Around Real Problems &amp; Evidence
              </h2>
              <p className="text-sm sm:text-base text-[#A6A9B8]">
                Each case study documents the problem, research context, user needs, alternatives
                considered, system design, and verified evidence.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AE5C] hover:text-[#F4F0E8] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All 5 Case Studies</span>
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

          {/* Supporting Prototypes */}
          <div className="pt-8 border-t border-[#2C2F42] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-[#A6A9B8]">
                  Additional Technical Prototypes
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8] mt-1">
                  Rule-Backed AI Compliance &amp; Investigation Workbench UI
                </h3>
              </div>
              <Link
                to="/work"
                className="font-mono text-xs text-[#D4AE5C] hover:underline"
              >
                Filter by stack or evidence type →
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {secondaryProjects.map((project, index) => (
                <MotionReveal key={project.slug} delay={index * 0.05} className="flex">
                  <ProjectCard project={project} compact />
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Editorial Research & Insights Preview (Warm Ivory Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4CBB8]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#4A32C4] font-medium uppercase tracking-wide">
                Research &amp; Insights
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14]">
                Notes on Marketing vs. Branding, Product Discovery &amp; Applied AI
              </h2>
              <p className="text-sm sm:text-base text-[#1E202E]/85">
                Clear, first-person writing connecting market research, customer behaviour data, and
                practical software engineering.
              </p>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#4A32C4] font-medium hover:underline whitespace-nowrap shrink-0"
            >
              <span>Read All {INSIGHT_NOTES.length} Research Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_NOTES.slice(0, 3).map((note) => (
              <Link
                key={note.id}
                to="/insights"
                className="group border-t border-[#0E0F14]/30 pt-5 flex flex-col justify-between gap-4 hover:border-[#4A32C4] transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-xs text-[#7A5B14]">
                    <span>{note.category}</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0E0F14] group-hover:text-[#4A32C4] transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs text-[#1E202E]/85 leading-relaxed">{note.thesis}</p>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#4A32C4]">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Together: Scope, Stages, Collaboration & Timelines FAQ */}
      <StudioFaqSection variant="dark" showCtaLink={true} />

      {/* 6. Clear Contact & Project Enquiry Invitation */}
      <CtaSection variant="dark" />
    </div>
  );
}
