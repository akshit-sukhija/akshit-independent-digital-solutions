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
      <section className="bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wider">
              Research &amp; Insights · Educational &amp; Project-Grounded Writing
            </p>
            <h1
              className="font-display text-[#F4F0E8] leading-[1.06]"
              style={{ fontSize: 'clamp(2.4rem, 4.4vw, 4rem)' }}
            >
              Research Notes on Marketing, Product Discovery &amp; Practical AI
            </h1>
            <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed">
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
                  className={`px-4 py-2 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#D4AE5C] text-[#0E0F14] font-medium'
                      : 'bg-[#161822] text-[#A6A9B8] border border-[#2C2F42] hover:text-[#F4F0E8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Featured Research Visual: Marketing vs. Branding vs. Advertising (Warm Ivory Section) */}
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-16 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#D4CBB8]">
            <div className="space-y-2 max-w-3xl">
              <p className="font-mono text-xs text-[#4A32C4] font-medium uppercase tracking-wide">
                Featured Research Visual · Market &amp; Brand Fundamentals
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0E0F14]">
                Marketing vs. Branding vs. Advertising: How They Differ &amp; Connect
              </h2>
              <p className="text-sm sm:text-base text-[#1E202E]/85 leading-relaxed">
                Founders often treat these three words as synonyms. Here is a clear structural
                breakdown of how they differ, how they reinforce one another, and how I support
                them through customer data and research—without claiming to be a full-service ad agency.
              </p>
            </div>
            <span className="font-mono text-xs text-[#7A5B14] bg-[#EAE3D5] border border-[#D4CBB8] px-3.5 py-2 rounded-lg shrink-0">
              Educational Research Breakdown
            </span>
          </MotionReveal>

          {/* 3-Column Nested System Visual Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1: Marketing */}
            <div className="bg-[#EAE3D5] border-t-4 border-[#0E0F14] rounded-b-xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#7A5B14]">
                  <span>01 · THE GROWTH SYSTEM</span>
                  <span>Market &amp; Offer</span>
                </div>
                <h3 className="font-display text-3xl text-[#0E0F14]">Marketing</h3>
                <p className="text-sm font-medium text-[#1E202E]">
                  The broader business system for understanding customer needs, shaping the offer,
                  setting pricing, choosing channels, and retaining buyers.
                </p>
                <div className="pt-3 border-t border-[#D4CBB8] space-y-2 text-xs text-[#1E202E]/90">
                  <p>
                    <strong>Core Question:</strong> Who is the customer, what problem do they pay
                    to solve, and how do we deliver value profitably?
                  </p>
                  <p>
                    <strong>Time Horizon:</strong> Medium-to-long term (acquisition + repeat
                    retention).
                  </p>
                  <p>
                    <strong>Example (Indian D2C Brand):</strong> Designing product bundles, pricing
                    tiers, WhatsApp/email retention journeys, and post-purchase repeat flows.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#D4CBB8] font-mono text-[11px] text-[#4A32C4]">
                My Role: Customer segmentation, SQL/Python cohort analysis &amp; retention playbooks.
              </div>
            </div>

            {/* Column 2: Branding */}
            <div className="bg-[#EAE3D5] border-t-4 border-[#4A32C4] rounded-b-xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#4A32C4]">
                  <span>02 · IDENTITY &amp; TRUST</span>
                  <span>Reputation</span>
                </div>
                <h3 className="font-display text-3xl text-[#0E0F14]">Branding</h3>
                <p className="text-sm font-medium text-[#1E202E]">
                  The identity, positioning, and perception a business builds over time—what
                  customers believe about your quality when no discount is offered.
                </p>
                <div className="pt-3 border-t border-[#D4CBB8] space-y-2 text-xs text-[#1E202E]/90">
                  <p>
                    <strong>Core Question:</strong> Why should a buyer trust us, remember us, and
                    return at full price instead of switching for a ₹100 coupon?
                  </p>
                  <p>
                    <strong>Time Horizon:</strong> Long-term compounding trust across every customer
                    touchpoint.
                  </p>
                  <p>
                    <strong>Example (Indian D2C Brand):</strong> Clear positioning, reliable product
                    experience, and earning repeat full-price orders (as measured in our 3,900-record study).
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#D4CBB8] font-mono text-[11px] text-[#4A32C4]">
                My Role: Measuring organic repeat buying vs. discount dependency in customer data.
              </div>
            </div>

            {/* Column 3: Advertising */}
            <div className="bg-[#EAE3D5] border-t-4 border-[#7A5B14] rounded-b-xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[#7A5B14]">
                  <span>03 · PAID PROMOTION</span>
                  <span>Paid Reach</span>
                </div>
                <h3 className="font-display text-3xl text-[#0E0F14]">Advertising</h3>
                <p className="text-sm font-medium text-[#1E202E]">
                  Paid placements inside the marketing system—paying platforms to put a specific
                  message or offer in front of a targeted audience.
                </p>
                <div className="pt-3 border-t border-[#D4CBB8] space-y-2 text-xs text-[#1E202E]/90">
                  <p>
                    <strong>Core Question:</strong> Which paid channel and creative message bring
                    qualified visitors at a sustainable acquisition cost?
                  </p>
                  <p>
                    <strong>Time Horizon:</strong> Immediate and campaign-bound (traffic stops when
                    spend stops).
                  </p>
                  <p>
                    <strong>Example (Indian D2C Brand):</strong> Meta, Google Search, or marketplace
                    sponsored ads promoting a seasonal launch.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#D4CBB8] font-mono text-[11px] text-[#7A5B14]">
                My Role: Analysing campaign conversion &amp; discount margin impact (I do not sell ad-buying retainers).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Research & Insights Reader */}
      <section className="bg-[#0E0F14] py-20 px-6 border-b border-[#2C2F42]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Article List */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-mono text-xs text-[#A6A9B8] pb-2">
              Select a research note ({filteredNotes.length} shown)
            </p>
            {filteredNotes.map((note) => {
              const isSelected = note.id === activeNote.id;
              return (
                <button
                  key={note.id}
                  type="button"
                  onClick={() => setActiveNoteId(note.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-colors space-y-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#161822] border-[#D4AE5C]'
                      : 'bg-[#161822]/50 border-[#2C2F42] hover:border-[#A6A9B8]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
                    <span className="text-[#D4AE5C]">Note {note.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl text-[#F4F0E8] leading-snug">
                    {note.title}
                  </h2>
                  <p className="font-mono text-[11px] text-[#E6D3A7]">
                    Connected to: {note.groundedInProject}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Editorial Article */}
          <article className="lg:col-span-7 bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 md:p-10 space-y-8">
            <div className="space-y-3 border-b border-[#2C2F42] pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
                <span className="text-[#D4AE5C]">Research Note {activeNote.number}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.readTime}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8] leading-tight">
                {activeNote.title}
              </h2>
              <p className="text-base text-[#E6D3A7] leading-relaxed pt-1">
                {activeNote.thesis}
              </p>
            </div>

            {/* First-Person Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-[#F4F0E8]/90 leading-relaxed">
              {activeNote.plainSummary.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3 pt-2 border-t border-[#2C2F42]">
              <h3 className="font-mono text-xs text-[#D4AE5C] uppercase tracking-wide">
                Key Takeaways
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F4F0E8]/95 leading-relaxed">
                {activeNote.keyTakeaways.map((point) => (
                  <li
                    key={point}
                    className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 flex items-start gap-3"
                  >
                    <span className="font-mono text-[#D4AE5C]">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Implication for Founders & SMBs */}
            <div className="bg-[#F5F1E8] text-[#0E0F14] rounded-xl p-5 space-y-1.5">
              <p className="font-mono text-xs text-[#4A32C4] font-medium">
                Practical Takeaway for Founders &amp; Product Teams
              </p>
              <p className="text-sm text-[#1E202E] leading-relaxed">
                {activeNote.practicalImplicationForSMBs}
              </p>
            </div>

            {/* Expandable Technical & Research Notes */}
            <div className="pt-2 border-t border-[#2C2F42]">
              <button
                type="button"
                onClick={() => setShowTechnicalDetails((prev) => !prev)}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#D4AE5C] cursor-pointer"
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
                <ol className="mt-3 bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 space-y-2 text-xs font-mono text-[#A6A9B8]">
                  {activeNote.technicalBreakdown.map((step, i) => (
                    <li key={step}>
                      0{i + 1}. {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div className="pt-4 border-t border-[#2C2F42] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#A6A9B8]">
                Grounded in: {activeNote.groundedInProject}
              </span>
              <Link
                to={`/work/${activeNote.groundedProjectSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
              >
                <span>Inspect Connected Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
