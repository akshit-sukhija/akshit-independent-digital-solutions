import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import {
  ProjectScopeEstimator,
  FiveStepProcessDiagram,
} from '../components/ArchitectureDiagram';
import { CtaSection } from '../components/CtaSection';
import { SERVICES } from '../data/studioData';

export function SolutionsPage() {
  const [openTechServiceId, setOpenTechServiceId] = useState<string | null>(null);

  return (
    <div>
      <PageMeta
        title="Solutions & 4-Step Scope Estimator — Data, AI & Custom Web Tools"
        description="Explore three simple services for Indian startups and small businesses: Business Data & Insights, AI & Workflow Automation, and Custom Digital Tools—plus a 4-step project scope estimator."
      />

      {/* Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Services & Capabilities · Plain-English Business Outcomes (INR)
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Three Simple Ways I Can Solve Your Business Problem
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              You never need to know whether your problem requires Python, SQL, React, or AI.
              Explain what is taking too much time or what question your numbers are not answering,
              and I will recommend the right solution.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Genuine 4-Step Project Scope Estimator */}
      <section className="bg-[#11100E] py-14 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <ProjectScopeEstimator />
          </MotionReveal>
        </div>
      </section>

      {/* The Three Services in Everyday English + Expandable Technical Notes */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {SERVICES.map((service) => {
            const isTechOpen = openTechServiceId === service.id;
            return (
              <MotionReveal
                key={service.id}
                className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-10 space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#3A3429] pb-6">
                  <div className="space-y-2 max-w-2xl">
                    <p className="font-mono text-xs text-[#C9A24B]">
                      Service {service.number}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
                      {service.number}. {service.title}
                    </h2>
                    <p className="text-base sm:text-lg text-[#E8D5A8]">
                      {service.plainTagline}
                    </p>
                  </div>
                  <Link
                    to="/enquire"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Discuss a {service.title} Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-mono text-xs text-[#A9A092]">
                        When You Need This
                      </h3>
                      <p className="text-sm text-[#F2EBDD] leading-relaxed">
                        {service.problemStatement}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-mono text-xs text-[#C9A24B]">
                        How I Help You
                      </h3>
                      <p className="text-sm text-[#A9A092] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <h3 className="font-mono text-xs text-[#E8D5A8]">
                        Real-World Examples for Indian Businesses
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.exampleScenarios.map((scenario) => (
                          <div
                            key={scenario.businessType}
                            className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2"
                          >
                            <p className="font-mono text-xs text-[#C9A24B]">
                              {scenario.businessType}
                            </p>
                            <p className="text-xs text-[#A9A092] leading-relaxed">
                              <strong className="text-[#F2EBDD] font-normal">Problem: </strong>
                              {scenario.challenge}
                            </p>
                            <p className="text-xs text-[#E8D5A8] leading-relaxed pt-1 border-t border-[#3A3429]/60">
                              <strong className="text-[#F2EBDD] font-normal">Solution: </strong>
                              {scenario.practicalSolution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Technical Details */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenTechServiceId(isTechOpen ? null : service.id)
                        }
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
                      >
                        <span>
                          {isTechOpen
                            ? 'Hide Technical Implementation Details'
                            : 'Show Technical Details (For Developers)'}
                        </span>
                        {isTechOpen ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isTechOpen && (
                        <ul className="mt-3 bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1.5 font-mono text-xs text-[#A9A092]">
                          {service.technicalUnderTheHood.map((tech) => (
                            <li key={tech}>• {tech}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Deliverables & Project Proof */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 space-y-4">
                      <h3 className="font-mono text-xs text-[#C9A24B]">
                        What You Can Receive
                      </h3>
                      <ul className="space-y-2.5 text-sm text-[#F2EBDD]">
                        {service.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2.5">
                            <span className="font-mono text-[#C9A24B]">—</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 space-y-4">
                      <h3 className="font-mono text-xs text-[#E8D5A8]">
                        Proof From My Portfolio
                      </h3>
                      <div className="space-y-3">
                        {service.portfolioProof.map((proof) => (
                          <div
                            key={proof.title}
                            className="pb-3 last:pb-0 border-b last:border-b-0 border-[#3A3429]/60 space-y-1"
                          >
                            {proof.slug ? (
                              <Link
                                to={`/work/${proof.slug}`}
                                className="text-sm font-semibold text-[#C9A24B] hover:underline inline-flex items-center gap-1"
                              >
                                <span>{proof.title}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ) : (
                              <p className="text-sm font-semibold text-[#F2EBDD]">{proof.title}</p>
                            )}
                            <p className="text-xs text-[#A9A092] leading-relaxed">
                              {proof.summary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </section>

      {/* Honest INR Pricing Explanation (Ivory Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-20 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs text-[#7A5B14]">
                Fair & Practical Pricing · India (INR)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#11100E] leading-tight">
                Why I Quote Based on Your Scope Instead of Fixed Price Tables
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#232019] leading-relaxed">
              <p>
                Cleaning one 3,000-row spreadsheet and making a Power BI dashboard takes very
                different effort than building a full web app with automated PDF reports.
              </p>
              <p>
                Instead of forcing you into expensive fixed packages or monthly retainers, I share
                a clear <strong>INR (₹) quote</strong> after checking four simple things:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                <div className="bg-white/80 border border-[#3A3429]/20 rounded p-4">
                  <strong>1. How complex is the problem?</strong> (Simple spreadsheet analysis vs.
                  custom web software)
                </div>
                <div className="bg-white/80 border border-[#3A3429]/20 rounded p-4">
                  <strong>2. What data or files are ready?</strong> (Clean exports vs. messy PDFs
                  that need extra cleaning)
                </div>
                <div className="bg-white/80 border border-[#3A3429]/20 rounded p-4">
                  <strong>3. What do you want delivered?</strong> (A short insight guide, a small
                  paid pilot, or a full web tool)
                </div>
                <div className="bg-white/80 border border-[#3A3429]/20 rounded p-4">
                  <strong>4. What timeline makes sense?</strong> (Agreed together after reviewing
                  your sample files)
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Five-Step Working Journey Diagram */}
      <section className="bg-[#11100E] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      <CtaSection variant="dark" />
    </div>
  );
}
