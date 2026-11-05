import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import {
  SERVICES,
  ENGAGEMENT_STEPS,
  PROBLEM_CATEGORIES,
} from '../data/studioData';
import { matchProblemToService } from '../utils/studioLogic';

export function SolutionsPage() {
  const [selectedProblem, setSelectedProblem] = useState<string>(PROBLEM_CATEGORIES[0]);
  const matched = matchProblemToService(selectedProblem);

  return (
    <div>
      <PageMeta
        title="Solutions & Capabilities — Data, AI Automation & Custom Tools"
        description="Three connected digital solution capabilities for Indian startups and small businesses: Business Data & Insights, AI & Workflow Automation, and Custom Digital Tools & Prototypes."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Services & Capabilities · Scope-Based Indian Business Engagements (INR)
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Three Connected Capabilities Around Your Business Problem
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              You do not need to know whether your business needs Python, SQL, React, or an AI
              workflow. You describe the operational bottleneck or question—and I design and build
              the right-sized deliverable.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive Problem-to-Solution Diagnostic Matcher */}
      <section className="bg-[#1A1814] border-b border-[#3A3429] py-14 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Interactive Problem-First Guide
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
                What Are You Trying to Solve Right Now?
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092]">
              Select a business problem to see the recommended approach
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Problem Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {PROBLEM_CATEGORIES.map((problem) => {
                const isSelected = selectedProblem === problem;
                return (
                  <button
                    key={problem}
                    type="button"
                    onClick={() => setSelectedProblem(problem)}
                    className={`text-left px-4 py-3 rounded border text-sm transition-colors flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#232019] border-[#C9A24B] text-[#F2EBDD] font-medium'
                        : 'bg-[#11100E] border-[#3A3429] text-[#A9A092] hover:text-[#F2EBDD]'
                    }`}
                  >
                    <span>{problem}</span>
                    <span className="font-mono text-xs text-[#C9A24B]">→</span>
                  </button>
                );
              })}
            </div>

            {/* Matched Recommendation Panel */}
            <div className="lg:col-span-7 bg-[#11100E] border border-[#3A3429] rounded-lg p-6 md:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#C9A24B]">
                  <span>Recommended Service Area</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Service {matched.recommendedService.number}: {matched.recommendedService.title}
                  </span>
                </div>

                <h3 className="font-display text-3xl text-[#F2EBDD]">
                  {matched.recommendedService.title}
                </h3>

                <p className="text-sm text-[#F2EBDD]/90 leading-relaxed">{matched.rationale}</p>

                <div className="bg-[#1A1814] border border-[#3A3429] rounded p-4 space-y-1.5">
                  <p className="font-mono text-xs text-[#E8D5A8]">
                    Practical Starting Point / Optional Paid Pilot:
                  </p>
                  <p className="text-sm text-[#A9A092] leading-relaxed">
                    {matched.suggestedPilotIdea}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3A3429] flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#A9A092]">
                  Proof:{' '}
                  {matched.recommendedService.portfolioProof.map((p) => p.title).join(' · ')}
                </span>
                <Link
                  to={`/enquire?problem=${encodeURIComponent(selectedProblem)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Enquire About This Problem</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Core Services in Full Detail */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {SERVICES.map((service) => (
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
                  <p className="text-base text-[#E8D5A8]">{service.targetAudience}</p>
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
                {/* Left Column: Problem, Approach & Scenarios */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-mono text-xs text-[#A9A092]">
                      The Operational Problem
                    </h3>
                    <p className="text-sm text-[#F2EBDD] leading-relaxed">
                      {service.problemStatement}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-mono text-xs text-[#C9A24B]">How I Solve It</h3>
                    <p className="text-sm text-[#A9A092] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="font-mono text-xs text-[#E8D5A8]">
                      Indian Business Scenarios
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
                            <strong className="text-[#F2EBDD] font-normal">Challenge: </strong>
                            {scenario.challenge}
                          </p>
                          <p className="text-xs text-[#E8D5A8] leading-relaxed pt-1 border-t border-[#3A3429]/60">
                            <strong className="text-[#F2EBDD] font-normal">Deliverable: </strong>
                            {scenario.practicalSolution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Deliverables & Portfolio Proof */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 space-y-4">
                    <h3 className="font-mono text-xs text-[#C9A24B]">
                      Possible Deliverables
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
                      Verified Portfolio Proof
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
                          <p className="text-xs text-[#A9A092] leading-relaxed">{proof.summary}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* Commercial Presentation & Customised Engagement Model (Ivory Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs text-[#7A5B14]">
                Transparent Commercial Model · INR Scope-Based Pricing
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#11100E] leading-tight">
                Flexible, Scope-Based Engagements—Not Rigid Packages
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#232019] leading-relaxed">
              <p>
                Every business problem has a different starting point. Cleaning a single 3,000-row
                sales spreadsheet and building a Power BI view requires a very different effort
                than engineering a multi-file ingestion backend with automated PDF reporting.
              </p>
              <p>
                For that reason, I do not publish arbitrary fixed price tables or push bloated
                monthly retainers. Final pricing in <strong>INR (₹)</strong> depends on:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm">
                <li className="bg-white/80 border border-[#3A3429]/20 rounded p-3.5">
                  <strong>01. Problem Complexity:</strong> Whether the task requires straightforward
                  SQL/Python analysis or custom full-stack software.
                </li>
                <li className="bg-white/80 border border-[#3A3429]/20 rounded p-3.5">
                  <strong>02. Data Availability:</strong> How clean, structured, and accessible your
                  existing spreadsheets or documents are.
                </li>
                <li className="bg-white/80 border border-[#3A3429]/20 rounded p-3.5">
                  <strong>03. Agreed Deliverables:</strong> From an insight report or small paid
                  pilot to a complete web prototype.
                </li>
                <li className="bg-white/80 border border-[#3A3429]/20 rounded p-3.5">
                  <strong>04. Realistic Timeline:</strong> Defined together only after reviewing the
                  actual scope and material.
                </li>
              </ul>
            </div>
          </MotionReveal>

          {/* 5-Step Customised Engagement Sequence */}
          <div className="pt-6 border-t border-[#3A3429]/20">
            <p className="font-mono text-xs text-[#7A5B14] mb-6">
              How We Define Your Project Scope
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {ENGAGEMENT_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="bg-white/80 border border-[#3A3429]/25 rounded-lg p-5 space-y-2"
                >
                  <p className="font-mono text-xs text-[#7A5B14]">Step {item.step}</p>
                  <h3 className="text-sm font-semibold text-[#11100E]">{item.title}</h3>
                  <p className="text-xs text-[#232019] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        variant="dark"
        headline="Have a specific business problem? Let's define the right solution around it."
        primaryLabel="Discuss Your Project"
        primaryTo="/enquire"
        secondaryLabel="Review How I Work"
        secondaryTo="/process"
      />
    </div>
  );
}
