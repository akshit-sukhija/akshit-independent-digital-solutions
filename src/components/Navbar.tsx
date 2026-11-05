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
    <header className="sticky top-0 z-50 bg-[#11100E]/95 backdrop-blur-md border-b border-[#3A3429]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          className="font-display text-2xl tracking-tight text-[#F2EBDD] hover:text-[#E8D5A8] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B]"
        >
          Akshit
        </Link>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A9A092]"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `py-1 transition-colors whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'text-[#F2EBDD] border-[#C9A24B]'
                    : 'text-[#A9A092] border-transparent hover:text-[#F2EBDD] hover:border-[#3A3429]'
                } focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B]`
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
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A24B]"
          >
            Discuss a Project
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[#F2EBDD] border border-[#3A3429] rounded hover:border-[#C9A24B] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A24B]"
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
          className="md:hidden bg-[#1A1814] border-b border-[#3A3429] px-6 py-5"
        >
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 text-base font-medium border-b border-[#3A3429]/60 ${
                  isActive ? 'text-[#C9A24B]' : 'text-[#F2EBDD]'
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
                  `py-2 text-base font-medium border-b border-[#3A3429]/60 ${
                    isActive ? 'text-[#C9A24B]' : 'text-[#F2EBDD]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/enquire"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors"
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
