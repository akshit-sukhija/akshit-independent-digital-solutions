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
    value: '5 Transparent Steps',
    detail: 'Research → Analysis → AI & Fixed Rules → Software → Handover & Guide.',
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

export function StudioFaqSection({
  variant = 'dark',
  showCtaLink = true,
}: StudioFaqSectionProps) {
  const [openId, setOpenId] = useState<string>(STUDIO_FAQS[0]?.id ?? '');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(STUDIO_FAQS.map((f) => f.category)))];
  const visibleFaqs =
    activeCategory === 'All'
      ? STUDIO_FAQS
      : STUDIO_FAQS.filter((faq) => faq.category === activeCategory);

  const isIvory = variant === 'ivory';

  return (
    <section
      aria-labelledby="studio-faq-heading"
      className={
        isIvory
          ? 'bg-[#F5F1E8] text-[#0E0F14] border-b border-[#D4CBB8] py-20 px-6 bg-ivory-grid'
          : 'bg-[#0E0F14] text-[#F4F0E8] border-b border-[#2C2F42] py-20 px-6'
      }
    >
      <div className="max-w-[1200px] mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-current/15">
          <div className="space-y-2.5 max-w-3xl">
            <p
              className={`font-mono text-xs uppercase tracking-wider ${
                isIvory ? 'text-[#4A32C4] font-medium' : 'text-[#D4AE5C]'
              }`}
            >
              Working Together · Managing Expectations Clearly
            </p>
            <h2
              id="studio-faq-heading"
              className={`font-display text-3xl sm:text-4xl ${
                isIvory ? 'text-[#0E0F14]' : 'text-[#F4F0E8]'
              }`}
            >
              Questions on Scope, Project Stages, Collaboration &amp; Delivery Timelines
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isIvory ? 'text-[#1E202E]/85' : 'text-[#A6A9B8]'
              }`}
            >
              Clear expectations make for better software and data projects. Here is how I handle
              project boundaries, working stages, 1-on-1 collaboration, and realistic timelines.
            </p>
          </div>

          {showCtaLink && (
            <Link
              to="/enquire"
              className={`inline-flex items-center gap-2 font-mono text-xs whitespace-nowrap shrink-0 ${
                isIvory
                  ? 'text-[#4A32C4] font-medium hover:underline'
                  : 'text-[#D4AE5C] hover:text-[#F4F0E8]'
              }`}
            >
              <span>Scope Your Project Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* 4-Column Expectation Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPECTATION_PILLARS.map((item) => (
            <div
              key={item.number}
              className={
                isIvory
                  ? 'bg-[#EAE3D5] border border-[#D4CBB8] rounded-xl p-5 space-y-2'
                  : 'bg-[#161822] border border-[#2C2F42] rounded-xl p-5 space-y-2'
              }
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className={isIvory ? 'text-[#7A5B14]' : 'text-[#D4AE5C]'}>
                  {item.number} · {item.label}
                </span>
              </div>
              <p
                className={`font-display text-2xl ${
                  isIvory ? 'text-[#0E0F14]' : 'text-[#F4F0E8]'
                }`}
              >
                {item.value}
              </p>
              <p
                className={`text-xs leading-relaxed ${
                  isIvory ? 'text-[#1E202E]/85' : 'text-[#A6A9B8]'
                }`}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
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
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? isIvory
                      ? 'bg-[#0E0F14] text-[#F4F0E8] font-medium'
                      : 'bg-[#D4AE5C] text-[#0E0F14] font-medium'
                    : isIvory
                      ? 'bg-[#EAE3D5] text-[#1E202E] border border-[#D4CBB8] hover:border-[#0E0F14]'
                      : 'bg-[#161822] text-[#A6A9B8] border border-[#2C2F42] hover:text-[#F4F0E8]'
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
                className={
                  isIvory
                    ? 'bg-[#EAE3D5] border border-[#D4CBB8] rounded-xl overflow-hidden transition-colors'
                    : 'bg-[#161822] border border-[#2C2F42] rounded-xl overflow-hidden transition-colors'
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <span
                      className={`font-mono text-xs block ${
                        isIvory ? 'text-[#4A32C4]' : 'text-[#D4AE5C]'
                      }`}
                    >
                      0{idx + 1} · {faq.category}
                    </span>
                    <span
                      className={`font-display text-xl sm:text-2xl block leading-snug ${
                        isIvory ? 'text-[#0E0F14]' : 'text-[#F4F0E8]'
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span className="mt-1 sm:mt-0 shrink-0">
                    {isOpen ? (
                      <ChevronUp
                        className={`w-5 h-5 ${isIvory ? 'text-[#4A32C4]' : 'text-[#D4AE5C]'}`}
                      />
                    ) : (
                      <ChevronDown
                        className={`w-5 h-5 ${isIvory ? 'text-[#1E202E]/60' : 'text-[#A6A9B8]'}`}
                      />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 pt-3 text-sm sm:text-base leading-relaxed border-t ${
                      isIvory
                        ? 'text-[#1E202E] border-[#D4CBB8]'
                        : 'text-[#A6A9B8] border-[#2C2F42]/70'
                    }`}
                  >
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
