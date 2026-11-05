import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

export function NotFoundPage() {
  return (
    <div className="min-h-[75vh] bg-[#11100E] bg-lamplit-glow flex items-center justify-center px-6 py-24">
      <PageMeta
        title="404 — Page Not Found"
        description="The requested page could not be found on Akshit | Independent Digital Solutions."
      />

      <div className="max-w-[680px] w-full bg-[#1A1814] border border-[#3A3429] rounded-lg p-8 md:p-12 space-y-6">
        <p className="font-mono text-xs text-[#E08A1E]">
          Route Error 404 · Unmapped Coordinate
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-[#F2EBDD] leading-tight">
          This Blueprint Route Does Not Exist
        </h1>
        <p className="text-base text-[#A9A092] leading-relaxed">
          The URL you requested does not correspond to an active page or project case study. Use
          the verified links below to navigate the studio.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#F2EBDD] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors"
          >
            <span>Explore Project Portfolio</span>
            <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
          </Link>
          <Link
            to="/enquire"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono text-[#E8D5A8] hover:text-[#C9A24B] transition-colors"
          >
            <span>Discuss a Project →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
