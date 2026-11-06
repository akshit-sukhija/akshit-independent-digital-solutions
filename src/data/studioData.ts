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

export interface ProductThinkingFlow {
  researchContext: string;
  userNeeds: string;
  alternativesConsidered: string;
  productDecision: string;
  prototypeEvolution: string;
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
  productThinking: ProductThinkingFlow;
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

import {
  PROFILE_CONFIG as CENTRAL_PROFILE_CONFIG,
  TECHNOLOGY_EXPLORER_ITEMS as CENTRAL_TECH_EXPLORER,
  STUDIO_FAQS as CENTRAL_STUDIO_FAQS,
} from './profile';

export const PROFILE_CONFIG = CENTRAL_PROFILE_CONFIG;
export const TECHNOLOGY_EXPLORER_ITEMS = CENTRAL_TECH_EXPLORER;
export const STUDIO_FAQS = CENTRAL_STUDIO_FAQS;

export const BRAND_IDENTITY = {
  name: 'AKSHIT SUKHIJA',
  studioTitle: 'AKSHIT SUKHIJA | Independent Digital & Product Solutions',
  positioningStatement:
    'I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.',
  heroHeadline: 'Good ideas deserve to become useful solutions.',
  heroSupportingCopy:
    'I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.',
  operatorStatus: 'Independent solo studio · New Delhi / NCR, India · Direct 1-on-1 collaboration',
  differentiation:
    'You explain the problem in plain English. I research the context, study the data, combine AI with reliable rules, and build the working software or dashboard myself.',
  targetAudienceList: [
    'Startup founders & early-stage SaaS teams',
    'Small and medium-sized businesses (SMBs)',
    'D2C and e-commerce brands',
    'Product and technology teams',
    'Consultants and independent operators',
    'Educational and operational organisations',
  ],
};

export const CAPABILITY_PILLARS = [
  {
    id: 'data-intelligence' as CapabilityDomain,
    number: '01',
    title: 'Data & Business Intelligence',
    shortSummary:
      'Business analytics, interactive dashboards, customer insights, and research-driven decisions from your existing spreadsheets.',
    technicalNote:
      'Uses Python (Pandas, NumPy), SQL cohort & retention queries, and interactive Power BI data models.',
    outcomeFocus: 'See what truly drives repeat customers and profit without guessing from raw sheets.',
    proofSlugs: ['decoding-customer-value'],
  },
  {
    id: 'ai-automation' as CapabilityDomain,
    number: '02',
    title: 'AI & Workflow Automation',
    shortSummary:
      'Document processing, practical AI workflows, schedule clash detection, and rule-backed automation systems.',
    technicalNote:
      'Combines LLMs for reading unstructured text with fixed deterministic rules for dates, math, and policy checks.',
    outcomeFocus: 'Stop spending hours reading routine PDFs, notices, and checklists by hand.',
    proofSlugs: ['notice-decoder', 'contract-risk-governance'],
  },
  {
    id: 'custom-systems' as CapabilityDomain,
    number: '03',
    title: 'Digital Products & Prototyping',
    shortSummary:
      'Product research, interactive prototypes, web applications, and custom internal tools built around how your team works.',
    technicalNote:
      'Full-stack engineering using React 19, TypeScript, Python (FastAPI), SQLite, and automated ReportLab PDF engines.',
    outcomeFocus: 'Turn an early product idea or slow manual reporting workflow into working software.',
    proofSlugs: ['notice-decoder', 'sentinelx', 'lureline'],
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
    productThinking: {
      researchContext:
        'Examined how college circulars, exam notices, and departmental updates actually arrive: multi-paragraph PDFs and forwarded messages where dates, venues, and revised timings are buried inside dense text.',
      userNeeds:
        'Students and operations coordinators do not just need a text summary—they need to know whether a newly announced event clashes with an existing commitment, what changed when a corrigendum is issued, and how to save the event to their calendar immediately.',
      alternativesConsidered:
        'Considered (1) manual calendar entry, (2) a pure LLM chatbot prompt, and (3) a rigid form-only scheduler. Pure LLM prompts occasionally miscalculated overlapping time slots or relative dates, while manual forms defeated the purpose of pasting raw circulars.',
      productDecision:
        'Designed a hybrid architecture: use Qwen2.5-7B-Instruct for semantic structuring of titles, categories, and action items, while delegating all date extraction, interval overlap math, and revision diffs (Notice Change Radar) to deterministic code.',
      prototypeEvolution:
        'Started with a basic notice-to-event parser and evolved it into a full-stack React + Express planner featuring automatic conflict warnings, the Notice Change Radar for amended circulars, and one-click RFC 5545 (.ics) export.',
    },
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
    productThinking: {
      researchContext:
        'Analysed how security and audit practitioners work with outputs from Nmap and OWASP ZAP: each tool exports different XML or CSV structures with inconsistent severity scales and overlapping host alerts.',
      userNeeds:
        'Practitioners needed a single workbench to upload multi-tool scan files, verify that raw evidence files were not altered, eliminate duplicate warnings, and generate a clean executive PDF report without hours of manual formatting.',
      alternativesConsidered:
        'Evaluated manual spreadsheet merging, browser print-to-PDF stylesheets, and heavy enterprise SIEM deployments. Browser print-to-PDF broke table pagination, while enterprise platforms were too heavy for portable assessment batches.',
      productDecision:
        'Built a self-contained Python (FastAPI + ThreadPoolExecutor + SQLite) and React 19 workbench that records SHA-256 file hashes on upload, normalizes findings into 5 severity tiers, and compiles paginated PDFs via ReportLab.',
      prototypeEvolution:
        'Evolved from single-file XML parsing scripts into a concurrent multi-file ingestion pipeline paired with an interactive Recharts dashboard and an automated ReportLab executive report generator.',
    },
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
    productThinking: {
      researchContext:
        'Investigated 3,900 customer transaction records across product categories, purchase frequencies, subscription flags, and promotional code usage to test whether high spend equated to organic customer loyalty.',
      userNeeds:
        'Retail and D2C decision-makers needed a clear way to distinguish full-price repeat buyers from promo-triggered shoppers so marketing campaigns could protect profit margins.',
      alternativesConsidered:
        'Compared simple single-metric sorting (ranking customers by total spend alone) against multi-dimensional behavioural segmentation combining spend, order frequency, and discount dependency.',
      productDecision:
        'Paired SQL cohort verification and Python feature engineering with an interactive Power BI dashboard and a written Retention Playbook so non-technical business owners receive both visual filters and concrete campaign actions.',
      prototypeEvolution:
        'Moved from exploratory Jupyter notebooks in Python to validated SQL segment queries, an interactive Power BI (.pbix) model, and a commercial Retention Playbook.',
    },
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
    productThinking: {
      researchContext:
        'Studied why compliance and operations teams hesitate to adopt AI document reviewers: generative models alone can hallucinate policy thresholds or flip pass/fail verdicts across runs.',
      userNeeds:
        'Reviewers need 100% repeatable pass/fail policy checks paired with a fast, plain-English explanation they can share with stakeholders.',
      alternativesConsidered:
        'Compared pure prompt-based LLM contract review against keyword-only regex scripts. Prompt-only review lacked audit predictability; keyword scripts gave no human-readable explanation.',
      productDecision:
        'Separated decision authority from explanation: FAISS retrieves clauses, deterministic Python rules lock the pass/fail verdict with a SHA-256 hash, and ONNX Runtime + DirectML generates the narrative explanation.',
      prototypeEvolution:
        'Built as a FastAPI + Streamlit technical prototype benchmarked on AMD Ryzen AI hardware (~420ms explanation latency via DirectML).',
    },
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
    productThinking: {
      researchContext:
        'Explored how operational and security analysts triage dense alert logs under time pressure during the Orcathon 2026 competition.',
      userNeeds:
        'Analysts needed fast signal filtering, clear severity badges, and a connected timeline view without spinning up live infrastructure.',
      alternativesConsidered:
        'Considered static table logs versus an interactive timeline workbench powered by deterministic synthetic fixtures.',
      productDecision:
        'Built a responsive TypeScript + Vite + Express workbench deployed on Vercel using safe synthetic event fixtures so anyone can test the investigation flow immediately.',
      prototypeEvolution:
        'Designed and shipped solo during Orcathon 2026 as a live interactive investigation interface.',
    },
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
    id: 'data-intelligence',
    number: '01',
    title: 'Data & Business Intelligence',
    plainTagline: 'Business analytics, dashboards, customer insights and research-driven decisions.',
    domain: 'data-intelligence',
    targetAudience:
      'For founders, D2C brands, and small businesses with sales or customer spreadsheets that need clear answers.',
    problemStatement:
      'Many growing businesses have thousands of rows of orders, invoices, or customer logs sitting in Excel, Tally, or Shopify exports. Yet it is still hard to see which customers truly come back at full price, which products drive real margin, or where revenue is leaking.',
    description:
      'I take your raw spreadsheets or exports, clean up errors and missing fields, study the customer and revenue patterns, and hand back an interactive Power BI dashboard plus a clear action guide.',
    plainBenefitSummary:
      'Stop guessing from raw spreadsheets. See your best customer groups, repeat buying habits, and key numbers in one clear view.',
    deliverables: [
      'Cleaned and verified datasets (Python & SQL data preparation)',
      'Customer behaviour & discount-sensitivity breakdowns',
      'Interactive Power BI visual dashboards',
      'Monthly or campaign performance summaries',
      'Plain-English action guide & retention recommendations',
    ],
    technicalUnderTheHood: [
      'Data cleaning and schema validation in Python (Pandas, NumPy)',
      'Cohort, retention, and segment aggregation queries in SQL',
      'Interactive Power BI (.pbix) data modelling and DAX measures',
    ],
    exampleScenarios: [
      {
        businessType: 'D2C & E-Commerce Brand',
        challenge:
          'Sales jump during discount campaigns, but you cannot tell which buyers stay loyal without promo codes.',
        practicalSolution:
          'A customer segmentation study and Power BI dashboard separating loyal full-price buyers from discount-dependent shoppers.',
      },
      {
        businessType: 'Small Business or Operations Team',
        challenge:
          'Someone spends days every month combining three different Excel sheets just to check performance.',
        practicalSolution:
          'A repeatable cleaning script and a visual dashboard that organises your core metrics automatically.',
      },
    ],
    portfolioProof: [
      {
        title: 'Decoding Customer Value',
        slug: 'decoding-customer-value',
        summary:
          'Analysed 3,900 customer shopping records using Python, SQL, and Power BI to separate loyal buyers from discount-triggered shoppers.',
      },
      {
        title: 'OTT Viewer Retention Analysis',
        summary:
          'Studied streaming viewer drop-off and engagement cohorts to explain what keeps subscribers active.',
      },
    ],
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI & Workflow Automation',
    plainTagline: 'Document processing, practical AI workflows, automation and rule-backed systems.',
    domain: 'ai-automation',
    targetAudience:
      'For teams that spend too many hours reading routine PDFs, circulars, contracts, or checklists by hand.',
    problemStatement:
      'Teams lose hours every week reading unstructured PDFs, notices, or standard agreements—copying dates into calendars, checking policy rules manually, and worrying about missing an important change.',
    description:
      'I build practical workflows where AI reads and organises messy text, while fixed computer rules verify dates, schedule overlaps, and compliance checklists reliably.',
    plainBenefitSummary:
      'Automate repetitive document reading and rule-checking while keeping critical dates and decisions under strict rules.',
    deliverables: [
      'Automatic date, deadline, and action-item extraction from PDFs or text',
      'Automated schedule clash detection and calendar (.ics) exports',
      'Document revision trackers that highlight what changed',
      'Rule-backed compliance or checklist evaluation with plain-English summaries',
      'Structured outputs ready for your team’s daily tools',
    ],
    technicalUnderTheHood: [
      'LLM semantic text structuring (Qwen2.5-7B-Instruct via API or local ONNX/DirectML models)',
      'Deterministic regex and interval collision math: (StartA < EndB) && (StartB < EndA)',
      'FAISS vector clause retrieval, SHA-256 verification, and RFC 5545 iCalendar generation',
    ],
    exampleScenarios: [
      {
        businessType: 'Educational or Operations Team',
        challenge:
          'Important deadlines arrive inside long PDF circulars, causing missed dates and overlapping events.',
        practicalSolution:
          'An automated notice reader that pulls out dates, warns of clashes, tracks revisions, and exports calendar files.',
      },
      {
        businessType: 'Consulting or Compliance Workflow',
        challenge:
          'Reviewing routine agreements against a standard company checklist takes hours of manual reading.',
        practicalSolution:
          'A rule-backed review tool that checks clauses using fixed rules and uses AI to write a clear summary.',
      },
    ],
    portfolioProof: [
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary:
          'Live web app that reads unstructured notices, automatically finds overlapping schedules, tracks changes, and exports calendar files.',
      },
      {
        title: 'Contract Risk Governance Engine',
        slug: 'contract-risk-governance',
        summary:
          'Applied AI prototype where fixed rules lock compliance decisions and AI writes a clear explanation for reviewers.',
      },
    ],
  },
  {
    id: 'digital-products',
    number: '03',
    title: 'Digital Products & Prototyping',
    plainTagline: 'Product research, prototypes, web applications and custom digital tools.',
    domain: 'custom-systems',
    targetAudience:
      'For founders, startups, and product teams that need a working web application, prototype, or custom internal tool.',
    problemStatement:
      'Off-the-shelf software often forces you into clunky workarounds, while hiring a large agency is overkill when you need a focused web application, an interactive prototype for early users, or a custom reporting tool.',
    description:
      'I research the user flow, design the interface and system architecture, and code clean web applications, multi-file ingestion engines, and one-click PDF report generators.',
    plainBenefitSummary:
      'Turn an early product concept or a slow internal workflow into a fast, working web application you own.',
    deliverables: [
      'Interactive web application prototypes for startups and product teams',
      'Custom internal dashboards and investigation workbenches',
      'Multi-file XML/CSV ingestion and deduplication pipelines',
      'One-click automated executive PDF report generators',
      'Clean, documented React/TypeScript & Python source code',
    ],
    technicalUnderTheHood: [
      'Modern web interfaces built with React 19, TypeScript, Vite, Tailwind CSS, and Recharts',
      'Backend APIs and parallel workers in Python (FastAPI, ThreadPoolExecutor) or Node/Express',
      'SQLite / SQLAlchemy persistence and programmatic ReportLab PDF generation',
    ],
    exampleScenarios: [
      {
        businessType: 'Startup Founder or Product Team',
        challenge:
          'You have a product idea and need a working web prototype to test with real users or demonstrate to partners.',
        practicalSolution:
          'A thoughtfully designed, functional web application focused on your core user workflow.',
      },
      {
        businessType: 'Technical Consultancy or Assessment Practice',
        challenge:
          'Merging outputs from multiple tools into a formatted client PDF report takes hours of manual copy-pasting.',
        practicalSolution:
          'A custom web system that ingests raw files, removes duplicates, and compiles the finished PDF report in one click.',
      },
    ],
    portfolioProof: [
      {
        title: 'SentinelX',
        slug: 'sentinelx',
        summary:
          'Full-stack Python & React platform that merges multi-tool XML/CSV scans and generates executive PDF reports.',
      },
      {
        title: 'Lureline',
        slug: 'lureline',
        summary:
          'Live interactive workbench deployed on Vercel for filtering alerts and exploring connected timelines.',
      },
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary:
          'End-to-end React + Express web application deployed live on Render.',
      },
    ],
  },
];

