export type ProjectTier = 'flagship' | 'featured' | 'secondary';
export type CapabilityDomain = 'ai-automation' | 'data-intelligence' | 'custom-systems';

export interface ProjectStep {
  step: string;
  title: string;
  detail: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  layer: 'input' | 'processing' | 'verification' | 'output';
}

export interface ProjectData {
  slug: string;
  priorityOrder: number;
  tier: ProjectTier;
  tierLabel: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  category: string;
  domain: CapabilityDomain;
  projectClassification: string;
  documentedRole: string;
  collaborators: string;
  attributionNote: string;
  problemSummary: string;
  businessContext: string;
  solutionSummary: string;
  verifiedStack: string[];
  verifiedElements: string[];
  deliverables: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  evidenceNote: string;
  architectureSummary: string;
  architectureNodes: ArchitectureNode[];
  workflowSteps: ProjectStep[];
  technicalDecisions: {
    decision: string;
    rationale: string;
    tradeoff: string;
  }[];
  limitationsAndScope: string[];
  keyLessons: string[];
  evidenceArtifacts: {
    title: string;
    type: 'interactive-preview' | 'sql-excerpt' | 'report-specification' | 'benchmark-note';
    caption: string;
    codeOrSpec: string;
    datasetOrHardwareCondition?: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  domain: CapabilityDomain;
  targetAudience: string;
  problemStatement: string;
  description: string;
  deliverables: string[];
  exampleScenarios: {
    businessType: string;
    challenge: string;
    practicalSolution: string;
  }[];
  portfolioProof: {
    title: string;
    slug?: string;
    summary: string;
  }[];
}

export interface ProcessStage {
  stepNumber: string;
  title: string;
  clientExperience: string;
  whatYouProvide: string;
  whatYouReceive: string;
  keyPrinciple: string;
}

export interface InsightNote {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  groundedInProject: string;
  groundedProjectSlug: string;
  thesis: string;
  keyTakeaways: string[];
  practicalImplicationForSMBs: string;
  technicalBreakdown: string[];
}

export const BRAND_IDENTITY = {
  name: 'Akshit',
  studioTitle: 'Akshit | Independent Digital Solutions',
  positioningStatement:
    'I help startups and small businesses turn messy data, repetitive workflows and early-stage product ideas into useful digital solutions.',
  heroHeadline: 'Turning complex problems into clear digital solutions.',
  heroSupportingCopy:
    'Independent work across AI automation, data intelligence and custom digital products.',
  operatorStatus: 'Independent individual operator · India (INR engagements)',
  differentiation:
    'The ability to understand a business problem, analyse the information behind it, design an appropriate solution and build a functional digital deliverable.',
  targetAudienceList: [
    'Indian startup founders',
    'Small and medium-sized businesses (SMBs)',
    'D2C and e-commerce businesses',
    'Early-stage SaaS teams',
    'Consultants and independent business operators',
    'Educational and operational businesses',
  ],
};

export const CAPABILITY_PILLARS = [
  {
    id: 'ai-automation' as CapabilityDomain,
    number: '01',
    title: 'AI & Workflow Automation',
    shortSummary:
      'Turning unstructured PDFs, notices, and repetitive manual checks into deterministic, rule-backed workflows.',
    outcomeFocus: 'Reduce manual document sorting, deadline misses, and repetitive validation hours.',
    proofSlugs: ['notice-decoder', 'contract-risk-governance'],
  },
  {
    id: 'data-intelligence' as CapabilityDomain,
    number: '02',
    title: 'Data Analytics & Business Intelligence',
    shortSummary:
      'Cleaning messy operational spreadsheets and transaction logs to surface genuine customer behaviour and retention drivers.',
    outcomeFocus: 'Move from raw sales tables to clear segmentation, SQL-verified findings, and actionable playbooks.',
    proofSlugs: ['decoding-customer-value'],
  },
  {
    id: 'custom-systems' as CapabilityDomain,
    number: '03',
    title: 'Product Thinking, Prototyping & Custom Tools',
    shortSummary:
      'Designing and engineering working web tools, data ingestion pipelines, and automated PDF reporting systems.',
    outcomeFocus: 'Validate product ideas or solve internal operational bottlenecks with a functional digital deliverable.',
    proofSlugs: ['sentinelx', 'lureline', 'notice-decoder'],
  },
];

export const PROJECTS: ProjectData[] = [
  {
    slug: 'notice-decoder',
    priorityOrder: 1,
    tier: 'flagship',
    tierLabel: 'Flagship Project 01',
    indexNumber: '01',
    title: 'Notice Decoder',
    subtitle: 'AI-Powered College Notice & Schedule Planner with Deterministic Clash Detection',
    category: 'AI Automation and Full-Stack Product Development',
    domain: 'ai-automation',
    projectClassification: 'Collaborative Full-Stack Web Application · Live Deployment',
    documentedRole: 'Team Leader and System Architect',
    collaborators: 'Co-created with Tanya Garg',
    attributionNote:
      'Repository is hosted under co-creator Tanya Garg’s GitHub account. My documented role was Team Leader and System Architect, leading system architecture, deterministic extraction pipelines, clash detection logic, and calendar export compliance.',
    problemSummary:
      'Academic notices distributed through unstructured PDFs and messaging channels create schedule confusion, missed deadlines, and overlapping event commitments.',
    businessContext:
      'Educational institutions and operational teams routinely circulate critical dates inside dense circulars. Manually reading, extracting dates, and cross-checking personal calendars leads to avoidable collisions.',
    solutionSummary:
      'A full-stack planning system combining LLM-assisted notice parsing (Qwen2.5-7B-Instruct via Featherless API) with deterministic local date/time extraction, interval clash detection, a Notice Change Radar, and RFC 5545 .ics calendar export.',
    verifiedStack: [
      'React',
      'TypeScript',
      'Vite',
      'Express',
      'Featherless API (Qwen2.5-7B-Instruct)',
      'RFC 5545 iCalendar',
    ],
    verifiedElements: [
      'React, TypeScript, Vite and Express full-stack architecture',
      'Featherless API integration using Qwen2.5-7B-Instruct',
      'Deterministic local date and time extraction',
      'Schedule interval clash detection',
      'Deadline collision detection',
      'Notice Change Radar for tracking amended circulars',
      'RFC 5545 .ics calendar export',
      'Live Render deployment',
    ],
    deliverables: [
      'Full-stack web application (React + Express)',
      'Hybrid AI + deterministic extraction pipeline',
      'Interval overlap & deadline collision engine',
      'Notice Change Radar comparison view',
      'Standards-compliant .ics file generator',
    ],
    liveDemoUrl: 'https://notice-decoder-ai-powered-college-notice-schedule-planner.onrender.com/',
    githubUrl: 'https://github.com/Tanya-garg10/Notice-Decoder-AI-Powered-College-Notice-Schedule-Planner',
    evidenceNote: 'Verified live deployment on Render and public source repository on GitHub.',
    architectureSummary:
      'Rather than trusting an LLM alone to calculate schedule overlaps, Notice Decoder separates semantic structuring from temporal math. Qwen2.5-7B-Instruct structures raw notice text, while deterministic local parsers normalise dates, evaluate interval intersections, track notice revisions, and serialize RFC 5545 calendar events.',
    architectureNodes: [
      {
        id: 'nd-1',
        label: 'Unstructured Notice Input',
        sublabel: 'Circular text / PDF notice content',
        layer: 'input',
      },
      {
        id: 'nd-2',
        label: 'Hybrid Extraction Layer',
        sublabel: 'Qwen2.5-7B-Instruct + Local Date/Time Regex',
        layer: 'processing',
      },
      {
        id: 'nd-3',
        label: 'Clash & Change Radar Engine',
        sublabel: 'Interval overlap + Deadline collision + Diff radar',
        layer: 'verification',
      },
      {
        id: 'nd-4',
        label: 'Actionable Schedule & .ics',
        sublabel: 'RFC 5545 Calendar Export + Visual Planner',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Notice Ingestion & Preprocessing',
        detail: 'Raw academic notice text is sanitised and prepared for dual-path analysis.',
      },
      {
        step: '02',
        title: 'Deterministic Date/Time Anchoring',
        detail: 'Local deterministic patterns extract explicit dates, time windows, and deadlines so temporal anchors are never hallucinated.',
      },
      {
        step: '03',
        title: 'Semantic Structuring via Featherless API',
        detail: 'Qwen2.5-7B-Instruct categorises notice intent, action items, affected cohorts, and venue metadata.',
      },
      {
        step: '04',
        title: 'Clash Detection & Notice Change Radar',
        detail: 'Interval math checks for overlapping time slots and same-day deadline collisions, while Notice Change Radar highlights updates against earlier notices.',
      },
      {
        step: '05',
        title: 'RFC 5545 .ics Export',
        detail: 'Verified events export cleanly into Google Calendar, Apple Calendar, or Outlook via standard iCalendar formatting.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Hybrid deterministic + LLM extraction instead of pure prompt-based parsing',
        rationale:
          'LLMs can misinterpret relative dates or invent timestamps when notices are ambiguous. Deterministic local extraction guarantees reliable date/time anchors.',
        tradeoff:
          'Requires maintaining explicit date normalisation rules alongside the API prompt pipeline.',
      },
      {
        decision: 'Dedicated Notice Change Radar for revised circulars',
        rationale:
          'Institutions frequently issue corrigenda or rescheduled dates. Users need to see exactly what shifted rather than treating a revised notice as a brand-new event.',
        tradeoff:
          'Adds state comparison overhead when matching updated notices against prior entries.',
      },
      {
        decision: 'Standards-compliant RFC 5545 .ics generation over proprietary calendar OAuth',
        rationale:
          'Allows immediate adoption across any calendar client without requiring invasive OAuth permissions during student or faculty onboarding.',
        tradeoff:
          'One-way file export rather than continuous background two-way calendar sync.',
      },
    ],
    limitationsAndScope: [
      'Hosted on Render free/standard infrastructure, so initial cold starts may take a few seconds if the service has been idle.',
      'Depends on text legibility from notices; severely degraded scanned image PDFs without selectable text require OCR preprocessing.',
      'Repository is hosted under co-creator Tanya Garg’s GitHub account as a collaborative academic/product build.',
    ],
    keyLessons: [
      'AI models excel at summarising noisy text, but deterministic code must own calendar arithmetic and clash validation.',
      'Designing for amendment workflows (Notice Change Radar) solves a much sharper real-world pain point than one-off extraction.',
    ],
    evidenceArtifacts: [
      {
        title: 'Deterministic Interval Clash & RFC 5545 Pipeline Specification',
        type: 'interactive-preview',
        caption: 'Verified system pipeline showing how Notice Decoder pairs Qwen2.5-7B-Instruct with local interval collision checks.',
        codeOrSpec: `// Verified Pipeline Contract: Notice Decoder
Input: Raw Notice Circular Text
1. Local Extractor -> Anchors explicit Dates [YYYY-MM-DD] & Time Windows [HH:mm - HH:mm]
2. Featherless API (Qwen2.5-7B-Instruct) -> Extracts Title, Category, Action Items, Audience
3. Clash Detector:
   - Interval Clash: (StartA < EndB) && (StartB < EndA)
   - Deadline Collision: Multiple high-priority submissions within same window
4. Notice Change Radar -> Compares updated circular fields against baseline notice record
5. Output -> Interactive Schedule View + RFC 5545 VCALENDAR / VEVENT (.ics) download`,
      },
    ],
  },
  {
    slug: 'sentinelx',
    priorityOrder: 2,
    tier: 'flagship',
    tierLabel: 'Flagship Project 02',
    indexNumber: '02',
    title: 'SentinelX',
    subtitle: 'Automated Security Assessment Ingestion, Normalization & Executive PDF Reporting System',
    category: 'Security Data Processing and Full-Stack Systems',
    domain: 'custom-systems',
    projectClassification: 'Collaborative Full-Stack System · 100+ Page Technical Project Report',
    documentedRole: 'Co-Developer and System Architect',
    collaborators: 'Co-developed with Adyot Ohri',
    attributionNote:
      'Co-developed with Adyot Ohri as Co-Developer and System Architect. Documented in a formal academic technical project report exceeding 100 pages. No public GitHub repository or live deployment is currently verified in the source material.',
    problemSummary:
      'Security assessment tools (such as Nmap and OWASP ZAP) produce fragmented XML and CSV reports that require tedious manual validation, deduplication, severity normalization, and executive report formatting.',
    businessContext:
      'Technical teams and consultants spend disproportionate hours copying raw scanner outputs into spreadsheets, reconciling mismatched severity scales, verifying file integrity, and formatting client-ready PDF summaries.',
    solutionSummary:
      'A full-stack Python (FastAPI) and React 19 system that ingests Nmap XML and OWASP ZAP XML/CSV artifacts, verifies SHA-256 file integrity, executes concurrent inspection routines via ThreadPoolExecutor, normalizes findings across five severity levels, eliminates duplicates, and generates automated executive PDF reports with ReportLab.',
    verifiedStack: [
      'Python',
      'FastAPI',
      'React 19',
      'Vite',
      'SQLite',
      'SQLAlchemy',
      'Recharts',
      'ReportLab',
      'ThreadPoolExecutor',
    ],
    verifiedElements: [
      'Nmap XML ingestion pipeline',
      'OWASP ZAP XML and CSV ingestion pipeline',
      'SHA-256 cryptographic integrity verification of ingested scan artifacts',
      'Automated duplicate finding detection across multi-tool outputs',
      'Finding normalization into a unified 5-level severity taxonomy',
      'Concurrent inspection routines powered by Python ThreadPoolExecutor',
      'Interactive React 19 + Recharts analytical interface',
      'Automated executive PDF report generation via ReportLab',
    ],
    deliverables: [
      'FastAPI ingestion & normalization backend',
      'SQLite + SQLAlchemy relational persistence layer',
      'SHA-256 artifact verification workflow',
      'React 19 + Recharts visual triage dashboard',
      'Automated ReportLab executive PDF generator',
      '100+ page formal technical project report',
    ],
    evidenceNote:
      'Primary evidence is a formal academic technical project report exceeding 100 pages. No public GitHub repository or live deployment is claimed.',
    architectureSummary:
      'SentinelX acts as an evidence-backed consolidation pipeline. Uploaded Nmap XML and OWASP ZAP XML/CSV files are hashed with SHA-256 before concurrent workers parse heterogeneous schemas into a single SQLAlchemy model, deduplicating overlapping vulnerabilities and rendering both live Recharts telemetry and structured ReportLab PDF deliverables.',
    architectureNodes: [
      {
        id: 'sx-1',
        label: 'Multi-Scanner Artifacts',
        sublabel: 'Nmap XML + OWASP ZAP XML & CSV',
        layer: 'input',
      },
      {
        id: 'sx-2',
        label: 'SHA-256 & Concurrent Workers',
        sublabel: 'Integrity hash + ThreadPoolExecutor parsing',
        layer: 'processing',
      },
      {
        id: 'sx-3',
        label: 'Normalization & Deduplication',
        sublabel: 'Unified 5-Severity Schema + SQLAlchemy / SQLite',
        layer: 'verification',
      },
      {
        id: 'sx-4',
        label: 'Executive Output Layer',
        sublabel: 'React 19 Recharts UI + ReportLab PDF Engine',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Artifact Upload & SHA-256 Verification',
        detail: 'Incoming Nmap XML and OWASP ZAP XML/CSV files are fingerprinted with SHA-256 to establish an auditable chain of custody.',
      },
      {
        step: '02',
        title: 'Concurrent Parsing via ThreadPoolExecutor',
        detail: 'Concurrent inspection routines process multi-file scan payloads without blocking the FastAPI request loop.',
      },
      {
        step: '03',
        title: 'Cross-Tool Finding Normalization',
        detail: 'Disparate scanner attributes are mapped into a consistent schema with five standardised severity levels (Critical, High, Medium, Low, Informational).',
      },
      {
        step: '04',
        title: 'Duplicate Detection & Persistence',
        detail: 'Overlapping host/port/alert findings are deduplicated and stored in SQLite via SQLAlchemy ORM.',
      },
      {
        step: '05',
        title: 'Visual Triage & ReportLab PDF Compilation',
        detail: 'Analysts inspect distributions in React 19 (Recharts) and export formatted executive PDF reports generated programmatically with ReportLab.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'SHA-256 integrity hashing at ingestion boundary',
        rationale:
          'Security reporting requires provable evidence that imported scan files were not altered between collection and executive report generation.',
        tradeoff:
          'Adds initial hashing compute before parsing large XML payloads.',
      },
      {
        decision: 'Programmatic PDF generation with ReportLab instead of browser print-to-PDF',
        rationale:
          'Browser print stylesheets break pagination on dense vulnerability tables. ReportLab provides deterministic page breaks, severity tables, and executive summaries.',
        tradeoff:
          'Requires maintaining a dedicated Python layout specification in FastAPI.',
      },
      {
        decision: 'SQLite + SQLAlchemy local relational store with ThreadPoolExecutor',
        rationale:
          'Provides self-contained, zero-dependency deployment for assessment workbenches while handling concurrent file inspection.',
        tradeoff:
          'Designed for single-team assessment batches rather than high-concurrency distributed cloud clusters.',
      },
    ],
    limitationsAndScope: [
      'Documented through a 100+ page formal academic technical report; no public GitHub repository or public hosted demo is published.',
      'Ingests structured outputs from Nmap (XML) and OWASP ZAP (XML/CSV); does not replace the underlying network scanners themselves.',
      'SQLite storage is optimised for portable assessment engagements rather than multi-tenant cloud SaaS.',
    ],
    keyLessons: [
      'The hardest part of technical reporting is rarely collecting raw data—it is normalising incompatible schemas and removing duplicates with verifiable integrity.',
      'Automated PDF generation turns hours of manual document formatting into a repeatable, error-free engineering step.',
    ],
    evidenceArtifacts: [
      {
        title: 'Formal Technical Report Specification (100+ Pages) — Ingestion & Normalization Schema',
        type: 'report-specification',
        caption: 'Documented architecture from the SentinelX technical report detailing multi-source ingestion, SHA-256 integrity verification, and 5-level severity mapping.',
        codeOrSpec: `Documented SentinelX Pipeline Specification (From 100+ Page Technical Report):
├── Ingestion Formats      : Nmap XML (.xml), OWASP ZAP XML (.xml), OWASP ZAP CSV (.csv)
├── Integrity Layer        : SHA-256 digest calculated & stored per uploaded scan artifact
├── Execution Model        : Python FastAPI + concurrent.futures.ThreadPoolExecutor
├── Persistence Layer      : SQLite relational database managed via SQLAlchemy ORM
├── Severity Taxonomy      : 5 Normalized Levels (Critical · High · Medium · Low · Info)
├── Deduplication Logic    : Composite key matching across target host, port, endpoint & alert signature
└── Reporting Outputs      : React 19 + Recharts visual dashboard & ReportLab Executive PDF`,
      },
    ],
  },
  {
    slug: 'decoding-customer-value',
    priorityOrder: 3,
    tier: 'featured',
    tierLabel: 'Featured Project 03',
    indexNumber: '03',
    title: 'Decoding Customer Value',
    subtitle: 'Customer Segmentation, Promotional Dependency Analysis & Retention Playbook',
    category: 'Data Analytics, SQL and Business Intelligence',
    domain: 'data-intelligence',
    projectClassification: 'End-to-End Analytics & Business Intelligence Case Study (Not a Web App)',
    documentedRole: 'Lead Product Analyst',
    collaborators: 'Co-authored with Bhumika Singhal',
    attributionNote:
      'Co-authored with Bhumika Singhal as Lead Product Analyst. Publicly documented in the IITG Decoding Customer Value repository.',
    problemSummary:
      'Businesses frequently assume that high purchase spend or transaction volume automatically reflects organic customer loyalty—masking heavy promotional dependency.',
    businessContext:
      'For D2C, retail, and e-commerce operators, treating discount-driven buyers the same as organically loyal customers leads to wasted margin and misdirected retention campaigns.',
    solutionSummary:
      'A rigorous analytics case study across a 3,900-record dataset combining Python (Pandas, NumPy) data cleaning and feature engineering, structured SQL cohort queries, an interactive Power BI dashboard, an Executive Summary, and a practical Retention Playbook.',
    verifiedStack: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Power BI',
      'Jupyter Notebook',
    ],
    verifiedElements: [
      'Analysis of a 3,900-record customer transaction dataset',
      'Data cleaning, validation, and missing-value treatment in Python (Pandas/NumPy)',
      'Feature engineering for purchase behaviour and promotional usage',
      'Multi-dimensional customer segmentation',
      'Structured SQL analytical queries',
      'Interactive Power BI dashboard design',
      'Actionable Retention Playbook and Executive Summary',
    ],
    deliverables: [
      'Cleaned & validated analytical dataset (3,900 records)',
      'Jupyter Notebook feature engineering & segmentation workflow',
      'SQL analysis scripts examining spend vs. discount reliance',
      'Interactive Power BI (.pbix) dashboard',
      'Executive Summary & Customer Retention Playbook',
    ],
    githubUrl: 'https://github.com/akshit-sukhija/IITG_Decoding_Customer_Value_Akshit_Bhumika',
    evidenceNote:
      'Complete analytics case study (Python, SQL, Power BI, Retention Playbook) available on GitHub. All findings are specific to the 3,900-record analyzed dataset.',
    architectureSummary:
      'This project is an analytical investigation and BI workflow—not a web application. Raw customer records (n = 3,900) undergo programmatic validation and feature engineering in Python, structured interrogation in SQL, visual synthesis in Power BI, and translation into commercial retention actions.',
    architectureNodes: [
      {
        id: 'dcv-1',
        label: 'Raw Customer Dataset',
        sublabel: '3,900 transaction & demographic records',
        layer: 'input',
      },
      {
        id: 'dcv-2',
        label: 'Python & SQL Engineering',
        sublabel: 'Pandas/NumPy cleaning + Feature engineering + SQL queries',
        layer: 'processing',
      },
      {
        id: 'dcv-3',
        label: 'Power BI Segmentation',
        sublabel: 'Spend vs. Promotional Dependency visual analysis',
        layer: 'verification',
      },
      {
        id: 'dcv-4',
        label: 'Retention Playbook',
        sublabel: 'Executive Summary + Segment-specific business actions',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Data Cleaning & Schema Validation (3,900 Records)',
        detail: 'Audited 3,900 customer records in Python using Pandas and NumPy to verify data types, distributions, and category consistency.',
      },
      {
        step: '02',
        title: 'Feature Engineering & Behavioural Framing',
        detail: 'Constructed composite behavioural indicators combining purchase value, frequency, subscription status, and discount/promo code usage.',
      },
      {
        step: '03',
        title: 'SQL Cohort & Segment Interrogation',
        detail: 'Executed structured SQL queries to test whether high-spend segments were genuinely loyal or reliant on promotional triggers.',
      },
      {
        step: '04',
        title: 'Power BI Interactive Dashboarding',
        detail: 'Built visual slices for decision-makers to compare customer segments across categories, payment habits, and promotional sensitivity.',
      },
      {
        step: '05',
        title: 'Retention Playbook & Executive Summary',
        detail: 'Translated analytical findings into concrete retention strategies tailored to each segment’s actual price/promo sensitivity.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Separating purchase spend from organic loyalty via promotional dependency analysis',
        rationale:
          'Relying on gross spend alone misclassifies promo-reliant buyers as loyal advocates. Cross-tabulating spend with discount usage reveals true retention risk.',
        tradeoff:
          'Requires granular promo/discount flags in the underlying transaction records.',
      },
      {
        decision: 'Combining SQL + Python notebooks with a Power BI deliverable',
        rationale:
          'Python and SQL ensure reproducible data preparation and statistical rigour, while Power BI gives non-technical stakeholders an interactive exploration view.',
        tradeoff:
          'Static snapshot dataset rather than a live streaming data warehouse connection.',
      },
    ],
    limitationsAndScope: [
      'All documented findings—including promotional dependency differences across segments—are specific to the 3,900-record dataset analyzed and must not be generalised as universal retail laws without re-running on a client’s own data.',
      'This is an analytics and business intelligence case study, not a hosted web application.',
      'Cross-sectional snapshot data restricts longitudinal multi-year churn survival modelling.',
    ],
    keyLessons: [
      'High transaction value does not automatically equal organic customer loyalty; promotional dependency must be measured explicitly.',
      'Dashboards only create business value when paired with an actionable playbook that tells operators what to do differently for each segment.',
    ],
    evidenceArtifacts: [
      {
        title: 'SQL Segment Verification & Promotional Dependency Analysis (n = 3,900 Dataset)',
        type: 'sql-excerpt',
        caption: 'Representative SQL analytical pattern used to evaluate purchase spend alongside promotional/discount reliance across the 3,900-record dataset.',
        datasetOrHardwareCondition: 'Dataset-specific finding: Evaluated on the 3,900-record customer behaviour dataset.',
        codeOrSpec: `-- Analytical Pattern: Evaluating Spend vs. Promotional Dependency (n = 3,900 records)
SELECT
    customer_segment,
    COUNT(customer_id) AS customer_count,
    ROUND(AVG(purchase_amount_usd), 2) AS avg_purchase_value,
    ROUND(AVG(previous_purchases), 1) AS avg_prior_orders,
    ROUND(
      100.0 * SUM(CASE WHEN discount_applied = 'Yes' OR promo_code_used = 'Yes' THEN 1 ELSE 0 END)
      / COUNT(*),
      1
    ) AS promo_dependency_pct
FROM customer_shopping_behavior
GROUP BY customer_segment
ORDER BY avg_purchase_value DESC;

-- Key Analytical Takeaway (Specific to the 3,900-record dataset):
-- Purchase value alone is an insufficient proxy for organic loyalty when segments exhibit
-- markedly different promotional dependency rates.`,
      },
    ],
  },
  {
    slug: 'contract-risk-governance',
    priorityOrder: 4,
    tier: 'secondary',
    tierLabel: 'Secondary Project 04',
    indexNumber: '04',
    title: 'Contract Risk Governance Engine / Nexus Governance OS',
    subtitle: 'Deterministic Rule Compliance Paired with Local Hardware-Accelerated AI Explanations',
    category: 'Applied AI and Risk Governance',
    domain: 'ai-automation',
    projectClassification: 'Applied AI & Governance Architecture Prototype',
    documentedRole: 'System Architecture Lead',
    collaborators: 'System Architecture Lead',
    attributionNote: 'Documented role: System Architecture Lead. Public source available on GitHub.',
    problemSummary:
      'Using generative AI alone to evaluate contract compliance introduces hallucination risks and non-deterministic audit trails.',
    businessContext:
      'Legal and operational contract reviews require strict, reproducible compliance rules while still benefiting from plain-language narrative explanations.',
    solutionSummary:
      'A governance engine built with Python, FastAPI, Streamlit, FAISS, ONNX Runtime, DirectML, and SHA-256 where deterministic rules evaluate compliance while AI assists strictly with narrative explanation.',
    verifiedStack: [
      'Python',
      'FastAPI',
      'Streamlit',
      'FAISS',
      'ONNX Runtime',
      'DirectML',
      'SHA-256',
    ],
    verifiedElements: [
      'Deterministic rule engine owns all compliance pass/fail evaluations',
      'AI layer restricted to generating narrative explanations of deterministic findings',
      'FAISS vector indexing for clause retrieval',
      'ONNX Runtime + DirectML local hardware execution path',
      '~420ms explanation latency benchmarked specifically on AMD Ryzen AI hardware using DirectML',
      'SHA-256 cryptographic audit hashing',
    ],
    deliverables: [
      'Deterministic compliance rule evaluator',
      'FAISS clause retrieval & ONNX Runtime / DirectML inference pipeline',
      'SHA-256 audit verification layer',
      'FastAPI service + Streamlit governance workbench',
    ],
    githubUrl: 'https://github.com/akshit-sukhija/contract-risk-governance',
    evidenceNote:
      'Source repository on GitHub. Note: The ~420ms explanation latency is a specific benchmark recorded on AMD Ryzen AI hardware using DirectML and does not generalise to all hardware configurations.',
    architectureSummary:
      'Compliance decisions are never delegated to probabilistic prompts. Deterministic rules evaluate contract clauses first, SHA-256 seals the evaluation state, and ONNX Runtime with DirectML generates human-readable explanations.',
    architectureNodes: [
      {
        id: 'crg-1',
        label: 'Contract Clauses',
        sublabel: 'Ingested document segments + FAISS index',
        layer: 'input',
      },
      {
        id: 'crg-2',
        label: 'Deterministic Rule Engine',
        sublabel: 'Strict compliance evaluation + SHA-256 hash',
        layer: 'verification',
      },
      {
        id: 'crg-3',
        label: 'ONNX Runtime + DirectML',
        sublabel: 'Narrative explanation generation (~420ms on AMD Ryzen AI)',
        layer: 'processing',
      },
      {
        id: 'crg-4',
        label: 'Streamlit Audit View',
        sublabel: 'Rule verdict + narrative explanation + hash proof',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Clause Indexing & SHA-256 Fingerprinting',
        detail: 'Contract sections are indexed with FAISS and fingerprinted with SHA-256 for audit traceability.',
      },
      {
        step: '02',
        title: 'Deterministic Compliance Evaluation',
        detail: 'Explicit governance rules evaluate clause compliance—ensuring zero probabilistic drift in risk verdicts.',
      },
      {
        step: '03',
        title: 'Hardware-Accelerated Narrative Explanation',
        detail: 'ONNX Runtime with DirectML generates concise explanations (~420ms benchmarked specifically on AMD Ryzen AI hardware).',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Strict separation between deterministic compliance rules and AI explanation',
        rationale:
          'Business and governance logic cannot depend on stochastic model outputs. Rules decide; AI explains.',
        tradeoff:
          'Rule sets must be explicitly authored for each compliance domain.',
      },
    ],
    limitationsAndScope: [
      'The ~420ms explanation latency is a hardware-specific benchmark measured on AMD Ryzen AI hardware using DirectML; latency varies on CPU-only or other GPU targets.',
      'Designed as a technical governance architecture and prototype rather than legal counsel.',
    ],
    keyLessons: [
      'High-trust AI systems succeed when deterministic rules own the verdict and language models translate that verdict for humans.',
    ],
    evidenceArtifacts: [
      {
        title: 'Hardware-Specific Benchmark & Rule-First Governance Contract',
        type: 'benchmark-note',
        caption: 'Strict architectural boundary between rule evaluation and ONNX Runtime / DirectML explanation.',
        datasetOrHardwareCondition:
          'Hardware condition: ~420ms explanation latency benchmarked specifically on AMD Ryzen AI hardware using DirectML.',
        codeOrSpec: `Governance Execution Boundary:
1. Rule Verdict       : Deterministic policy rules evaluate clause compliance (Pass / Flag / Breach)
2. Audit Integrity    : SHA-256 digest generated over input clause + deterministic rule state
3. Retrieval Context  : FAISS similarity lookup for relevant policy reference
4. Narrative Assist   : ONNX Runtime + DirectML generates human-readable explanation
   └── Benchmark Note : ~420ms explanation latency on AMD Ryzen AI hardware via DirectML`,
      },
    ],
  },
  {
    slug: 'lureline',
    priorityOrder: 5,
    tier: 'secondary',
    tierLabel: 'Secondary Project 05',
    indexNumber: '05',
    title: 'Lureline',
    subtitle: 'Cybersecurity Analytics and Investigation Workbench',
    category: 'Cybersecurity Analytics and Investigation Workbench',
    domain: 'custom-systems',
    projectClassification: 'Solo Competition Prototype · Live Demo with Synthetic Fixtures',
    documentedRole: 'Solo Developer',
    collaborators: 'Built independently (Solo Developer)',
    attributionNote: 'Built independently by Akshit as Solo Developer for Orcathon 2026.',
    problemSummary:
      'Security analysts inspecting suspicious telemetry streams need an interactive investigation workbench to filter signals, trace event timelines, and inspect indicators rapidly.',
    businessContext:
      'Demonstrates rapid full-stack prototyping of a dense analytical investigation interface with TypeScript, Vite, Express, and Vercel.',
    solutionSummary:
      'An interactive cybersecurity analytics and investigation workbench built with TypeScript, Vite, Express, and deployed on Vercel, using synthetic event stream fixtures to demonstrate triage workflows.',
    verifiedStack: ['TypeScript', 'Vite', 'Express', 'Vercel'],
    verifiedElements: [
      'Interactive investigation workbench UI built in TypeScript and Vite',
      'Express backend integration',
      'Live Vercel deployment',
      'Demonstration event streams powered by synthetic fixtures',
    ],
    deliverables: [
      'Interactive investigation workbench frontend',
      'Synthetic telemetry stream fixtures for repeatable demonstration',
      'Live Vercel deployment & GitHub repository',
    ],
    liveDemoUrl: 'https://lureline-orcathon-2026.vercel.app/',
    githubUrl: 'https://github.com/akshit-sukhija/lureline-orcathon-2026',
    evidenceNote:
      'Live Vercel demo and public GitHub repository. Demonstration event streams use synthetic fixtures rather than live production network traffic.',
    architectureSummary:
      'A lightweight TypeScript + Vite + Express workbench structured to demonstrate security event inspection, correlation views, and analyst triage flows over deterministic synthetic telemetry fixtures.',
    architectureNodes: [
      {
        id: 'll-1',
        label: 'Synthetic Event Fixtures',
        sublabel: 'Curated demonstration security telemetry',
        layer: 'input',
      },
      {
        id: 'll-2',
        label: 'Express & State Engine',
        sublabel: 'Event filtering & timeline correlation',
        layer: 'processing',
      },
      {
        id: 'll-3',
        label: 'Analyst Workbench UI',
        sublabel: 'Interactive triage & signal inspection',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Synthetic Fixture Ingestion',
        detail: 'Loads structured synthetic security event streams to simulate realistic investigation scenarios safely.',
      },
      {
        step: '02',
        title: 'Interactive Signal Triage',
        detail: 'Analysts filter, inspect, and correlate suspicious events inside a responsive TypeScript workbench.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Explicit use of synthetic event fixtures for public demonstration',
        rationale:
          'Allows anyone reviewing the live Vercel deployment to test investigation workflows immediately without exposing sensitive network logs.',
        tradeoff:
          'Simulated telemetry stream rather than a live packet capture agent.',
      },
    ],
    limitationsAndScope: [
      'Demonstration event streams use synthetic fixtures; it is an investigation workbench prototype built for Orcathon 2026, not a live production SIEM.',
    ],
    keyLessons: [
      'Clear visual hierarchy and responsive filtering turn noisy event logs into a navigable investigation workflow.',
    ],
    evidenceArtifacts: [
      {
        title: 'Synthetic Telemetry Workbench Specification',
        type: 'interactive-preview',
        caption: 'Solo-developed TypeScript + Express investigation interface deployed on Vercel using synthetic event fixtures.',
        datasetOrHardwareCondition: 'Data condition: Demonstration event streams use synthetic fixtures.',
        codeOrSpec: `Workbench Scope & Disclosure:
├── Role              : Solo Developer (Orcathon 2026)
├── Stack             : TypeScript · Vite · Express · Vercel
├── Telemetry Source  : Deterministic synthetic event fixtures (safe public demo)
└── Core Capability   : High-density event filtering, timeline inspection & analyst triage UI`,
      },
    ],
  },
];

