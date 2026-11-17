import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Cpu,
  Database,
  Layers,
} from 'lucide-react';
import {
  SERVICE_COMPARISON_ROWS,
  SERVICE_COMPARISON_TIERS,
} from '../utils/studioLogic';

export interface ServiceComparisonProps {
  variant?: 'ivory' | 'dark';
}

/**
 * Visually compares 'Data Intelligence' vs 'Product Prototyping' service tiers
 * side-by-side via structured tier cards and a scope evaluation matrix.
 */
export function ServiceComparison({ variant = 'ivory' }: ServiceComparisonProps) {
  const isIvory = variant === 'ivory';

  return (
    <div
      data-testid="service-comparison"
      className={`rounded-2xl border p-6 sm:p-8 space-y-8 ${
        isIvory
          ? 'bg-white/95 border-[#D4CBB8] text-[#0B0E14] shadow-sm'
          : 'bg-[#131722] border-[#252C3D] text-[#F4F0E8]'
      }`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-5 border-current/15">
        <div className="space-y-2 max-w-2xl">
          <p
            className={`font-mono text-xs font-semibold uppercase tracking-wider ${
              isIvory ? 'text-[#0284C7]' : 'text-[#38BDF8]'
            }`}
          >
            Scope Evaluation Guide · Compare Engagement Tiers
          </p>
          <h3 className="font-display text-2xl sm:text-3xl leading-tight">
            Data Intelligence vs. Product Prototyping
          </h3>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isIvory ? 'text-[#1E202E]/85' : 'text-[#A6A9B8]'
            }`}
          >
            Not sure whether your project starts with a quantitative data study or an interactive
            product build? Compare the two core execution tracks below to evaluate deliverables,
            inputs, and expected scope.
          </p>
        </div>

        <Link
          to="/enquire"
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-medium transition-colors shrink-0 self-start md:self-auto ${
            isIvory
              ? 'bg-[#0B0E14] text-[#F4F0E8] hover:bg-[#1E202E]'
              : 'bg-[#38BDF8] text-[#0B0E14] hover:bg-[#7DD3FC]'
          }`}
        >
          <span>Scope Your Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Side-by-Side Service Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {SERVICE_COMPARISON_TIERS.map((tier) => {
          const isData = tier.id === 'data-intelligence';
          return (
            <div
              key={tier.id}
              data-testid={`service-tier-${tier.id}`}
              className={`rounded-xl border p-6 flex flex-col justify-between gap-6 ${
                isIvory
                  ? 'bg-[#F5F1E8]/75 border-[#D4CBB8]'
                  : 'bg-[#0B0E14] border-[#252C3D]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 font-semibold ${
                      isData
                        ? isIvory
                          ? 'text-[#7A5B14]'
                          : 'text-[#D4AE5C]'
                        : isIvory
                          ? 'text-[#0284C7]'
                          : 'text-[#38BDF8]'
                    }`}
                  >
                    {isData ? (
                      <BarChart3 className="w-4 h-4 shrink-0" />
                    ) : (
                      <Cpu className="w-4 h-4 shrink-0" />
                    )}
                    <span>{tier.tierCode}</span>
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 text-[11px] ${
                      isIvory ? 'text-[#555B6E]' : 'text-[#A6A9B8]'
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    <span>{tier.typicalTimeline}</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display text-2xl leading-snug">{tier.title}</h4>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isIvory ? 'text-[#1E202E]/90' : 'text-[#A6A9B8]'
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                {/* Ideal For & Expected Scope */}
                <div
                  className={`rounded-lg border p-3.5 space-y-2 text-xs ${
                    isIvory
                      ? 'bg-white border-[#D4CBB8]/90'
                      : 'bg-[#131722] border-[#252C3D]'
                  }`}
                >
                  <div>
                    <span
                      className={`font-mono text-[11px] font-semibold block ${
                        isIvory ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                      }`}
                    >
                      Best Suited For:
                    </span>
                    <p className="mt-0.5 leading-relaxed">{tier.idealFor}</p>
                  </div>
                  <div className="pt-2 border-t border-current/10">
                    <span
                      className={`font-mono text-[11px] font-semibold block ${
                        isIvory ? 'text-[#7A5B14]' : 'text-[#D4AE5C]'
                      }`}
                    >
                      Expected Scope Progression:
                    </span>
                    <p className="mt-0.5 leading-relaxed">{tier.expectedScope}</p>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2">
                  <p className="font-mono text-xs font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>What Is Delivered</span>
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isIvory ? 'text-[#0284C7]' : 'text-[#38BDF8]'
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Verified Studio Proof */}
              <div className="pt-4 border-t border-current/15 space-y-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                  <Database className="w-3.5 h-3.5 opacity-75" />
                  <span className="font-semibold">Stack:</span>
                  <span className="opacity-85">{tier.stackAndTools.join(' · ')}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {tier.verifiedProof.map((proof) => (
                      <Link
                        key={proof.slug}
                        to={`/work/${proof.slug}`}
                        className={`font-mono text-[11px] underline underline-offset-2 ${
                          isIvory
                            ? 'text-[#0284C7] hover:text-[#0B0E14]'
                            : 'text-[#38BDF8] hover:text-[#F4F0E8]'
                        }`}
                      >
                        Proof: {proof.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/enquire"
                    className={`inline-flex items-center gap-1 font-mono text-xs font-semibold ${
                      isIvory ? 'text-[#7A5B14] hover:text-[#0284C7]' : 'text-[#D4AE5C] hover:text-[#38BDF8]'
                    }`}
                  >
                    <span>Select Tier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side-by-Side Comparison Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-current/15">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr
              className={
                isIvory
                  ? 'bg-[#0B0E14] text-[#F4F0E8] font-mono'
                  : 'bg-[#0B0E14] text-[#F4F0E8] font-mono border-b border-[#252C3D]'
              }
            >
              <th className="py-3 px-4 font-semibold">Scope Dimension</th>
              <th className="py-3 px-4 font-semibold text-[#D4AE5C]">
                Tier 01 · Data Intelligence
              </th>
              <th className="py-3 px-4 font-semibold text-[#38BDF8]">
                Tier 02 · Product Prototyping
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-current/10">
            {SERVICE_COMPARISON_ROWS.map((row) => (
              <tr key={row.dimension}>
                <th
                  scope="row"
                  className="py-3 px-4 font-mono font-semibold whitespace-nowrap align-top"
                >
                  {row.dimension}
                </th>
                <td className="py-3 px-4 leading-relaxed align-top">{row.dataIntelligence}</td>
                <td className="py-3 px-4 leading-relaxed align-top">{row.productPrototyping}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceComparison;
