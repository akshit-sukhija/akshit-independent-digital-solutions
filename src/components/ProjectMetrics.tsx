import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

export interface MetricDataPoint {
  label: string;
  value: number;
  unit: string;
  context: string;
  color: string;
}

export interface ProjectMetricConfig {
  projectSlug: string;
  title: string;
  subtitle: string;
  datasetScope: string;
  sourceNote: string;
  unitSuffix: string;
  yAxisMax: number;
  data: MetricDataPoint[];
  keyInsight: string;
}

export const VERIFIED_PROJECT_METRICS: Record<string, ProjectMetricConfig> = {
  'decoding-customer-value': {
    projectSlug: 'decoding-customer-value',
    title: 'Customer Segmentation: Promo Dependency vs. Organic Loyalty',
    subtitle:
      'Share of customers across the 3,900-record dataset grouped by promotional discount dependency.',
    datasetScope: 'Evaluated Dataset: N = 3,900 customer transaction records (Python, SQL & Power BI)',
    sourceNote:
      'Source: IITG Decoding Customer Value Case Study (Deliverable-2_SQL_Queries.sql & Deliverable-4_Retention_Playbook.pdf). Bounded strictly to the 3,900-record retail dataset.',
    unitSuffix: '%',
    yAxisMax: 60,
    data: [
      {
        label: 'Discount Survivors',
        value: 43.0,
        unit: '%',
        context: '43.0% of buyers rely heavily on promotional codes and discount triggers',
        color: '#38BDF8',
      },
      {
        label: 'Premium Loyalists',
        value: 36.4,
        unit: '%',
        context: '36.4% of buyers sustain repeat orders at full price without heavy promo dependence',
        color: '#D4AE5C',
      },
      {
        label: 'Moderate / Mixed Buyers',
        value: 20.6,
        unit: '%',
        context: '20.6% of buyers exhibit mixed seasonal and category-specific buying behaviour',
        color: '#64748B',
      },
    ],
    keyInsight:
      '43.0% of the customer base ("Discount Survivors") purchases primarily when discounts are active, whereas 36.4% ("Premium Loyalists") drives full-margin repeat revenue—showing why blanket discounting erodes margin.',
  },
  'ott-viewer-retention-analysis': {
    projectSlug: 'ott-viewer-retention-analysis',
    title: 'Streaming Cohort Drop-Off & Multi-Season Completion Rates',
    subtitle:
      'Episode-level churn comparison and season-over-season completion across 33,171 episodes.',
    datasetScope: 'Evaluated Dataset: N = 33,171 streaming episodes across 100 multi-season series',
    sourceNote:
      'Source: OTT Viewer Retention Capstone Study (2015–2026 cohort analysis). Compares mid-season slump (Episodes 4–8) against late-season drop-off and multi-season completion.',
    unitSuffix: '%',
    yAxisMax: 85,
    data: [
      {
        label: 'Ep 4–8 Drop-Off Spike',
        value: 16.7,
        unit: '%',
        context: 'Peak mid-season audience abandonment occurs between Episodes 4 and 8 (16.7%)',
        color: '#F97316',
      },
      {
        label: 'Late-Season Drop-Off',
        value: 11.8,
        unit: '%',
        context: 'Average episode drop-off stabilises to 11.8% once viewers pass Episode 8',
        color: '#38BDF8',
      },
      {
        label: 'Season 1 Completion',
        value: 72.0,
        unit: '%',
        context: 'Average Season 1 viewer completion rate across analysed series (72.0%)',
        color: '#22C55E',
      },
      {
        label: 'Season 4+ Completion',
        value: 58.0,
        unit: '%',
        context: 'Average completion declines to 58.0% by Season 4 and beyond',
        color: '#D4AE5C',
      },
    ],
    keyInsight:
      'Mid-season pacing between Episodes 4 and 8 accounts for a 16.7% drop-off spike compared to 11.8% later in the season, supporting tighter 6–8 episode season structures.',
  },
};

interface ProjectMetricsProps {
  projectSlug: string;
  compact?: boolean;
}

export function ProjectMetrics({ projectSlug, compact = false }: ProjectMetricsProps) {
  const config = VERIFIED_PROJECT_METRICS[projectSlug];

  // When a project has no suitable quantitative evidence, omit its chart.
  if (!config) {
    return null;
  }

  return (
    <div className="bg-[#131722] border border-[#283044] rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#283044] pb-5">
        <div className="space-y-1.5 max-w-2xl">
          <p className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider">
            Source-Backed Quantitative Evidence
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-[#F4F0E8]">{config.title}</h3>
          <p className="text-xs sm:text-sm text-[#A6A9B8] leading-relaxed">{config.subtitle}</p>
        </div>
        <div className="px-3.5 py-2 rounded-lg bg-[#0B0E14] border border-[#283044] font-mono text-xs text-[#D4AE5C] shrink-0">
          {config.datasetScope}
        </div>
      </div>

      {/* Recharts Bar Visualisation */}
      <div className={compact ? 'h-60 w-full' : 'h-72 w-full'} role="region" aria-label={config.title}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={config.data}
            margin={{ top: 16, right: 20, left: 4, bottom: 8 }}
            barSize={compact ? 40 : 54}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#283044" vertical={false} />
            <XAxis
              dataKey="label"
              stroke="#A6A9B8"
              tick={{ fill: '#F4F0E8', fontSize: 12, fontFamily: 'IBM Plex Mono, monospace' }}
              axisLine={{ stroke: '#283044' }}
              tickLine={false}
            />
            <YAxis
              domain={[0, config.yAxisMax]}
              stroke="#A6A9B8"
              tickFormatter={(val) => `${val}${config.unitSuffix}`}
              tick={{ fill: '#A6A9B8', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
              axisLine={{ stroke: '#283044' }}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: 'rgba(56, 189, 248, 0.08)' }}
              contentStyle={{
                backgroundColor: '#0B0E14',
                borderColor: '#38BDF8',
                borderRadius: '0.75rem',
                color: '#F4F0E8',
                fontSize: '12px',
                fontFamily: 'IBM Plex Mono, monospace',
              }}
              formatter={(value) => {
                const numericVal = typeof value === 'number' ? value.toFixed(1) : String(value ?? '');
                return [`${numericVal}${config.unitSuffix}`, 'Verified Metric'];
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {config.data.map((entry) => (
                <Cell key={entry.label} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        {config.data.slice(0, 3).map((item) => (
          <div
            key={item.label}
            className="bg-[#0B0E14] border border-[#283044] rounded-xl p-4 space-y-1"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-[#A6A9B8]">{item.label}</span>
              <span
                className="font-display text-2xl font-semibold"
                style={{ color: item.color }}
              >
                {item.value.toFixed(1)}
                {item.unit}
              </span>
            </div>
            <p className="text-xs text-[#F4F0E8]/85 leading-relaxed">{item.context}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[#283044] space-y-2 text-xs">
        <p className="text-[#E6D3A7] leading-relaxed">
          <strong className="font-mono text-[#38BDF8] uppercase mr-1.5">Takeaway:</strong>
          {config.keyInsight}
        </p>
        <p className="font-mono text-[11px] text-[#A6A9B8] leading-relaxed">{config.sourceNote}</p>
      </div>
    </div>
  );
}
