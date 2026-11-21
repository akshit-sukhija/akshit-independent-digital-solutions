import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  return (
    <div className="min-h-[75vh] theme-bg bg-lamplit-glow flex items-center justify-center px-4 sm:px-6 py-24">
      <PageMeta
        title="404 — Page Not Found"
        description="The requested page could not be found on Akshit Sukhija | Independent Digital Content & Solutions Studio."
      />

      <div className="max-w-[680px] w-full bento-card p-8 md:p-12 space-y-6">
        <p className="font-mono text-xs theme-accent font-semibold">
          Route Error 404 · Unmapped Studio Coordinate
        </p>
        <h1 className="font-display text-4xl sm:text-5xl theme-text leading-tight">
          This Studio Route Does Not Exist
        </h1>
        <p className="text-base theme-text-muted leading-relaxed">
          The URL you requested does not correspond to an active page or project case study. Use
          the verified links below to navigate the studio.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-3.5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[46px] text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D9B873]" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[46px] text-xs font-semibold theme-text theme-surface-raised border theme-border hover:border-[var(--accent)] rounded-full transition-colors"
          >
            <span>Explore Selected Work</span>
            <ArrowRight className="w-4 h-4 theme-accent" />
          </Link>
          <Link
            to="/enquire"
            className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono theme-accent font-semibold hover:underline transition-colors"
          >
            <span>Start a Project →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
