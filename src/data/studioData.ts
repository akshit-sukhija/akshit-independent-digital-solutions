export type ProjectTier = 'flagship' | 'featured' | 'secondary';
export type CapabilityDomain = 'ai-automation' | 'data-intelligence' | 'custom-systems';

export interface ProjectStep {
  step: string;
  title: string;
  detail: string;
  technicalDetail?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel: string;
  plainTitle: string;
  plainDescription: string;
  layer: 'input' | 'processing' | 'verification' | 'output';
}

export interface PlainFeatureExplanation {
  plain: string;
  technical: string;
}

export interface ProjectData {
  slug: string;
  priorityOrder: number;
  tier: ProjectTier;
  tierLabel: string;
  indexNumber: string;
  title: string;
  subtitle: string;
  plainSubtitle: string;
  category: string;
  domain: CapabilityDomain;
  projectClassification: string;
  evidenceTypeLabel: string;
  visualAccent: string;
  documentedRole: string;
  collaborators: string;
  attributionNote: string;
  problemSummary: string;
  businessContext: string;
  approachSummary: string;
  solutionSummary: string;
  resultSummary: string;
  plainFeatures: PlainFeatureExplanation[];
  verifiedStack: string[];
  plainToolsSummary: {
    tool: string;
    whatItDoes: string;
  }[];
  verifiedElements: string[];
  deliverables: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  evidenceNote: string;
  architectureSummary: string;
  plainHowItWorksSummary: string;
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
  plainTagline: string;
  domain: CapabilityDomain;
  targetAudience: string;
  problemStatement: string;
  description: string;
  plainBenefitSummary: string;
  deliverables: string[];
  technicalUnderTheHood: string[];
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
  shortLabel: string;
  clientExperience: string;
  whatYouProvide: string;
  whatYouReceive: string;
  keyPrinciple: string;
  technicalNote: string;
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
  plainSummary: string[];
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
    'Independent work across AI automation, data analysis and custom digital tools for Indian businesses.',
  operatorStatus: 'Independent solo operator · India (INR scope-based work)',
  differentiation:
    'You explain the business problem in plain language. I study the data or workflow behind it, design a practical approach, and build the working tool or report myself.',
  targetAudienceList: [
    'Indian startup founders',
    'Small and medium-sized businesses (SMBs)',
    'D2C and online retail brands',
    'Early-stage SaaS teams',
    'Consultants and independent operators',
    'Educational and operational teams',
  ],
};

