import {
  PROJECTS,
  SERVICES,
  SUPPORTING_CAPABILITIES,
  PROBLEM_CATEGORIES,
  BUDGET_CHOICES_INR,
  CURATED_WORK_ITEMS,
  type CapabilityDomain,
  type ProjectData,
  type ServiceCategory,
  type CuratedWorkItem,
  type CuratedWorkSection,
  type WorkCollaborationType,
  type CuratedDomain,
} from '../data/studioData';

export type EvidenceFilterType = 'all' | 'live-demo' | 'github-code' | 'report-or-study';

export interface PortfolioFilterOptions {
  domain?: CapabilityDomain | 'all';
  tier?: 'all' | 'primary' | 'secondary';
  technology?: string;
  evidenceType?: EvidenceFilterType;
}

export interface CuratedWorkFilterInput {
  workSection?: CuratedWorkSection | 'all';
  collaborationType?: WorkCollaborationType | 'all';
  domain?: CuratedDomain | 'all';
  technology?: string;
}

export interface ScopeEstimatorInput {
  problemCategory: string;
  availableInformation: string;
  desiredOutcomeType: string;
  timelinePreference: string;
}

export interface ScopeEstimateResult {
  recommendedService: ServiceCategory;
  scopeTitle: string;
  plainExplanation: string;
  suggestedStartingDeliverables: string[];
  pilotRecommendation: string;
  matchingProjects: ProjectData[];
  scopeDisclaimer: string;
}

export const SOLUTION_FINDER_PROBLEMS = [
  'Understand business performance and customers.',
  'Automate repetitive work.',
  'Build a digital product or application.',
  'Improve software quality and reporting.',
  'Research an opportunity or business problem.',
] as const;

export const SOLUTION_FINDER_BUSINESS_TYPES = [
  'Startup or SaaS.',
  'D2C or e-commerce.',
  'Small business.',
  'Product or technology team.',
  'Other.',
] as const;

export const SOLUTION_FINDER_HELP_TYPES = [
  'Dashboard or analysis.',
  'Automation workflow.',
  'Working prototype.',
  'Custom software.',
  'Research and recommendations.',
] as const;

export interface SolutionFinderInput {
  problem: string;
  businessType: string;
  helpNeeded: string;
}

export interface SolutionFinderRecommendation {
  recommendedService: ServiceCategory;
  supportingCapabilityNote?: string;
  whyItMatches: string;
  relevantProject: ProjectData;
  suggestedNextStep: string;
  mappedProblemCategory: string;
  matchingMethodNote: string;
}

export interface EnquiryFormInput {
  name: string;
  businessName: string;
  email: string;
  problemCategory: string;
  desiredOutcome: string;
  availableMaterial: string;
  budgetRange: string;
  expectedTimeline: string;
  additionalDetails: string;
}

export interface EnquiryValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryFormInput, string>>;
}

export const AVAILABLE_INFO_OPTIONS = [
  'Spreadsheets or CSV exports (Excel, Tally, Shopify, billing logs)',
  'PDF documents, circulars, notices, or standard contracts',
  'Separate output files (XML / CSV) from multiple tools',
  'Early-stage product idea or notes on our current manual steps',
] as const;

export const DESIRED_OUTCOME_OPTIONS = [
  'Clear visual dashboard and a plain-English action guide',
  'Automatic date, deadline, or rule checking from documents',
  'A working web tool or internal dashboard for our team',
  'One-click automated PDF report generation',
  'Start with a small paid pilot to test what works best',
] as const;

export const REFRAME_VIDEO_ASSET_PATH =
  '/assets/aistudio/REFRAME_VIDEO_Smart_Glasses_Product_Concept_d6d08b1e.mp4';

export const REFRAME_POSTER_ASSET_PATH =
  '/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg';

export interface VideoChapterItem {
  id: string;
  timecode: string;
  startTime: number;
  label: string;
  summary: string;
}

