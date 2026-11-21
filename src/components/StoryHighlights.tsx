import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Sparkles,
  X,
} from 'lucide-react';

export interface StoryHighlightItem {
  slug: string;
  shortTitle: string;
  fullTitle: string;
  badge: string;
  role: string;
  collaborationType: string;
  status: string;
  thumbnailUrl: string;
  storyImageUrl: string;
  summary: string;
  outcome: string;
  route: string;
  liveUrl?: string;
}

export const STORY_HIGHLIGHT_ITEMS: StoryHighlightItem[] = [
  {
    slug: 'reframe',
    shortTitle: 'RE:FRAME',
    fullTitle: 'RE:FRAME — Smart Glasses & Focus Engine Concept',
    badge: '1st Place · ZERO² 2026',
    role: 'Product Research, Focus Engine & Revival Strategy Lead',
    collaborationType: 'Collaborative Competition Concept (with Adyot Ohri)',
    status: 'Competition Concept · 15-Slide Deck & Concept Film',
    thumbnailUrl: '/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg',
    storyImageUrl: '/assets/reframe/slide-07.png',
    summary:
      'Reimagining 2014 Google Glass into everyday ₹39,999 prescription-ready smart eyewear powered by the Focus Engine notification filter.',
    outcome:
      'Won 1st Position in REVIVEX at ZERO² 2026 (IITM Janakpuri). Special Video Credit: Adyot Ohri.',
    route: '/work/reframe',
  },
  {
    slug: 'notice-decoder',
    shortTitle: 'Notice Decoder',
    fullTitle: 'Notice Decoder — Plain-English Circular & Notice Assistant',
    badge: 'Live AI & Rules App',
    role: 'Co-Creator · Full-Stack & Rule-Engine Architecture',
    collaborationType: 'Collaborative Engineering (with Dishani)',
    status: 'Live Deployed Web Application',
    thumbnailUrl: '/assets/projects/notice-decoder-live.png',
    storyImageUrl: '/assets/projects/notice-decoder-live.png',
    summary:
      'Turns dense institutional circulars and official notices into structured deadlines, required actions, and plain-English checklists.',
    outcome:
      'Shipped live web application combining deterministic rule checks with structured AI extraction.',
    route: '/work/notice-decoder',
    liveUrl: 'https://notice-decoder.vercel.app/',
  },
  {
    slug: 'sentinelx',
    shortTitle: 'SentinelX',
    fullTitle: 'SentinelX — Automated Security & Risk Reporting Engine',
    badge: 'Live Platform',
    role: 'Co-Creator · Architecture, Scoring Rules & PDF Engine',
    collaborationType: 'Collaborative Engineering (with Dishani)',
    status: 'Live Deployed Web Application',
    thumbnailUrl: '/assets/projects/sentinelx-live.png',
    storyImageUrl: '/assets/projects/sentinelx-live.png',
    summary:
      'Evaluates operational and digital risk signals using transparent rule thresholds and generates executive-ready PDF audit briefs.',
    outcome:
      'Live web platform delivering deterministic risk scoring and downloadable PDF reports.',
    route: '/work/sentinelx',
    liveUrl: 'https://sentinel-x-ochre.vercel.app/',
  },
  {
    slug: 'clarity-redemption-ai',
    shortTitle: 'Clarity AI',
    fullTitle: 'Clarity Redemption AI — Support Triage & Recovery Workflow',
    badge: 'Live AI Workflow',
    role: 'Solo Builder · Workflow Logic & Frontend Interface',
    collaborationType: 'Solo Work',
    status: 'Live Deployed Web Application',
    thumbnailUrl: '/assets/projects/clarity-live.png',
    storyImageUrl: '/assets/projects/clarity-live.png',
    summary:
      'Structures messy customer escalations into clear root-cause categories, priority tiers, and empathetic resolution drafts.',
    outcome:
      'Deployed interactive triage web app demonstrating calm, rule-guided customer recovery.',
    route: '/work/clarity-redemption-ai',
    liveUrl: 'https://clarity-redemption-ai.vercel.app/',
  },
  {
    slug: 'insightforgeai',
    shortTitle: 'InsightForgeAI',
    fullTitle: 'InsightForgeAI — Structured Research & Decision Synthesis',
    badge: 'Live Prototype',
    role: 'Solo Builder · Product UX & Synthesis Pipeline',
    collaborationType: 'Solo Work',
    status: 'Live Deployed Web Prototype',
    thumbnailUrl: '/assets/projects/insightforgeai-live.png',
    storyImageUrl: '/assets/projects/insightforgeai-live.png',
    summary:
      'Transforms raw research notes and market observations into structured comparison matrices and executive takeaways.',
    outcome:
      'Shipped working web prototype for rapid qualitative and quantitative synthesis.',
    route: '/work/insightforgeai',
    liveUrl: 'https://insight-forge-ai-ivory.vercel.app/',
  },
  {
    slug: 'signal-prompt-forge',
    shortTitle: 'SIGNAL',
    fullTitle: 'SIGNAL — Structured Prompt & Workflow Specification Forge',
    badge: 'Live Tool',
    role: 'Solo Builder · Prompt Architecture & UI',
    collaborationType: 'Solo Work',
    status: 'Live Deployed Web Tool',
    thumbnailUrl: '/assets/projects/signal-live.png',
    storyImageUrl: '/assets/projects/signal-live.png',
    summary:
      'Replaces vague one-line AI prompts with repeatable, constraint-checked system specifications for content and product teams.',
    outcome:
      'Live browser utility for assembling structured, verifiable AI instructions.',
    route: '/work/signal-prompt-forge',
    liveUrl: 'https://signal-prompt-forge.vercel.app/',
  },
  {
    slug: 'decoding-customer-value',
    shortTitle: 'Customer Value',
    fullTitle: 'Decoding Customer Value — 3,900-Record Retention & BI Study',
    badge: 'BI & SQL Study',
    role: 'Lead Analyst · SQL, Python & Power BI Modelling',
    collaborationType: 'Collaborative Research & BI Study',
    status: 'Verified 3,900-Record Dataset & Power BI Study',
    thumbnailUrl: '/assets/reframe/slide-12.png',
    storyImageUrl: '/assets/reframe/slide-12.png',
    summary:
      'Investigates why heavy promo-code discounting erodes repeat purchase loyalty across 3,900 retail customer records ($233,081 revenue).',
    outcome:
      'Quantified organic loyalty vs. discount dependency with SQL segmentation and Power BI dashboards.',
    route: '/work/decoding-customer-value',
  },
];

