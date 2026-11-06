import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  FileText,
  Lock,
  RotateCcw,
  Search,
  ShieldAlert,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { CtaSection } from '../components/CtaSection';
import {
  COMPLETE_PORTFOLIO_INVENTORY,
  CONSOLIDATED_MATRIX_PDF_URL,
  GROUNDING_VERIFICATION_REGISTER,
  RECONCILIATION_AUDIT_SUMMARY,
  type CapabilityDomain,
  type EvidenceTierBadge,
  type InventoryTierCategory,
  type LibraryDomain,
  type PortfolioInventoryItem,
} from '../data/studioData';
import {
  filterAndSortProjects,
  filterPortfolioInventory,
  type EvidenceFilterType,
  type LibraryLinkFilter,
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

const LIBRARY_TIER_OPTIONS: { value: InventoryTierCategory | 'all'; label: string }[] = [
  { value: 'library', label: 'Secondary Project Library (18 Public Entries)' },
  { value: 'all', label: 'Complete Reconciled Inventory (All 29 Projects)' },
  { value: 'flagship', label: 'Flagship Case Studies Only (6 Projects)' },
  { value: 'restricted', label: 'Private, Redacted & Governance Only (5 Items)' },
];

const LIBRARY_DOMAIN_OPTIONS: { value: LibraryDomain | 'all'; label: string }[] = [
  { value: 'all', label: 'All Capability Domains' },
  { value: 'ai-automation', label: 'AI, NLP & Prompt Systems' },
  { value: 'data-intelligence', label: 'Data Analytics & BI Studies' },
  { value: 'custom-systems', label: 'Custom Software & Web Engineering' },
  { value: 'product-strategy', label: 'Product Strategy, Teardowns & Pitch Decks' },
  { value: 'software-qa', label: 'Software QA, Audit & Governance' },
];

const LIBRARY_EVIDENCE_TIER_OPTIONS: { value: EvidenceTierBadge | 'all'; label: string }[] = [
  { value: 'all', label: 'All Evidence Tiers' },
  { value: 'Tier 1 · Codebase / Live App', label: 'Tier 1 · Codebase / Live App' },
  { value: 'Tier 2 · Evaluated Data & Report', label: 'Tier 2 · Evaluated Data & Report' },
  { value: 'Tier 3 · Product Concept / Framework', label: 'Tier 3 · Product Concept / Framework' },
  { value: 'Restricted / Redacted Deliverable', label: 'Restricted / Redacted Deliverable' },
];

const LIBRARY_LINK_FILTER_OPTIONS: { value: LibraryLinkFilter; label: string }[] = [
  { value: 'all', label: 'All Proof Formats' },
  { value: 'has-github', label: 'Has Public GitHub Repository' },
  { value: 'has-live-demo', label: 'Has Live Deployed Web App' },
  { value: 'has-colab-or-pdf', label: 'Has Colab Notebook or Documented Report' },
];

function LibraryProjectDossierCard({ item }: { item: PortfolioInventoryItem }) {
  const [expanded, setExpanded] = useState(false);

  const isRestricted = item.tierCategory === 'restricted';

  return (
    <article
      data-testid={`inventory-card-${item.inventoryNumber}`}
      className={`rounded-xl border p-6 flex flex-col justify-between gap-5 transition-colors ${
        isRestricted
          ? 'bg-[#141210] border-[#E08A1E]/40'
          : 'bg-[#161822] border-[#2C2F42] hover:border-[#D4AE5C]/60'
      }`}
    >
      <div className="space-y-4">
        {/* Top Metadata Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2C2F42] pb-3">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-[#0E0F14] border border-[#2C2F42] text-[#D4AE5C]">
              #{String(item.inventoryNumber).padStart(2, '0')}
            </span>
            <span className="text-[#E6D3A7]">{item.category}</span>
          </div>
          <span
            className={`font-mono text-[11px] px-2.5 py-0.5 rounded border ${
              item.evidenceTier.startsWith('Tier 1')
                ? 'bg-[#0E0F14] border-[#7AD992]/40 text-[#7AD992]'
                : item.evidenceTier.startsWith('Tier 2')
                  ? 'bg-[#0E0F14] border-[#8B75FF]/40 text-[#8B75FF]'
                  : item.evidenceTier.startsWith('Restricted')
                    ? 'bg-[#0E0F14] border-[#E08A1E]/50 text-[#E08A1E]'
                    : 'bg-[#0E0F14] border-[#D4AE5C]/40 text-[#D4AE5C]'
            }`}
          >
            {item.evidenceTier}
          </span>
        </div>

        {/* Mandatory Label / Disclaimer Banner (if applicable) */}
        {item.mandatoryLabel && (
          <div className="bg-[#0E0F14] border border-[#E08A1E]/50 rounded-lg px-3.5 py-2.5 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#E08A1E] shrink-0 mt-0.5" />
            <p className="font-mono text-[11px] text-[#E6D3A7] leading-relaxed">
              {item.mandatoryLabel}
            </p>
          </div>
        )}

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-2xl text-[#F4F0E8] leading-snug">{item.title}</h3>
          </div>
          <p className="text-xs font-mono text-[#A6A9B8]">{item.projectType}</p>
          <p className="text-sm text-[#F4F0E8]/90 leading-relaxed">{item.subtitle}</p>
        </div>

        {/* Role & Collaborators */}
        <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-3.5 space-y-1.5 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[#D4AE5C]">Role: {item.documentedRole}</span>
            <span className="font-mono text-[11px] text-[#7AD992]">{item.status}</span>
          </div>
          <p className="text-[#A6A9B8] leading-relaxed">
            <strong className="text-[#E6D3A7] font-normal">Attribution: </strong>
            {item.collaborators}
          </p>
        </div>

        {/* Verified Results Preview */}
        <div className="space-y-1">
          <p className="font-mono text-[11px] text-[#8B75FF] uppercase tracking-wide">
            Verified Outcome &amp; Evidence
          </p>
          <p className="text-xs text-[#A6A9B8] leading-relaxed">{item.results}</p>
        </div>

        {/* Technology Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#0E0F14] border border-[#2C2F42] text-[#E6D3A7]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Full Dossier & Verified Action Links */}
      <div className="space-y-3 pt-3 border-t border-[#2C2F42]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D4AE5C] hover:text-[#F4F0E8] cursor-pointer"
          >
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
            <span>
              {expanded
                ? 'Hide Problem, Methodology & Limitations'
                : 'Inspect Problem, Methodology & Limitations'}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {item.hasDedicatedCaseStudy && (
              <Link
                to={`/work/${item.slug}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] transition-colors"
              >
                <span>Full Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
            {item.links.liveDemoUrl && (
              <a
                href={item.links.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono text-[#7AD992] bg-[#0E0F14] border border-[#7AD992]/40 hover:border-[#7AD992] transition-colors"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {item.links.githubUrl && (
              <a
                href={item.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {item.links.colabUrl && (
              <a
                href={item.links.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono text-[#8B75FF] bg-[#0E0F14] border border-[#8B75FF]/40 hover:border-[#8B75FF] transition-colors"
              >
                <span>Google Colab</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
            {item.links.evidenceMatrixPdfUrl && (
              <a
                href={item.links.evidenceMatrixPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono text-[#E6D3A7] bg-[#0E0F14] border border-[#D4AE5C]/40 hover:border-[#D4AE5C] transition-colors"
              >
                <span>Source PDF</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {expanded && (
          <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-4 space-y-3 text-xs">
            <div>
              <p className="font-mono text-[#D4AE5C] mb-1">01 · Problem Framed</p>
              <p className="text-[#F4F0E8]/90 leading-relaxed">{item.problem}</p>
            </div>
            <div className="border-t border-[#2C2F42] pt-2.5">
              <p className="font-mono text-[#8B75FF] mb-1">02 · Methodology &amp; System Logic</p>
              <p className="text-[#A6A9B8] leading-relaxed">{item.methodology}</p>
            </div>
            <div className="border-t border-[#2C2F42] pt-2.5">
              <p className="font-mono text-[#E08A1E] mb-1">03 · Honest Limitations &amp; Scope</p>
              <p className="text-[#A6A9B8] leading-relaxed">{item.limitations}</p>
            </div>
            {item.confidentialityNotice && (
              <div className="border-t border-[#2C2F42] pt-2.5">
                <p className="font-mono text-[#E08A1E] mb-1">
                  04 · Confidentiality &amp; Redaction Notice
                </p>
                <p className="text-[#E6D3A7] leading-relaxed">{item.confidentialityNotice}</p>
              </div>
            )}
            <div className="border-t border-[#2C2F42] pt-2.5">
              <p className="font-mono text-[#7AD992] mb-1">
                Documented Source Artifacts in Package
              </p>
              <ul className="space-y-1 text-[#A6A9B8] font-mono text-[11px]">
                {item.documentedArtifacts.map((doc) => (
                  <li key={doc}>· {doc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function WorkPage() {
  // Flagship Case Studies Filter State (01-06)
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceFilterType>('all');

  // Complete 29-Project Library Search & Filter State
  const [libraryQuery, setLibraryQuery] = useState<string>('');
  const [libraryTier, setLibraryTier] = useState<InventoryTierCategory | 'all'>('library');
  const [libraryDomain, setLibraryDomain] = useState<LibraryDomain | 'all'>('all');
  const [libraryEvidenceTier, setLibraryEvidenceTier] = useState<EvidenceTierBadge | 'all'>('all');
  const [libraryLinkFilter, setLibraryLinkFilter] = useState<LibraryLinkFilter>('all');
  const [showReconciliationDrawer, setShowReconciliationDrawer] = useState<boolean>(false);

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
  const totalFlagshipMatching = primaryProjects.length + secondaryProjects.length;

  const filteredLibraryItems = filterPortfolioInventory({
    searchQuery: libraryQuery,
    tierCategory: libraryTier,
    domain: libraryDomain,
    evidenceTier: libraryEvidenceTier,
    linkFilter: libraryLinkFilter,
  });

  const restrictedInventoryItems = COMPLETE_PORTFOLIO_INVENTORY.filter(
    (item) => item.tierCategory === 'restricted'
  );

  const resetFlagshipFilters = () => {
    setSelectedDomain('all');
    setSelectedTech('all');
    setSelectedEvidence('all');
  };

  const resetLibraryFilters = () => {
    setLibraryQuery('');
    setLibraryTier('library');
    setLibraryDomain('all');
    setLibraryEvidenceTier('all');
    setLibraryLinkFilter('all');
  };

  return (
    <div>
      <PageMeta
        title="Portfolio & 29-Project Evidence Library — Akshit Sukhija"
        description="Explore Akshit Sukhija’s 6 Flagship Case Studies, 18 searchable Secondary Project Library entries, and 5 Redacted/Restricted deliverables reconciled against the NotebookLM Portfolio Evidence Matrix."
      />

      {/* Header + Reconciled Inventory Summary Strip */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <p className="font-mono text-xs text-[#C9A24B]">
                Portfolio Explorer · 6 Flagship Case Studies + 29 Reconciled Inventory Entries
              </p>
              <h1
                className="font-display text-[#F2EBDD] leading-tight"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                What I Have Built &amp; the Evidence Behind Every Claim
              </h1>
              <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
                This portfolio is reconciled against the complete{' '}
                <strong className="text-[#E8D5A8] font-normal">
                  29-Project NotebookLM Portfolio Evidence Matrix
                </strong>
                . It separates deep Flagship Case Studies (01–06), the searchable Secondary Project
                Library (18 public entries), and Redacted/Restricted deliverables (5 items).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={CONSOLIDATED_MATRIX_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded-lg transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Source Matrix PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setShowReconciliationDrawer((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#E8D5A8] bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B] rounded-lg cursor-pointer transition-colors"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>
                  {showReconciliationDrawer
                    ? 'Hide 29-Project Audit Table'
                    : 'Inspect 29-Project Reconciliation Table'}
                </span>
              </button>
            </div>
          </MotionReveal>

          {/* 4-Metric Reconciled Inventory Strip */}
          <MotionReveal
            delay={0.04}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#1A1814] border border-[#3A3429] rounded-xl p-5"
          >
            <div className="space-y-1">
              <p className="font-mono text-[11px] text-[#C9A24B]">01 · Total Reconciled</p>
              <p className="font-display text-3xl text-[#F2EBDD] tabular-nums">29 Projects</p>
              <p className="text-xs text-[#A9A092]">
                100% matched to the source evidence matrix
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] text-[#7AD992]">02 · Flagship Case Studies</p>
              <p className="font-display text-3xl text-[#F2EBDD] tabular-nums">6 Dedicated</p>
              <p className="text-xs text-[#A9A092]">
                Full architecture, pipelines &amp; code specs
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] text-[#8B75FF]">03 · Secondary Library</p>
              <p className="font-display text-3xl text-[#F2EBDD] tabular-nums">18 Entries</p>
              <p className="text-xs text-[#A9A092]">
                Searchable notebooks, repos, studies &amp; decks
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[11px] text-[#E08A1E]">04 · Redacted &amp; Restricted</p>
              <p className="font-display text-3xl text-[#F2EBDD] tabular-nums">5 Items</p>
              <p className="text-xs text-[#A9A092]">
                Zero borrower PII or false deployment claims
              </p>
            </div>
          </MotionReveal>

          {/* Optional Expandable 29-Project Reconciliation & Grounding Table */}
          {showReconciliationDrawer && (
            <div className="bg-[#161822] border border-[#D4AE5C]/50 rounded-xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2C2F42] pb-4">
                <div>
                  <p className="font-mono text-xs text-[#D4AE5C]">
                    Complete Source Reconciliation &amp; Grounding Audit
                  </p>
                  <h2 className="font-display text-2xl text-[#F4F0E8] mt-1">
                    All 29 NotebookLM Inventory Items vs. Website Implementation
                  </h2>
                </div>
                <a
                  href={CONSOLIDATED_MATRIX_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#8B75FF] hover:underline inline-flex items-center gap-1"
                >
                  <span>Download Portfolio_Matrix.pdf</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#2C2F42] font-mono text-[11px] text-[#D4AE5C]">
                      <th className="py-2.5 pr-3">#</th>
                      <th className="py-2.5 pr-4">Project Name</th>
                      <th className="py-2.5 pr-4">Previous State</th>
                      <th className="py-2.5 pr-4">Assigned Section</th>
                      <th className="py-2.5">Reconciliation Action &amp; Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2C2F42]/60 text-[#A6A9B8]">
                    {RECONCILIATION_AUDIT_SUMMARY.map((row) => (
                      <tr key={row.inventoryNumber} className="hover:bg-[#0E0F14]/60">
                        <td className="py-2.5 pr-3 font-mono text-[#E6D3A7]">
                          #{String(row.inventoryNumber).padStart(2, '0')}
                        </td>
                        <td className="py-2.5 pr-4 font-medium text-[#F4F0E8]">
                          {row.projectName}
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-[11px]">
                          {row.previousWebsiteState}
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-[11px] text-[#7AD992]">
                          {row.assignedSection}
                        </td>
                        <td className="py-2.5 text-[11px] leading-relaxed">{row.actionTaken}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Section 6 Grounding & Not-Found Register */}
              <div className="pt-4 border-t border-[#2C2F42] space-y-3">
                <p className="font-mono text-xs text-[#E08A1E]">
                  Source Grounding &amp; &ldquo;Not Found / Excluded&rdquo; Verification Register
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {GROUNDING_VERIFICATION_REGISTER.map((g) => (
                    <div
                      key={g.claimOrQuery}
                      className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-3.5 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px]">
                        <span className="text-[#E6D3A7] truncate">{g.claimOrQuery}</span>
                        <span className="text-[#7AD992] shrink-0">{g.verificationStatus}</span>
                      </div>
                      <p className="text-[11px] text-[#A6A9B8] leading-relaxed">
                        {g.exactFinding}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Flagship Multi-Facet Filter Bar: Category, Technology, Evidence Type */}
          <MotionReveal
            delay={0.06}
            className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-5 space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3A3429] pb-3">
              <span className="font-mono text-xs text-[#C9A24B]">
                Filter Flagship Case Studies (01–06) by Category, Tool, or Evidence Type
              </span>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#A9A092] tabular-nums">
                  Showing {totalFlagshipMatching} of 6 flagship case studies
                </span>
                {(selectedDomain !== 'all' ||
                  selectedTech !== 'all' ||
                  selectedEvidence !== 'all') && (
                  <button
                    type="button"
                    onClick={resetFlagshipFilters}
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

      {/* Primary Flagship Tier: 01. Notice Decoder, 02. SentinelX, 03. Decoding Customer Value */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Flagship Case Studies — Part I (01–03)
              </p>
              <h2 className="font-display text-3xl text-[#F2EBDD] mt-1">
                Primary Systems &amp; Featured Customer Retention Study
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
                No primary flagship projects match that exact combination of filters.
              </p>
              <button
                type="button"
                onClick={resetFlagshipFilters}
                className="px-4 py-2 text-xs font-mono text-[#11100E] bg-[#C9A24B] rounded cursor-pointer"
              >
                Show All 6 Flagship Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Secondary Flagship Tier: 04. Contract Risk Governance, 05. Lureline, 06. Clarity Redemption AI */}
      <section className="bg-[#1A1814] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
            <div>
              <p className="font-mono text-xs text-[#C9A24B]">
                Flagship Case Studies — Part II (04–06)
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
                Deterministic AI Governance, Deception Telemetry &amp; FinTech FIFO Engine
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A9A092] tabular-nums">
              {secondaryProjects.length} flagship {secondaryProjects.length === 1 ? 'case study' : 'case studies'}
            </p>
          </div>

          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {secondaryProjects.map((project) => (
                <div key={project.slug} className="flex">
                  <ProjectCard project={project} compact />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Searchable & Filterable Secondary Project Library (All 18 Secondary Projects + Full 29 Inventory Toggle) */}
      <section
        id="project-library"
        className="bg-[#0E0F14] py-20 px-6 border-b border-[#2C2F42]"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#2C2F42] pb-6">
            <div className="space-y-3 max-w-3xl">
              <p className="font-mono text-xs text-[#8B75FF] uppercase tracking-wide">
                Searchable &amp; Filterable Project Library (NotebookLM Reconciled Inventory)
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
                Explore All 18 Secondary Projects — or Search Across the Full 29-Item Inventory
              </h2>
              <p className="text-sm text-[#A6A9B8] leading-relaxed">
                Includes Tier 1 codebases (<strong className="text-[#F4F0E8]">Tweet Sentiment Analysis</strong>), Tier 2 evaluated data &amp; prompt systems (<strong className="text-[#F4F0E8]">UIDAI 500k+ Colab Study</strong>, <strong className="text-[#F4F0E8]">OTT 33,171-Episode Retention Study</strong>, <strong className="text-[#F4F0E8]">SIGNAL Prompt Engine</strong>, <strong className="text-[#F4F0E8]">InsightForgeAI</strong>), and Tier 3 product strategy &amp; engineering prototypes.
              </p>
            </div>
            <div className="font-mono text-xs text-[#D4AE5C] tabular-nums shrink-0">
              Showing {filteredLibraryItems.length} matching{' '}
              {filteredLibraryItems.length === 1 ? 'entry' : 'entries'}
            </div>
          </MotionReveal>

          {/* Search & Multi-Facet Library Filter Console */}
          <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-6 relative">
                <Search className="w-4 h-4 text-[#A6A9B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="search"
                  data-testid="library-search-input"
                  value={libraryQuery}
                  onChange={(e) => setLibraryQuery(e.target.value)}
                  placeholder="Search by project name, collaborator, tool (e.g. UIDAI, SIGNAL, Colab, Scikit-learn, Dishani)..."
                  className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#D4AE5C] rounded-lg pl-10 pr-4 py-2.5 text-xs text-[#F4F0E8] placeholder:text-[#A6A9B8]/70 focus:outline-none"
                />
              </div>

              <div className="lg:col-span-4">
                <select
                  aria-label="Filter by inventory section"
                  value={libraryTier}
                  onChange={(e) =>
                    setLibraryTier(e.target.value as InventoryTierCategory | 'all')
                  }
                  className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#D4AE5C] rounded-lg px-3 py-2.5 text-xs text-[#F4F0E8] focus:outline-none"
                >
                  {LIBRARY_TIER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={resetLibraryFilters}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-mono text-[#E6D3A7] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] rounded-lg cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-[#2C2F42]">
              <div>
                <label
                  htmlFor="library-domain-select"
                  className="block font-mono text-[11px] text-[#A6A9B8] mb-1"
                >
                  Domain / Practice Area
                </label>
                <select
                  id="library-domain-select"
                  value={libraryDomain}
                  onChange={(e) => setLibraryDomain(e.target.value as LibraryDomain | 'all')}
                  className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#D4AE5C] rounded px-3 py-2 text-xs text-[#F4F0E8] focus:outline-none"
                >
                  {LIBRARY_DOMAIN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="library-evidence-tier-select"
                  className="block font-mono text-[11px] text-[#A6A9B8] mb-1"
                >
                  Evidence Classification Tier
                </label>
                <select
                  id="library-evidence-tier-select"
                  value={libraryEvidenceTier}
                  onChange={(e) =>
                    setLibraryEvidenceTier(e.target.value as EvidenceTierBadge | 'all')
                  }
                  className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#D4AE5C] rounded px-3 py-2 text-xs text-[#F4F0E8] focus:outline-none"
                >
                  {LIBRARY_EVIDENCE_TIER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="library-link-select"
                  className="block font-mono text-[11px] text-[#A6A9B8] mb-1"
                >
                  Verified Link / Artifact Filter
                </label>
                <select
                  id="library-link-select"
                  value={libraryLinkFilter}
                  onChange={(e) => setLibraryLinkFilter(e.target.value as LibraryLinkFilter)}
                  className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#D4AE5C] rounded px-3 py-2 text-xs text-[#F4F0E8] focus:outline-none"
                >
                  {LIBRARY_LINK_FILTER_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Filtered Library Cards Grid */}
          {filteredLibraryItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {filteredLibraryItems.map((item) => (
                <LibraryProjectDossierCard key={item.inventoryNumber} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-10 text-center space-y-3">
              <p className="text-sm text-[#A6A9B8]">
                No inventory projects match your current search or filter selection.
              </p>
              <button
                type="button"
                onClick={resetLibraryFilters}
                className="px-4 py-2 text-xs font-mono text-[#0E0F14] bg-[#D4AE5C] rounded-lg cursor-pointer"
              >
                Reset Library Search &amp; Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dedicated Section: Private, Redacted & Restricted Work Register (Items #10, #11, #13, #28, #29) */}
      <section className="bg-[#F4EFE6] text-[#11100E] py-16 px-6 border-b border-[#3A3429]/30">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#3A3429]/20 pb-6">
            <div className="space-y-2 max-w-3xl">
              <p className="font-mono text-xs text-[#7A5B14] inline-flex items-center gap-1.5 uppercase tracking-wide">
                <Lock className="w-3.5 h-3.5" />
                <span>Private, Redacted &amp; Restricted Work Register (5 Items)</span>
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#11100E]">
                How Confidential Audits, QA Suites &amp; Spec Deliverables Are Handled
              </h2>
              <p className="text-sm text-[#232019] leading-relaxed">
                In strict compliance with client privacy and source-package warnings, raw audit logs
                containing borrower PII, internal proprietary platform bugs, and uncommissioned
                or pre-deployment specifications are never published as public raw files or claimed
                as live production deployments.
              </p>
            </div>
            <span className="font-mono text-xs text-[#7A5B14] bg-[#EAE3D5] border border-[#D4CBB8] px-3 py-1.5 rounded-lg shrink-0">
              Strict Confidentiality &amp; Claim Hygiene
            </span>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restrictedInventoryItems.map((item) => (
              <div
                key={item.inventoryNumber}
                className="bg-white/90 border border-[#3A3429]/25 rounded-xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-[#7A5B14] font-semibold">
                      Inventory #{item.inventoryNumber} · {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EAE3D5] text-[#11100E] text-[11px]">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-[#11100E]">{item.title}</h3>
                  <p className="text-xs text-[#232019] leading-relaxed">{item.subtitle}</p>

                  {item.mandatoryLabel && (
                    <div className="bg-[#FFF8EB] border border-[#E08A1E]/50 rounded-lg p-3 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-[#B86300] shrink-0 mt-0.5" />
                      <p className="font-mono text-[11px] text-[#7A5B14] leading-relaxed">
                        {item.mandatoryLabel}
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-[#232019]/90 leading-relaxed">
                    <strong>Methodology Summary: </strong>
                    {item.methodology}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3A3429]/15 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#7A5B14]">
                  <span>Role: {item.documentedRole}</span>
                  {item.links.evidenceMatrixPdfUrl && (
                    <a
                      href={item.links.evidenceMatrixPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4A32C4] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View Source Matrix PDF</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
