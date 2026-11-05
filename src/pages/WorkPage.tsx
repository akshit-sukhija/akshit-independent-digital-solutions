import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  ADDITIONAL_ANALYTICAL_PROOF,
  type CapabilityDomain,
} from '../data/studioData';
import {
  filterAndSortProjects,
  type EvidenceFilterType,
} from '../utils/studioLogic';

const CATEGORY_FILTERS: { value: CapabilityDomain | 'all'; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'ai-automation', label: 'AI & Automation' },
  { value: 'data-intelligence', label: 'Data & Insights' },
  { value: 'custom-systems', label: 'Custom Web Tools' },
];

const TECH_FILTERS = [
  { value: 'all', label: 'All Tools' },
  { value: 'Python', label: 'Python' },
  { value: 'React', label: 'React' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'FastAPI', label: 'FastAPI' },
];

const EVIDENCE_FILTERS: { value: EvidenceFilterType; label: string }[] = [
  { value: 'all', label: 'All Evidence Types' },
  { value: 'live-demo', label: 'Live Web App' },
  { value: 'github-code', label: 'Public GitHub Code' },
  { value: 'report-or-study', label: 'Technical Report / Data Study' },
];

export function WorkPage() {
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceFilterType>('all');

  const primaryProjects = filterAndSortProjects(
    selectedDomain,
    'primary',
    selectedTech,
    selectedEvidence
  );
  const secondaryProjects = filterAndSortProjects(
    selectedDomain,
    'secondary',
    selectedTech,
    selectedEvidence
  );
  const totalMatching = primaryProjects.length + secondaryProjects.length;

  const resetAllFilters = () => {
    setSelectedDomain('all');
    setSelectedTech('all');
    setSelectedEvidence('all');
  };

  return (
    <div>
      <PageMeta
        title="Project Portfolio Explorer — Real Systems & Data Studies"
        description="Explore Akshit’s five prioritised projects—Notice Decoder, SentinelX, Decoding Customer Value, Contract Risk Governance Engine, and Lureline—with plain-English summaries and source evidence."
      />

      {/* Header + Multi-Facet Portfolio Explorer */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Portfolio Explorer · 5 Prioritised Projects + Source Evidence
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              What I Have Built & How Each Project Works
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              Every project is explained in simple everyday English first. Click{' '}
              <strong className="text-[#E8D5A8] font-normal">
                “Inspect Source Evidence & Technical Details”
              </strong>{' '}
              on any card to check the code links, roles, co-creators, and technical architecture.
            </p>
          </MotionReveal>

          {/* Multi-Facet Filter Bar: Category, Technology, Evidence Type */}
          <MotionReveal
            delay={0.06}
            className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-5 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3A3429] pb-3">
              <span className="font-mono text-xs text-[#C9A24B]">
                Filter Projects by Category, Tool, or Evidence Type
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#A9A092] tabular-nums">
                  Showing {totalMatching} of 5 projects
                </span>
                {(selectedDomain !== 'all' ||
                  selectedTech !== 'all' ||
                  selectedEvidence !== 'all') && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Filter 1: Category */}
              <div>
                <label
                  htmlFor="filter-category"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  01 · By Business Category
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

              {/* Filter 2: Technology */}
              <div>
                <label
                  htmlFor="filter-tech"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  02 · By Technology / Tool
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

              {/* Filter 3: Evidence Type */}
              <div>
                <label
                  htmlFor="filter-evidence"
                  className="block font-mono text-[11px] text-[#A9A092] mb-1.5"
                >
                  03 · By Proof / Evidence Type
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
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Primary Tier: 01. Notice Decoder, 02. SentinelX, 03. Decoding Customer Value */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Primary Projects (01–03)
              </p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Flagship Applications & Featured Data Study
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums">
              {primaryProjects.length} primary {primaryProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {primaryProjects.length > 0 ? (
            <div className="space-y-8">
              {primaryProjects.map((project, idx) => (
                <MotionReveal key={project.slug} delay={idx * 0.05}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}
            </div>
          ) : (
            <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 text-center space-y-3">
              <p className="text-sm text-[#A9A092]">
                No primary projects match that exact combination of filters.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-4 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] rounded cursor-pointer"
              >
                Show All 5 Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Secondary Tier: 04. Contract Risk Governance Engine, 05. Lureline + OTT Study */}
      <section className="bg-[#1A1814] py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#A9A092]">
                Secondary Projects (04–05) & Supporting Research
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
                Rule-Backed AI Compliance & Security Timeline Workbench
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums">
              {secondaryProjects.length} secondary {secondaryProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {secondaryProjects.map((project) => (
                <div key={project.slug} className="flex">
                  <ProjectCard project={project} compact />
                </div>
              ))}
            </div>
          )}

          {/* Supporting Study: OTT Viewer Retention Analysis */}
          <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                <span className="text-[#E8D5A8]">Supporting Data Study</span>
                <span aria-hidden="true">·</span>
                <span>{ADDITIONAL_ANALYTICAL_PROOF.category}</span>
                <span aria-hidden="true">·</span>
                <span>{ADDITIONAL_ANALYTICAL_PROOF.connectionToService}</span>
              </div>
              <h3 className="font-display text-2xl text-[#F2EBDD]">
                {ADDITIONAL_ANALYTICAL_PROOF.title}
              </h3>
              <p className="text-sm text-[#A9A092] leading-relaxed">
                {ADDITIONAL_ANALYTICAL_PROOF.summary}
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
            >
              <span>See Business Data & Insights Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
