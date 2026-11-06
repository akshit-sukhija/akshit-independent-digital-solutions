import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  FileCheck2,
  FileSpreadsheet,
  FileText,
  Filter,
  GitCompare,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

interface ProjectVisualProps {
  slug: string;
  mode?: 'compact' | 'full';
}

/**
 * Reusable ProjectVisual component (Section 6B):
 * Gives each of the 5 prioritised projects its own bespoke, meaningful
 * architecture illustration and application/output preview.
 * Explains what happens in simple English first, with optional expandable technical depth.
 */
export function ProjectVisual({ slug, mode = 'full' }: ProjectVisualProps) {
  const [showTech, setShowTech] = useState(false);

  if (slug === 'notice-decoder') {
    return (
      <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
            <span className="font-mono text-xs text-[#E6D3A7]">
              Notice Decoder · Live Application & Rule Architecture
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#8B75FF]">
            AI Text Structuring + Fixed Overlap Math
          </span>
        </div>

        {/* Bespoke Connected Architecture SVG + Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Stage 1: Unstructured Notice Input */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#A6A9B8]">01 · STARTING INPUT</span>
              <FileText className="w-4 h-4 text-[#D4AE5C]" />
            </div>
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-[#F4F0E8]">
                Messy PDF Circular or Notice Text
              </p>
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5 font-mono text-[11px] text-[#A6A9B8] space-y-1">
                <p className="text-[#E6D3A7]">&quot;REVISED EXAMINATION &amp; LAB NOTICE&quot;</p>
                <p>Practical Viva shifted to 14 Nov, 2:00 PM – 3:30 PM in Lab 3...</p>
              </div>
            </div>
            <p className="text-[11px] text-[#A6A9B8]">
              Important dates are buried inside long paragraphs.
            </p>
          </div>

          {/* Stage 2: Hybrid AI + Fixed Rule Processing */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8B75FF]">02 · HYBRID ENGINE</span>
              <GitCompare className="w-4 h-4 text-[#8B75FF]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5 space-y-1">
                <p className="text-xs font-medium text-[#F4F0E8]">AI Summarises Context</p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Groups title, department, and action items.
                </p>
              </div>
              <div className="bg-[#0E0F14] border border-[#8B75FF]/40 rounded p-2.5 space-y-1">
                <p className="text-xs font-medium text-[#E6D3A7]">
                  Fixed Rules Check Clashes &amp; Revisions
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Automatically finds overlapping schedules and highlights changed dates.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3: Highlighted Output Preview */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#7AD992]">03 · VERIFIED OUTPUT</span>
              <Calendar className="w-4 h-4 text-[#7AD992]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#E08A1E]/50 rounded p-2.5 flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-[#E08A1E] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-medium text-[#F4F0E8]">
                    Clash Detected: 14 Nov, 14:00–15:30
                  </p>
                  <p className="text-[10px] text-[#A6A9B8]">
                    Overlaps with Data Structures Seminar
                  </p>
                </div>
              </div>
              <div className="bg-[#0E0F14] border border-[#7AD992]/40 rounded p-2.5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#7AD992]">
                  schedule-export.ics
                </span>
                <span className="text-[10px] font-mono text-[#E6D3A7] px-2 py-0.5 bg-[#161822] rounded">
                  1-Click Calendar Add
                </span>
              </div>
            </div>
            <p className="text-[11px] text-[#A6A9B8]">
              Ready for Google, Apple, or Outlook Calendar.
            </p>
          </div>
        </div>

        {mode === 'full' && (
          <div className="pt-2 border-t border-[#2C2F42]">
            <button
              type="button"
              onClick={() => setShowTech((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B75FF] hover:text-[#E6D3A7] cursor-pointer"
            >
              {showTech ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>
                {showTech
                  ? 'Hide technical implementation details'
                  : 'Show technical implementation details (for developers)'}
              </span>
            </button>
            {showTech && (
              <div className="mt-3 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 font-mono text-xs text-[#A6A9B8] space-y-1.5">
                <p className="text-[#F4F0E8]">
                  • Semantic extraction: Qwen2.5-7B-Instruct via Featherless API on an Express backend.
                </p>
                <p>
                  • Deterministic collision check: compares event intervals using fixed rule{' '}
                  <span className="text-[#E6D3A7]">(StartA &lt; EndB) &amp;&amp; (StartB &lt; EndA)</span>.
                </p>
                <p>
                  • Notice Change Radar: field-level diffing against prior stored notice versions.
                </p>
                <p>
                  • Calendar serialization: RFC 5545-compliant iCalendar (.ics) file generator.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slug === 'sentinelx') {
    return (
      <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B75FF]" />
            <span className="font-mono text-xs text-[#E6D3A7]">
              SentinelX · Multi-Tool Ingestion &amp; Automated PDF Pipeline
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#8B75FF]">
            SHA-256 Integrity + 5-Level Normalization
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Stage 1 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#A6A9B8]">01 · RAW TOOL FILES</span>
              <Database className="w-4 h-4 text-[#D4AE5C]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5 font-mono text-[11px] text-[#A6A9B8]">
                <p className="text-[#F4F0E8]">nmap-scan-output.xml</p>
                <p className="text-[#E6D3A7] mt-1">owasp-zap-alerts.csv</p>
              </div>
              <p className="text-[11px] text-[#A6A9B8]">
                Different security tools use different file formats and risk labels.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8B75FF]">02 · VERIFY &amp; MERGE</span>
              <ShieldCheck className="w-4 h-4 text-[#8B75FF]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5">
                <p className="text-xs font-medium text-[#F4F0E8]">
                  Digital Fingerprint (SHA-256)
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Proves the uploaded files were never altered.
                </p>
              </div>
              <div className="bg-[#0E0F14] border border-[#8B75FF]/40 rounded p-2.5">
                <p className="text-xs font-medium text-[#E6D3A7]">
                  Remove Duplicates &amp; Standardise Risk
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Maps every finding into one clear 5-level scale (Critical → Info).
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#7AD992]">03 · DASHBOARD &amp; PDF</span>
              <FileCheck2 className="w-4 h-4 text-[#7AD992]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#F4F0E8] font-medium">Unified Priority View</span>
                  <span className="font-mono text-[#7AD992]">Deduplicated</span>
                </div>
                <div className="grid grid-cols-5 gap-1 pt-1">
                  <span className="h-2 rounded bg-[#E08A1E]" title="Critical" />
                  <span className="h-2 rounded bg-[#D4AE5C]" title="High" />
                  <span className="h-2 rounded bg-[#8B75FF]" title="Medium" />
                  <span className="h-2 rounded bg-[#7AD992]" title="Low" />
                  <span className="h-2 rounded bg-[#2C2F42]" title="Info" />
                </div>
              </div>
              <div className="bg-[#0E0F14] border border-[#7AD992]/40 rounded p-2.5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#7AD992]">
                  Executive-Report.pdf
                </span>
                <span className="text-[10px] font-mono text-[#E6D3A7]">
                  ReportLab Engine
                </span>
              </div>
            </div>
          </div>
        </div>

        {mode === 'full' && (
          <div className="pt-2 border-t border-[#2C2F42]">
            <button
              type="button"
              onClick={() => setShowTech((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B75FF] hover:text-[#E6D3A7] cursor-pointer"
            >
              {showTech ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>
                {showTech
                  ? 'Hide technical implementation details'
                  : 'Show technical implementation details (for developers)'}
              </span>
            </button>
            {showTech && (
              <div className="mt-3 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 font-mono text-xs text-[#A6A9B8] space-y-1.5">
                <p className="text-[#F4F0E8]">
                  • Parallel ingestion: Python (FastAPI) + ThreadPoolExecutor parses Nmap XML and OWASP ZAP XML/CSV concurrently.
                </p>
                <p>
                  • Cryptographic audit trail: SHA-256 digests recorded per raw file prior to normalization.
                </p>
                <p>
                  • Persistence &amp; reporting: SQLite + SQLAlchemy ORM, React 19 + Recharts dashboard, and programmatic ReportLab PDF compilation.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slug === 'decoding-customer-value') {
    return (
      <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AE5C]" />
            <span className="font-mono text-xs text-[#E6D3A7]">
              Decoding Customer Value · 3,900-Record Analytics &amp; Power BI Flow
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#8B75FF]">
            Python + SQL + Power BI Retention Matrix
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Stage 1 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#A6A9B8]">01 · RAW DATASET</span>
              <FileSpreadsheet className="w-4 h-4 text-[#D4AE5C]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5 font-mono text-[11px] text-[#A6A9B8]">
                <p className="text-[#F4F0E8]">3,900 Customer Shopping Rows</p>
                <p className="text-[10px] text-[#E6D3A7] mt-1">
                  Order Spend · Frequency · Promo Code · Subscription
                </p>
              </div>
              <p className="text-[11px] text-[#A6A9B8]">
                Sorting only by total spend hides who is hooked on discounts.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8B75FF]">02 · PYTHON &amp; SQL</span>
              <BarChart3 className="w-4 h-4 text-[#8B75FF]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded p-2.5">
                <p className="text-xs font-medium text-[#F4F0E8]">
                  Clean &amp; Group Buyers in Python
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Checks missing fields and standardises categories in Pandas.
                </p>
              </div>
              <div className="bg-[#0E0F14] border border-[#8B75FF]/40 rounded p-2.5">
                <p className="text-xs font-medium text-[#E6D3A7]">
                  SQL Discount Dependency Check
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Compares order value against how often a coupon was required.
                </p>
              </div>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#7AD992]">03 · ACTION PLAYBOOK</span>
              <CheckCircle2 className="w-4 h-4 text-[#7AD992]" />
            </div>
            <div className="space-y-2">
              <div className="bg-[#0E0F14] border border-[#7AD992]/40 rounded p-2.5">
                <p className="text-xs font-medium text-[#7AD992]">
                  Loyal Full-Price Buyers
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Protect margin: reward with early access, not blanket coupons.
                </p>
              </div>
              <div className="bg-[#0E0F14] border border-[#D4AE5C]/40 rounded p-2.5">
                <p className="text-xs font-medium text-[#E6D3A7]">
                  Discount-Triggered Buyers
                </p>
                <p className="text-[11px] text-[#A6A9B8]">
                  Use targeted bundle thresholds in Power BI dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {mode === 'full' && (
          <div className="pt-2 border-t border-[#2C2F42]">
            <button
              type="button"
              onClick={() => setShowTech((prev) => !prev)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B75FF] hover:text-[#E6D3A7] cursor-pointer"
            >
              {showTech ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              <span>
                {showTech
                  ? 'Hide technical implementation details'
                  : 'Show technical implementation details (for developers)'}
              </span>
            </button>
            {showTech && (
              <div className="mt-3 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 font-mono text-xs text-[#A6A9B8] space-y-1.5">
                <p className="text-[#F4F0E8]">
                  • Data preparation: Python (Pandas, NumPy) across all 3,900 customer shopping records.
                </p>
                <p>
                  • Analytical SQL: cohort queries measuring <span className="text-[#E6D3A7]">AVG(purchase_amount_usd)</span> vs. <span className="text-[#E6D3A7]">discount_dependency_pct</span>.
                </p>
                <p>
                  • Business Intelligence: interactive Power BI (.pbix) dashboard and written Retention Playbook.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slug === 'contract-risk-governance') {
    return (
      <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8B75FF]" />
            <span className="font-mono text-xs text-[#E6D3A7]">
              Contract Risk Governance · Rule-First Compliance &amp; AI Explanation
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#8B75FF]">
            Fixed Rules Decide · AI Explains (~420ms on Ryzen AI)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#A6A9B8]">01 · CLAUSE LOOKUP</span>
              <FileText className="w-4 h-4 text-[#D4AE5C]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              Find Matching Clauses (FAISS)
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Pulls out liability, indemnity, and termination clauses from agreements.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8B75FF]">02 · FIXED RULE CHECK</span>
              <ShieldCheck className="w-4 h-4 text-[#8B75FF]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              Strict Pass / Fail Decision + SHA-256 Lock
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Fixed Python rules decide if the clause meets company policy and lock the result.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#7AD992]">03 · PLAIN SUMMARY</span>
              <Cpu className="w-4 h-4 text-[#7AD992]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              Plain-English Explanation for Reviewers
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Local ONNX / DirectML model writes a clear explanation without changing the rule decision.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'clarity-redemption-ai') {
    return (
      <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
            <span className="font-mono text-xs text-[#E6D3A7]">
              Clarity Redemption AI · Deterministic FIFO &amp; Exit-Load Engine
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#8B75FF]">
            15/15 Unit Tests Passed · Zero AI Calculation Authority
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#A6A9B8]">01 · LOT &amp; SID INPUTS</span>
              <FileSpreadsheet className="w-4 h-4 text-[#D4AE5C]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              Multi-Tranche Lots &amp; Scheme Rules
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Ingests purchase dates, NAVs, STCG/LTCG thresholds, and Scheme Information Document exit-load tiers.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#8B75FF]">02 · DETERMINISTIC FIFO</span>
              <ShieldCheck className="w-4 h-4 text-[#8B75FF]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              100% Rule-Based Tax &amp; Penalty Math
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Calculates exact holding days, exit load, and tax category per lot without relying on LLM math.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#7AD992]">03 · CONSEQUENCE VIEW</span>
              <CheckCircle2 className="w-4 h-4 text-[#7AD992]" />
            </div>
            <p className="text-xs font-semibold text-[#F4F0E8]">
              Net Payout + Wait-Window Nudge
            </p>
            <p className="text-[11px] text-[#A6A9B8]">
              Shows exact net proceeds and whether waiting a few days avoids an exit load or STCG bracket.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default / Lureline
  return (
    <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 md:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2C2F42]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7AD992]" />
          <span className="font-mono text-xs text-[#E6D3A7]">
            Lureline · 6-Node Deception Topology &amp; Alert Triage Workbench
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#8B75FF]">
          Live Vercel Prototype · 4 Ordinary + 2 Decoy Assets · 100% Test Pass
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        <div className="lg:col-span-4 bg-[#161822] border border-[#2C2F42] rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#A6A9B8]">01 · 6-NODE TOPOLOGY</span>
            <Terminal className="w-4 h-4 text-[#D4AE5C]" />
          </div>
          <p className="text-xs font-semibold text-[#F4F0E8]">
            4 Ordinary Assets + 2 Decoy Assets
          </p>
          <p className="text-[11px] text-[#A6A9B8]">
            Models realistic lateral movement and decoy interaction fixtures so reviewers can test the live workbench immediately.
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#161822] border border-[#8B75FF]/50 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#8B75FF]">02 · FAST FILTERING</span>
            <Filter className="w-4 h-4 text-[#8B75FF]" />
          </div>
          <p className="text-xs font-semibold text-[#F4F0E8]">
            Cut Through Alert Noise
          </p>
          <p className="text-[11px] text-[#A6A9B8]">
            Filter events by priority, category, or time window in one click.
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#161822] border border-[#7AD992]/40 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-[#7AD992]">03 · TIMELINE VIEW</span>
            <ArrowRight className="w-4 h-4 text-[#7AD992]" />
          </div>
          <p className="text-xs font-semibold text-[#F4F0E8]">
            Connected Incident Story
          </p>
          <p className="text-[11px] text-[#A6A9B8]">
            Inspect how individual alerts connect across a single visual timeline.
          </p>
        </div>
      </div>
    </div>
  );
}
