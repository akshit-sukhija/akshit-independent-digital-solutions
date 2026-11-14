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
  drivePdfUrl?: string;
  drivePdfPlaceholder?: string;
  recognitionBadge?: string;
  specialCredit?: string;
  screenshotUrl?: string;
  screenshotCaption?: string;
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
import {
  CURATED_WORK_ITEMS,
  type CuratedWorkItem,
  type CuratedWorkSection,
  type WorkCollaborationType,
  type CuratedDomain,
} from './portfolioInventory';

export const PROFILE_CONFIG = CENTRAL_PROFILE_CONFIG;
export const TECHNOLOGY_EXPLORER_ITEMS = CENTRAL_TECH_EXPLORER;
export const STUDIO_FAQS = CENTRAL_STUDIO_FAQS;
export {
  CURATED_WORK_ITEMS,
  type CuratedWorkItem,
  type CuratedWorkSection,
  type WorkCollaborationType,
  type CuratedDomain,
};

export const BRAND_IDENTITY = {
  name: 'AKSHIT SUKHIJA',
  studioTitle: 'AKSHIT SUKHIJA | Independent Digital Content & Solutions Studio',
  positioningStatement: 'Creative ideas. Clear stories. Digital experiences.',
  heroHeadline: 'Ideas worth noticing. Stories worth remembering. Digital experiences that work.',
  heroSupportingCopy:
    'Creative ideas. Clear stories. Digital experiences. I combine brand storytelling, digital content production, custom websites, and AI-powered digital solutions to help founders and teams turn ambitious concepts into work that stands out.',
  operatorStatus: 'Independent Digital Content & Solutions Studio · New Delhi / NCR, India',
  differentiation:
    'You work directly with the strategist, story designer, and software engineer—connecting narrative clarity with working websites and AI-powered solutions.',
  targetAudienceList: [
    'Startup founders & early-stage product teams',
    'D2C and consumer brands seeking clearer storytelling',
    'Small and medium-sized businesses (SMBs)',
    'Product and marketing teams launching new initiatives',
    'Consultants and operators needing custom web & AI tools',
    'Educational and institutional teams',
  ],
};

export const CAPABILITY_PILLARS = [
  {
    id: 'data-intelligence' as CapabilityDomain,
    number: '01',
    title: 'Brand Strategy, Storytelling & Research',
    shortSummary:
      'Product positioning, visual pitch systems, market research, and customer behaviour insights grounded in real evidence.',
    technicalNote:
      'Combines narrative architecture and visual storytelling with Python, SQL, and Power BI customer segmentation.',
    outcomeFocus: 'Turn complex product ideas or raw market data into clear, memorable stories and decisions.',
    proofSlugs: ['reframe', 'decoding-customer-value'],
  },
  {
    id: 'custom-systems' as CapabilityDomain,
    number: '02',
    title: 'Websites & Digital Experiences',
    shortSummary:
      'Custom web applications, interactive prototypes, product showcases, and internal workbenches built with modern engineering.',
    technicalNote:
      'Full-stack engineering using React 19, TypeScript, Vite, Tailwind CSS, Python (FastAPI), and ReportLab PDF engines.',
    outcomeFocus: 'Launch responsive websites, interactive prototypes, and custom web applications that work.',
    proofSlugs: ['notice-decoder', 'sentinelx', 'lureline', 'clarity-redemption-ai'],
  },
  {
    id: 'ai-automation' as CapabilityDomain,
    number: '03',
    title: 'AI-Powered Digital Solutions',
    shortSummary:
      'Document processing, prompt systems, schedule clash detection, and rule-backed AI workflows.',
    technicalNote:
      'Pairs LLMs for unstructured text understanding with deterministic code rules for dates, math, and policy checks.',
    outcomeFocus: 'Automate repetitive document reading and synthesis without sacrificing accuracy.',
    proofSlugs: ['notice-decoder', 'contract-risk-governance'],
  },
];

