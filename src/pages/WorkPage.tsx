import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  RotateCcw,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMetrics } from '../components/ProjectMetrics';
import { CtaSection } from '../components/CtaSection';
import {
  type CapabilityDomain,
  type CuratedWorkItem,
  type WorkCollaborationType,
} from '../data/studioData';
import {
  filterAndSortProjects,
  filterCuratedWork,
  type EvidenceFilterType,
} from '../utils/studioLogic';

const CATEGORY_FILTERS: { value: CapabilityDomain | 'all'; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'custom-systems', label: 'Product Concepts, Websites & Web Systems' },
  { value: 'ai-automation', label: 'AI & Workflow Automation' },
  { value: 'data-intelligence', label: 'Data & Audience Intelligence' },
];

const TECH_FILTERS = [
  { value: 'all', label: 'All Tools' },
  { value: 'Product Strategy', label: 'Product Strategy' },
  { value: 'Python', label: 'Python' },
  { value: 'React', label: 'React' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'FastAPI', label: 'FastAPI' },
];

const EVIDENCE_FILTERS: { value: EvidenceFilterType; label: string }[] = [
  { value: 'all', label: 'All Proof Types' },
  { value: 'live-demo', label: 'Live Web Application' },
  { value: 'github-code', label: 'Public GitHub Code' },
  { value: 'report-or-study', label: 'Presentation Deck / Data Study' },
];

const COLLABORATION_FILTERS: { value: WorkCollaborationType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Work Types' },
  { value: 'Collaborative Work', label: 'Collaborative & Competition Work' },
  { value: 'Solo Work', label: 'Solo Engineering' },
  { value: 'Research & Analytics', label: 'Research & Data Studies' },
  { value: 'Working Prototype', label: 'Working AI Prototypes' },
  { value: 'Independent Concept', label: 'Product Concepts & Teardowns' },
];

