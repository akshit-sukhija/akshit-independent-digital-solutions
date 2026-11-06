import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { SolutionFinder } from '../components/SolutionFinder';
import {
  ProjectScopeEstimator,
  FiveStepProcessDiagram,
} from '../components/ArchitectureDiagram';
import { CtaSection } from '../components/CtaSection';
import { StudioFaqSection } from '../components/StudioFaqSection';
import {
  SERVICES,
  SUPPORTING_CAPABILITIES,
  ENGAGEMENT_MODELS,
} from '../data/studioData';

export function SolutionsPage() {
  const [expandedTechIds, setExpandedTechIds] = useState<Record<string, boolean>>({});

  const toggleTech = (id: string) => {
    setExpandedTechIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <PageMeta
        title="Solutions & Capabilities — Data, AI & Digital Products"
        description="Explore Data & Business Intelligence, AI & Workflow Automation, and Digital Products & Prototyping—plus the 3-Question Solution Finder and FAQ."
      />

      {/* 1. Header */}
      <section className="bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal className="max-w-3xl space-y-5">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wider">
              Solutions &amp; Capabilities · AKSHIT SUKHIJA
            </p>
            <h1
              className="font-display text-[#F4F0E8] leading-[1.08]"
              style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)' }}
            >
              Practical Digital Solutions Built Around Your Business Problem
            </h1>
            <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed">
              You never need to pick programming languages or technical frameworks yourself. Use
              the 3-question Solution Finder below or browse the three core capabilities to see how
              we can work together.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. Reusable 3-Question SolutionFinder */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <SolutionFinder />
          </MotionReveal>
        </div>
      </section>

      {/* 3. Three Core Capabilities */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
              Core Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
              Data &amp; Business Intelligence · AI &amp; Workflow Automation · Digital Products &amp; Prototyping
            </h2>
          </MotionReveal>

          <div className="space-y-12">
            {SERVICES.map((service, index) => {
              const showTech = !!expandedTechIds[service.id];
              return (
                <MotionReveal
                  key={service.id}
                  delay={index * 0.05}
                  className="bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 md:p-10 space-y-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#2C2F42]">
                    <div className="space-y-2 max-w-2xl">
                      <p className="font-mono text-xs text-[#8B75FF]">
                        Core Capability {service.number} · {service.targetAudience}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                        {service.number}. {service.title}
                      </h3>
                      <p className="text-base text-[#E6D3A7]">{service.plainTagline}</p>
                    </div>
                    <Link
                      to={`/enquire?problem=${encodeURIComponent(
                        service.id === 'data-intelligence'
                          ? 'Understand my business data'
                          : service.id === 'ai-automation'
                            ? 'Automate a repetitive workflow'
                            : 'Build a dashboard or internal tool'
                      )}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
                    >
                      <span>Enquire About {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Problem -> What I Do -> What You Receive -> Relevant Project Evidence */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 space-y-2">
                          <p className="font-mono text-xs text-[#A6A9B8]">The Problem</p>
                          <p className="text-sm text-[#F4F0E8] leading-relaxed">
                            {service.problemStatement}
                          </p>
                        </div>
                        <div className="bg-[#0E0F14] border border-[#8B75FF]/40 rounded-xl p-5 space-y-2">
                          <p className="font-mono text-xs text-[#8B75FF]">What I Do</p>
                          <p className="text-sm text-[#F4F0E8] leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Real-World Scenarios */}
                      <div className="space-y-3">
                        <p className="font-mono text-xs text-[#E6D3A7]">
                          Practical Business Examples
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.exampleScenarios.map((scenario) => (
                            <div
                              key={scenario.businessType}
                              className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 space-y-2"
                            >
                              <p className="font-mono text-xs text-[#D4AE5C]">
                                {scenario.businessType}
                              </p>
                              <p className="text-xs text-[#A6A9B8] leading-relaxed">
                                <strong className="text-[#F4F0E8]">Problem: </strong>
                                {scenario.challenge}
                              </p>
                              <p className="text-xs text-[#F4F0E8] leading-relaxed pt-1 border-t border-[#2C2F42]/60">
                                <strong className="text-[#8B75FF]">Solution: </strong>
                                {scenario.practicalSolution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-6 space-y-6">
                      <div>
                        <p className="font-mono text-xs text-[#D4AE5C] pb-3 border-b border-[#2C2F42]">
                          What You Receive
                        </p>
                        <ul className="space-y-2.5 text-xs text-[#F4F0E8] pt-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span className="font-mono text-[#8B75FF]">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Technical Details */}
                      <div className="pt-3 border-t border-[#2C2F42]">
                        <button
                          type="button"
                          onClick={() => toggleTech(service.id)}
                          className="w-full flex items-center justify-between font-mono text-xs text-[#E6D3A7] hover:text-[#8B75FF] cursor-pointer"
                        >
                          <span>
                            {showTech
                              ? 'Hide technical tools & methods'
                              : 'Show technical tools & methods (optional)'}
                          </span>
                          {showTech ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        {showTech && (
                          <ul className="mt-3 space-y-1.5 text-xs text-[#A6A9B8] bg-[#161822] border border-[#2C2F42] rounded-lg p-3.5">
                            {service.technicalUnderTheHood.map((tech) => (
                              <li key={tech} className="leading-relaxed">
                                • {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-4 border-t border-[#2C2F42] space-y-3">
                        <p className="font-mono text-xs text-[#8B75FF]">
                          Relevant Project Evidence
                        </p>
                        {service.portfolioProof.map((proof) => (
                          <div
                            key={proof.title}
                            className="bg-[#161822] border border-[#2C2F42] rounded-lg p-3.5 space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-semibold text-[#F4F0E8]">{proof.title}</p>
                              {proof.slug && (
                                <Link
                                  to={`/work/${proof.slug}`}
                                  className="font-mono text-[11px] text-[#D4AE5C] hover:underline"
                                >
                                  View Case Study →
                                </Link>
                              )}
                            </div>
                            <p className="text-xs text-[#A6A9B8] leading-relaxed">
                              {proof.summary}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Three Supporting Capabilities (Warm Ivory Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-16 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#4A32C4] font-medium uppercase tracking-wide">
              Supporting Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14]">
              Product Strategy &amp; UX · Brand &amp; Market Research · Software Quality
            </h2>
            <p className="text-sm sm:text-base text-[#1E202E]">
              Every project is backed by structured problem discovery before coding and strict
              quality checks during delivery.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORTING_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bg-[#EAE3D5] border border-[#D4CBB8] rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#4A32C4] font-semibold inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {cap.number}
                    </span>
                    <span className="text-[#7A5B14]">Supporting</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#0E0F14]">{cap.title}</h3>
                  <p className="text-xs font-medium text-[#4A32C4]">{cap.tagline}</p>

                  <div className="space-y-2 text-xs text-[#1E202E] pt-2 border-t border-[#D4CBB8]">
                    <p>
                      <strong>What I Do: </strong>
                      {cap.whatIDo}
                    </p>
                    <p>
                      <strong>What You Receive: </strong>
                      {cap.whatYouReceive}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-[11px] text-[#7A5B14] pt-3 border-t border-[#D4CBB8]">
                  Proven in: {cap.evidenceProjects.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Flexible Engagement Models, 4-Step Scope Estimator & Working Process */}
      <section className="bg-[#0E0F14] border-b border-[#2C2F42] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <div className="space-y-8">
            <MotionReveal className="max-w-3xl space-y-2">
              <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
                Flexible Engagement Models (INR)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                Start Small With a Pilot or Scope a Full Custom Build
              </h2>
              <p className="text-sm text-[#A6A9B8]">
                No invented package prices or unrealistic delivery promises. Every engagement is
                quoted transparently in INR after reviewing your actual problem and sample material.
              </p>
            </MotionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.id}
                  className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs text-[#D4AE5C]">
                      Model {model.number}
                    </span>
                    <h3 className="font-display text-2xl text-[#F4F0E8]">{model.title}</h3>
                    <p className="text-xs text-[#E6D3A7]">{model.bestFor}</p>
                    <p className="text-xs text-[#A6A9B8] leading-relaxed">
                      {model.plainDescription}
                    </p>
                  </div>
                  <p className="font-mono text-[11px] text-[#7AD992] pt-3 border-t border-[#2C2F42]">
                    Outcome: {model.whatYouGet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <MotionReveal>
            <ProjectScopeEstimator />
          </MotionReveal>

          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      <StudioFaqSection variant="dark" showCtaLink={true} />

      <CtaSection
        variant="ivory"
        headline="Ready to scope a pilot or custom project?"
        primaryLabel="Open Project Scope Builder"
        primaryTo="/enquire"
        secondaryLabel="Inspect Project Portfolio"
        secondaryTo="/work"
      />
    </div>
  );
}
