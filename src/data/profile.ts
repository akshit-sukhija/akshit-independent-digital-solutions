export interface TechExplorerItem {
  id: string;
  tool: string;
  category: 'Data & BI' | 'AI & Rules' | 'Software & Web' | 'Product & Research';
  whatIUseItFor: string;
  demonstratedUseCases: {
    projectTitle: string;
    projectSlug?: string;
    howItWasUsed: string;
  }[];
}

export interface StudioFaqItem {
  id: string;
  category: 'Scope' | 'Project Stages' | 'Collaboration Models' | 'Delivery Timelines' | 'Handover';
  question: string;
  answer: string;
}

export const PROFILE_CONFIG = {
  name: 'AKSHIT SUKHIJA',
  fullName: 'Akshit Sukhija',
  brandUppercase: 'AKSHIT SUKHIJA',
  roleSubtitle: 'Independent Digital Content & Solutions Studio',
  practiceSubtitle: 'Independent Digital Content & Solutions Studio',
  studioTitle: 'AKSHIT SUKHIJA | Independent Digital Content & Solutions Studio',
  designDirection: 'Editorial Creative & Digital Solutions Studio',
  tagline: 'Creative ideas. Clear stories. Digital experiences.',
  heroSubheadline: 'Ideas worth noticing. Stories worth remembering. Digital experiences that work.',
  corePositioning:
    'I help founders, brands, and product teams turn ideas and complex workflows into compelling stories, visual presentations, custom websites, and AI-powered digital solutions.',
  shortBio:
    'Creative ideas. Clear stories. Digital experiences. I work at the intersection of brand storytelling, digital content, web experiences, and applied AI.',
  extendedBio:
    'I run an independent digital content and solutions studio combining product storytelling, visual presentation design, research-backed strategy, and full-stack software engineering. Instead of passing your project through layers of account managers, I work with you directly—from shaping the narrative and visual identity to building the live website, prototype, or AI workflow.',
  location: 'New Delhi / NCR, India',
  availability: {
    isAvailable: true,
    statusText: 'Available for brand storytelling, digital content, web experiences & AI solutions',
    responseWindow: 'Direct 1-on-1 collaboration · Scope-based INR proposals',
  },
  capabilities: {
    core: [
      {
        number: '01',
        title: 'Brand Strategy & Storytelling',
        summary:
          'Product positioning, narrative architecture, pitch decks, and research-backed brand strategy that make complex ideas immediately memorable.',
        proof: 'RE:FRAME (1st Place · REVIVEX) · Decoding Customer Value',
      },
      {
        number: '02',
        title: 'Digital Content & Creative Production',
        summary:
          'High-impact visual presentations, product concept showcases, campaign narratives, and editorial research content.',
        proof: 'RE:FRAME 15-Slide Visual System · Nykaa & IndusShield Concept Decks',
      },
      {
        number: '03',
        title: 'Websites & Digital Experiences',
        summary:
          'Custom web applications, interactive product prototypes, and responsive digital experiences built with modern React and TypeScript.',
        proof: 'Notice Decoder · SentinelX · Clarity Redemption AI · Lureline',
      },
      {
        number: '04',
        title: 'AI-Powered Digital Solutions',
        summary:
          'Practical AI workflows, prompt architectures, document automation, and data intelligence systems grounded in deterministic rules.',
        proof: 'Notice Decoder · SIGNAL – Prompt Forge · InsightForgeAI',
      },
    ],
    supporting: [
      {
        title: 'Product Strategy & UX',
        summary:
          'Defining user needs, comparing alternatives, prioritising features, and mapping clear user flows before writing code.',
      },
      {
        title: 'Brand & Market Research',
        summary:
          'Studying customer journeys, market positioning, and competitor landscapes to ground creative and product decisions in evidence.',
      },
      {
        title: 'Software Quality',
        summary:
          'Building deterministic validation rules, SHA-256 file integrity checks, deduplication pipelines, and clean, maintainable code.',
      },
    ],
  },
  photo: {
    src: '/profile.jpg',
    fallbackFileName: 'LINKEDIN PROFILE PHOTO.jpeg',
    alt: 'Akshit Sukhija — Independent Digital Content & Solutions Studio',
    caption: 'Akshit Sukhija · Independent Digital Content & Solutions Studio',
    roleBadge: 'Storytelling · Content · Web · AI',
    slotNotice:
      'Upload LINKEDIN PROFILE PHOTO.jpeg using the button below to preview immediately, or place it at public/profile.jpg in the repository.',
  },
  contact: {
    emailPrimary: {
      label: 'Primary Email',
      address: 'akshithere075@gmail.com',
      mailto: 'mailto:akshithere075@gmail.com',
      verified: true,
    },
    emailSecondary: {
      label: 'Secondary Email',
      address: 'akshitsukhija4@gmail.com',
      rawProvided: 'akshitsukhija4gmail.com',
      mailto: 'mailto:akshitsukhija4@gmail.com',
      verified: true,
    },
    phone: {
      label: 'Phone & WhatsApp',
      displayNumber: '+91 9873865213',
      rawDigits: '919873865213',
      telHref: 'tel:+919873865213',
      whatsappHref:
        'https://wa.me/919873865213?text=Hi%20Akshit%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.',
      verified: true,
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'in/akshit-sukhija-',
      url: 'https://www.linkedin.com/in/akshit-sukhija-/',
      verified: true,
    },
    github: {
      label: 'GitHub',
      handle: '@akshit-sukhija',
      url: 'https://github.com/akshit-sukhija',
      verified: true,
    },
  },
};

