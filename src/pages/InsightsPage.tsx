import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { CtaSection } from '../components/CtaSection';
import { INSIGHT_NOTES } from '../data/studioData';

export function InsightsPage() {
  const [activeNoteId, setActiveNoteId] = useState<string>(INSIGHT_NOTES[0].id);
  const activeNote = INSIGHT_NOTES.find((n) => n.id === activeNoteId) ?? INSIGHT_NOTES[0];

  return (
    <div>
      <PageMeta
        title="Insights — Research, Technical Breakdowns & Project Learnings"
        description="Editorial technical notes grounded in real project builds: customer loyalty vs. revenue, deterministic document extraction, evidence-backed reporting, and rule-backed AI."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Research & Thinking · Project-Grounded Technical Breakdowns
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Applied Notes on Data, Deterministic Automation & Systems
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              Rather than publishing generic commentary, every technical breakdown here is derived
              directly from engineering decisions, SQL findings, and architectural trade-offs
              documented in my portfolio projects.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Interactive Editorial Reader + All Notes */}
      <section className="bg-[#11100E] py-16 px-6 border-b border-[#3A3429]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial Index */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-mono text-xs text-[#A9A092] pb-2">
              Select a technical breakdown ({INSIGHT_NOTES.length} documented notes)
            </p>
            {INSIGHT_NOTES.map((note) => {
              const isSelected = note.id === activeNote.id;
              return (
                <button
                  key={note.id}
                  type="button"
                  onClick={() => setActiveNoteId(note.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-colors space-y-2 ${
                    isSelected
                      ? 'bg-[#232019] border-[#C9A24B]'
                      : 'bg-[#1A1814] border-[#3A3429] hover:border-[#A9A092]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                    <span className="text-[#C9A24B]">Note {note.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl text-[#F2EBDD] leading-snug">
                    {note.title}
                  </h2>
                  <p className="font-mono text-[11px] text-[#E8D5A8]">
                    Source evidence: {note.groundedInProject}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Full Technical Note Reader */}
          <article className="lg:col-span-7 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-10 space-y-8">
            <div className="space-y-3 border-b border-[#3A3429] pb-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
                <span className="text-[#C9A24B]">Technical Breakdown {activeNote.number}</span>
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

            <div className="space-y-4">
              <h3 className="font-mono text-xs text-[#C9A24B]">
                Documented Findings & Engineering Observations
              </h3>
              <ul className="space-y-3 text-sm text-[#F2EBDD]/90 leading-relaxed">
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

            <div className="space-y-3">
              <h3 className="font-mono text-xs text-[#E8D5A8]">
                Implementation Pattern
              </h3>
              <ol className="space-y-2.5 text-sm text-[#A9A092]">
                {activeNote.technicalBreakdown.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#C9A24B] pt-0.5">0{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-[#F4EFE6] text-[#11100E] rounded-lg p-5 space-y-2">
              <p className="font-mono text-xs text-[#7A5B14]">
                Practical Takeaway for Indian Founders & SMBs
              </p>
              <p className="text-sm text-[#232019] leading-relaxed">
                {activeNote.practicalImplicationForSMBs}
              </p>
            </div>

            <div className="pt-4 border-t border-[#3A3429] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#A9A092]">
                Grounded in: {activeNote.groundedInProject}
              </span>
              <Link
                to={`/work/${activeNote.groundedProjectSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
              >
                <span>Inspect Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Editorial Note on Long-Form Publications */}
      <section className="bg-[#1A1814] py-14 px-6">
        <div className="max-w-[1200px] mx-auto bg-[#11100E] border border-[#3A3429] rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-xs text-[#C9A24B]">
              Editorial Policy · Factual Evidence Only
            </p>
            <h2 className="font-display text-2xl text-[#F2EBDD]">
              Prefer Full System Specifications Over Marketing Articles?
            </h2>
            <p className="text-sm text-[#A9A092] leading-relaxed">
              I do not publish ghostwritten blog posts or unverified industry claims. For complete
              evidence—including live deployments, SQL scripts, and architectural diagrams—explore
              the project case studies directly.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore Project Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaSection variant="ivory" />
    </div>
  );
}
