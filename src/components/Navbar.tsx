import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/work', label: 'Work', end: false },
  { to: '/solutions', label: 'Solutions', end: false },
  { to: '/insights', label: 'Insights', end: false },
  { to: '/enquire', label: 'Contact', end: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#0E0F14]/95 backdrop-blur-md border-b border-[#2C2F42]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        {/* Zone 1: Brand Identity */}
        <Link
          to="/"
          className="group flex flex-col shrink-0"
        >
          <span className="font-mono text-xs md:text-sm font-medium tracking-[0.14em] text-[#F4F0E8] group-hover:text-[#D4AE5C] transition-colors">
            {PROFILE_CONFIG.name}
          </span>
          <span className="text-[11px] text-[#A6A9B8] tracking-wide">
            {PROFILE_CONFIG.roleSubtitle}
          </span>
        </Link>

        {/* Zone 2: Clean 6-item primary navigation: Home · About · Work · Solutions · Insights · Contact */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A6A9B8]"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `py-1 transition-colors whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'text-[#F4F0E8] border-[#D4AE5C]'
                    : 'text-[#A6A9B8] border-transparent hover:text-[#F4F0E8] hover:border-[#2C2F42]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Direct Project Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/enquire"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Start a Conversation
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#F4F0E8] border border-[#2C2F42] rounded-lg hover:border-[#D4AE5C] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#161822] border-b border-[#2C2F42] px-6 py-5"
        >
          <div className="flex flex-col space-y-2.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `py-2 text-base font-medium border-b border-[#2C2F42]/60 ${
                    isActive ? 'text-[#D4AE5C]' : 'text-[#F4F0E8]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/enquire"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