function StructuredWorkCard({ item }: { item: CuratedWorkItem }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      data-testid={`work-card-${item.slug}`}
      className="bg-[#161822] border border-[#2C2F42] hover:border-[#D4AE5C]/60 rounded-2xl p-6 md:p-7 flex flex-col justify-between gap-6 transition-colors"
    >
      <div className="space-y-4">
        {/* Clean Editorial Metadata Line */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8] border-b border-[#2C2F42] pb-3">
          {item.recognitionBadge && (
            <>
              <span className="inline-flex items-center gap-1 text-[#38BDF8] font-medium">
                <Award className="w-3.5 h-3.5 text-[#D4AE5C]" />
                {item.recognitionBadge}
              </span>
              <span aria-hidden="true">·</span>
            </>
          )}
          <span className="text-[#D4AE5C] font-medium">{item.collaborationType}</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#E6D3A7]">{item.category}</span>
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8] leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-[#E6D3A7] leading-relaxed">{item.subtitle}</p>
          {item.specialCredit && (
            <p className="font-mono text-xs text-[#38BDF8]">{item.specialCredit}</p>
          )}
        </div>

        {/* Genuine Live Application or Presentation Visual (Only When Available) */}
        {item.screenshotUrl && (
          <div className="rounded-xl overflow-hidden border border-[#2C2F42] bg-[#0E0F14]">
            <img
              src={item.screenshotUrl}
              alt={`${item.title} preview`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-48 object-cover object-top"
            />
            {item.screenshotCaption && (
              <p className="px-3.5 py-2 font-mono text-[11px] text-[#A6A9B8] border-t border-[#2C2F42]">
                {item.screenshotCaption}
              </p>
            )}
          </div>
        )}

        {/* Structured Case Summary: Overview, Problem, My Contribution & Outcomes */}
        <div className="space-y-3 pt-1 text-xs leading-relaxed">
          <div>
            <p className="font-mono text-[11px] text-[#D4AE5C] mb-0.5">Overview &amp; Problem</p>
            <p className="text-sm text-[#F4F0E8]/90">{item.overview}</p>
            <p className="text-[#A6A9B8] mt-1">{item.problem}</p>
          </div>

          <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-3.5 space-y-1.5">
            <p className="font-mono text-[11px] text-[#E6D3A7]">My Contribution</p>
            <p className="text-[#F4F0E8]">{item.myContribution}</p>
            <p className="font-mono text-[11px] text-[#A6A9B8]">{item.collaborators}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] text-[#7AD992] mb-0.5">Outcomes</p>
            <p className="text-[#F4F0E8]/90">{item.outcomes}</p>
          </div>
        </div>

        {/* Clean Unboxed Technology List */}
        <div className="pt-1 font-mono text-xs text-[#A6A9B8]">
          <span className="text-[#E6D3A7]">Technology: </span>
          <span>{item.technologies.join(' · ')}</span>
        </div>

        {/* Quantitative Chart When Available (e.g., OTT Viewer Retention 16.7% vs 11.8%) */}
        <ProjectMetrics projectSlug={item.slug} compact />
      </div>

      {/* Expandable Methodology & Proof Links */}
      <div className="space-y-3 pt-3 border-t border-[#2C2F42]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4AE5C] hover:text-[#F4F0E8] cursor-pointer"
          >
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
            <span>
              {showDetails ? 'Hide Methodology & Scope' : 'Inspect Methodology & Scope'}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
            {item.hasDedicatedCaseStudy && (
              <Link
                to={`/work/${item.slug}`}
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[#0E0F14] bg-[#38BDF8] hover:bg-[#7DD3FC] font-medium transition-colors whitespace-nowrap shrink-0"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            {item.links.liveDemoUrl && (
              <a
                href={item.links.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] font-medium transition-colors whitespace-nowrap shrink-0"
              >
                <span>Open Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {item.links.drivePdfUrl && (
              <a
                href={item.links.drivePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#38BDF8] bg-[#0E0F14] border border-[#38BDF8]/50 hover:border-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Presentation PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {item.links.githubUrl && (
              <a
                href={item.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] transition-colors whitespace-nowrap shrink-0"
              >
                <span>GitHub Code</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {item.links.colabUrl && (
              <a
                href={item.links.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#E6D3A7] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Google Colab Notebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {showDetails && (
          <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-4 space-y-2.5 text-xs">
            <div>
              <p className="font-mono text-[11px] text-[#38BDF8] mb-0.5">Methodology</p>
              <p className="text-[#F4F0E8]/90 leading-relaxed">{item.methodology}</p>
            </div>
            <div className="pt-2 border-t border-[#2C2F42]">
              <p className="font-mono text-[11px] text-[#E6D3A7] mb-0.5">Scope &amp; Context</p>
              <p className="text-[#A6A9B8] leading-relaxed">{item.limitations}</p>
            </div>
            {item.links.drivePdfPlaceholder && (
              <div className="pt-2 border-t border-[#2C2F42] flex items-center gap-2 font-mono text-[11px] text-[#A6A9B8]">
                <FileText className="w-3.5 h-3.5 text-[#D4AE5C] shrink-0" />
                <span>{item.links.drivePdfPlaceholder}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function WorkPage() {
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceFilterType>('all');
  const [selectedCollaboration, setSelectedCollaboration] = useState<
    WorkCollaborationType | 'all'
  >('all');

  const selectedProjects = filterAndSortProjects(
    selectedDomain,
    'all',
    selectedTech,
    selectedEvidence
  );

  const researchAndAnalyticsItems = filterCuratedWork({
    workSection: 'research-analytics',
    collaborationType: selectedCollaboration,
    technology: selectedTech,
  });

  const productConceptItems = filterCuratedWork({
    workSection: 'product-concepts',
    collaborationType: selectedCollaboration,
    technology: selectedTech,
  });

  const resetAllFilters = () => {
    setSelectedDomain('all');
    setSelectedTech('all');
    setSelectedEvidence('all');
    setSelectedCollaboration('all');
  };

  return (
    <div>
      <PageMeta
        title="Selected Work — RE:FRAME, Live Web Systems, Research & AI Prototypes"
        description="Explore Akshit Sukhija’s curated studio work—led by RE:FRAME (1st Place · REVIVEX · ZERO² 2026) alongside Notice Decoder, SentinelX, Clarity Redemption AI, SIGNAL, InsightForgeAI, and quantitative data studies."
      />

      {/* Editorial Header + Section Navigation */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
              Selected Work · Creative Concepts, Web Systems &amp; Applied AI
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Proof of Work Across Product Storytelling, Web Systems &amp; Data
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              Every project below documents the problem, my specific contribution, the methodology
              and tools used, and the verified outcome—clearly distinguishing competition concepts,
              collaborative engineering, solo builds, and quantitative research.
            </p>

            {/* Clean Chapter Anchor Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs text-[#E8D5A8]">
              <a
                href="#selected-projects"
                className="hover:text-[#38BDF8] underline underline-offset-4 transition-colors"
              >
                01. Selected Projects &amp; Flagship Case Studies
              </a>
              <span aria-hidden="true" className="text-[#3A3429]">
                /
              </span>
              <a
                href="#research-analytics"
                className="hover:text-[#38BDF8] underline underline-offset-4 transition-colors"
              >
                02. Research &amp; Analytics
              </a>
              <span aria-hidden="true" className="text-[#3A3429]">
                /
              </span>
              <a
                href="#product-concepts"
                className="hover:text-[#38BDF8] underline underline-offset-4 transition-colors"
              >
                03. Product Concepts &amp; Experiments
              </a>
            </div>
          </MotionReveal>

          {/* Clean Multi-Facet Filter Bar */}
          <MotionReveal
            delay={0.05}
            className="bg-[#1A1814] border border-[#3A3429] rounded-xl p-5 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3A3429] pb-3">
              <span className="font-mono text-xs text-[#C9A24B]">
                Filter Work by Category, Technology, Proof Type, or Work Format
              </span>
              {(selectedDomain !== 'all' ||
                selectedTech !== 'all' ||
                selectedEvidence !== 'all' ||
                selectedCollaboration !== 'all') && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="filter-category"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  01 · Studio Category
                </label>
                <select
                  id="filter-category"
                  value={selectedDomain}
                  onChange={(e) =>
                    setSelectedDomain(e.target.value as CapabilityDomain | 'all')
                  }
                  className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3 py-2 text-xs text-[#F2EBDD] focus:outline-none"
                >
                  {CATEGORY_FILTERS.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="filter-tech"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  02 · Technology / Discipline
                </label>
                <select
                  id="filter-tech"
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3 py-2 text-xs text-[#F2EBDD] focus:outline-none"
                >
                  {TECH_FILTERS.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="filter-evidence"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  03 · Proof Type (Selected Projects)
                </label>
                <select
                  id="filter-evidence"
                  value={selectedEvidence}
                  onChange={(e) =>
                    setSelectedEvidence(e.target.value as EvidenceFilterType)
                  }
                  className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3 py-2 text-xs text-[#F2EBDD] focus:outline-none"
                >
                  {EVIDENCE_FILTERS.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="filter-collaboration"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  04 · Research &amp; Concept Type
                </label>
                <select
                  id="filter-collaboration"
                  value={selectedCollaboration}
                  onChange={(e) =>
                    setSelectedCollaboration(
                      e.target.value as WorkCollaborationType | 'all'
                    )
                  }
                  className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3 py-2 text-xs text-[#F2EBDD] focus:outline-none"
                >
                  {COLLABORATION_FILTERS.map((f) => (
                    <option key={f.value} value={f.value}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SECTION 01: SELECTED PROJECTS (Flagship Case Studies led by RE:FRAME) */}
      <section
        id="selected-projects"
        className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#38BDF8]">01 · Selected Projects</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
                Flagship Case Studies, Award-Winning Concepts &amp; Live Web Systems
              </h2>
              <p className="text-sm text-[#A9A092] max-w-2xl">
                Led by RE:FRAME (1st Place · REVIVEX · ZERO² 2026) alongside deployed web
                applications, deterministic AI tools, and quantitative retention studies.
              </p>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums shrink-0">
              {selectedProjects.length}{' '}
              {selectedProjects.length === 1 ? 'case study' : 'case studies'}
            </p>
          </div>

          {selectedProjects.length > 0 ? (
            <div className="space-y-8">
              {selectedProjects.slice(0, 4).map((project, idx) => (
                <MotionReveal key={project.slug} delay={idx * 0.05}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}

              {selectedProjects.length > 4 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-4">
                  {selectedProjects.slice(4).map((project) => (
                    <div key={project.slug} className="flex">
                      <ProjectCard project={project} compact />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 text-center space-y-3">
              <p className="text-sm text-[#A9A092]">
                No flagship case studies match that exact filter combination.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] rounded cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 02: RESEARCH & ANALYTICS */}
      <section
        id="research-analytics"
        className="bg-[#0E0F14] py-16 px-6 border-b border-[#2C2F42]"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2C2F42] pb-4">
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#38BDF8]">02 · Research &amp; Analytics</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                Data Science Studies, Cohort Retention &amp; NLP Pipelines
              </h2>
              <p className="text-sm text-[#A6A9B8] max-w-2xl">
                Quantitative investigations in Python, SQL, and Scikit-learn—from a 500,000+ record
                UIDAI demographic study in Google Colab to a 33,171-episode streaming retention
                analysis (`16.7%` vs `11.8%` drop-off).
              </p>
            </div>
            <p className="font-mono text-xs text-[#A6A9B8] tabular-nums shrink-0">
              {researchAndAnalyticsItems.length}{' '}
              {researchAndAnalyticsItems.length === 1 ? 'study' : 'studies'}
            </p>
          </div>

          {researchAndAnalyticsItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {researchAndAnalyticsItems.map((item) => (
                <StructuredWorkCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-8 text-center space-y-3">
              <p className="text-sm text-[#A6A9B8]">
                No research or analytics studies match the active filters.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-xs font-mono text-[#0E0F14] bg-[#D4AE5C] rounded cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 03: PRODUCT CONCEPTS & EXPERIMENTS */}
      <section
        id="product-concepts"
        className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#D4AE5C]">
                03 · Product Concepts &amp; Experiments
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD]">
                Live AI Prototypes, Prompt Systems &amp; Product Strategy Teardowns
              </h2>
              <p className="text-sm text-[#A9A092] max-w-2xl">
                Working web prototypes (SIGNAL – Prompt Forge and InsightForgeAI) alongside
                competition product specifications and independent retention teardowns.
              </p>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums shrink-0">
              {productConceptItems.length}{' '}
              {productConceptItems.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {productConceptItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {productConceptItems.map((item) => (
                <StructuredWorkCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-[#11100E] border border-[#3A3429] rounded-xl p-8 text-center space-y-3">
              <p className="text-sm text-[#A9A092]">
                No product concepts or prototypes match the active filters.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] rounded cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