export const CAPABILITY_PILLARS = [
  {
    id: 'ai-automation' as CapabilityDomain,
    number: '01',
    title: 'AI & Workflow Automation',
    shortSummary:
      'Turn long PDFs, notices, and repetitive manual checks into organised schedules, alerts, and clean records.',
    technicalNote:
      'Combines large language models (LLMs) for reading unstructured text with fixed code rules for dates, math, and policy checks.',
    outcomeFocus: 'Save hours of manual reading and prevent missed deadlines.',
    proofSlugs: ['notice-decoder', 'contract-risk-governance'],
  },
  {
    id: 'data-intelligence' as CapabilityDomain,
    number: '02',
    title: 'Business Data & Insights',
    shortSummary:
      'Clean up messy sales spreadsheets and customer logs so you can see what actually drives repeat business.',
    technicalNote:
      'Uses Python (Pandas, NumPy), SQL queries, and interactive Power BI dashboards to validate patterns.',
    outcomeFocus: 'Make confident pricing, marketing, and retention decisions from your own data.',
    proofSlugs: ['decoding-customer-value'],
  },
  {
    id: 'custom-systems' as CapabilityDomain,
    number: '03',
    title: 'Custom Digital Tools & Prototypes',
    shortSummary:
      'Build focused web apps, internal dashboards, and one-click PDF report generators around how your team works.',
    technicalNote:
      'Full-stack web engineering using React, TypeScript, Python (FastAPI), SQLite, and automated ReportLab PDF engines.',
    outcomeFocus: 'Test a new product idea or replace slow manual report formatting with a working tool.',
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
    subtitle: 'Turns Long College Notices Into Clear Schedules & Calendar Events',
    plainSubtitle:
      'Reads unstructured notices, finds overlapping events automatically, tracks date changes, and lets users add schedules to their calendars.',
    category: 'AI Automation & Full-Stack Web App',
    domain: 'ai-automation',
    projectClassification: 'Collaborative Web App · Live App & Public Code',
    evidenceTypeLabel: 'Live Web App + Public GitHub',
    visualAccent: '#C9A24B',
    documentedRole: 'Team Leader and System Architect',
    collaborators: 'Co-created with Tanya Garg',
    attributionNote:
      'The code repository is hosted under co-creator Tanya Garg’s GitHub account. My documented role was Team Leader and System Architect, designing the system structure, date-checking rules, schedule clash finder, and calendar file export.',
    problemSummary:
      'Colleges and teams share important dates inside long PDF circulars and chat messages. People miss deadlines or double-book themselves because nobody has time to cross-check every notice by hand.',
    businessContext:
      'Any organisation that sends frequent circulars, policy updates, or schedule changes faces this same problem: critical dates stay trapped inside paragraphs of text.',
    approachSummary:
      'Use AI to read and summarise the notice text, but rely on fixed computer rules to extract dates, spot schedule clashes, compare updated notices, and create a standard calendar file.',
    solutionSummary:
      'A live web application that reads unstructured notices, pulls out dates and deadlines, warns you when two events overlap, highlights changes when a revised notice arrives, and exports a calendar file you can open in Google, Apple, or Outlook Calendar.',
    resultSummary:
      'Deployed as a working web app on Render. Users can paste or upload notice text, see schedule conflicts immediately, compare revised circulars, and download ready-to-use calendar files.',
    plainFeatures: [
      {
        plain: 'Finds overlapping events automatically and warns you before a schedule clash happens.',
        technical:
          'Deterministic interval overlap logic checks whether (StartA < EndB) and (StartB < EndA) across extracted time windows.',
      },
      {
        plain: 'Pulls dates, times, and deadlines out of messy notice paragraphs reliably.',
        technical:
          'Pairs Qwen2.5-7B-Instruct (via Featherless API) for semantic structuring with local deterministic regex date/time extraction.',
      },
      {
        plain: 'Shows what changed when an updated or corrected notice is issued (Notice Change Radar).',
        technical:
          'Compares incoming notice fields against earlier stored records to highlight shifted dates, venues, or deadlines.',
      },
      {
        plain: 'Lets users add events to Google Calendar, Apple Calendar, or Outlook in one click.',
        technical:
          'Generates standards-compliant RFC 5545 (.ics) iCalendar files directly from verified event records.',
      },
    ],
    verifiedStack: [
      'React',
      'TypeScript',
      'Vite',
      'Express',
      'Featherless API (Qwen2.5-7B-Instruct)',
      'RFC 5545 iCalendar (.ics)',
    ],
    plainToolsSummary: [
      {
        tool: 'React & TypeScript',
        whatItDoes: 'Builds the interactive schedule planner screen in the browser.',
      },
      {
        tool: 'Express (Node.js)',
        whatItDoes: 'Handles backend requests and connects to the AI service safely.',
      },
      {
        tool: 'Qwen2.5-7B-Instruct (Featherless API)',
        whatItDoes: 'Reads unstructured notice text and organises titles, categories, and action items.',
      },
      {
        tool: 'Fixed Date Rules & iCalendar (.ics)',
        whatItDoes: 'Checks for time clashes using exact math and exports standard calendar files.',
      },
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
      'Live web application (React + Express)',
      'Combined AI + fixed-rule date extraction pipeline',
      'Automatic schedule clash & deadline collision finder',
      'Notice Change Radar for comparing revised notices',
      'One-click .ics calendar file export',
    ],
    liveDemoUrl: 'https://notice-decoder-ai-powered-college-notice-schedule-planner.onrender.com/',
    githubUrl: 'https://github.com/Tanya-garg10/Notice-Decoder-AI-Powered-College-Notice-Schedule-Planner',
    evidenceNote: 'Live web app hosted on Render and public source code on GitHub.',
    architectureSummary:
      'Instead of asking AI to guess whether two events clash, Notice Decoder splits the job in two: AI organises the notice text, while fixed code rules extract the exact dates, check for time overlaps, spot changes from older notices, and create the calendar file.',
    plainHowItWorksSummary:
      'A messy notice goes in → AI and fixed rules pull out the dates and tasks → the clash checker compares times → you get a clean schedule and a calendar file.',
    architectureNodes: [
      {
        id: 'nd-1',
        label: '1. Notice Goes In',
        sublabel: 'Raw circular or PDF text',
        plainTitle: 'Paste or Upload Notice',
        plainDescription: 'A long college circular or notice message is entered into the tool.',
        layer: 'input',
      },
      {
        id: 'nd-2',
        label: '2. Read & Pull Dates',
        sublabel: 'AI + Fixed Date Rules',
        plainTitle: 'Organise Text & Dates',
        plainDescription: 'AI summarises the notice while fixed code rules pull out exact dates and times.',
        layer: 'processing',
      },
      {
        id: 'nd-3',
        label: '3. Check Clashes & Changes',
        sublabel: 'Overlap math + Change Radar',
        plainTitle: 'Spot Clashes & Updates',
        plainDescription: 'Checks if events overlap on the same day or if a notice date was changed.',
        layer: 'verification',
      },
      {
        id: 'nd-4',
        label: '4. Ready Calendar',
        sublabel: 'Visual planner + .ics file',
        plainTitle: 'Save to Your Calendar',
        plainDescription: 'Shows a clear timeline and downloads a standard .ics calendar file.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Enter the Notice Text',
        detail: 'The user provides the text from a college circular or announcement.',
        technicalDetail: 'Input text is sanitised and prepared for dual-path extraction in the Express/React pipeline.',
      },
      {
        step: '02',
        title: 'Lock In Exact Dates and Times',
        detail: 'Fixed rules scan the text for dates, time slots, and deadlines so the system does not guess timings.',
        technicalDetail: 'Deterministic local date/time parsers extract explicit temporal anchors before clash evaluation.',
      },
      {
        step: '03',
        title: 'Summarise Tasks and Audience with AI',
        detail: 'An AI model reads the notice to identify the event title, who needs to attend, and what action is required.',
        technicalDetail: 'Calls Qwen2.5-7B-Instruct via Featherless API to structure semantic metadata.',
      },
      {
        step: '04',
        title: 'Flag Overlapping Events and Revised Dates',
        detail: 'The system checks if two events clash or if a revised circular changed an earlier deadline.',
        technicalDetail: 'Evaluates interval intersections, same-window deadline collisions, and field diffs in Notice Change Radar.',
      },
      {
        step: '05',
        title: 'Add to Any Calendar App',
        detail: 'With one click, the user downloads a calendar file that works in Google, Apple, or Outlook Calendar.',
        technicalDetail: 'Serializes verified event objects into RFC 5545 VCALENDAR / VEVENT (.ics) format.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Use fixed code rules for dates instead of relying only on AI',
        rationale:
          'AI models can sometimes misread relative dates. Fixed rules ensure dates and time overlaps are checked consistently.',
        tradeoff:
          'Requires maintaining explicit date-format rules alongside the AI prompt.',
      },
      {
        decision: 'Build a Notice Change Radar for updated circulars',
        rationale:
          'Colleges and offices often send revised notices with new dates. Users need to see what changed instead of getting duplicate events.',
        tradeoff:
          'Requires comparing new notices against previously saved entries.',
      },
      {
        decision: 'Use standard .ics calendar files instead of asking for private account logins',
        rationale:
          'Users can add events to any calendar app immediately without granting full access to their personal Google or Microsoft accounts.',
        tradeoff:
          'Downloads a file rather than syncing silently in the background.',
      },
    ],
    limitationsAndScope: [
      'Hosted on Render free/standard tier, so the live demo may take a few seconds to wake up on the first visit.',
      'Works on readable notice text; blurry photos of paper notices without selectable text would need an OCR text-scanning step first.',
      'Built as a collaborative project; the GitHub repository is hosted under co-creator Tanya Garg’s account.',
    ],
    keyLessons: [
      'Let AI handle messy human sentences, but always use fixed code rules for calendar math and time clashes.',
      'Helping people spot what changed in a revised document is just as important as reading the first document.',
    ],
    evidenceArtifacts: [
      {
        title: 'Technical Pipeline: How AI and Fixed Rules Work Together in Notice Decoder',
        type: 'interactive-preview',
        caption: 'Technical breakdown for developers and reviewers showing the exact data steps.',
        codeOrSpec: `Notice Decoder Execution Flow:
1. Input Text       -> Raw notice circular text
2. Fixed Date Rules -> Extracts explicit Dates [YYYY-MM-DD] & Time Windows [HH:mm - HH:mm]
3. AI Structuring   -> Featherless API (Qwen2.5-7B-Instruct) extracts Title, Category, Action Items
4. Clash Engine     ->
   - Time Overlap   : (StartA < EndB) && (StartB < EndA)
   - Deadline Check : Flags multiple high-priority deadlines in the same window
5. Change Radar     -> Compares updated notice fields against prior baseline notice
6. Calendar Export  -> Outputs RFC 5545 VCALENDAR / VEVENT (.ics) file`,
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
    subtitle: 'Combines Scattered Security Scan Files Into One Clear Dashboard & Executive PDF Report',
    plainSubtitle:
      'Takes raw output files from different security tools, removes duplicates, organises issues by severity, and creates a ready-to-share PDF report.',
    category: 'Data Processing & Automated PDF Reporting System',
    domain: 'custom-systems',
    projectClassification: 'Collaborative Full-Stack System · 100+ Page Technical Report',
    evidenceTypeLabel: '100+ Page Technical Report (Academic System)',
    visualAccent: '#E08A1E',
    documentedRole: 'Co-Developer and System Architect',
    collaborators: 'Co-developed with Adyot Ohri',
    attributionNote:
      'Co-developed with Adyot Ohri as Co-Developer and System Architect. Documented in a formal academic technical project report exceeding 100 pages. No public GitHub repository or live web link is claimed.',
    problemSummary:
      'Security testing tools produce separate, technical XML and CSV files. Analysts waste hours checking files by hand, removing duplicate warnings, and formatting summary PDF reports for management.',
    businessContext:
      'Many technical and consulting teams face this exact bottleneck: multiple tools generate messy data files that someone has to manually clean and turn into a client report.',
    approachSummary:
      'Build a central system that checks each uploaded file was not tampered with, processes multiple files at the same time, merges findings into a single 5-level priority scale, and generates a clean PDF report automatically.',
    solutionSummary:
      'A full-stack Python and React system that reads Nmap and OWASP ZAP scan files, verifies file integrity, removes duplicate findings, organises issues into five clear severity levels, displays charts in a browser dashboard, and exports an executive PDF report.',
    resultSummary:
      'Documented in a 100+ page technical project report covering system architecture, database design, concurrent file processing, and automated PDF generation.',
    plainFeatures: [
      {
        plain: 'Reads different report formats (XML and CSV) from popular security scanners in one place.',
        technical:
          'Dedicated ingestion parsers for Nmap XML and OWASP ZAP XML/CSV output schemas.',
      },
      {
        plain: 'Verifies that uploaded scan files are intact and unchanged before processing them.',
        technical:
          'Computes and stores SHA-256 cryptographic hashes for every uploaded scan artifact.',
      },
      {
        plain: 'Removes duplicate warnings and sorts every issue into 5 simple priority levels.',
        technical:
          'Deduplicates overlapping host/port/alert records and normalizes findings into 5 severity tiers in SQLite via SQLAlchemy.',
      },
      {
        plain: 'Creates a formatted executive PDF report in one click instead of manual copy-pasting.',
        technical:
          'Uses Python ReportLab to programmatically compile paginated executive PDF reports alongside a React 19 + Recharts dashboard.',
      },
    ],
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
    plainToolsSummary: [
      {
        tool: 'Python & FastAPI',
        whatItDoes: 'Runs the backend server that reads, checks, and processes uploaded scan files.',
      },
      {
        tool: 'ThreadPoolExecutor',
        whatItDoes: 'Processes multiple scan files at the same time so large uploads finish faster.',
      },
      {
        tool: 'SQLite & SQLAlchemy',
        whatItDoes: 'Stores cleaned, deduplicated findings in a structured local database.',
      },
      {
        tool: 'React 19, Recharts & ReportLab',
        whatItDoes: 'Displays interactive visual charts on screen and generates the downloadable PDF report.',
      },
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
      'FastAPI file ingestion & cleaning backend',
      'SQLite database for normalized findings',
      'SHA-256 file integrity check workflow',
      'React 19 visual dashboard with Recharts',
      'Automated ReportLab PDF report generator',
      '100+ page formal technical project report',
    ],
    evidenceNote:
      'Verified by a 100+ page formal academic technical report. No public GitHub link or live hosted demo is claimed.',
    architectureSummary:
      'SentinelX takes raw XML and CSV files from Nmap and OWASP ZAP, records a digital fingerprint (SHA-256) for each file, processes them in parallel, merges them into a unified 5-level priority scale without duplicates, and outputs both live charts and a formatted PDF report.',
    plainHowItWorksSummary:
      'Upload raw scan files → verify files & remove duplicates → group into 5 priority levels → view dashboard or download an executive PDF.',
    architectureNodes: [
      {
        id: 'sx-1',
        label: '1. Upload Scan Files',
        sublabel: 'Nmap XML + ZAP XML/CSV',
        plainTitle: 'Upload Raw Tool Files',
        plainDescription: 'Drop in raw XML and CSV reports exported from Nmap and OWASP ZAP.',
        layer: 'input',
      },
      {
        id: 'sx-2',
        label: '2. Verify & Read Fast',
        sublabel: 'SHA-256 + Parallel Workers',
        plainTitle: 'Check Integrity & Read',
        plainDescription: 'Creates a digital fingerprint of each file and reads multiple files at once.',
        layer: 'processing',
      },
      {
        id: 'sx-3',
        label: '3. Clean & Sort Issues',
        sublabel: 'Remove duplicates + 5 levels',
        plainTitle: 'Remove Duplicates & Rank',
        plainDescription: 'Merges duplicate alerts and sorts everything into 5 clear priority levels.',
        layer: 'verification',
      },
      {
        id: 'sx-4',
        label: '4. Dashboard & PDF',
        sublabel: 'React Charts + ReportLab PDF',
        plainTitle: 'View Charts & Export PDF',
        plainDescription: 'Explore visual charts on screen or download a ready-to-share executive PDF.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Upload Raw Reports & Lock File Integrity',
        detail: 'The system accepts XML and CSV files from Nmap and OWASP ZAP and records a digital fingerprint so every report is traceable.',
        technicalDetail: 'Calculates SHA-256 digests at upload time before passing payloads to parser workers.',
      },
      {
        step: '02',
        title: 'Process Multiple Files at the Same Time',
        detail: 'Background workers read several scan files in parallel so the interface stays responsive.',
        technicalDetail: 'Uses Python concurrent.futures.ThreadPoolExecutor for concurrent inspection routines.',
      },
      {
        step: '03',
        title: 'Standardise Into Five Clear Priority Levels',
        detail: 'Different tools label risk differently. SentinelX translates all findings into one clear 5-level scale (Critical to Informational).',
        technicalDetail: 'Normalizes heterogeneous scanner fields into a unified 5-severity schema in SQLAlchemy.',
      },
      {
        step: '04',
        title: 'Remove Duplicate Warnings',
        detail: 'If two scans report the same issue on the same target, the system combines them so analysts do not review the same problem twice.',
        technicalDetail: 'Deduplicates records across host, port, endpoint, and alert signature keys in SQLite.',
      },
      {
        step: '05',
        title: 'Explore Charts & Download the Executive PDF',
        detail: 'Users inspect visual summaries in the browser and generate a formatted PDF report for management in one click.',
        technicalDetail: 'Renders visual telemetry via React 19 + Recharts and compiles paginated PDFs via ReportLab.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Record a digital fingerprint (SHA-256) for every uploaded file',
        rationale:
          'In audit and security work, teams need proof that the raw scan file was not edited before the final report was created.',
        tradeoff:
          'Takes a moment to hash large files during upload.',
      },
      {
        decision: 'Generate PDFs directly in Python (ReportLab) instead of printing a web page',
        rationale:
          'Printing a web screen often cuts tables in half across pages. ReportLab creates clean, structured PDF pages every time.',
        tradeoff:
          'Requires writing dedicated PDF layout templates in Python.',
      },
      {
        decision: 'Use a self-contained SQLite database',
        rationale:
          'Makes the workbench easy to run locally without setting up a complex external database server.',
        tradeoff:
          'Built for single-team assessment batches rather than thousands of simultaneous cloud users.',
      },
    ],
    limitationsAndScope: [
      'Documented through a 100+ page formal academic technical report; there is no public GitHub repository or live hosted demo.',
      'Reads output files exported from Nmap and OWASP ZAP; it does not run live network attacks itself.',
      'Designed as a portable assessment workbench using SQLite rather than a multi-company cloud platform.',
    ],
    keyLessons: [
      'Automating how messy files are cleaned, deduplicated, and turned into a PDF saves teams hours of repetitive formatting work.',
      'Keeping a clear link between the final PDF summary and the original source file builds trust with decision-makers.',
    ],
    evidenceArtifacts: [
      {
        title: 'Technical Specification (From the 100+ Page Project Report)',
        type: 'report-specification',
        caption: 'Summary of the verified system architecture for technical reviewers.',
        codeOrSpec: `SentinelX Architecture Specification (100+ Page Technical Report):
├── Supported Inputs   : Nmap XML (.xml), OWASP ZAP XML (.xml), OWASP ZAP CSV (.csv)
├── Integrity Check    : SHA-256 hash recorded per uploaded file artifact
├── Parallel Processing: Python FastAPI + ThreadPoolExecutor worker pool
├── Database Layer     : SQLite relational store with SQLAlchemy ORM
├── Priority Scale     : 5 Normalized Levels (Critical · High · Medium · Low · Informational)
├── Deduplication      : Matches target host, port, endpoint & alert signature
└── Outputs            : React 19 + Recharts dashboard & ReportLab Executive PDF`,
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
    subtitle: 'Finding Which Customers Are Truly Loyal vs. Only Buying for Discounts',
    plainSubtitle:
      'An analysis of 3,900 customer shopping records showing why high spend alone does not always mean true customer loyalty—complete with a Power BI dashboard and retention guide.',
    category: 'Business Data Analysis, SQL & Power BI',
    domain: 'data-intelligence',
    projectClassification: 'Complete Data & BI Case Study · 3,900 Records (Not a Web App)',
    evidenceTypeLabel: 'Data & Power BI Case Study + Public GitHub',
    visualAccent: '#8FBF7A',
    documentedRole: 'Lead Product Analyst',
    collaborators: 'Co-authored with Bhumika Singhal',
    attributionNote:
      'Co-authored with Bhumika Singhal as Lead Product Analyst. Full Python notebooks, SQL queries, Power BI dashboard files, and Retention Playbook are published on GitHub.',
    problemSummary:
      'Many businesses assume their biggest spenders are their most loyal customers. In reality, some high-spending segments only buy when given a discount or promo code.',
    businessContext:
      'For Indian D2C, retail, and e-commerce brands, sending blanket discount coupons to everyone wastes profit margin on customers who would have bought anyway, while failing to retain price-sensitive buyers.',
    approachSummary:
      'Clean and study 3,900 customer shopping records using Python and SQL, compare purchase spend against how often customers used discounts, build an interactive Power BI dashboard, and write a practical retention playbook.',
    solutionSummary:
      'A complete data analytics case study (using Python, SQL, and Power BI across 3,900 customer records) that separates genuinely loyal buyers from discount-dependent shoppers and provides a step-by-step Retention Playbook.',
    resultSummary:
      'Delivered cleaned datasets, SQL analysis scripts, an interactive Power BI dashboard, an Executive Summary, and a segment-by-segment Retention Playbook.',
    plainFeatures: [
      {
        plain: 'Cleans and checks 3,900 customer shopping records so numbers are reliable.',
        technical:
          'Data validation, missing-value checks, and schema standardization in Python using Pandas and NumPy.',
      },
      {
        plain: 'Separates customers who buy regularly at full price from those who wait for promo codes.',
        technical:
          'Feature engineering and multi-dimensional customer segmentation cross-tabulating spend with discount/promo code flags.',
      },
      {
        plain: 'Uses SQL queries to test customer patterns across categories, spend, and order frequency.',
        technical:
          'Structured SQL cohort and segment aggregation queries verifying promotional dependency rates.',
      },
      {
        plain: 'Provides an interactive Power BI dashboard and a plain-English Retention Playbook for business owners.',
        technical:
          'Power BI (.pbix) visual exploration model paired with an Executive Summary and commercial Retention Playbook.',
      },
    ],
    verifiedStack: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Power BI',
      'Jupyter Notebook',
    ],
    plainToolsSummary: [
      {
        tool: 'Python (Pandas & NumPy)',
        whatItDoes: 'Cleans raw spreadsheet rows and creates useful customer behaviour measures.',
      },
      {
        tool: 'SQL',
        whatItDoes: 'Answers specific business questions by grouping and comparing customer segments.',
      },
      {
        tool: 'Power BI',
        whatItDoes: 'Turns the numbers into interactive visual charts that business owners can filter easily.',
      },
      {
        tool: 'Retention Playbook',
        whatItDoes: 'Explains what practical actions a business should take for each customer group.',
      },
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
      'Cleaned & validated customer dataset (3,900 records)',
      'Jupyter Notebook analysis & customer segmentation',
      'SQL queries comparing spend vs. discount usage',
      'Interactive Power BI dashboard',
      'Executive Summary & Retention Playbook',
    ],
    githubUrl: 'https://github.com/akshit-sukhija/IITG_Decoding_Customer_Value_Akshit_Bhumika',
    evidenceNote:
      'Complete analytics case study on GitHub. Note: All findings apply specifically to the 3,900-record dataset studied.',
    architectureSummary:
      'This is a business data analysis project, not a web app. It takes 3,900 raw customer records, cleans them in Python, checks segment patterns with SQL, visualises them in Power BI, and translates the findings into a practical Retention Playbook.',
    plainHowItWorksSummary:
      '3,900 raw customer rows → clean & group buyers in Python and SQL → visualise in Power BI → follow the Retention Playbook.',
    architectureNodes: [
      {
        id: 'dcv-1',
        label: '1. Raw Sales Data',
        sublabel: '3,900 customer records',
        plainTitle: 'Start With Raw Customer Data',
        plainDescription: '3,900 rows of customer purchases, categories, and promo code usage.',
        layer: 'input',
      },
      {
        id: 'dcv-2',
        label: '2. Clean & Group',
        sublabel: 'Python + SQL queries',
        plainTitle: 'Clean & Compare Segments',
        plainDescription: 'Clean messy values in Python and run SQL checks on spend vs. discount habits.',
        layer: 'processing',
      },
      {
        id: 'dcv-3',
        label: '3. Power BI Charts',
        sublabel: 'Interactive visual dashboard',
        plainTitle: 'Visualise in Power BI',
        plainDescription: 'Build clear charts showing which customer groups rely heavily on discounts.',
        layer: 'verification',
      },
      {
        id: 'dcv-4',
        label: '4. Action Playbook',
        sublabel: 'Executive Summary & guide',
        plainTitle: 'Apply Retention Playbook',
        plainDescription: 'Practical recommendations on how to market to each customer group.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Clean & Check the 3,900 Customer Records',
        detail: 'Checked all 3,900 rows in Python to fix formatting issues and make sure purchase numbers and categories were consistent.',
        technicalDetail: 'Executed schema validation and distribution checks in Jupyter Notebook using Pandas and NumPy.',
      },
      {
        step: '02',
        title: 'Measure Discount Habits Alongside Spend',
        detail: 'Instead of only looking at how much someone spent, we tracked how often they used a discount or promo code.',
        technicalDetail: 'Engineered behavioural features combining purchase amount, order history, subscription status, and promo usage.',
      },
      {
        step: '03',
        title: 'Test Customer Groups Using SQL',
        detail: 'Used SQL queries to compare different customer segments and see which groups bought organically versus waiting for sales.',
        technicalDetail: 'Wrote SQL aggregation queries grouping customers by segment, average spend, and promotional dependency rate.',
      },
      {
        step: '04',
        title: 'Build an Interactive Power BI Dashboard',
        detail: 'Created a visual dashboard where decision-makers can filter customer groups by product category, spend, and discount sensitivity.',
        technicalDetail: 'Designed interactive Power BI views connecting segment metrics to category and behavioural slicers.',
      },
      {
        step: '05',
        title: 'Write a Practical Retention Playbook',
        detail: 'Turned the charts into plain-language business advice so a team knows how to treat loyal buyers differently from discount hunters.',
        technicalDetail: 'Authored an Executive Summary and segment-specific Retention Playbook grounded in the dataset findings.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Compare purchase spend directly against promo-code usage',
        rationale:
          'Looking at revenue alone hides whether a customer is truly loyal to the brand or only loyal to discounts.',
        tradeoff:
          'Requires transaction records that clearly track whether a discount or coupon was applied.',
      },
      {
        decision: 'Deliver both a Power BI dashboard and a written Retention Playbook',
        rationale:
          'Charts show what is happening, but busy business owners also need a clear written guide on what action to take next.',
        tradeoff:
          'Analysed on a fixed 3,900-record dataset snapshot rather than a live store connection.',
      },
    ],
    limitationsAndScope: [
      'All findings—including differences in discount reliance between segments—come from this specific 3,900-record dataset. For a real business, the analysis must be run on their own store data.',
      'This project is a data analysis and Power BI case study, not a web application.',
      'Because the dataset is a single snapshot in time, it cannot track multi-year customer churn over calendar years.',
    ],
    keyLessons: [
      'High spend does not automatically mean organic loyalty—always check how much a customer segment depends on discounts.',
      'Data analysis is most useful when it ends with a simple playbook that tells a business what to do differently.',
    ],
    evidenceArtifacts: [
      {
        title: 'SQL Query Example: Checking Spend vs. Discount Reliance (3,900 Records)',
        type: 'sql-excerpt',
        caption: 'Technical SQL query pattern from the study for data and engineering reviewers.',
        datasetOrHardwareCondition: 'Dataset condition: Findings are specific to the 3,900-record dataset analysed.',
        codeOrSpec: `-- SQL Pattern: Comparing Spend Against Discount Usage (n = 3,900 records)
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
ORDER BY avg_purchase_value DESC;`,
      },
    ],
  },
  {
    slug: 'contract-risk-governance',
    priorityOrder: 4,
    tier: 'secondary',
    tierLabel: 'Project 04 · Applied AI Prototype',
    indexNumber: '04',
    title: 'Contract Risk Governance Engine',
    subtitle: 'Checks Contract Rules Using Fixed Logic, Then Uses AI to Explain the Result in Plain English',
    plainSubtitle:
      'A prototype showing how to check contract compliance safely: fixed rules make the pass/fail decision, while AI writes a clear explanation.',
    category: 'Rule-Backed AI & Document Compliance',
    domain: 'ai-automation',
    projectClassification: 'Applied AI Architecture Prototype · Public GitHub',
    evidenceTypeLabel: 'Technical Prototype + Public GitHub',
    visualAccent: '#E8D5A8',
    documentedRole: 'System Architecture Lead',
    collaborators: 'System Architecture Lead',
    attributionNote: 'Documented role: System Architecture Lead. Public source code available on GitHub.',
    problemSummary:
      'If you ask AI alone to decide whether a contract follows company rules, it can guess or give different answers each time. Businesses need reliable rule checks they can trust, plus simple explanations.',
    businessContext:
      'Useful for teams reviewing standard agreements or compliance checklists who want AI speed without letting AI make up business rules.',
    approachSummary:
      'Let fixed, pre-written rules decide whether a clause passes or fails, seal the result with a digital fingerprint, and use AI only to explain the finding in everyday language.',
    solutionSummary:
      'A Python, FastAPI, and Streamlit prototype (also titled Nexus Governance OS) where fixed rules evaluate contract compliance and local AI assists strictly with writing clear explanations.',
    resultSummary:
      'Published as an open-source technical prototype on GitHub demonstrating rule-first compliance checks paired with hardware-accelerated AI explanations.',
    plainFeatures: [
      {
        plain: 'Fixed business rules make the compliance pass/fail decision—never an AI guess.',
        technical:
          'Deterministic policy engine evaluates clause compliance prior to any generative model call.',
      },
      {
        plain: 'AI is used only to turn the rule result into a clear, readable explanation.',
        technical:
          'ONNX Runtime + DirectML inference layer generates narrative explanations from structured rule outputs.',
      },
      {
        plain: 'Searches relevant contract clauses quickly and records an audit fingerprint.',
        technical:
          'Uses FAISS vector indexing for clause retrieval and SHA-256 hashing for audit verification.',
      },
    ],
    verifiedStack: [
      'Python',
      'FastAPI',
      'Streamlit',
      'FAISS',
      'ONNX Runtime',
      'DirectML',
      'SHA-256',
    ],
    plainToolsSummary: [
      {
        tool: 'Python, FastAPI & Streamlit',
        whatItDoes: 'Runs the rule-checking logic and provides an interactive review screen.',
      },
      {
        tool: 'FAISS',
        whatItDoes: 'Quickly finds matching clauses inside long contract documents.',
      },
      {
        tool: 'ONNX Runtime & DirectML',
        whatItDoes: 'Runs the AI explanation step on local hardware.',
      },
      {
        tool: 'SHA-256',
        whatItDoes: 'Creates a tamper-evident digital fingerprint of the compliance check.',
      },
    ],
    verifiedElements: [
      'Deterministic rule engine owns all compliance pass/fail evaluations',
      'AI layer restricted to generating narrative explanations of deterministic findings',
      'FAISS vector indexing for clause retrieval',
      'ONNX Runtime + DirectML local hardware execution path',
      'Reported ~420ms explanation latency benchmarked specifically on AMD Ryzen AI hardware using DirectML',
      'SHA-256 cryptographic audit hashing',
    ],
    deliverables: [
      'Fixed-rule compliance checker',
      'FAISS clause search & local AI explanation pipeline',
      'SHA-256 audit hash verification',
      'FastAPI backend + Streamlit review interface',
    ],
    githubUrl: 'https://github.com/akshit-sukhija/contract-risk-governance',
    evidenceNote:
      'Public code on GitHub. Note: The ~420ms explanation speed was recorded specifically on AMD Ryzen AI hardware using DirectML and will vary on other computers.',
    architectureSummary:
      'Contract clauses are checked by fixed rules first. Once the pass/fail result is locked and fingerprinted with SHA-256, the AI layer writes a short human-readable explanation.',
    plainHowItWorksSummary:
      'Contract clause goes in → fixed rules check compliance → AI writes a plain-English explanation of the result.',
    architectureNodes: [
      {
        id: 'crg-1',
        label: '1. Contract Text',
        sublabel: 'Clauses + FAISS search',
        plainTitle: 'Read Contract Clauses',
        plainDescription: 'Splits the contract into sections so specific clauses can be searched quickly.',
        layer: 'input',
      },
      {
        id: 'crg-2',
        label: '2. Fixed Rule Check',
        sublabel: 'Pass/Fail + SHA-256 hash',
        plainTitle: 'Check Rules Strictly',
        plainDescription: 'Fixed company rules decide if a clause passes or needs review.',
        layer: 'verification',
      },
      {
        id: 'crg-3',
        label: '3. AI Explanation',
        sublabel: 'ONNX Runtime + DirectML',
        plainTitle: 'Explain in Plain English',
        plainDescription: 'AI writes a short explanation of why the rule passed or flagged an issue.',
        layer: 'processing',
      },
      {
        id: 'crg-4',
        label: '4. Audit Screen',
        sublabel: 'Streamlit review view',
        plainTitle: 'Review Clear Verdict',
        plainDescription: 'Shows the rule decision, the plain-English summary, and the audit hash.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Index the Contract Clauses',
        detail: 'Contract sections are organised for quick lookup and given a digital fingerprint.',
        technicalDetail: 'Segments are indexed in FAISS and fingerprinted with SHA-256.',
      },
      {
        step: '02',
        title: 'Evaluate Compliance with Fixed Rules',
        detail: 'Explicit rules check each clause so the pass/fail decision stays consistent every time.',
        technicalDetail: 'Deterministic rule engine evaluates policy conditions before any AI step.',
      },
      {
        step: '03',
        title: 'Generate a Plain-English Explanation',
        detail: 'After the rule decision is locked, local AI generates a clear summary for the reviewer.',
        technicalDetail: 'Runs via ONNX Runtime with DirectML (~420ms benchmark recorded specifically on AMD Ryzen AI hardware).',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Keep rule decisions separate from AI explanations',
        rationale:
          'Business and compliance rules should be predictable. Rules decide; AI explains.',
        tradeoff:
          'Each compliance rule must be defined clearly by the team beforehand.',
      },
    ],
    limitationsAndScope: [
      'The ~420ms explanation time was measured specifically on AMD Ryzen AI hardware using DirectML; speed will differ on other computers.',
      'This is a technical software prototype, not a substitute for professional legal advice.',
    ],
    keyLessons: [
      'You can get the helpfulness of AI without giving up control if fixed rules make the decision first.',
    ],
    evidenceArtifacts: [
      {
        title: 'Rule-First AI Architecture & Hardware Benchmark Note',
        type: 'benchmark-note',
        caption: 'Technical summary showing how fixed rules and AI are separated.',
        datasetOrHardwareCondition:
          'Hardware note: ~420ms explanation benchmark applies specifically to AMD Ryzen AI hardware using DirectML.',
        codeOrSpec: `Contract Risk Governance Flow:
1. Clause Search    : FAISS vector lookup finds relevant contract section
2. Rule Verdict     : Fixed policy rules decide Pass / Flag / Breach
3. Audit Hash       : SHA-256 digest seals the clause + rule verdict
4. AI Explanation   : ONNX Runtime + DirectML writes plain-English summary
   └── Hardware Note: ~420ms explanation benchmark recorded on AMD Ryzen AI (DirectML)`,
      },
    ],
  },
  {
    slug: 'lureline',
    priorityOrder: 5,
    tier: 'secondary',
    tierLabel: 'Project 05 · Competition Workbench',
    indexNumber: '05',
    title: 'Lureline',
    subtitle: 'Interactive Workbench for Exploring & Filtering Security Event Timelines',
    plainSubtitle:
      'A fast browser interface built for Orcathon 2026 that helps analysts filter noisy security alerts and inspect event timelines using safe sample data.',
    category: 'Interactive Investigation Workbench UI',
    domain: 'custom-systems',
    projectClassification: 'Solo Competition Prototype · Live Demo (Simulated Data)',
    evidenceTypeLabel: 'Live Demo (Sample Data) + Public GitHub',
    visualAccent: '#A9A092',
    documentedRole: 'Solo Developer',
    collaborators: 'Built independently (Solo Developer)',
    attributionNote: 'Built independently by Akshit as Solo Developer for Orcathon 2026.',
    problemSummary:
      'When teams look at hundreds of system alerts, a cluttered table makes it hard to spot which events happened together or matter most.',
    businessContext:
      'Shows how a fast, well-organised browser interface can turn noisy logs or operational events into an easy-to-filter timeline.',
    approachSummary:
      'Build a clean TypeScript and Express web workbench deployed on Vercel, using safe simulated event streams so anyone can test the filtering and timeline tools in their browser.',
    solutionSummary:
      'A solo-built investigation workbench (TypeScript, Vite, Express, deployed on Vercel) that lets users filter event streams, inspect alert details, and trace timelines using synthetic demonstration data.',
    resultSummary:
      'Deployed live on Vercel with full source code on GitHub, demonstrating custom workbench UI design and interactive filtering.',
    plainFeatures: [
      {
        plain: 'Filters noisy event lists quickly so you can focus on specific alerts or time windows.',
        technical:
          'Client-side and Express-backed event filtering and timeline correlation state in TypeScript.',
      },
      {
        plain: 'Uses safe simulated sample data so anyone can try the live demo immediately.',
        technical:
          'Powered by deterministic synthetic event stream fixtures hosted on Vercel.',
      },
    ],
    verifiedStack: ['TypeScript', 'Vite', 'Express', 'Vercel'],
    plainToolsSummary: [
      {
        tool: 'TypeScript & Vite',
        whatItDoes: 'Powers the fast, interactive filtering and timeline screen.',
      },
      {
        tool: 'Express',
        whatItDoes: 'Serves the simulated event streams and backend endpoints.',
      },
      {
        tool: 'Vercel',
        whatItDoes: 'Hosts the live interactive demo online.',
      },
    ],
    verifiedElements: [
      'Interactive investigation workbench UI built in TypeScript and Vite',
      'Express backend integration',
      'Live Vercel deployment',
      'Demonstration event streams powered by synthetic fixtures',
    ],
    deliverables: [
      'Interactive investigation workbench web interface',
      'Safe simulated event stream fixtures for live testing',
      'Live Vercel demo & public GitHub repository',
    ],
    liveDemoUrl: 'https://lureline-orcathon-2026.vercel.app/',
    githubUrl: 'https://github.com/akshit-sukhija/lureline-orcathon-2026',
    evidenceNote:
      'Live demo on Vercel and public code on GitHub. Note: Uses simulated sample event data for safe public demonstration.',
    architectureSummary:
      'Simulated security events are loaded into a fast TypeScript + Express interface where users can filter by signal type, inspect event details, and follow the timeline.',
    plainHowItWorksSummary:
      'Sample event stream loads → filter and search alerts → inspect timeline details in a clean workbench.',
    architectureNodes: [
      {
        id: 'll-1',
        label: '1. Sample Event Stream',
        sublabel: 'Simulated security logs',
        plainTitle: 'Load Sample Event Data',
        plainDescription: 'Loads realistic simulated alert data so the demo is safe to explore publicly.',
        layer: 'input',
      },
      {
        id: 'll-2',
        label: '2. Filter & Match',
        sublabel: 'TypeScript + Express state',
        plainTitle: 'Filter Noisy Alerts',
        plainDescription: 'Quickly narrow down events by category, severity, or time.',
        layer: 'processing',
      },
      {
        id: 'll-3',
        label: '3. Timeline View',
        sublabel: 'Analyst workbench screen',
        plainTitle: 'Inspect Clear Timeline',
        plainDescription: 'View connected events and details in a single organised screen.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Load Simulated Event Streams',
        detail: 'The app loads safe sample security events so visitors can test the interface right away.',
        technicalDetail: 'Ingests structured synthetic telemetry fixtures via Express/TypeScript modules.',
      },
      {
        step: '02',
        title: 'Filter Alerts & Inspect the Timeline',
        detail: 'Users filter out noise, click individual alerts, and see how events connect over time.',
        technicalDetail: 'Updates interactive workbench views and correlation panels in Vite/TypeScript.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Use simulated sample data (synthetic fixtures) for the public live demo',
        rationale:
          'Lets visitors, founders, and reviewers test every button and filter in the live app without exposing real private network logs.',
        tradeoff:
          'Demonstrates the investigation interface using sample data rather than live network traffic.',
      },
    ],
    limitationsAndScope: [
      'Built as a competition prototype for Orcathon 2026; the live demo runs on simulated sample event data (synthetic fixtures), not live company servers.',
    ],
    keyLessons: [
      'A thoughtful layout with simple filters can make even dense technical logs easy to scan and understand.',
    ],
    evidenceArtifacts: [
      {
        title: 'Workbench Scope & Sample Data Disclosure',
        type: 'interactive-preview',
        caption: 'Technical note on Lureline’s stack and simulated demo data.',
        datasetOrHardwareCondition: 'Data note: Live demo streams use synthetic sample fixtures.',
        codeOrSpec: `Lureline Workbench Summary:
├── Role             : Solo Developer (Orcathon 2026)
├── Technical Stack  : TypeScript · Vite · Express · Vercel
├── Demo Data Source : Synthetic event stream fixtures (safe public demo)
└── Focus            : Fast alert filtering, timeline view & investigation UI`,
      },
    ],
  },
];

export const ADDITIONAL_ANALYTICAL_PROOF = {
  title: 'OTT Viewer Retention Analysis',
  category: 'Customer & Viewer Retention Study',
  summary:
    'An additional data study looking at when and why streaming viewers stop watching, helping explain what keeps subscribers engaged over time.',
  connectionToService: 'Service 01: Business Data & Insights',
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'business-data-insights',
    number: '01',
    title: 'Business Data & Insights',
    plainTagline: 'Turn messy spreadsheets into clear answers and visual dashboards.',
    domain: 'data-intelligence',
    targetAudience: 'For businesses that have sales, customer, or operational data in spreadsheets—but want clear answers.',
    problemStatement:
      'Many growing Indian businesses have thousands of rows of orders, invoices, or customer records sitting in Excel, Tally, or Shopify exports. Yet it is still hard to see which customers truly come back on their own, which products drive real profit, or where money is leaking.',
    description:
      'I take your raw spreadsheets or database exports, clean up errors and missing values, analyse the patterns, and hand back an easy-to-use Power BI dashboard plus a short written guide your team can use immediately.',
    plainBenefitSummary:
      'Stop guessing from raw Excel sheets. See your best customer groups, repeat buying habits, and key numbers clearly.',
    deliverables: [
      'Cleaned and checked spreadsheets / datasets',
      'Customer grouping (who buys full-price vs. only on discount)',
      'Interactive Power BI visual dashboards',
      'Clear monthly or campaign performance summaries',
      'Plain-English action guide based on your numbers',
    ],
    technicalUnderTheHood: [
      'Data cleaning and schema validation in Python (Pandas, NumPy)',
      'Cohort, retention, and segment analysis in SQL',
      'Interactive Power BI (.pbix) data modelling and DAX measures',
    ],
    exampleScenarios: [
      {
        businessType: 'D2C & Online Brand',
        challenge: 'Sales spike during discount sales, but you are unsure which buyers actually stay loyal without coupon codes.',
        practicalSolution: 'A customer breakdown and Power BI dashboard showing true repeat buyers vs. discount hunters.',
      },
      {
        businessType: 'Growing Small Business / Operations Team',
        challenge: 'Every month someone spends days combining three different Excel sheets just to check business performance.',
        practicalSolution: 'A clean data script and a ready-to-view dashboard that updates your key numbers in one place.',
      },
    ],
    portfolioProof: [
      {
        title: 'Decoding Customer Value',
        slug: 'decoding-customer-value',
        summary: 'Analysed 3,900 customer records using Python, SQL, and Power BI to separate loyal buyers from discount-dependent shoppers.',
      },
      {
        title: 'OTT Viewer Retention Analysis',
        summary: 'Studied viewer drop-off and engagement patterns to understand subscriber retention.',
      },
    ],
  },
  {
    id: 'ai-workflow-automation',
    number: '02',
    title: 'AI & Workflow Automation',
    plainTagline: 'Stop wasting hours reading routine PDFs, notices, and checklists by hand.',
    domain: 'ai-automation',
    targetAudience: 'For teams that spend too much time reading routine documents, copying dates, or repeating manual checks.',
    problemStatement:
      'Teams lose hours every week reading PDFs, circulars, invoices, or standard agreements—copying dates into calendars, checking rules by hand, and worrying about missing an important update.',
    description:
      'I build practical automations where AI reads and organises messy text, while fixed computer rules check dates, clashes, and business policies reliably. You get clean schedules, alerts, or structured tables without surrendering control to AI guesswork.',
    plainBenefitSummary:
      'Let software handle repetitive reading and rule-checking so your team can focus on real work.',
    deliverables: [
      'Automatic date, task, and key-detail extraction from PDFs or text',
      'Schedule clash and deadline warning tools',
      'Fixed-rule policy or checklist verification with plain-English summaries',
      'Change trackers that highlight what shifted in a revised document',
      'Ready-to-import calendar files (.ics) or clean spreadsheet outputs',
    ],
    technicalUnderTheHood: [
      'LLM text structuring (such as Qwen2.5-7B-Instruct via API or local ONNX/DirectML models)',
      'Deterministic regex and interval math for dates, times, and compliance rules',
      'FAISS clause retrieval, SHA-256 verification, and RFC 5545 calendar export',
    ],
    exampleScenarios: [
      {
        businessType: 'Educational Institute or Operations Team',
        challenge: 'Important dates and schedule updates arrive inside long PDF circulars, causing missed deadlines and double-bookings.',
        practicalSolution: 'An automated notice reader that pulls out dates, flags clashes, and creates calendar files.',
      },
      {
        businessType: 'Consulting or Compliance-Heavy Business',
        challenge: 'Reviewing routine documents against a company checklist takes hours of repetitive reading.',
        practicalSolution: 'A rule-backed checker that flags missing items using fixed rules and writes a short summary.',
      },
    ],
    portfolioProof: [
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary: 'Live web app that reads notices, detects schedule clashes using fixed rules, tracks changes, and exports calendar files.',
      },
      {
        title: 'Contract Risk Governance Engine',
        slug: 'contract-risk-governance',
        summary: 'Prototype where fixed rules check contract compliance and AI writes a clear explanation of the result.',
      },
    ],
  },
  {
    id: 'custom-digital-tools',
    number: '03',
    title: 'Custom Digital Tools & Prototypes',
    plainTagline: 'Build a focused web tool, internal dashboard, or automated PDF generator.',
    domain: 'custom-systems',
    targetAudience: 'For founders and businesses that need a working digital tool to solve a specific problem or test a new product idea.',
    problemStatement:
      'Off-the-shelf software often forces you to change how you work, while hiring a big software agency costs too much when you just need one focused internal tool or a working prototype to show customers.',
    description:
      'I design and build clean web applications, internal team tools, multi-file data processors, and one-click PDF report generators tailored to your exact workflow.',
    plainBenefitSummary:
      'Go from an idea or manual bottleneck to a working web tool you can actually use and demonstrate.',
    deliverables: [
      'Interactive web application prototypes for early-stage ideas',
      'Internal dashboards and investigation workbenches',
      'Systems that combine multiple XML/CSV files into one clean database',
      'One-click automated PDF report generators',
      'Clean source code and simple handover instructions',
    ],
    technicalUnderTheHood: [
      'Frontend interfaces built in React 19, TypeScript, Vite, Tailwind CSS, and Recharts',
      'Backend APIs and parallel workers in Python (FastAPI, ThreadPoolExecutor) or Node/Express',
      'SQLite / SQLAlchemy databases and programmatic ReportLab PDF compilation',
    ],
    exampleScenarios: [
      {
        businessType: 'Technical Consultancy or Assessment Team',
        challenge: 'Combining outputs from multiple diagnostic tools into a formatted client PDF report takes hours every week.',
        practicalSolution: 'A custom web tool that reads the raw files, removes duplicates, and generates the finished PDF report.',
      },
      {
        businessType: 'Startup Founder',
        challenge: 'You have a clear product idea and need a working prototype to test with real users or early partners.',
        practicalSolution: 'A focused, working web application built around your core user flow.',
      },
    ],
    portfolioProof: [
      {
        title: 'SentinelX',
        slug: 'sentinelx',
        summary: 'Full-stack Python & React system that merges multi-tool XML/CSV scans and generates executive PDF reports.',
      },
      {
        title: 'Lureline',
        slug: 'lureline',
        summary: 'Live interactive workbench on Vercel for filtering and exploring event timelines.',
      },
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary: 'Complete React + Express web application deployed live on Render.',
      },
    ],
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Explain Your Problem',
    shortLabel: 'Plain-language chat',
    description:
      'Tell me what is slowing down your team, what spreadsheet feels confusing, or what tool you want to build—in everyday business language.',
  },
  {
    step: '02',
    title: 'Review Sample Data or Workflow',
    shortLabel: 'Check existing material',
    description:
      'We look at a sample spreadsheet, document, or current manual process so I can see what is needed and suggest the simplest approach.',
  },
  {
    step: '03',
    title: 'Agree on Scope & INR Quote',
    shortLabel: 'Clear plan & price',
    description:
      'You get a clear written plan listing what I will deliver and a straightforward INR quote (including small paid pilot options if you want to start small).',
  },
  {
    step: '04',
    title: 'Build & Review Together',
    shortLabel: 'Direct progress updates',
    description:
      'I clean the data, build the automation, or code the web tool myself—sharing working previews with you so we can refine details early.',
  },
  {
    step: '05',
    title: 'Handover & Simple Guide',
    shortLabel: 'Ready-to-use delivery',
    description:
      'You receive the finished dashboard, report, or working tool along with a clear, plain-English guide so your team can use it confidently.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    stepNumber: '01',
    title: 'Explain Your Problem in Plain English',
    shortLabel: 'Understand the Problem',
    clientExperience:
      'We start with a simple conversation about your business—what is taking too much manual time, what question your sales data is not answering, or what product idea you want to test.',
    whatYouProvide: 'A short description of the problem and what a helpful result looks like for your business.',
    whatYouReceive: 'An honest recommendation on whether you need data analysis, a workflow automation, a custom web tool, or a small paid pilot.',
    keyPrinciple: 'No technical jargon needed. You never have to pick programming languages.',
    technicalNote: 'Initial problem framing, feasibility check, and deciding between analytical vs. software deliverables.',
  },
  {
    stepNumber: '02',
    title: 'Review Available Data, Documents or Workflow',
    shortLabel: 'Review Material',
    clientExperience:
      'Before quoting a price or timeline, I look at a small sample of your spreadsheets, PDFs, or current manual steps so there are no surprises later.',
    whatYouProvide: 'A sample Excel/CSV file (with private details removed if needed), example PDFs, or a quick walkthrough of how you do the task today.',
    whatYouReceive: 'Clear feedback on data quality, edge cases, and the simplest way to solve the problem without over-building.',
    keyPrinciple: 'I never push a big software build when a clean dashboard or small script will solve the problem.',
    technicalNote: 'Auditing data completeness, document structure, and automation edge cases.',
  },
  {
    stepNumber: '03',
    title: 'Define Realistic Scope & Customised INR Quote',
    shortLabel: 'Scope & INR Proposal',
    clientExperience:
      'We agree on exactly what will be delivered, how it will work, and what it costs in INR.',
    whatYouProvide: 'Confirmation of the deliverables that matter most to you.',
    whatYouReceive: 'A clear written proposal with specific deliverables, realistic milestones, and a scope-based INR quote (with the option to start with a small paid pilot).',
    keyPrinciple: 'Fair, scope-based INR pricing based on the actual work—no bloated fixed agency packages.',
    technicalNote: 'Defining explicit acceptance criteria, data schemas, and milestone boundaries.',
  },
  {
    stepNumber: '04',
    title: 'Build, Test & Review Directly With Me',
    shortLabel: 'Build & Review',
    clientExperience:
      'I do the data analysis, automation setup, or software building myself and show you working checkpoints along the way.',
    whatYouProvide: 'Quick feedback when I share a draft dashboard or working preview.',
    whatYouReceive: 'Direct communication with the person actually doing the work—no middlemen or account managers.',
    keyPrinciple: 'Fixed rules handle critical dates and numbers; AI is used carefully where it saves real effort.',
    technicalNote: 'Iterative implementation across Python/SQL/Power BI or React/TypeScript/FastAPI with validation checks.',
  },
  {
    stepNumber: '05',
    title: 'Final Handover & Easy-to-Follow Guide',
    shortLabel: 'Handover & Guide',
    clientExperience:
      'Once we review the finished solution together and make any agreed adjustments, I hand over all files, code, or dashboards with a clear guide.',
    whatYouProvide: 'Final walkthrough check against the agreed scope.',
    whatYouReceive: 'The completed deliverable, source files, and straightforward documentation so your team owns and understands everything.',
    keyPrinciple: 'You are never left with a confusing black box.',
    technicalNote: 'Complete repository/file delivery, environment setup notes, and user documentation.',
  },
];