export const PROJECTS: ProjectData[] = [
  {
    slug: 'reframe',
    priorityOrder: 0,
    tier: 'flagship',
    tierLabel: '1st Place · REVIVEX · ZERO² 2026',
    indexNumber: '00',
    title: 'RE:FRAME',
    subtitle: 'Smart Glasses, A More Focused You — Reimagining Google Glass for Mindful Everyday Utility',
    plainSubtitle:
      'Award-winning product revival concept, Focus Engine UX architecture, companion-app ecosystem, and 15-slide visual presentation developed for REVIVEX at ZERO² 2026.',
    category: 'Brand Storytelling, Product Strategy & Visual Concept',
    domain: 'custom-systems',
    projectClassification: 'Independent Hardware/Product Concept · 1st Place Winner',
    evidenceTypeLabel: '1st Place Award + 15-Slide Presentation PDF',
    visualAccent: '#38BDF8',
    recognitionBadge: '1st Place · REVIVEX · ZERO² 2026',
    documentedRole:
      'Lead Product Strategist, Concept Architect & Co-Presenter',
    collaborators:
      'Presented by Akshit Sukhija & Adyot Ohri (Team Selfish Gods · REVIVEX at ZERO² 2026, IITM Janakpuri)',
    specialCredit: 'Special Video Credit: Adyot Ohri',
    attributionNote:
      'Presented by Akshit Sukhija and Adyot Ohri at ZERO² — The Innovator’s Convention (September 21–22, 2026, organized by InternWare, IITM Janakpuri), securing 1st Position in REVIVEX. Akshit Sukhija led product research, competitive analysis, concept development, product architecture, the Focus Engine, companion-app ecosystem, product strategy, pricing proposal (₹39,999), and slide presentation. Adyot Ohri contributed as teammate and co-presenter, with Special Video Credit.',
    problemSummary:
      'Smartphones brought the world into our hands, but constant notifications ("One quick check. Many distractions.") pull us out of real life. Meanwhile, original 2014 Google Glass failed mainstream adoption due to its high price, unconventional cyborg aesthetic, privacy concerns, and unclear daily use case.',
    businessContext:
      'Demonstrates how our studio approaches product positioning, competitive teardown, UX ecosystem architecture, and high-impact visual storytelling to revive a challenging technology category.',
    approachSummary:
      'Diagnose the four structural failure modes of 2014 Google Glass, re-anchor the product around reducing screen distraction ("Look Up and Live It"), offload heavy compute to the user’s smartphone, and introduce a context-aware Focus Engine that filters notification noise.',
    solutionSummary:
      'A comprehensive product concept and 15-slide visual strategy encompassing modular eyewear hardware (Micro-OLED HUD, Ultra-Wide Camera, Touch Pad, Modular Arms, Charging Case), the RE:FRAME Companion App Ecosystem, the 4-stage Focus Engine, four core everyday utilities (Translate, Navigate, Compare, Summarize), privacy-by-design hardware controls, and a ₹39,999 Indian market positioning strategy.',
    resultSummary:
      'Awarded 1st Position in REVIVEX at ZERO² 2026 (September 21–22, 2026 · InternWare, IITM Janakpuri). Important Note: RE:FRAME is an independent, unbuilt hardware/product concept—not an official Google product or a commercially deployed device.',
    productThinking: {
      researchContext:
        'Studied the history of Google Glass (Consumer Explorer Program ended January 2015) alongside modern smartphone notification overload. Identified four core barriers that stopped original Google Glass: prohibitive pricing, awkward industrial design, bystander privacy anxiety, and lack of a daily problem-solving loop.',
      userNeeds:
        'Everyday users (students, professionals, creators, explorers) do not want a cluttered smartphone screen strapped to their face. They want heads-up access to time-critical information—navigation turns, live translation, urgent meeting alerts—while filtering out low-priority social and delivery spam.',
      alternativesConsidered:
        'Evaluated (1) standalone heavy AR headsets with high battery drain and bulk, (2) audio-only smart glasses lacking visual context for navigation or translation, and (3) mirroring all phone notifications unfiltered onto a heads-up display.',
      productDecision:
        'Designed a 3-tier Glasses–Phone–Cloud architecture where the glasses stay lightweight for capture and Micro-OLED heads-up display, the paired smartphone handles AI processing and Focus Engine filtering, and physical privacy switches/LEDs guarantee user and bystander trust.',
      prototypeEvolution:
        'Synthesised the research, hardware callouts, companion mobile UI mockups, Focus Engine priority pipeline, 4 real-world use cases, and 5-pillar Revival Strategy into a cohesive 15-slide visual keynote deck.',
    },
    plainFeatures: [
      {
        plain: 'Focus Engine blocks low-priority notification noise and surfaces only time-critical context.',
        technical:
          '4-stage contextual pipeline: Captures All Input → Analyzes Context (time, place, activity, habits) → Filters & Prioritizes → Delivers in Your View.',
      },
      {
        plain: 'Everyday eyewear aesthetic with modular arms, custom nose pads, and a portable charging case.',
        technical:
          'Hardware concept specifies 01 Micro-OLED Display, 02 Ultra-Wide Camera, 03 Gesture Touch Pad, and 04 Lightweight Frame with replaceable modular arms.',
      },
      {
        plain: 'Four clear real-world utilities: Translate signs, Navigate streets, Compare products, and Summarize documents.',
        technical:
          'Heads-up AR overlays designed around "Look. Understand. Act."—making the world itself the interface rather than adding another screen.',
      },
      {
        plain: 'Privacy by design with a physical camera switch, visible recording LED, and phone-tethered compute.',
        technical:
          'Glasses–Phone–Cloud sync architecture via Bluetooth and USB-C charging case, keeping personal data controls inside the RE:FRAME companion app.',
      },
    ],
    verifiedStack: [
      'Product Strategy & Positioning',
      'Competitive Research & Teardown',
      'Focus Engine UX Design',
      'Companion App UI Architecture',
      'Visual Storytelling & Keynote Design',
    ],
    plainToolsSummary: [
      {
        tool: 'Product Teardown & Revival Strategy',
        whatItDoes: 'Diagnoses why 2014 Google Glass stalled and defines the 5-pillar revival roadmap.',
      },
      {
        tool: 'Focus Engine UX Architecture',
        whatItDoes: 'Designs the contextual notification filter separating urgent tasks from social clutter.',
      },
      {
        tool: 'Companion App & Ecosystem Design',
        whatItDoes: 'Maps the mobile interface for Capture, Manage, Customize, Sync, Control, and Insights.',
      },
      {
        tool: 'Visual Storytelling & Presentation System',
        whatItDoes: 'Translates hardware, software, and pricing strategy (₹39,999) into a 15-slide visual narrative.',
      },
    ],
    verifiedElements: [
      '1st Position Award in REVIVEX at ZERO² 2026 (IITM Janakpuri · September 21–22, 2026)',
      '15-slide RE:FRAME visual product concept presentation (PDF)',
      'Focus Engine contextual notification filtering architecture',
      'RE:FRAME App Ecosystem mobile UI concept & Multi-Device Sync diagram',
      'Four real-world HUD use cases: Translate, Navigate, Compare, Summarize',
      'Five-pillar Revival Strategy & ₹39,999 target market pricing proposal',
    ],
    deliverables: [
      '15-Slide Visual Product Concept & Revival Strategy Deck (PDF)',
      'Hardware Modular Concept Callouts & Charging Case Specification',
      'RE:FRAME Companion App UI & Focus Engine Workflow Design',
      'Target Audience Segmentation & ₹39,999 Pricing Proposal',
      '1st Place Recognition at REVIVEX · ZERO² 2026',
    ],
    drivePdfUrl: '/assets/aistudio/REFRAME_Smart_Glasses_Product_Concept_97e4e1df.pdf',
    screenshotUrl: '/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg',
    screenshotCaption:
      'RE:FRAME — Smart Glasses, A More Focused You (1st Place · REVIVEX · ZERO² 2026)',
    evidenceNote:
      'Verified by 1st Position Certificate & Trophy at ZERO² 2026 (InternWare, IITM Janakpuri) and the complete 15-slide presentation deck. Independent, unbuilt product concept.',
    architectureSummary:
      'RE:FRAME avoids bulky onboard processors by splitting work across three tiers: lightweight glasses capture POV input and project minimal Micro-OLED overlays, the paired smartphone runs the AI Focus Engine and companion control app, and cloud sync keeps media accessible across devices.',
    plainHowItWorksSummary:
      'Capture on Glasses (Camera, Mic & Touch Pad) → AI Processing & Focus Engine on Phone → Minimal Priority HUD in Your Line of Sight.',
    architectureNodes: [
      {
        id: 'rf-1',
        label: '1. Capture on Glasses',
        sublabel: 'Camera, Voice & Touch Pad',
        plainTitle: 'Lightweight Sensing & Input',
        plainDescription: 'Ultra-wide POV camera, voice control, and temple touch pad capture context without looking down.',
        layer: 'input',
      },
      {
        id: 'rf-2',
        label: '2. Phone Companion AI',
        sublabel: 'Bluetooth sync + AI compute',
        plainTitle: 'AI Processing on Your Phone',
        plainDescription: 'Offloads heavy compute to the paired smartphone via Bluetooth to keep the frame light and comfortable.',
        layer: 'processing',
      },
      {
        id: 'rf-3',
        label: '3. Focus Engine Filter',
        sublabel: 'Time, location & habit rules',
        plainTitle: 'Filter Noise & Prioritise',
        plainDescription: 'Blocks low-priority app spam and elevates urgent meetings, traffic alerts, or active tasks.',
        layer: 'verification',
      },
      {
        id: 'rf-4',
        label: '4. Micro-OLED HUD',
        sublabel: 'Translate · Navigate · Act',
        plainTitle: 'Deliver in Your Line of Sight',
        plainDescription: 'Displays calm, glanceable directions, translations, or summaries right where you look.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Diagnose Smartphone Distraction & 2014 Google Glass Limitations',
        detail: 'Identified why users lose presence to phone notifications and why 2014 Google Glass struggled (High Price, Unconventional Design, Privacy Concerns, Unclear Use Case).',
        technicalDetail: 'Grounded in historical teardown of the Google Glass Explorer Edition (ended January 2015).',
      },
      {
        step: '02',
        title: 'Design Everyday Modular Eyewear & Companion App Ecosystem',
        detail: 'Reimagined the frame to look like regular eyewear with a Micro-OLED display, ultra-wide camera, gesture touch pad, adjustable nose pads, modular arms, and portable charging case.',
        technicalDetail: 'Paired with the RE:FRAME mobile app for Capture, Manage, Customize, Sync, Privacy Control, and Insights.',
      },
      {
        step: '03',
        title: 'Architect the Contextual Focus Engine',
        detail: 'Instead of mirroring every WhatsApp, Swiggy, or Instagram alert into the user’s eyes, the Focus Engine evaluates time, location, and habits to surface only high-priority items.',
        technicalDetail: '4-step pipeline: Captures All Input → Analyzes Context → Filters & Prioritizes → Delivers in Your View.',
      },
      {
        step: '04',
        title: 'Define Four High-Utility Real-World Scenarios & Revival Strategy',
        detail: 'Demonstrated instant sign translation, turn-by-turn street navigation, retail product comparison, and document summarisation—positioned at ₹39,999 across 5 target user groups.',
        technicalDetail: 'Target segments: Students, Professionals, Creators, Explorers, and Real-World Problem Solvers.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Offload AI compute to the paired smartphone instead of heavy onboard processors',
        rationale:
          'Keeping heavy AI processing on the phone allows the glasses frame to remain lightweight, thermally comfortable, and affordable for all-day wear.',
        tradeoff:
          'Requires active Bluetooth pairing with the user’s smartphone for full AI and Focus Engine features.',
      },
      {
        decision: 'Make notification filtering (Focus Engine) the core software differentiator',
        rationale:
          'Putting unfiltered smartphone notifications in front of a user’s eyes increases distraction. A smart-glasses OS must block noise by default.',
        tradeoff:
          'Requires initial user preference setup and context rules in the companion app.',
      },
      {
        decision: 'Enforce visible hardware privacy controls',
        rationale:
          'Original Google Glass faced social pushback because bystanders could not tell when the camera was active. Physical switches and clear LED indicators restore trust.',
        tradeoff:
          'Prioritises transparent consent over covert recording.',
      },
    ],
    limitationsAndScope: [
      'RE:FRAME is an independent, unbuilt hardware and product strategy concept developed for the REVIVEX competition at ZERO² 2026 (IITM Janakpuri).',
      'It is NOT an official Google product, is not affiliated with Google LLC, and is not a commercially manufactured or deployed hardware device.',
      'The competition concept video contains third-party Google Glass-branded reference footage; therefore, it is withheld from public embedding until usage rights and original source permissions are confirmed, and is never presented as proof of a functioning hardware prototype.',
    ],
    keyLessons: [
      'Strong product storytelling starts with honest research into why earlier attempts failed—and solving the human friction first.',
      'Visual clarity, structured UX flows, and disciplined positioning turn a complex hardware/AI concept into an award-winning narrative.',
    ],
    evidenceArtifacts: [
      {
        title: 'RE:FRAME Concept Specification & Competition Attribution Summary',
        type: 'report-specification',
        caption: 'Verified competition details, role attribution, and architectural scope.',
        datasetOrHardwareCondition:
          'Independent Unbuilt Product Concept · 1st Position in REVIVEX at ZERO² 2026 (September 21–22, 2026)',
        codeOrSpec: `RE:FRAME — Smart Glasses Product Concept (REVIVEX · ZERO² 2026):
├── Recognition     : 1st Position in REVIVEX at ZERO² — The Innovator's Convention (IITM Janakpuri)
├── Primary Lead    : Akshit Sukhija (Product Research, Competitive Analysis, Concept Development,
│                     Product Architecture, Focus Engine, Companion App Ecosystem, Strategy & Presentation)
├── Co-Presenter    : Adyot Ohri (Teammate & Co-Presenter · Special Video Credit: Adyot Ohri)
├── Core Architecture: Capture on Glasses -> AI Processing on Phone -> Focus Engine -> Privacy by Design
├── Key Utilities   : 01 Translate · 02 Navigate · 03 Compare · 04 Summarize
├── Market Strategy : ₹39,999 proposed positioning across Students, Professionals, Creators, Explorers & Problem Solvers
└── Concept Status  : Independent, unbuilt product/hardware concept (Not an official Google product)`,
      },
    ],
  },
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
    collaborators: 'Team Signal Forge (Tanya Garg — Co-Creator & Repository Host)',
    attributionNote:
      'Built for SETU 2026 (Problem Statement PS-02) with Team Signal Forge. The code repository is hosted under co-creator Tanya Garg’s GitHub account (Tanya-garg10). My documented role was Team Leader and System Architect, shaping the system architecture, local deterministic parser design, conflict detection logic, and calendar export.',
    problemSummary:
      'Colleges and teams share important dates inside long PDF circulars and WhatsApp forwards. People miss deadlines or double-book themselves because nobody has time to cross-check every notice by hand.',
    businessContext:
      'Any organisation that sends frequent circulars, policy updates, or schedule changes faces this same problem: critical dates stay trapped inside paragraphs of text.',
    approachSummary:
      'Use AI to read and summarise the notice text, but rely on local deterministic parsing rules to extract dates, spot schedule clashes, compare updated notices, and create a standard calendar file.',
    solutionSummary:
      'A live web application that reads unstructured notices, pulls out dates and deadlines, warns you when two events overlap, highlights changes when a revised notice arrives, and exports a calendar file you can open in Google, Apple, or Outlook Calendar.',
    resultSummary:
      'Deployed live on Render. In SETU 2026 evaluation, it flagged a 30-minute interval overlap between Internal Test 2 (10:00–11:30 AM) and Guest Lecture (11:00 AM–12:30 PM) on 13 Nov 2026, while accurately identifying a 12:00 PM lab submission deadline.',
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
    liveDemoUrl: 'https://notice-decoder-pi.vercel.app/',
    githubUrl: 'https://github.com/Tanya-garg10/Notice-Decoder-AI-Powered-College-Notice-Schedule-Planner',
    drivePdfPlaceholder: 'SETU 2026 Project Report PDF (Google Drive link placeholder)',
    screenshotUrl: '/assets/projects/notice-decoder-live.png',
    screenshotCaption: 'Live Notice Decoder application running at notice-decoder-pi.vercel.app',
    evidenceNote: 'Live web app deployed at notice-decoder-pi.vercel.app and public source code on GitHub.',
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
    projectClassification: 'Collaborative Full-Stack System · Live App & 100+ Page Report',
    evidenceTypeLabel: 'Live Web App + 100+ Page Technical Report',
    visualAccent: '#E08A1E',
    documentedRole: 'Co-Developer and System Architect',
    collaborators:
      'Co-developed with Adyot Ohri (IITM Summer Training Capstone; 100-Hour Cybersecurity Certificate from SSSAM Academy)',
    attributionNote:
      'Co-developed with Adyot Ohri as Co-Developer and System Architect (also titled DSARS — Digital Security Assessment & Reporting Platform). Deployed live at sentineix.vercel.app and documented in a formal academic technical project report exceeding 100 pages.',
    problemSummary:
      'Security testing tools produce separate, technical XML and CSV files. Analysts waste hours checking files by hand, removing duplicate warnings, and formatting summary PDF reports for management.',
    businessContext:
      'Many technical and consulting teams face this exact bottleneck: multiple tools generate messy data files that someone has to manually clean and turn into a client report.',
    approachSummary:
      'Build a central system that checks each uploaded file was not tampered with, processes multiple files at the same time using an 11-worker ThreadPoolExecutor, merges findings into a single 5-level priority scale, and generates a clean PDF report automatically.',
    solutionSummary:
      'A full-stack Python (FastAPI) and React 19 system that reads Nmap XML and OWASP ZAP XML/CSV scan files, verifies SHA-256 file integrity, removes duplicate findings, organises issues into five clear severity levels in SQLite, displays charts in a browser dashboard, and exports a ReportLab executive PDF report.',
    resultSummary:
      'Deployed live at sentineix.vercel.app and documented in a 100+ page formal academic project report covering multithreaded orchestration (api/security.py), SQLite ORM models, and automated PDF generation.',
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
    liveDemoUrl: 'https://sentineix.vercel.app/',
    drivePdfPlaceholder: '100+ Page Technical Project Report PDF (Google Drive link placeholder)',
    screenshotUrl: '/assets/projects/sentinelx-live.png',
    screenshotCaption: 'Live SentinelX platform running at sentineix.vercel.app',
    evidenceNote:
      'Live web platform deployed at sentineix.vercel.app and verified by a 100+ page formal academic technical report.',
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
      'Live assessment interface deployed at sentineix.vercel.app; full backend ingestion and ReportLab PDF pipeline documented in the 100+ page academic technical report.',
      'Reads output files exported from Nmap and OWASP ZAP; it does not run unauthorized active network exploitation.',
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
    collaborators: 'Co-authored with Bhumika Singhal (IIT Guwahati Summer Analytics)',
    attributionNote:
      'Co-authored with Bhumika Singhal as Lead Product Analyst. Full 5-part deliverable suite—cleaned dataset CSV, Python Jupyter notebook (.ipynb), SQL analysis report PDF, Power BI dashboard (.pbix), Retention Playbook PDF, and Executive Summary PDF—is published on GitHub.',
    problemSummary:
      'Many D2C retail brands assume their biggest spenders are their most loyal customers. In reality, some high-spending segments only buy when given a discount or promo code.',
    businessContext:
      'For Indian D2C, retail, and e-commerce brands, sending blanket discount coupons to everyone wastes profit margin on customers who would have bought anyway, while failing to retain price-sensitive buyers.',
    approachSummary:
      'Clean and study 3,900 customer shopping records using Python and SQL, engineer Promo_Dependency_Score and Loyalty_Score metrics, build an interactive Power BI dashboard, and write a practical promotional sunsetting and retention playbook.',
    solutionSummary:
      'A complete 5-part data analytics case study (using Python, SQL, and Power BI across N = 3,900 customer records) that separates genuinely loyal buyers (36.4% Premium Loyalists) from discount-dependent shoppers (43.0% Discount Survivors) and provides a step-by-step Retention Playbook.',
    resultSummary:
      'Identified that 43.0% of customers in the dataset were "Discount Survivors" (1.00 promo dependency) versus 36.4% "Premium Loyalists" (0.00 promo dependency), proving spend tier alone fails to indicate organic loyalty.',
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
    drivePdfPlaceholder: 'Executive Summary & Retention Playbook PDF (Google Drive link placeholder)',
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
    tier: 'flagship',
    tierLabel: 'Flagship Project 04 · Applied AI & Risk Governance',
    indexNumber: '04',
    title: 'Contract Risk Governance Engine',
    subtitle:
      'Nexus Governance OS: Separates Deterministic CPU Compliance Logic From NPU-Accelerated AI Explanations',
    plainSubtitle:
      'A zero-hallucination, audit-grade contract intelligence system where fixed rules make the pass/fail decision on CPU first, and AI writes a clear explanation.',
    category: 'Applied AI & Risk Governance',
    domain: 'ai-automation',
    projectClassification: 'AMD Slingshot Hackathon 2026 · 57 Commits (MIT License)',
    evidenceTypeLabel: 'Public GitHub Codebase + NPU Benchmark',
    visualAccent: '#E8D5A8',
    documentedRole: 'System Architecture Lead',
    collaborators:
      'Team Nexus Architects (Tanishq Khanna — Full-Stack Engineering; Tanish Sabharwal — AI Optimization)',
    attributionNote:
      'Documented role: System Architecture Lead (designed the 5-layer decision-first pipeline and compliance locking) with Team Nexus Architects (Tanishq Khanna and Tanish Sabharwal) for AMD Slingshot Hackathon 2026. Completed open-source codebase (57 commits, MIT License) on GitHub.',
    problemSummary:
      'If you ask AI alone to decide whether a contract follows company rules, it can guess or give different answers each time. Businesses need reliable rule checks they can trust, plus simple explanations.',
    businessContext:
      'Useful for teams reviewing standard agreements or compliance checklists who want AI speed without letting AI make up business rules.',
    approachSummary:
      'Let fixed policy rules on CPU decide whether a clause passes or fails, record immutable SHA-256 fingerprints and JSONL decision traces, and constrain AI strictly to explaining the rule outcome.',
    solutionSummary:
      'A Python 3.10+, FastAPI (/evaluate, /health), and Streamlit system (Nexus Governance OS) where fixed rules evaluate contract compliance on CPU and local AI assists strictly with writing clear explanations via ONNX Runtime and DirectML.',
    resultSummary:
      'Completed codebase (57 commits, MIT License) on GitHub. Offloading narrative generation to AMD Ryzen AI NPU via DirectML achieved ~420ms latency per explanation (~4x speedup vs CPU) on a 120-page test contract under Windows 11, reducing CPU utilization from 85–95% down to 25–35%.',
    productThinking: {
      researchContext:
        'Studied why compliance and operations teams hesitate to adopt AI document reviewers: generative models alone can hallucinate policy thresholds or flip pass/fail verdicts across runs.',
      userNeeds:
        'Reviewers need 100% repeatable pass/fail policy checks with immutable audit logs paired with a fast, plain-English explanation they can share with stakeholders.',
      alternativesConsidered:
        'Compared pure prompt-based LLM contract review against keyword-only regex scripts. Prompt-only review lacked audit predictability; keyword scripts gave no human-readable explanation.',
      productDecision:
        'Designed a 5-layer decision-first pipeline: FAISS retrieves clauses, deterministic Python rules lock the pass/fail verdict on CPU with a SHA-256 hash and JSONL trace, and ONNX Runtime + DirectML generates the narrative explanation.',
      prototypeEvolution:
        'Built across 57 commits (MIT License) with FastAPI (/evaluate, /health) and Streamlit UI, benchmarked on a 120-page test contract using AMD Ryzen AI NPU hardware (~420ms explanation latency via DirectML).',
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
    drivePdfPlaceholder: 'AMD Slingshot Architecture & Benchmark Report PDF (Google Drive link placeholder)',
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
    screenshotUrl: '/assets/projects/lureline-live.png',
    screenshotCaption: 'Live Lureline investigation workspace running at lureline-orcathon-2026.vercel.app',
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
        title: 'Workbench Scope, Automated CI & Sample Data Disclosure',
        type: 'interactive-preview',
        caption: 'Technical note on Lureline’s 6-node architecture, CI validation, and simulated demo data.',
        datasetOrHardwareCondition: 'Data note: Live demo streams use synthetic 6-node telemetry fixtures.',
        codeOrSpec: `Lureline Workbench Summary:
├── Role             : 100% Solo Candidate (Orcathon 2026)
├── Technical Stack  : TypeScript (90%) · Vite · Express · Node.js · Vercel
├── Network Model    : 6-Node Simulated Topology (4 ordinary assets, 2 decoy assets)
├── Verification     : 100% pass on automated test suite (npm test) + GitHub Actions CI (.github/workflows/lureline-validation.yml)
└── Demo Data Source : Synthetic event stream fixtures (safe public demo without unobserved hop fabrication)`,
      },
    ],
  },
  {
    slug: 'clarity-redemption-ai',
    priorityOrder: 6,
    tier: 'flagship',
    tierLabel: 'Flagship Project 06 · FinTech Math & Compliance UX',
    indexNumber: '06',
    title: 'Clarity Redemption AI',
    subtitle:
      'Mutual Fund Consequence Engine: Deterministic FIFO Lot Math + Bounded Plain-English AI Explainer',
    plainSubtitle:
      'Shows mutual fund investors the exact FIFO unit lot consumption, exit load, STT deductions, and remaining holding value before they confirm a redemption.',
    category: 'Applied AI & FinTech Math Engine',
    domain: 'custom-systems',
    projectClassification: 'Produscope 2026 (E-Cell IIT Guwahati) · Live App & 15/15 Unit Tests',
    evidenceTypeLabel: 'Live Web App + Public GitHub (15/15 Tests)',
    visualAccent: '#7AD992',
    documentedRole: 'Co-Developer and Product Analyst',
    collaborators: 'Team Leader: Devanshi Pandey; Team Member: Akshit Sukhija',
    attributionNote:
      'Built for Produscope 2026 (E-Cell IIT Guwahati) as Co-Developer and Product Analyst alongside Team Leader Devanshi Pandey. Open-source TypeScript (98.7%) codebase published on GitHub with 15/15 passing unit tests.',
    problemSummary:
      'Indian retail mutual fund investors often redeem units blindly because exit-load timers, FIFO lot consumption rules, and STT deductions are buried inside complex Scheme Information Documents (SIDs).',
    businessContext:
      'Applicable to any financial, billing, or operations product where users need to preview the exact mathematical consequences of an action before clicking confirm.',
    approachSummary:
      'Run all financial calculations—FIFO unit lot matching, 365-day holding period checks, exit loads, and STT deductions—through a strict deterministic math engine, and restrict AI ("Ask Clarity") strictly to explaining those verified figures.',
    solutionSummary:
      'A TypeScript and React redemption consequence workspace where a deterministic FIFO calculation engine computes exact lot-by-lot deductions and remaining portfolio value, paired with a bounded AI explanation layer that never invents numbers or gives buy/sell advice.',
    resultSummary:
      'Passed 15/15 automated unit tests (npm test) verifying FIFO boundaries, full liquidation, 365-day holding period logic, and mathematical invariants with 0 TypeScript linter errors (tsc --noEmit).',
    productThinking: {
      researchContext:
        'Examined the redemption flow in retail investment apps during Produscope 2026 (E-Cell IIT Guwahati): investors see only the total redemption amount requested, while exit-load penalties on recent SIP lots remain hidden in PDF SID documents.',
      userNeeds:
        'Investors need a clear pre-redemption consequence preview showing which specific unit lots will be consumed first (FIFO), whether any lots trigger an exit load, and what net payout and holding value remain.',
      alternativesConsidered:
        'Compared static PDF exit-load calculators against a conversational AI financial bot. Static tables required manual lot entry, while an unconstrained chatbot risked miscalculating FIFO tax/exit-load boundaries or offering unauthorized investment advice.',
      productDecision:
        'Architected a single-source-of-truth Deterministic FIFO Math Engine in TypeScript that owns 100% of calculations, while bounding the "Ask Clarity" LLM layer strictly to explaining the computed scenario numbers and blocking buy/sell/hold advice.',
      prototypeEvolution:
        'Developed as a clean TypeScript (98.7%) + React + Vite workspace verified by a 15-test automated suite covering boundary conditions, 365-day holding thresholds, and full liquidation invariants.',
    },
    plainFeatures: [
      {
        plain: 'Shows exactly which unit lots are sold first (First-In, First-Out) before you confirm.',
        technical:
          'Deterministic FIFO lot-consumption engine iterates chronological purchase lots and splits partial boundary lots accurately.',
      },
      {
        plain: 'Calculates exit loads and STT deductions using fixed math rules—never an AI guess.',
        technical:
          'Evaluates exact holding-period days (e.g., 365-day exit-load cliff) and applies scheme rules verified by 15/15 automated unit tests.',
      },
      {
        plain: 'Includes an "Ask Clarity" assistant that explains the math in simple English without giving financial advice.',
        technical:
          'Context-bounded explainer layer reads only the deterministic engine output and enforces guardrails blocking buy/sell/hold recommendations.',
      },
    ],
    verifiedStack: [
      'TypeScript',
      'React',
      'Vite',
      'Deterministic FIFO Math Engine',
      'Ask Clarity Explainer',
    ],
    plainToolsSummary: [
      {
        tool: 'TypeScript (98.7%) & React',
        whatItDoes: 'Powers the interactive redemption consequence workspace and lot breakdown UI.',
      },
      {
        tool: 'Deterministic FIFO Math Engine',
        whatItDoes: 'Calculates exact unit lot consumption, holding days, exit loads, and STT deductions.',
      },
      {
        tool: 'Automated Unit Test Suite (15/15)',
        whatItDoes: 'Verifies mathematical invariants, 365-day holding boundaries, and full liquidation edge cases.',
      },
      {
        tool: 'Bounded "Ask Clarity" Layer',
        whatItDoes: 'Explains the computed numbers in plain language while blocking investment advice.',
      },
    ],
    verifiedElements: [
      'TypeScript (98.7%), Vite, and React workspace architecture',
      'Deterministic FIFO unit lot consumption engine',
      '365-day holding period and exit-load boundary calculation',
      '15/15 passing automated unit tests (npm test) and 0 tsc --noEmit errors',
      'Bounded "Ask Clarity" explanation layer that blocks buy/sell/hold advice',
      'Public GitHub repository and Produscope 2026 report documentation',
    ],
    deliverables: [
      'Interactive Mutual Fund Consequence Workspace (React + TypeScript)',
      'Deterministic FIFO Math & Exit-Load Engine',
      '15-Test Automated Verification Suite',
      'Bounded "Ask Clarity" Scenario Explainer',
      'Produscope 2026 (E-Cell IIT Guwahati) Case Study Report',
    ],
    liveDemoUrl: 'https://clarity-redemption.ai.studio',
    githubUrl: 'https://github.com/akshit-sukhija/Clarity-Redemption-AI',
    drivePdfPlaceholder: 'Produscope 2026 Case Study Deck PDF (Google Drive link placeholder)',
    screenshotUrl: '/assets/projects/clarity-live.png',
    screenshotCaption: 'Live Clarity Redemption AI workspace running at clarity-redemption.ai.studio',
    evidenceNote:
      'Live web application at clarity-redemption.ai.studio, public source code on GitHub (15/15 automated unit tests passing), and Produscope 2026 (E-Cell IIT Guwahati) documentation.',
    architectureSummary:
      'When a user enters a redemption amount, the Deterministic FIFO Math Engine calculates exact unit lot consumption, 365-day exit-load triggers, and STT deductions first. The UI and "Ask Clarity" layer then explain those locked figures.',
    plainHowItWorksSummary:
      'Enter redemption amount → fixed FIFO math engine calculates lots, exit load & STT → preview net payout & plain-English explanation.',
    architectureNodes: [
      {
        id: 'cra-1',
        label: '1. Redemption Request',
        sublabel: 'Portfolio lots + SID rules',
        plainTitle: 'Enter Redemption Scenario',
        plainDescription: 'Select a mutual fund holding and enter the amount or units to redeem.',
        layer: 'input',
      },
      {
        id: 'cra-2',
        label: '2. FIFO Math Engine',
        sublabel: '15/15 unit-tested rules',
        plainTitle: 'Calculate Lots & Exit Loads',
        plainDescription: 'Fixed code rules match oldest lots first (FIFO) and check the 365-day exit-load timer.',
        layer: 'verification',
      },
      {
        id: 'cra-3',
        label: '3. Ask Clarity Explainer',
        sublabel: 'Bounded to exact figures',
        plainTitle: 'Explain Without Advice',
        plainDescription: 'Translates the lot breakdown into simple English while blocking buy/sell advice.',
        layer: 'processing',
      },
      {
        id: 'cra-4',
        label: '4. Consequence View',
        sublabel: 'Pre-confirmation summary',
        plainTitle: 'Review Net Payout Clearly',
        plainDescription: 'Shows exact deductions and remaining holding value before confirmation.',
        layer: 'output',
      },
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Load Unit Lots & Scheme Exit-Load Rules',
        detail: 'The workspace loads chronological purchase lots along with the scheme’s holding-period threshold and exit-load percentage.',
        technicalDetail: 'Uses structured sample SID parameters and unit lot arrays in TypeScript.',
      },
      {
        step: '02',
        title: 'Execute Deterministic FIFO Lot Consumption',
        detail: 'Fixed math rules consume the oldest unit lots first, checking whether each lot has crossed the 365-day exit-load-free window.',
        technicalDetail: 'Verified by 15/15 automated unit tests covering boundary splits and full liquidation.',
      },
      {
        step: '03',
        title: 'Display Consequence Breakdown & Bounded Explanation',
        detail: 'Users inspect net payout, exit load, STT, and remaining units—and can ask the bounded explainer questions about the scenario.',
        technicalDetail: 'AI layer is strictly grounded in deterministic engine outputs and blocks buy/sell/hold advice.',
      },
    ],
    technicalDecisions: [
      {
        decision: 'Never let an LLM perform FIFO lot or exit-load arithmetic',
        rationale:
          'Financial deductions and holding-period cliffs require 100% mathematical precision. Fixed TypeScript rules calculate every rupee and unit.',
        tradeoff:
          'Requires codifying scheme exit-load rules into structured TypeScript parameters.',
      },
      {
        decision: 'Enforce strict non-advisory guardrails on the AI explanation layer',
        rationale:
          'The tool exists to explain redemption consequences transparently, never to recommend buying, selling, or holding securities.',
        tradeoff:
          'Restricts open-ended financial chat in favour of safe, scenario-grounded explanations.',
      },
    ],
    limitationsAndScope: [
      'Built as a competition product prototype for Produscope 2026 (E-Cell IIT Guwahati) using illustrative NAVs and sample fund SID data.',
      'Not connected to live AMC or registrar order-routing APIs.',
      'Co-developed with Team Leader Devanshi Pandey.',
    ],
    keyLessons: [
      'When building financial or pricing tools, deterministic math engines and unit tests come first; AI should only explain the verified numbers.',
    ],
    evidenceArtifacts: [
      {
        title: 'Deterministic FIFO Consequence Engine & 15/15 Test Suite Specification',
        type: 'interactive-preview',
        caption: 'Summary of the verified FIFO math invariants and non-advisory AI boundary.',
        datasetOrHardwareCondition:
          'Prototype scope: Uses illustrative NAVs and sample fund SID data (15/15 npm unit tests passing).',
        codeOrSpec: `Clarity Redemption AI — Verification & Architecture:
├── Role            : Co-Developer & Product Analyst (Team Leader: Devanshi Pandey)
├── Competition     : Produscope 2026 (E-Cell IIT Guwahati)
├── Codebase        : TypeScript (98.7%), Vite, React
├── Math Engine     : Deterministic FIFO unit lot consumption + 365-day exit-load boundary + STT
├── Quality Gate    : 15/15 automated unit tests passing (npm test) · 0 linter errors (tsc --noEmit)
└── AI Guardrail    : "Ask Clarity" bounded strictly to scenario figures; blocks buy/sell/hold advice`,
      },
    ],
  },
];

