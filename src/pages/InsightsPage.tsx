import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import { INSIGHT_NOTES } from '../data/studioData';

export function InsightsPage() {
  const [activeNoteId, setActiveNoteId] = useState<string>(INSIGHT_NOTES[0].id);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<boolean>(false);
  const activeNote = INSIGHT_NOTES.find((n) => n.id === activeNoteId) ?? INSIGHT_NOTES[0];

  return (
    <div>
      <PageMeta
        title="Insights — Practical Lessons From Real Data & AI Projects"
        description="Short, easy-to-read articles by Akshit on customer loyalty vs. discounts, safe AI document automation, and turning scattered files into clear reports."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Research & Thinking · Short, Practical Project Lessons
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Practical Lessons on Business Data, AI & Automation
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              Short, plain-English guides based directly on what I learned while building and
              analysing the projects in this portfolio.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive Article Reader */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Article List */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-mono text-xs text-[#A9A092] pb-2">
              Choose an article to read ({INSIGHT_NOTES.length} project-based guides)
            </p>
            {INSIGHT_NOTES.map((note) => {
              const isSelected = note.id === activeNote.id;
              return (
                <button
                  key={note.id}
                  type="button"
                  onClick={() => setActiveNoteId(note.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-colors space-y-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#232019] border-[#C9A24B]'
                      : 'bg-[#1A1814] border-[#3A3429] hover:border-[#A9A092]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                    <span className="text-[#C9A24B]">Article {note.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl text-[#F2EBDD] leading-snug">
                    {note.title}
                  </h2>
                  <p className="font-mono text-[11px] text-[#E8D5A8]">
                    Based on project: {note.groundedInProject}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Plain-English Article + Expandable Technical Breakdown */}
          <article className="lg:col-span-7 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-10 space-y-8">
            <div className="space-y-3 border-b border-[#3A3429] pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                <span className="text-[#C9A24B]">Article {activeNote.number}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeNote.readTime}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#F2EBDD] leading-tight">
                {activeNote.title}
              </h2>
              <p className="text-base text-[#E8D5A8] leading-relaxed pt-1">
                {activeNote.thesis}
              </p>
            </div>

            {/* Plain-English Story */}
            <div className="space-y-3 text-sm sm:text-base text-[#F2EBDD]/90 leading-relaxed">
              {activeNote.plainSummary.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs text-[#C9A24B]">
                What This Means in Practice
              </h3>
              <ul className="space-y-2.5 text-sm text-[#F2EBDD]/95 leading-relaxed">
                {activeNote.keyTakeaways.map((point) => (
                  <li
                    key={point}
                    className="bg-[#11100E] border border-[#3A3429] rounded p-4 flex items-start gap-3"
                  >
                    <span className="font-mono text-[#C9A24B]">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actionable Tip for Indian Business Owners (Ivory Box) */}
            <div className="bg-[#F4EFE6] text-[#11100E] rounded-lg p-5 space-y-1.5">
              <p className="font-mono text-xs text-[#7A5B14]">
                Quick Tip for Business Owners & Founders
              </p>
              <p className="text-sm text-[#232019] leading-relaxed">
                {activeNote.practicalImplicationForSMBs}
              </p>
            </div>

            {/* Expandable Technical Explanation */}
            <div className="pt-2 border-t border-[#3A3429]">
              <button
                type="button"
                onClick={() => setShowTechnicalDetails((prev) => !prev)}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
              >
                <span>
                  {showTechnicalDetails
                    ? 'Hide Technical Implementation Notes'
                    : 'Show Technical Implementation Notes (For Developers)'}
                </span>
                {showTechnicalDetails ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {showTechnicalDetails && (
                <ol className="mt-3 bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2 text-xs font-mono text-[#A9A092]">
                  {activeNote.technicalBreakdown.map((step, i) => (
                    <li key={step}>
                      0{i + 1}. {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <div className="pt-4 border-t border-[#3A3429] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#A9A092]">
                Project Proof: {activeNote.groundedInProject}
              </span>
              <Link
                to={`/work/${activeNote.groundedProjectSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
              >
                <span>See Project Case Study</span>
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
