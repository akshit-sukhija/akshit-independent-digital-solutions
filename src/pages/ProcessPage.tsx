import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { FiveStepProcessDiagram } from '../components/ArchitectureDiagram';
import { CtaSection } from '../components/CtaSection';
import { PROCESS_STAGES } from '../data/studioData';

export function ProcessPage() {
  const [showTechNotes, setShowTechNotes] = useState(false);

  return (
    <div>
      <PageMeta
        title="Process — Discover, Define, Create, Deliver"
        description="How Akshit Sukhija turns raw ideas, brand stories, and operational workflows into clear narratives and working digital experiences in four structured stages: Discover, Define, Create, Deliver."
      />

      {/* Editorial Header */}
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-14 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                Studio Process · Discover · Define · Create · Deliver
              </p>
              <span className="font-hand text-xl theme-accent-secondary">
                — Direct 1-on-1 collaboration from brief to handover
              </span>
            </div>
            <h1
              className="font-display theme-text leading-tight"
              style={{ fontSize: 'clamp(2.35rem, 4vw, 3.75rem)' }}
            >
              Discover. Define. Create. Deliver.
            </h1>
            <p className="text-base sm:text-lg theme-text-muted leading-relaxed">
              When you work with my studio, you collaborate directly with the person researching
              your audience, shaping the story, and building the digital product—without account
              handoffs or unnecessary jargon.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive 4-Stage Flowchart */}
      <section className="theme-bg py-14 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* Detailed 4-Stage Breakdown */}
      <section className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                Four-Stage Studio Workflow
              </p>
              <h2 className="font-display text-3xl theme-text mt-1">
                What Happens at Each Stage
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechNotes((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono theme-text theme-surface border theme-border hover:border-[var(--accent)] rounded-full cursor-pointer self-start sm:self-auto"
            >
              <span>
                {showTechNotes
                  ? 'Hide Technical & Production Notes'
                  : 'Show Technical & Production Notes'}
              </span>
              {showTechNotes ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {PROCESS_STAGES.map((stage, idx) => (
            <MotionReveal
              key={stage.stepNumber}
              delay={idx * 0.04}
              className="bento-card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <p className="font-mono text-xs theme-accent font-semibold">
                    Stage {stage.stepNumber}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl theme-text">
                    {stage.stepNumber}. {stage.title}
                  </h3>
                  <p className="text-xs font-mono theme-accent-secondary pt-1">
                    {stage.keyPrinciple}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-base theme-text leading-relaxed">
                    {stage.clientExperience}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bento-card-raised p-4 space-y-1.5">
                      <p className="font-mono text-xs theme-text-muted font-semibold">
                        What You Share
                      </p>
                      <p className="text-xs theme-text leading-relaxed">
                        {stage.whatYouProvide}
                      </p>
                    </div>
                    <div className="bento-card-raised p-4 space-y-1.5">
                      <p className="font-mono text-xs theme-accent font-semibold">
                        What You Receive
                      </p>
                      <p className="text-xs theme-text leading-relaxed">
                        {stage.whatYouReceive}
                      </p>
                    </div>
                  </div>

                  {showTechNotes && (
                    <p className="font-mono text-xs theme-text-muted bento-card-raised p-3.5">
                      Studio workflow note: {stage.technicalNote}
                    </p>
                  )}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Practical Working Commitments */}
      <section className="theme-bg py-16 px-4 sm:px-6 border-b theme-border bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs theme-accent font-semibold">
              Straightforward Working Promises
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              How I Keep Studio Projects Clear, Focused &amp; Honest
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            <div className="bento-card p-6 space-y-2.5">
              <p className="font-mono text-xs theme-accent font-semibold">01 · Right-Sized Scope</p>
              <h3 className="font-display text-xl theme-text">
                Story &amp; Structure Before Expensive Builds
              </h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                Whether you need a pitch deck, a conversion website, or an AI workflow, we define
                the clearest, most practical deliverable first.
              </p>
            </div>

            <div className="bento-card p-6 space-y-2.5">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                02 · Focused Pilots
              </p>
              <h3 className="font-display text-xl theme-text">Validate on Real Material Early</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                Start with a focused narrative sprint, landing-page prototype, or sample data audit
                before committing to a multi-week engagement.
              </p>
            </div>

            <div className="bento-card p-6 space-y-2.5">
              <p className="font-mono text-xs theme-accent font-semibold">
                03 · Transparent Timelines
              </p>
              <h3 className="font-display text-xl theme-text">Scoped After Reviewing Your Brief</h3>
              <p className="text-sm theme-text-muted leading-relaxed">
                No fake instant quotes or overnight promises. Every milestone and INR quote is set
                transparently once we review your material in Stage 01 (Discover).
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] text-sm font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
            >
              <span>Start Stage 01 — Discover</span>
              <ArrowRight className="w-4 h-4 text-[#D9B873]" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