export const REFRAME_VIDEO_CHAPTERS: VideoChapterItem[] = [
  {
    id: 'reveal',
    timecode: '00:00',
    startTime: 0,
    label: '01 · Eyewear Reveal',
    summary: 'Stay connected without looking away from the world',
  },
  {
    id: 'optics',
    timecode: '00:04',
    startTime: 4,
    label: '02 · Optical Sensor & LED',
    summary: 'Putting information where you need it',
  },
  {
    id: 'hardware',
    timecode: '00:08',
    startTime: 8,
    label: '03 · Charging Case & Cutaway',
    summary: 'Meet RE:FRAME modular eyewear architecture',
  },
  {
    id: 'hud-utilities',
    timecode: '00:12',
    startTime: 12,
    label: '04 · Navigate & Translate',
    summary: '200 m turn-by-turn HUD & live Japanese sign translation',
  },
  {
    id: 'focus-engine',
    timecode: '00:17',
    startTime: 17,
    label: '05 · Focus Engine HUD',
    summary: 'Contextual notification priority filtering in your view',
  },
  {
    id: 'ecosystem',
    timecode: '00:20',
    startTime: 20,
    label: '06 · Privacy & Phone-Cloud Sync',
    summary: 'Hardware camera switch, Bluetooth phone compute & Look Up and Live It',
  },
];

export type StudioGuideAnimation =
  | 'Idle - Gentle Breathing'
  | 'Wave - Welcome'
  | 'Present - Showcase'
  | 'Think - Reflect';

export const STUDIO_GUIDE_ANIMATION_CLIPS: readonly StudioGuideAnimation[] = [
  'Wave - Welcome',
  'Idle - Gentle Breathing',
  'Present - Showcase',
  'Think - Reflect',
] as const;

export type HomepageSectionKey = 'hero' | 'services' | 'work' | 'process' | 'insights';

/**
 * Pure state-transition resolver for the homepage Studio Guide 3D companion:
 * - On hero load: 'Wave - Welcome'
 * - After welcome completes (or when returning to hero): 'Idle - Gentle Breathing'
 * - Services or Work active: 'Present - Showcase'
 * - Process or Insights active: 'Think - Reflect'
 */
export function resolveStudioGuideAnimation(
  activeSection: HomepageSectionKey,
  welcomeCompleted: boolean
): StudioGuideAnimation {
  if (activeSection === 'services' || activeSection === 'work') {
    return 'Present - Showcase';
  }
  if (activeSection === 'process' || activeSection === 'insights') {
    return 'Think - Reflect';
  }
  if (activeSection === 'hero') {
    return welcomeCompleted ? 'Idle - Gentle Breathing' : 'Wave - Welcome';
  }
  return 'Idle - Gentle Breathing';
}

export interface StudioGuideChapter {
  id: string;
  sectionKey: HomepageSectionKey;
  number: string;
  title: string;
  guideBehaviour: string;
  animationClip: StudioGuideAnimation;
  contentSummary: string;
  ctaLabel: string;
  ctaTo: string;
}

