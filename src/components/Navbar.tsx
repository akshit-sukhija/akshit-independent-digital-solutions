import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/solutions', label: 'Services', end: false },
  { to: '/work', label: 'Work', end: false },
  { to: '/process', label: 'Process', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/insights', label: 'Insights', end: false },
  { to: '/enquire', label: 'Contact', end: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isLight = theme === 'light';

  return (
    <header className="sticky top-0 z-50 theme-bg/95 backdrop-blur-md border-b theme-border transition-colors duration-200">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        {/* Zone 1: Brand Identity */}
        <Link
          to="/"
          className="font-mono text-xs md:text-sm font-semibold tracking-[0.12em] theme-text hover:theme-accent transition-colors whitespace-nowrap shrink-0"
        >
          {PROFILE_CONFIG.name}
        </Link>

        {/* Zone 2: Clean 7-item primary navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium theme-text-muted"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `py-1 transition-colors whitespace-nowrap shrink-0 border-b ${
                  isActive
                    ? 'theme-text border-[var(--accent)] font-semibold'
                    : 'theme-text-muted border-transparent hover:theme-text'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Theme Toggle + Direct Project Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isLight}
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono theme-text theme-surface border theme-border rounded-lg hover:border-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            {isLight ? (
              <>
                <Moon className="w-3.5 h-3.5 text-[#0369A1]" />
                <span className="hidden sm:inline">Dark</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[#D4AE5C]" />
                <span className="hidden sm:inline">Light</span>
              </>
            )}
          </button>

          <Link
            to="/enquire"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 theme-text border theme-border rounded-lg hover:border-[var(--accent)] transition-colors cursor-pointer"
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
          className="md:hidden theme-surface border-b theme-border px-6 py-5"
        >
          <div className="flex flex-col space-y-2.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `py-2 text-base font-medium border-b theme-border ${
                    isActive ? 'theme-accent font-semibold' : 'theme-text'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isLight}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono theme-text theme-bg border theme-border rounded-lg cursor-pointer"
              >
                {isLight ? (
                  <>
                    <Moon className="w-4 h-4 text-[#0369A1]" />
                    <span>Switch to Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-[#D4AE5C]" />
                    <span>Switch to Light Theme</span>
                  </>
                )}
              </button>
              <Link
                to="/enquire"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
