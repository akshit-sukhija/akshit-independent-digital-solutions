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

interface ProjectCardProps {
  project: ProjectData;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const [inspectOpen, setInspectOpen] = useState(false);

  if (compact) {
    return (
      <article className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B]/70 rounded-lg p-6 transition-colors flex flex-col justify-between gap-6 w-full">
        <div className="space-y-3.5">
          {/* Unboxed metadata (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
            <span className="text-[#C9A24B]">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.evidenceTypeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.documentedRole}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#E8D5A8] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#E8D5A8] leading-relaxed">{project.plainSubtitle}</p>
          <p className="text-sm text-[#A9A092] leading-relaxed">{project.problemSummary}</p>

          {/* Compact Visual Flow Strip */}
          <div className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 space-y-2">
            <p className="font-mono text-[11px] text-[#C9A24B]">How It Works:</p>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#F2EBDD]">
              {project.architectureNodes.map((node, i) => (
                <span key={node.id} className="inline-flex items-center gap-1.5">
                  <span>{node.plainTitle}</span>
                  {i < project.architectureNodes.length - 1 && (
                    <span className="font-mono text-[#C9A24B]">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Evidence & Technical Inspector */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#C9A24B]" />
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
              <div className="mt-3 bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2.5 text-xs">
                <p className="text-[#F2EBDD]">
                  <strong className="text-[#C9A24B] font-mono font-normal">Evidence Source: </strong>
                  {project.evidenceNote}
                </p>
                <p className="text-[#A9A092]">
                  <strong className="text-[#E8D5A8] font-mono font-normal">Attribution: </strong>
                  {project.attributionNote}
                </p>
                <p className="font-mono text-[#E8D5A8]">
                  Tools: {project.verifiedStack.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#3A3429]">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View Full Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-4 text-xs font-mono">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#8FBF7A] hover:underline whitespace-nowrap shrink-0"
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
                className="inline-flex items-center gap-1 text-[#E8D5A8] hover:underline whitespace-nowrap shrink-0"
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
    <article className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B]/80 rounded-lg p-6 md:p-8 transition-colors space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Plain-English Story (Problem -> What It Does -> Result) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
            <span className="text-[#C9A24B] font-medium">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E8D5A8]">{project.evidenceTypeLabel}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[#F2EBDD] leading-tight">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#E8D5A8] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-base sm:text-lg text-[#E8D5A8] leading-relaxed">
            {project.plainSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1">
              <p className="font-mono text-xs text-[#A9A092]">The Problem</p>
              <p className="text-sm text-[#F2EBDD] leading-relaxed">{project.problemSummary}</p>
            </div>
            <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1">
              <p className="font-mono text-xs text-[#C9A24B]">What I Built & Result</p>
              <p className="text-sm text-[#F2EBDD] leading-relaxed">{project.solutionSummary}</p>
            </div>
          </div>

          {/* Mini Visual Flowchart Strip on Card */}
          <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#C9A24B]">
                Visual Flow · Input to Result
              </span>
              <span className="font-mono text-[11px] text-[#A9A092]">
                {project.architectureNodes.length} steps
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {project.architectureNodes.map((node, idx) => (
                <div
                  key={node.id}
                  className="bg-[#1A1814] border border-[#3A3429]/80 rounded p-2.5 space-y-0.5"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#C9A24B]">
                    <span>0{idx + 1}</span>
                    {idx < project.architectureNodes.length - 1 && <span>→</span>}
                  </div>
                  <p className="text-xs font-medium text-[#F2EBDD]">{node.plainTitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Plain-English Benefits + Evidence Inspector */}
        <div className="lg:col-span-5 bg-[#11100E] border border-[#3A3429] rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#3A3429] pb-3">
            <span className="font-mono text-xs text-[#C9A24B]">Key Benefits (In Plain English)</span>
            <span className="font-mono text-xs text-[#A9A092]">
              Role: {project.documentedRole}
            </span>
          </div>

          <ul className="space-y-2.5 text-xs text-[#F2EBDD]/95">
            {project.plainFeatures.map((feat) => (
              <li key={feat.plain} className="flex items-start gap-2.5 leading-relaxed">
                <span className="font-mono text-[#C9A24B] select-none">—</span>
                <span>{feat.plain}</span>
              </li>
            ))}
          </ul>

          {/* Expandable Evidence & Technical Inspector */}
          <div className="pt-2 border-t border-[#3A3429]">
            <button
              type="button"
              onClick={() => setInspectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1.5 font-mono text-xs text-[#E8D5A8] hover:text-[#C9A24B] cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#C9A24B]" />
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
              <div className="mt-3 bg-[#1A1814] border border-[#3A3429] rounded p-4 space-y-3 text-xs">
                <div>
                  <p className="font-mono text-[11px] text-[#C9A24B]">
                    Verified Source Evidence:
                  </p>
                  <p className="text-[#F2EBDD] mt-0.5 leading-relaxed">{project.evidenceNote}</p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-[#C9A24B]">
                    Role & Co-Creator Attribution:
                  </p>
                  <p className="text-[#A9A092] mt-0.5 leading-relaxed">
                    {project.attributionNote}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-[#C9A24B]">
                    How It Works Under the Hood (Technical Details):
                  </p>
                  <ul className="space-y-1.5 mt-1 text-[#A9A092]">
                    {project.plainFeatures.map((f) => (
                      <li key={f.technical} className="leading-relaxed">
                        • {f.technical}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-mono text-[11px] text-[#E8D5A8] pt-2 border-t border-[#3A3429]">
                  Tools Used: {project.verifiedStack.join(' · ')}
                </p>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#3A3429] flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
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
                  className="inline-flex items-center gap-1 text-[#8FBF7A] hover:underline whitespace-nowrap shrink-0"
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
                  className="inline-flex items-center gap-1 text-[#E8D5A8] hover:underline whitespace-nowrap shrink-0"
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