export const STUDIO_GUIDE_SCROLL_CHAPTERS: StudioGuideChapter[] = [
  {
    id: 'chapter-welcome',
    sectionKey: 'hero',
    number: '01',
    title: 'Welcome',
    guideBehaviour: 'On hero load plays Wave - Welcome, then cross-fades to Idle - Gentle Breathing.',
    animationClip: 'Wave - Welcome',
    contentSummary:
      'Studio positioning, front-page RE:FRAME concept film showcase, and direct paths to explore selected work or start a project.',
    ctaLabel: 'Explore Selected Work',
    ctaTo: '/work',
  },
  {
    id: 'chapter-services',
    sectionKey: 'services',
    number: '02',
    title: 'Services',
    guideBehaviour: 'Smoothly cross-fades to Present - Showcase when Services becomes active.',
    animationClip: 'Present - Showcase',
    contentSummary:
      'Four client-focused studio services plus side-by-side Data Intelligence vs Product Prototyping tier comparison.',
    ctaLabel: 'Explore Studio Services',
    ctaTo: '/solutions',
  },
  {
    id: 'chapter-work',
    sectionKey: 'work',
    number: '03',
    title: 'Selected Work',
    guideBehaviour: 'Smoothly cross-fades to Present - Showcase when Selected Work becomes active.',
    animationClip: 'Present - Showcase',
    contentSummary:
      'Flagship proof across RE:FRAME, Notice Decoder, SentinelX, Clarity Redemption AI, and evaluated research studies.',
    ctaLabel: 'Browse Selected Work',
    ctaTo: '/work',
  },
  {
    id: 'chapter-process',
    sectionKey: 'process',
    number: '04',
    title: 'Process',
    guideBehaviour: 'Smoothly cross-fades to Think - Reflect when Process becomes active.',
    animationClip: 'Think - Reflect',
    contentSummary:
      'A transparent four-stage workflow—Discover → Define → Create → Deliver—from initial research to shipping the finished product.',
    ctaLabel: 'See the 4-Stage Process',
    ctaTo: '/process',
  },
  {
    id: 'chapter-insights',
    sectionKey: 'insights',
    number: '05',
    title: 'Insights',
    guideBehaviour: 'Smoothly cross-fades to Think - Reflect when Insights becomes active.',
    animationClip: 'Think - Reflect',
    contentSummary:
      'Original research writing connecting brand perception, customer behaviour data, and applied software engineering.',
    ctaLabel: 'Read Studio Insights',
    ctaTo: '/insights',
  },
];

export interface ServiceComparisonTier {
  id: 'data-intelligence' | 'product-prototyping';
  tierCode: string;
  title: string;
  subtitle: string;
  idealFor: string;
  expectedScope: string;
  typicalTimeline: string;
  inputRequired: string;
  deliverables: string[];
  stackAndTools: string[];
  verifiedProof: { title: string; slug: string; metricOrNote: string }[];
  ctaProblemCategory: string;
}

export const SERVICE_COMPARISON_TIERS: ServiceComparisonTier[] = [
  {
    id: 'data-intelligence',
    tierCode: 'TIER 01 · DATA INTELLIGENCE',
    title: 'Data Intelligence & Cohort Analytics',
    subtitle:
      'Turn raw transactional exports, survey records, and operational logs into decision-ready dashboards and statistical proof.',
    idealFor:
      'D2C brands, retail/operations teams, and founders with existing CSV, SQL, Excel, or CRM data who need clarity on retention, margins, or customer segments.',
    expectedScope:
      'Data cleaning & audit → cohort/econometric modelling → interactive Power BI or Python visual report → plain-English strategic recommendations.',
    typicalTimeline: '1–3 weeks (Fixed-Scope Audit or Dashboard Sprint)',
    inputRequired: 'Historical spreadsheets, Shopify/ERP CSV exports, or public/internal SQL tables.',
    deliverables: [
      'Cleaned, documented dataset & reproducible Python / SQL analysis pipeline',
      'Interactive Power BI or web KPI dashboard with segment filters',
      'Cohort retention, discount-sensitivity, or demographic anomaly breakdown',
      'Plain-English executive decision brief with prioritised action steps',
    ],
    stackAndTools: ['Python (Pandas, Scikit-learn)', 'SQL', 'Power BI', 'Statistical Hypothesis Testing'],
    verifiedProof: [
      {
        title: 'Decoding Customer Value',
        slug: 'decoding-customer-value',
        metricOrNote: 'IIT Guwahati · RFM & discount-dependency BI study',
      },
      {
        title: 'OTT Viewer Retention Analysis',
        slug: 'ott-viewer-retention-analysis',
        metricOrNote: '33,171 episodes (2020–2024) · 16.7% vs 11.8% drop-off',
      },
    ],
    ctaProblemCategory: 'Understand my business data',
  },
  {
    id: 'product-prototyping',
    tierCode: 'TIER 02 · PRODUCT PROTOTYPING',
    title: 'Product Prototyping & Custom Web / AI Tools',
    subtitle:
      'Transform early product concepts, manual document workflows, or pitch narratives into interactive web applications and investor-ready showcases.',
    idealFor:
      'Founders, product leads, and teams launching a new digital product, automating PDF/document workflows, or pitching a high-stakes hardware/software concept.',
    expectedScope:
      'Problem & UX architecture → interactive React/TypeScript web prototype or deterministic AI workflow → live deployment or 15-slide visual concept showcase.',
    typicalTimeline: '2–4 weeks (Clickable Prototype, Web App, or Concept Pitch System)',
    inputRequired: 'Rough product brief, workflow pain-point notes, or 10–20 sample PDFs/documents.',
    deliverables: [
      'Responsive React + TypeScript web application or working AI workflow tool',
      'End-to-end UX ecosystem architecture, user flows, and interactive states',
      'Deterministic rule validation + structured JSON/PDF export pipeline',
      'Investor/competition-grade visual presentation deck & concept walkthrough',
    ],
    stackAndTools: ['React 19 & TypeScript', 'Tailwind CSS', 'FastAPI / Python', 'Gemini / Structured LLM APIs'],
    verifiedProof: [
      {
        title: 'RE:FRAME Smart Glasses Concept',
        slug: 'reframe',
        metricOrNote: '1st Place · REVIVEX · ZERO² 2026 · 15-slide deck & concept film',
      },
      {
        title: 'Notice Decoder & SentinelX',
        slug: 'notice-decoder',
        metricOrNote: 'Live deployed web apps on Vercel with automated PDF/risk output',
      },
    ],
    ctaProblemCategory: 'Prototype a product idea',
  },
];

