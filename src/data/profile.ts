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
  roleSubtitle: 'Independent Digital & Product Solutions',
  practiceSubtitle: 'Independent Digital & Product Solutions',
  studioTitle: 'AKSHIT SUKHIJA | Independent Digital & Product Solutions',
  designDirection: 'Personal Studio / Editorial Technology',
  tagline: 'Good ideas deserve to become useful solutions.',
  corePositioning:
    'I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.',
  shortBio:
    'I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.',
  extendedBio:
    'I work independently across research, data analysis, product thinking, and software development. Instead of handing your problem to a chain of account managers, I sit with the problem myself—studying how people actually work, inspecting the data, choosing where AI or fixed rules make sense, and building the finished dashboard, prototype, or web application.',
  location: 'New Delhi / NCR, India',
  availability: {
    isAvailable: true,
    statusText: 'Available for selected projects, fixed-scope pilots & product research',
    responseWindow: 'Direct 1-on-1 collaboration · Scope-based INR proposals',
  },
  capabilities: {
    core: [
      {
        number: '01',
        title: 'Data & Business Intelligence',
        summary:
          'Cleaning messy spreadsheets, analysing customer and revenue patterns in Python and SQL, and building clear Power BI dashboards that support real decisions.',
        proof: 'Decoding Customer Value (3,900 records) · OTT Retention Study',
      },
      {
        number: '02',
        title: 'AI & Workflow Automation',
        summary:
          'Combining AI text reading with fixed validation rules so routine PDFs, notices, and compliance checklists become structured schedules, alerts, and summaries.',
        proof: 'Notice Decoder (Live App) · Contract Risk Governance Engine',
      },
      {
        number: '03',
        title: 'Digital Products & Prototyping',
        summary:
          'Turning early product concepts and slow internal workflows into functional web applications, investigation workbenches, and automated PDF reporting tools.',
        proof: 'Notice Decoder · SentinelX · Lureline',
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
          'Studying customer journeys, market positioning, and competitor landscapes to ground product and business decisions in evidence.',
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
    alt: 'Akshit Sukhija — Independent Digital & Product Solutions',
    caption: 'Akshit Sukhija · Independent Digital & Product Solutions',
    roleBadge: 'Research · Data · AI · Product',
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
    id: 'python-data',
    tool: 'Python (Pandas & NumPy)',
    category: 'Data & BI',
    whatIUseItFor:
      'Cleaning raw CSV/Excel exports, checking missing values, and preparing structured customer and operational datasets.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Cleaned and standardized 3,900 customer shopping records to compare order spend against promo-code usage.',
      },
      {
        projectTitle: 'SentinelX',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Parsed multi-tool Nmap XML and OWASP ZAP CSV files concurrently using ThreadPoolExecutor.',
      },
    ],
  },
  {
    id: 'sql-analytics',
    tool: 'SQL & Relational Queries',
    category: 'Data & BI',
    whatIUseItFor:
      'Writing cohort, segmentation, and discount-dependency queries and structuring local SQLite databases.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Ran aggregation queries separating high-value loyal buyers from discount-dependent shoppers.',
      },
      {
        projectTitle: 'SentinelX',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Stored deduplicated, 5-level normalized security findings in SQLite via SQLAlchemy ORM.',
      },
    ],
  },
  {
    id: 'power-bi',
    tool: 'Power BI (.pbix)',
    category: 'Data & BI',
    whatIUseItFor:
      'Building interactive visual dashboards so founders and teams can filter customer segments, revenue, and retention metrics without touching code.',
    demonstratedUseCases: [
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Built the interactive Customer Value & Retention dashboard accompanying the written playbook.',
      },
    ],
  },
  {
    id: 'react-typescript',
    tool: 'React 19, TypeScript & Tailwind CSS',
    category: 'Software & Web',
    whatIUseItFor:
      'Designing and building responsive web applications, interactive schedules, and analyst workbenches.',
    demonstratedUseCases: [
      {
        projectTitle: 'Notice Decoder',
        projectSlug: 'notice-decoder',
        howItWasUsed:
          'Built the interactive schedule planner, clash warning view, and Notice Change Radar UI.',
      },
      {
        projectTitle: 'Lureline',
        projectSlug: 'lureline',
        howItWasUsed:
          'Built the alert triage filter bar and connected timeline workbench deployed on Vercel.',
      },
      {
        projectTitle: 'SentinelX',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Built the React + Recharts severity breakdown interface.',
      },
    ],
  },
  {
    id: 'applied-ai-rules',
    tool: 'Applied AI (LLMs, ONNX & FAISS) + Fixed Rules',
    category: 'AI & Rules',
    whatIUseItFor:
      'Reading unstructured documents and generating plain-English explanations while keeping dates, math, and pass/fail checks under fixed code rules.',
    demonstratedUseCases: [
      {
        projectTitle: 'Notice Decoder',
        projectSlug: 'notice-decoder',
        howItWasUsed:
          'Paired Qwen2.5-7B-Instruct (Featherless API) text structuring with deterministic interval clash logic and RFC 5545 (.ics) export.',
      },
      {
        projectTitle: 'Contract Risk Governance Engine',
        projectSlug: 'contract-risk-governance',
        howItWasUsed:
          'Combined FAISS clause retrieval and deterministic Python compliance rules with local ONNX Runtime / DirectML explanations (~420ms on AMD Ryzen AI).',
      },
    ],
  },
  {
    id: 'backend-pdf',
    tool: 'FastAPI, Express & ReportLab PDF',
    category: 'Software & Web',
    whatIUseItFor:
      'Building backend APIs, file ingestion pipelines, SHA-256 verification, and one-click formatted PDF generators.',
    demonstratedUseCases: [
      {
        projectTitle: 'SentinelX',
        projectSlug: 'sentinelx',
        howItWasUsed:
          'Built the FastAPI ingestion backend, SHA-256 file integrity checks, and ReportLab executive PDF compiler.',
      },
      {
        projectTitle: 'Notice Decoder',
        projectSlug: 'notice-decoder',
        howItWasUsed:
          'Built the Express backend handling notice parsing and calendar file generation on Render.',
      },
    ],
  },
  {
    id: 'product-market-research',
    tool: 'Product Discovery, UX Flows & Market Research',
    category: 'Product & Research',
    whatIUseItFor:
      'Framing messy business problems, studying user needs and alternatives, and synthesising research into actionable briefs before writing code.',
    demonstratedUseCases: [
      {
        projectTitle: 'ResolX.ai & CareerWithDishani Internships',
        howItWasUsed:
          'Translated operational bottlenecks into AI solution blueprints and synthesised multi-source research into clear decision guides.',
      },
      {
        projectTitle: 'Decoding Customer Value',
        projectSlug: 'decoding-customer-value',
        howItWasUsed:
          'Authored the segment-by-segment Retention Playbook translating SQL findings into commercial actions.',
      },
    ],
  },
];

