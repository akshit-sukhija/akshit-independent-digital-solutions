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
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
            <MotionReveal className="lg:col-span-7 bento-card p-6 sm:p-9 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs theme-accent font-semibold tracking-wider uppercase">
                  {PROFILE_CONFIG.name} · {PROFILE_CONFIG.roleSubtitle}
                </p>
                <span className="font-hand text-xl theme-accent-secondary">
                  — Solo studio operator in New Delhi
                </span>
              </div>

              <h1
                className="font-display theme-text leading-[1.06]"
                style={{ fontSize: 'clamp(2.35rem, 4vw, 3.65rem)' }}
              >
                One person who researches the problem, analyses the data, and builds the working
                solution.
              </h1>

              <p className="text-base sm:text-lg theme-accent-secondary font-medium leading-relaxed">
                {BRAND_IDENTITY.positioningStatement}
              </p>

              <p className="text-base theme-text-muted leading-relaxed">
                {PROFILE_CONFIG.extendedBio}
              </p>

              {/* Verified Direct Contact Bar on About Page */}
              <div className="bento-card-raised p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b theme-border pb-3">
                  <span className="font-mono text-xs theme-accent font-semibold">
                    Verified Contact &amp; Profiles
                  </span>
                  <span className="font-mono text-xs theme-accent-secondary">
                    {PROFILE_CONFIG.location}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                  <a
                    href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                    className="flex items-center gap-2.5 p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-text transition-colors"
                  >
                    <Mail className="w-4 h-4 theme-accent shrink-0" />
                    <span className="truncate">{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                    className="flex items-center gap-2.5 p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-accent-secondary transition-colors"
                  >
                    <Mail className="w-4 h-4 theme-accent-secondary shrink-0" />
                    <span className="truncate">{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.phone.telHref}
                    className="flex items-center gap-2.5 p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-text transition-colors"
                  >
                    <Phone className="w-4 h-4 theme-accent-secondary shrink-0" />
                    <span>Call {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.phone.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-accent transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-text transition-colors"
                  >
                    <span>LinkedIn ({PROFILE_CONFIG.contact.linkedin.handle})</span>
                    <ExternalLink className="w-3.5 h-3.5 theme-accent" />
                  </a>

                  <a
                    href={PROFILE_CONFIG.contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl theme-surface border theme-border hover:border-[var(--accent)] theme-accent-secondary transition-colors"
                  >
                    <span>GitHub ({PROFILE_CONFIG.contact.github.handle})</span>
                    <ExternalLink className="w-3.5 h-3.5 theme-accent-secondary" />
                  </a>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/enquire"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
                </Link>

                <button
                  type="button"
                  onClick={() => setShowCodeCard((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-4 py-3 min-h-[48px] text-xs font-mono theme-text theme-surface-raised border theme-border hover:border-[var(--accent)] rounded-full cursor-pointer transition-colors"
                >
                  <Code2 className="w-4 h-4 theme-accent" />
                  <span>
                    {showCodeCard
                      ? 'Hide Code-Style Profile Card'
                      : 'Optional: Show Code-Style Profile Card'}
                  </span>
                </button>
              </div>

              {showCodeCard && (
                <div className="bento-card-raised p-5 font-mono text-xs overflow-x-auto">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b theme-border theme-accent font-semibold">
                    <span>akshit.config.ts</span>
                    <span>Solo Studio Operator</span>
                  </div>
                  <pre className="leading-relaxed theme-text">{`export const operatorProfile = {
  name: "AKSHIT SUKHIJA",
  practice: "Independent Digital Content & Solutions Studio",
  education: "BCA at IITM, affiliated with GGSIPU (CGPA: 9.10/10 · 85.026%)",
  internships: [
    "ResolX.ai — AI Solutioning Internship",
    "CareerWithDishani — Research & Insight Synthesis Internship"
  ],
  coreCapabilities: [
    "Brand Strategy & Storytelling",
    "Digital Content & Creative Production",
    "Websites & Digital Experiences",
    "AI-Powered Digital Solutions"
  ]
};`}</pre>
                </div>
              )}
            </MotionReveal>

            {/* Right: Prominent StudioPortrait */}
            <MotionReveal delay={0.06} className="lg:col-span-5">
              <StudioPortrait variant="about" showQuickContacts={true} />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Verified Internship Experience (ResolX.ai & CareerWithDishani) */}
      <section className="theme-bg border-b theme-border py-16 sm:py-20 px-4 sm:px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-2.5">
            <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
              Professional &amp; Internship Experience
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              Where Research Discipline Meets Practical AI Solutioning
            </h2>
            <p className="text-base theme-text-muted leading-relaxed">
              My approach combines structured research synthesis with hands-on AI workflow and
              software engineering.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {VERIFIED_EXPERIENCE.map((exp, idx) => (
              <MotionReveal
                key={exp.id}
                delay={idx * 0.05}
                className="bento-card p-6 sm:p-8 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="theme-accent font-semibold">{exp.organisation}</span>
                    <span className="theme-accent-secondary">{exp.periodLabel}</span>
                  </div>
                  <h3 className="font-display text-3xl theme-text">{exp.role}</h3>
                  <p className="text-sm theme-text-muted leading-relaxed">{exp.plainSummary}</p>
                  <ul className="space-y-2 text-xs theme-text pt-3 border-t theme-border">
                    {exp.keyContributions.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <span className="font-mono theme-accent font-semibold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-mono text-[11px] theme-accent-secondary pt-3 border-t theme-border">
                  {exp.privacyNote}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Technology Explorer */}
      <section className="theme-bg border-b theme-border py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-2.5">
            <p className="font-mono text-xs theme-accent-secondary font-semibold uppercase tracking-wide">
              Interactive Technology Explorer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              Tools I Use &amp; Where They Are Proven in Real Projects
            </h2>
            <p className="text-sm sm:text-base theme-text-muted leading-relaxed">
              Instead of arbitrary skill-bar percentages, click any technology below to inspect how
              I actually use it and which portfolio projects demonstrate it.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
            {/* Left: Selectable Technology Pills */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {TECHNOLOGY_EXPLORER_ITEMS.map((item) => {
                const isSelected = item.id === activeTool.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedToolId(item.id)}
                    className={`w-full text-left px-5 py-3.5 rounded-2xl border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'theme-surface-raised border-[var(--accent)] theme-text'
                        : 'theme-surface theme-border theme-text-muted hover:theme-text'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold theme-text">{item.tool}</p>
                      <p className="font-mono text-[11px] theme-accent-secondary">{item.category}</p>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'theme-accent translate-x-0.5' : 'theme-text-muted'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right: Demonstrated Use Cases & Connected Projects */}
            <div className="lg:col-span-7 bento-card p-6 md:p-8 space-y-6">
              <div className="border-b theme-border pb-4 space-y-1.5">
                <p className="font-mono text-xs theme-accent-secondary font-semibold">
                  {activeTool.category}
                </p>
                <h3 className="font-display text-3xl theme-text">{activeTool.tool}</h3>
                <p className="text-sm theme-text-muted leading-relaxed">
                  {activeTool.whatIUseItFor}
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
                  Demonstrated Project Use Cases
                </p>
                <ul className="space-y-3 text-sm theme-text">
                  {activeTool.demonstratedUseCases.map((useCase) => (
                    <li
                      key={`${useCase.projectTitle}-${useCase.howItWasUsed}`}
                      className="bento-card-raised p-4 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs theme-accent-secondary font-semibold">
                          {useCase.projectTitle}
                        </span>
                        {useCase.projectSlug && (
                          <Link
                            to={`/work/${useCase.projectSlug}`}
                            className="inline-flex items-center gap-1 font-mono text-xs theme-accent font-semibold hover:underline"
                          >
                            <span>Inspect Story</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                        {useCase.howItWasUsed}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Summary of Core Capability Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] pt-6 border-t theme-border">
            {SKILLS_MATRIX.map((group, idx) => (
              <MotionReveal
                key={group.category}
                delay={idx * 0.04}
                className="bento-card p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-xs theme-accent font-semibold">{group.category}</p>
                    <span className="font-mono text-[11px] theme-accent-secondary">
                      {group.skills.join(' · ')}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl theme-text">{group.plainTitle}</h3>
                  <p className="text-sm theme-text-muted leading-relaxed">{group.summary}</p>
                </div>

                <div className="pt-3 border-t theme-border">
                  <p className="font-mono text-[11px] theme-text-muted">
                    Proven in: <span className="theme-text font-semibold">{group.appliedIn}</span>
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Verified Academic Record & Collaborator Credits */}
      <section className="theme-bg border-b theme-border py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
          {/* Academic Record */}
          <MotionReveal className="lg:col-span-6 bento-card p-6 sm:p-8 space-y-6">
            <div className="space-y-2 border-b theme-border pb-4">
              <p className="font-mono text-xs theme-accent font-semibold">
                03 · Verified Academic Credentials
              </p>
              <h2 className="font-display text-3xl theme-text">
                {VERIFIED_ACADEMIC_RECORD.degree}
              </h2>
              <p className="text-xs theme-accent-secondary font-medium">
                {VERIFIED_ACADEMIC_RECORD.institution} · {VERIFIED_ACADEMIC_RECORD.affiliation}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bento-card-raised p-4">
                <p className="font-mono text-xs theme-text-muted">Official CGPA</p>
                <p className="font-display text-3xl theme-accent tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.cgpa}
                </p>
              </div>
              <div className="bento-card-raised p-4">
                <p className="font-mono text-xs theme-text-muted">Overall Aggregate</p>
                <p className="font-display text-3xl theme-text tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.aggregatePercentage}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {VERIFIED_ACADEMIC_RECORD.semesterSgpas.map((sem) => (
                <div
                  key={sem.semester}
                  className="bento-card-raised p-3 text-center"
                >
                  <p className="font-mono text-[11px] theme-text-muted">{sem.semester}</p>
                  <p className="font-mono text-sm font-semibold theme-text tabular-nums mt-1">
                    {sem.sgpa}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs theme-text-muted leading-relaxed">
              {VERIFIED_ACADEMIC_RECORD.contextNote}
            </p>
          </MotionReveal>

          {/* Collaborator Credits */}
          <MotionReveal delay={0.06} className="lg:col-span-6 space-y-4">
            <div className="space-y-2">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                04 · Project Roles &amp; Co-Creator Credits
              </p>
              <h2 className="font-display text-3xl theme-text">
                Honest Attribution Across Every Project
              </h2>
              <p className="text-xs theme-text-muted leading-relaxed">
                Where a project was built with a co-creator, I state my exact role and credit my
                collaborators clearly.
              </p>
            </div>

            <div className="space-y-3">
              {PROJECTS.map((project) => (
                <div
                  key={project.slug}
                  className="bento-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="theme-accent font-semibold">
                        {project.indexNumber}. {project.title}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="theme-text font-medium">{project.documentedRole}</span>
                    </div>
                    <p className="text-xs theme-text-muted">{project.collaborators}</p>
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs theme-accent font-semibold hover:underline shrink-0"
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

      <CtaSection />
    </div>
  );
}