export interface ServiceComparisonRow {
  dimension: string;
  dataIntelligence: string;
  productPrototyping: string;
}

export const SERVICE_COMPARISON_ROWS: ServiceComparisonRow[] = [
  {
    dimension: 'Primary Objective',
    dataIntelligence: 'Uncover why metrics move (retention, churn, discount leakage, regional demand).',
    productPrototyping: 'Validate how a product works in users’ hands or automate a manual workflow.',
  },
  {
    dimension: 'Starting Material Needed',
    dataIntelligence: 'CSV/Excel exports, billing logs, survey responses, or database tables.',
    productPrototyping: 'A rough idea, workflow pain point, wireframe sketch, or sample PDFs.',
  },
  {
    dimension: 'Core Deliverable',
    dataIntelligence: 'Interactive Power BI / Python dashboard + executive findings report.',
    productPrototyping: 'Live deployed React/AI web application + visual product narrative.',
  },
  {
    dimension: 'Typical Engagement Scope',
    dataIntelligence: '1–3 weeks · Fixed-scope diagnostic audit or recurring BI reporting setup.',
    productPrototyping: '2–4 weeks · Focused MVP pilot, internal tool, or flagship concept showcase.',
  },
  {
    dimension: 'Handover & Ownership',
    dataIntelligence: '100% ownership of cleaned datasets, SQL/Python notebooks, and dashboard files.',
    productPrototyping: '100% ownership of source code, GitHub repository, live deployment, and design assets.',
  },
];



/**
 * Filters flagship case study projects by capability domain, tier, technology, and evidence type
 * while preserving the priority hierarchy:
 * 1. Notice Decoder
 * 2. SentinelX
 * 3. Decoding Customer Value
 * 4. Contract Risk Governance Engine
 * 5. Lureline
 * 6. Clarity Redemption AI
 */