export const TECHNOLOGY_EXPLORER_ITEMS: TechExplorerItem[] = [
  {
    id: 'product-market-research',
    tool: 'Brand Storytelling, Pitch Architecture & UX Strategy',
    category: 'Product & Research',
    whatIUseItFor:
      'Framing product narratives, designing visual presentation systems, conducting competitive teardowns, and mapping user journeys before engineering begins.',
    demonstratedUseCases: [
      {
        projectTitle: 'RE:FRAME — Smart Glasses Product Concept',
        projectSlug: 'reframe',
        howItWasUsed:
          'Led product research, competitive analysis, Focus Engine concept architecture, companion-app ecosystem design, and the 15-slide visual presentation that won 1st Place in REVIVEX at ZERO² 2026.',
      },
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Authored Deliverable-4_Retention_Playbook.pdf and Deliverable-5_Executive_Summary.pdf translating SQL findings into commercial retention actions.',
      },
      {
        projectTitle: 'ResolX.ai & CareerWithDishani Internships',
        howItWasUsed:
          'Authored multimodal speech-call sentiment solutioning specifications and synthesised multi-source research briefs.',
      },
    ],
  },
  {
    id: 'react-typescript',
    tool: 'React 19, TypeScript & Interactive Web Experiences',
    category: 'Software & Web',
    whatIUseItFor:
      'Designing and building responsive web applications, interactive product prototypes, deterministic financial/schedule calculators, and analyst workbenches.',
    demonstratedUseCases: [
      {
        projectTitle: 'Clarity Redemption AI',
        projectSlug: 'clarity-redemption-ai',
        howItWasUsed:
          'Built a TypeScript (98.7%) & React mutual fund consequence engine passing 15/15 unit tests on FIFO lot consumption, exit loads, and STT deductions.',
      },
      {
        projectTitle: 'Notice Decoder',
        projectSlug: 'notice-decoder',
        howItWasUsed:
          'Built the interactive schedule planner, 30-minute overlap detector, and Notice Change Radar UI.',
      },
      {
        projectTitle: 'Lureline',
        projectSlug: 'lureline',
        howItWasUsed:
          'Built the 6-node cyber deception investigation workbench with 100% npm test pass rate and GitHub Actions CI.',
      },
    ],
  },
  {
    id: 'applied-ai-rules',
    tool: 'Applied AI (LLMs, ONNX, FAISS & Prompt Systems) + Fixed Rules',
    category: 'AI & Rules',
    whatIUseItFor:
      'Reading unstructured documents and generating plain-English explanations while keeping dates, financial math, and pass/fail checks under fixed code rules.',
    demonstratedUseCases: [
      {
        projectTitle: 'Notice Decoder',
        projectSlug: 'notice-decoder',
        howItWasUsed:
          'Paired Qwen2.5-7B-Instruct (Featherless API) semantic structuring with deterministic interval clash logic and RFC 5545 (.ics) export.',
      },
      {
        projectTitle: 'SIGNAL – Prompt Forge',
        howItWasUsed:
          'Designed a 5-stage prompt architecture achieving 95.0% accuracy (38/40 cases) on an adversarial change-detection test set.',
      },
      {
        projectTitle: 'Contract Risk Governance Engine',
        projectSlug: 'contract-risk-governance',
        howItWasUsed:
          'Combined FAISS clause retrieval and deterministic CPU compliance locking with AMD Ryzen AI NPU DirectML explanations (~420ms latency).',
      },
    ],
  },
  {
    id: 'python-data',
    tool: 'Python (Pandas, NumPy, Scikit-learn & Colab)',
    category: 'Data & BI',
    whatIUseItFor:
      'Cleaning raw CSV/Excel exports, analyzing large public/retail datasets, training ML classifiers, and preparing structured analytical reports.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Cleaned 3,900 customer shopping records and engineered Promo_Dependency_Score (identifying 43.0% Discount Survivors vs 36.4% Premium Loyalists).',
      },
      {
        projectTitle: 'UIDAI Demographic Update Intelligence',
        howItWasUsed:
          'Analyzed 500,000+ aggregated UIDAI records across 956 districts and 19,607 pincodes in Google Colab.',
      },
      {
        projectTitle: 'OTT Viewer Retention Analysis',
        howItWasUsed:
          'Evaluated N = 33,171 streaming episodes across 100 series, diagnosing the Episodes 4–8 mid-season drop-off spike (16.7% vs 11.8% late-season).',
      },
    ],
  },
  {
    id: 'sql-analytics',
    tool: 'SQL & Relational Queries',
    category: 'Data & BI',
    whatIUseItFor:
      'Writing cohort, CASE-statement segmentation, window-function queries, and structuring local SQLite databases.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Executed SQL CASE and window-function segmentation queries separating full-price loyalists from promo-dependent buyers.',
      },
      {
        projectTitle: 'SentinelX / DSARS',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Stored deduplicated, 5-level normalized security findings in SQLite via SQLAlchemy ORM.',
      },
    ],
  },
  {
    id: 'power-bi',
    tool: 'Power BI (.pbix) & Visual Analytics',
    category: 'Data & BI',
    whatIUseItFor:
      'Building interactive visual dashboards so founders and teams can filter customer segments, revenue, and retention metrics without touching code.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Built Deliverable-3_PowerBI_Dashboard.pbix accompanying the Retention Playbook and Executive Summary.',
      },
      {
        projectTitle: 'OTT Viewer Retention Analysis',
        howItWasUsed:
          'Visualized episode-by-episode continuation rates and mid-season drop-off cohorts.',
      },
    ],
  },
  {
    id: 'backend-pdf',
    tool: 'FastAPI, Express, Flask & ReportLab PDF',
    category: 'Software & Web',
    whatIUseItFor:
      'Building backend APIs, multithreaded file ingestion pipelines, SHA-256 verification, and one-click formatted PDF generators.',
    demonstratedUseCases: [
      {
        projectTitle: 'SentinelX / DSARS',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Built the FastAPI ingestion backend, 11-worker ThreadPoolExecutor orchestrator, SHA-256 file integrity checks, and ReportLab PDF compiler.',
      },
      {
        projectTitle: 'Contract Risk Governance Engine',
        projectSlug: 'contract-risk-governance',
        howItWasUsed:
          'Built FastAPI (/evaluate, /health) endpoints and immutable SHA-256 + JSONL decision trace logging across 57 commits.',
      },
    ],
  },
];