const MARQUEE_CAPABILITIES = [
  'Brand Strategy & Narrative Architecture',
  'Pitch Decks & Competition Storytelling',
  'Visual Content & Concept Direction',
  'Custom React 19 & TypeScript Websites',
  'Rule-Backed AI Workflows & Triage Tools',
  'Python & SQL Customer Retention Analytics',
  'Power BI Executive Dashboards',
  'Product Discovery & UX Teardowns',
];

interface StoryHighlightsProps {
  showMarquee?: boolean;
}

export function StoryHighlights({ showMarquee = true }: StoryHighlightsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem =
    activeIndex !== null ? STORY_HIGHLIGHT_ITEMS[activeIndex] ?? null : null;

  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return prev > 0 ? prev - 1 : STORY_HIGHLIGHT_ITEMS.length - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return prev < STORY_HIGHLIGHT_ITEMS.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <div className="space-y-6">
      {/* Circular Story Highlights Strip */}
      <div className="bento-card p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider theme-accent font-semibold">
              Quick Project Highlights
            </span>
            <span className="font-hand text-lg theme-accent-secondary">
              — Tap any circle for a 15-second project snapshot
            </span>
          </div>
          <span className="font-mono text-[11px] theme-text-muted">
            7 Verified Studio Projects
          </span>
        </div>

        <div
          role="list"
          aria-label="Project story highlights"
          className="flex items-start gap-4 sm:gap-6 overflow-x-auto pb-2 pt-1"
        >
          {STORY_HIGHLIGHT_ITEMS.map((item, idx) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveIndex(idx)}
              data-testid={`story-highlight-${item.slug}`}
              className="group flex flex-col items-center gap-2 shrink-0 text-center cursor-pointer focus:outline-none"
            >
              <span className="p-[3px] rounded-full bg-gradient-to-tr from-[#6B2635] via-[#B9853C] to-[#D17C88] transition-transform duration-200 group-hover:scale-105 shadow-sm">
                <span className="block w-16 h-16 sm:w-[74px] sm:h-[74px] rounded-full overflow-hidden border-2 border-[var(--surface)] bg-[#171516]">
                  <img
                    src={item.thumbnailUrl}
                    alt={`${item.shortTitle} highlight thumbnail`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </span>
              </span>
              <span className="text-xs font-semibold theme-text group-hover:theme-accent transition-colors max-w-[92px] truncate">
                {item.shortTitle}
              </span>
              <span className="font-mono text-[10px] theme-text-muted max-w-[96px] truncate -mt-1">
                {item.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Continuous Capabilities Marquee (Pauses on Hover) */}
      {showMarquee && (
        <div
          aria-label="Studio capabilities marquee"
          className="marquee-container overflow-hidden rounded-full border theme-border theme-surface py-3 px-4"
        >
          <div className="marquee-track items-center gap-8">
            {[...MARQUEE_CAPABILITIES, ...MARQUEE_CAPABILITIES].map((cap, i) => (
              <div
                key={`${cap}-${i}`}
                className="inline-flex items-center gap-3 whitespace-nowrap text-xs font-mono theme-text-muted pr-4"
              >
                <Sparkles className="w-3.5 h-3.5 theme-accent-secondary shrink-0" />
                <span className="theme-text font-medium">{cap}</span>
                <span aria-hidden="true" className="theme-accent">
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive 9:16-Inspired Story Preview Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.fullTitle} Story Preview`}
          data-testid="story-highlight-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-[440px] rounded-[30px] bg-[#171516] text-[#F4EDE3] border border-[#433839] shadow-2xl overflow-hidden flex flex-col">
            {/* Story Progress Indicators */}
            <div className="px-4 pt-3.5 pb-2 flex items-center gap-1.5 bg-[#211D1E]">
              {STORY_HIGHLIGHT_ITEMS.map((s, idx) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Jump to ${s.shortTitle} story`}
                  className={`h-1.5 flex-1 rounded-full transition-colors cursor-pointer ${
                    idx === activeIndex ? 'bg-[#D9B873]' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Top Header */}
            <div className="px-5 py-3 bg-[#211D1E] border-b border-[#433839] flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[11px] text-[#D9B873] inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{activeItem.badge}</span>
                </p>
                <h3 className="font-display text-lg text-[#F4EDE3] truncate">
                  {activeItem.shortTitle}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close story preview"
                className="w-9 h-9 rounded-full bg-[#2D2728] hover:bg-[#6B2635] text-[#F4EDE3] inline-flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Preview */}
            <div className="relative h-56 bg-[#0E0D0E] border-b border-[#433839] overflow-hidden">
              <img
                src={activeItem.storyImageUrl}
                alt={activeItem.fullTitle}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#171516]/90 border border-[#433839] font-mono text-[11px] text-[#D9B873]">
                  {activeItem.status}
                </span>
              </div>
            </div>

            {/* Story Body */}
            <div className="p-5 space-y-4">
              <div className="space-y-1.5">
                <h4 className="font-display text-2xl text-[#F4EDE3] leading-snug">
                  {activeItem.fullTitle}
                </h4>
                <p className="font-mono text-xs text-[#D17C88]">
                  {activeItem.role} · {activeItem.collaborationType}
                </p>
              </div>

              <p className="text-sm text-[#F4EDE3]/90 leading-relaxed">{activeItem.summary}</p>

              <div className="rounded-2xl bg-[#211D1E] border border-[#433839] p-3.5 text-xs space-y-1">
                <span className="font-mono text-[11px] text-[#D9B873] block font-semibold">
                  Verified Outcome:
                </span>
                <p className="text-[#B8AAA0] leading-relaxed">{activeItem.outcome}</p>
              </div>

              {/* Story Navigation + Direct Links */}
              <div className="pt-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous project story"
                    className="w-10 h-10 rounded-full bg-[#211D1E] hover:bg-[#2D2728] border border-[#433839] inline-flex items-center justify-center text-[#F4EDE3] cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next project story"
                    className="w-10 h-10 rounded-full bg-[#211D1E] hover:bg-[#2D2728] border border-[#433839] inline-flex items-center justify-center text-[#F4EDE3] cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {activeItem.liveUrl && (
                    <a
                      href={activeItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full text-xs font-mono bg-[#211D1E] hover:bg-[#2D2728] border border-[#433839] text-[#D9B873]"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <Link
                    to={activeItem.route}
                    onClick={() => setActiveIndex(null)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#6B2635] hover:bg-[#7E2E40] text-[#F7F0E4]"
                  >
                    <span>Open Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
