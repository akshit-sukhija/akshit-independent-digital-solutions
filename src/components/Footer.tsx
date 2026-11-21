import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MessageSquare, Phone } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';

export function Footer() {
  return (
    <footer className="theme-surface border-t theme-border theme-text-muted pb-24 md:pb-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b theme-border">
          {/* Studio Identity & Direct Contact */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#6B2635] text-[#F7F0E4] font-display text-sm font-semibold inline-flex items-center justify-center">
                AS
              </span>
              <Link
                to="/"
                className="font-display text-2xl theme-text hover:theme-accent transition-colors inline-block"
              >
                {PROFILE_CONFIG.studioTitle}
              </Link>
            </div>
            <p className="text-sm theme-text-muted leading-relaxed max-w-md">
              {PROFILE_CONFIG.tagline} {PROFILE_CONFIG.heroSubheadline}
            </p>
            <p className="font-hand text-lg theme-accent">
              Crafted with editorial clarity &amp; verified engineering in New Delhi.
            </p>

            {/* Verified Emails & Phone in Footer */}
            <div className="pt-1 space-y-2 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                  className="inline-flex items-center gap-1.5 theme-text hover:theme-accent transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 theme-accent" />
                  <span>{PROFILE_CONFIG.contact.emailPrimary.address}</span>
                </a>
                <a
                  href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                  className="inline-flex items-center gap-1.5 theme-accent-secondary hover:theme-accent transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 theme-accent-secondary" />
                  <span>{PROFILE_CONFIG.contact.emailSecondary.address}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                <a
                  href={PROFILE_CONFIG.contact.phone.telHref}
                  className="inline-flex items-center gap-1.5 theme-text-muted hover:theme-text transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 theme-accent-secondary" />
                  <span>{PROFILE_CONFIG.contact.phone.displayNumber}</span>
                </a>
                <a
                  href={PROFILE_CONFIG.contact.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 theme-accent hover:underline transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Primary Routes */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs theme-text font-semibold tracking-wide uppercase">
              Studio Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/work" className="hover:theme-text transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:theme-text transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:theme-text transition-colors">
                  Process (Discover → Deliver)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:theme-text transition-colors">
                  About &amp; Studio Philosophy
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:theme-text transition-colors">
                  Insights &amp; Research
                </Link>
              </li>
              <li>
                <Link
                  to="/enquire"
                  className="theme-accent hover:underline transition-colors font-semibold"
                >
                  Contact &amp; Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies & Verified Social Profiles */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs theme-text font-semibold tracking-wide uppercase">
              Featured Case Studies &amp; Profiles
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/work/reframe"
                  className="theme-accent hover:theme-text transition-colors flex items-center justify-between group font-semibold"
                >
                  <span>RE:FRAME (1st Place · REVIVEX · ZERO² 2026)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/notice-decoder"
                  className="hover:theme-text transition-colors flex items-center justify-between group"
                >
                  <span>Notice Decoder (Live AI &amp; Rules App)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/sentinelx"
                  className="hover:theme-text transition-colors flex items-center justify-between group"
                >
                  <span>SentinelX (Live Platform &amp; PDF Engine)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/decoding-customer-value"
                  className="hover:theme-text transition-colors flex items-center justify-between group"
                >
                  <span>Decoding Customer Value (BI &amp; SQL)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </li>
              <li className="pt-3 border-t theme-border flex flex-wrap items-center gap-4">
                <a
                  href={PROFILE_CONFIG.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono theme-accent hover:underline transition-colors"
                >
                  <span>LinkedIn ({PROFILE_CONFIG.contact.linkedin.handle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE_CONFIG.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono theme-accent-secondary hover:underline transition-colors"
                >
                  <span>GitHub ({PROFILE_CONFIG.contact.github.handle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs theme-text-muted">
          <p>
            © {new Date().getFullYear()} {PROFILE_CONFIG.fullName} · {PROFILE_CONFIG.studioTitle}.
          </p>
          <p>
            All project roles, collaborator attributions, awards, and dataset scopes are documented
            from verified records.
          </p>
        </div>
      </div>
    </footer>
  );
}