export const SUPPORTING_CAPABILITIES = [
  {
    id: 'product-strategy-ux',
    number: 'S1',
    title: 'Product Strategy & UX',
    tagline: 'Problem discovery, user workflows, and clear interface design before coding.',
    problem:
      'Jumping straight into code without understanding how people actually work often leads to cluttered software nobody wants to use.',
    whatIDo:
      'I map out user needs, evaluate simpler alternatives first, and design clean, readable interfaces before writing production code.',
    whatYouReceive:
      'Clear workflow diagrams, thoughtful screen layouts, and software that feels straightforward to use.',
    evidenceProjects: [
      'Notice Decoder (Schedule planner & Change Radar UX)',
      'Lureline (Interactive investigation timeline workbench)',
      'ResolX.ai AI Solutioning Internship',
    ],
  },
  {
    id: 'brand-market-research',
    number: 'S2',
    title: 'Brand & Market Research',
    tagline: 'Customer segmentation, competitor research, and insight synthesis grounded in data.',
    problem:
      'Many businesses confuse paid ads, brand positioning, and customer retention—or launch features without studying competitor and customer patterns.',
    whatIDo:
      'I study customer transaction behaviour, synthesise market and competitor information into plain-English briefs, and connect research directly to product and retention decisions.',
    whatYouReceive:
      'Structured research briefs, customer segmentation playbooks, and clear positioning recommendations.',
    evidenceProjects: [
      'Decoding Customer Value (3,900-record loyalty vs. discount study)',
      'CareerWithDishani Research & Insight Synthesis Internship',
    ],
  },
  {
    id: 'software-quality',
    number: 'S3',
    title: 'Software Quality',
    tagline: 'Reliable rules, cryptographic file checks, deduplication, and automated reporting accuracy.',
    problem:
      'Prototypes and internal tools often break when given messy files, duplicate records, or edge-case dates.',
    whatIDo:
      'I build fixed validation rules, SHA-256 file integrity checks, deduplication logic, and structured PDF/calendar exports so software behaves predictably.',
    whatYouReceive:
      'Clean, maintainable TypeScript/Python codebases with automated checks and clear technical handover documentation.',
    evidenceProjects: [
      'SentinelX (SHA-256 integrity & 5-level normalization)',
      'Contract Risk Governance Engine (Deterministic rule engine + SHA-256 audit hash)',
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'fixed-scope-pilot',
    number: '01',
    title: 'Fixed-Scope Pilot',
    bestFor: 'Testing a solution on one dataset, document type, or core workflow first.',
    plainDescription:
      'Start with a small, clearly defined pilot—such as analysing one sample spreadsheet or automating one document check—before committing to a larger build.',
    whatYouGet: 'A working proof of value, clear deliverables, and zero long-term lock-in.',
  },
  {
    id: 'custom-project',
    number: '02',
    title: 'Custom Project',
    bestFor: 'End-to-end dashboards, workflow automations, or full-stack web tools.',
    plainDescription:
      'Once we agree on the exact deliverables and milestones, I design, build, test, and hand over the complete solution tailored to your business.',
    whatYouGet: 'Complete working software or dashboard, source files, and a plain-English user guide.',
  },
  {
    id: 'research-technical-assessment',
    number: '03',
    title: 'Research & Technical Assessment',
    bestFor: 'Founders and teams exploring how to turn a rough idea or messy process into a system.',
    plainDescription:
      'I audit your sample data or manual workflow, research the technical options, and design a clear architecture blueprint and implementation plan.',
    whatYouGet: 'A structured feasibility report, visual workflow diagram, and practical build roadmap.',
  },
  {
    id: 'ongoing-improvement',
    number: '04',
    title: 'Ongoing Improvement',
    bestFor: 'Refining dashboards, adding new rules, or extending a tool after launch.',
    plainDescription:
      'Where appropriate after delivering a project, we can schedule focused follow-up iterations as your data grows or your team requests new features.',
    whatYouGet: 'Direct support and iterative upgrades from the original builder.',
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    stageKey: 'RESEARCH',
    title: 'Research the Problem',
    shortLabel: 'Problem & Context',
    description:
      'You explain what is slowing down your team or what idea you want to build. I study the real workflow and business goal before suggesting any tool.',
    whatIContribute: 'Problem framing, workflow audit, and identifying the simplest high-impact solution.',
    whatYouReceive: 'A clear summary of the problem and an honest recommendation on what to build.',
  },
  {
    step: '02',
    stageKey: 'ANALYSIS',
    title: 'Analyse Data & Material',
    shortLabel: 'Data & Edge Cases',
    description:
      'We inspect a sample spreadsheet, PDF circular, or current manual process to uncover missing fields, edge cases, and key patterns.',
    whatIContribute: 'Data cleaning, SQL/Python exploration, and document structure analysis.',
    whatYouReceive: 'A realistic scope, clear milestone plan, and a customized INR proposal.',
  },
  {
    step: '03',
    stageKey: 'AI & LOGIC',
    title: 'Design AI & Fixed Rules',
    shortLabel: 'Rules + AI Design',
    description:
      'I separate what requires AI (reading messy text or writing summaries) from what requires fixed rules (dates, numbers, clashes, and policy checks).',
    whatIContribute: 'System architecture, prompt & model selection, and deterministic rule engines.',
    whatYouReceive: 'A reliable logic design where AI never guesses your critical dates or numbers.',
  },
  {
    step: '04',
    stageKey: 'SOFTWARE',
    title: 'Build Working Software',
    shortLabel: 'Code & Visuals',
    description:
      'I build the interactive Power BI dashboard, automation pipeline, or full-stack web application—sharing working previews directly with you.',
    whatIContribute: 'End-to-end development in React, TypeScript, Python, SQL, or Power BI.',
    whatYouReceive: 'Working previews you can test and refine before final completion.',
  },
  {
    step: '05',
    stageKey: 'DELIVERY',
    title: 'Deliver & Hand Over',
    shortLabel: 'Handover & Guide',
    description:
      'You receive the finished dashboard, report engine, or web app along with clean source files and a plain-English guide for your team.',
    whatIContribute: 'Quality checks, deployment or file packaging, and clear documentation.',
    whatYouReceive: 'Complete ownership of the deliverable and a straightforward guide to run it.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    stepNumber: '01',
    title: 'RESEARCH — Understand the Problem & Workflow',
    shortLabel: '01 · RESEARCH',
    clientExperience:
      'We begin with a plain-English conversation about what is taking too much manual time, what question your numbers are not answering, or what product idea you want to prototype.',
    whatYouProvide: 'A short explanation of your problem and what a useful outcome looks like for your team.',
    whatYouReceive:
      'A clear assessment of whether your problem is best solved with data analysis, workflow automation, a custom web tool, or a small fixed-scope pilot.',
    keyPrinciple: 'Start with the human and business problem, never with technical jargon.',
    technicalNote:
      'Problem discovery, workflow mapping, and deciding between analytical vs. full-stack software deliverables.',
  },
  {
    stepNumber: '02',
    title: 'ANALYSIS — Inspect Sample Data, Documents & Edge Cases',
    shortLabel: '02 · ANALYSIS',
    clientExperience:
      'Before locking scope, I examine a sample spreadsheet, PDF document, or manual checklist so we catch messy formatting or edge cases early.',
    whatYouProvide:
      'A sample Excel/CSV export (with sensitive fields masked if needed), sample PDFs, or a walkthrough of your current steps.',
    whatYouReceive:
      'Clear feedback on data readiness plus a written scope and customised INR proposal.',
    keyPrinciple: 'Inspect the real material first so the scope and timeline are grounded in reality.',
    technicalNote:
      'Exploratory data profiling in Python/SQL, schema auditing, and identifying document parsing edge cases.',
  },
  {
    stepNumber: '03',
    title: 'AI & LOGIC — Combine Smart Reading With Fixed Rules',
    shortLabel: '03 · AI & LOGIC',
    clientExperience:
      'I design the brain of the solution: AI handles messy text and plain-English summaries, while fixed computer rules handle dates, schedule clashes, calculations, and compliance checks.',
    whatYouProvide: 'Confirmation of the business rules, priorities, or checklist criteria your team follows.',
    whatYouReceive:
      'A visual system flow showing exactly how inputs are processed, verified, and turned into outputs.',
    keyPrinciple: 'AI reads and explains; fixed rules verify dates, numbers, and policy decisions.',
    technicalNote:
      'Hybrid architecture combining LLM extraction/narration with deterministic validation, regex/interval math, and SHA-256 integrity checks.',
  },
  {
    stepNumber: '04',
    title: 'SOFTWARE — Build the Dashboard, Automation or Web Tool',
    shortLabel: '04 · SOFTWARE',
    clientExperience:
      'I build the solution myself—whether that is an interactive Power BI dashboard, a Python processing pipeline, or a React & TypeScript web application—and share working checkpoints.',
    whatYouProvide: 'Direct feedback on working previews so we can adjust labels, filters, or report layouts.',
    whatYouReceive:
      'Direct 1-on-1 collaboration with the builder and a clean, responsive tool tailored to your workflow.',
    keyPrinciple: 'Every screen, chart, and report is built to be clear and immediately usable.',
    technicalNote:
      'Full-stack implementation across React 19, TypeScript, FastAPI, Express, SQLite, Power BI, and ReportLab PDF engines.',
  },
  {
    stepNumber: '05',
    title: 'DELIVERY — Handover, Documentation & Next Steps',
    shortLabel: '05 · DELIVERY',
    clientExperience:
      'Once we review the finished deliverable against the agreed scope, I hand over the live app, code repository, or dashboard files along with a simple guide.',
    whatYouProvide: 'Final review walkthrough against the agreed deliverables.',
    whatYouReceive:
      'The complete working solution, source code or dashboard files, and a plain-English guide so your team can use it confidently.',
    keyPrinciple: 'No black boxes—you receive a transparent system you can understand and use.',
    technicalNote:
      'Repository handover, environment & deployment instructions, and structured user documentation.',
  },
];

export const INSIGHT_NOTES: InsightNote[] = [
  {
    id: 'marketing-vs-branding-vs-advertising',
    number: '01',
    title: 'Marketing vs. Branding vs. Advertising: How They Actually Fit Together',
    category: 'Marketing & Brand Research',
    readTime: '4 min read',
    groundedInProject: 'Educational Research Article & Decoding Customer Value',
    groundedProjectSlug: 'decoding-customer-value',
    thesis:
      'Marketing, branding, and advertising are related, but they are not the same job: marketing is the broader business growth system, branding is the identity and trust a business builds, and advertising is paid promotion inside that system.',
    plainSummary: [
      'Founders and small business owners often use the words marketing, branding, and advertising as if they mean the exact same thing. When a business treats them as interchangeable, it usually ends up paying for ads before fixing its product positioning or customer retention.',
      'Marketing is the complete system for understanding customer needs, designing the right offer, choosing pricing and channels, and keeping buyers coming back. Advertising is just one paid lever inside marketing—renting attention through search ads, social campaigns, or sponsorships.',
      'Branding is what remains when the paid ad stops running: the reputation, clarity, and trust a customer associates with your name. In my work, I approach these through research and customer data analysis rather than claiming to run a full-service ad agency.',
    ],
    keyTakeaways: [
      'Marketing (The Growth System): How you research the market, price your offer, distribute it, and retain customers over time.',
      'Branding (Identity & Perception): Why a customer trusts you, remembers you, and buys at full price without waiting for a coupon.',
      'Advertising (Paid Promotion): Paid campaigns used to amplify a message once your offer and audience are already clear.',
    ],
    practicalImplicationForSMBs:
      'Before increasing your paid advertising budget, check your customer data first: if buyers only purchase when given a heavy discount, more ads will only amplify margin leakage.',
    technicalBreakdown: [
      'Educational synthesis connecting brand perception directly to measurable repeat-purchase metrics.',
      'Grounded in our 3,900-record Decoding Customer Value study, where we measured organic repeat purchases against promo-code dependency.',
      'Clarifies where data analysis and product thinking support a founder’s growth strategy.',
    ],
  },
  {
    id: 'brand-strategy-customer-journeys-loyalty',
    number: '02',
    title: 'Consumer Behaviour & Customer Journeys: Why High Spend Isn’t Always Brand Loyalty',
    category: 'Marketing & Brand Research',
    readTime: '4 min read',
    groundedInProject: 'Decoding Customer Value (3,900-record study)',
    groundedProjectSlug: 'decoding-customer-value',
    thesis:
      'True brand positioning shows up in customer behaviour: if a high-spending customer segment only buys when a promo code is active, they are loyal to the discount, not the brand.',
    plainSummary: [
      'When businesses map their customer journey, they often group buyers simply by total money spent and assume top spenders are brand advocates.',
      'In our analysis of 3,900 customer shopping records, we cross-checked purchase spend against how frequently each segment relied on discounts and promo codes.',
      'Separating full-price repeat buyers from discount-triggered buyers lets a business design smarter integrated campaigns—rewarding genuine loyalty with early access while keeping promotional discounts targeted.',
    ],
    keyTakeaways: [
      'Track promo-code usage alongside order value at every stage of the customer journey.',
      'Align integrated marketing campaigns with margin reality: do not train full-price loyalists to wait for seasonal coupon codes.',
      'Dataset scope note: These behavioural patterns are specific to the 3,900-record dataset studied and should be tested on your own order logs.',
    ],
    practicalImplicationForSMBs:
      'Ask one question of your sales export this week: which customer segments return for a second and third order without a discount code?',
    technicalBreakdown: [
      'Cleaned and validated 3,900 customer rows in Python (Pandas and NumPy).',
      'Wrote SQL cohort and segment queries comparing average purchase value against promo_dependency_pct.',
      'Delivered an interactive Power BI dashboard and a segment-by-segment Retention Playbook.',
    ],
  },
  {
    id: 'product-discovery-problem-validation',
    number: '03',
    title: 'Product Discovery & Problem Validation: Defining the Real Bottleneck Before Writing Code',
    category: 'Product Thinking',
    readTime: '4 min read',
    groundedInProject: 'Notice Decoder & SentinelX',
    groundedProjectSlug: 'notice-decoder',
    thesis:
      'Good product engineering starts by questioning the problem first: before choosing a framework or AI model, map what users actually struggle with and test why simpler alternatives fall short.',
    plainSummary: [
      'It is easy to jump straight into building a dashboard or AI chatbot the moment someone describes an idea. Without product discovery, you risk building a polished interface that misses the real operational pain.',
      'When designing Notice Decoder, the real problem was not "summarise a college circular"—students can skim a paragraph themselves. The real pain was missing a deadline clash or failing to notice that a revised circular shifted an exam date.',
      'Similarly, in SentinelX, security analysts did not need another scanner; they needed a way to merge messy XML/CSV outputs from Nmap and OWASP ZAP, remove duplicate alerts, and export a clean executive PDF in one click.',
    ],
    keyTakeaways: [
      'Separate the surface request ("build an AI notice reader") from the real user need ("warn me before two events clash").',
      'Compare low-code or manual alternatives honestly before committing to custom software.',
      'Prototype the highest-risk workflow step first so users can test real inputs early.',
    ],
    practicalImplicationForSMBs:
      'When scoping a new digital tool, spend the first few days inspecting real sample documents or spreadsheets—it saves weeks of unnecessary coding later.',
    technicalBreakdown: [
      'Applied structured product thinking (Problem → Research → User Needs → Alternatives → Decision → Prototype) across Notice Decoder and SentinelX.',
      'Built Notice Change Radar and deterministic interval clash checks in React + Express.',
      'Designed multi-tool XML/CSV deduplication and ReportLab PDF generation in Python + FastAPI.',
    ],
  },
  {
    id: 'competitor-research-market-analysis',
    number: '04',
    title: 'Competitor Research & Market Analysis: Finding Practical Gaps for New Digital Tools',
    category: 'Product Thinking',
    readTime: '3 min read',
    groundedInProject: 'CareerWithDishani & ResolX.ai Internship Research + Lureline',
    groundedProjectSlug: 'lureline',
    thesis:
      'Useful market and competitor research is not about copying feature checklists—it is about spotting where existing tools are too complex, too expensive, or too rigid for everyday teams.',
    plainSummary: [
      'When founders study competitors, they often collect a giant spreadsheet of twenty features and try to build all of them at once.',
      'Through my research and solution-design work—both in internship synthesis projects and when building focused tools like Lureline—I found that small businesses and operational teams rarely want more buttons.',
      'Instead, the strongest product opportunity usually lies in removing friction: turning a cluttered, multi-step workflow into one clear screen that works reliably on the team’s existing files.',
    ],
    keyTakeaways: [
      'Look for workflow friction in existing tools rather than trying to match big-company feature lists.',
      'Synthesise scattered market research into a one-page decision brief that anyone on the team can read in five minutes.',
      'Validate the gap with a fast, working prototype using realistic sample data.',
    ],
    practicalImplicationForSMBs:
      'If off-the-shelf software feels too bloated for your team, a small custom web tool focused on your exact 3-step workflow is often faster to adopt.',
    technicalBreakdown: [
      'Synthesised multi-source research into structured decision guides during internship work at CareerWithDishani and ResolX.ai.',
      'Designed Lureline in TypeScript, Vite, and Express using deterministic synthetic fixtures so reviewers can test timeline filtering immediately.',
    ],
  },
  {
    id: 'deterministic-extraction-document-automation',
    number: '05',
    title: 'How to Automate Document Reading Without Letting AI Guess Dates',
    category: 'Applied AI & Data',
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
    id: 'ai-without-surrendering-business-logic',
    number: '06',
    title: 'Rule-Backed AI: Keeping Compliance Decisions in Fixed Code While AI Writes the Explanation',
    category: 'Applied AI & Data',
    readTime: '3 min read',
    groundedInProject: 'Contract Risk Governance Engine',
    groundedProjectSlug: 'contract-risk-governance',
    thesis:
      'In compliance and policy checks, fixed rules should decide whether a document passes or fails, and AI should simply explain that decision clearly.',
    plainSummary: [
      'Business owners often worry that adding AI to a review process means losing control over company policies.',
      'In the Contract Risk Governance Engine prototype, the AI never decides whether a contract clause is compliant.',
      'Instead, fixed rules check the clause first. Once the pass/fail result is locked and sealed with a SHA-256 fingerprint, the AI writes a short, easy-to-read explanation for the human reviewer.',
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

export const VERIFIED_EXPERIENCE = [
  {
    id: 'resolx-ai',
    role: 'AI Solutioning Intern',
    organisation: 'ResolX.ai',
    category: 'Applied AI & Solution Design',
    periodLabel: 'Verified Internship Experience',
    plainSummary:
      'Worked on translating practical business and operational problems into structured AI-assisted workflows and solution architectures.',
    keyContributions: [
      'Researched and structured practical AI solution blueprints around real operational bottlenecks.',
      'Focused on combining language models with clear business logic so outputs remain reliable and useful for end users.',
      'Prepared clear technical and functional documentation to bridge product ideas and engineering execution.',
    ],
    privacyNote:
      'Presented at a high level in accordance with professional confidentiality; no proprietary client or internal documents are published.',
  },
  {
    id: 'career-with-dishani',
    role: 'Research & Insight Synthesis Intern',
    organisation: 'CareerWithDishani',
    category: 'Research, Analysis & Content Systems',
    periodLabel: 'Verified Internship Experience',
    plainSummary:
      'Conducted structured research and distilled complex educational and career information into clear, actionable insights and guides.',
    keyContributions: [
      'Researched multi-source information and synthesised findings into clear, easy-to-scan decision guides.',
      'Developed repeatable research templates and structured summaries for non-technical readers.',
      'Strengthened the habit of turning dense, scattered material into plain-English recommendations.',
    ],
    privacyNote:
      'Summarised from verified internship records without exposing internal working drafts.',
  },
];

export const VERIFIED_ACADEMIC_RECORD = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Institute of Information Technology & Management (IITM)',
  affiliation: 'Affiliated with Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi',
  cgpa: '9.10 / 10',
  aggregatePercentage: '85.026%',
  semesterSgpas: [
    { semester: 'Semester I', sgpa: '9.50' },
    { semester: 'Semester II', sgpa: '8.81' },
    { semester: 'Semester III', sgpa: '9.10' },
    { semester: 'Semester IV', sgpa: '8.96' },
  ],
  certificationsAndHighlights: [
    'Team Leader & System Architect — Notice Decoder (Live Full-Stack AI Web App)',
    'Co-Developer & System Architect — SentinelX (100+ Page Academic Technical Report)',
    'Lead Product Analyst — Decoding Customer Value (IITG Study across 3,900 Records)',
    'Solo Developer — Lureline (Orcathon 2026 Competition Prototype)',
  ],
  contextNote:
    'Included as supporting credibility showing consistent analytical and engineering discipline alongside real software and data projects.',
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
