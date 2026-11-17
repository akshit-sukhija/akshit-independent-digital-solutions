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
import { useTheme } from '../context/ThemeContext';

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
    title: 'Streaming Cohort Drop-Off: Mid-Season (Ep 4–8) vs. Early-Season (Ep 1–3)',
    subtitle:
      'Episode-level viewer abandonment comparison across 33,171 streaming episodes from 100 multi-season series (2020–2024 dataset).',
    datasetScope: 'Evaluated Dataset: N = 33,171 episodes across 100 series (2020–2024 cohort)',
    sourceNote:
      'Source: OTT Viewer Retention Study (2020–2024 dataset). Compares mid-season audience drop-off (Episodes 4–8: 16.7%) against early-season drop-off (Episodes 1–3: 11.8%).',
    unitSuffix: '%',
    yAxisMax: 25,
    data: [
      {
        label: 'Episodes 4–8 Drop-Off',
        value: 16.7,
        unit: '%',
        context: 'Peak mid-season audience abandonment occurs between Episodes 4 and 8 (16.7%)',
        color: '#F97316',
      },
      {
        label: 'Episodes 1–3 Drop-Off',
        value: 11.8,
        unit: '%',
        context: 'Early-season episode drop-off across Episodes 1 to 3 averages 11.8%',
        color: '#38BDF8',
      },
    ],
    keyInsight:
      'Mid-season pacing between Episodes 4 and 8 drives a 16.7% viewer drop-off spike compared to 11.8% across Episodes 1–3 in the 2020–2024 dataset, supporting tighter 6–8 episode season structures.',
  },
};

interface ProjectMetricsProps {
  projectSlug: string;
  compact?: boolean;
}

export function ProjectMetrics({ projectSlug, compact = false }: ProjectMetricsProps) {
  const { theme } = useTheme();
  const config = VERIFIED_PROJECT_METRICS[projectSlug];

  if (!config) {
    return null;
  }

  const isLight = theme === 'light';
  const gridStroke = isLight ? '#D8E1EA' : '#28364A';
  const axisTickFill = isLight ? '#142033' : '#F4F7FB';
  const yAxisTickFill = isLight ? '#526174' : '#A9B5C5';
  const tooltipBg = isLight ? '#FFFFFF' : '#0B0E14';
  const tooltipBorder = isLight ? '#0369A1' : '#38BDF8';
  const tooltipText = isLight ? '#142033' : '#F4F7FB';

  return (
    <div className="theme-surface border theme-border rounded-2xl p-6 md:p-8 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b theme-border pb-5">
        <div className="space-y-1.5 max-w-2xl">
          <p className="font-mono text-xs theme-accent">
            Source-Backed Quantitative Evidence
          </p>
          <h3 className="font-display text-2xl sm:text-3xl theme-text">{config.title}</h3>
          <p className="text-sm theme-text-muted leading-relaxed">{config.subtitle}</p>
        </div>
        <div className="px-3.5 py-2 rounded-lg theme-bg border theme-border font-mono text-xs theme-accent-secondary shrink-0">
          {config.datasetScope}
        </div>
      </div>

      {/* Recharts Bar Visualisation */}
      <div className={compact ? 'h-60 w-full' : 'h-72 w-full'} role="region" aria-label={config.title}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={config.data}
            margin={{ top: 16, right: 20, left: 4, bottom: 8 }}
            barSize={compact ? 42 : 56}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
            <XAxis
              dataKey="label"
              stroke={yAxisTickFill}
              tick={{ fill: axisTickFill, fontSize: 12, fontFamily: 'IBM Plex Mono, monospace' }}
              axisLine={{ stroke: gridStroke }}
              tickLine={false}
            />
            <YAxis
              domain={[0, config.yAxisMax]}
              stroke={yAxisTickFill}
              tickFormatter={(val) => `${val}${config.unitSuffix}`}
              tick={{ fill: yAxisTickFill, fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
              axisLine={{ stroke: gridStroke }}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: isLight ? 'rgba(3, 105, 161, 0.08)' : 'rgba(56, 189, 248, 0.08)' }}
              contentStyle={{
                backgroundColor: tooltipBg,
                borderColor: tooltipBorder,
                borderRadius: '0.75rem',
                color: tooltipText,
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
      <div
        className={`grid grid-cols-1 ${
          config.data.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'
        } gap-4 pt-2`}
      >
        {config.data.slice(0, 3).map((item) => (
          <div
            key={item.label}
            className="theme-bg border theme-border rounded-xl p-4 space-y-1"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-xs theme-text-muted">{item.label}</span>
              <span
                className="font-display text-2xl font-semibold tabular-nums"
                style={{ color: item.color }}
              >
                {item.value.toFixed(1)}
                {item.unit}
              </span>
            </div>
            <p className="text-xs theme-text leading-relaxed">{item.context}</p>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t theme-border space-y-2 text-xs">
        <p className="theme-text leading-relaxed">
          <strong className="font-mono theme-accent mr-1.5">Takeaway:</strong>
          {config.keyInsight}
        </p>
        <p className="font-mono text-xs theme-text-muted leading-relaxed">{config.sourceNote}</p>
      </div>
    </div>
  );
}
