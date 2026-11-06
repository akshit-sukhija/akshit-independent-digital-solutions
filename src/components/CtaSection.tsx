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
  kicker = 'Direct 1-on-1 Collaboration · India (INR)',
  headline = "Have a problem worth solving? Let's turn it into a working solution.",
  supportingCopy = 'Explain what is taking too much time, what spreadsheet feels unclear, or what product idea you want to build. You can generate a structured Project Brief or reach out directly via email, phone, WhatsApp, or LinkedIn.',
  primaryLabel = 'Discuss Your Project',
  primaryTo = '/enquire',
  secondaryLabel = 'Try the 3-Question Solution Finder',
  secondaryTo = '/solutions',
  variant = 'ivory',
}: CtaSectionProps) {
  if (variant === 'ivory') {
    return (
      <section className="bg-[#F5F1E8] text-[#0E0F14] border-y border-[#D4CBB8] py-20 px-6 bg-ivory-grid">
        <div className="max-w-[1200px] mx-auto">
          <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <p className="font-mono text-xs text-[#4A32C4] font-medium">{kicker}</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#0E0F14] leading-tight">
                {headline}
              </h2>
              <p className="text-base sm:text-lg text-[#1E202E] leading-relaxed">
                {supportingCopy}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={primaryTo}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F1E8] bg-[#0E0F14] hover:bg-[#1E202E] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{primaryLabel}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AE5C]" />
                </Link>
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#0E0F14] border border-[#0E0F14]/30 hover:border-[#4A32C4] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{secondaryLabel}</span>
                </Link>
              </div>
            </div>

            {/* Direct Verified Contact Card */}
            <div className="lg:col-span-5 bg-[#EAE3D5] border border-[#D4CBB8] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#D4CBB8] pb-3">
                <span className="font-mono text-xs text-[#4A32C4] font-medium">
                  Direct Contact Channels
                </span>
                <span className="font-mono text-xs text-[#0E0F14]">
                  {PROFILE_CONFIG.fullName}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <a
                  href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                  className="flex items-center justify-between p-2.5 rounded bg-[#F5F1E8] border border-[#D4CBB8] hover:border-[#4A32C4] text-[#0E0F14] transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#4A32C4]" />
                    <span>{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                  </span>
                  <span className="text-[10px] text-[#4A32C4]">Email</span>
                </a>

                <a
                  href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                  className="flex items-center justify-between p-2.5 rounded bg-[#F5F1E8] border border-[#D4CBB8] hover:border-[#4A32C4] text-[#0E0F14] transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#7A5B14]" />
                    <span>{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                  </span>
                  <span className="text-[10px] text-[#7A5B14]">Alt Email</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PROFILE_CONFIG.contact.phone.telHref}
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-[#F5F1E8] border border-[#D4CBB8] hover:border-[#0E0F14] text-[#0E0F14] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#7A5B14]" />
                    <span>Call {PROFILE_CONFIG.contact.phone.displayNumber}</span>
                  </a>
                  <a
                    href={PROFILE_CONFIG.contact.phone.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 rounded bg-[#F5F1E8] border border-[#D4CBB8] hover:border-[#0E0F14] text-[#0E0F14] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#4A32C4]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={PROFILE_CONFIG.contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded bg-[#0E0F14] text-[#F5F1E8] hover:bg-[#1E202E] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#8B75FF]" />
                  </a>
                  <a
                    href={PROFILE_CONFIG.contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2 rounded bg-[#0E0F14] text-[#F5F1E8] hover:bg-[#1E202E] transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#D4AE5C]" />
                  </a>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#161822] border-t border-[#2C2F42] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <MotionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="font-mono text-xs text-[#8B75FF]">{kicker}</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#F4F0E8] leading-tight">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed">
              {supportingCopy}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#F4F0E8] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-6 space-y-3 text-xs font-mono">
            <p className="text-[#E6D3A7]">Direct Contact — {PROFILE_CONFIG.fullName}</p>
            <a
              href={PROFILE_CONFIG.contact.emailPrimary.mailto}
              className="flex items-center gap-2 text-[#F4F0E8] hover:text-[#8B75FF] py-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#8B75FF]" />
              <span>{PROFILE_CONFIG.contact.emailPrimary.address}</span>
            </a>
            <a
              href={PROFILE_CONFIG.contact.emailSecondary.mailto}
              className="flex items-center gap-2 text-[#A6A9B8] hover:text-[#8B75FF] py-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AE5C]" />
              <span>{PROFILE_CONFIG.contact.emailSecondary.address}</span>
            </a>
            <div className="flex flex-wrap gap-3 pt-2 border-t border-[#2C2F42]">
              <a
                href={PROFILE_CONFIG.contact.phone.telHref}
                className="text-[#D4AE5C] hover:underline"
              >
                Call {PROFILE_CONFIG.contact.phone.displayNumber}
              </a>
              <a
                href={PROFILE_CONFIG.contact.phone.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7AD992] hover:underline"
              >
                WhatsApp
              </a>
              <a
                href={PROFILE_CONFIG.contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B75FF] hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE_CONFIG.contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6D3A7] hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
