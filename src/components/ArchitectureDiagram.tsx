import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import type { ArchitectureNode } from '../data/studioData';
import {
  CAPABILITY_PILLARS,
  ENGAGEMENT_STEPS,
  PROBLEM_CATEGORIES,
  TIMELINE_OPTIONS,
} from '../data/studioData';
import {
  AVAILABLE_INFO_OPTIONS,
  DESIRED_OUTCOME_OPTIONS,
  estimateProjectScope,
} from '../utils/studioLogic';

/**
 * 1. Hero & Capability Visual Diagram:
 * Shows in plain English how a messy problem becomes a working solution,
 * and how the three capabilities (AI Automation, Data Insights, Custom Tools) connect.
 */
export function IntersectionBlueprintDiagram() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showTechNote, setShowTechNote] = useState<boolean>(false);
  const activePillar = CAPABILITY_PILLARS[activeIndex];

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#3A3429]">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            Visual Guide · How Your Problem Becomes a Solution
          </p>
          <h3 className="font-display text-2xl text-[#F2EBDD] mt-1">
            Messy Input → Smart Rules & Analysis → Useful Result
          </h3>
        </div>
        <span className="font-mono text-xs text-[#A9A092]">
          Click any box below to explore
        </span>
      </div>

      {/* Plain-English 3-Step Visual Flow Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-[#A9A092]">
            <span>Step 1 · What You Have</span>
            <FileText className="w-3.5 h-3.5 text-[#C9A24B]" />
          </div>
          <p className="text-xs font-semibold text-[#F2EBDD]">
            Messy Spreadsheets, PDFs or Manual Work
          </p>
          <p className="text-[11px] text-[#A9A092] leading-relaxed">
            Sales sheets, long notices, or tool files that take hours to check.
          </p>
        </div>

        <div className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-[#C9A24B]">
            <span>Step 2 · What I Build</span>
            <Sliders className="w-3.5 h-3.5 text-[#C9A24B]" />
          </div>
          <p className="text-xs font-semibold text-[#F2EBDD]">
            Data Cleaning, Fixed Rules & AI
          </p>
          <p className="text-[11px] text-[#A9A092] leading-relaxed">
            AI organises text while fixed computer rules check dates and numbers.
          </p>
        </div>

        <div className="bg-[#11100E] border border-[#3A3429] rounded p-3.5 space-y-1">
          <div className="flex items-center justify-between text-xs font-mono text-[#8FBF7A]">
            <span>Step 3 · What You Get</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8FBF7A]" />
          </div>
          <p className="text-xs font-semibold text-[#F2EBDD]">
            Clear Dashboard, Calendar or Web Tool
          </p>
          <p className="text-[11px] text-[#A9A092] leading-relaxed">
            Ready-to-use answers, PDF reports, or a working tool for your team.
          </p>
        </div>
      </div>

      {/* SVG Connected Capability Diagram */}
      <div className="my-2">
        <svg
          viewBox="0 0 680 185"
          className="w-full h-auto"
          role="img"
          aria-label="Diagram showing three connected services: AI Automation, Business Data Insights, and Custom Digital Tools"
        >
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3A3429" />
              <stop offset="50%" stopColor="#C9A24B" />
              <stop offset="100%" stopColor="#3A3429" />
            </linearGradient>
          </defs>

          <line
            x1="125"
            y1="92"
            x2="555"
            y2="92"
            stroke="url(#goldLine)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <motion.circle
            cx={activeIndex === 0 ? 125 : activeIndex === 1 ? 340 : 555}
            cy="92"
            r="60"
            fill="none"
            stroke="#C9A24B"
            strokeWidth="1.25"
            strokeOpacity="0.45"
            animate={{
              cx: activeIndex === 0 ? 125 : activeIndex === 1 ? 340 : 555,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Node 1 */}
          <g onClick={() => setActiveIndex(0)} className="cursor-pointer">
            <rect
              x="25"
              y="40"
              width="200"
              height="104"
              rx="6"
              fill={activeIndex === 0 ? '#232019' : '#11100E'}
              stroke={activeIndex === 0 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 0 ? '1.75' : '1'}
            />
            <text x="42" y="65" fill="#C9A24B" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              01 · AI AUTOMATION
            </text>
            <text
              x="42"
              y="90"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              Read Docs & Check Rules
            </text>
            <text x="42" y="110" fill="#A9A092" fontFamily="Instrument Sans, sans-serif" fontSize="11">
              Pull dates & spot clashes
            </text>
            <text x="42" y="128" fill="#E8D5A8" fontFamily="IBM Plex Mono, monospace" fontSize="10">
              Proof: Notice Decoder
            </text>
          </g>

          {/* Node 2 */}
          <g onClick={() => setActiveIndex(1)} className="cursor-pointer">
            <rect
              x="240"
              y="40"
              width="200"
              height="104"
              rx="6"
              fill={activeIndex === 1 ? '#232019' : '#11100E'}
              stroke={activeIndex === 1 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 1 ? '1.75' : '1'}
            />
            <text x="257" y="65" fill="#C9A24B" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              02 · DATA & INSIGHTS
            </text>
            <text
              x="257"
              y="90"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              Clean Sales & Customer Data
            </text>
            <text x="257" y="110" fill="#A9A092" fontFamily="Instrument Sans, sans-serif" fontSize="11">
              Dashboards & retention guides
            </text>
            <text x="257" y="128" fill="#E8D5A8" fontFamily="IBM Plex Mono, monospace" fontSize="10">
              Proof: 3,900-Record Study
            </text>
          </g>

          {/* Node 3 */}
          <g onClick={() => setActiveIndex(2)} className="cursor-pointer">
            <rect
              x="455"
              y="40"
              width="200"
              height="104"
              rx="6"
              fill={activeIndex === 2 ? '#232019' : '#11100E'}
              stroke={activeIndex === 2 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 2 ? '1.75' : '1'}
            />
            <text x="472" y="65" fill="#C9A24B" fontFamily="IBM Plex Mono, monospace" fontSize="11">
              03 · CUSTOM TOOLS
            </text>
            <text
              x="472"
              y="90"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              Build Working Web Tools
            </text>
            <text x="472" y="110" fill="#A9A092" fontFamily="Instrument Sans, sans-serif" fontSize="11">
              Web apps & 1-click PDF reports
            </text>
            <text x="472" y="128" fill="#E8D5A8" fontFamily="IBM Plex Mono, monospace" fontSize="10">
              Proof: SentinelX · Lureline
            </text>
          </g>
        </svg>
      </div>

      {/* Plain-English Explanation + Expandable Technical Note */}
      <div className="bg-[#11100E] border border-[#3A3429] rounded p-5 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-mono text-xs text-[#E8D5A8]">
              {activePillar.number}. {activePillar.title}
            </p>
            <p className="text-sm text-[#F2EBDD] leading-relaxed">{activePillar.shortSummary}</p>
            <p className="text-xs text-[#A9A092]">
              Benefit: <span className="text-[#E8D5A8]">{activePillar.outcomeFocus}</span>
            </p>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
          >
            <span>See How This Helps You</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="pt-2 border-t border-[#3A3429]/60">
          <button
            type="button"
            onClick={() => setShowTechNote((prev) => !prev)}
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#A9A092] hover:text-[#F2EBDD] cursor-pointer"
          >
            {showTechNote ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            <span>{showTechNote ? 'Hide technical details' : 'Show technical details (for developers)'}</span>
          </button>
          {showTechNote && (
            <p className="font-mono text-xs text-[#E8D5A8]/90 mt-2 bg-[#1A1814] border border-[#3A3429] rounded p-3 leading-relaxed">
              Technical stack: {activePillar.technicalNote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Diagram: How AI, Fixed Rules, and Human Checks Work Together
 */
export function AiRulesHumanDiagram() {
  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            Visual Principle · Why My Automations Are Reliable
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
            How AI, Fixed Rules, and Human Checks Work Together
          </h3>
        </div>
        <p className="text-xs text-[#A9A092] max-w-sm">
          AI never guesses your calendar math, financial totals, or company policies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#A9A092]">
            <span>Step 01 · Input</span>
            <span>→</span>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#F2EBDD]">Raw PDFs, Notices or Spreadsheets</p>
            <p className="text-xs text-[#A9A092] leading-relaxed">
              Your messy documents, circulars, contracts, or tool exports enter the workflow.
            </p>
          </div>
        </div>

        <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#C9A24B]">
            <span>Step 02 · AI Reading</span>
            <span>→</span>
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#F2EBDD]">AI Organises Unstructured Text</p>
            <p className="text-xs text-[#A9A092] leading-relaxed">
              AI reads long paragraphs to summarise topics, tasks, and plain-English explanations.
            </p>
          </div>
        </div>

        <div className="bg-[#232019] border border-[#C9A24B] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#C9A24B]">
            <span>Step 03 · Fixed Rules</span>
            <ShieldCheck className="w-4 h-4 text-[#C9A24B]" />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#F2EBDD]">Fixed Code Checks Dates & Rules</p>
            <p className="text-xs text-[#F2EBDD]/90 leading-relaxed">
              Exact computer rules check date overlaps, remove duplicates, and verify compliance.
            </p>
          </div>
        </div>

        <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 flex flex-col justify-between gap-3">
          <div className="flex items-center justify-between font-mono text-xs text-[#8FBF7A]">
            <span>Step 04 · Human Control</span>
            <CheckCircle2 className="w-4 h-4 text-[#8FBF7A]" />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-[#F2EBDD]">You Review the Clear Result</p>
            <p className="text-xs text-[#A9A092] leading-relaxed">
              Your team gets a clean schedule, dashboard, or PDF report with full traceability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Visual Diagram: The 5-Step Working Process
 */
export function FiveStepProcessDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const current = ENGAGEMENT_STEPS[activeStep];

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3A3429] pb-4">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            Five-Step Working Journey · Simple & Transparent
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
            How We Work Together From First Chat to Final Handover
          </h3>
        </div>
        <span className="font-mono text-xs text-[#A9A092]">
          Click any step to see details
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {ENGAGEMENT_STEPS.map((item, idx) => {
          const isSelected = idx === activeStep;
          return (
            <button
              key={item.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-lg border transition-colors flex flex-col justify-between gap-3 cursor-pointer ${
                isSelected
                  ? 'bg-[#232019] border-[#C9A24B]'
                  : 'bg-[#11100E] border-[#3A3429] hover:border-[#A9A092]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs text-[#C9A24B]">Step {item.step}</span>
                {idx < 4 && <span className="font-mono text-xs text-[#A9A092]">→</span>}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#F2EBDD] leading-snug">{item.title}</p>
                <p className="font-mono text-[11px] text-[#E8D5A8]/80">{item.shortLabel}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-[#11100E] border border-[#3A3429] rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="font-mono text-xs text-[#C9A24B]">
            Step {current.step} · {current.title}
          </p>
          <p className="text-sm text-[#F2EBDD] leading-relaxed">{current.description}</p>
        </div>
        <Link
          to="/enquire"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
        >
          <span>Start Step 01</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

/**
 * 4. Project Pipeline Flowchart (Plain-English by default + Expandable Technical Layer)
 */
interface ProjectPipelineDiagramProps {
  projectTitle: string;
  plainHowItWorksSummary: string;
  architectureSummary: string;
  nodes: ArchitectureNode[];
}

export function ProjectPipelineDiagram({
  projectTitle,
  plainHowItWorksSummary,
  architectureSummary,
  nodes,
}: ProjectPipelineDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id ?? '');
  const [showTechnicalFlow, setShowTechnicalFlow] = useState<boolean>(false);
  const activeNode = nodes.find((n) => n.id === selectedNodeId) ?? nodes[0];

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#3A3429]">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            Visual Walkthrough · How {projectTitle} Works
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-[#F2EBDD] mt-1">
            From Raw Input to Final Result
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setShowTechnicalFlow((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#E8D5A8] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors cursor-pointer shrink-0"
        >
          <Layers className="w-3.5 h-3.5 text-[#C9A24B]" />
          <span>{showTechnicalFlow ? 'Switch to Simple View' : 'Show Technical Architecture'}</span>
        </button>
      </div>

      {/* Plain-English Summary */}
      <p className="text-sm sm:text-base text-[#F2EBDD] leading-relaxed">
        {plainHowItWorksSummary}
      </p>

      {/* Connected Flowchart Nodes */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          nodes.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
        } gap-4 pt-1`}
      >
        {nodes.map((node, index) => {
          const isSelected = node.id === activeNode?.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              className={`text-left p-5 rounded-lg border transition-colors flex flex-col justify-between gap-3 cursor-pointer ${
                isSelected
                  ? 'bg-[#232019] border-[#C9A24B]'
                  : 'bg-[#11100E] border-[#3A3429] hover:border-[#A9A092]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs text-[#C9A24B]">
                  Step 0{index + 1}
                </span>
                {index < nodes.length - 1 && (
                  <span className="font-mono text-xs text-[#A9A092]">→</span>
                )}
              </div>
              <div className="space-y-1.5">
                <p className="text-base font-semibold text-[#F2EBDD]">
                  {node.plainTitle}
                </p>
                <p className="text-xs text-[#A9A092] leading-relaxed">
                  {node.plainDescription}
                </p>
                {showTechnicalFlow && (
                  <p className="font-mono text-[11px] text-[#E8D5A8] pt-2 border-t border-[#3A3429]/70">
                    Tech: {node.sublabel}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Bar */}
      {activeNode && (
        <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div>
            <span className="font-mono text-[#C9A24B] mr-2">Selected Step:</span>
            <span className="text-[#F2EBDD] font-medium">{activeNode.plainTitle}</span>
            <span className="text-[#A9A092] ml-2">— {activeNode.plainDescription}</span>
          </div>
          <span className="font-mono text-[#E8D5A8] shrink-0">
            {activeNode.sublabel}
          </span>
        </div>
      )}

      {showTechnicalFlow && (
        <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-1.5">
          <p className="font-mono text-xs text-[#C9A24B]">
            Technical Architecture Summary (For Developers & Reviewers)
          </p>
          <p className="text-xs text-[#A9A092] leading-relaxed">{architectureSummary}</p>
        </div>
      )}
    </div>
  );
}

/**
 * 5. Genuine 4-Step Project Scope Estimator
 * Helps visitors describe their problem, available info, desired outcome, and timeline
 * without inventing prices or guaranteeing delivery dates.
 */
export function ProjectScopeEstimator() {
  const [problemCategory, setProblemCategory] = useState<string>(PROBLEM_CATEGORIES[0]);
  const [availableInformation, setAvailableInformation] = useState<string>(
    AVAILABLE_INFO_OPTIONS[0]
  );
  const [desiredOutcomeType, setDesiredOutcomeType] = useState<string>(
    DESIRED_OUTCOME_OPTIONS[0]
  );
  const [timelinePreference, setTimelinePreference] = useState<string>(TIMELINE_OPTIONS[1]);

  const estimate = estimateProjectScope({
    problemCategory,
    availableInformation,
    desiredOutcomeType,
    timelinePreference,
  });

  const enquireQuery = new URLSearchParams({
    problem: problemCategory,
    material: availableInformation,
    outcome: desiredOutcomeType,
    timeline: timelinePreference,
  }).toString();

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#3A3429] pb-5">
        <div className="space-y-1">
          <p className="font-mono text-xs text-[#C9A24B]">
            Interactive 4-Step Project Scope Estimator
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-[#F2EBDD]">
            Find the Right Solution Scope for Your Problem
          </h2>
          <p className="text-sm text-[#A9A092]">
            Answer four simple questions in plain English to see what kind of deliverable fits best.
          </p>
        </div>
        <span className="font-mono text-xs text-[#E8D5A8]">
          No jargon · No fake instant prices
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 4 Steps Inputs */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <label
              htmlFor="estimator-step-1"
              className="block font-mono text-xs text-[#C9A24B] mb-2"
            >
              Step 01 · What problem are you trying to solve?
            </label>
            <select
              id="estimator-step-1"
              value={problemCategory}
              onChange={(e) => setProblemCategory(e.target.value)}
              className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
            >
              {PROBLEM_CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="estimator-step-2"
              className="block font-mono text-xs text-[#C9A24B] mb-2"
            >
              Step 02 · What information or material do you already have?
            </label>
            <select
              id="estimator-step-2"
              value={availableInformation}
              onChange={(e) => setAvailableInformation(e.target.value)}
              className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
            >
              {AVAILABLE_INFO_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="estimator-step-3"
              className="block font-mono text-xs text-[#C9A24B] mb-2"
            >
              Step 03 · What result would be most useful to you?
            </label>
            <select
              id="estimator-step-3"
              value={desiredOutcomeType}
              onChange={(e) => setDesiredOutcomeType(e.target.value)}
              className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
            >
              {DESIRED_OUTCOME_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="estimator-step-4"
              className="block font-mono text-xs text-[#C9A24B] mb-2"
            >
              Step 04 · What is your preferred timeline window?
            </label>
            <select
              id="estimator-step-4"
              value={timelinePreference}
              onChange={(e) => setTimelinePreference(e.target.value)}
              className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
            >
              {TIMELINE_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Recommended Scope Output */}
        <div className="lg:col-span-6 bg-[#11100E] border border-[#C9A24B]/70 rounded-lg p-6 space-y-5">
          <div className="space-y-1.5 border-b border-[#3A3429] pb-4">
            <p className="font-mono text-xs text-[#C9A24B]">Recommended Direction</p>
            <h3 className="font-display text-3xl text-[#F2EBDD]">{estimate.scopeTitle}</h3>
            <p className="text-sm text-[#E8D5A8]">{estimate.recommendedService.plainTagline}</p>
          </div>

          <p className="text-sm text-[#F2EBDD]/90 leading-relaxed">
            {estimate.plainExplanation}
          </p>

          <div className="space-y-2">
            <p className="font-mono text-xs text-[#C9A24B]">Typical Deliverables for This Scope:</p>
            <ul className="space-y-1.5 text-xs text-[#F2EBDD]">
              {estimate.suggestedStartingDeliverables.map((del) => (
                <li key={del} className="flex items-start gap-2">
                  <span className="font-mono text-[#C9A24B]">—</span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1A1814] border border-[#3A3429] rounded p-3.5 text-xs text-[#E8D5A8] leading-relaxed">
            {estimate.pilotRecommendation}
          </div>

          <p className="text-[11px] text-[#A9A092] leading-relaxed border-t border-[#3A3429] pt-3">
            {estimate.scopeDisclaimer}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="text-xs font-mono text-[#A9A092]">
              Similar proof:{' '}
              {estimate.matchingProjects.map((p, i) => (
                <span key={p.slug}>
                  {i > 0 && ' · '}
                  <Link to={`/work/${p.slug}`} className="text-[#E8D5A8] hover:underline">
                    {p.title}
                  </Link>
                </span>
              ))}
            </div>

            <Link
              to={`/enquire?${enquireQuery}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors whitespace-nowrap shrink-0"
            >
              <span>Carry This Scope to Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
