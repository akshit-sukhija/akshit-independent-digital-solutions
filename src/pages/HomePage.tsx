import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { IntersectionBlueprintDiagram } from '../components/ArchitectureDiagram';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  PROJECTS,
  SERVICES,
  ENGAGEMENT_STEPS,
} from '../data/studioData';

export function HomePage() {
  const flagshipProjects = PROJECTS.filter((p) => p.tier === 'flagship');
  const featuredAnalyticsProject = PROJECTS.find((p) => p.slug === 'decoding-customer-value');

  return (
    <div>
      <PageMeta
        title="Turning Complex Problems Into Clear Digital Solutions"
        description="Akshit | Independent Digital Solutions. Helping Indian startups and small businesses turn messy data, repetitive workflows, and early-stage product ideas into useful digital solutions."
      />

      {/* 1. Editorial Hero Section */}
      <section className="relative bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Positioning & Editorial Statement */}
            <MotionReveal className="lg:col-span-6 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <p className="font-mono text-xs text-[#C9A24B] tracking-wide">
                  Akshit · Independent Digital Solutions · India
                </p>

                <h1
                  className="font-display text-[#F2EBDD] leading-[1.08] tracking-tight"
                  style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.25rem)' }}
                >
                  {BRAND_IDENTITY.heroHeadline}
                </h1>

                <p className="text-lg sm:text-xl text-[#E8D5A8] font-normal leading-relaxed">
                  {BRAND_IDENTITY.heroSupportingCopy}
                </p>

                <p className="text-base text-[#A9A092] leading-relaxed max-w-xl">
                  {BRAND_IDENTITY.positioningStatement}
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/enquire"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F2EBDD] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Discuss a Project</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-[#3A3429] flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#A9A092]">
                  <span>Indian Startups & SMBs</span>
                  <span aria-hidden="true">·</span>
                  <span>D2C & E-Commerce</span>
                  <span aria-hidden="true">·</span>
                  <span>Scope-Based INR Proposals</span>
                </div>
              </div>
            </MotionReveal>

            {/* Right Column: Interactive Visual Representation of the Three Capabilities */}
            <MotionReveal delay={0.1} className="lg:col-span-6 flex flex-col justify-center">
              <IntersectionBlueprintDiagram />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Concise Introduction — Ivory Editorial Contrast Panel */}
      <section className="bg-[#F4EFE6] text-[#11100E] border-b border-[#3A3429]/30 py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <p className="font-mono text-xs text-[#7A5B14]">
                Why Work With an Independent Operator
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#11100E] leading-tight">
                One person who understands the business problem, analyses the data, and builds the deliverable.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-base text-[#232019] leading-relaxed">
              <p>
                Many small businesses and early-stage founders in India face an awkward gap:
                hiring a large software agency is too expensive for an internal workflow or initial
                product idea, while hiring a narrow specialist leaves you stitching together
                spreadsheets, prompts, and UI screens yourself.
              </p>
              <p>
                I work at the intersection of <strong>AI and workflow automation</strong>,{' '}
                <strong>data analytics and business intelligence</strong>, and{' '}
                <strong>custom digital product development</strong>. Instead of selling pre-packaged
                software retainers, I review your actual problem—whether that is a 3,900-row
                customer spreadsheet, a stack of unstructured PDFs, or an operational tool your
                team needs—and build a practical digital solution around it.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#7A5B14]">
                <span>Direct Solo Collaboration</span>
                <span aria-hidden="true">·</span>
                <span>No Agency Handoffs</span>
                <span aria-hidden="true">·</span>
                <span>Small Paid Pilots Available</span>
                <span aria-hidden="true">·</span>
                <Link to="/about" className="underline hover:text-[#11100E]">
                  Read Full Background →
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 3. Two Flagship Project Previews + Featured Analytics Proof */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C9A24B]">
                Verified Portfolio Evidence · Strict Priority Hierarchy
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD]">
                What I Have Actually Built
              </h2>
              <p className="text-base text-[#A9A092] leading-relaxed">
                Real systems and analytical studies with documented architectures, explicit
                collaborator attribution, and transparent scope boundaries.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>View All 5 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          {/* Flagship 01 & Flagship 02 */}
          <div className="space-y-8">
            {flagshipProjects.map((project, idx) => (
              <MotionReveal key={project.slug} delay={idx * 0.08}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>

          {/* Featured Project 03 Callout (Analytics & BI Proof) */}
          {featuredAnalyticsProject && (
            <MotionReveal className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                    <span className="text-[#C9A24B]">{featuredAnalyticsProject.tierLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredAnalyticsProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Role: {featuredAnalyticsProject.documentedRole}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    03. {featuredAnalyticsProject.title} — 3,900-Record SQL, Python & Power BI Study
                  </h3>
                  <p className="text-sm text-[#A9A092] leading-relaxed">
                    {featuredAnalyticsProject.solutionSummary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 shrink-0">
                  <Link
                    to={`/work/${featuredAnalyticsProject.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F2EBDD] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors whitespace-nowrap"
                  >
                    <span>Explore Analytics Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A24B]" />
                  </Link>
                  {featuredAnalyticsProject.githubUrl && (
                    <a
                      href={featuredAnalyticsProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#E8D5A8] hover:underline whitespace-nowrap"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </MotionReveal>
          )}
        </div>
      </section>

      {/* 4. Three Connected Service Category Previews */}
      <section className="bg-[#1A1814] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C9A24B]">
                Commercial Capabilities · Outcome-First Services
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD]">
                What Business Problems I Solve
              </h2>
              <p className="text-base text-[#A9A092] leading-relaxed">
                Three connected service areas designed for Indian founders, SMBs, D2C brands, and
                operational teams.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>Compare Services & Deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICES.map((service, index) => (
              <MotionReveal
                key={service.id}
                delay={index * 0.08}
                className="bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B]/70 rounded-lg p-6 flex flex-col justify-between gap-6 transition-colors"
              >
                <div className="space-y-4">
                  <p className="font-mono text-xs text-[#C9A24B]">
                    Service {service.number}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#E8D5A8] leading-relaxed">
                    {service.targetAudience}
                  </p>
                  <p className="text-sm text-[#A9A092] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-3 border-t border-[#3A3429] space-y-2">
                    <p className="font-mono text-xs text-[#A9A092]">Typical Deliverables:</p>
                    <ul className="space-y-1.5 text-xs text-[#F2EBDD]/90">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="font-mono text-[#C9A24B]">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3A3429] space-y-3">
                  <p className="font-mono text-xs text-[#A9A092]">
                    Portfolio Proof:{' '}
                    <span className="text-[#E8D5A8]">
                      {service.portfolioProof.map((p) => p.title).join(' · ')}
                    </span>
                  </p>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8]"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Approach — Customised Engagement Model */}
      <section className="bg-[#11100E] py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C9A24B]">
                How Engagement Works · Problem-First & Scope-Based
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD]">
                You Describe the Problem. I Recommend the Solution.
              </h2>
              <p className="text-base text-[#A9A092] leading-relaxed">
                Clients never need to pick programming languages or over-commit to large contracts
                when a focused analysis or small paid pilot can validate the outcome first.
              </p>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>See Detailed 6-Stage Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ENGAGEMENT_STEPS.map((item, idx) => (
              <MotionReveal
                key={item.step}
                delay={idx * 0.06}
                className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-5 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs text-[#C9A24B]">Step {item.step}</span>
                  <h3 className="text-base font-semibold text-[#F2EBDD] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A9A092] leading-relaxed">{item.description}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Strong Final Enquiry CTA */}
      <CtaSection variant="ivory" />
    </div>
  );
}