export const ADDITIONAL_ANALYTICAL_PROOF = {
  title: 'OTT Viewer Retention Analysis',
  category: 'Data Analytics & Cohort Retention Study',
  summary:
    'Supporting analytical study examining viewer drop-off patterns, content engagement windows, and retention indicators to inform subscription and content scheduling decisions.',
  connectionToService: 'Service 01: Business Data & Insights',
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'business-data-insights',
    number: '01',
    title: 'Business Data & Insights',
    domain: 'data-intelligence',
    targetAudience: 'For businesses that have sales, customer or operational data but lack clarity.',
    problemStatement:
      'Many growing Indian businesses collect thousands of rows of orders, invoices, or customer records across spreadsheets and billing tools, yet struggle to see which customer segments truly drive repeat value or where operational leakage occurs.',
    description:
      'I take raw, messy spreadsheets or database exports, clean and validate the records using Python and SQL, and deliver clear customer segmentation, interactive Power BI dashboards, and plain-language insight documents your team can act on immediately.',
    deliverables: [
      'Data cleaning and validation',
      'Python and SQL analysis',
      'Customer segmentation',
      'Power BI dashboards',
      'Business performance reporting',
      'Actionable insight documents',
    ],
    exampleScenarios: [
      {
        businessType: 'D2C & E-Commerce Brand',
        challenge: 'High gross sales during discount campaigns, but unclear which buyers return organically versus waiting for coupon codes.',
        practicalSolution: 'Customer segmentation and promotional dependency audit with a Power BI dashboard and retention playbook.',
      },
      {
        businessType: 'Growing SMB / Operations Team',
        challenge: 'Monthly performance tracking requires stitching together multiple messy Excel exports manually.',
        practicalSolution: 'Validated data preparation script and a structured Power BI reporting view for leadership.',
      },
    ],
    portfolioProof: [
      {
        title: 'Decoding Customer Value',
        slug: 'decoding-customer-value',
        summary: '3,900-record Python, SQL & Power BI case study uncovering promotional dependency differences across customer segments.',
      },
      {
        title: 'OTT Viewer Retention Analysis',
        summary: 'Analytical study of viewer retention and engagement drop-off dynamics.',
      },
    ],
  },
  {
    id: 'ai-workflow-automation',
    number: '02',
    title: 'AI & Workflow Automation',
    domain: 'ai-automation',
    targetAudience: 'For businesses that spend unnecessary time processing documents, information or repetitive workflows.',
    problemStatement:
      'Teams lose hours every week reading routine PDFs, circulars, contracts, or incoming forms—copying dates, checking compliance rules by hand, and risking costly human oversight.',
    description:
      'I design practical automation pipelines that combine deterministic business rules with AI-assisted extraction. Deterministic code handles dates, math, and policy validation, while AI helps structure messy text into clean notifications, calendars, or structured tables.',
    deliverables: [
      'Document information extraction',
      'Workflow automation',
      'Rule-based validation',
      'AI-assisted information processing',
      'Custom reporting',
      'Notifications and structured data outputs',
    ],
    exampleScenarios: [
      {
        businessType: 'Educational or Operational Institution',
        challenge: 'Important schedules, deadlines, and corrigenda arrive inside unstructured circulars, causing clashes.',
        practicalSolution: 'Automated extraction and deterministic clash-detection workflow with standard calendar exports.',
      },
      {
        businessType: 'Consulting or Compliance-Heavy Practice',
        challenge: 'Reviewing standard document clauses against internal checklists takes repetitive manual effort.',
        practicalSolution: 'Rule-backed validation pipeline where deterministic checks flag issues and AI drafts clear review summaries.',
      },
    ],
    portfolioProof: [
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary: 'Hybrid Qwen2.5-7B-Instruct + deterministic date/time clash detector with Notice Change Radar and RFC 5545 .ics export.',
      },
      {
        title: 'Contract Risk Governance Engine',
        slug: 'contract-risk-governance',
        summary: 'Rule-backed governance system where deterministic rules evaluate compliance and AI assists with narrative explanation.',
      },
    ],
  },
  {
    id: 'custom-digital-tools',
    number: '03',
    title: 'Custom Digital Tools & Prototypes',
    domain: 'custom-systems',
    targetAudience: 'For founders and businesses that need a working digital tool to solve a specific operational problem.',
    problemStatement:
      'Off-the-shelf SaaS subscriptions are often too rigid for a specific internal workflow, while hiring a multi-person software agency is too slow and expensive for an early-stage idea or focused internal tool.',
    description:
      'I build focused web application prototypes, internal dashboards, backend APIs, multi-file data ingestion tools, and automated PDF report generators tailored to your exact workflow.',
    deliverables: [
      'Custom dashboards',
      'Internal business tools',
      'Web application prototypes',
      'Backend APIs',
      'Data processing systems',
      'Automated PDF reporting',
    ],
    exampleScenarios: [
      {
        businessType: 'Technical Consultancy or Assessment Team',
        challenge: 'Consolidating XML/CSV outputs from multiple diagnostic tools into a single client-ready PDF report takes hours.',
        practicalSolution: 'Custom FastAPI + React ingestion workbench with deduplication and one-click ReportLab PDF generation.',
      },
      {
        businessType: 'Early-Stage Startup Founder',
        challenge: 'Needs a functional, demonstrable product prototype to test a workflow with initial users or stakeholders.',
        practicalSolution: 'Scoped full-stack web prototype built in React, TypeScript, and Python/Express around core user journeys.',
      },
    ],
    portfolioProof: [
      {
        title: 'SentinelX',
        slug: 'sentinelx',
        summary: 'FastAPI, React 19, SQLite & ReportLab system for multi-tool XML/CSV ingestion, SHA-256 verification, and executive PDF reporting.',
      },
      {
        title: 'Lureline',
        slug: 'lureline',
        summary: 'Solo-developed TypeScript + Express investigation workbench deployed on Vercel.',
      },
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary: 'End-to-end React + Express product deployed live on Render.',
      },
    ],
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Understand the problem',
    description:
      'You describe the operational bottleneck, messy dataset, or product idea in plain business language—no need to pick programming languages or frameworks.',
  },
  {
    step: '02',
    title: 'Review available data, documents or existing workflows',
    description:
      'We inspect sample spreadsheets, PDFs, or current manual steps to see what is realistically achievable and whether a simpler approach solves the problem.',
  },
  {
    step: '03',
    title: 'Define a realistic scope and deliverables',
    description:
      'Instead of pushing a bloated development contract, I recommend the right-sized deliverable—including small paid pilots where appropriate.',
  },
  {
    step: '04',
    title: 'Share a customised proposal and quote',
    description:
      'You receive a clear written scope, concrete deliverables, and a transparent INR quote based on complexity, data readiness, and timeline.',
  },
  {
    step: '05',
    title: 'Build, review and deliver the agreed solution',
    description:
      'Direct collaboration with the person actually doing the engineering and analysis, followed by walkthroughs, revisions, and clean handover documentation.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    stepNumber: '01',
    title: 'Initial Discussion',
    clientExperience:
      'We start with your business context—what is slowing down your team, what decisions feel unclear, or what tool you wish existed.',
    whatYouProvide: 'A plain-language explanation of the problem and the outcome you want to achieve.',
    whatYouReceive: 'An honest initial assessment of whether the problem is best solved with data analysis, workflow automation, a custom tool, or a small pilot.',
    keyPrinciple: 'No technical jargon required. You never have to choose between React, Python, or SQL.',
  },
  {
    stepNumber: '02',
    title: 'Problem & Requirements Review',
    clientExperience:
      'Before quoting or promising timelines, I review a sample of your actual data, documents, or existing workflow steps.',
    whatYouProvide: 'Sample spreadsheets, anonymised records, example PDFs, or a walkthrough of your current manual process.',
    whatYouReceive: 'Identification of data quality constraints, edge cases, and the simplest reliable technical path.',
    keyPrinciple: 'I never recommend a large software build when a targeted analysis or lightweight script will solve the problem.',
  },
  {
    stepNumber: '03',
    title: 'Scope & Proposal',
    clientExperience:
      'We lock down exactly what will be built or analysed, how it will be verified, and what the final deliverable looks like.',
    whatYouProvide: 'Feedback on the proposed milestones and confirmation of priorities.',
    whatYouReceive: 'A customised written proposal with explicit deliverables, realistic milestones, and a scope-based INR quote (including small paid pilot options where suitable).',
    keyPrinciple: 'Pricing reflects actual complexity, data availability, and deliverables—never arbitrary fixed-tier bloat.',
  },
  {
    stepNumber: '04',
    title: 'Development or Analysis',
    clientExperience:
      'I execute the data cleaning, SQL/Python analysis, automation pipeline, or full-stack prototype directly—with checkpoint updates showing real working artifacts.',
    whatYouProvide: 'Timely answers to domain questions as edge cases surface in your data or workflow.',
    whatYouReceive: 'Direct communication with the person doing the work—no account managers or handoff distortion.',
    keyPrinciple: 'Deterministic rules handle critical business logic; AI is used responsibly where it genuinely adds speed or structure.',
  },
  {
    stepNumber: '05',
    title: 'Review & Revisions',
    clientExperience:
      'We walk through the dashboard, insights report, or working tool together against your real operational scenarios.',
    whatYouProvide: 'Practical feedback from testing the deliverable against your day-to-day workflow.',
    whatYouReceive: 'Refinements within the agreed scope so the final output fits how your team actually works.',
    keyPrinciple: 'Deliverables are judged by operational usefulness, not just technical novelty.',
  },
  {
    stepNumber: '06',
    title: 'Final Handover & Documentation',
    clientExperience:
      'You receive the completed dashboard, codebase, analytical playbook, or automation workflow along with clear usage documentation.',
    whatYouProvide: 'Final sign-off once the agreed deliverables are verified.',
    whatYouReceive: 'Source files, clean documentation, and clear instructions so your business owns and understands the solution.',
    keyPrinciple: 'Every engagement ends with structured documentation so you are never locked into a black box.',
  },
];

