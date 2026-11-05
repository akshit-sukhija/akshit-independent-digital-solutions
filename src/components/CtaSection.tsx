import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MotionReveal } from './MotionReveal';

interface CtaSectionProps {
  kicker?: string;
  headline?: string;
  supportingCopy?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: 'dark' | 'ivory';
}

export function CtaSection({
  kicker = 'Customised Scope-Based Engagements · India (INR)',
  headline = "Have a specific business problem? Let's define the right solution around it.",
  supportingCopy = 'You do not need to select programming languages or technical frameworks. Describe the operational bottleneck, messy dataset, or product idea—and I will recommend a realistic scope and deliverable.',
  primaryLabel = 'Discuss Your Project',
  primaryTo = '/enquire',
  secondaryLabel = 'Explore Services & Scope',
  secondaryTo = '/solutions',
  variant = 'ivory',
}: CtaSectionProps) {
  if (variant === 'ivory') {
    return (
      <section className="bg-[#F4EFE6] text-[#11100E] border-y border-[#3A3429]/30 py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal className="max-w-3xl space-y-6">
            <p className="font-mono text-xs text-[#7A5B14]">{kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#11100E] leading-tight">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-[#232019] leading-relaxed">
              {supportingCopy}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#F4EFE6] bg-[#11100E] hover:bg-[#232019] rounded transition-colors whitespace-nowrap shrink-0"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24B]" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#11100E] border border-[#11100E]/30 hover:border-[#11100E] rounded transition-colors whitespace-nowrap shrink-0"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#1A1814] border-t border-[#3A3429] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <MotionReveal className="max-w-3xl space-y-6">
          <p className="font-mono text-xs text-[#C9A24B]">{kicker}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F2EBDD] leading-tight">
            {headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
            {supportingCopy}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to={primaryTo}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>{primaryLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F2EBDD] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>{secondaryLabel}</span>
            </Link>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