export const INSIGHT_NOTES: InsightNote[] = [
  {
    id: 'revenue-vs-customer-loyalty',
    number: '01',
    title: 'Why Your Biggest Spenders Aren’t Always Your Most Loyal Customers',
    category: 'Business Data & Retention',
    readTime: '3 min read',
    groundedInProject: 'Decoding Customer Value (3,900-record study)',
    groundedProjectSlug: 'decoding-customer-value',
    thesis:
      'If you only sort customers by total money spent, you can easily confuse discount hunters with genuinely loyal buyers.',
    plainSummary: [
      'When businesses look at their sales sheets, they usually reward the customers who spent the most money.',
      'However, in our study of 3,900 shopping records, we found that some high-spending customer groups almost always used a discount or promo code to buy.',
      'If you send those discount-hunters the same offers as customers who happily pay full price, you give away profit margin unnecessarily.',
    ],
    keyTakeaways: [
      'Always check how often a customer used a coupon code alongside how much they spent.',
      'Create two different plans: reward full-price repeat buyers with early access or perks, and use targeted promos carefully for price-sensitive buyers.',
      'Note: These findings come specifically from the 3,900-record dataset studied, so every store should check this pattern on its own order history.',
    ],
    practicalImplicationForSMBs:
      'Before running your next blanket discount sale, ask a simple question of your order spreadsheet: which customers come back without a coupon code?',
    technicalBreakdown: [
      'Cleaned and validated 3,900 customer rows in Python (Pandas and NumPy).',
      'Ran SQL aggregation queries comparing average purchase value against the percentage of orders with discount_applied or promo_code_used.',
      'Built an interactive Power BI dashboard and segment-by-segment Retention Playbook.',
    ],
  },
  {
    id: 'deterministic-extraction-document-automation',
    number: '02',
    title: 'How to Automate Document Reading Without Letting AI Guess Dates',
    category: 'AI & Workflow Automation',
    readTime: '4 min read',
    groundedInProject: 'Notice Decoder',
    groundedProjectSlug: 'notice-decoder',
    thesis:
      'AI is great at summarising long paragraphs, but fixed computer rules should always handle dates, times, and schedule clashes.',
    plainSummary: [
      'Many offices and colleges want to use AI to read incoming PDF circulars and put deadlines onto a calendar.',
      'If you ask an AI chatbot to do the whole job alone, it might misread a date or miss that two events overlap at 2:00 PM on the same day.',
      'In Notice Decoder, we solved this by splitting the task: AI summarises what the notice is about, while fixed code rules pull out the dates, check for time clashes, and create the calendar file.',
    ],
    keyTakeaways: [
      'Use AI to organise messy sentences into clear titles and action items.',
      'Use fixed code rules to check dates, time overlaps, and what changed when a revised notice arrives.',
      'Export standard calendar files (.ics) so people can add events to Google, Apple, or Outlook Calendar in one click.',
    ],
    practicalImplicationForSMBs:
      'When automating paperwork in your business, never ask AI to do calendar math or financial totals on its own—combine AI text reading with fixed checking rules.',
    technicalBreakdown: [
      'Uses Qwen2.5-7B-Instruct (via Featherless API) for semantic structuring of notice intent and audience.',
      'Applies deterministic local date/time extraction and interval clash logic: (StartA < EndB) && (StartB < EndA).',
      'Tracks notice revisions via Notice Change Radar and exports RFC 5545 (.ics) files.',
    ],
  },
  {
    id: 'evidence-backed-reporting-systems',
    number: '03',
    title: 'Turning Scattered Technical Files Into One-Click PDF Reports',
    category: 'Custom Digital Tools',
    readTime: '4 min read',
    groundedInProject: 'SentinelX (100+ page technical report)',
    groundedProjectSlug: 'sentinelx',
    thesis:
      'If your team spends hours copying data from different tools into a client report, a custom ingestion and PDF pipeline can do it reliably in minutes.',
    plainSummary: [
      'Technical teams often use two or three different diagnostic tools that each export their own messy XML or CSV file.',
      'Someone then has to open every file, remove duplicate warnings, standardise the priority labels, and format a PDF report for management.',
      'In SentinelX, we built a Python and React system that reads the raw files, checks their digital fingerprint so nothing is altered, removes duplicates, and generates a clean executive PDF report automatically.',
    ],
    keyTakeaways: [
      'Recording a digital fingerprint (SHA-256) when a file is uploaded proves the final report came from unaltered data.',
      'Translating different tool outputs into a single 5-level priority scale makes dashboards easy for non-technical managers to read.',
      'Generating PDFs directly from code avoids broken page layouts and manual copy-paste mistakes.',
    ],
    practicalImplicationForSMBs:
      'If your team prepares the same style of PDF or summary report every week from raw CSV/XML exports, that workflow is a prime candidate for a custom internal tool.',
    technicalBreakdown: [
      'Ingests Nmap XML and OWASP ZAP XML/CSV files in Python (FastAPI) using ThreadPoolExecutor for parallel parsing.',
      'Computes SHA-256 hashes, deduplicates findings, and stores normalized 5-severity records in SQLite via SQLAlchemy.',
      'Renders interactive charts in React 19 (Recharts) and compiles executive PDFs with ReportLab.',
    ],
  },
  {
    id: 'ai-without-surrendering-business-logic',
    number: '04',
    title: 'Using AI for Plain-English Explanations While Rules Make the Decisions',
    category: 'Applied AI & Compliance',
    readTime: '3 min read',
    groundedInProject: 'Contract Risk Governance Engine',
    groundedProjectSlug: 'contract-risk-governance',
    thesis:
      'In compliance and policy checks, fixed rules should decide whether a document passes or fails, and AI should simply explain that decision clearly.',
    plainSummary: [
      'Business owners often worry that adding AI to a review process means losing control over company policies.',
      'In the Contract Risk Governance Engine prototype, the AI never decides whether a contract clause is compliant.',
      'Instead, fixed rules check the clause first. Once the pass/fail result is locked, the AI writes a short, easy-to-read explanation for the human reviewer.',
    ],
    keyTakeaways: [
      'Keep your business rules, thresholds, and compliance checks in fixed, predictable code.',
      'Use AI after the rule check to translate technical flags into plain English for your team.',
      'Hardware note: In our prototype tests, the ~420ms explanation speed was recorded specifically on AMD Ryzen AI hardware using DirectML.',
    ],
    practicalImplicationForSMBs:
      'You can adopt AI safely by keeping your core business policies in strict rules and using AI only as a clear communicator.',
    technicalBreakdown: [
      'Indexes contract clauses with FAISS and evaluates compliance using deterministic Python rules.',
      'Seals the rule evaluation state with a SHA-256 hash.',
      'Generates narrative explanations using ONNX Runtime and DirectML (~420ms benchmark on AMD Ryzen AI hardware).',
    ],
  },
];

