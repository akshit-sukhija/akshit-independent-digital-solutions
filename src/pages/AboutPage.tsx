import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code2, UserCheck } from 'lucide-react';
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
  const [showCodeCard, setShowCodeCard] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);

  return (
    <div>
      <PageMeta
        title="About Akshit — Independent Digital Solutions"
        description="Meet Akshit—an independent solo operator in India helping startups and small businesses with data analysis, AI automation, and custom digital tools."
      />

      {/* Personal Introduction + Profile Card */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Simple-English Story */}
          <MotionReveal className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs text-[#C9A24B]">
              About Me · Independent Solo Operator · India
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Helping Businesses Turn Messy Data and Manual Work Into Clear Digital Tools
            </h1>
            <p className="text-lg text-[#E8D5A8] leading-relaxed">
              {BRAND_IDENTITY.positioningStatement}
            </p>
            <div className="space-y-4 text-base text-[#A9A092] leading-relaxed">
              <p>
                Hi, I’m Akshit. I work independently at the intersection of{' '}
                <strong className="text-[#F2EBDD] font-normal">business data analysis</strong>,{' '}
                <strong className="text-[#F2EBDD] font-normal">AI workflow automation</strong>, and{' '}
                <strong className="text-[#F2EBDD] font-normal">custom web software</strong>.
              </p>
              <p>
                Most growing businesses do not need complicated tech buzzwords. They need someone
                who can look at a confusing sales spreadsheet, a pile of routine PDF circulars, or
                an idea for an internal tool—understand the business problem behind it—and build a
                clean, working solution.
              </p>
              <p>
                Because I handle the data cleaning, rule logic, and web interface myself, you work
                directly with one person from our first conversation to final handover.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowCodeCard((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#C9A24B]" />
                <span>
                  {showCodeCard
                    ? 'Switch to Standard Profile Card'
                    : 'View Optional Code-Style Profile Card'}
                </span>
              </button>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
              >
                <span>See My 5 Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </MotionReveal>

          {/* Right Column: Profile Portrait Card + Optional Interactive Code-Style Profile View */}
          <MotionReveal
            delay={0.06}
            className="lg:col-span-5 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6"
          >
            {/* Profile Photo Frame with Resilient Studio Monogram Fallback */}
            <div className="flex items-center gap-5 border-b border-[#3A3429] pb-6">
              <div className="relative w-20 h-20 rounded-lg bg-[#11100E] border border-[#C9A24B]/60 flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Akshit — Independent Digital Solutions"
                  referrerPolicy="no-referrer"
                  onLoad={() => setPhotoLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className={`w-full h-full object-cover ${photoLoaded ? 'block' : 'hidden'}`}
                />
                {!photoLoaded && (
                  <div className="text-center select-none">
                    <span className="font-display text-3xl text-[#C9A24B] block leading-none">
                      A
                    </span>
                    <span className="font-mono text-[9px] text-[#E8D5A8] tracking-widest uppercase">
                      Studio
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C9A24B]">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Independent Operator</span>
                </div>
                <h2 className="font-display text-2xl text-[#F2EBDD]">Akshit</h2>
                <p className="text-xs text-[#A9A092]">
                  AI Automation · Data Analysis · Custom Web Tools
                </p>
              </div>
            </div>

            {showCodeCard ? (
              <div className="space-y-2">
                <p className="font-mono text-xs text-[#C9A24B]">
                  Interactive Code-Style Profile Card
                </p>
                <pre className="bg-[#11100E] border border-[#3A3429] rounded p-4 font-mono text-xs text-[#E8D5A8] overflow-x-auto leading-relaxed">
                  <code>{`{
  "name": "Akshit",
  "studio": "Independent Digital Solutions",
  "location": "India (INR Scope-Based Work)",
  "coreCapabilities": {
    "data": ["Python", "SQL", "Pandas", "NumPy", "Power BI"],
    "ai": ["Applied AI", "NLP", "Prompt Design", "Rule-Backed Automation"],
    "web": ["React 19", "TypeScript", "FastAPI", "Streamlit", "SQLite"],
    "product": ["Research", "Prototyping", "Workflows", "Documentation"]
  },
  "verifiedAcademicRecord": {
    "cgpa": "9.10 / 10",
    "aggregate": "85.026%",
    "sgpas": [9.50, 8.81, 9.10, 8.96]
  },
  "github": "https://github.com/akshit-sukhija"
}`}</code>
                </pre>
              </div>
            ) : (
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-mono text-xs text-[#E8D5A8]">How I Work With Clients</p>
                  <p className="text-[#A9A092] mt-1 leading-relaxed">
                    Solo independent operator—not a multi-person agency. You talk directly with me
                    throughout the entire project.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#E8D5A8]">Who I Help Most</p>
                  <p className="text-[#A9A092] mt-1 leading-relaxed">
                    Indian startup founders, small and medium businesses, D2C brands, consultants,
                    and operational teams.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#E8D5A8]">What Makes My Work Different</p>
                  <p className="text-[#A9A092] mt-1 leading-relaxed">
                    {BRAND_IDENTITY.differentiation}
                  </p>
                </div>
              </div>
            )}

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

      {/* Skills Section: Simple English First + Technical Tools */}
      <section className="bg-[#1A1814] py-20 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <MotionReveal className="max-w-3xl space-y-2">
            <p className="font-mono text-xs text-[#C9A24B]">
              Skills & Capabilities · Plain English + Technical Stack
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
              What I Bring to Your Project
            </h2>
            <p className="text-base text-[#A9A092] leading-relaxed">
              Grouped into four clear areas, showing both the practical business benefit and the
              technical tools used under the hood.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_MATRIX.map((group, idx) => (
              <MotionReveal
                key={group.category}
                delay={idx * 0.05}
                className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 md:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#3A3429] pb-3">
                    <span className="font-mono text-xs text-[#C9A24B]">
                      0{idx + 1} · {group.category}
                    </span>
                    <span className="font-mono text-xs text-[#A9A092]">
                      {group.skills.join(' · ')}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
                    {group.plainTitle}
                  </h3>

                  <p className="text-sm text-[#A9A092] leading-relaxed">{group.summary}</p>

                  <ul className="space-y-2 text-xs text-[#F2EBDD]/90 pt-1">
                    {group.plainOutcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <span className="font-mono text-[#C9A24B]">—</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-[#A9A092] pt-3 border-t border-[#3A3429]">
                  <strong className="text-[#E8D5A8] font-normal">Proven in: </strong>
                  {group.appliedIn}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Credibility: Verified Academic Record & Collaborator Credits */}
      <section className="bg-[#11100E] py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Verified Academic Record */}
          <MotionReveal className="lg:col-span-6 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6">
            <div className="border-b border-[#3A3429] pb-4">
              <p className="font-mono text-xs text-[#A9A092]">
                Supporting Credibility · Verified Academic Record
              </p>
              <h2 className="font-display text-2xl text-[#F2EBDD] mt-1">
                Academic Consistency
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
              <p className="font-mono text-xs text-[#A9A092]">Semester SGPAs</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {VERIFIED_ACADEMIC_RECORD.semesterSgpas.map((sem) => (
                  <div
                    key={sem.semester}
                    className="border-r last:border-r-0 border-[#3A3429] pr-2"
                  >
                    <p className="font-mono text-[11px] text-[#A9A092]">{sem.semester}</p>
                    <p className="font-mono text-sm font-semibold text-[#F2EBDD] tabular-nums">
                      SGPA {sem.sgpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          {/* Honest Project Attribution & Co-Creator Credits */}
          <MotionReveal
            delay={0.06}
            className="lg:col-span-6 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-6"
          >
            <div className="border-b border-[#3A3429] pb-4">
              <p className="font-mono text-xs text-[#C9A24B]">
                Honest Attribution & Co-Creator Credits
              </p>
              <h2 className="font-display text-2xl text-[#F2EBDD] mt-1">
                My Role on Each Project
              </h2>
            </div>

            <p className="text-xs text-[#A9A092] leading-relaxed">
              Every project clearly states whether it was built solo or with a co-creator, along
              with my exact documented role.
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
                      My Role: <span className="text-[#E8D5A8]">{proj.documentedRole}</span>
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