export const INSIGHT_NOTES: InsightNote[] = [
  {
    id: 'revenue-vs-customer-loyalty',
    number: '01',
    title: 'Why Revenue Alone Does Not Always Indicate Organic Customer Loyalty',
    category: 'Data Analytics & Retention',
    readTime: '4 min read',
    groundedInProject: 'Decoding Customer Value (3,900-record study)',
    groundedProjectSlug: 'decoding-customer-value',
    thesis:
      'When businesses rank customers purely by total spend or order count, they often conflate promotion-triggered buying with genuine brand loyalty.',
    keyTakeaways: [
      'In our 3,900-record customer behaviour case study, high-spend cohorts included segments with heavy reliance on discount codes and promotional triggers.',
      'Treating discount-dependent buyers identically to organic repeat buyers erodes margin through unnecessary couponing.',
      'Pairing SQL cohort queries with explicit promotional-dependency flags lets D2C and retail teams design separate playbooks for organic advocates versus promo-sensitive buyers.',
    ],
    practicalImplicationForSMBs:
      'Before launching a blanket loyalty discount, segment your historical order sheet by how often each customer required a promo code to convert.',
    technicalBreakdown: [
      'Clean raw transaction exports in Python (Pandas/NumPy) to standardise discount and promo indicators.',
      'Cross-tabulate average order value (AOV) and repeat purchase frequency against promotional usage rates in SQL.',
      'Surface segment-level retention playbooks alongside Power BI views so merchandising teams can act on the numbers.',
    ],
  },
  {
    id: 'deterministic-extraction-document-automation',
    number: '02',
    title: 'Designing Deterministic Extraction for Document Automation',
    category: 'AI & Workflow Engineering',
    readTime: '5 min read',
    groundedInProject: 'Notice Decoder',
    groundedProjectSlug: 'notice-decoder',
    thesis:
      'Language models are helpful at summarising messy circulars, but calendar math, date anchoring, and clash detection should always remain deterministic.',
    keyTakeaways: [
      'Unstructured institutional PDFs and notices mix prose with critical deadlines, revised timings, and overlapping schedules.',
      'In Notice Decoder, Qwen2.5-7B-Instruct (via Featherless API) structures semantic fields while deterministic local extraction anchors dates and computes interval overlaps.',
      'Tracking document revisions (Notice Change Radar) is essential when operational teams issue corrigenda or updated schedules.',
    ],
    practicalImplicationForSMBs:
      'When automating document workflows, never ask an AI prompt to calculate date collisions or financial totals on its own—use code for math and AI for text structuring.',
    technicalBreakdown: [
      'Extract explicit date and time tokens deterministically prior to downstream schedule evaluation.',
      'Run interval intersection logic ((StartA < EndB) && (StartB < EndA)) to flag clashes reliably.',
      'Export verified schedules using standard RFC 5545 (.ics) structures so users can import events into any calendar tool.',
    ],
  },
  {
    id: 'evidence-backed-reporting-systems',
    number: '03',
    title: 'Building Evidence-Backed Multi-Tool Reporting Systems',
    category: 'Systems & Custom Tools',
    readTime: '5 min read',
    groundedInProject: 'SentinelX (100+ page technical report)',
    groundedProjectSlug: 'sentinelx',
    thesis:
      'When diagnostic or security tools produce fragmented XML and CSV outputs, automation must preserve artifact integrity while normalising incompatible schemas.',
    keyTakeaways: [
      'Manual consolidation of Nmap XML and OWASP ZAP XML/CSV outputs introduces human copy-paste errors and inconsistent severity labels.',
      'Recording a SHA-256 hash at the file ingestion boundary guarantees that every normalized finding traces back to an unaltered source file.',
      'Using Python ThreadPoolExecutor for concurrent inspection and ReportLab for programmatic PDF compilation turns hours of manual report formatting into a repeatable pipeline.',
    ],
    practicalImplicationForSMBs:
      'If your team spends every Friday combining CSV/XML exports into client PDF reports, a dedicated Python + React ingestion pipeline can standardise and generate those reports automatically.',
    technicalBreakdown: [
      'Verify uploaded artifacts with SHA-256 digests before parsing.',
      'Map heterogeneous source fields into a unified 5-level severity taxonomy in SQLAlchemy / SQLite.',
      'Deduplicate overlapping records and compile structured executive PDFs via ReportLab.',
    ],
  },
  {
    id: 'ai-without-surrendering-business-logic',
    number: '04',
    title: 'Using AI Without Surrendering Business Logic',
    category: 'Applied AI & Governance',
    readTime: '4 min read',
    groundedInProject: 'Contract Risk Governance Engine / Nexus Governance OS',
    groundedProjectSlug: 'contract-risk-governance',
    thesis:
      'In compliance and risk workflows, deterministic rules must own the pass/fail decision while AI is restricted to generating human-readable narrative explanations.',
    keyTakeaways: [
      'Delegating compliance verdicts directly to an LLM makes audits non-reproducible.',
      'In the Contract Risk Governance Engine, deterministic rules evaluate compliance first and SHA-256 hashes seal the state; AI assists only with narrative explanation.',
      'Local hardware acceleration (such as ONNX Runtime with DirectML, benchmarked at ~420ms explanation latency specifically on AMD Ryzen AI hardware) shows how explanation layers can run within strict boundaries.',
    ],
    practicalImplicationForSMBs:
      'Keep your business rules, pricing thresholds, and compliance checks in explicit code—then use AI to summarize the result clearly for your team or clients.',
    technicalBreakdown: [
      'Encode non-negotiable policy checks as deterministic rules.',
      'Index reference clauses with FAISS for fast retrieval.',
      'Generate narrative explanations only after the deterministic verdict is locked.',
    ],
  },
  {
    id: 'turning-raw-data-into-operational-decisions',
    number: '05',
    title: 'Turning Raw Operational Data into Practical Decisions',
    category: 'Product & Analytical Thinking',
    readTime: '3 min read',
    groundedInProject: 'Cross-Portfolio Synthesis',
    groundedProjectSlug: 'decoding-customer-value',
    thesis:
      'A dashboard or prototype is only useful if it changes what a business operator actually does on Monday morning.',
    keyTakeaways: [
      'Small businesses rarely need complex enterprise infrastructure; they need clean data, clear visibility, and a tool that removes a specific bottleneck.',
      'Starting with a problem-first review of existing spreadsheets or documents prevents over-engineering.',
      'Combining data analytics, workflow automation, and custom web tools allows one independent operator to deliver a complete, connected solution.',
    ],
    practicalImplicationForSMBs:
      'Start with a focused review of the data or workflow you already have—often a targeted analysis or small pilot clarifies the highest-value next step.',
    technicalBreakdown: [
      'Audit existing spreadsheets, PDFs, or manual steps before writing application code.',
      'Validate findings with transparent SQL/Python logic.',
      'Deliver either an actionable playbook, an automated workflow, or a focused web tool depending on what solves the problem most directly.',
    ],
  },
];