export const SKILLS_MATRIX = [
  {
    category: 'Data & Business Analysis',
    plainTitle: 'Making Sense of Business Numbers',
    summary:
      'I take messy spreadsheets or order logs, clean up errors, find patterns in customer behaviour, and build clear visual dashboards.',
    plainOutcomes: [
      'Clean up messy Excel or CSV files so your numbers match up',
      'See which customer segments repeat-buy vs. only buy on discount',
      'Explore sales and operations in interactive Power BI dashboards',
    ],
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Power BI'],
    appliedIn: 'Decoding Customer Value (3,900 records), OTT Viewer Retention Analysis',
  },
  {
    category: 'AI & Workflow Automation',
    plainTitle: 'Automating Routine Reading & Checks',
    summary:
      'I combine AI text reading with fixed computer rules so routine documents, notices, and checklists are processed quickly and reliably.',
    plainOutcomes: [
      'Pull dates, deadlines, and tasks out of long PDFs and circulars',
      'Spot schedule clashes or changes between old and new notices',
      'Check documents against fixed rules and get plain-English summaries',
    ],
    skills: ['Applied AI', 'NLP', 'Prompt Design', 'Rule-Backed Automation'],
    appliedIn: 'Notice Decoder, Contract Risk Governance Engine',
  },
  {
    category: 'Web Tools & Custom Software',
    plainTitle: 'Building Working Digital Tools',
    summary:
      'I design and code full-stack web apps, internal dashboards, multi-file processors, and one-click PDF report generators.',
    plainOutcomes: [
      'Build working web prototypes to test a new product idea',
      'Merge scattered XML/CSV files into one clean dashboard',
      'Generate formatted executive PDF reports automatically',
    ],
    skills: ['React', 'TypeScript', 'FastAPI', 'Streamlit', 'SQLite'],
    appliedIn: 'Notice Decoder, SentinelX, Lureline',
  },
  {
    category: 'Product Thinking & Documentation',
    plainTitle: 'Turning Ideas Into Clear Plans',
    summary:
      'I study how a workflow actually operates, design a practical system diagram, and write clear guides so teams can use what I build.',
    plainOutcomes: [
      'Break a vague business headache into a clear step-by-step workflow',
      'Design visual system flows before writing complex code',
      'Hand over clean documentation and action playbooks',
    ],
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
    'Shared as verified proof of consistent analytical discipline. For clients, my focus is turning that discipline into practical, working solutions for your business.',
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