export const ADDITIONAL_ANALYTICAL_PROOF = {
  title: 'OTT Viewer Retention Analysis (N = 33,171 Episodes) & UIDAI Demographic Intelligence (500,000+ Records)',
  category: 'Evaluated Data & Public Policy / Media Retention Studies',
  summary:
    'Alongside Decoding Customer Value, the full Project Library includes a 33,171-episode streaming retention capstone (identifying the Episodes 4–8 mid-season drop-off spike at 16.7%) and a 500,000+ record Google Colab analysis of official UIDAI demographic updates across 956 districts.',
  connectionToService: 'Service 01: Data & Business Intelligence',
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'brand-storytelling',
    number: '01',
    title: 'Brand Strategy & Storytelling',
    plainTagline:
      'Positioning, product narratives, competitive research, and customer-grounded strategy.',
    domain: 'data-intelligence',
    targetAudience:
      'For founders, consumer brands, and product teams that need a clear, memorable story backed by real market and customer research.',
    problemStatement:
      'Many promising products and businesses struggle to explain why they matter. Without sharp positioning and research-backed storytelling, pitch decks feel generic and marketing efforts rely on heavy discounting instead of brand trust.',
    description:
      'I research your category, study customer behaviour and competitors, and shape a clear brand narrative—turning complex product concepts or raw customer data into positioning frameworks, pitch stories, and retention playbooks.',
    plainBenefitSummary:
      'Communicate your value clearly to customers, partners, and investors with strategy grounded in real research.',
    deliverables: [
      'Brand & product positioning frameworks ("why this, why now")',
      'Competitive teardowns and market-gap research briefs',
      'Investor, competition, and product launch narrative architecture',
      'Customer segmentation & retention playbooks (Python, SQL & Power BI)',
      'Clear messaging hierarchies for websites and campaigns',
    ],
    technicalUnderTheHood: [
      'Competitive teardown & user persona friction mapping',
      'Customer transaction segmentation in Python (Pandas, NumPy) and SQL',
      'Interactive Power BI (.pbix) visual exploration and commercial retention playbooks',
    ],
    exampleScenarios: [
      {
        businessType: 'New Product or Category Concept',
        challenge:
          'You have an ambitious product idea that needs a sharp positioning strategy, user ecosystem map, and compelling pitch story.',
        practicalSolution:
          'A structured product strategy and visual narrative—like the 1st-place RE:FRAME smart-glasses revival concept.',
      },
      {
        businessType: 'D2C or Consumer Brand',
        challenge:
          'Sales spike during promotions, but you need to understand which customer segments are truly loyal to your brand versus chasing discounts.',
        practicalSolution:
          'A data-backed customer segmentation study and Retention Playbook separating full-price loyalists from promo-dependent buyers.',
      },
    ],
    portfolioProof: [
      {
        title: 'RE:FRAME — Smart Glasses Product Concept',
        slug: 'reframe',
        summary:
          '1st Place winner at REVIVEX · ZERO² 2026. Reimagined Google Glass with a 5-pillar Revival Strategy, Focus Engine UX, and ₹39,999 market positioning.',
      },
      {
        title: 'Decoding Customer Value',
        slug: 'decoding-customer-value',
        summary:
          'Segmented 3,900 customer shopping records (43.0% Discount Survivors vs 36.4% Premium Loyalists) into an actionable Retention Playbook.',
      },
    ],
  },
  {
    id: 'digital-content',
    number: '02',
    title: 'Digital Content & Creative Production',
    plainTagline:
      'Visual presentations, product story decks, interactive showcases, and editorial research content.',
    domain: 'custom-systems',
    targetAudience:
      'For startups, brands, and teams that need high-impact visual presentations, product showcases, and clear digital content.',
    problemStatement:
      'Great ideas often lose momentum when presented in cluttered, text-heavy slides or generic templates that fail to capture attention within the first thirty seconds.',
    description:
      'I design and produce visual presentation systems, product concept showcases, UX teardown decks, and research-driven editorial articles that make complex ideas effortless to understand and remember.',
    plainBenefitSummary:
      'Present your product, research, or brand with editorial polish and visual clarity.',
    deliverables: [
      'High-impact visual keynote & pitch presentation decks',
      'Product feature showcases, hardware/UX callout boards, and ecosystem visuals',
      '12–15 slide product teardown and growth concept presentations',
      'Research-backed editorial articles and executive decision briefs',
      'Automated executive PDF report templates (ReportLab / structured layouts)',
    ],
    technicalUnderTheHood: [
      'Editorial typography, visual hierarchy, and slide narrative systems',
      'High-contrast product callout diagrams and interactive web galleries',
      'Programmatic PDF report compilation via Python ReportLab where automated output is needed',
    ],
    exampleScenarios: [
      {
        businessType: 'Product Launch or Competition Pitch',
        challenge:
          'You need to explain hardware, software, user scenarios, and pricing in a visual deck that judges or stakeholders immediately grasp.',
        practicalSolution:
          'A cohesive 15-slide visual presentation system with clear feature callouts, scenario boards, and ecosystem diagrams.',
      },
      {
        businessType: 'Growth & Retention Team',
        challenge:
          'You want to turn customer review insights or retention data into a persuasive internal playbook or teardown deck.',
        practicalSolution:
          'A structured visual deck mapping friction points, user flows, and concrete UX improvements.',
      },
    ],
    portfolioProof: [
      {
        title: 'RE:FRAME 15-Slide Visual Presentation',
        slug: 'reframe',
        summary:
          'Complete visual presentation system covering hardware callouts, companion app UI, Focus Engine, and real-world AR overlays.',
      },
      {
        title: 'Nykaa & IndusShield Concept Decks',
        summary:
          'Visual UX teardown and fintech product strategy decks featuring mobile wireframes and retention journey maps.',
      },
    ],
  },
  {
    id: 'websites-digital-experiences',
    number: '03',
    title: 'Websites & Digital Experiences',
    plainTagline:
      'Custom websites, interactive web applications, product prototypes, and digital workbenches.',
    domain: 'custom-systems',
    targetAudience:
      'For founders, studios, and product teams that want a distinctive website, interactive prototype, or custom web application.',
    problemStatement:
      'Cookie-cutter website templates look alike, while off-the-shelf software rarely fits a custom workflow—leaving teams stuck between generic pages and overpriced agency retainers.',
    description:
      'I design and engineer responsive websites, interactive product prototypes, and full-stack web applications using React 19, TypeScript, Tailwind CSS, and Python/Node backends.',
    plainBenefitSummary:
      'Launch a fast, distinctive website or working web application built around your exact story and user workflow.',
    deliverables: [
      'Custom brand & studio websites with editorial typography and motion',
      'Interactive web application prototypes for startups and product teams',
      'Custom digital workbenches and interactive data/timeline explorers',
      'Multi-file ingestion dashboards and one-click PDF/calendar export tools',
      'Clean, documented React 19 + TypeScript source code and live deployment',
    ],
    technicalUnderTheHood: [
      'React 19, TypeScript, Vite, Tailwind CSS, Motion, and Recharts visualisations',
      'Full-stack APIs in Node/Express and Python (FastAPI, ThreadPoolExecutor)',
      'Deterministic client/server state machines and automated unit test suites',
    ],
    exampleScenarios: [
      {
        businessType: 'Founder or Independent Business',
        challenge:
          'You need a distinctive, conversion-focused website or interactive product showcase that sets you apart from generic templates.',
        practicalSolution:
          'A custom-designed React & TypeScript web experience with clear storytelling, fast performance, and direct enquiry flows.',
      },
      {
        businessType: 'Product or Operations Team',
        challenge:
          'You need a working web application—such as a financial consequence previewer or multi-tool report dashboard—to test with users.',
        practicalSolution:
          'A deployed, unit-tested web application with real interactive workflows.',
      },
    ],
    portfolioProof: [
      {
        title: 'SentinelX',
        slug: 'sentinelx',
        summary:
          'Live web platform (sentineix.vercel.app) that merges multi-tool XML/CSV scans into an interactive dashboard and executive PDF report.',
      },
      {
        title: 'Clarity Redemption AI',
        slug: 'clarity-redemption-ai',
        summary:
          'Live FinTech web workspace (clarity-redemption.ai.studio) with a 15/15 unit-tested deterministic FIFO math engine.',
      },
      {
        title: 'Lureline',
        slug: 'lureline',
        summary:
          'Live interactive investigation workbench deployed on Vercel with automated CI validation.',
      },
    ],
  },
  {
    id: 'ai-solutions',
    number: '04',
    title: 'AI-Powered Digital Solutions',
    plainTagline:
      'Practical AI workflows, prompt architectures, document automation, and rule-backed systems.',
    domain: 'ai-automation',
    targetAudience:
      'For teams that want practical AI tools to read documents, detect changes, or synthesise research without hallucinated numbers or dates.',
    problemStatement:
      'Teams lose hours every week reading unstructured PDFs, notices, customer reviews, or contracts by hand—yet pure AI chatbots often guess dates, miscalculate numbers, or miss critical policy changes.',
    description:
      'I build hybrid AI systems where language models read and summarise unstructured text, while deterministic computer rules lock in dates, schedule overlaps, compliance checks, and calculations.',
    plainBenefitSummary:
      'Save hours of manual reading and synthesis with AI tools that stay grounded in strict rules and verified sources.',
    deliverables: [
      'AI + fixed-rule document readers and schedule conflict detectors',
      'Operational change-detection prompt systems (surfacing only actionable deltas)',
      'Customer feedback and research synthesis prototypes',
      'Rule-backed compliance evaluators with SHA-256 audit trails',
      'Interactive Power BI & Python data intelligence pipelines',
    ],
    technicalUnderTheHood: [
      'LLM semantic structuring (Qwen2.5-7B-Instruct, Gemini, or local ONNX/DirectML models)',
      'Deterministic interval overlap math, JSON schema guardrails, and RFC 5545 (.ics) exports',
      'FAISS vector retrieval, SHA-256 state sealing, and adversarial prompt evaluation',
    ],
    exampleScenarios: [
      {
        businessType: 'Operations or Institutional Team',
        challenge:
          'Important dates and policy updates arrive inside long circulars, causing missed deadlines and schedule clashes.',
        practicalSolution:
          'An automated web tool like Notice Decoder or SIGNAL that extracts dates, flags clashes, and highlights only what changed.',
      },
      {
        businessType: 'Product or Research Team',
        challenge:
          'Hundreds of customer reviews and research notes need to be distilled into prioritized product decisions.',
        practicalSolution:
          'A structured AI synthesis workflow like InsightForgeAI that links every recommendation back to source evidence.',
      },
    ],
    portfolioProof: [
      {
        title: 'Notice Decoder',
        slug: 'notice-decoder',
        summary:
          'Live AI & deterministic schedule planner (notice-decoder-pi.vercel.app) with automatic clash detection and .ics calendar export.',
      },
      {
        title: 'SIGNAL – Prompt Forge & InsightForgeAI',
        summary:
          'Live AI prototypes for operational delta detection (95.0% accuracy on 40-case benchmark) and product research synthesis.',
      },
      {
        title: 'Contract Risk Governance Engine',
        slug: 'contract-risk-governance',
        summary:
          'Hybrid FAISS + deterministic compliance engine with AMD Ryzen AI NPU DirectML explanation acceleration (~420ms).',
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
      'Jumping straight into production without understanding how people actually use a product leads to cluttered screens and weak narratives.',
    whatIDo:
      'I map out user needs, evaluate simpler alternatives first, and design clean, readable interfaces and story flows before building.',
    whatYouReceive:
      'Clear workflow diagrams, thoughtful screen layouts, and digital experiences that feel intuitive.',
    evidenceProjects: [
      'RE:FRAME (1st Place · REVIVEX Smart Glasses UX & Focus Engine)',
      'Notice Decoder (Schedule planner & Change Radar UX)',
      'Lureline (Interactive investigation timeline workbench)',
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
      'I study customer transaction behaviour, synthesise market and competitor information into plain-English briefs, and connect research directly to positioning and product decisions.',
    whatYouReceive:
      'Structured research briefs, customer segmentation playbooks, and clear positioning recommendations.',
    evidenceProjects: [
      'Decoding Customer Value (3,900-record loyalty vs. discount study)',
      'OTT Viewer Retention Analysis (33,171 episodes)',
      'CareerWithDishani Research & Insight Synthesis Internship',
    ],
  },
  {
    id: 'software-quality',
    number: 'S3',
    title: 'Software Quality & Verification',
    tagline: 'Reliable rules, cryptographic file checks, unit testing, and reporting accuracy.',
    problem:
      'Prototypes and internal tools often break when given messy files, duplicate records, or edge-case dates and financial lots.',
    whatIDo:
      'I build fixed validation rules, automated unit test suites, SHA-256 file integrity checks, and structured PDF/calendar exports so software behaves predictably.',
    whatYouReceive:
      'Clean, maintainable TypeScript/Python codebases with automated checks and clear handover documentation.',
    evidenceProjects: [
      'Clarity Redemption AI (15/15 unit tests passing on FIFO math)',
      'SentinelX (SHA-256 integrity & 5-level normalization)',
      'Contract Risk Governance Engine (Deterministic rules + SHA-256 audit hash)',
    ],
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'fixed-scope-pilot',
    number: '01',
    title: 'Fixed-Scope Pilot',
    bestFor: 'Testing a story deck, web prototype, or single AI/data workflow first.',
    plainDescription:
      'Start with a focused, clearly defined pilot—such as a product concept deck, a clickable prototype, or analysing one sample dataset—before committing to a larger engagement.',
    whatYouGet: 'A tangible proof of value, clear deliverables, and zero long-term lock-in.',
  },
  {
    id: 'custom-project',
    number: '02',
    title: 'Custom Studio Project',
    bestFor: 'End-to-end brand storytelling, custom websites, or full-stack AI applications.',
    plainDescription:
      'Once we agree on deliverables and milestones, I design, write, build, and hand over the complete digital experience or solution tailored to your goals.',
    whatYouGet: 'Complete live website, presentation system, or working software with source files.',
  },
  {
    id: 'research-technical-assessment',
    number: '03',
    title: 'Strategy & Research Sprint',
    bestFor: 'Founders and teams shaping a new product concept, pitch narrative, or workflow architecture.',
    plainDescription:
      'I audit your category, customer data, or product concept and deliver a structured positioning strategy, UX blueprint, and implementation roadmap.',
    whatYouGet: 'A visual strategy deck, workflow blueprint, and actionable build plan.',
  },
  {
    id: 'ongoing-improvement',
    number: '04',
    title: 'Iterative Refinement',
    bestFor: 'Expanding a website, adding new AI workflows, or refining dashboards post-launch.',
    plainDescription:
      'After delivering the core project, we can schedule focused follow-up iterations as your product evolves or new content and features are needed.',
    whatYouGet: 'Direct 1-on-1 support and upgrades from the original creator.',
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    stageKey: 'DISCOVER',
    title: 'Discover',
    shortLabel: 'Context & Research',
    description:
      'We start with your business goal, audience, or operational bottleneck. I review your current material, study competitors or sample data, and uncover the real problem worth solving.',
    whatIContribute: 'Audience & category research, workflow audit, and sample data/content review.',
    whatYouReceive: 'A clear diagnosis of the opportunity and an honest recommendation on what to create.',
  },
  {
    step: '02',
    stageKey: 'DEFINE',
    title: 'Define',
    shortLabel: 'Story & Architecture',
    description:
      'Before production begins, we lock in the narrative angle, visual direction, user flow, or hybrid AI/rule architecture—along with a transparent scope and milestone plan.',
    whatIContribute: 'Positioning strategy, wireframes, system architecture, and written scope in INR.',
    whatYouReceive: 'A clear blueprint and written scope so expectations, deliverables, and timelines are aligned.',
  },
  {
    step: '03',
    stageKey: 'CREATE',
    title: 'Create',
    shortLabel: 'Design & Engineering',
    description:
      'I design the visual presentation, craft the story, or engineer the custom website and AI solution myself—sharing live previews so we can refine details together.',
    whatIContribute: 'Visual storytelling, React/TypeScript web engineering, Python/SQL analytics, and AI integration.',
    whatYouReceive: 'Working previews and high-craft visuals you can inspect and test directly.',
  },
  {
    step: '04',
    stageKey: 'DELIVER',
    title: 'Deliver',
    shortLabel: 'Launch & Handover',
    description:
      'Once every detail is verified against our agreed scope, I launch the live experience or hand over the final presentation decks, dashboards, and source repositories.',
    whatIContribute: 'Quality verification, live deployment, source packaging, and plain-English documentation.',
    whatYouReceive: 'Full ownership of the finished work, clean source files, and a clear guide for your team.',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER — Research the Audience, Context & Core Problem',
    shortLabel: '01 · DISCOVER',
    clientExperience:
      'Every project begins with a straightforward conversation about what you are building, who you need to convince, or what workflow is slowing your team down. I study your existing material, category, or sample data before proposing a direction.',
    whatYouProvide:
      'Your initial idea, business goal, existing deck/website link, or a small sample of your data or documents.',
    whatYouReceive:
      'A clear assessment of whether you need brand storytelling, a visual presentation system, a custom web experience, an AI workflow, or a focused pilot.',
    keyPrinciple: 'Understand the human story and real friction before designing a single slide or screen.',
    technicalNote:
      'Competitive teardown, user journey friction mapping, and exploratory data/document profiling.',
  },
  {
    stepNumber: '02',
    title: 'DEFINE — Shape the Narrative, Visual System & Architecture',
    shortLabel: '02 · DEFINE',
    clientExperience:
      'We translate research into a concrete plan: defining the core positioning message, mapping the user journey or slide flow, and separating where AI helps from where fixed deterministic rules are required.',
    whatYouProvide:
      'Feedback on the proposed structure, brand priorities, and any specific business rules or constraints.',
    whatYouReceive:
      'A structured narrative outline or system blueprint, plus a transparent written scope and customised INR proposal.',
    keyPrinciple: 'Clear structure first—so creative direction and technical logic work together.',
    technicalNote:
      'Information architecture, UX wireframing, and hybrid LLM + deterministic rule specification.',
  },
  {
    stepNumber: '03',
    title: 'CREATE — Design the Story & Build the Digital Experience',
    shortLabel: '03 · CREATE',
    clientExperience:
      'I execute the work 1-on-1—designing the visual presentation deck, building the responsive React & TypeScript website or prototype, or coding the Python/AI pipeline—with regular interactive checkpoints.',
    whatYouProvide:
      'Direct feedback on visual drafts or live staging links so we can fine-tune copy, layouts, and interactions.',
    whatYouReceive:
      'High-craft visual assets, working web applications, or verified analytical dashboards built without agency hand-off delays.',
    keyPrinciple: 'Combine editorial visual craft with reliable, tested engineering.',
    technicalNote:
      'Implementation across React 19, TypeScript, Tailwind CSS, Recharts, FastAPI, SQL, Power BI, and ReportLab.',
  },
  {
    stepNumber: '04',
    title: 'DELIVER — Verify, Launch & Hand Over Complete Ownership',
    shortLabel: '04 · DELIVER',
    clientExperience:
      'We review the finished website, presentation deck, or software tool together. Everything is checked for responsiveness, visual polish, and factual accuracy before final handover.',
    whatYouProvide: 'Final walkthrough approval against the agreed deliverables.',
    whatYouReceive:
      'The live deployed website or application, final presentation/dashboard files, clean source code, and a clear guide.',
    keyPrinciple: 'Zero black boxes—you own the story, the design assets, and the code.',
    technicalNote:
      'Automated build/test verification, production deployment, and structured documentation handover.',
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
    organisation: 'ResolX.ai (One Point One Technology Labs)',
    category: 'Applied AI & Multimodal Solution Architecture',
    periodLabel: 'Verified Internship Experience',
    plainSummary:
      'Researched requirements, reviewed Omvia UI mockups, and authored a formal solutioning report on combining acoustic voice signals (tone, speech rate, dead air) with call transcripts for customer-support sentiment analysis.',
    keyContributions: [
      'Authored the formal internship solutioning specification (ResolX_Omvia_Speech_Call_Sentiment_Analysis_Report.pdf) defining multimodal sentiment guidelines.',
      'Audited Omvia UI workflow requirements, defined "Not Clear" escalation boundaries, and designed human-in-the-loop quality review loops.',
      'Mandatory Scope Disclosure: This work was a research and solutioning specification deliverable only—explicitly NOT a trained or deployed production model.',
    ],
    privacyNote:
      'Mandatory Confidentiality & Scope Notice: Research/specification deliverable only (not a deployed production model). Internal product UI screenshots are withheld.',
  },
  {
    id: 'career-with-dishani',
    role: 'Research & Insight Synthesis Intern',
    organisation: 'CareerWithDishani',
    category: 'Research, Analysis & Content Systems',
    periodLabel: 'Verified Internship Experience',
    plainSummary:
      'Conducted structured multi-source research, explored AI-assisted research synthesis workflows (InsightForge), and distilled complex information into actionable decision briefs.',
    keyContributions: [
      'Researched multi-source information and synthesised findings into clear, easy-to-scan decision guides (documented in Akshit_Sukhija_CareerWithDishani_Research_Intern.pdf).',
      'Developed repeatable 5-stage research synthesis workflows (Extract claims → Compare & analyze → Verify with sources → Synthesize output).',
      'Strengthened the habit of turning dense, scattered material into plain-English recommendations.',
    ],
    privacyNote:
      'Summarised from verified internship records without exposing internal working drafts.',
  },
];

export const VERIFIED_ACADEMIC_RECORD = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Institute of Information Technology & Management (IITM, Janakpuri)',
  affiliation: 'Affiliated with Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi · Batch 2024–2027',
  cgpa: '9.10 / 10',
  aggregatePercentage: '85.026%',
  semesterSgpas: [
    { semester: 'Semester I', sgpa: '9.50' },
    { semester: 'Semester II', sgpa: '8.81' },
    { semester: 'Semester III', sgpa: '9.10' },
    { semester: 'Semester IV', sgpa: '8.96' },
  ],
  certificationsAndHighlights: [
    '1st Position — REVIVEX at ZERO² 2026 (RE:FRAME Smart Glasses Product Concept · InternWare, IITM Janakpuri)',
    'System Architecture Lead — Contract Risk Governance Engine (AMD Slingshot Hackathon 2026 · 57 Commits)',
    'Team Leader & System Architect — Notice Decoder (SETU 2026 PS-02 · Live Full-Stack AI Web App)',
    'Co-Developer & Product Analyst — Clarity Redemption AI (Produscope 2026 · 15/15 Unit Tests Pass)',
    'Lead Product Analyst — Decoding Customer Value (IIT Guwahati Summer Analytics · 3,900 Records)',
    'Co-Developer & System Architect — SentinelX / DSARS (100+ Page Report & 100-Hr SSSAM Cybersecurity Certificate)',
    'Solo Candidate — Lureline (Orcathon 2026), UIDAI Data Hackathon 2026 (500k+ Records), SIGNAL (PromptForge #1)',
  ],
  contextNote:
    'Verified from official GGSIPU marksheet records (SGPAs: 9.50, 8.81, 9.10, 8.96; CGPA: 9.10; Overall Aggregate: 85.026%).',
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
