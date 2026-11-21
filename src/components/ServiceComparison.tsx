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
export function ServiceComparison(_props: ServiceComparisonProps) {
  return (
    <div
      data-testid="service-comparison"
      className="bento-card p-6 sm:p-8 space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b theme-border pb-5">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider theme-accent">
              Scope Evaluation Guide · Compare Engagement Tiers
            </p>
            <span className="font-hand text-lg theme-accent-secondary">
              — Pick the track that matches your current stage
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl leading-tight theme-text">
            Data Intelligence vs. Product Prototyping
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed theme-text-muted">
            Not sure whether your project starts with a quantitative data study or an interactive
            product build? Compare the two core execution tracks below to evaluate deliverables,
            inputs, and expected scope.
          </p>
        </div>

        <Link
          to="/enquire"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold text-[#F7F0E4] bg-[#6B2635] hover:bg-[#581D2A] transition-colors shrink-0 self-start md:self-auto"
        >
          <span>Scope Your Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Side-by-Side Service Tier Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {SERVICE_COMPARISON_TIERS.map((tier) => {
          const isData = tier.id === 'data-intelligence';
          return (
            <div
              key={tier.id}
              data-testid={`service-tier-${tier.id}`}
              className="bento-card-raised p-6 flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 font-semibold ${
                      isData ? 'theme-accent-secondary' : 'theme-accent'
                    }`}
                  >
                    {isData ? (
                      <BarChart3 className="w-4 h-4 shrink-0" />
                    ) : (
                      <Cpu className="w-4 h-4 shrink-0" />
                    )}
                    <span>{tier.tierCode}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] theme-text-muted">
                    <Clock className="w-3 h-3" />
                    <span>{tier.typicalTimeline}</span>
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display text-2xl leading-snug theme-text">{tier.title}</h4>
                  <p className="text-xs sm:text-sm leading-relaxed theme-text-muted">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Ideal For & Expected Scope */}
                <div className="theme-surface rounded-2xl border theme-border p-4 space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-[11px] font-semibold block theme-accent">
                      Best Suited For:
                    </span>
                    <p className="mt-0.5 leading-relaxed theme-text">{tier.idealFor}</p>
                  </div>
                  <div className="pt-2 border-t theme-border">
                    <span className="font-mono text-[11px] font-semibold block theme-accent-secondary">
                      Expected Scope Progression:
                    </span>
                    <p className="mt-0.5 leading-relaxed theme-text">{tier.expectedScope}</p>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2">
                  <p className="font-mono text-xs font-semibold flex items-center gap-1.5 theme-text">
                    <Layers className="w-3.5 h-3.5 theme-accent" />
                    <span>What Is Delivered</span>
                  </p>
                  <ul className="space-y-1.5 text-xs theme-text">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 theme-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Verified Studio Proof */}
              <div className="pt-4 border-t theme-border space-y-3 text-xs">
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] theme-text-muted">
                  <Database className="w-3.5 h-3.5" />
                  <span className="font-semibold theme-text">Stack:</span>
                  <span>{tier.stackAndTools.join(' · ')}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {tier.verifiedProof.map((proof) => (
                      <Link
                        key={proof.slug}
                        to={`/work/${proof.slug}`}
                        className="font-mono text-[11px] underline underline-offset-2 theme-accent hover:theme-text"
                      >
                        Proof: {proof.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/enquire"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold theme-accent-secondary hover:theme-accent"
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
      <div className="overflow-x-auto rounded-2xl border theme-border">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="theme-surface-raised theme-text font-mono border-b theme-border">
              <th className="py-3.5 px-4 font-semibold">Scope Dimension</th>
              <th className="py-3.5 px-4 font-semibold theme-accent-secondary">
                Tier 01 · Data Intelligence
              </th>
              <th className="py-3.5 px-4 font-semibold theme-accent">
                Tier 02 · Product Prototyping
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {SERVICE_COMPARISON_ROWS.map((row) => (
              <tr key={row.dimension}>
                <th
                  scope="row"
                  className="py-3 px-4 font-mono font-semibold whitespace-nowrap align-top theme-text"
                >
                  {row.dimension}
                </th>
                <td className="py-3 px-4 leading-relaxed align-top theme-text-muted">
                  {row.dataIntelligence}
                </td>
                <td className="py-3 px-4 leading-relaxed align-top theme-text-muted">
                  {row.productPrototyping}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServiceComparison;
