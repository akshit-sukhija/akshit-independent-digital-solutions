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
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Studio Process · Discover · Define · Create · Deliver
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Discover. Define. Create. Deliver.
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              When you work with my studio, you collaborate directly with the person researching
              your audience, shaping the story, and building the digital product—without account
              handoffs or unnecessary jargon.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive 4-Stage Flowchart */}
      <section className="bg-[#11100E] py-14 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* Detailed 4-Stage Breakdown */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Four-Stage Studio Workflow</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                What Happens at Each Stage
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechNotes((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded cursor-pointer self-start sm:self-auto"
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
              className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <p className="font-mono text-xs text-[#38BDF8]">Stage {stage.stepNumber}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    {stage.stepNumber}. {stage.title}
                  </h3>
                  <p className="text-xs font-mono text-[#E8D5A8] pt-1">{stage.keyPrinciple}</p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-base text-[#F2EBDD] leading-relaxed">
                    {stage.clientExperience}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1.5">
                      <p className="font-mono text-xs text-[#A9A092]">What You Share</p>
                      <p className="text-xs text-[#F2EBDD] leading-relaxed">
                        {stage.whatYouProvide}
                      </p>
                    </div>
                    <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1.5">
                      <p className="font-mono text-xs text-[#C9A24B]">What You Receive</p>
                      <p className="text-xs text-[#F2EBDD] leading-relaxed">
                        {stage.whatYouReceive}
                      </p>
                    </div>
                  </div>

                  {showTechNotes && (
                    <p className="font-mono text-xs text-[#E8D5A8]/90 bg-[#11100E] border border-[#3A3429] rounded p-3">
                      Studio workflow note: {stage.technicalNote}
                    </p>
                  )}
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Practical Working Commitments (Ivory Contrast Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#7A5B14]">
              Straightforward Working Promises
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#11100E]">
              How I Keep Studio Projects Clear, Focused &amp; Honest
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">01 · Right-Sized Scope</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Story &amp; Structure Before Expensive Builds
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                Whether you need a pitch deck, a conversion website, or an AI workflow, we define
                the clearest, most practical deliverable first.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">02 · Focused Pilots</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Validate on Real Material Early
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                Start with a focused narrative sprint, landing-page prototype, or sample data audit
                before committing to a multi-week engagement.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">03 · Transparent Timelines</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Scoped After Reviewing Your Brief
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                No fake instant quotes or overnight promises. Every milestone and INR quote is set
                transparently once we review your material in Stage 01 (Discover).
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#F4EFE6] bg-[#11100E] hover:bg-[#232019] rounded transition-colors"
            >
              <span>Start Stage 01 — Discover</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection variant="dark" />
    </div>
  );
}