export const SKILLS_MATRIX = [
  {
    category: 'Data',
    summary: 'Cleaning messy datasets, writing analytical SQL, engineering behavioural features, and designing decision-ready BI dashboards.',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI'],
    appliedIn: 'Decoding Customer Value (3,900 records), OTT Viewer Retention Analysis',
  },
  {
    category: 'AI',
    summary: 'Combining LLM-assisted text structuring and retrieval with deterministic validation rules so business logic stays reliable.',
    skills: ['Applied AI', 'NLP', 'Prompt Design', 'Rule-Backed Automation'],
    appliedIn: 'Notice Decoder, Contract Risk Governance Engine',
  },
  {
    category: 'Development',
    summary: 'Building responsive full-stack web tools, concurrent data ingestion backends, relational schemas, and automated PDF generators.',
    skills: ['React', 'TypeScript', 'FastAPI', 'Streamlit', 'SQLite'],
    appliedIn: 'Notice Decoder, SentinelX, Lureline',
  },
  {
    category: 'Product',
    summary: 'Translating ambiguous operational problems into scoped system architectures, functional prototypes, and thorough technical documentation.',
    skills: ['Research', 'Prototyping', 'Workflows', 'Technical Documentation'],
    appliedIn: 'SentinelX (100+ page report), Retention Playbook, System Architecture Designs',
  },
];

