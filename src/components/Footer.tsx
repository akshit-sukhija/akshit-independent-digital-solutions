import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#11100E] border-t border-[#3A3429] text-[#A9A092]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#3A3429]">
          {/* Studio Identity */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="font-display text-2xl text-[#F2EBDD] hover:text-[#E8D5A8] transition-colors inline-block"
            >
              Akshit | Independent Digital Solutions
            </Link>
            <p className="text-sm text-[#A9A092] leading-relaxed max-w-md">
              I help startups and small businesses turn messy data, repetitive workflows and
              early-stage product ideas into useful digital solutions.
            </p>
            <p className="font-mono text-xs text-[#E8D5A8]/80 pt-1">
              Independent individual operator · India · Scope-based INR engagements
            </p>
          </div>

          {/* Primary Routes */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-xs text-[#F2EBDD] tracking-wide">Studio Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/work" className="hover:text-[#F2EBDD] transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#F2EBDD] transition-colors">
                  Services & Capabilities
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#F2EBDD] transition-colors">
                  How I Work
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#F2EBDD] transition-colors">
                  Research & Thinking
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F2EBDD] transition-colors">
                  About & Credentials
                </Link>
              </li>
              <li>
                <Link to="/enquire" className="text-[#C9A24B] hover:text-[#E8D5A8] transition-colors">
                  Submit a Project Enquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Case Studies & Verified Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs text-[#F2EBDD] tracking-wide">
              Flagship & Featured Case Studies
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/work/notice-decoder"
                  className="hover:text-[#F2EBDD] transition-colors flex items-center justify-between group"
                >
                  <span>01. Notice Decoder (AI & Full-Stack)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A9A092] group-hover:text-[#C9A24B] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/sentinelx"
                  className="hover:text-[#F2EBDD] transition-colors flex items-center justify-between group"
                >
                  <span>02. SentinelX (Security Data & PDF Engine)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A9A092] group-hover:text-[#C9A24B] transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  to="/work/decoding-customer-value"
                  className="hover:text-[#F2EBDD] transition-colors flex items-center justify-between group"
                >
                  <span>03. Decoding Customer Value (Data & BI)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A9A092] group-hover:text-[#C9A24B] transition-colors" />
                </Link>
              </li>
              <li className="pt-2 border-t border-[#3A3429]/60">
                <a
                  href="https://github.com/akshit-sukhija"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E8D5A8] hover:text-[#C9A24B] transition-colors"
                >
                  <span>GitHub (@akshit-sukhija)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A9A092]">
          <p>© {new Date().getFullYear()} Akshit. Independent Digital Solutions Studio.</p>
          <p>
            All project roles, collaborator attributions, hardware benchmarks, and dataset scopes
            are documented from verified records.
          </p>
        </div>
      </div>
    </footer>
  );
}
