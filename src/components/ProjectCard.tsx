import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileCheck2,
} from 'lucide-react';
import type { ProjectData } from '../data/studioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectData;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const [inspectOpen, setInspectOpen] = useState(false);

  if (compact) {
    return (
      <article className="bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF]/70 rounded-xl p-6 transition-colors flex flex-col justify-between gap-6 w-full">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
            <span className="text-[#8B75FF] font-medium">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6D3A7]">{project.evidenceTypeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.documentedRole}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8]">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#8B75FF] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#E6D3A7] leading-relaxed">{project.plainSubtitle}</p>
          <p className="text-sm text-[#A6A9B8] leading-relaxed">{project.problemSummary}</p>

          {/* Bespoke Project Visual Preview */}
          <ProjectVisual slug={project.slug} mode="compact" />

          {/* Expandable Evidence & Technical Inspector */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#8B75FF] cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#8B75FF]" />
              <span>
                {inspectOpen
                  ? 'Hide Evidence & Technical Details'
                  : 'Inspect Source Evidence & Technical Stack'}
              </span>
              {inspectOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {inspectOpen && (
              <div className="mt-3 bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-4 space-y-2.5 text-xs">
                <p className="text-[#F4F0E8]">
                  <strong className="text-[#8B75FF] font-mono font-normal">Evidence Source: </strong>
                  {project.evidenceNote}
                </p>
                <p className="text-[#A6A9B8]">
                  <strong className="text-[#E6D3A7] font-mono font-normal">Attribution: </strong>
                  {project.attributionNote}
                </p>
                <p className="font-mono text-[#E6D3A7]">
                  Tools: {project.verifiedStack.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#2C2F42]">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D4AE5C] hover:text-[#8B75FF] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
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
      </article>
    );
  }

  return (
    <article className="bg-[#161822] border border-[#2C2F42] hover:border-[#8B75FF]/70 rounded-2xl p-6 md:p-8 transition-colors space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Plain-English Story (Problem -> What It Does -> Result) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A6A9B8]">
            <span className="text-[#8B75FF] font-medium">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6D3A7]">{project.evidenceTypeLabel}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[#F4F0E8] leading-tight">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#8B75FF] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-base sm:text-lg text-[#E6D3A7] leading-relaxed">
            {project.plainSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-4 space-y-1">
              <p className="font-mono text-xs text-[#A6A9B8]">The Problem</p>
              <p className="text-sm text-[#F4F0E8] leading-relaxed">{project.problemSummary}</p>
            </div>
            <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-lg p-4 space-y-1">
              <p className="font-mono text-xs text-[#8B75FF]">What I Built &amp; Result</p>
              <p className="text-sm text-[#F4F0E8] leading-relaxed">{project.solutionSummary}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Plain-English Benefits + Evidence Inspector */}
        <div className="lg:col-span-5 bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#2C2F42] pb-3">
            <span className="font-mono text-xs text-[#8B75FF]">Key Benefits (Plain English)</span>
            <span className="font-mono text-xs text-[#E6D3A7]">
              Role: {project.documentedRole}
            </span>
          </div>

          <ul className="space-y-2.5 text-xs text-[#F4F0E8]/95">
            {project.plainFeatures.map((feat) => (
              <li key={feat.plain} className="flex items-start gap-2.5 leading-relaxed">
                <span className="font-mono text-[#8B75FF] select-none">—</span>
                <span>{feat.plain}</span>
              </li>
            ))}
          </ul>

          {/* Expandable Evidence & Technical Inspector */}
          <div className="pt-2 border-t border-[#2C2F42]">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1.5 font-mono text-xs text-[#E6D3A7] hover:text-[#8B75FF] cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#8B75FF]" />
                <span>
                  {inspectOpen
                    ? 'Hide Evidence Inspector & Technical Details'
                    : 'Inspect Source Evidence & Technical Details'}
                </span>
              </span>
              {inspectOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {inspectOpen && (
              <div className="mt-3 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 space-y-3 text-xs">
                <div>
                  <p className="font-mono text-[11px] text-[#8B75FF]">
                    Verified Source Evidence:
                  </p>
                  <p className="text-[#F4F0E8] mt-0.5 leading-relaxed">{project.evidenceNote}</p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-[#D4AE5C]">
                    Role &amp; Co-Creator Attribution:
                  </p>
                  <p className="text-[#A6A9B8] mt-0.5 leading-relaxed">
                    {project.attributionNote}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-[#8B75FF]">
                    Technical Implementation (Under the Hood):
                  </p>
                  <ul className="space-y-1.5 mt-1 text-[#A6A9B8]">
                    {project.plainFeatures.map((f) => (
                      <li key={f.technical} className="leading-relaxed">
                        • {f.technical}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-mono text-[11px] text-[#E6D3A7] pt-2 border-t border-[#2C2F42]">
                  Tools Used: {project.verifiedStack.join(' · ')}
                </p>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#2C2F42] flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-4 text-xs font-mono">
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
