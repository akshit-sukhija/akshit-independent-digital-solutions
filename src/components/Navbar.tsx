import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/process', label: 'Process' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#0E0F14]/95 backdrop-blur-md border-b border-[#2C2F42]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-[#F4F0E8] hover:text-[#8B75FF] transition-colors whitespace-nowrap shrink-0"
        >
          Akshit
        </Link>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A6A9B8]"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-1 transition-colors whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'text-[#F4F0E8] border-[#8B75FF]'
                    : 'text-[#A6A9B8] border-transparent hover:text-[#F4F0E8] hover:border-[#2C2F42]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/enquire"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Discuss a Project
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#F4F0E8] border border-[#2C2F42] rounded-lg hover:border-[#8B75FF] transition-colors"
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
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 text-base font-medium border-b border-[#2C2F42]/60 ${
                  isActive ? 'text-[#8B75FF]' : 'text-[#F4F0E8]'
                }`
              }
            >
              Home
            </NavLink>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-base font-medium border-b border-[#2C2F42]/60 ${
                    isActive ? 'text-[#8B75FF]' : 'text-[#F4F0E8]'
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
                Discuss a Project
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
