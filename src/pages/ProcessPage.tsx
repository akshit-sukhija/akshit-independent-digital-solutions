import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import { PROCESS_STAGES } from '../data/studioData';

export function ProcessPage() {
  return (
    <div>
      <PageMeta
        title="How I Work — Client Experience & Collaboration Process"
        description="Direct, transparent collaboration with an independent digital solutions operator. Learn how problems are reviewed, scoped, built, and handed over."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Client Experience · Direct Solo Collaboration
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              How We Turn an Operational Problem Into a Working Deliverable
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              When you engage me, you work directly with the person analysing your data, designing
              the workflow, and writing the code. There are no sales layers, inflated agency
              retainers, or unverified turnaround promises.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 6-Stage Client Collaboration Journey */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-8">
          {PROCESS_STAGES.map((stage, idx) => (
            <MotionReveal
              key={stage.stepNumber}
              delay={idx * 0.05}
              className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <p className="font-mono text-xs text-[#C9A24B]">Stage {stage.stepNumber}</p>
                  <h2 className="font-display text-3xl text-[#F2EBDD]">
                    {stage.stepNumber}. {stage.title}
                  </h2>
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
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Practical Working Principles (Ivory Editorial Contrast Section) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#7A5B14]">
              Practical Commitments
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#11100E]">
              What You Can Expect From Every Engagement
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionReveal className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">01 · Right-Sized Recommendations</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                No Unnecessary Software Bloat
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                If your business problem can be solved by cleaning a dataset and building a clear
                Power BI dashboard or Python script, I will recommend that instead of pitching a
                large custom web application.
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.06}
              className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5"
            >
              <p className="font-mono text-xs text-[#7A5B14]">02 · Small Paid Pilots Welcome</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Validate Value Before Scaling Scope
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                Where appropriate, we can begin with a focused paid pilot—such as testing extraction
                logic on a sample batch of documents or auditing one historical dataset—before
                committing to a broader tool.
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.12}
              className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5"
            >
              <p className="font-mono text-xs text-[#7A5B14]">03 · Honest Timeline Assessment</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Timelines Set After Scope Review
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                I do not advertise artificial 48-hour turnaround gimmicks. Delivery schedules are
                agreed transparently after inspecting your actual data quality and deliverable
                requirements.
              </p>
            </MotionReveal>
          </div>

          <div className="pt-2">
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#F4EFE6] bg-[#11100E] hover:bg-[#232019] rounded transition-colors"
            >
              <span>Start With an Initial Project Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection variant="dark" />
    </div>
  );
}
