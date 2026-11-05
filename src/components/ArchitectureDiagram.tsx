import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { ArchitectureNode } from '../data/studioData';
import { CAPABILITY_PILLARS } from '../data/studioData';

export function IntersectionBlueprintDiagram() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activePillar = CAPABILITY_PILLARS[activeIndex];

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#3A3429]">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            System Blueprint · Three Intersecting Capabilities
          </p>
          <h3 className="font-display text-2xl text-[#F2EBDD] mt-1">
            Problem Analysis → Structured Logic → Functional Deliverable
          </h3>
        </div>
        <span className="font-mono text-xs text-[#A9A092]">
          Select a node to inspect capability
        </span>
      </div>

      {/* SVG Schematic Diagram */}
      <div className="my-6">
        <svg
          viewBox="0 0 680 220"
          className="w-full h-auto"
          role="img"
          aria-label="Blueprint diagram showing the intersection of AI workflow automation, data analytics, and custom digital tools"
        >
          <defs>
            <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3A3429" />
              <stop offset="50%" stopColor="#C9A24B" />
              <stop offset="100%" stopColor="#3A3429" />
            </linearGradient>
          </defs>

          {/* Connecting Blueprint Lines */}
          <line
            x1="125"
            y1="110"
            x2="555"
            y2="110"
            stroke="url(#goldLine)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <motion.circle
            cx={activeIndex === 0 ? 125 : activeIndex === 1 ? 340 : 555}
            cy="110"
            r="68"
            fill="none"
            stroke="#C9A24B"
            strokeWidth="1.25"
            strokeOpacity="0.45"
            animate={{
              cx: activeIndex === 0 ? 125 : activeIndex === 1 ? 340 : 555,
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Node 1: AI & Workflow Automation */}
          <g
            onClick={() => setActiveIndex(0)}
            className="cursor-pointer"
          >
            <rect
              x="25"
              y="56"
              width="200"
              height="108"
              rx="6"
              fill={activeIndex === 0 ? '#232019' : '#11100E'}
              stroke={activeIndex === 0 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 0 ? '1.75' : '1'}
            />
            <text
              x="42"
              y="82"
              fill="#C9A24B"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              01 · AUTOMATION
            </text>
            <text
              x="42"
              y="107"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              AI & Workflow Logic
            </text>
            <text
              x="42"
              y="129"
              fill="#A9A092"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="11"
            >
              Document parsing & rules
            </text>
            <text
              x="42"
              y="147"
              fill="#E8D5A8"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
            >
              Notice Decoder · Nexus OS
            </text>
          </g>

          {/* Node 2: Data Analytics & BI */}
          <g
            onClick={() => setActiveIndex(1)}
            className="cursor-pointer"
          >
            <rect
              x="240"
              y="56"
              width="200"
              height="108"
              rx="6"
              fill={activeIndex === 1 ? '#232019' : '#11100E'}
              stroke={activeIndex === 1 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 1 ? '1.75' : '1'}
            />
            <text
              x="257"
              y="82"
              fill="#C9A24B"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              02 · INTELLIGENCE
            </text>
            <text
              x="257"
              y="107"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              Data & BI Analysis
            </text>
            <text
              x="257"
              y="129"
              fill="#A9A092"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="11"
            >
              SQL, Python & Power BI
            </text>
            <text
              x="257"
              y="147"
              fill="#E8D5A8"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
            >
              3,900-Record Study · OTT
            </text>
          </g>

          {/* Node 3: Custom Digital Tools */}
          <g
            onClick={() => setActiveIndex(2)}
            className="cursor-pointer"
          >
            <rect
              x="455"
              y="56"
              width="200"
              height="108"
              rx="6"
              fill={activeIndex === 2 ? '#232019' : '#11100E'}
              stroke={activeIndex === 2 ? '#C9A24B' : '#3A3429'}
              strokeWidth={activeIndex === 2 ? '1.75' : '1'}
            />
            <text
              x="472"
              y="82"
              fill="#C9A24B"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="11"
            >
              03 · SYSTEMS
            </text>
            <text
              x="472"
              y="107"
              fill="#F2EBDD"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              Custom Digital Tools
            </text>
            <text
              x="472"
              y="129"
              fill="#A9A092"
              fontFamily="Instrument Sans, sans-serif"
              fontSize="11"
            >
              Web prototypes & PDF engines
            </text>
            <text
              x="472"
              y="147"
              fill="#E8D5A8"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10"
            >
              SentinelX · Lureline
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Segmented Buttons for Keyboard & Touch Accessibility */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pb-4">
        {[
          { idx: 0, shortLabel: '01. AI & Automation' },
          { idx: 1, shortLabel: '02. Data & BI' },
          { idx: 2, shortLabel: '03. Custom Tools' },
        ].map(({ idx, shortLabel }) => (
          <button
            key={shortLabel}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={`px-3 py-2 text-xs font-mono rounded transition-colors text-center whitespace-nowrap shrink-0 cursor-pointer ${
              activeIndex === idx
                ? 'bg-[#C9A24B] text-[#11100E] font-medium'
                : 'bg-[#11100E] text-[#A9A092] border border-[#3A3429] hover:text-[#F2EBDD]'
            }`}
          >
            {shortLabel}
          </button>
        ))}
      </div>

      {/* Active Capability Inspection Panel */}
      <div className="bg-[#11100E] border border-[#3A3429] rounded p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <p className="font-mono text-xs text-[#E8D5A8]">
            {activePillar.number}. {activePillar.title}
          </p>
          <p className="text-sm text-[#F2EBDD] leading-relaxed">{activePillar.shortSummary}</p>
          <p className="text-xs text-[#A9A092]">
            Business outcome: <span className="text-[#E8D5A8]">{activePillar.outcomeFocus}</span>
          </p>
        </div>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#C9A24B] hover:text-[#E8D5A8] whitespace-nowrap shrink-0"
        >
          <span>View Service Scope</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

interface ProjectPipelineDiagramProps {
  projectTitle: string;
  architectureSummary: string;
  nodes: ArchitectureNode[];
}

export function ProjectPipelineDiagram({
  projectTitle,
  architectureSummary,
  nodes,
}: ProjectPipelineDiagramProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id ?? '');
  const activeNode = nodes.find((n) => n.id === selectedNodeId) ?? nodes[0];

  return (
    <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8 bg-blueprint-grid space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#3A3429]">
        <div>
          <p className="font-mono text-xs text-[#C9A24B]">
            System Architecture & Data Flow Blueprint
          </p>
          <h3 className="font-display text-2xl text-[#F2EBDD] mt-1">
            {projectTitle} — Pipeline Topology
          </h3>
        </div>
        <p className="font-mono text-xs text-[#A9A092]">
          {nodes.length} verified pipeline stages
        </p>
      </div>

      <p className="text-sm text-[#A9A092] leading-relaxed">{architectureSummary}</p>

      {/* Interactive Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {nodes.map((node, index) => {
          const isSelected = node.id === activeNode?.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setSelectedNodeId(node.id)}
              className={`text-left p-4 rounded border transition-colors flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-[#232019] border-[#C9A24B]'
                  : 'bg-[#11100E] border-[#3A3429] hover:border-[#A9A092]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-xs text-[#C9A24B]">
                  Stage 0{index + 1} · {node.layer}
                </span>
                <span className="font-mono text-xs text-[#A9A092]">→</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F2EBDD]">{node.label}</p>
                <p className="text-xs text-[#A9A092] mt-1 leading-relaxed">{node.sublabel}</p>
              </div>
            </button>
          );
        })}
      </div>

      {activeNode && (
        <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[#E8D5A8]">
            Inspected Stage: {activeNode.label} ({activeNode.layer} layer)
          </span>
          <span className="text-[#A9A092]">{activeNode.sublabel}</span>
        </div>
      )}
    </div>
  );
}