export const STUDIO_FAQS: StudioFaqItem[] = [
  {
    id: 'scope-definition',
    category: 'Scope',
    question: 'How do we define the scope of a project if I only have an early idea or business problem?',
    answer:
      'You never need a technical or creative specification beforehand. Share your goal, current brand or product bottleneck, or the workflow you want to improve. We review your existing material first and I prepare a clear, plain-English scope listing exact deliverables and boundaries before any production begins.',
  },
  {
    id: 'project-stages',
    category: 'Project Stages',
    question: 'What are the stages of working together from start to finish?',
    answer:
      'Every project follows four clear stages: 01. Discover (understand your audience, business context, and core problem), 02. Define (shape the narrative, visual direction, or system architecture with a written scope), 03. Create (design the story deck, build the website, or engineer the AI/data workflow with live review checkpoints), and 04. Deliver (hand over the final assets, live deployment, source files, and documentation).',
  },
  {
    id: 'collaboration-models',
    category: 'Collaboration Models',
    question: 'What collaboration models do you offer, and who actually does the work?',
    answer:
      'You work 1-on-1 with me directly—there are no account managers or junior hand-offs. Depending on your stage, we can start with a Fixed-Scope Pilot (testing a concept deck, prototype, or single workflow), a Custom End-to-End Project, a Research & Strategy Assessment, or Ongoing Iterative Improvements after launch.',
  },
  {
    id: 'delivery-timelines',
    category: 'Delivery Timelines',
    question: 'What are typical delivery timelines, and how do you manage schedule expectations?',
    answer:
      'Timelines depend on project complexity and material readiness rather than arbitrary overnight promises. Focused strategy decks, research audits, or small Fixed-Scope Pilots typically take 1–2 weeks; standard interactive websites, prototypes, or dashboards take 2–4 weeks; and multi-part custom systems take 1–2 months. An exact milestone schedule is agreed in writing upfront.',
  },
  {
    id: 'final-handover',
    category: 'Handover',
    question: 'What do I receive at final delivery, and how are pricing expectations handled?',
    answer:
      'You receive complete ownership of the agreed deliverable—whether that is a presentation deck and visual story system, a deployed website or web application, an interactive Power BI dashboard, or clean Python/TypeScript source code—along with a plain-English guide. Every project is quoted transparently in INR based on the reviewed scope.',
  },
];