export const STUDIO_FAQS: StudioFaqItem[] = [
  {
    id: 'scope-definition',
    category: 'Scope',
    question: 'How do we define the scope of a project if I only have a rough business problem?',
    answer:
      'You never need a technical specification beforehand. Share what is slowing your team down, what spreadsheet feels unclear, or what product idea you want to test. We inspect a small sample of your data, documents, or workflow together first, and I write a plain-English scope listing exact deliverables and boundaries before any build begins.',
  },
  {
    id: 'project-stages',
    category: 'Project Stages',
    question: 'What are the exact stages of a project from start to finish?',
    answer:
      'Every engagement follows five transparent stages: 01. Research (understand the problem, user needs, and simpler alternatives), 02. Analysis (inspect sample spreadsheets, PDFs, and edge cases), 03. AI & Logic (separate AI reading/summarisation from fixed rules for dates, math, and policy checks), 04. Software (build the dashboard, automation, or web app with live review checkpoints), and 05. Delivery (hand over the finished system, source files, and user guide).',
  },
  {
    id: 'collaboration-models',
    category: 'Collaboration Models',
    question: 'What collaboration models do you offer, and who actually does the work?',
    answer:
      'You work 1-on-1 with me directly—there are no account managers or junior hand-offs. Depending on your stage, we can start with a Fixed-Scope Pilot (testing value on one sample dataset or document workflow), a Custom End-to-End Project, a Research & Technical Assessment, or Ongoing Iterative Improvements after launch.',
  },
  {
    id: 'delivery-timelines',
    category: 'Delivery Timelines',
    question: 'What are typical delivery timelines, and how do you manage schedule expectations?',
    answer:
      'Timelines depend on the complexity and readiness of your data or workflow rather than arbitrary instant promises. As a realistic guide: focused data audits, research assessments, or small Fixed-Scope Pilots typically take 1–2 weeks; standard interactive Power BI dashboards, document automations, or working web prototypes take 2–4 weeks; and multi-part custom systems take 1–2 months. An exact milestone schedule is shared in writing after reviewing your sample material.',
  },
  {
    id: 'final-handover',
    category: 'Handover',
    question: 'What do I receive at final delivery, and how are pricing expectations handled?',
    answer:
      'You receive complete ownership of the agreed deliverable—whether that is an interactive Power BI (.pbix) dashboard and Retention Playbook, a deployed web application, or clean Python/TypeScript source code and automated PDF report scripts—along with a plain-English guide. Every project is quoted transparently in INR based on the reviewed scope, with no hidden retainers.',
  },
];
