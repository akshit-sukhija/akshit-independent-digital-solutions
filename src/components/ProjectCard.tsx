import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ProjectData } from '../data/studioData';

interface ProjectCardProps {
  project: ProjectData;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  if (compact) {
    return (
      <article className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B]/70 rounded-lg p-6 transition-colors flex flex-col justify-between gap-6">
        <div className="space-y-3">
          {/* Clean unboxed metadata with typographic separators (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
            <span className="text-[#C9A24B]">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.documentedRole}</span>
          </div>

          <h3 className="font-display text-2xl text-[#F2EBDD]">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#E8D5A8] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-sm text-[#A9A092] leading-relaxed">{project.problemSummary}</p>
          <p className="text-sm text-[#F2EBDD]/90 leading-relaxed">{project.solutionSummary}</p>

          {/* Verified Stack as quiet inline text */}
          <p className="font-mono text-xs text-[#E8D5A8]/85 pt-1">
            Stack: {project.verifiedStack.join(' · ')}
          </p>

          {/* Mandatory scope/benchmark disclosure */}
          <p className="text-xs text-[#A9A092] pt-2 border-t border-[#3A3429]/60">
            Note: {project.evidenceNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#3A3429]">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Read Technical Breakdown</span>
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
                <span>Live Demo</span>
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
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[#1A1814] border border-[#3A3429] hover:border-[#C9A24B]/80 rounded-lg p-6 md:p-8 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative, Problem, Solution & Verified Role */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#A9A092]">
            <span className="text-[#C9A24B] font-medium">{project.tierLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.projectClassification}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[#F2EBDD] leading-tight">
            <Link
              to={`/work/${project.slug}`}
              className="hover:text-[#E8D5A8] transition-colors"
            >
              {project.indexNumber}. {project.title}
            </Link>
          </h3>

          <p className="text-base text-[#E8D5A8] font-medium">{project.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#11100E] border border-[#3A3429] rounded p-4">
              <p className="font-mono text-xs text-[#A9A092] mb-1">Business & Operational Problem</p>
              <p className="text-sm text-[#F2EBDD] leading-relaxed">{project.problemSummary}</p>
            </div>
            <div className="bg-[#11100E] border border-[#3A3429] rounded p-4">
              <p className="font-mono text-xs text-[#C9A24B] mb-1">Delivered Solution</p>
              <p className="text-sm text-[#F2EBDD] leading-relaxed">{project.solutionSummary}</p>
            </div>
          </div>

          {/* Documented Role & Collaborator Attribution */}
          <div className="pt-2 text-xs text-[#A9A092] space-y-1">
            <p>
              <span className="text-[#F2EBDD] font-medium">Documented Role:</span>{' '}
              {project.documentedRole} ({project.collaborators})
            </p>
            <p className="font-mono text-[#E8D5A8]/85">
              Verified Stack: {project.verifiedStack.join(' · ')}
            </p>
          </div>
        </div>

        {/* Right Column: Verified Elements Blueprint & Action Links */}
        <div className="lg:col-span-5 bg-[#11100E] border border-[#3A3429] rounded-lg p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#3A3429] pb-3">
            <span className="font-mono text-xs text-[#C9A24B]">Verified System Elements</span>
            <span className="font-mono text-xs text-[#A9A092]">
              {project.verifiedElements.length} documented items
            </span>
          </div>

          <ul className="space-y-2 text-xs text-[#F2EBDD]/90">
            {project.verifiedElements.slice(0, 6).map((item) => (
              <li key={item} className="flex items-start gap-2 leading-relaxed">
                <span className="font-mono text-[#C9A24B] select-none">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-[#A9A092] pt-2 border-t border-[#3A3429]">
            {project.evidenceNote}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>Inspect Case Study</span>
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
                  <span>Live Deployment</span>
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
                  <span>GitHub</span>
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