export function filterAndSortProjects(
  domainFilter: CapabilityDomain | 'all' = 'all',
  tierFilter: 'all' | 'primary' | 'secondary' = 'all',
  technologyFilter: string = 'all',
  evidenceTypeFilter: EvidenceFilterType = 'all'
): ProjectData[] {
  return [...PROJECTS]
    .filter((project) => {
      if (domainFilter !== 'all' && project.domain !== domainFilter) {
        return false;
      }
      if (tierFilter === 'primary' && project.tier === 'secondary') {
        return false;
      }
      if (tierFilter === 'secondary' && project.tier !== 'secondary') {
        return false;
      }
      if (technologyFilter && technologyFilter !== 'all') {
        const needle = technologyFilter.toLowerCase();
        const matchesTech = project.verifiedStack.some((t) =>
          t.toLowerCase().includes(needle)
        );
        if (!matchesTech) return false;
      }
      if (evidenceTypeFilter !== 'all') {
        if (evidenceTypeFilter === 'live-demo' && !project.liveDemoUrl) {
          return false;
        }
        if (evidenceTypeFilter === 'github-code' && !project.githubUrl) {
          return false;
        }
        if (
          evidenceTypeFilter === 'report-or-study' &&
          project.slug !== 'reframe' &&
          project.slug !== 'sentinelx' &&
          project.slug !== 'decoding-customer-value'
        ) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => a.priorityOrder - b.priorityOrder);
}

/**
 * Filters curated portfolio items across Selected Projects, Research & Analytics,
 * and Product Concepts & Experiments.
 */
export function filterCuratedWork(
  input: CuratedWorkFilterInput = {}
): CuratedWorkItem[] {
  const {
    workSection = 'all',
    collaborationType = 'all',
    domain = 'all',
    technology = 'all',
  } = input;

  const techNeedle = technology && technology !== 'all' ? technology.toLowerCase() : '';

  return CURATED_WORK_ITEMS.filter((item) => {
    if (workSection !== 'all' && item.workSection !== workSection) {
      return false;
    }
    if (collaborationType !== 'all' && item.collaborationType !== collaborationType) {
      return false;
    }
    if (domain !== 'all' && item.domain !== domain) {
      return false;
    }
    if (techNeedle) {
      const hasTech = item.technologies.some((t) => t.toLowerCase().includes(techNeedle));
      if (!hasTech) return false;
    }
    return true;
  });
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/**
 * Transparent rule-based matching for the 3-Question SolutionFinder component.
 * Maps visitor answers to the four studio services (Brand Strategy & Storytelling,
 * Digital Content & Creative Production, Websites & Digital Experiences,
 * AI-Powered Digital Solutions).
 */
export function recommendSolutionFromFinder(
  input: SolutionFinderInput
): SolutionFinderRecommendation {
  const { problem, businessType, helpNeeded } = input;

  const brandService = SERVICES.find((s) => s.id === 'brand-storytelling') ?? SERVICES[0];
  const contentService = SERVICES.find((s) => s.id === 'digital-content') ?? SERVICES[1];
  const webService = SERVICES.find((s) => s.id === 'websites-digital-experiences') ?? SERVICES[2];
  const aiService = SERVICES.find((s) => s.id === 'ai-solutions') ?? SERVICES[3];

  const reframeProj = getProjectBySlug('reframe') ?? PROJECTS[0];
  const noticeDecoderProj = getProjectBySlug('notice-decoder') ?? PROJECTS[0];
  const sentinelxProj = getProjectBySlug('sentinelx') ?? PROJECTS[0];
  const dcvProj = getProjectBySlug('decoding-customer-value') ?? PROJECTS[0];
  const crgProj = getProjectBySlug('contract-risk-governance') ?? PROJECTS[0];
  const lurelineProj = getProjectBySlug('lureline') ?? PROJECTS[0];

  let brandScore = 0;
  let contentScore = 0;
  let webScore = 0;
  let aiScore = 0;
  let supportingCapabilityNote: string | undefined;

  if (problem.includes('Understand business performance')) {
    brandScore += 3;
  } else if (problem.includes('Automate repetitive work')) {
    aiScore += 3;
  } else if (problem.includes('Build a digital product')) {
    webScore += 3;
  } else if (problem.includes('Improve software quality and reporting')) {
    webScore += 2;
    aiScore += 1;
    supportingCapabilityNote = `Supporting Capability Included: ${SUPPORTING_CAPABILITIES[2].title} — ${SUPPORTING_CAPABILITIES[2].tagline}`;
  } else if (problem.includes('Research an opportunity')) {
    brandScore += 2;
    contentScore += 2;
    supportingCapabilityNote = `Supporting Capability Included: ${SUPPORTING_CAPABILITIES[1].title} — ${SUPPORTING_CAPABILITIES[1].tagline}`;
  }

  if (helpNeeded.includes('Dashboard or analysis')) {
    brandScore += 2;
  } else if (helpNeeded.includes('Automation workflow')) {
    aiScore += 2;
  } else if (helpNeeded.includes('Working prototype') || helpNeeded.includes('Custom software')) {
    webScore += 2;
    if (!supportingCapabilityNote && helpNeeded.includes('Working prototype')) {
      supportingCapabilityNote = `Supporting Capability Included: ${SUPPORTING_CAPABILITIES[0].title} — ${SUPPORTING_CAPABILITIES[0].tagline}`;
    }
  } else if (helpNeeded.includes('Research and recommendations')) {
    contentScore += 2;
    brandScore += 1;
    if (!supportingCapabilityNote) {
      supportingCapabilityNote = `Supporting Capability Included: ${SUPPORTING_CAPABILITIES[1].title} — ${SUPPORTING_CAPABILITIES[1].tagline}`;
    }
  }

  let recommendedService = brandService;
  let relevantProject = dcvProj;
  let mappedProblemCategory: string = PROBLEM_CATEGORIES[0];

  if (aiScore >= brandScore && aiScore >= webScore && aiScore >= contentScore) {
    recommendedService = aiService;
    relevantProject =
      businessType.includes('Product or technology') || problem.includes('quality')
        ? crgProj
        : noticeDecoderProj;
    mappedProblemCategory = PROBLEM_CATEGORIES[1];
  } else if (webScore > brandScore && webScore > aiScore && webScore >= contentScore) {
    recommendedService = webService;
    relevantProject =
      problem.includes('quality and reporting') || helpNeeded.includes('Custom software')
        ? sentinelxProj
        : businessType.includes('Product or technology')
          ? lurelineProj
          : noticeDecoderProj;
    mappedProblemCategory = PROBLEM_CATEGORIES[2];
  } else if (contentScore > brandScore) {
    recommendedService = contentService;
    relevantProject = reframeProj;
    mappedProblemCategory = PROBLEM_CATEGORIES[4];
  } else {
    recommendedService = brandService;
    relevantProject = problem.includes('Research an opportunity') ? reframeProj : dcvProj;
    mappedProblemCategory = PROBLEM_CATEGORIES[0];
  }

  const cleanBusiness = businessType.replace(/\.$/, '');
  const cleanHelp = helpNeeded.replace(/\.$/, '').toLowerCase();

  const whyItMatches = `For a ${cleanBusiness} looking to "${problem.replace(/\.$/, '')}", ${recommendedService.title} provides ${cleanHelp} without unnecessary complexity. ${recommendedService.plainBenefitSummary}`;

  const suggestedNextStep =
    helpNeeded.includes('Working prototype') || helpNeeded.includes('Research')
      ? 'Start with a short Fixed-Scope Pilot or Strategy Sprint using a small sample of your workflow, concept, or data.'
      : `Share a sample file or brief description of your current workflow on the Contact page so I can outline a realistic scope and INR proposal.`;

  return {
    recommendedService,
    supportingCapabilityNote,
    whyItMatches,
    relevantProject,
    suggestedNextStep,
    mappedProblemCategory,
    matchingMethodNote:
      'Transparent rule-based matching: maps your problem, organisation type, and desired deliverable directly to verified studio services and project evidence.',
  };
}

/**
 * Matches a client's selected problem category to the most relevant service
 * and portfolio evidence in everyday English.
 */
export function matchProblemToService(problemCategory: string): {
  recommendedService: ServiceCategory;
  rationale: string;
  suggestedPilotIdea: string;
} {
  const brandService = SERVICES.find((s) => s.id === 'brand-storytelling') ?? SERVICES[0];
  const contentService = SERVICES.find((s) => s.id === 'digital-content') ?? SERVICES[1];
  const webService = SERVICES.find((s) => s.id === 'websites-digital-experiences') ?? SERVICES[2];
  const aiService = SERVICES.find((s) => s.id === 'ai-solutions') ?? SERVICES[3];

  switch (problemCategory) {
    case 'Understand my business data':
      return {
        recommendedService: brandService,
        rationale:
          'We start by researching your category and analysing your customer or sales data to uncover what drives genuine loyalty and positioning clarity.',
        suggestedPilotIdea:
          'A focused customer segmentation and positioning audit on one sample dataset or brand brief.',
      };
    case 'Automate a repetitive workflow':
    case 'Develop an AI-assisted solution':
      return {
        recommendedService: aiService,
        rationale:
          'Combines AI text reading with fixed computer rules so routine documents, dates, and checklists are processed quickly and reliably.',
        suggestedPilotIdea:
          'A small fixed-scope pilot tested on 10–20 real sample PDFs or notices from your workflow.',
      };
    case 'Build a dashboard or internal tool':
      return {
        recommendedService: webService,
        rationale:
          'Designs and builds a responsive website, interactive web application, or one-click PDF report generator around your exact workflow.',
        suggestedPilotIdea:
          'A focused clickable prototype or single-workflow web tool to validate the core experience first.',
      };
    case 'Prototype a product idea':
      return {
        recommendedService: contentService,
        rationale:
          'Shapes your early product concept into a compelling visual presentation deck, UX ecosystem flow, or interactive prototype.',
        suggestedPilotIdea:
          'A 12–15 slide visual product concept deck or interactive UX prototype.',
      };
    default:
      return {
        recommendedService: brandService,
        rationale:
          'When you are not sure which path fits best, we inspect your current goal, content, or manual steps together and pick the simplest high-impact solution.',
        suggestedPilotIdea:
          'A short Strategy & Research Sprint on your sample material or workflow.',
      };
  }
}

/**
 * Genuine 4-step project scope estimator.
 * Never invents prices or guarantees delivery dates.
 */
export function estimateProjectScope(input: ScopeEstimatorInput): ScopeEstimateResult {
  const brandService = SERVICES.find((s) => s.id === 'brand-storytelling') ?? SERVICES[0];
  const webService = SERVICES.find((s) => s.id === 'websites-digital-experiences') ?? SERVICES[2];
  const aiService = SERVICES.find((s) => s.id === 'ai-solutions') ?? SERVICES[3];

  const baseMatch = matchProblemToService(input.problemCategory);
  let recommendedService = baseMatch.recommendedService;

  if (
    input.desiredOutcomeType.includes('PDF report') ||
    input.desiredOutcomeType.includes('working web tool') ||
    input.availableInformation.includes('Separate output files')
  ) {
    recommendedService = webService;
  } else if (
    input.desiredOutcomeType.includes('Automatic date') ||
    input.availableInformation.includes('PDF documents')
  ) {
    recommendedService = aiService;
  } else if (
    input.desiredOutcomeType.includes('Clear visual dashboard') ||
    input.availableInformation.includes('Spreadsheets')
  ) {
    recommendedService = brandService;
  }

  const matchingProjects = PROJECTS.filter((p) =>
    recommendedService.portfolioProof.some((proof) => proof.slug === p.slug)
  );

  const pilotRecommendation =
    input.timelinePreference.includes('1–2 weeks') ||
    input.desiredOutcomeType.includes('small paid pilot')
      ? 'Recommended Starting Step: Begin with a Fixed-Scope Pilot on a sample of your files or concept so you can verify the result before committing to a larger scope.'
      : `Recommended Starting Step: ${baseMatch.suggestedPilotIdea}`;

  return {
    recommendedService,
    scopeTitle: `${recommendedService.number}. ${recommendedService.title}`,
    plainExplanation: `Based on your problem ("${input.problemCategory}") and your available material ("${input.availableInformation}"), the most practical path is ${recommendedService.title}. ${recommendedService.plainBenefitSummary}`,
    suggestedStartingDeliverables: recommendedService.deliverables.slice(0, 4),
    pilotRecommendation,
    matchingProjects,
    scopeDisclaimer:
      'No instant price or guaranteed date is generated here. Final INR pricing and timeline are shared in a written proposal after reviewing a sample of your actual data or workflow.',
  };
}

/**
 * Validates the problem-first project enquiry form.
 */
export function validateEnquiryForm(input: EnquiryFormInput): EnquiryValidationResult {
  const errors: Partial<Record<keyof EnquiryFormInput, string>> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!input.businessName || input.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your business, startup, or organisation name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address so I can reply with a proposal.';
  }

  if (
    !input.problemCategory ||
    !PROBLEM_CATEGORIES.includes(input.problemCategory as (typeof PROBLEM_CATEGORIES)[number])
  ) {
    errors.problemCategory = 'Please select the problem category that best fits your need.';
  }

  if (!input.desiredOutcome || input.desiredOutcome.trim().length < 15) {
    errors.desiredOutcome =
      'Please describe the outcome you want in a short sentence (at least 15 characters).';
  }

  if (!input.availableMaterial || input.availableMaterial.trim().length < 5) {
    errors.availableMaterial =
      'Please mention what spreadsheets, PDFs, or workflow notes you currently have.';
  }

  if (
    !input.budgetRange ||
    !BUDGET_CHOICES_INR.includes(input.budgetRange as (typeof BUDGET_CHOICES_INR)[number])
  ) {
    errors.budgetRange = 'Please select an approximate INR budget range or custom estimate.';
  }

  if (!input.expectedTimeline || input.expectedTimeline.trim().length === 0) {
    errors.expectedTimeline = 'Please select an expected timeline window.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a clear, everyday-English project enquiry brief.
 * Explicitly notes that creating the brief prepares text to copy, download, or email.
 */
export function formatEnquiryBrief(input: EnquiryFormInput): string {
  const match = matchProblemToService(input.problemCategory);
  const divider = '--------------------------------------------';
  const headerRule = '============================================';
  const lines = [
    headerRule,
    'PROJECT ENQUIRY BRIEF — AKSHIT STUDIO',
    headerRule,
    `Client Name      : ${input.name.trim()}`,
    `Business / Org   : ${input.businessName.trim()}`,
    `Reply Email      : ${input.email.trim()}`,
    divider,
    `Problem Area     : ${input.problemCategory}`,
    `Aligned Service  : ${match.recommendedService.number}. ${match.recommendedService.title}`,
    `Indicative INR   : ${input.budgetRange} (Indicative only; final quote depends on scope review)`,
    `Timeline Window  : ${input.expectedTimeline}`,
    divider,
    'DESIRED BUSINESS OUTCOME:',
    input.desiredOutcome.trim(),
    '',
    'AVAILABLE DATA, DOCUMENTS OR WORKFLOWS:',
    input.availableMaterial.trim(),
  ];

  if (input.additionalDetails && input.additionalDetails.trim().length > 0) {
    lines.push('', 'ADDITIONAL CONTEXT / QUESTIONS:', input.additionalDetails.trim());
  }

  lines.push(
    divider,
    'NEXT STEP: Review sample material -> Agree on realistic scope -> Share written INR proposal.',
    headerRule
  );

  return lines.join('\n');
}
