import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import { INSIGHT_NOTES } from '../data/studioData';

const CATEGORY_FILTERS = [
  'All',
  'Marketing & Brand Research',
  'Product Thinking',
  'Applied AI & Data',
] as const;

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeNoteId, setActiveNoteId] = useState<string>(INSIGHT_NOTES[0].id);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<boolean>(false);

  const filteredNotes =
    selectedCategory === 'All'
      ? INSIGHT_NOTES
      : INSIGHT_NOTES.filter((note) => note.category === selectedCategory);

  const activeNote =
    filteredNotes.find((n) => n.id === activeNoteId) ??
    filteredNotes[0] ??
    INSIGHT_NOTES[0];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const matching =
      cat === 'All' ? INSIGHT_NOTES : INSIGHT_NOTES.filter((n) => n.category === cat);
    if (matching.length > 0 && !matching.some((n) => n.id === activeNoteId)) {
      setActiveNoteId(matching[0].id);
    }
  };

  return (
    <div>
      <PageMeta
        title="Insights & Research — Marketing vs. Branding, Product Thinking & Applied AI"
        description="First-person research notes by Akshit Sukhija on Marketing vs. Branding vs. Advertising, customer retention data, product discovery, and rule-backed AI systems."
      />

      {/* 1. Editorial Header */}
      <section className="theme-bg bg-lamplit-glow border-b theme-border pt-10 pb-14 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wider">
                Research &amp; Insights · Educational &amp; Project-Grounded Writing
              </p>
              <span className="font-hand text-xl theme-accent-secondary">
                — Notes from real datasets &amp; studio builds
              </span>
            </div>
            <h1
              className="font-display theme-text leading-[1.06]"
              style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)' }}
            >
              Research Notes on Marketing, Product Discovery &amp; Practical AI
            </h1>
            <p className="text-base sm:text-lg theme-text-muted leading-relaxed">
              I write these notes to explain how market research, customer behaviour analysis,
              product discovery, and rule-backed software fit together in real projects.
            </p>
          </MotionReveal>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {CATEGORY_FILTERS.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full font-mono text-xs transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#6B2635] text-[#F7F0E4] font-semibold'
                      : 'theme-surface theme-text-muted border theme-border hover:theme-text'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Featured Research Visual: Marketing vs. Branding vs. Advertising */}
      <section className="theme-bg border-b theme-border py-16 px-4 sm:px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b theme-border">
            <div className="space-y-2 max-w-3xl">
              <p className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
                Featured Research Visual · Market &amp; Brand Fundamentals
              </p>
              <h2 className="font-display text-3xl sm:text-4xl theme-text">
                Marketing vs. Branding vs. Advertising: How They Differ &amp; Connect
              </h2>
              <p className="text-sm sm:text-base theme-text-muted leading-relaxed">
                Founders often treat these three words as synonyms. Here is a clear structural
                breakdown of how they differ, how they reinforce one another, and how I support
                them through customer data and research—without claiming to be a full-service ad
                agency.
              </p>
            </div>
            <span className="font-mono text-xs theme-accent-secondary theme-surface border theme-border px-4 py-2 rounded-full shrink-0">
              Educational Research Breakdown
            </span>
          </MotionReveal>

          {/* 3-Column Bento System Visual Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
            {/* Column 1: Marketing */}
            <div className="bento-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs theme-accent font-semibold">
                  <span>01 · THE GROWTH SYSTEM</span>
                  <span>Market &amp; Offer</span>
                </div>
                <h3 className="font-display text-3xl theme-text">Marketing</h3>
                <p className="text-sm font-medium theme-text">
                  The broader business system for understanding customer needs, shaping the offer,
                  setting pricing, choosing channels, and retaining buyers.
                </p>
                <div className="pt-3 border-t theme-border space-y-2 text-xs theme-text-muted">
                  <p>
                    <strong className="theme-text">Core Question:</strong> Who is the customer,
                    what problem do they pay to solve, and how do we deliver value profitably?
                  </p>
                  <p>
                    <strong className="theme-text">Time Horizon:</strong> Medium-to-long term
                    (acquisition + repeat retention).
                  </p>
                  <p>
                    <strong className="theme-text">Example (Indian D2C Brand):</strong> Designing
                    product bundles, pricing tiers, WhatsApp/email retention journeys, and
                    post-purchase repeat flows.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t theme-border font-mono text-[11px] theme-accent">
                My Role: Customer segmentation, SQL/Python cohort analysis &amp; retention
                playbooks.
              </div>
            </div>

            {/* Column 2: Branding */}
            <div className="bento-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs theme-accent-secondary font-semibold">
                  <span>02 · IDENTITY &amp; TRUST</span>
                  <span>Reputation</span>
                </div>
                <h3 className="font-display text-3xl theme-text">Branding</h3>
                <p className="text-sm font-medium theme-text">
                  The identity, positioning, and perception a business builds over time—what
                  customers believe about your quality when no discount is offered.
                </p>
                <div className="pt-3 border-t theme-border space-y-2 text-xs theme-text-muted">
                  <p>
                    <strong className="theme-text">Core Question:</strong> Why should a buyer trust
                    us, remember us, and return at full price instead of switching for a ₹100
                    coupon?
                  </p>
                  <p>
                    <strong className="theme-text">Time Horizon:</strong> Long-term compounding
                    trust across every customer touchpoint.
                  </p>
                  <p>
                    <strong className="theme-text">Example (Indian D2C Brand):</strong> Clear
                    positioning, reliable product experience, and earning repeat full-price orders
                    (as measured in our 3,900-record study).
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t theme-border font-mono text-[11px] theme-accent-secondary">
                My Role: Measuring organic repeat buying vs. discount dependency in customer data.
              </div>
            </div>

            {/* Column 3: Advertising */}
            <div className="bento-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs theme-accent font-semibold">
                  <span>03 · PAID PROMOTION</span>
                  <span>Paid Reach</span>
                </div>
                <h3 className="font-display text-3xl theme-text">Advertising</h3>
                <p className="text-sm font-medium theme-text">
                  Paid placements inside the marketing system—paying platforms to put a specific
                  message or offer in front of a targeted audience.
                </p>
                <div className="pt-3 border-t theme-border space-y-2 text-xs theme-text-muted">
                  <p>
                    <strong className="theme-text">Core Question:</strong> Which paid channel and
                    creative message bring qualified visitors at a sustainable acquisition cost?
                  </p>
                  <p>
                    <strong className="theme-text">Time Horizon:</strong> Immediate and
                    campaign-bound (traffic stops when spend stops).
                  </p>
                  <p>
                    <strong className="theme-text">Example (Indian D2C Brand):</strong> Meta,
                    Google Search, or marketplace sponsored ads promoting a seasonal launch.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t theme-border font-mono text-[11px] theme-accent">
                My Role: Analysing campaign conversion &amp; discount margin impact (I do not sell
                ad-buying retainers).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Research & Insights Reader */}
      <section className="theme-bg py-16 sm:py-20 px-4 sm:px-6 border-b theme-border">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[18px] items-start">
          {/* Left Column: Article List */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-mono text-xs theme-text-muted pb-2">
              Select a research note ({filteredNotes.length} shown)
            </p>
            {filteredNotes.map((note) => {
              const isSelected = note.id === activeNote.id;
              return (
                <button
                  key={note.id}
                  type="button"
                  onClick={() => setActiveNoteId(note.id)}
                  className={`w-full text-left p-5 rounded-[24px] border transition-colors space-y-2 cursor-pointer ${
                    isSelected
                      ? 'theme-surface-raised border-[var(--accent)]'
                      : 'theme-surface theme-border hover:border-[var(--accent)]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs theme-text-muted">
                    <span className="theme-accent font-semibold">Note {note.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl theme-text leading-snug">{note.title}</h2>
                  <p className="font-mono text-[11px] theme-accent-secondary">
                    Connected to: {note.groundedInProject}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Editorial Article */}
          <article className="lg:col-span-7 bento-card p-6 md:p-10 space-y-8">
            <div className="space-y-3 border-b theme-border pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs theme-text-muted">
                <span className="theme-accent font-semibold">
                  Research Note {activeNote.number}
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.readTime}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl theme-text leading-tight">
                {activeNote.title}
              </h2>
              <p className="text-base theme-accent-secondary font-medium leading-relaxed pt-1">
                {activeNote.thesis}
              </p>
            </div>

            {/* First-Person Narrative */}
            <div className="space-y-4 text-sm sm:text-base theme-text leading-relaxed">
              {activeNote.plainSummary.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3 pt-2 border-t theme-border">
              <h3 className="font-mono text-xs theme-accent font-semibold uppercase tracking-wide">
                Key Takeaways
              </h3>
              <ul className="space-y-2.5 text-sm theme-text leading-relaxed">
                {activeNote.keyTakeaways.map((point) => (
                  <li
                    key={point}
                    className="bento-card-raised p-4 flex items-start gap-3"
                  >
                    <span className="font-mono theme-accent font-semibold">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Implication for Founders & SMBs */}
            <div className="bento-card-raised p-5 space-y-1.5">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                Practical Takeaway for Founders &amp; Product Teams
              </p>
              <p className="text-sm theme-text leading-relaxed">
                {activeNote.practicalImplicationForSMBs}
              </p>
            </div>

            {/* Expandable Technical & Research Notes */}
            <div className="pt-2 border-t theme-border">
              <button
                type="button"
                onClick={() => setShowTechnicalDetails((prev) => !prev)}
                className="inline-flex items-center gap-1.5 font-mono text-xs theme-accent font-semibold hover:underline cursor-pointer"
              >
                <span>
                  {showTechnicalDetails
                    ? 'Hide Research & Technical Implementation Notes'
                    : 'Show Research & Technical Implementation Notes'}
                </span>
                {showTechnicalDetails ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {showTechnicalDetails && (
                <ol className="mt-3 bento-card-raised p-4 space-y-2 text-xs font-mono theme-text-muted">
                  {activeNote.technicalBreakdown.map((step, i) => (
                    <li key={step}>
                      0{i + 1}. {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div className="pt-4 border-t theme-border flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs theme-text-muted">
                Grounded in: <strong className="theme-text">{activeNote.groundedInProject}</strong>
              </span>
              <Link
                to={`/work/${activeNote.groundedProjectSlug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
              >
                <span>Inspect Connected Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9B873]" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
