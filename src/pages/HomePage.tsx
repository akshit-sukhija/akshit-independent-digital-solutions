import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import {
  IntersectionBlueprintDiagram,
  AiRulesHumanDiagram,
  FiveStepProcessDiagram,
} from '../components/ArchitectureDiagram';
import { StudioPortrait } from '../components/StudioPortrait';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  PROFILE_CONFIG,
  PROJECTS,
  SERVICES,
  SUPPORTING_CAPABILITIES,
  VERIFIED_EXPERIENCE,
  VERIFIED_ACADEMIC_RECORD,
} from '../data/studioData';

export function HomePage() {
  const [showCodeProfile, setShowCodeProfile] = useState(false);
  const primaryProjects = PROJECTS.filter((p) => p.tier !== 'secondary');
  const secondaryProjects = PROJECTS.filter((p) => p.tier === 'secondary');

  return (
    <div>
      <PageMeta
        title="Good Ideas Deserve to Become Useful Solutions"
        description="Akshit | Independent Digital Solutions. I research problems, work with data and build practical digital solutions using AI and technology."
      />

      {/* 1. Expressive Hero — Personal Studio / Editorial Technology */}
      <section className="relative bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-12 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <MotionReveal className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161822] border border-[#2C2F42] font-mono text-xs text-[#E6D3A7]">
                <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
                <span>{PROFILE_CONFIG.availability.statusText}</span>
              </div>

              <div className="space-y-5">
                <p className="font-mono text-xs text-[#8B75FF] tracking-wide uppercase">
                  {PROFILE_CONFIG.studioTitle} · {PROFILE_CONFIG.designDirection}
                </p>

                <h1
                  className="font-display text-[#F4F0E8] leading-[1.06] tracking-tight"
                  style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)' }}
                >
                  {BRAND_IDENTITY.heroHeadline}
                </h1>

                <p className="text-lg sm:text-xl text-[#E6D3A7] font-normal leading-relaxed max-w-2xl">
                  {BRAND_IDENTITY.heroSupportingCopy}
                </p>

                <p className="text-base text-[#A6A9B8] leading-relaxed max-w-2xl">
                  {BRAND_IDENTITY.positioningStatement}
                </p>
              </div>

              {/* Signature 3-Pillar Motif */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-4">
                  <p className="font-mono text-xs text-[#8B75FF]">01 · Data &amp; Intelligence</p>
                  <p className="text-xs text-[#F4F0E8] font-medium mt-1">
                    Analytics, SQL &amp; Power BI dashboards
                  </p>
                </div>
                <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-4">
                  <p className="font-mono text-xs text-[#D4AE5C]">02 · AI &amp; Automation</p>
                  <p className="text-xs text-[#F4F0E8] font-medium mt-1">
                    Document readers &amp; rule-backed checks
                  </p>
                </div>
                <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-4">
                  <p className="font-mono text-xs text-[#7AD992]">03 · Digital Products</p>
                  <p className="text-xs text-[#F4F0E8] font-medium mt-1">
                    Prototypes, web apps &amp; PDF engines
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/enquire"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F4F0E8] bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Discuss a Project</span>
                  </Link>
                </div>

                <div className="pt-3 border-t border-[#2C2F42] flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[#A6A9B8]">
                  <span>Solo Independent Studio</span>
                  <span aria-hidden="true">·</span>
                  <a
                    href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                    className="text-[#E6D3A7] hover:text-[#8B75FF] transition-colors"
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

            {/* Right: Prominent Personal Studio Portrait */}
            <MotionReveal delay={0.08} className="lg:col-span-5">
              <StudioPortrait variant="hero" showQuickContacts={true} />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Concise Introduction & Capability Strip (Editorial Ivory Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-16 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs text-[#4A32C4] font-medium">
                01 · Personal Studio Introduction
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14] leading-tight">
                You talk directly to the person researching, designing, and building your solution.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#1E202E] leading-relaxed">
              <p>{PROFILE_CONFIG.extendedBio}</p>
              <p className="text-sm text-[#1E202E]/80">
                I do not pretend to be a large agency with sales reps or junior hand-offs. You
                get thoughtful research, clean data analysis, and working software built with
                personal care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4A32C4] font-medium hover:underline"
                >
                  <span>Read My Story &amp; Experience</span>
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
                      ? 'Hide Code-Style Profile'
                      : 'Optional: Show Code-Style Profile (For Developers)'}
                  </span>
                </button>
              </div>
            </div>
          </MotionReveal>

          {showCodeProfile && (
            <div className="bg-[#0E0F14] text-[#F4F0E8] border border-[#2C2F42] rounded-xl p-6 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2C2F42] text-[#8B75FF]">
                <span>studio-profile.ts — Optional Technical Summary</span>
                <span>Verified Profile</span>
              </div>
              <pre className="leading-relaxed text-[#E6D3A7]">{`const akshitStudio = {
  operator: "Akshit Sukhija (Independent Solo Studio)",
  philosophy: "Good ideas deserve to become useful solutions.",
  methodology: ["RESEARCH", "ANALYSIS", "AI & LOGIC", "SOFTWARE", "DELIVERY"],
  coreServices: ["Data & Intelligence", "AI & Automation", "Digital Products"],
  stack: {
    dataAndBI: ["Python", "Pandas", "NumPy", "SQL", "Power BI"],
    aiAndRules: ["Qwen2.5-7B", "ONNX Runtime / DirectML", "FAISS", "Deterministic Rules"],
    software: ["React 19", "TypeScript", "FastAPI", "Express", "SQLite", "ReportLab PDF"]
  },
  contact: {
    email: ["akshithere075@gmail.com", "akshitsukhija4@gmail.com"],
    phone: "+91 9873865213",
    linkedin: "https://www.linkedin.com/in/akshit-sukhija-/",
    github: "https://github.com/akshit-sukhija"
  }
};`}</pre>
            </div>
          )}
        </div>
      </section>

      {/* 3. What I Can Help Solve — Services & Problem-to-Solution Blueprint */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2C2F42]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#8B75FF]">
                02 · What I Can Help Solve
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F4F0E8]">
                Three Core Services &amp; Two Supporting Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[#A6A9B8]">
                Whether you have messy spreadsheets, repetitive document work, or an early product
                idea, every engagement focuses on a clear, practical outcome.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AE5C] hover:text-[#8B75FF] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Try the 3-Question Solution Finder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          {/* 3 Core Commercial Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICES.map((service, index) => (
              <MotionReveal
                key={service.id}
                delay={index * 0.05}
                className="bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF]/60 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#8B75FF] font-semibold">
                      Service {service.number}
                    </span>
                    <span className="text-[#E6D3A7]">Core Category</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8] leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#E6D3A7] leading-relaxed">
                    {service.plainTagline}
                  </p>

                  <p className="text-xs text-[#A6A9B8] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-[#2C2F42]">
                    <p className="font-mono text-xs text-[#D4AE5C] mb-2">What You Receive:</p>
                    <ul className="space-y-1.5 text-xs text-[#F4F0E8]">
                      {service.deliverables.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="font-mono text-[#8B75FF]">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2C2F42] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#A6A9B8]">
                    Proof: {service.portfolioProof.map((p) => p.title).join(', ')}
                  </span>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#D4AE5C] hover:text-[#8B75FF] whitespace-nowrap shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>

          {/* 2 Supporting Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORTING_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bg-[#161822]/70 border border-[#2C2F42] rounded-xl p-6 space-y-2.5"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8B75FF] inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AE5C]" />
                    Supporting Capability · {cap.number}
                  </span>
                  <span className="text-[#A6A9B8]">Built into projects</span>
                </div>
                <h3 className="font-display text-2xl text-[#F4F0E8]">{cap.title}</h3>
                <p className="text-xs text-[#E6D3A7]">{cap.tagline}</p>
                <p className="text-xs text-[#A6A9B8] leading-relaxed">{cap.whatIDo}</p>
              </div>
            ))}
          </div>

          {/* Interactive Problem-to-Solution Visual Diagram */}
          <MotionReveal>
            <IntersectionBlueprintDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* 4. Selected Flagship Projects */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2C2F42]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#8B75FF]">
                03 · Selected Work &amp; Verified Evidence
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F4F0E8]">
                Real Projects With Custom Architecture Diagrams
              </h2>
              <p className="text-sm sm:text-base text-[#A6A9B8]">
                Each project below shows what problem existed, how the solution works in plain
                English, and the verified code, live app, or technical report behind it.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#D4AE5C] hover:text-[#8B75FF] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Open Full Project Explorer (All 5 Projects)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="space-y-8">
            {primaryProjects.map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.05}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>

          {/* Secondary / Supporting Prototypes */}
          <div className="pt-8 border-t border-[#2C2F42] space-y-6">
            <div>
              <p className="font-mono text-xs text-[#8B75FF]">
                Additional Applied AI &amp; Workbench Prototypes
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8] mt-1">
                04. Contract Risk Governance Engine &amp; 05. Lureline
              </h3>
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

      {/* 5. Signature Working Process (RESEARCH -> ANALYSIS -> AI & LOGIC -> SOFTWARE -> DELIVERY) */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
          <MotionReveal>
            <AiRulesHumanDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* 6. Personal Introduction & Verified Credentials (Editorial Ivory Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D4CBB8]">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#4A32C4] font-medium">
                05 · Experience &amp; Supporting Credibility
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14]">
                Grounded in Real Internships, Research &amp; Engineering Discipline
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#4A32C4] font-medium hover:underline"
            >
              <span>View Full Profile &amp; Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VERIFIED_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#EAE3D5] border border-[#D4CBB8] rounded-xl p-6 space-y-3"
              >
                <p className="font-mono text-xs text-[#4A32C4] font-medium">
                  {exp.organisation} · {exp.category}
                </p>
                <h3 className="font-display text-2xl text-[#0E0F14]">{exp.role}</h3>
                <p className="text-xs text-[#1E202E] leading-relaxed">{exp.plainSummary}</p>
              </div>
            ))}

            <div className="bg-[#EAE3D5] border border-[#D4CBB8] rounded-xl p-6 space-y-3">
              <p className="font-mono text-xs text-[#7A5B14] font-medium">
                Academic Foundation · {VERIFIED_ACADEMIC_RECORD.institution}
              </p>
              <h3 className="font-display text-2xl text-[#0E0F14]">
                {VERIFIED_ACADEMIC_RECORD.degree}
              </h3>
              <p className="text-xs text-[#1E202E] leading-relaxed">
                {VERIFIED_ACADEMIC_RECORD.affiliation}. Official CGPA:{' '}
                <strong>{VERIFIED_ACADEMIC_RECORD.cgpa}</strong> (
                {VERIFIED_ACADEMIC_RECORD.aggregatePercentage} aggregate across Semesters I–IV).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Clear Project Enquiry Invitation */}
      <CtaSection variant="dark" />
    </div>
  );
}
