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
        title="How I Work — The Five-Step Client Journey"
        description="A simple five-step journey from explaining your business problem in plain English to receiving a finished dashboard, automation, or web tool."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              How I Work · Simple Five-Step Client Journey
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              From Your Business Problem to a Working Solution in Five Clear Steps
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              When you work with me, you talk directly with the person analysing your data and
              building your tool. You never have to speak in technical jargon.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive 5-Step Flowchart */}
      <section className="bg-[#11100E] py-14 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* Detailed 5-Step Breakdown */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">Step-by-Step Guide</p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                What Happens at Each Step
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setShowTechNotes((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded cursor-pointer self-start sm:self-auto"
            >
              <span>
                {showTechNotes
                  ? 'Hide Technical Engineering Notes'
                  : 'Show Technical Notes (For Reviewers)'}
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
                  <p className="font-mono text-xs text-[#C9A24B]">Step {stage.stepNumber}</p>
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
                      Technical workflow note: {stage.technicalNote}
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
              How I Keep Projects Simple and Honest
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">01 · Right-Sized Solutions</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                No Big Software Builds When a Simple Fix Works
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                If your question can be answered by cleaning an Excel sheet and building a Power BI
                dashboard, I will recommend that instead of pitching a costly custom app.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">02 · Small Paid Pilots</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Test on a Small Sample First
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                Want to see how an automation works on 15 sample PDFs before committing to a bigger
                tool? We can start with a small, focused paid pilot.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">03 · Realistic Timelines</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Agreed After Checking Your Files
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                I never promise fake overnight delivery dates before seeing your data. We set a
                realistic schedule together once I review your sample material.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#F4EFE6] bg-[#11100E] hover:bg-[#232019] rounded transition-colors"
            >
              <span>Start Step 01 — Describe Your Problem</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection variant="dark" />
    </div>
  );
}
