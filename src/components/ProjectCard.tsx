import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Award,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  FileText,
} from 'lucide-react';
import type { ProjectData } from '../data/studioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectData;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const [inspectOpen, setInspectOpen] = useState(false);

  const workNatureLabel =
    project.slug === 'reframe'
      ? 'Collaborative Concept · 1st Place Winner'
      : project.collaborators.toLowerCase().includes('solo')
        ? 'Solo Work · Live System'
        : project.slug === 'decoding-customer-value'
          ? 'Collaborative Research · BI & SQL'
          : 'Collaborative Engineering · Live System';

  const statusLabel =
    project.slug === 'reframe'
      ? 'Competition Concept (Unbuilt Hardware)'
      : project.liveDemoUrl
        ? 'Live Deployed Web Application'
        : 'Verified Data & BI Study';

  if (compact) {
    return (
      <article className="polaroid-frame flex flex-col justify-between gap-5 w-full">
        <div className="space-y-4">
          {/* Polaroid Visual Header */}
          {project.screenshotUrl ? (
            <Link
              to={`/work/${project.slug}`}
              className="block rounded-[20px] overflow-hidden border theme-border theme-bg group"
            >
              <img
                src={project.screenshotUrl}
                alt={`${project.title} visual preview`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          ) : (
            <ProjectVisual slug={project.slug} mode="compact" />
          )}

          {/* Editorial Stamp & Role Line */}
          <div className="px-1.5 space-y-2.5">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] theme-text-muted">
              {project.recognitionBadge && (
                <>
                  <span className="inline-flex items-center gap-1 theme-accent font-semibold">
                    <Award className="w-3.5 h-3.5 theme-accent-secondary" />
                    <span>{project.recognitionBadge}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <span className="theme-accent-secondary font-medium">{workNatureLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{statusLabel}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl theme-text leading-tight">
              <Link
                to={`/work/${project.slug}`}
                className="hover:theme-accent transition-colors"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-sm theme-text-muted leading-relaxed">{project.plainSubtitle}</p>

            <div className="pt-1 text-xs theme-text-muted space-y-1">
              <p>
                <strong className="theme-text font-semibold">Role: </strong>
                {project.documentedRole}
              </p>
              <p>
                <strong className="theme-text font-semibold">Outcome: </strong>
                {project.resultSummary}
              </p>
            </div>
          </div>
        </div>

        <div className="px-1.5 pt-3 border-t theme-border flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Read Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 theme-accent font-semibold hover:underline whitespace-nowrap shrink-0"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 theme-text-muted hover:theme-text whitespace-nowrap shrink-0"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bento-card-interactive p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Editorial Story, Role, Problem & Outcome */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs theme-text-muted">
            {project.recognitionBadge && (
              <>
                <span className="inline-flex items-center gap-1.5 theme-accent font-semibold">
                  <Award className="w-3.5 h-3.5 theme-accent-secondary" />
                  <span>{project.recognitionBadge}</span>
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="theme-accent-secondary font-semibold">{workNatureLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="theme-text font-medium">{statusLabel}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl theme-text leading-tight">
            <Link
              to={`/work/${project.slug}`}
              className="hover:theme-accent transition-colors"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-base sm:text-lg theme-text-muted leading-relaxed">
            {project.plainSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="bento-card-raised p-4 space-y-1.5">
              <p className="font-mono text-xs theme-accent font-semibold">The Brief &amp; Problem</p>
              <p className="text-sm theme-text leading-relaxed">{project.problemSummary}</p>
            </div>
            <div className="bento-card-raised p-4 space-y-1.5">
              <p className="font-mono text-xs theme-accent-secondary font-semibold">
                What Was Delivered &amp; Outcome
              </p>
              <p className="text-sm theme-text leading-relaxed">{project.resultSummary}</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs theme-text-muted">
            <span className="theme-text font-semibold">Capabilities &amp; Stack:</span>
            <span>{project.verifiedStack.join(' · ')}</span>
          </div>
        </div>

        {/* Right Column: Polaroid-Framed Screenshot + Role & Attribution + Actions */}
        <div className="lg:col-span-5 bento-card-raised p-5 space-y-4">
          {project.screenshotUrl ? (
            <Link
              to={`/work/${project.slug}`}
              className="block rounded-[20px] overflow-hidden border theme-border theme-surface group"
            >
              <img
                src={project.screenshotUrl}
                alt={`${project.title} visual showcase`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-52 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {project.screenshotCaption && (
                <p className="px-3.5 py-2 font-mono text-[11px] theme-text-muted border-t theme-border">
                  {project.screenshotCaption}
                </p>
              )}
            </Link>
          ) : (
            <ProjectVisual slug={project.slug} mode="compact" />
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between border-b theme-border pb-2">
              <span className="font-mono text-xs theme-accent font-semibold">
                Role &amp; Attribution
              </span>
              <span className="font-mono text-xs theme-accent-secondary">{workNatureLabel}</span>
            </div>
            <p className="text-xs theme-text leading-relaxed">
              <strong className="font-semibold">{project.documentedRole}</strong> —{' '}
              {project.collaborators}.
            </p>
            {project.specialCredit && (
              <p className="font-mono text-xs theme-accent-secondary font-medium">
                {project.specialCredit}
              </p>
            )}
            <p className="text-xs theme-text-muted leading-relaxed">
              <strong className="theme-text font-semibold">Methodology: </strong>
              {project.approachSummary}
            </p>
          </div>

          {/* Expandable Architecture Notes */}
          <div className="pt-2 border-t theme-border">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 font-mono text-xs theme-text hover:theme-accent cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 theme-accent" />
                <span>
                  {inspectOpen
                    ? 'Hide Implementation & Architecture Notes'
                    : 'Inspect Architecture & Proof Details'}
                </span>
              </span>
              {inspectOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {inspectOpen && (
              <div className="mt-3 theme-surface border theme-border rounded-2xl p-4 space-y-2.5 text-xs">
                <ul className="space-y-1.5 theme-text-muted">
                  {project.plainFeatures.map((f) => (
                    <li key={f.technical} className="leading-relaxed">
                      • {f.technical}
                    </li>
                  ))}
                </ul>
                {project.drivePdfPlaceholder && (
                  <p className="font-mono text-[11px] theme-accent-secondary pt-2 border-t theme-border flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.drivePdfPlaceholder}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="pt-2 border-t theme-border flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] rounded-full transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 theme-accent font-semibold hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Open Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.drivePdfUrl && (
                <a
                  href={project.drivePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 theme-accent-secondary hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Presentation PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 theme-text-muted hover:theme-text whitespace-nowrap shrink-0"
                >
                  <span>GitHub Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
