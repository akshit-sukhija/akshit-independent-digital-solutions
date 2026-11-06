import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Mail,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { StudioPortrait } from '../components/StudioPortrait';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  PROFILE_CONFIG,
  SKILLS_MATRIX,
  VERIFIED_EXPERIENCE,
  VERIFIED_ACADEMIC_RECORD,
  PROJECTS,
  TECHNOLOGY_EXPLORER_ITEMS,
} from '../data/studioData';

export function AboutPage() {
  const [showCodeCard, setShowCodeCard] = useState(false);
  const [selectedToolId, setSelectedToolId] = useState<string>(TECHNOLOGY_EXPLORER_ITEMS[0].id);
  const activeTool =
    TECHNOLOGY_EXPLORER_ITEMS.find((t) => t.id === selectedToolId) ??
    TECHNOLOGY_EXPLORER_ITEMS[0];

  return (
    <div>
      <PageMeta
        title="About Akshit Sukhija — Independent Digital & Product Solutions"
        description="Learn how Akshit Sukhija works across research, data analysis, AI workflows, and custom software—backed by verified internships, academic credentials, and real projects."
      />

      {/* 1. Personal Story, Prominent Portrait & Verified Contact Channels */}
      <section className="bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-14 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <MotionReveal className="lg:col-span-7 space-y-6">
              <p className="font-mono text-xs text-[#D4AE5C] tracking-wider uppercase">
                {PROFILE_CONFIG.name} · {PROFILE_CONFIG.roleSubtitle}
              </p>
              <h1
                className="font-display text-[#F4F0E8] leading-[1.08]"
                style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)' }}
              >
                One person who researches the problem, analyses the data, and builds the working solution.
              </h1>
              <p className="text-lg text-[#E6D3A7] leading-relaxed">
                {BRAND_IDENTITY.positioningStatement}
              </p>
              <p className="text-base text-[#A6A9B8] leading-relaxed">
                {PROFILE_CONFIG.extendedBio}
              </p>

              {/* Verified Direct Contact Bar on About Page */}
              <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2C2F42] pb-3">
                  <span className="font-mono text-xs text-[#D4AE5C]">
                    Verified Contact &amp; Profiles
                  </span>
                  <span className="font-mono text-xs text-[#7AD992]">
                    {PROFILE_CONFIG.location}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <a
                    href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] text-[#F4F0E8] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#8B75FF] shrink-0" />
                    <span className="truncate">{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] text-[#E6D3A7] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#D4AE5C] shrink-0" />
                    <span className="truncate">{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.phone.telHref}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] text-[#F4F0E8] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4AE5C] shrink-0" />
                    <span>Call {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.phone.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#7AD992] text-[#7AD992] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] text-[#F4F0E8] transition-colors"
                  >
                    <span>LinkedIn ({PROFILE_CONFIG.contact.linkedin.handle})</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8B75FF]" />
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] text-[#E6D3A7] transition-colors"
                  >
                    <span>GitHub ({PROFILE_CONFIG.contact.github.handle})</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AE5C]" />
                  </a>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-4">
                <Link
                  to="/enquire"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setShowCodeCard((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono text-[#E6D3A7] bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg cursor-pointer transition-colors"
                >
                  <Code2 className="w-4 h-4 text-[#8B75FF]" />
                  <span>
                    {showCodeCard
                      ? 'Hide Code-Style Profile Card'
                      : 'Optional: Show Code-Style Profile Card'}
                  </span>
                </button>
              </div>

              {showCodeCard && (
                <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 font-mono text-xs overflow-x-auto">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#2C2F42] text-[#8B75FF]">
                    <span>akshit.config.ts</span>
                    <span>Solo Studio Operator</span>
                  </div>
                  <pre className="leading-relaxed text-[#F4F0E8]">{`export const operatorProfile = {
  name: "AKSHIT SUKHIJA",
  practice: "Independent Digital & Product Solutions",
  education: "BCA at IITM, affiliated with GGSIPU (CGPA: 9.10/10 · 85.026%)",
  internships: [
    "ResolX.ai — AI Solutioning Internship",
    "CareerWithDishani — Research & Insight Synthesis Internship"
  ],
  coreCapabilities: [
    "Data & Business Intelligence",
    "AI & Workflow Automation",
    "Digital Products & Prototyping"
  ],
  supportingCapabilities: [
    "Product Strategy & UX",
    "Brand & Market Research",
    "Software Quality"
  ]
};`}</pre>
                </div>
              )}
            </MotionReveal>

            {/* Right: Prominent StudioPortrait */}
            <MotionReveal delay={0.08} className="lg:col-span-5">
              <StudioPortrait variant="about" showQuickContacts={true} />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Verified Internship Experience (ResolX.ai & CareerWithDishani) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-20 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#4A32C4] font-medium uppercase tracking-wide">
              Professional &amp; Internship Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14]">
              Where Research Discipline Meets Practical AI Solutioning
            </h2>
            <p className="text-base text-[#1E202E] leading-relaxed">
              My approach combines structured research synthesis with hands-on AI workflow and
              software engineering.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERIFIED_EXPERIENCE.map((exp, idx) => (
              <MotionReveal
                key={exp.id}
                delay={idx * 0.05}
                className="bg-[#EAE3D5] border border-[#D4CBB8] rounded-2xl p-7 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#4A32C4] font-semibold">{exp.organisation}</span>
                    <span className="text-[#7A5B14]">{exp.periodLabel}</span>
                  </div>
                  <h3 className="font-display text-3xl text-[#0E0F14]">{exp.role}</h3>
                  <p className="text-sm text-[#1E202E] leading-relaxed">{exp.plainSummary}</p>
                  <ul className="space-y-2 text-xs text-[#1E202E] pt-2 border-t border-[#D4CBB8]">
                    {exp.keyContributions.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <span className="font-mono text-[#4A32C4]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-[11px] text-[#7A5B14] pt-3 border-t border-[#D4CBB8]">
                  {exp.privacyNote}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Technology Explorer (Demonstrated Project Use Cases — Zero Fake Percentages) */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-3">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
              Interactive Technology Explorer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              Tools I Use &amp; Where They Are Proven in Real Projects
            </h2>
            <p className="text-sm sm:text-base text-[#A6A9B8] leading-relaxed">
              Instead of arbitrary skill-bar percentages, click any technology below to inspect how
              I actually use it and which portfolio projects demonstrate it.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Selectable Technology Pills */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {TECHNOLOGY_EXPLORER_ITEMS.map((item) => {
                const isSelected = item.id === activeTool.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedToolId(item.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#161822] border-[#D4AE5C] text-[#F4F0E8]'
                        : 'bg-[#161822]/50 border-[#2C2F42] text-[#A6A9B8] hover:text-[#F4F0E8] hover:border-[#A6A9B8]'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#F4F0E8]">{item.tool}</p>
                      <p className="font-mono text-[11px] text-[#D4AE5C]">{item.category}</p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-[#D4AE5C] translate-x-0.5' : 'text-[#A6A9B8]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Demonstrated Use Cases & Connected Projects */}
            <div className="lg:col-span-7 bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 md:p-8 space-y-6">
              <div className="border-b border-[#2C2F42] pb-4 space-y-1.5">
                <p className="font-mono text-xs text-[#D4AE5C]">{activeTool.category}</p>
                <h3 className="font-display text-3xl text-[#F4F0E8]">{activeTool.tool}</h3>
                <p className="text-sm text-[#E6D3A7] leading-relaxed">{activeTool.whatIUseItFor}</p>
              </div>

              <div className="space-y-3">
                <p className="font-mono text-xs text-[#8B75FF] uppercase tracking-wide">
                  Demonstrated Project Use Cases
                </p>
                <ul className="space-y-3 text-sm text-[#F4F0E8]/90">
                  {activeTool.demonstratedUseCases.map((useCase) => (
                    <li
                      key={`${useCase.projectTitle}-${useCase.howItWasUsed}`}
                      className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-[#D4AE5C]">
                          {useCase.projectTitle}
                        </span>
                        {useCase.projectSlug && (
                          <Link
                            to={`/work/${useCase.projectSlug}`}
                            className="inline-flex items-center gap-1 font-mono text-xs text-[#8B75FF] hover:underline"
                          >
                            <span>Inspect Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">
                        {useCase.howItWasUsed}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Summary of Core Capability Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#2C2F42]">
            {SKILLS_MATRIX.map((group, idx) => (
              <MotionReveal
                key={group.category}
                delay={idx * 0.05}
                className="bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs text-[#8B75FF]">{group.category}</p>
                    <span className="font-mono text-[11px] text-[#E6D3A7]">
                      {group.skills.join(' · ')}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-[#F4F0E8]">{group.plainTitle}</h3>
                  <p className="text-sm text-[#A6A9B8] leading-relaxed">{group.summary}</p>
                </div>

                <div className="pt-3 border-t border-[#2C2F42]">
                  <p className="font-mono text-[11px] text-[#A6A9B8]">
                    Proven in: <span className="text-[#E6D3A7]">{group.appliedIn}</span>
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Verified Academic Record & Collaborator Credits */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Academic Record */}
          <MotionReveal className="lg:col-span-6 bg-[#161822] border border-[#2C2F42] rounded-2xl p-7 space-y-6">
            <div className="space-y-2 border-b border-[#2C2F42] pb-4">
              <p className="font-mono text-xs text-[#8B75FF]">
                03 · Verified Academic Credentials
              </p>
              <h2 className="font-display text-3xl text-[#F4F0E8]">
                {VERIFIED_ACADEMIC_RECORD.degree}
              </h2>
              <p className="text-xs text-[#E6D3A7]">
                {VERIFIED_ACADEMIC_RECORD.institution} · {VERIFIED_ACADEMIC_RECORD.affiliation}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4">
                <p className="font-mono text-xs text-[#A6A9B8]">Official CGPA</p>
                <p className="font-display text-3xl text-[#D4AE5C] tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.cgpa}
                </p>
              </div>
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4">
                <p className="font-mono text-xs text-[#A6A9B8]">Overall Aggregate</p>
                <p className="font-display text-3xl text-[#F4F0E8] tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.aggregatePercentage}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {VERIFIED_ACADEMIC_RECORD.semesterSgpas.map((sem) => (
                <div
                  key={sem.semester}
                  className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-3 text-center"
                >
                  <p className="font-mono text-[11px] text-[#A6A9B8]">{sem.semester}</p>
                  <p className="font-mono text-sm font-semibold text-[#F4F0E8] tabular-nums mt-1">
                    {sem.sgpa}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#A6A9B8] leading-relaxed">
              {VERIFIED_ACADEMIC_RECORD.contextNote}
            </p>
          </MotionReveal>

          {/* Collaborator Credits */}
          <MotionReveal delay={0.08} className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <p className="font-mono text-xs text-[#D4AE5C]">
                04 · Project Roles &amp; Co-Creator Credits
              </p>
              <h2 className="font-display text-3xl text-[#F4F0E8]">
                Honest Attribution Across Every Project
              </h2>
              <p className="text-xs text-[#A6A9B8] leading-relaxed">
                Where a project was built with a co-creator, I state my exact role and credit my
                collaborators clearly.
              </p>
            </div>

            <div className="space-y-3">
              {PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className="bg-[#161822] border border-[#2C2F42] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className="text-[#8B75FF]">
                        {project.indexNumber}. {project.title}
                      </span>
                      <span>·</span>
                      <span className="text-[#E6D3A7]">{project.documentedRole}</span>
                    </div>
                    <p className="text-xs text-[#A6A9B8]">{project.collaborators}</p>
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#D4AE5C] hover:text-[#8B75FF] shrink-0"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
