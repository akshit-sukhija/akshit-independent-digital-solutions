import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  ADDITIONAL_ANALYTICAL_PROOF,
  type CapabilityDomain,
} from '../data/studioData';
import { filterAndSortProjects } from '../utils/studioLogic';

const DOMAIN_FILTERS: { value: CapabilityDomain | 'all'; label: string }[] = [
  { value: 'all', label: 'All Projects (Strict Hierarchy)' },
  { value: 'ai-automation', label: 'AI & Workflow Automation' },
  { value: 'data-intelligence', label: 'Data Analytics & BI' },
  { value: 'custom-systems', label: 'Custom Systems & Tools' },
];

export function WorkPage() {
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain | 'all'>('all');

  const primaryProjects = filterAndSortProjects(selectedDomain, 'primary');
  const secondaryProjects = filterAndSortProjects(selectedDomain, 'secondary');

  return (
    <div>
      <PageMeta
        title="Project Portfolio & Case Studies"
        description="Verified engineering and data analytics projects by Akshit: Notice Decoder, SentinelX, Decoding Customer Value (3,900 records), Contract Risk Governance Engine, and Lureline."
      />

      {/* Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Project Portfolio · Documented Evidence & Architectures
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Systems, Automations & Analytical Case Studies
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              Every project below is presented with its verified stack, documented role, explicit
              collaborator attribution, architectural decisions, and real-world scope boundaries.
            </p>
          </MotionReveal>

          {/* Interactive Filter Controls (Functional Buttons) */}
          <MotionReveal delay={0.08} className="pt-2">
            <div
              role="group"
              aria-label="Filter projects by capability domain"
              className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1A1814] border border-[#3A3429] rounded-lg"
            >
              {DOMAIN_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedDomain(filter.value)}
                  className={`px-3.5 py-2 text-xs font-mono rounded transition-colors whitespace-nowrap shrink-0 ${
                    selectedDomain === filter.value
                      ? 'bg-[#C9A24B] text-[#11100E] font-medium'
                      : 'text-[#A9A092] hover:text-[#F2EBDD]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Primary Hierarchy: Flagship 01, Flagship 02, Featured 03 */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Primary Portfolio Tier
              </p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Flagship Systems & Featured Analytics Case Study
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums">
              Showing {primaryProjects.length} primary {primaryProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {primaryProjects.length > 0 ? (
            <div className="space-y-8">
              {primaryProjects.map((project, idx) => (
                <MotionReveal key={project.slug} delay={idx * 0.06}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}
            </div>
          ) : (
            <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 text-center space-y-3">
              <p className="text-sm text-[#A9A092]">
                No primary tier projects match this specific filter.
              </p>
              <button
                type="button"
                onClick={() => setSelectedDomain('all')}
                className="px-4 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] rounded"
              >
                Reset Filter to All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Visually Subordinate Secondary Projects Section */}
      <section className="bg-[#1A1814] py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#A9A092]">
                Secondary Portfolio Tier · Specialized Prototypes & Supporting Studies
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
                Applied AI Governance, Investigation Workbench & Supporting Analytics
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums">
              Showing {secondaryProjects.length} secondary {secondaryProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {secondaryProjects.map((project, idx) => (
                <MotionReveal key={project.slug} delay={idx * 0.06} className="flex">
                  <ProjectCard project={project} compact />
                </MotionReveal>
              ))}
            </div>
          )}

          {/* Supporting Analytical Study Proof (OTT Viewer Retention Analysis) */}
          {(selectedDomain === 'all' || selectedDomain === 'data-intelligence') && (
            <MotionReveal className="bg-[#11100E] border border-[#3A3429] rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                  <span className="text-[#E8D5A8]">Supporting Analytical Study</span>
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
            </MotionReveal>
          )}
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
