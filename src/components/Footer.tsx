import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageSquare, Phone } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';

export function Footer() {
  return (
    <footer className="bg-[#0B0E14] border-t border-[#252C3D] text-[#A6A9B8]">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#252C3D]">
          {/* Studio Identity & Direct Contact */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="font-display text-2xl text-[#F4F0E8] hover:text-[#38BDF8] transition-colors inline-block"
            >
              {PROFILE_CONFIG.studioTitle}
            </Link>
            <p className="text-sm text-[#A6A9B8] leading-relaxed max-w-md">
              {PROFILE_CONFIG.tagline} {PROFILE_CONFIG.heroSubheadline}
            </p>

            {/* Verified Emails & Phone in Footer */}
            <div className="pt-2 space-y-2 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                  className="inline-flex items-center gap-1.5 text-[#F4F0E8] hover:text-[#38BDF8] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                </a>
                <a
                  href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                  className="inline-flex items-center gap-1.5 text-[#E6D3A7] hover:text-[#38BDF8] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AE5C]" />
                  <span>{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <a
                  href={PROFILE_CONFIG.contact.phone.telHref}
                  className="inline-flex items-center gap-1.5 text-[#A6A9B8] hover:text-[#F4F0E8] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AE5C]" />
                  <span>{PROFILE_CONFIG.contact.phone.displayNumber}</span>
                </a>
                <a
                  href={PROFILE_CONFIG.contact.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#7AD992] hover:underline transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Primary Routes */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs text-[#F4F0E8] tracking-wide">Studio Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/solutions" className="hover:text-[#F4F0E8] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#F4F0E8] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#F4F0E8] transition-colors">
                  Process (Discover → Deliver)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F4F0E8] transition-colors">
                  About &amp; Studio Philosophy
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#F4F0E8] transition-colors">
                  Insights &amp; Research
                </Link>
              </li>
              <li>
                <Link
                  to="/enquire"
                  className="text-[#38BDF8] hover:text-[#7DD3FC] transition-colors font-medium"
                >
                  Contact &amp; Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies & Verified Social Profiles */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs text-[#F4F0E8] tracking-wide">
              Featured Case Studies &amp; Profiles
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/work/reframe"
                  className="text-[#38BDF8] hover:text-[#F4F0E8] transition-colors flex items-center justify-between group font-medium"
                >
                  <span>RE:FRAME (1st Place · REVIVEX · ZERO² 2026)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/notice-decoder"
                  className="hover:text-[#F4F0E8] transition-colors flex items-center justify-between group"
                >
                  <span>Notice Decoder (Live AI &amp; Rules App)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A9B8] group-hover:text-[#38BDF8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/sentinelx"
                  className="hover:text-[#F4F0E8] transition-colors flex items-center justify-between group"
                >
                  <span>SentinelX (Live Platform &amp; PDF Engine)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A9B8] group-hover:text-[#38BDF8] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/decoding-customer-value"
                  className="hover:text-[#F4F0E8] transition-colors flex items-center justify-between group"
                >
                  <span>Decoding Customer Value (BI &amp; SQL)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A6A9B8] group-hover:text-[#38BDF8] transition-colors" />
                </Link>
              </li>
              <li className="pt-3 border-t border-[#252C3D]/80 flex flex-wrap items-center gap-4">
                <a
                  href={PROFILE_CONFIG.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
                >
                  <span>LinkedIn ({PROFILE_CONFIG.contact.linkedin.handle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE_CONFIG.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E6D3A7] hover:text-[#38BDF8] transition-colors"
                >
                  <span>GitHub ({PROFILE_CONFIG.contact.github.handle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A6A9B8]">
          <p>© {new Date().getFullYear()} {PROFILE_CONFIG.fullName} · {PROFILE_CONFIG.studioTitle}.</p>
          <p>
            All project roles, collaborator attributions, awards, and dataset scopes are documented
            from verified records.
          </p>
        </div>
      </div>
    </footer>
  );
}
