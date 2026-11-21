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
import { ServiceComparison } from '../components/ServiceComparison';
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
        title="Services — Brand Strategy, Digital Content, Websites & AI Solutions"
        description="Explore Akshit Sukhija’s four studio services: Brand Strategy & Storytelling, Digital Content & Creative Production, Websites & Digital Experiences, and AI-Powered Digital Solutions."
      />

      {/* 1. Editorial Header */}
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-14 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                Services · Independent Digital Content &amp; Solutions Studio
              </p>
              <span className="font-hand text-xl theme-accent-secondary">
                — Strategy, content, websites &amp; AI workflows
              </span>
            </div>
            <h1
              className="font-display theme-text leading-[1.08]"
              style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)' }}
            >
              Services Built Around Brand Clarity, Content &amp; Useful Digital Systems
            </h1>
            <p className="text-base sm:text-lg theme-text-muted leading-relaxed">
              Creative ideas. Clear stories. Digital experiences. Explore the four studio service
              categories below or use the interactive Solution Finder to match your brief with the
              right deliverable.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* 2. Four Studio Service Categories */}
      <section className="theme-bg border-b theme-border py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs theme-accent-secondary font-semibold uppercase tracking-wide">
              Four Studio Service Categories
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              01. Brand Strategy &amp; Storytelling · 02. Digital Content · 03. Websites · 04. AI Solutions
            </h2>
          </MotionReveal>

          <div className="space-y-8">
            {SERVICES.map((service, index) => {
              const showTech = !!expandedTechIds[service.id];
              return (
                <MotionReveal
                  key={service.id}
                  delay={index * 0.04}
                  className="bento-card p-6 sm:p-9 space-y-8"
                >
                  <div
                    id={service.id}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b theme-border scroll-mt-28"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <p className="font-mono text-xs theme-accent font-semibold">
                        Studio Service {service.number} · {service.targetAudience}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl theme-text">
                        {service.number}. {service.title}
                      </h3>
                      <p className="text-base theme-accent-secondary font-medium">
                        {service.plainTagline}
                      </p>
                    </div>
                    <Link
                      to={`/enquire?problem=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-3 min-h-[46px] text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
                    >
                      <span>Start a {service.title} Project</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
                    </Link>
                  </div>

                  {/* Problem -> What I Do -> What You Receive -> Relevant Project Evidence */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bento-card-raised p-5 space-y-2">
                          <p className="font-mono text-xs theme-text-muted font-semibold">
                            The Challenge
                          </p>
                          <p className="text-sm theme-text leading-relaxed">
                            {service.problemStatement}
                          </p>
                        </div>
                        <div className="bento-card-raised p-5 space-y-2">
                          <p className="font-mono text-xs theme-accent font-semibold">
                            Studio Approach
                          </p>
                          <p className="text-sm theme-text leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Real-World Scenarios */}
                      <div className="space-y-3">
                        <p className="font-mono text-xs theme-accent-secondary font-semibold">
                          Practical Client Scenarios
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.exampleScenarios.map((scenario) => (
                            <div
                              key={scenario.businessType}
                              className="bento-card-raised p-4 space-y-2"
                            >
                              <p className="font-mono text-xs theme-accent font-semibold">
                                {scenario.businessType}
                              </p>
                              <p className="text-xs theme-text-muted leading-relaxed">
                                <strong className="theme-text font-semibold">Problem: </strong>
                                {scenario.challenge}
                              </p>
                              <p className="text-xs theme-text leading-relaxed pt-1 border-t theme-border">
                                <strong className="theme-accent-secondary font-semibold">
                                  Solution:{' '}
                                </strong>
                                {scenario.practicalSolution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bento-card-raised p-6 space-y-6">
                      <div>
                        <p className="font-mono text-xs theme-accent font-semibold pb-3 border-b theme-border">
                          What You Receive
                        </p>
                        <ul className="space-y-2.5 text-xs theme-text pt-3">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span className="font-mono theme-accent font-semibold">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Technical Details */}
                      <div className="pt-3 border-t theme-border">
                        <button
                          type="button"
                          onClick={() => toggleTech(service.id)}
                          className="w-full flex items-center justify-between font-mono text-xs theme-text hover:theme-accent cursor-pointer"
                        >
                          <span>
                            {showTech
                              ? 'Hide tools & production workflow'
                              : 'See what is included in the workflow'}
                          </span>
                          {showTech ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        {showTech && (
                          <ul className="mt-3 space-y-1.5 text-xs theme-text-muted theme-surface border theme-border rounded-2xl p-3.5">
                            {service.technicalUnderTheHood.map((tech) => (
                              <li key={tech} className="leading-relaxed">
                                • {tech}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="pt-4 border-t theme-border space-y-3">
                        <p className="font-mono text-xs theme-accent-secondary font-semibold">
                          Relevant Studio Proof
                        </p>
                        {service.portfolioProof.map((proof) => (
                          <div
                            key={proof.title}
                            className="theme-surface border theme-border rounded-2xl p-3.5 space-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-semibold theme-text">{proof.title}</p>
                              {proof.slug && (
                                <Link
                                  to={`/work/${proof.slug}`}
                                  className="font-mono text-[11px] theme-accent font-semibold hover:underline"
                                >
                                  View Story →
                                </Link>
                              )}
                            </div>
                            <p className="text-xs theme-text-muted leading-relaxed">
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

      {/* 3. Reusable 3-Question SolutionFinder & Tier Comparison */}
      <section className="theme-bg border-b theme-border py-16 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal>
            <ServiceComparison />
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <SolutionFinder />
          </MotionReveal>
        </div>
      </section>

      {/* 4. Three Supporting Capabilities */}
      <section className="theme-bg border-b theme-border py-16 px-4 sm:px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
              Supporting Foundations
            </p>
            <h2 className="font-display text-3xl sm:text-4xl theme-text">
              Product Strategy &amp; UX · Brand &amp; Market Research · Software Quality
            </h2>
            <p className="text-sm sm:text-base theme-text-muted">
              Every studio engagement is backed by structured problem discovery before production
              and rigorous verification before delivery.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {SUPPORTING_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="bento-card p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="theme-accent font-semibold inline-flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {cap.number}
                    </span>
                    <span className="theme-accent-secondary">Supporting</span>
                  </div>
                  <h3 className="font-display text-2xl theme-text">{cap.title}</h3>
                  <p className="text-xs font-semibold theme-accent">{cap.tagline}</p>

                  <div className="space-y-2 text-xs theme-text-muted pt-2 border-t theme-border">
                    <p>
                      <strong className="theme-text">What I Do: </strong>
                      {cap.whatIDo}
                    </p>
                    <p>
                      <strong className="theme-text">What You Receive: </strong>
                      {cap.whatYouReceive}
                    </p>
                  </div>
                </div>
                <p className="font-mono text-[11px] theme-accent-secondary pt-3 border-t theme-border">
                  Proven in: {cap.evidenceProjects.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Flexible Engagement Models, 4-Step Scope Estimator & Working Process */}
      <section className="theme-bg border-b theme-border py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-14">
          <div className="space-y-8">
            <MotionReveal className="max-w-3xl space-y-2">
              <p className="font-mono text-xs theme-accent-secondary font-semibold uppercase tracking-wide">
                Flexible Engagement Models (INR)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl theme-text">
                Start Small With a Focused Sprint or Scope a Full Custom Build
              </h2>
              <p className="text-sm theme-text-muted">
                No invented package prices or unrealistic delivery promises. Every engagement is
                quoted transparently in INR after reviewing your brief and sample material.
              </p>
            </MotionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
              {ENGAGEMENT_MODELS.map((model) => (
                <div
                  key={model.id}
                  className="bento-card p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2.5">
                    <span className="font-mono text-xs theme-accent font-semibold">
                      Model {model.number}
                    </span>
                    <h3 className="font-display text-2xl theme-text">{model.title}</h3>
                    <p className="text-xs theme-accent-secondary font-medium">{model.bestFor}</p>
                    <p className="text-xs theme-text-muted leading-relaxed">
                      {model.plainDescription}
                    </p>
                  </div>
                  <p className="font-mono text-[11px] theme-text pt-3 border-t theme-border">
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

      <StudioFaqSection showCtaLink={true} />

      <CtaSection
        headline="Ready to scope a campaign, website, or AI workflow?"
        primaryLabel="Start a Project"
        primaryTo="/enquire"
        secondaryLabel="Explore Selected Work"
        secondaryTo="/work"
      />
    </div>
  );
}
