import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Mail, MessageSquare, Phone } from 'lucide-react';
import { MotionReveal } from './MotionReveal';
import { PROFILE_CONFIG } from '../data/studioData';

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
  kicker = 'Direct 1-on-1 Studio Collaboration · New Delhi, India (INR)',
  headline = 'Have a story to sharpen or a digital system worth building?',
  supportingCopy = 'Share your product concept, brand narrative challenge, or operational workflow. You can generate a structured Project Brief in two minutes or reach out directly via email, phone, WhatsApp, or LinkedIn.',
  primaryLabel = 'Start a Project',
  primaryTo = '/enquire',
  secondaryLabel = 'Try the 3-Question Solution Finder',
  secondaryTo = '/solutions',
}: CtaSectionProps) {
  return (
    <section className="theme-bg py-14 sm:py-20 px-4 sm:px-6 border-t theme-border">
      <div className="max-w-[1200px] mx-auto">
        <MotionReveal className="bento-wine-panel p-7 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 7 Columns: Editorial Wine Invitation + Two Pill Actions */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#D9B873]">
                {kicker}
              </span>
              <span className="font-hand text-xl text-[#F7F0E4]/90">
                — Built 1-on-1 with Akshit, zero agency middlemen
              </span>
            </div>

            <h2
              className="font-display text-[#F7F0E4] leading-[1.06]"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {headline}
            </h2>

            <p className="text-base sm:text-lg text-[#F7F0E4]/85 leading-relaxed max-w-2xl">
              {supportingCopy}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to={primaryTo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[48px] text-[14.5px] font-semibold text-[#241C1B] bg-[#F7F0E4] hover:bg-[#E8E0D4] rounded-full transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 shadow-md"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-4 h-4 text-[#6B2635]" />
              </Link>

              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-[14.5px] font-semibold text-[#F7F0E4] bg-white/10 hover:bg-white/15 border border-[#F7F0E4]/30 rounded-full transition-colors whitespace-nowrap shrink-0"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </div>
          </div>

          {/* Right 5 Columns: Direct Verified Contact Card */}
          <div className="lg:col-span-5 rounded-[24px] bg-[#241C1B]/55 backdrop-blur-sm border border-[#F7F0E4]/20 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#F7F0E4]/15 pb-3">
              <span className="font-mono text-xs text-[#D9B873] font-medium">
                Direct Studio Channels
              </span>
              <span className="font-mono text-xs text-[#F7F0E4]">
                {PROFILE_CONFIG.fullName}
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#F7F0E4]/15 text-[#F7F0E4] transition-colors"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#D9B873] shrink-0" />
                  <span className="truncate">{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                </span>
                <span className="text-[10px] text-[#D9B873] shrink-0 ml-2">Primary</span>
              </a>

              <a
                href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#F7F0E4]/15 text-[#F7F0E4] transition-colors"
              >
                <span className="inline-flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-[#D9B873] shrink-0" />
                  <span className="truncate">{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                </span>
                <span className="text-[10px] text-[#F7F0E4]/75 shrink-0 ml-2">Secondary</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={PROFILE_CONFIG.contact.phone.telHref}
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#F7F0E4]/15 text-[#F7F0E4] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9B873]" />
                  <span>Call {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                </a>
                <a
                  href={PROFILE_CONFIG.contact.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#F7F0E4]/15 text-[#F7F0E4] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D9B873]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={PROFILE_CONFIG.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-full bg-[#F7F0E4] text-[#241C1B] hover:bg-[#E8E0D4] font-semibold transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#6B2635]" />
                </a>
                <a
                  href={PROFILE_CONFIG.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-full bg-[#F7F0E4] text-[#241C1B] hover:bg-[#E8E0D4] font-semibold transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#6B2635]" />
                </a>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
