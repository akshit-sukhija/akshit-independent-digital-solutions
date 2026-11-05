import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import {
  BRAND_IDENTITY,
  SKILLS_MATRIX,
  VERIFIED_ACADEMIC_RECORD,
  PROJECTS,
} from '../data/studioData';

export function AboutPage() {
  return (
    <div>
      <PageMeta
        title="About Akshit — Independent Digital Solutions"
        description="Learn about Akshit’s problem-solving approach across AI workflow automation, data analytics, and custom software development for Indian startups and SMBs."
      />

      {/* Personal & Credible Introduction */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <MotionReveal className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs text-[#C9A24B]">
              About · Independent Individual Operator · India
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Bridging Analytical Rigour, Applied AI & Working Software
            </h1>
            <p className="text-lg text-[#E8D5A8] leading-relaxed">
              {BRAND_IDENTITY.positioningStatement}
            </p>
            <div className="space-y-4 text-base text-[#A9A092] leading-relaxed">
              <p>
                I am Akshit—an independent builder and analyst working at the intersection of
                AI workflow automation, business data analytics, and full-stack digital tools.
              </p>
              <p>
                My approach starts with a simple observation: most small businesses and early-stage
                teams do not suffer from a lack of software buzzwords. They suffer from fragmented
                information—customer records sitting unexamined in spreadsheets, critical dates
                buried inside PDF circulars, or diagnostic outputs scattered across incompatible
                tools.
              </p>
              <p>
                Because I work across data analysis (Python, SQL, Power BI), deterministic + AI
                automation, and application engineering (React, TypeScript, FastAPI), I can look at
                a business problem objectively and build the deliverable that actually solves it.
              </p>
            </div>
          </MotionReveal>

          {/* Operator Principles Card */}
          <MotionReveal
            delay={0.08}
            className="lg:col-span-5 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6"
          >
            <div className="border-b border-[#3A3429] pb-4">
              <p className="font-mono text-xs text-[#C9A24B]">Studio Operating Profile</p>
              <h2 className="font-display text-2xl text-[#F2EBDD] mt-1">
                How I Operate
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-mono text-xs text-[#E8D5A8]">Structure</p>
                <p className="text-[#A9A092] mt-1 leading-relaxed">
                  Solo independent operator—never a fictional agency front. You communicate directly
                  with the person doing the analysis and engineering.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#E8D5A8]">Primary Focus</p>
                <p className="text-[#A9A092] mt-1 leading-relaxed">
                  Indian startup founders, SMBs, D2C brands, consultants, and operational teams
                  with practical INR scope-based engagements.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#E8D5A8]">Core Differentiation</p>
                <p className="text-[#A9A092] mt-1 leading-relaxed">
                  {BRAND_IDENTITY.differentiation}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A3429] flex flex-wrap items-center justify-between gap-4">
              <a
                href="https://github.com/akshit-sukhija"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B]"
              >
                <span>GitHub (@akshit-sukhija)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/enquire"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C9A24B] hover:text-[#E8D5A8]"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Structured Skills Matrix (Data, AI, Development, Product) */}
      <section className="bg-[#1A1814] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#C9A24B]">
              Structured Technical Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
              Four Interconnected Disciplines
            </h2>
            <p className="text-base text-[#A9A092] leading-relaxed">
              Every capability listed below is backed by documented project work in this portfolio.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_MATRIX.map((group, idx) => (
              <MotionReveal
                key={group.category}
                delay={idx * 0.06}
                className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 md:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#3A3429] pb-3">
                    <span className="font-mono text-xs text-[#C9A24B]">
                      0{idx + 1} · {group.category}
                    </span>
                    <span className="font-mono text-xs text-[#A9A092]">
                      {group.skills.length} core tools
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    {group.category} Capabilities
                  </h3>

                  <p className="text-sm text-[#A9A092] leading-relaxed">{group.summary}</p>

                  {/* Clean unboxed inline metadata list */}
                  <p className="font-mono text-xs text-[#E8D5A8] pt-2">
                    {group.skills.join(' · ')}
                  </p>
                </div>

                <p className="text-xs text-[#A9A092] pt-3 border-t border-[#3A3429]">
                  <strong className="text-[#F2EBDD] font-normal">Applied in: </strong>
                  {group.appliedIn}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solving Methodology (Ivory Editorial Contrast Panel) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#7A5B14]">
              Engineering & Analytical Philosophy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#11100E]">
              How I Approach Unstructured Problems
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">Principle 01</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Deterministic Logic First, AI Second
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                Whether detecting schedule clashes in Notice Decoder or evaluating compliance rules
                in Contract Risk Governance, explicit deterministic rules handle the critical math
                and verdicts while AI handles unstructured text and narrative explanation.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">Principle 02</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Question Surface-Level Metrics
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                As demonstrated in Decoding Customer Value (3,900 records), high purchase spend does
                not automatically equal organic loyalty. Good analysis tests underlying promotional
                dependency before recommending commercial action.
              </p>
            </div>

            <div className="bg-white/80 border border-[#3A3429]/20 rounded-lg p-6 space-y-2.5">
              <p className="font-mono text-xs text-[#7A5B14]">Principle 03</p>
              <h3 className="text-base font-semibold text-[#11100E]">
                Auditability & Clean Handover
              </h3>
              <p className="text-sm text-[#232019] leading-relaxed">
                From SHA-256 artifact integrity verification in SentinelX to comprehensive
                technical documentation, deliverables are engineered so stakeholders can trust and
                maintain the output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Credibility: Verified Academic Record & Collaborator Attribution */}
      <section className="bg-[#11100E] py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Verified Academic Record (Secondary Supporting Credibility) */}
          <MotionReveal className="lg:col-span-6 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6">
            <div className="border-b border-[#3A3429] pb-4">
              <p className="font-mono text-xs text-[#A9A092]">
                Supporting Credibility · Verified Academic Record
              </p>
              <h2 className="font-display text-2xl text-[#F2EBDD] mt-1">
                Academic Foundation
              </h2>
            </div>

            <p className="text-xs text-[#A9A092] leading-relaxed">
              {VERIFIED_ACADEMIC_RECORD.contextNote}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#11100E] border border-[#3A3429] rounded p-4">
                <p className="font-mono text-xs text-[#A9A092]">Cumulative GPA</p>
                <p className="font-display text-3xl text-[#C9A24B] tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.cgpa}
                </p>
              </div>
              <div className="bg-[#11100E] border border-[#3A3429] rounded p-4">
                <p className="font-mono text-xs text-[#A9A092]">Aggregate Score</p>
                <p className="font-display text-3xl text-[#E8D5A8] tabular-nums mt-1">
                  {VERIFIED_ACADEMIC_RECORD.aggregatePercentage}
                </p>
              </div>
            </div>

            <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2">
              <p className="font-mono text-xs text-[#A9A092]">Verified Semester Progression</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {VERIFIED_ACADEMIC_RECORD.semesterSgpas.map((sem) => (
                  <div key={sem.semester} className="border-r last:border-r-0 border-[#3A3429] pr-2">
                    <p className="font-mono text-[11px] text-[#A9A092]">{sem.semester}</p>
                    <p className="font-mono text-sm font-semibold text-[#F2EBDD] tabular-nums">
                      SGPA {sem.sgpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          {/* Documented Roles & Collaborator Attribution Registry */}
          <MotionReveal
            delay={0.08}
            className="lg:col-span-6 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6"
          >
            <div className="border-b border-[#3A3429] pb-4">
              <p className="font-mono text-xs text-[#C9A24B]">
                Attribution & Documentation Ethics
              </p>
              <h2 className="font-display text-2xl text-[#F2EBDD] mt-1">
                Documented Project Roles & Co-Creators
              </h2>
            </div>

            <p className="text-xs text-[#A9A092] leading-relaxed">
              Every project in this studio portfolio clearly distinguishes between collaborative and
              solo work and credits co-creators accurately.
            </p>

            <ul className="space-y-3 text-xs">
              {PROJECTS.map((proj) => (
                <li
                  key={proj.slug}
                  className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <Link
                      to={`/work/${proj.slug}`}
                      className="font-semibold text-[#F2EBDD] hover:text-[#C9A24B]"
                    >
                      {proj.indexNumber}. {proj.title}
                    </Link>
                    <p className="text-[#A9A092] mt-0.5">
                      Role: <span className="text-[#E8D5A8]">{proj.documentedRole}</span>
                    </p>
                  </div>
                  <span className="font-mono text-[11px] text-[#A9A092] shrink-0">
                    {proj.collaborators}
                  </span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
