import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Compass,
  FolderGit2,
  Home,
  Mail,
  Moon,
  MoreHorizontal,
  Sparkles,
  Sun,
  User,
  X,
} from 'lucide-react';
import { PROFILE_CONFIG } from '../data/studioData';
import { useTheme } from '../context/ThemeContext';

const DESKTOP_NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work', end: false },
  { to: '/solutions', label: 'Services', end: false },
  { to: '/process', label: 'Process', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/insights', label: 'Insights', end: false },
  { to: '/enquire', label: 'Contact', end: false },
];

const MOBILE_DOCK_LINKS = [
  { to: '/', label: 'Home', end: true, icon: Home },
  { to: '/work', label: 'Work', end: false, icon: FolderGit2 },
  { to: '/solutions', label: 'Services', end: false, icon: Briefcase },
  { to: '/about', label: 'About', end: false, icon: User },
  { to: '/enquire', label: 'Contact', end: false, icon: Mail },
];

export function Navbar() {
  const [moreSheetOpen, setMoreSheetOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMoreSheetOpen(false);
  }, [pathname]);

  const isLight = theme === 'light';
  const isMoreRouteActive = pathname.startsWith('/process') || pathname.startsWith('/insights');

  return (
    <>
      {/* Top Sticky Editorial Bar: Compact Identity + Desktop Pill Navigation + Theme & CTA */}
      <header className="sticky top-0 z-50 px-4 sm:px-6 pt-3 pb-2.5 transition-colors duration-200 bg-[var(--bg)]/88 backdrop-blur-md border-b theme-border">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark + Studio Signature */}
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 theme-text hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-full bg-[#6B2635] text-[#F7F0E4] font-display text-sm font-semibold inline-flex items-center justify-center shadow-sm">
              AS
            </span>
            <span className="font-display text-base sm:text-lg font-semibold tracking-tight theme-text">
              Akshit Sukhija
            </span>
            <span className="font-script text-base sm:text-lg theme-accent hidden xl:inline">
              Studio
            </span>
          </Link>

          {/* Zone 2: Desktop Wine/Charcoal Pill Navigation with Active Cream/Ivory Pill */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#241C1B] dark:bg-[#211D1E] border border-[#433839] shadow-sm"
          >
            {DESKTOP_NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#F7F0E4] text-[#241C1B] font-semibold shadow-xs'
                      : 'text-[#F4EDE3]/80 hover:text-[#F7F0E4]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Theme Toggle + Mobile Secondary Sheet Trigger + Desktop Contact Pill */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              data-testid="theme-toggle"
              onClick={toggleTheme}
              aria-pressed={isLight}
              aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono theme-text theme-surface border theme-border rounded-full hover:border-[var(--accent)] transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#6B2635]" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#D9B873]" />
                  <span className="hidden sm:inline">Light</span>
                </>
              )}
            </button>

            <Link
              to="/enquire"
              className="hidden lg:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors whitespace-nowrap shrink-0 min-h-[40px] shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D9B873]" />
            </Link>

            {/* Mobile More Button for Process & Insights */}
            <button
              type="button"
              data-testid="more-sheet-toggle"
              onClick={() => setMoreSheetOpen((prev) => !prev)}
              aria-expanded={moreSheetOpen}
              aria-controls="mobile-more-sheet"
              aria-label={
                moreSheetOpen
                  ? 'Close Process and Insights menu'
                  : 'Open Process and Insights menu'
              }
              className={`md:hidden inline-flex items-center gap-1 px-3 py-2 text-xs font-mono rounded-full border transition-colors cursor-pointer min-h-[40px] ${
                moreSheetOpen || isMoreRouteActive
                  ? 'bg-[#6B2635] text-[#F7F0E4] border-[#6B2635]'
                  : 'theme-surface theme-text theme-border'
              }`}
            >
              {moreSheetOpen ? (
                <>
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <MoreHorizontal className="w-3.5 h-3.5" />
                  <span>More</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Secondary Sheet for Process & Insights */}
        {moreSheetOpen && (
          <div
            id="mobile-more-sheet"
            role="region"
            aria-label="Secondary Studio Pages"
            className="md:hidden mt-3 bento-card p-4 space-y-3"
          >
            <div className="flex items-center justify-between border-b theme-border pb-2">
              <span className="font-mono text-[11px] theme-text-muted uppercase tracking-wider">
                More Studio Chapters
              </span>
              <span className="font-hand text-base theme-accent">
                Process, research &amp; direct links
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <NavLink
                to="/process"
                className={({ isActive }) =>
                  `flex items-center gap-2.5 p-3 rounded-2xl border text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#6B2635] text-[#F7F0E4] border-[#6B2635]'
                      : 'theme-surface-raised theme-text theme-border'
                  }`
                }
              >
                <Compass className="w-4 h-4 shrink-0" />
                <div>
                  <span className="block">Process</span>
                  <span className="font-mono text-[10px] opacity-80 block">
                    Discover → Deliver
                  </span>
                </div>
              </NavLink>

              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  `flex items-center gap-2.5 p-3 rounded-2xl border text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#6B2635] text-[#F7F0E4] border-[#6B2635]'
                      : 'theme-surface-raised theme-text theme-border'
                  }`
                }
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <div>
                  <span className="block">Insights</span>
                  <span className="font-mono text-[10px] opacity-80 block">
                    Research &amp; Notes
                  </span>
                </div>
              </NavLink>
            </div>

            <div className="pt-2 border-t theme-border flex items-center justify-between gap-2 text-xs">
              <Link
                to="/work/reframe"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] theme-accent font-medium"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>RE:FRAME (1st Place · ZERO² 2026)</span>
              </Link>
              <a
                href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                className="font-mono text-[11px] theme-text-muted underline"
              >
                Email Studio
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed 5-Item Bottom Dock (Home, Work, Services, About, Contact) */}
      <nav
        aria-label="Mobile Bottom Dock Navigation"
        data-testid="mobile-bottom-dock"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-1.5 pointer-events-none"
      >
        <div className="max-w-md mx-auto pointer-events-auto rounded-full bg-[#241C1B]/95 dark:bg-[#211D1E]/95 backdrop-blur-md border border-[#433839] p-1.5 shadow-xl grid grid-cols-5 gap-1">
          {MOBILE_DOCK_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1.5 px-1 rounded-full text-[11px] font-medium transition-colors min-h-[44px] ${
                    isActive
                      ? 'bg-[#F7F0E4] text-[#241C1B] font-semibold shadow-xs'
                      : 'text-[#F4EDE3]/80 hover:text-[#F7F0E4]'
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5 mb-0.5 shrink-0" />
                <span className="leading-none truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}
