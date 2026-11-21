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
  SlidersHorizontal,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMetrics } from '../components/ProjectMetrics';
import { CtaSection } from '../components/CtaSection';
import { StoryHighlights } from '../components/StoryHighlights';
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

type PrimaryWorkPill = 'all' | 'live-systems' | 'research-concepts';

const PRIMARY_PILL_FILTERS: { id: PrimaryWorkPill; label: string; countLabel: string }[] = [
  { id: 'all', label: 'All Work', countLabel: 'Complete Studio Archive' },
  { id: 'live-systems', label: 'Live Web & AI Systems', countLabel: 'Deployed Apps & Engines' },
  {
    id: 'research-concepts',
    label: 'Research & Product Concepts',
    countLabel: 'RE:FRAME, BI & Data Studies',
  },
];

const TECH_FILTERS = [
  { value: 'all', label: 'All Tools & Disciplines' },
  { value: 'Product Strategy', label: 'Product Strategy' },
  { value: 'Python', label: 'Python' },
  { value: 'React', label: 'React' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'FastAPI', label: 'FastAPI' },
];

function StructuredWorkCard({ item }: { item: CuratedWorkItem }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article
      data-testid={`work-card-${item.slug}`}
      className="polaroid-frame flex flex-col justify-between gap-5"
    >
      <div className="space-y-4">
        {/* Genuine Live Application or Presentation Visual (When Available) */}
        {item.screenshotUrl && (
          <div className="rounded-[20px] overflow-hidden border theme-border theme-bg">
            <img
              src={item.screenshotUrl}
              alt={`${item.title} preview`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-48 object-cover object-top"
            />
            {item.screenshotCaption && (
              <p className="px-3.5 py-2 font-mono text-[11px] theme-text-muted border-t theme-border">
                {item.screenshotCaption}
              </p>
            )}
          </div>
        )}

        <div className="px-1.5 space-y-3">
          {/* Editorial Metadata Line */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs theme-text-muted border-b theme-border pb-2.5">
            {item.recognitionBadge && (
              <>
                <span className="inline-flex items-center gap-1 theme-accent font-semibold">
                  <Award className="w-3.5 h-3.5 theme-accent-secondary" />
                  {item.recognitionBadge}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="theme-accent-secondary font-semibold">{item.collaborationType}</span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-display text-2xl sm:text-3xl theme-text leading-snug">
              {item.title}
            </h3>
            <p className="text-sm theme-text-muted leading-relaxed">{item.subtitle}</p>
            {item.specialCredit && (
              <p className="font-mono text-xs theme-accent font-semibold">{item.specialCredit}</p>
            )}
          </div>

          {/* Structured Case Summary: Overview, My Contribution & Outcomes */}
          <div className="space-y-3 pt-1 text-xs leading-relaxed">
            <div>
              <p className="font-mono text-[11px] theme-accent font-semibold mb-0.5">
                The Brief &amp; Problem
              </p>
              <p className="text-sm theme-text">{item.overview}</p>
              <p className="theme-text-muted mt-1">{item.problem}</p>
            </div>

            <div className="bento-card-raised p-3.5 space-y-1">
              <p className="font-mono text-[11px] theme-accent-secondary font-semibold">
                My Role &amp; Contribution
              </p>
              <p className="theme-text">{item.myContribution}</p>
              <p className="font-mono text-[11px] theme-text-muted">{item.collaborators}</p>
            </div>

            <div>
              <p className="font-mono text-[11px] theme-accent font-semibold mb-0.5">Outcomes</p>
              <p className="theme-text-muted">{item.outcomes}</p>
            </div>
          </div>

          {/* Clean Unboxed Technology List */}
          <div className="pt-1 font-mono text-xs theme-text-muted">
            <span className="theme-text font-semibold">Technology: </span>
            <span>{item.technologies.join(' · ')}</span>
          </div>

          {/* Quantitative Chart Shown on Demand When Inspecting Details */}
          {showDetails && <ProjectMetrics projectSlug={item.slug} compact />}
        </div>
      </div>

      {/* Expandable Methodology & Proof Links */}
      <div className="px-1.5 space-y-3 pt-3 border-t theme-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="inline-flex items-center gap-1.5 font-mono text-xs theme-accent font-semibold hover:underline cursor-pointer"
          >
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
            <span>{showDetails ? 'Hide Methodology & Scope' : 'Inspect Methodology & Scope'}</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {item.hasDedicatedCaseStudy && (
              <Link
                to={`/work/${item.slug}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] font-sans font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            {item.links.liveDemoUrl && (
              <a
                href={item.links.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full theme-surface-raised border theme-border hover:border-[var(--accent)] theme-accent font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {item.links.githubUrl && (
              <a
                href={item.links.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full theme-surface-raised border theme-border theme-text-muted hover:theme-text transition-colors whitespace-nowrap shrink-0"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {item.links.colabUrl && (
              <a
                href={item.links.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full theme-surface-raised border theme-border theme-accent-secondary hover:underline transition-colors whitespace-nowrap shrink-0"
              >
                <span>Colab Notebook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {showDetails && (
          <div className="bento-card-raised p-4 space-y-2.5 text-xs">
            <div>
              <p className="font-mono text-[11px] theme-accent font-semibold mb-0.5">Methodology</p>
              <p className="theme-text leading-relaxed">{item.methodology}</p>
            </div>
            <div className="pt-2 border-t theme-border">
              <p className="font-mono text-[11px] theme-accent-secondary font-semibold mb-0.5">
                Scope &amp; Context
              </p>
              <p className="theme-text-muted leading-relaxed">{item.limitations}</p>
            </div>
            {item.links.drivePdfPlaceholder && (
              <div className="pt-2 border-t theme-border flex items-center gap-2 font-mono text-[11px] theme-text-muted">
                <FileText className="w-3.5 h-3.5 theme-accent-secondary shrink-0" />
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
  const [activePill, setActivePill] = useState<PrimaryWorkPill>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Map the 3 meaningful primary pills to the tested studioLogic filter functions
  const mappedDomain: CapabilityDomain | 'all' = 'all';
  const mappedEvidence: EvidenceFilterType =
    activePill === 'live-systems'
      ? 'live-demo'
      : activePill === 'research-concepts'
        ? 'report-or-study'
        : 'all';
  const mappedCollaboration: WorkCollaborationType | 'all' = 'all';

  const selectedProjects = filterAndSortProjects(
    mappedDomain,
    'all',
    selectedTech,
    mappedEvidence
  );

  const researchAndAnalyticsItems = filterCuratedWork({
    workSection: 'research-analytics',
    collaborationType: mappedCollaboration,
    technology: selectedTech,
  });

  const productConceptItems = filterCuratedWork({
    workSection: 'product-concepts',
    collaborationType: mappedCollaboration,
    technology: selectedTech,
  });

  const resetAllFilters = () => {
    setActivePill('all');
    setSelectedTech('all');
  };

  const showResearchSection = activePill === 'all' || activePill === 'research-concepts';

  return (
    <div>
      <PageMeta
        title="Selected Work — RE:FRAME, Live Web Systems, Research & AI Prototypes"
        description="Explore Akshit Sukhija’s curated studio work—led by RE:FRAME (1st Place · REVIVEX · ZERO² 2026) alongside Notice Decoder, SentinelX, Clarity Redemption AI, SIGNAL, InsightForgeAI, and quantitative data studies."
      />

      {/* Editorial Header + Circular Story Highlights + 3 Meaningful Pill Filters */}
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-14 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          <MotionReveal className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                Selected Work · Visual Project Wall &amp; Case Studies
              </p>
              <span className="font-hand text-xl theme-accent-secondary">
                — Genuine screenshots, clear roles &amp; verified outcomes
              </span>
            </div>
            <h1
              className="font-display theme-text leading-tight"
              style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)' }}
            >
              Proof of Work Across Product Storytelling, Web Systems &amp; Data
            </h1>
            <p className="text-base sm:text-lg theme-text-muted leading-relaxed">
              Every project below documents the brief, my exact contribution, the methodology and
              tools applied, and the verified outcome—clearly distinguishing competition concepts,
              collaborative engineering, solo builds, and quantitative research.
            </p>
          </MotionReveal>

          {/* Circular Project Story Highlights */}
          <MotionReveal delay={0.04}>
            <StoryHighlights showMarquee={false} />
          </MotionReveal>

          {/* 3 Meaningful Pill Filters + Optional Tool Filter */}
          <MotionReveal
            delay={0.06}
            className="bento-card p-4 sm:p-5 flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div
                role="group"
                aria-label="Filter projects by category"
                className="flex flex-wrap items-center gap-2"
              >
                {PRIMARY_PILL_FILTERS.map((pill) => {
                  const isActive = activePill === pill.id;
                  return (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setActivePill(pill.id)}
                      aria-pressed={isActive}
                      className={`px-4 py-2.5 min-h-[42px] rounded-full text-xs sm:text-[13.5px] font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#6B2635] text-[#F7F0E4] shadow-xs'
                          : 'theme-surface-raised theme-text-muted hover:theme-text border theme-border'
                      }`}
                    >
                      <span>{pill.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2.5">
                {(activePill !== 'all' || selectedTech !== 'all') && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-mono text-xs theme-accent border theme-border hover:border-[var(--accent)] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setShowAdvancedFilters((prev) => !prev)}
                  aria-expanded={showAdvancedFilters}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-mono text-xs theme-text theme-surface-raised border theme-border cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 theme-accent" />
                  <span>Filter by Tool ({selectedTech === 'all' ? 'All' : selectedTech})</span>
                </button>
              </div>
            </div>

            {showAdvancedFilters && (
              <div className="pt-3 border-t theme-border flex flex-wrap items-center gap-2">
                {TECH_FILTERS.map((t) => {
                  const isSelected = selectedTech === t.value;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setSelectedTech(t.value)}
                      className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#241C1B] text-[#F7F0E4] dark:bg-[#F7F0E4] dark:text-[#241C1B] font-semibold'
                          : 'theme-bg theme-text-muted border theme-border hover:theme-text'
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            )}
          </MotionReveal>
        </div>
      </section>

      {/* SECTION 01: SELECTED PROJECTS WALL (Flagship Case Studies led by RE:FRAME) */}
      <section
        id="selected-projects"
        className="theme-bg py-16 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b theme-border pb-4">
            <div className="space-y-1">
              <p className="font-mono text-xs theme-accent font-semibold">
                01 · Flagship Case Studies &amp; Live Web Systems
              </p>
              <h2 className="font-display text-3xl sm:text-4xl theme-text">
                Award-Winning Concepts, Live AI Apps &amp; BI Case Studies
              </h2>
              <p className="text-sm theme-text-muted max-w-2xl">
                Led by RE:FRAME (1st Place · REVIVEX · ZERO² 2026) alongside deployed web
                applications, deterministic AI tools, and quantitative retention studies.
              </p>
            </div>
            <p className="font-mono text-xs theme-text-muted tabular-nums shrink-0">
              {selectedProjects.length}{' '}
              {selectedProjects.length === 1 ? 'case study' : 'case studies'}
            </p>
          </div>

          {selectedProjects.length > 0 ? (
            <div className="space-y-8">
              {selectedProjects.slice(0, 3).map((project, idx) => (
                <MotionReveal key={project.slug} delay={idx * 0.04}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}

              {selectedProjects.length > 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] items-stretch pt-2">
                  {selectedProjects.slice(3).map((project) => (
                    <div key={project.slug} className="flex">
                      <ProjectCard project={project} compact />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="bento-card p-8 text-center space-y-3">
              <p className="text-sm theme-text-muted">
                No flagship case studies match that exact filter combination.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-5 py-2.5 text-xs font-mono text-[#F7F0E4] bg-[#6B2635] rounded-full cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 02: RESEARCH & ANALYTICS */}
      {showResearchSection && (
        <section
          id="research-analytics"
          className="theme-bg py-16 px-4 sm:px-6 border-b theme-border bg-ivory-grid"
        >
          <div className="max-w-[1200px] mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b theme-border pb-4">
              <div className="space-y-1">
                <p className="font-mono text-xs theme-accent font-semibold">
                  02 · Research &amp; Analytics
                </p>
                <h2 className="font-display text-3xl sm:text-4xl theme-text">
                  Data Science Studies, Cohort Retention &amp; NLP Pipelines
                </h2>
                <p className="text-sm theme-text-muted max-w-2xl">
                  Quantitative investigations in Python, SQL, and Scikit-learn—from a 500,000+
                  record UIDAI demographic study in Google Colab to a 33,171-episode streaming
                  retention analysis (16.7% vs 11.8% drop-off).
                </p>
              </div>
              <p className="font-mono text-xs theme-text-muted tabular-nums shrink-0">
                {researchAndAnalyticsItems.length}{' '}
                {researchAndAnalyticsItems.length === 1 ? 'study' : 'studies'}
              </p>
            </div>

            {researchAndAnalyticsItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] items-stretch">
                {researchAndAnalyticsItems.map((item) => (
                  <StructuredWorkCard key={item.slug} item={item} />
                ))}
              </div>
            ) : (
              <div className="bento-card p-8 text-center space-y-3">
                <p className="text-sm theme-text-muted">
                  No research or analytics studies match the active filters.
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 text-xs font-mono text-[#F7F0E4] bg-[#6B2635] rounded-full cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 03: PRODUCT CONCEPTS & WORKING PROTOTYPES */}
      <section
        id="product-concepts"
        className="theme-bg py-16 px-4 sm:px-6 border-b theme-border"
      >
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b theme-border pb-4">
            <div className="space-y-1">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                03 · Product Concepts &amp; Working AI Prototypes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl theme-text">
                Live AI Prototypes, Prompt Systems &amp; Product Strategy Teardowns
              </h2>
              <p className="text-sm theme-text-muted max-w-2xl">
                Working web prototypes (SIGNAL – Prompt Forge and InsightForgeAI) alongside
                competition product specifications and independent retention teardowns.
              </p>
            </div>
            <p className="font-mono text-xs theme-text-muted tabular-nums shrink-0">
              {productConceptItems.length}{' '}
              {productConceptItems.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {productConceptItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] items-stretch">
              {productConceptItems.map((item) => (
                <StructuredWorkCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="bento-card p-8 text-center space-y-3">
              <p className="text-sm theme-text-muted">
                No product concepts or prototypes match the active filters.
              </p>
              <button
                type="button"
                onClick={resetAllFilters}
                className="px-5 py-2.5 text-xs font-mono text-[#F7F0E4] bg-[#6B2635] rounded-full cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
