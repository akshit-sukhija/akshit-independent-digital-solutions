import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { STUDIO_FAQS } from '../data/studioData';

interface StudioFaqSectionProps {
  variant?: 'dark' | 'ivory';
  showCtaLink?: boolean;
}

const EXPECTATION_PILLARS = [
  {
    number: '01',
    label: 'Scope Clarity',
    value: 'Sample-First Scoping',
    detail: 'We inspect a sample spreadsheet, PDF, or workflow before locking deliverables.',
  },
  {
    number: '02',
    label: 'Project Stages',
    value: '4 Clear Chapters',
    detail: 'Discover → Define → Create → Deliver, with written milestones at every step.',
  },
  {
    number: '03',
    label: 'Collaboration Model',
    value: 'Direct 1-on-1 Builder',
    detail: 'Start with a small Fixed-Scope Pilot or a full custom build—no middlemen.',
  },
  {
    number: '04',
    label: 'Typical Timelines',
    value: '1–2 Wks Pilot · 2–4 Wks Build',
    detail: 'Written milestone schedule shared after reviewing your actual material.',
  },
];

export function StudioFaqSection({ showCtaLink = true }: StudioFaqSectionProps) {
  const [openId, setOpenId] = useState<string>(STUDIO_FAQS[0]?.id ?? '');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(STUDIO_FAQS.map((f) => f.category)))];
  const visibleFaqs =
    activeCategory === 'All'
      ? STUDIO_FAQS
      : STUDIO_FAQS.filter((faq) => faq.category === activeCategory);

  return (
    <section
      aria-labelledby="studio-faq-heading"
      className="theme-bg theme-text border-t theme-border py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b theme-border">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-wider theme-accent font-semibold">
                Working Together · Managing Expectations Clearly
              </p>
              <span className="font-hand text-lg theme-accent-secondary">
                — Straightforward answers before we start
              </span>
            </div>
            <h2
              id="studio-faq-heading"
              className="font-display text-3xl sm:text-4xl theme-text"
            >
              Questions on Scope, Project Stages, Collaboration &amp; Delivery Timelines
            </h2>
            <p className="text-sm sm:text-base leading-relaxed theme-text-muted">
              Clear expectations make for better creative, web, and data projects. Here is how I
              handle project boundaries, working stages, 1-on-1 collaboration, and realistic
              timelines.
            </p>
          </div>

          {showCtaLink && (
            <Link
              to="/enquire"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              <span>Scope Your Project Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 4-Column Expectation Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EXPECTATION_PILLARS.map((item) => (
            <div
              key={item.number}
              className="bento-card p-5 space-y-2"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="theme-accent-secondary font-semibold">
                  {item.number} · {item.label}
                </span>
              </div>
              <p className="font-display text-2xl theme-text">
                {item.value}
              </p>
              <p className="text-xs leading-relaxed theme-text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  const firstMatch =
                    cat === 'All'
                      ? STUDIO_FAQS[0]
                      : STUDIO_FAQS.find((f) => f.category === cat);
                  if (firstMatch) {
                    setOpenId(firstMatch.id);
                  }
                }}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#6B2635] text-[#F7F0E4] font-semibold'
                    : 'theme-surface theme-text-muted border theme-border hover:theme-text'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-3">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bento-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-xs block theme-accent font-semibold">
                      0{idx + 1} · {faq.category}
                    </span>
                    <span className="font-display text-xl sm:text-2xl block leading-snug theme-text">
                      {faq.question}
                    </span>
                  </div>
                  <span className="mt-1 sm:mt-0 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 theme-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 theme-text-muted" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-sm sm:text-base leading-relaxed border-t theme-border theme-text-muted">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