export const VERIFIED_ACADEMIC_RECORD = {
  cgpa: '9.10 / 10',
  aggregatePercentage: '85.026%',
  semesterSgpas: [
    { semester: 'Semester I', sgpa: '9.50' },
    { semester: 'Semester II', sgpa: '8.81' },
    { semester: 'Semester III', sgpa: '9.10' },
    { semester: 'Semester IV', sgpa: '8.96' },
  ],
  contextNote:
    'Included as supporting evidence of analytical discipline and consistency. My primary focus for clients is delivering practical, well-engineered digital solutions.',
};

export const PROBLEM_CATEGORIES = [
  'Understand my business data',
  'Automate a repetitive workflow',
  'Build a dashboard or internal tool',
  'Develop an AI-assisted solution',
  'Prototype a product idea',
  'Not sure yet, need help defining the solution',
] as const;

export const BUDGET_CHOICES_INR = [
  'Below ₹2,500',
  '₹2,500–₹5,000',
  '₹5,000–₹10,000',
  '₹10,000–₹25,000',
  '₹25,000+',
  'Need a custom estimate',
] as const;

export const TIMELINE_OPTIONS = [
  'Within 1–2 weeks (Focused analysis / small pilot)',
  '2–4 weeks (Standard dashboard / workflow / prototype)',
  '1–2 months (Multi-part system or deeper scope)',
  'Flexible — depends on scope review',
] as const;
