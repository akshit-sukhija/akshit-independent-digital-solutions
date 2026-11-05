import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectPipelineDiagram } from '../components/ArchitectureDiagram';
import { CtaSection } from '../components/CtaSection';
import { PROJECTS } from '../data/studioData';
import { getProjectBySlug } from '../utils/studioLogic';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

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
            Requested Case Study Not Found
          </h1>
          <p className="text-sm text-[#A9A092] leading-relaxed">
            The project slug <code className="text-[#E8D5A8]">{slug}</code> does not match a
            documented case study in the portfolio.
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
        description={`${project.title}: ${project.solutionSummary}`}
      />

      {/* Case Study Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-12 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#A9A092] hover:text-[#F2EBDD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Project Portfolio</span>
          </Link>

          <MotionReveal className="space-y-5 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
              <span className="text-[#C9A24B] font-medium">{project.tierLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.projectClassification}</span>
            </div>

            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)' }}
            >
              {project.indexNumber}. {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#E8D5A8] leading-relaxed">
              {project.subtitle}
            </p>
          </MotionReveal>

          {/* Attribution, Role, Stack & Verified External Evidence Strip */}
          <MotionReveal
            delay={0.08}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6"
          >
            <div className="md:col-span-4 space-y-1.5">
              <p className="font-mono text-xs text-[#C9A24B]">Documented Role & Collaborators</p>
              <p className="text-sm font-semibold text-[#F2EBDD]">{project.documentedRole}</p>
              <p className="text-xs text-[#A9A092] leading-relaxed">{project.collaborators}</p>
            </div>

            <div className="md:col-span-5 space-y-1.5">
              <p className="font-mono text-xs text-[#C9A24B]">Verified Technical Stack</p>
              <p className="font-mono text-xs text-[#F2EBDD] leading-relaxed">
                {project.verifiedStack.join(' · ')}
              </p>
              <p className="text-xs text-[#A9A092] leading-relaxed pt-1">
                {project.attributionNote}
              </p>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between gap-3 md:border-l md:border-[#3A3429] md:pl-6">
              <p className="font-mono text-xs text-[#C9A24B]">Verified Evidence</p>
              <div className="space-y-2">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
                  >
                    <span>Open Live Deployment</span>
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
                    <span>View GitHub Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {!project.liveDemoUrl && !project.githubUrl && (
                  <p className="text-xs text-[#E8D5A8] font-mono leading-relaxed">
                    Documented via 100+ page formal academic technical report (No public URL claimed).
                  </p>
                )}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Problem, Business Context & Solution Overview */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <MotionReveal className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-3">
              <p className="font-mono text-xs text-[#C9A24B]">01 · The Problem</p>
              <h2 className="font-display text-2xl text-[#F2EBDD]">Operational Challenge</h2>
              <p className="text-sm text-[#A9A092] leading-relaxed">{project.problemSummary}</p>
            </MotionReveal>

            <MotionReveal
              delay={0.06}
              className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#C9A24B]">02 · Why It Matters</p>
              <h2 className="font-display text-2xl text-[#F2EBDD]">Business & Practical Context</h2>
              <p className="text-sm text-[#A9A092] leading-relaxed">{project.businessContext}</p>
            </MotionReveal>

            <MotionReveal
              delay={0.12}
              className="bg-[#232019] border border-[#C9A24B]/60 rounded-lg p-6 space-y-3"
            >
              <p className="font-mono text-xs text-[#C9A24B]">03 · The Solution</p>
              <h2 className="font-display text-2xl text-[#F2EBDD]">Engineered Deliverable</h2>
              <p className="text-sm text-[#F2EBDD] leading-relaxed">{project.solutionSummary}</p>
            </MotionReveal>
          </div>

          {/* Interactive Architecture & Data Flow Diagram */}
          <MotionReveal>
            <ProjectPipelineDiagram
              projectTitle={project.title}
              architectureSummary={project.architectureSummary}
              nodes={project.architectureNodes}
            />
          </MotionReveal>
        </div>
      </section>

      {/* Verified System Elements & Deliverables + Step-by-Step Workflow */}
      <section className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Verified Features & Deliverables */}
          <MotionReveal className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs text-[#C9A24B]">Documented Capabilities</p>
              <h2 className="font-display text-3xl text-[#F2EBDD]">
                Verified Project Elements
              </h2>
              <ul className="space-y-3 pt-2">
                {project.verifiedElements.map((el) => (
                  <li
                    key={el}
                    className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 text-sm text-[#F2EBDD] flex items-start gap-3"
                  >
                    <span className="font-mono text-xs text-[#C9A24B] pt-0.5">—</span>
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 space-y-3">
              <p className="font-mono text-xs text-[#E8D5A8]">Concrete Deliverables</p>
              <ul className="space-y-2 text-xs text-[#A9A092]">
                {project.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-2">
                    <span className="font-mono text-[#C9A24B]">·</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>

          {/* Workflow Storytelling */}
          <MotionReveal delay={0.08} className="lg:col-span-7 space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Execution Sequence</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                End-to-End System & Analytical Workflow
              </h2>
            </div>

            <div className="space-y-4">
              {project.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <span className="font-mono text-xs text-[#C9A24B] shrink-0 pt-0.5">
                    Stage {step.step}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-[#F2EBDD]">{step.title}</h3>
                    <p className="text-sm text-[#A9A092] leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Technical Artifacts, SQL / Pipeline Specifications & Decisions */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          {/* Technical & Analytical Evidence Artifacts */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Documented Technical Specification & Analytical Evidence
              </p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Verified Pipeline & Methodology Breakdown
              </h2>
            </div>

            {project.evidenceArtifacts.map((artifact) => (
              <MotionReveal
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
              </MotionReveal>
            ))}
          </div>

          {/* Engineering & Analytical Decisions */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Design Rationale</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Key Technical & Analytical Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.technicalDecisions.map((item) => (
                <MotionReveal
                  key={item.decision}
                  className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-3"
                >
                  <h3 className="text-base font-semibold text-[#F2EBDD]">{item.decision}</h3>
                  <p className="text-sm text-[#A9A092] leading-relaxed">
                    <strong className="text-[#E8D5A8] font-normal">Rationale: </strong>
                    {item.rationale}
                  </p>
                  <p className="text-xs text-[#A9A092] pt-2 border-t border-[#3A3429]">
                    <strong className="text-[#F2EBDD] font-normal">Trade-off: </strong>
                    {item.tradeoff}
                  </p>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honest Limitations, Scope Boundaries & Lessons (Ivory Contrast Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <MotionReveal className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              Transparent Engineering Audit
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              Scope Boundaries & Limitations
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.limitationsAndScope.map((lim) => (
                <li
                  key={lim}
                  className="bg-white/70 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">—</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.08} className="space-y-4">
            <p className="font-mono text-xs text-[#7A5B14]">
              Transferable Client Value
            </p>
            <h2 className="font-display text-3xl text-[#11100E]">
              Lessons Applied to Client Engagements
            </h2>
            <ul className="space-y-3 text-sm text-[#232019] leading-relaxed">
              {project.keyLessons.map((lesson) => (
                <li
                  key={lesson}
                  className="bg-white/70 border border-[#3A3429]/20 rounded p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-[#7A5B14] font-semibold">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      {/* Adjacent Case Study Navigation */}
      <section className="bg-[#11100E] py-12 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/work/${prevProject.slug}`}
              className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg p-4 flex items-center gap-3 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C9A24B] shrink-0" />
              <div>
                <p className="font-mono text-xs text-[#A9A092]">Previous Case Study</p>
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
                <p className="font-mono text-xs text-[#A9A092]">Next Case Study</p>
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
        headline={`Facing a problem similar to ${project.title}?`}
        supportingCopy="Share your workflow, documents, or dataset. I will review your requirements and propose a practical, right-sized digital deliverable."
      />
    </div>
  );
}
