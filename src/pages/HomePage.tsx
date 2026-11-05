import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import {
  IntersectionBlueprintDiagram,
  AiRulesHumanDiagram,
  FiveStepProcessDiagram,
} from '../components/ArchitectureDiagram';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  PROJECTS,
  SERVICES,
} from '../data/studioData';

export function HomePage() {
  const [showCodeProfile, setShowCodeProfile] = useState(false);
  const primaryProjects = PROJECTS.filter((p) => p.tier !== 'secondary');
  const secondaryProjects = PROJECTS.filter((p) => p.tier === 'secondary');

  return (
    <div>
      <PageMeta
        title="Turning Complex Problems Into Clear Digital Solutions"
        description="Akshit | Independent Digital Solutions. Helping Indian startups and small businesses turn messy data, repetitive workflows, and early-stage product ideas into useful digital solutions."
      />

      {/* 1. Hero Section — Clear Value Proposition + Visual Problem-to-Solution Diagram */}
      <section className="relative bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <MotionReveal className="lg:col-span-6 flex flex-col justify-center space-y-8">
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

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#1A1814] border border-[#3A3429] rounded p-3.5">
                  <p className="font-mono text-[11px] text-[#C9A24B]">01 · AI & Rules</p>
                  <p className="text-xs text-[#F2EBDD] font-medium mt-1">
                    Notice & contract readers
                  </p>
                </div>
                <div className="bg-[#1A1814] border border-[#3A3429] rounded p-3.5">
                  <p className="font-mono text-[11px] text-[#C9A24B]">02 · Data & BI</p>
                  <p className="text-xs text-[#F2EBDD] font-medium mt-1">
                    SQL, Python & Power BI
                  </p>
                </div>
                <div className="bg-[#1A1814] border border-[#3A3429] rounded p-3.5">
                  <p className="font-mono text-[11px] text-[#C9A24B]">03 · Web Tools</p>
                  <p className="text-xs text-[#F2EBDD] font-medium mt-1">
                    Dashboards & PDF engines
                  </p>
                </div>
              </div>

              <div className="space-y-5 pt-1">
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
                  <span>For Indian Founders & SMBs</span>
                  <span aria-hidden="true">·</span>
                  <span>Plain-English Collaboration</span>
                  <span aria-hidden="true">·</span>
                  <span>Scope-Based INR Quotes</span>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08} className="lg:col-span-6 flex flex-col justify-center">
              <IntersectionBlueprintDiagram />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* 2. Personal Introduction (Ivory Section + Optional Interactive Code-Style Profile Card) */}
      <section className="bg-[#F4EFE6] text-[#11100E] border-b border-[#3A3429]/30 py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="font-mono text-xs text-[#7A5B14]">
                Personal Introduction · Direct Solo Operator
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#11100E] leading-tight">
                You explain the business headache. I analyse the data and build the solution.
              </h2>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowCodeProfile((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-[#11100E] bg-white/80 border border-[#3A3429]/30 hover:border-[#11100E] rounded transition-colors cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#7A5B14]" />
                  <span>
                    {showCodeProfile
                      ? 'Hide Technical Profile Card'
                      : 'View Optional Code-Style Profile Card'}
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base text-[#232019] leading-relaxed">
              <p>
                Many small businesses and startups in India face a frustrating choice: hiring a
                big software agency is too expensive when you just want to fix an internal
                workflow, while hiring a narrow freelancer leaves you connecting spreadsheets,
                AI tools, and web screens on your own.
              </p>
              <p>
                I work across <strong>business data analysis</strong>,{' '}
                <strong>AI workflow automation</strong>, and{' '}
                <strong>custom web tool development</strong> as a solo operator. Whether you have a
                confusing 3,900-row customer spreadsheet, a stack of routine PDF notices, or an
                early product idea, we can start with a realistic scope—or a small paid pilot—and
                turn it into something your team can use right away.
              </p>

              {showCodeProfile && (
                <pre className="bg-[#11100E] text-[#E8D5A8] border border-[#3A3429] rounded-lg p-5 font-mono text-xs overflow-x-auto leading-relaxed mt-4">
                  <code>{`// Optional Technical Profile Card (For Developers & Reviewers)
const akshitStudio = {
  operator: "Akshit (Independent Solo Operator · India)",
  focusAreas: [
    "01. Business Data & Insights (Python, SQL, Pandas, NumPy, Power BI)",
    "02. AI & Workflow Automation (LLMs + Fixed Deterministic Rules)",
    "03. Custom Digital Tools (React 19, TypeScript, FastAPI, SQLite, ReportLab)"
  ],
  prioritisedProjects: [
    "01. Notice Decoder (Live Render App + GitHub)",
    "02. SentinelX (100+ Page Technical Report)",
    "03. Decoding Customer Value (3,900-Record SQL & Power BI Study)",
    "04. Contract Risk Governance Engine (Rule-Backed AI Prototype)",
    "05. Lureline (Live Vercel Investigation Workbench)"
  ],
  engagementModel: "Problem-first, scope-based INR proposals (small pilots welcome)"
};`}</code>
                </pre>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#7A5B14]">
                <span>Direct Collaboration With Me</span>
                <span aria-hidden="true">·</span>
                <span>No Middlemen</span>
                <span aria-hidden="true">·</span>
                <Link to="/about" className="underline hover:text-[#11100E]">
                  More About My Background & Skills →
                </Link>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 3. Strong Project Previews (Top 3 Primary + 2 Secondary Accessible) */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C9A24B]">
                Real Project Proof · Prioritised Portfolio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD]">
                Five Real Projects I Have Built & Analysed
              </h2>
              <p className="text-base text-[#A9A092] leading-relaxed">
                Explained in everyday English first—with an interactive Evidence & Technical
                Inspector on every card for reviewers who want to check the code, SQL, or reports.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>Open Full Portfolio Explorer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          {/* Primary Projects (01. Notice Decoder, 02. SentinelX, 03. Decoding Customer Value) */}
          <div className="space-y-8">
            {primaryProjects.map((project, idx) => (
              <MotionReveal key={project.slug} delay={idx * 0.06}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>

          {/* Secondary Projects (04. Contract Risk Governance Engine, 05. Lureline) */}
          <div className="pt-4 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#3A3429] pb-3">
              <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                Additional Technical Prototypes (Projects 04 & 05)
              </h3>
              <span className="font-mono text-xs text-[#A9A092]">
                Rule-Backed AI Compliance & Security Workbench
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {secondaryProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Diagram: How AI, Fixed Rules, and Human Checks Work Together */}
      <section className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <AiRulesHumanDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* 5. Three Understandable Services */}
      <section className="bg-[#11100E] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C9A24B]">
                Services & Capabilities · Plain-English Outcomes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD]">
                Three Ways I Can Help Your Business
              </h2>
              <p className="text-base text-[#A9A092] leading-relaxed">
                Whether you have messy spreadsheets, repetitive document work, or an idea for a
                custom tool, we pick the simplest service that solves your problem.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>Try the 4-Step Scope Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SERVICES.map((service, index) => (
              <MotionReveal
                key={service.id}
                delay={index * 0.06}
                className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B]/70 rounded-lg p-6 flex flex-col justify-between gap-6 transition-colors"
              >
                <div className="space-y-4">
                  <p className="font-mono text-xs text-[#C9A24B]">Service {service.number}</p>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#E8D5A8] leading-relaxed">{service.plainTagline}</p>
                  <p className="text-sm text-[#A9A092] leading-relaxed">{service.description}</p>

                  <div className="pt-3 border-t border-[#3A3429] space-y-2">
                    <p className="font-mono text-xs text-[#C9A24B]">What You Receive:</p>
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
                    Project Proof:{' '}
                    <span className="text-[#E8D5A8]">
                      {service.portfolioProof.map((p) => p.title).join(' · ')}
                    </span>
                  </p>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8]"
                  >
                    <span>See {service.title} Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Five-Step Working Process Diagram */}
      <section className="bg-[#11100E] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal>
            <FiveStepProcessDiagram />
          </MotionReveal>
        </div>
      </section>

      {/* 7. Obvious Next Step CTA */}
      <CtaSection variant="ivory" />
    </div>
  );
}
