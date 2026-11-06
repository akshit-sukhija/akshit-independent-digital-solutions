import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  FileCheck2,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectPipelineDiagram } from '../components/ArchitectureDiagram';
import { ProjectVisual } from '../components/ProjectVisual';
import { CtaSection } from '../components/CtaSection';
import { PROJECTS } from '../data/studioData';
import { getProjectBySlug } from '../utils/studioLogic';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [showTechnicalSpec, setShowTechnicalSpec] = useState(false);

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-[#11100E] px-6 py-24">
        <PageMeta
          title="Case Study Not Found"
          description="The requested project case study could not be found."
        />
        <div className="max-w-[800px] mx-auto bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 space-y-6">
          <p className="font-mono text-xs text-[#E08A1E]">Case Study Lookup · 404</p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
            Case Study Not Found
          </h1>
          <p className="text-sm text-[#A9A092] leading-relaxed">
            The project URL <code className="text-[#E8D5A8]">{slug}</code> does not match any of
            the five projects in this portfolio.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] rounded"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Project Portfolio</span>
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
      <PageMeta
        title={`${project.title} — Case Study`}
        description={`${project.title}: ${project.plainSubtitle}`}
      />

      {/* Header + Source Evidence Inspector Bar */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-12 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A9A092] hover:text-[#F2EBDD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Project Portfolio</span>
          </Link>

          <MotionReveal className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
              <span className="text-[#C9A24B] font-medium">{project.tierLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E8D5A8]">{project.evidenceTypeLabel}</span>
            </div>

            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)' }}
            >
              {project.indexNumber}. {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#E8D5A8] leading-relaxed">
              {project.plainSubtitle}
            </p>
          </MotionReveal>

          {/* Evidence Inspector Card */}
          <MotionReveal
            delay={0.06}
            className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <div className="md:col-span-4 space-y-1.5">
              <p className="font-mono text-xs text-[#C9A24B] inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>My Role & Collaborators</span>
              </p>
              <p className="text-sm font-semibold text-[#F2EBDD]">{project.documentedRole}</p>
              <p className="text-xs text-[#A9A092] leading-relaxed">{project.collaborators}</p>
            </div>

            <div className="md:col-span-5 space-y-1.5">
              <p className="font-mono text-xs text-[#C9A24B]">Evidence Behind This Project</p>
              <p className="text-xs text-[#F2EBDD] leading-relaxed">{project.evidenceNote}</p>
              <p className="text-xs text-[#A9A092] leading-relaxed pt-1">
                {project.attributionNote}
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between gap-3 md:border-l md:border-[#3A3429] md:pl-6">
              <p className="font-mono text-xs text-[#C9A24B]">Verified Links</p>
              <div className="space-y-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
                  >
                    <span>Open Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#F2EBDD] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors"
                  >
                    <span>View GitHub Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {!project.liveDemoUrl && !project.githubUrl && (
                  <p className="text-xs text-[#E8D5A8] font-mono leading-relaxed">
                    Backed by a 100+ page formal academic technical report (no public URL claimed).
                  </p>
                )}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Section 1: Product-Thinking Case Study Flow (Problem -> Research -> User Needs -> Alternatives -> Decision -> Prototype -> Implementation -> Evidence) */}
      <section className="bg-[#0E0F14] py-16 px-6 border-b border-[#2C2F42]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="space-y-2 max-w-3xl">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
              Product-Thinking Narrative
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              From Problem Discovery &amp; Alternatives to Working Implementation
            </h2>
            <p className="text-sm text-[#A6A9B8]">
              How this project progressed from initial problem framing and user research to
              evaluating alternatives, making the key architectural decision, and shipping the
              verified deliverable.
            </p>
          </MotionReveal>

          {/* Top Row: Problem -> Research -> User Needs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MotionReveal className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3">
              <p className="font-mono text-xs text-[#D4AE5C]">01 · Problem</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Was Going Wrong</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">{project.problemSummary}</p>
              <p className="text-xs text-[#A6A9B8] leading-relaxed pt-2 border-t border-[#2C2F42]">
                {project.businessContext}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.04}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#8B75FF]">02 · Research Context</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What We Observed</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.researchContext}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.08}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#7AD992]">03 · User Needs</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Users Actually Needed</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.userNeeds}
              </p>
            </MotionReveal>
          </div>

          {/* Second Row: Alternatives -> Decision -> Prototype & Evidence */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MotionReveal className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3">
              <p className="font-mono text-xs text-[#E6D3A7]">04 · Alternatives Considered</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">Why Simpler Options Fell Short</h3>
              <p className="text-sm text-[#A6A9B8] leading-relaxed">
                {project.productThinking.alternativesConsidered}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.04}
              className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#D4AE5C]">05 · Product &amp; System Decision</p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">The Chosen Architecture</h3>
              <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">
                {project.productThinking.productDecision}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.08}
              className="bg-[#161822] border border-[#D4AE5C]/70 rounded-xl p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#D4AE5C]">
                06 · Prototype → Implementation &amp; Evidence
              </p>
              <h3 className="font-display text-2xl text-[#F4F0E8]">What Was Delivered</h3>
              <p className="text-xs text-[#E6D3A7] leading-relaxed">
                {project.productThinking.prototypeEvolution}
              </p>
              <ul className="space-y-1 text-xs text-[#F4F0E8] pt-2 border-t border-[#2C2F42]">
                {project.deliverables.map((del) => (
                  <li key={del}>· {del}</li>
                ))}
              </ul>
            </MotionReveal>
          </div>

          {/* Section 3: Bespoke ProjectVisual Architecture + Interactive Step Flowchart */}
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

      {/* Section 4: Plain-English Features + Step-by-Step Walkthrough */}
      <section className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Plain-English Benefits with Expandable Technical Note */}
          <MotionReveal className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Key Capabilities</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                What the System Does
              </h2>
              <p className="text-xs text-[#A9A092] mt-1">
                Written in plain English, with technical notes underneath each point.
              </p>
            </div>

            <div className="space-y-4">
              {project.plainFeatures.map((feat) => (
                <div
                  key={feat.plain}
                  className="bg-[#11100E] border border-[#3A3429] rounded-lg p-4 space-y-2"
                >
                  <p className="text-sm font-medium text-[#F2EBDD] leading-relaxed">
                    {feat.plain}
                  </p>
                  <p className="font-mono text-[11px] text-[#A9A092] pt-2 border-t border-[#3A3429]/70 leading-relaxed">
                    <span className="text-[#C9A24B]">Technical detail: </span>
                    {feat.technical}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Step-by-Step How Information Moves */}
          <MotionReveal delay={0.06} className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Step-by-Step Walkthrough</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                How Information Moves Through {project.title}
              </h2>
            </div>

            <div className="space-y-4">
              {project.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C9A24B]">Step {step.step}</span>
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#A9A092] leading-relaxed">{step.detail}</p>
                  {step.technicalDetail && (
                    <p className="font-mono text-[11px] text-[#E8D5A8]/80 pt-1">
                      Under the hood: {step.technicalDetail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Section 5: Tools Used (Plain-English Explanations + Expandable Deep Technical Spec) */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">05 · Tools & Technology</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Tools Used & What Each One Does
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechnicalSpec((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded cursor-pointer"
            >
              <span>
                {showTechnicalSpec
                  ? 'Hide Deep Code & Architecture Specs'
                  : 'Inspect Code, SQL & Technical Decisions'}
              </span>
              {showTechnicalSpec ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Plain-English Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.plainToolsSummary.map((item) => (
              <div
                key={item.tool}
                className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-5 space-y-2"
              >
                <p className="font-mono text-xs text-[#C9A24B]">{item.tool}</p>
                <p className="text-sm text-[#F2EBDD] leading-relaxed">{item.whatItDoes}</p>
              </div>
            ))}
          </div>

          {/* Expandable Technical Depth for Developers & Technical Reviewers */}
          {showTechnicalSpec && (
            <div className="space-y-8 pt-4 border-t border-[#3A3429]">
              {project.evidenceArtifacts.map((artifact) => (
                <div
                  key={artifact.title}
                  className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3A3429] pb-3">
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{artifact.title}</h3>
                    {artifact.datasetOrHardwareCondition && (
                      <span className="font-mono text-xs text-[#E08A1E]">
                        {artifact.datasetOrHardwareCondition}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#A9A092]">{artifact.caption}</p>
                  <pre className="bg-[#11100E] border border-[#3A3429] rounded p-4 overflow-x-auto font-mono text-xs text-[#E8D5A8] leading-relaxed">
                    <code>{artifact.codeOrSpec}</code>
                  </pre>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.technicalDecisions.map((item) => (
                  <div
                    key={item.decision}
                    className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-2.5"
                  >
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{item.decision}</h3>
                    <p className="text-sm text-[#A9A092] leading-relaxed">
                      <strong className="text-[#E8D5A8] font-normal">Why: </strong>
                      {item.rationale}
                    </p>
                    <p className="text-xs text-[#A9A092] pt-2 border-t border-[#3A3429]">
                      <strong className="text-[#F2EBDD] font-normal">Trade-off: </strong>
                      {item.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 6: Limitations & Honest Scope (Ivory Contrast Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <MotionReveal className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              06 · Honest Limitations & Scope
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              What You Should Know About This Project
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.limitationsAndScope.map((lim) => (
                <li
                  key={lim}
                  className="bg-white/80 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">—</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.06} className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              Practical Takeaways
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              How This Helps Future Client Projects
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.keyLessons.map((lesson) => (
                <li
                  key={lesson}
                  className="bg-white/80 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-[#11100E] py-12 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg p-4 flex items-center gap-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C9A24B] shrink-0" />
              <div>
                <p className="font-mono text-xs text-[#A9A092]">Previous Project</p>
                <p className="text-sm font-semibold text-[#F2EBDD]">
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
              className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg p-4 flex items-center justify-between gap-3 transition-colors sm:ml-auto"
            >
              <div className="text-right">
                <p className="font-mono text-xs text-[#A9A092]">Next Project</p>
                <p className="text-sm font-semibold text-[#F2EBDD]">
                  {nextProject.indexNumber}. {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#C9A24B] shrink-0" />
            </Link>
          )}
        </div>
      </section>

      <CtaSection
        variant="dark"
        headline={`Have a problem similar to ${project.title}?`}
        supportingCopy="Share your workflow, documents, or spreadsheet. I will review your material and suggest a practical solution scope."
      />
    </div>
  );
}
