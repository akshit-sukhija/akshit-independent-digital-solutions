import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Layers,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ProjectMetrics } from '../components/ProjectMetrics';
import { ProjectPipelineDiagram } from '../components/ArchitectureDiagram';
import { ProjectVisual } from '../components/ProjectVisual';
import { ReframeCaseStudyShowcase } from '../components/ReframeCaseStudyShowcase';
import { CtaSection } from '../components/CtaSection';
import { PROJECTS } from '../data/studioData';
import { getProjectBySlug } from '../utils/studioLogic';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [showTechnicalSpec, setShowTechnicalSpec] = useState(false);

  if (!project) {
    return (
      <div className="min-h-[70vh] theme-bg px-4 sm:px-6 py-24">
        <PageMeta
          title="Case Study Not Found"
          description="The requested project case study could not be found."
        />
        <div className="max-w-[800px] mx-auto bento-card p-8 space-y-6">
          <p className="font-mono text-xs theme-accent font-semibold">Case Study Lookup · 404</p>
          <h1 className="font-display text-3xl sm:text-4xl theme-text">Case Study Not Found</h1>
          <p className="text-sm theme-text-muted leading-relaxed">
            The project URL <code className="theme-accent">{slug}</code> does not match any of the
            dedicated case studies in this portfolio.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex >= 0 && currentIndex < PROJECTS.length - 1
      ? PROJECTS[currentIndex + 1]
      : undefined;

  return (
    <div>
      <ReadingProgressBar />
      <PageMeta
        title={`${project.title} — Case Study`}
        description={`${project.title}: ${project.plainSubtitle}`}
      />

      {/* 01. Cover + 02. The Brief + 03. The Role & Collaborators */}
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-xs theme-text-muted hover:theme-text transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Selected Work</span>
            </Link>
            <span className="font-hand text-lg theme-accent-secondary">
              Story-Led Case Study · Chapter {project.indexNumber}
            </span>
          </div>

          {/* 01. Cover Card */}
          <MotionReveal className="bento-card p-6 sm:p-9 space-y-5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs theme-text-muted">
              {project.recognitionBadge && (
                <>
                  <span className="inline-flex items-center gap-1.5 theme-accent font-semibold">
                    <Award className="w-3.5 h-3.5 theme-accent-secondary" />
                    {project.recognitionBadge}
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span className="theme-accent-secondary font-semibold">
                {project.collaborators.toLowerCase().includes('solo')
                  ? 'Solo Work'
                  : 'Collaborative Work'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="theme-text font-medium">Role: {project.documentedRole}</span>
            </div>

            <h1
              className="font-display theme-text leading-tight"
              style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.9rem)' }}
            >
              {project.indexNumber}. {project.title}
            </h1>

            <p className="text-lg sm:text-xl theme-text-muted leading-relaxed max-w-3xl">
              {project.plainSubtitle}
            </p>

            {project.specialCredit && (
              <p className="font-mono text-xs theme-accent font-semibold pt-1">
                {project.specialCredit} · Co-presented with Adyot Ohri at ZERO² 2026
              </p>
            )}
          </MotionReveal>

          {/* 02. The Brief & 03. The Role & Collaborators Bento Row */}
          <MotionReveal
            delay={0.05}
            className="grid grid-cols-1 md:grid-cols-12 gap-[18px] items-stretch"
          >
            {/* 02. The Brief */}
            <div className="md:col-span-5 bento-card p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="font-mono text-xs theme-accent font-semibold">
                  02 · The Brief &amp; Problem Context
                </p>
                <h2 className="font-display text-2xl theme-text">Why This Mattered</h2>
                <p className="text-sm theme-text leading-relaxed">{project.problemSummary}</p>
              </div>
              <p className="text-xs theme-text-muted leading-relaxed pt-3 border-t theme-border">
                {project.businessContext}
              </p>
            </div>

            {/* 03. The Role & Collaborators */}
            <div className="md:col-span-4 bento-card p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="font-mono text-xs theme-accent-secondary font-semibold inline-flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>03 · My Role &amp; Collaborators</span>
                </p>
                <h2 className="font-display text-2xl theme-text">{project.documentedRole}</h2>
                <p className="text-xs font-mono theme-accent">{project.collaborators}</p>
                <p className="text-xs theme-text-muted leading-relaxed">
                  {project.attributionNote}
                </p>
              </div>
              <p className="text-xs theme-text pt-3 border-t theme-border">
                <strong className="theme-accent-secondary font-semibold">Outcome: </strong>
                {project.resultSummary}
              </p>
            </div>

            {/* Quick Proof Links */}
            <div className="md:col-span-3 bento-card p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <p className="font-mono text-xs theme-accent font-semibold">
                  06 · Proof &amp; Artifacts
                </p>
                <h2 className="font-display text-2xl theme-text">Verified Evidence</h2>
                <div className="space-y-2 pt-1">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
                    >
                      <span>Open Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B873]" />
                    </a>
                  )}
                  {project.slug === 'reframe' && (
                    <>
                      <a
                        href="#slide-deck-gallery"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
                      >
                        <span>Inspect 15-Slide Deck ↓</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
                      </a>
                      <a
                        href="#award-and-team"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-mono theme-text theme-surface-raised border theme-border hover:border-[var(--accent)] rounded-full transition-colors"
                      >
                        <span>1st Place Trophy &amp; Photos ↓</span>
                        <ArrowRight className="w-3.5 h-3.5 theme-accent-secondary" />
                      </a>
                    </>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-mono theme-text theme-surface-raised border theme-border hover:border-[var(--accent)] rounded-full transition-colors"
                    >
                      <span>View GitHub Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.drivePdfPlaceholder && (
                    <div className="px-3.5 py-2.5 rounded-2xl theme-surface-raised border theme-border text-[11px] font-mono theme-text-muted leading-relaxed">
                      {project.drivePdfPlaceholder}
                    </div>
                  )}
                </div>
              </div>
              <p className="font-mono text-[11px] theme-text-muted pt-3 border-t theme-border">
                Status: <span className="theme-text font-semibold">{project.evidenceTypeLabel}</span>
              </p>
            </div>
          </MotionReveal>

          {/* Hero Visual / Live Interface Screenshot */}
          {project.screenshotUrl && (
            <MotionReveal delay={0.07} className="polaroid-frame overflow-hidden">
              <div className="px-3 pb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs theme-accent font-semibold">
                  {project.slug === 'reframe'
                    ? '05 · The Work — RE:FRAME Smart Glasses & Focus Engine Visual'
                    : '05 · The Work — Live Application Interface Preview'}
                </span>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs theme-accent font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Visit {project.liveDemoUrl}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.slug === 'reframe' && (
                  <a
                    href="#award-and-team"
                    className="font-mono text-xs theme-accent-secondary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Jump to 1st Place Award &amp; Team Photos ↓</span>
                  </a>
                )}
              </div>
              <div className="rounded-[20px] overflow-hidden border theme-border">
                <img
                  src={project.screenshotUrl}
                  alt={`${project.title} visual showcase`}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[560px] object-cover object-top"
                />
              </div>
              {project.screenshotCaption && (
                <p className="px-3 pt-3 font-mono text-xs theme-text-muted">
                  {project.screenshotCaption}
                </p>
              )}
            </MotionReveal>
          )}
        </div>
      </section>

      {/* 05. Dedicated Visual, 15-Slide Deck & Video Showcase for RE:FRAME */}
      {project.slug === 'reframe' && <ReframeCaseStudyShowcase />}

      {/* 04. The Approach & 06. Quantitative Evidence */}
      <section className="theme-bg py-16 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto space-y-12">
          {/* Quantitative Data Visualisation (Rendered Only for Projects with Verified Numeric Evidence) */}
          <ProjectMetrics projectSlug={project.slug} />

          <MotionReveal className="space-y-2 max-w-3xl">
            <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
              04 · The Approach &amp; Product-Thinking Narrative
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              From Problem Discovery &amp; Alternatives to Final Architecture
            </h2>
            <p className="text-sm sm:text-base theme-text-muted">
              How this project progressed from initial problem framing and user research to
              evaluating alternatives, making the key architectural decision, and shipping the
              verified deliverable.
            </p>
          </MotionReveal>

          {/* Top Row: Research -> User Needs -> Alternatives */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
            <MotionReveal className="bento-card p-6 space-y-3">
              <p className="font-mono text-xs theme-accent font-semibold">01 · Research Context</p>
              <h3 className="font-display text-2xl theme-text">What We Observed</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                {project.productThinking.researchContext}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.04} className="bento-card p-6 space-y-3">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                02 · User Needs
              </p>
              <h3 className="font-display text-2xl theme-text">What Users Actually Needed</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                {project.productThinking.userNeeds}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.08} className="bento-card p-6 space-y-3">
              <p className="font-mono text-xs theme-accent font-semibold">
                03 · Alternatives Considered
              </p>
              <h3 className="font-display text-2xl theme-text">Why Simpler Options Fell Short</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                {project.productThinking.alternativesConsidered}
              </p>
            </MotionReveal>
          </div>

          {/* Second Row: Chosen Architecture -> Prototype Evolution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[18px]">
            <MotionReveal className="lg:col-span-6 bento-card p-6 space-y-3">
              <p className="font-mono text-xs theme-accent font-semibold">
                04 · Product &amp; System Decision
              </p>
              <h3 className="font-display text-2xl theme-text">The Chosen Architecture</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                {project.productThinking.productDecision}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.04} className="lg:col-span-6 bento-card p-6 space-y-3">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                05 · Prototype → Implementation &amp; Deliverables
              </p>
              <h3 className="font-display text-2xl theme-text">What Was Delivered</h3>
              <p className="text-xs sm:text-sm theme-text-muted leading-relaxed">
                {project.productThinking.prototypeEvolution}
              </p>
              <ul className="space-y-1 text-xs theme-text pt-2 border-t theme-border">
                {project.deliverables.map((del) => (
                  <li key={del}>· {del}</li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          {/* Bespoke ProjectVisual Architecture + Interactive Step Flowchart */}
          <MotionReveal>
            <ProjectVisual slug={project.slug} mode="full" />
          </MotionReveal>

          <MotionReveal>
            <ProjectPipelineDiagram
              projectTitle={project.title}
              plainHowItWorksSummary={project.plainHowItWorksSummary}
              architectureSummary={project.architectureSummary}
              nodes={project.architectureNodes}
            />
          </MotionReveal>
        </div>
      </section>

      {/* Plain-English Features + Step-by-Step Walkthrough */}
      <section className="theme-bg py-16 px-4 sm:px-6 border-b theme-border bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <MotionReveal className="lg:col-span-5 space-y-5">
            <div>
              <p className="font-mono text-xs theme-accent font-semibold">Key Capabilities</p>
              <h2 className="font-display text-3xl theme-text mt-1">What the System Does</h2>
              <p className="text-xs theme-text-muted mt-1">
                Written in plain English, with technical notes underneath each point.
              </p>
            </div>

            <div className="space-y-3.5">
              {project.plainFeatures.map((feat) => (
                <div key={feat.plain} className="bento-card p-4 space-y-2">
                  <p className="text-sm font-semibold theme-text leading-relaxed">{feat.plain}</p>
                  <p className="font-mono text-[11px] theme-text-muted pt-2 border-t theme-border leading-relaxed">
                    <span className="theme-accent font-semibold">Technical detail: </span>
                    {feat.technical}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.06} className="lg:col-span-7 space-y-5">
            <div>
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                Step-by-Step Walkthrough
              </p>
              <h2 className="font-display text-3xl theme-text mt-1">
                How Information Moves Through {project.title}
              </h2>
            </div>

            <div className="space-y-3.5">
              {project.workflowSteps.map((step) => (
                <div key={step.step} className="bento-card p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs theme-accent font-semibold">
                      Step {step.step}
                    </span>
                    <h3 className="text-base font-semibold theme-text">{step.title}</h3>
                  </div>
                  <p className="text-sm theme-text-muted leading-relaxed">{step.detail}</p>
                  {step.technicalDetail && (
                    <p className="font-mono text-[11px] theme-accent-secondary pt-1">
                      Under the hood: {step.technicalDetail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 06. The Evidence: Tools & Expandable Technical Specs */}
      <section className="theme-bg py-16 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs theme-accent font-semibold">
                06 · The Evidence &amp; Technology Stack
              </p>
              <h2 className="font-display text-3xl theme-text mt-1">
                Tools &amp; Frameworks Applied
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechnicalSpec((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono theme-text theme-surface border theme-border hover:border-[var(--accent)] rounded-full cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 theme-accent" />
              <span>
                {showTechnicalSpec
                  ? 'Hide Deep Specs & Architecture Decisions'
                  : 'Inspect Architecture Specs & Technical Decisions'}
              </span>
              {showTechnicalSpec ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.plainToolsSummary.map((item) => (
              <div key={item.tool} className="bento-card p-5 space-y-2">
                <p className="font-mono text-xs theme-accent font-semibold">{item.tool}</p>
                <p className="text-sm theme-text-muted leading-relaxed">{item.whatItDoes}</p>
              </div>
            ))}
          </div>

          {showTechnicalSpec && (
            <div className="space-y-6 pt-4 border-t theme-border">
              {project.evidenceArtifacts.map((artifact) => (
                <div key={artifact.title} className="bento-card p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b theme-border pb-3">
                    <h3 className="text-base font-semibold theme-text">{artifact.title}</h3>
                    {artifact.datasetOrHardwareCondition && (
                      <span className="font-mono text-xs theme-accent-secondary">
                        {artifact.datasetOrHardwareCondition}
                      </span>
                    )}
                  </div>
                  <p className="text-xs theme-text-muted">{artifact.caption}</p>
                  <pre className="theme-surface-raised border theme-border rounded-2xl p-4 overflow-x-auto font-mono text-xs theme-text leading-relaxed">
                    <code>{artifact.codeOrSpec}</code>
                  </pre>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.technicalDecisions.map((item) => (
                  <div key={item.decision} className="bento-card p-6 space-y-2.5">
                    <h3 className="text-base font-semibold theme-text">{item.decision}</h3>
                    <p className="text-sm theme-text-muted leading-relaxed">
                      <strong className="theme-text font-semibold">Why: </strong>
                      {item.rationale}
                    </p>
                    <p className="text-xs theme-text-muted pt-2 border-t theme-border">
                      <strong className="theme-text font-semibold">Trade-off: </strong>
                      {item.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 07. What Changed / Honest Limitations & Client Takeaways */}
      <section className="theme-bg py-16 px-4 sm:px-6 border-b theme-border bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MotionReveal className="bento-card p-6 sm:p-8 space-y-4">
            <p className="font-mono text-xs theme-accent font-semibold">
              07 · Honest Limitations &amp; Scope Boundaries
            </p>
            <h2 className="font-display text-3xl theme-text">
              What You Should Know About This Project
            </h2>
            <ul className="space-y-3 text-sm theme-text-muted leading-relaxed">
              {project.limitationsAndScope.map((lim) => (
                <li
                  key={lim}
                  className="bento-card-raised p-4 flex items-start gap-3"
                >
                  <span className="font-mono theme-accent font-semibold">—</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.06} className="bento-card p-6 sm:p-8 space-y-4">
            <p className="font-mono text-xs theme-accent-secondary font-semibold">
              Final Learnings &amp; Client Takeaways
            </p>
            <h2 className="font-display text-3xl theme-text">
              How This Applies to Studio Client Work
            </h2>
            <ul className="space-y-3 text-sm theme-text-muted leading-relaxed">
              {project.keyLessons.map((lesson) => (
                <li
                  key={lesson}
                  className="bento-card-raised p-4 flex items-start gap-3"
                >
                  <span className="font-mono theme-accent-secondary font-semibold">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      {/* 08. Next Project & Continuation */}
      <section className="theme-bg py-12 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="bento-card-interactive p-5 flex items-center gap-3.5"
            >
              <ArrowLeft className="w-4 h-4 theme-accent shrink-0" />
              <div>
                <p className="font-mono text-xs theme-text-muted">Previous Project</p>
                <p className="font-display text-xl theme-text">
                  {prevProject.indexNumber}. {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/work/${nextProject.slug}`}
              className="bento-card-interactive p-5 flex items-center justify-between gap-3.5 sm:ml-auto"
            >
              <div className="text-right">
                <p className="font-mono text-xs theme-text-muted">08 · Next Project</p>
                <p className="font-display text-xl theme-text">
                  {nextProject.indexNumber}. {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 theme-accent shrink-0" />
            </Link>
          )}
        </div>
      </section>

      <CtaSection
        headline={`Planning a product narrative, campaign, or custom tool like ${project.title}?`}
        supportingCopy="Share your brief, product concept, or workflow challenge. I will review your material and outline a clear studio scope."
      />
    </div>
  );
}
