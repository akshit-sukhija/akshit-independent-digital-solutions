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
      ? 'Independent Concept · Award Winner'
      : project.collaborators.toLowerCase().includes('solo')
        ? 'Solo Work'
        : project.slug === 'decoding-customer-value'
          ? 'Collaborative Research & BI Study'
          : 'Collaborative Work';

  if (compact) {
    return (
      <article className="bg-[#131722] border border-[#252C3D] hover:border-[#38BDF8]/70 rounded-xl p-6 transition-colors flex flex-col justify-between gap-6 w-full">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
            {project.recognitionBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-medium">
                <Award className="w-3 h-3" />
                <span>{project.recognitionBadge}</span>
              </span>
            )}
            <span className="text-[#D4AE5C] font-medium">{workNatureLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6D3A7]">{project.category}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8]">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#38BDF8] transition-colors"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#E6D3A7] leading-relaxed">{project.plainSubtitle}</p>

          {/* Genuine Live Screenshot Preview (when available) */}
          {project.screenshotUrl ? (
            <div className="rounded-lg overflow-hidden border border-[#252C3D] bg-[#0B0E14]">
              <img
                src={project.screenshotUrl}
                alt={`${project.title} visual preview`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-44 object-cover object-top"
              />
              {project.screenshotCaption && (
                <p className="px-3 py-2 font-mono text-[11px] text-[#A6A9B8] border-t border-[#252C3D]">
                  {project.screenshotCaption}
                </p>
              )}
            </div>
          ) : (
            <ProjectVisual slug={project.slug} mode="compact" />
          )}

          <div className="space-y-2 text-xs text-[#A6A9B8] pt-1">
            <p className="leading-relaxed">
              <strong className="text-[#F4F0E8] font-medium">Problem: </strong>
              {project.problemSummary}
            </p>
            <p className="leading-relaxed">
              <strong className="text-[#E6D3A7] font-medium">Outcome: </strong>
              {project.resultSummary}
            </p>
          </div>

          {/* Expandable Methodology & Proof Details */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#38BDF8] cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>
                {inspectOpen
                  ? 'Hide Contribution, Methodology & Stack'
                  : 'View Contribution, Methodology & Stack'}
              </span>
              {inspectOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {inspectOpen && (
              <div className="mt-3 bg-[#0B0E14] border border-[#252C3D] rounded-lg p-4 space-y-2.5 text-xs">
                <p className="text-[#F4F0E8] leading-relaxed">
                  <strong className="text-[#38BDF8] font-mono font-normal">My Contribution: </strong>
                  {project.documentedRole} ({project.collaborators})
                </p>
                {project.specialCredit && (
                  <p className="font-mono text-xs text-[#D4AE5C]">{project.specialCredit}</p>
                )}
                <p className="text-[#A6A9B8] leading-relaxed">
                  <strong className="text-[#D4AE5C] font-mono font-normal">Methodology: </strong>
                  {project.approachSummary}
                </p>
                <p className="font-mono text-[#E6D3A7]">
                  Focus / Stack: {project.verifiedStack.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#252C3D]">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38BDF8] hover:text-[#F4F0E8] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#7AD992] hover:underline whitespace-nowrap shrink-0"
              >
                <span>Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.drivePdfUrl && (
              <a
                href={project.drivePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#D4AE5C] hover:underline whitespace-nowrap shrink-0"
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
                className="inline-flex items-center gap-1 text-[#E6D3A7] hover:underline whitespace-nowrap shrink-0"
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
    <article className="bg-[#131722] border border-[#252C3D] hover:border-[#38BDF8]/70 rounded-2xl p-6 md:p-8 transition-colors space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Overview, Problem, Methodology & Outcomes */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
            {project.recognitionBadge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>{project.recognitionBadge}</span>
              </span>
            )}
            <span className="text-[#D4AE5C] font-medium">{workNatureLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6D3A7]">Role: {project.documentedRole}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[#F4F0E8] leading-tight">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#38BDF8] transition-colors"
            >
              {project.title}
            </Link>
          </h3>

          <p className="text-base sm:text-lg text-[#E6D3A7] leading-relaxed">
            {project.plainSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="bg-[#0B0E14] border border-[#252C3D] rounded-lg p-4 space-y-1.5">
              <p className="font-mono text-xs text-[#38BDF8]">The Challenge</p>
              <p className="text-sm text-[#F4F0E8] leading-relaxed">{project.problemSummary}</p>
            </div>
            <div className="bg-[#0B0E14] border border-[#252C3D] rounded-lg p-4 space-y-1.5">
              <p className="font-mono text-xs text-[#7AD992]">What Was Delivered &amp; Outcome</p>
              <p className="text-sm text-[#F4F0E8] leading-relaxed">{project.resultSummary}</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#A6A9B8]">
            <span className="text-[#E6D3A7]">Capabilities &amp; Stack:</span>
            <span>{project.verifiedStack.join(' · ')}</span>
          </div>
        </div>

        {/* Right Column: Genuine Visual / Screenshot + Contribution & Proof Links */}
        <div className="lg:col-span-5 bg-[#0B0E14] border border-[#252C3D] rounded-xl p-5 space-y-4">
          {project.screenshotUrl && (
            <div className="rounded-lg overflow-hidden border border-[#252C3D] bg-[#131722]">
              <img
                src={project.screenshotUrl}
                alt={`${project.title} visual showcase`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-52 object-cover object-top"
              />
              {project.screenshotCaption && (
                <p className="px-3 py-2 font-mono text-[11px] text-[#A6A9B8] border-t border-[#252C3D]">
                  {project.screenshotCaption}
                </p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-[#252C3D] pb-2.5">
              <span className="font-mono text-xs text-[#38BDF8]">My Contribution &amp; Attribution</span>
              <span className="font-mono text-xs text-[#E6D3A7]">{workNatureLabel}</span>
            </div>
            <p className="text-xs text-[#F4F0E8] leading-relaxed">
              <strong className="text-[#E6D3A7] font-normal">{project.documentedRole}</strong> —{' '}
              {project.collaborators}.
            </p>
            {project.specialCredit && (
              <p className="font-mono text-xs text-[#D4AE5C] bg-[#131722] border border-[#D4AE5C]/40 rounded px-2.5 py-1.5 inline-block">
                {project.specialCredit}
              </p>
            )}
            <p className="text-xs text-[#A6A9B8] leading-relaxed">
              <strong className="text-[#F4F0E8] font-normal">Methodology: </strong>
              {project.approachSummary}
            </p>
          </div>

          {/* Expandable Technical Notes */}
          <div className="pt-2 border-t border-[#252C3D]">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 font-mono text-xs text-[#E6D3A7] hover:text-[#38BDF8] cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#38BDF8]" />
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
              <div className="mt-3 bg-[#131722] border border-[#252C3D] rounded-lg p-4 space-y-2.5 text-xs">
                <ul className="space-y-1.5 text-[#A6A9B8]">
                  {project.plainFeatures.map((f) => (
                    <li key={f.technical} className="leading-relaxed">
                      • {f.technical}
                    </li>
                  ))}
                </ul>
                {project.drivePdfPlaceholder && (
                  <p className="font-mono text-[11px] text-[#E6D3A7] pt-2 border-t border-[#252C3D] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#D4AE5C] shrink-0" />
                    <span>{project.drivePdfPlaceholder}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#252C3D] flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0B0E14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap shrink-0"
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
                  className="inline-flex items-center gap-1 text-[#7AD992] hover:underline whitespace-nowrap shrink-0"
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
                  className="inline-flex items-center gap-1 text-[#D4AE5C] hover:underline whitespace-nowrap shrink-0"
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
                  className="inline-flex items-center gap-1 text-[#E6D3A7] hover:underline whitespace-nowrap shrink-0"
                >
                  <span>GitHub Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bespoke Project Visual Architecture & Preview */}
      <ProjectVisual slug={project.slug} mode="compact" />
    </article>
  );
}
