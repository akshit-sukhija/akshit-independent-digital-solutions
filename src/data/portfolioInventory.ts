export type CuratedWorkSection =
  | 'selected-projects'
  | 'research-analytics'
  | 'product-concepts';

export type WorkCollaborationType =
  | 'Solo Work'
  | 'Collaborative Work'
  | 'Research & Analytics'
  | 'Independent Concept'
  | 'Working Prototype';

export type CuratedDomain =
  | 'ai-automation'
  | 'data-intelligence'
  | 'custom-systems'
  | 'product-strategy';

export interface CuratedWorkItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  workSection: CuratedWorkSection;
  collaborationType: WorkCollaborationType;
  domain: CuratedDomain;
  hasDedicatedCaseStudy: boolean;
  recognitionBadge?: string;
  overview: string;
  problem: string;
  myContribution: string;
  collaborators: string;
  specialCredit?: string;
  methodology: string;
  technologies: string[];
  outcomes: string;
  limitations: string;
  screenshotUrl?: string;
  screenshotCaption?: string;
  links: {
    liveDemoUrl?: string;
    githubUrl?: string;
    colabUrl?: string;
    drivePdfUrl?: string;
    drivePdfPlaceholder?: string;
  };
}

/**
 * Curated portfolio items organised into three editorial sections:
 * 1. Selected Projects (Flagship case studies & live applications)
 * 2. Research & Analytics (Evaluated data studies, public policy analytics & ML pipelines)
 * 3. Product Concepts & Experiments (Award-winning product storytelling, live AI prototypes & UX teardowns)
 */
export const CURATED_WORK_ITEMS: CuratedWorkItem[] = [
  // ============================================================================
  // SECTION 1: SELECTED PROJECTS (Dedicated Case Studies & Flagship Showcases)
  // ============================================================================
  {
    slug: 'reframe',
    title: 'RE:FRAME — Smart Glasses Product Concept',
    subtitle:
      'Award-winning product revival strategy, Focus Engine UX concept, and visual presentation reimagining Google Glass for mindful everyday utility.',
    category: 'Brand Storytelling, Product Strategy & Visual Concept',
    workSection: 'selected-projects',
    collaborationType: 'Collaborative Work',
    domain: 'product-strategy',
    hasDedicatedCaseStudy: true,
    recognitionBadge: '1st Place · REVIVEX · ZERO² 2026',
    overview:
      'Developed for REVIVEX at ZERO² — The Innovator’s Convention (IITM Janakpuri, September 21–22, 2026), RE:FRAME reimagines why original 2014 Google Glass failed and proposes a privacy-first, screen-free wearable ecosystem built around a contextual Focus Engine.',
    problem:
      'Smartphones brought the world into our hands, but constant notifications pull us away from real life. Meanwhile, original 2014 Google Glass struggled due to high price, unconventional aesthetics, privacy discomfort, and an unclear everyday use case.',
    myContribution:
      'Primary contributor across product research, competitive analysis, concept development, product architecture, Focus Engine design, companion-app ecosystem, product strategy, pricing proposal (₹39,999), and presentation.',
    collaborators: 'Presented by Akshit Sukhija & Adyot Ohri (Team Selfish Gods · REVIVEX at ZERO² 2026)',
    specialCredit: 'Special Video Credit: Adyot Ohri',
    methodology:
      'Diagnosed the 4 structural failure points of 2014 Google Glass, architected a 3-tier Glasses–Phone–Cloud system where heavy AI runs on the companion phone, designed the 4-stage Focus Engine notification filter, and crafted a 15-slide visual narrative.',
    technologies: [
      'Product Strategy & Positioning',
      'Visual Storytelling & Deck Design',
      'Focus Engine UX Architecture',
      'Companion App Ecosystem Design',
      'Competitive & Market Research',
    ],
    outcomes:
      'Awarded 1st Position in REVIVEX at ZERO² 2026 (organized by InternWare — The Internship Cell of IITM, Janakpuri).',
    limitations:
      'Independent, unbuilt hardware/product concept created for academic competition. Not an official Google product or a commercially deployed device.',
    screenshotUrl: '/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg',
    screenshotCaption: 'RE:FRAME visual concept showcase — 1st Place · REVIVEX · ZERO² 2026',
    links: {
      drivePdfUrl: '/assets/aistudio/REFRAME_Smart_Glasses_Product_Concept_97e4e1df.pdf',
    },
  },
  {
    slug: 'notice-decoder',
    title: 'Notice Decoder',
    subtitle:
      'Hybrid AI & deterministic schedule planner that turns unstructured institutional circulars into conflict-checked calendar events.',
    category: 'AI Automation & Full-Stack Web App',
    workSection: 'selected-projects',
    collaborationType: 'Collaborative Work',
    domain: 'ai-automation',
    hasDedicatedCaseStudy: true,
    overview:
      'A full-stack web application built for SETU 2026 (Problem Statement PS-02) that extracts schedules and deadlines from unstructured circulars, detects overlapping time windows mathematically, tracks amended notices via a Notice Change Radar, and exports RFC 5545 (.ics) calendar files.',
    problem:
      'Colleges and operational teams distribute critical dates inside multi-paragraph PDF circulars and messages. Important deadlines and overlapping exam or meeting slots are easily missed when checked manually.',
    myContribution:
      'Team Leader & System Architect — designed the hybrid extraction pipeline, deterministic interval overlap math, Notice Change Radar diffing logic, and RFC 5545 (.ics) export.',
    collaborators: 'Team Signal Forge (Co-creator: Tanya Garg — UI/UX & Testing)',
    methodology:
      'Separates semantic text structuring (Qwen2.5-7B-Instruct via Featherless API) from deterministic local date/time parsing and interval overlap evaluation: (StartA < EndB) && (StartB < EndA).',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Express',
      'Qwen2.5-7B-Instruct (Featherless API)',
      'RFC 5545 iCalendar (.ics)',
    ],
    outcomes:
      'Live web application deployed on Vercel. Accurately flags overlapping event intervals (such as a 30-minute clash on 13 Nov 2026 between an internal test and a guest lecture) and exports one-click calendar files.',
    limitations:
      'Designed for selectable notice text; scanned image circulars without selectable text require an OCR pre-processing step.',
    screenshotUrl: '/assets/projects/notice-decoder-live.png',
    screenshotCaption: 'Live Notice Decoder workspace running at notice-decoder-pi.vercel.app',
    links: {
      liveDemoUrl: 'https://notice-decoder-pi.vercel.app/',
      githubUrl:
        'https://github.com/Tanya-garg10/Notice-Decoder-AI-Powered-College-Notice-Schedule-Planner',
      drivePdfPlaceholder: 'Project Report PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'sentinelx',
    title: 'SentinelX (DSARS)',
    subtitle:
      'Multi-tool security scan ingestion, SHA-256 evidence verification, deduplication, and automated executive PDF reporting platform.',
    category: 'Data Processing & Automated PDF Reporting System',
    workSection: 'selected-projects',
    collaborationType: 'Collaborative Work',
    domain: 'custom-systems',
    hasDedicatedCaseStudy: true,
    overview:
      'A full-stack assessment and reporting platform (Digital Security Assessment & Reporting Platform) that ingests heterogeneous XML/CSV outputs from Nmap and OWASP ZAP, verifies file integrity with SHA-256 hashes, deduplicates overlapping alerts into 5 severity tiers, and compiles formatted executive PDFs.',
    problem:
      'Security analysts spend hours manually merging incompatible XML and CSV scan exports, removing duplicate findings across tools, and formatting summary PDF reports for stakeholders.',
    myContribution:
      'Co-Developer & System Architect — engineered the FastAPI multithreaded ingestion backend (11-worker ThreadPoolExecutor), SHA-256 integrity hashing workflow, SQLAlchemy/SQLite normalization schema, and ReportLab PDF compiler.',
    collaborators:
      'Co-developed with Adyot Ohri (IITM Summer Training Capstone; 100-Hour Cybersecurity Certificate from SSSAM Academy)',
    methodology:
      'Concurrent file parsing via Python ThreadPoolExecutor, cryptographic SHA-256 digest logging on upload, relational deduplication into a 5-level severity schema, and programmatic PDF compilation.',
    technologies: [
      'Python',
      'FastAPI',
      'ThreadPoolExecutor',
      'SQLite & SQLAlchemy',
      'React 19',
      'Recharts',
      'ReportLab PDF',
    ],
    outcomes:
      'Live assessment interface deployed on Vercel (sentineix.vercel.app) backed by a 100+ page formal academic technical report documenting the backend architecture, ORM schema, and automated PDF pipeline.',
    limitations:
      'Processes exported XML/CSV scan artifacts rather than performing active network exploitation; built as a portable SQLite assessment workbench.',
    screenshotUrl: '/assets/projects/sentinelx-live.png',
    screenshotCaption: 'Live SentinelX platform running at sentineix.vercel.app',
    links: {
      liveDemoUrl: 'https://sentineix.vercel.app/',
      drivePdfPlaceholder: '100+ Page Technical Project Report PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'clarity-redemption-ai',
    title: 'Clarity Redemption AI',
    subtitle:
      'Mutual fund pre-redemption consequence engine combining deterministic FIFO lot math with a non-advisory AI explanation layer.',
    category: 'FinTech Product Prototype & Deterministic Math Engine',
    workSection: 'selected-projects',
    collaborationType: 'Collaborative Work',
    domain: 'custom-systems',
    hasDedicatedCaseStudy: true,
    overview:
      'Built for Produscope 2026 (E-Cell IIT Guwahati), Clarity Redemption AI reveals the hidden exit-load and STT consequences of redeeming mutual fund units before an investor confirms a withdrawal.',
    problem:
      'Retail investment apps display total portfolio value on redemption screens without showing which specific purchase lots will be sold first (FIFO) or whether recent SIP units will trigger exit-load penalties.',
    myContribution:
      'Co-Developer & Product Analyst — architected the TypeScript deterministic FIFO lot-consumption engine, 365-day holding-period boundary math, 15-test automated verification suite, and guardrails for the "Ask Clarity" explainer.',
    collaborators: 'Co-developed with Team Leader Devanshi Pandey (Produscope 2026 · E-Cell IIT Guwahati)',
    methodology:
      '100% of FIFO unit matching, exit-load cliffs, and STT deductions are computed by deterministic TypeScript rules (verified by 15/15 unit tests), while the AI explainer is strictly bounded to explaining those locked numbers without giving buy/sell advice.',
    technologies: [
      'TypeScript (98.7%)',
      'React',
      'Vite',
      'Deterministic FIFO Math Engine',
      'Automated Unit Tests (15/15)',
    ],
    outcomes:
      'Live web application deployed at clarity-redemption.ai.studio and public source repository on GitHub passing 15/15 unit tests and 0 TypeScript compiler errors.',
    limitations:
      'Competition prototype using illustrative NAVs and sample SID parameters; not connected to live registrar order execution.',
    screenshotUrl: '/assets/projects/clarity-live.png',
    screenshotCaption: 'Live Clarity Redemption AI workspace at clarity-redemption.ai.studio',
    links: {
      liveDemoUrl: 'https://clarity-redemption.ai.studio',
      githubUrl: 'https://github.com/akshit-sukhija/Clarity-Redemption-AI',
      drivePdfPlaceholder: 'Produscope 2026 Case Study Deck PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'decoding-customer-value',
    title: 'Decoding Customer Value',
    subtitle:
      'Customer behaviour & promotional dependency segmentation across 3,900 retail transactions using Python, SQL, and Power BI.',
    category: 'Data Analytics & Business Intelligence',
    workSection: 'selected-projects',
    collaborationType: 'Collaborative Work',
    domain: 'data-intelligence',
    hasDedicatedCaseStudy: true,
    overview:
      'An end-to-end business intelligence study created for the IIT Guwahati business analytics case competition that separates genuine repeat buyers from discount-dependent shoppers across 3,900 customer transaction records.',
    problem:
      'Retail and e-commerce teams often mistake high promotional sales volume for true brand loyalty, eroding profit margins by sending blanket discount codes to customers who would have purchased at full price.',
    myContribution:
      'Lead Data & BI Analyst — led the Python data cleaning pipeline, engineered the Promo_Dependency_Score feature, wrote the SQL cohort segmentation queries, built the Power BI (.pbix) dashboard, and co-authored the Retention Playbook.',
    collaborators: 'Co-authored with Bhumika Gudwani (IIT Guwahati Analytics Case Study)',
    methodology:
      'Cleaned 3,900 transaction rows in Python (Pandas/NumPy), executed SQL CASE & window-function segmentation queries, modelled interactive DAX visuals in Power BI, and translated findings into a commercial Retention Playbook.',
    technologies: ['Python', 'Pandas & NumPy', 'SQL', 'Power BI (.pbix)', 'Jupyter Notebook'],
    outcomes:
      'Segmented the 3,900-customer base into actionable cohorts—identifying 43.0% Discount Survivors versus 36.4% Premium Loyalists—complete with public GitHub code, SQL scripts, and Power BI deliverables.',
    limitations:
      'All segmentation percentages and behavioural conclusions are bounded strictly to the 3,900-record dataset studied.',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/IITG_Decoding_Customer_Value_Akshit_Bhumika',
      drivePdfPlaceholder: 'Executive Summary & Retention Playbook PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'contract-risk-governance',
    title: 'Contract Risk Governance Engine',
    subtitle:
      'Hybrid deterministic compliance engine with FAISS clause retrieval, SHA-256 audit sealing, and hardware-accelerated local AI explanations.',
    category: 'Applied AI & Deterministic Compliance System',
    workSection: 'selected-projects',
    collaborationType: 'Solo Work',
    domain: 'ai-automation',
    hasDedicatedCaseStudy: true,
    overview:
      'A solo-engineered Python and FastAPI compliance evaluation prototype that indexes contract clauses with FAISS, locks pass/fail compliance states using deterministic CPU rules and SHA-256 hashes, and generates plain-English explanations via ONNX Runtime and DirectML.',
    problem:
      'Relying on an unconstrained LLM to judge contract compliance introduces hallucination risk and non-reproducible audit trails, while manual checklist review is slow.',
    myContribution:
      'Solo Architect & Developer — built the entire 57-commit codebase, FAISS retrieval pipeline, deterministic rule evaluator, SHA-256 + JSONL immutable audit logger, and DirectML NPU inference integration.',
    collaborators: 'Solo Project (Akshit Sukhija)',
    methodology:
      'Decouples adjudication from narration: deterministic Python rules evaluate retrieved clauses and seal the result with a SHA-256 digest before the local ONNX/DirectML model writes a human-readable explanation.',
    technologies: [
      'Python',
      'FastAPI',
      'FAISS',
      'ONNX Runtime',
      'DirectML (AMD Ryzen AI NPU)',
      'SHA-256',
    ],
    outcomes:
      'Open-source codebase (57 commits, MIT License). Offloading explanation generation to AMD Ryzen AI NPU via DirectML achieved ~420ms latency per explanation (~4x speedup vs CPU) on a 120-page test contract under Windows 11.',
    limitations:
      'The ~420ms DirectML benchmark is specific to AMD Ryzen AI hardware under Windows 11.',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/contract-risk-governance',
      drivePdfPlaceholder: 'Architecture & Benchmark Report PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'lureline',
    title: 'Lureline',
    subtitle:
      'Interactive deception-telemetry investigation workbench for filtering alert streams and verifying incident timelines.',
    category: 'Security Investigation Workbench & Web UI',
    workSection: 'selected-projects',
    collaborationType: 'Solo Work',
    domain: 'custom-systems',
    hasDedicatedCaseStudy: true,
    overview:
      'A solo-built web workbench created for Orcathon 2026 that models a 6-node network topology (4 ordinary assets, 2 decoy assets) to demonstrate transparent alert triage, session deduplication, and anti-fabrication path reconstruction.',
    problem:
      'Security analysts face noisy event logs where high-confidence decoy interactions are buried alongside routine traffic, and black-box tools often guess unverified lateral movement hops.',
    myContribution:
      'Solo Developer & Architect — designed the 6-node topology model, deterministic replay scenarios, interactive React/TypeScript investigation interface, and GitHub Actions CI validation suite.',
    collaborators: 'Solo Project (Akshit Sukhija)',
    methodology:
      'Ingests synthetic telemetry fixtures across 4 evaluation scenarios, verifies every reconstructed path edge against explicit event IDs, and flags evidence gaps instead of fabricating missing hops.',
    technologies: [
      'TypeScript',
      'Vite',
      'Express',
      'Node.js',
      'GitHub Actions CI',
      'Vercel',
    ],
    outcomes:
      'Live web workbench deployed on Vercel with public source code on GitHub and 100% pass rate on automated validation tests (npm test).',
    limitations:
      'Runs on synthetic telemetry fixtures for safe public exploration rather than live network packets.',
    screenshotUrl: '/assets/projects/lureline-live.png',
    screenshotCaption: 'Live Lureline investigation workspace running at lureline-orcathon-2026.vercel.app',
    links: {
      liveDemoUrl: 'https://lureline-orcathon-2026.vercel.app/',
      githubUrl: 'https://github.com/akshit-sukhija/lureline-orcathon-2026',
    },
  },

  // ============================================================================
  // SECTION 2: RESEARCH & ANALYTICS
  // ============================================================================
  {
    slug: 'uidai-demographic-intelligence',
    title: 'UIDAI Demographic Update Intelligence',
    subtitle:
      'Spatial and temporal analysis of 500,000+ official UIDAI demographic update records across 956 districts and 19,607 pincodes.',
    category: 'Public Policy Data Science & Anomaly Detection',
    workSection: 'research-analytics',
    collaborationType: 'Research & Analytics',
    domain: 'data-intelligence',
    hasDedicatedCaseStudy: false,
    overview:
      'An independent data science investigation built for the UIDAI Data Hackathon 2026 (Team ID: UIDAI_7528) analysing half a million official Aadhaar demographic update records to identify migration corridors, seasonal update surges, and pincode-level anomalies.',
    problem:
      'Static staffing and infrastructure allocation across enrollment centers leads to severe bottlenecks during seasonal migration waves and school-admission cycles.',
    myContribution:
      'Solo Lead Analyst — executed the Python data cleaning pipeline across 500,000+ rows, engineered the Normalized Update Intensity (NUI) and Z-score anomaly metrics, and authored the analytical report.',
    collaborators: 'Solo Research Study (Akshit Sukhija · Team ID: UIDAI_7528)',
    methodology:
      'Applied Pandas and SciPy statistical modeling across 956 districts and 19,607 pincodes, using Z-score and IQR thresholds to isolate structural update anomalies from normal seasonal variance.',
    technologies: [
      'Python',
      'Google Colab',
      'Pandas',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'Seaborn',
    ],
    outcomes:
      'Identified 15–30% seasonal update surges in high-density urban migration corridors and isolated a 0.02% structural anomaly cluster at the pincode level to guide mobile enrollment van deployment.',
    limitations:
      'Analysis is bounded to the official aggregated UIDAI hackathon dataset snapshot.',
    links: {
      colabUrl:
        'https://colab.research.google.com/drive/17bSIIzpAwQZnbobBpOfM6El0EARxvHka?usp=sharing',
      drivePdfPlaceholder: 'UIDAI Hackathon Analytical Report PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'ott-viewer-retention-analysis',
    title: 'OTT Viewer Retention Analysis',
    subtitle:
      'Episode-level viewer drop-off and cohort retention study across 33,171 episodes from 100 streaming series (16.7% Episodes 4–8 vs 11.8% Episodes 1–3 drop-off).',
    category: 'Media Retention Analytics & Cohort Modeling',
    workSection: 'research-analytics',
    collaborationType: 'Research & Analytics',
    domain: 'data-intelligence',
    hasDedicatedCaseStudy: false,
    overview:
      'A quantitative retention study examining 33,171 streaming episodes across 100 multi-season series (2020–2024 dataset) to pinpoint where audiences abandon shows and how episode pacing affects retention.',
    problem:
      'Streaming platforms invest heavily in pilot episodes, yet significant viewer abandonment occurs mid-season when narrative pacing slows between episodes 4 and 8.',
    myContribution:
      'Solo Analyst — structured the 6-hypothesis testing framework, computed Early Retention Ratio (ERR) and Mid-Season Slump Index (MSSI) metrics, and formulated commissioning recommendations.',
    collaborators: 'Solo Research Study (Akshit Sukhija)',
    methodology:
      'Evaluated episode-to-episode retention curves, early vs. mid-season drop-off cohorts, and season-length elasticity across 33,171 episodes (2020–2024 dataset).',
    technologies: [
      'Python',
      'Statistical Cohort Analysis',
      'Retention Curve Modeling',
      'Hypothesis Testing',
    ],
    outcomes:
      'Pinpointed the Episodes 4–8 mid-season drop-off spike (16.7%) compared to Episodes 1–3 early-season drop-off (11.8%) across the 2020–2024 dataset, supporting tighter 6–8 episode season structures.',
    limitations:
      'Observational study based on aggregated episode engagement records (2020–2024 cohort dataset).',
    links: {
      drivePdfPlaceholder: 'OTT Viewer Retention Study PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'tweet-sentiment-analysis',
    title: 'Tweet Sentiment Analysis Pipeline',
    subtitle:
      'End-to-end natural language processing pipeline classifying social text sentiment with TF-IDF vectorization and classical ML models.',
    category: 'Machine Learning & NLP Classification',
    workSection: 'research-analytics',
    collaborationType: 'Solo Work',
    domain: 'ai-automation',
    hasDedicatedCaseStudy: false,
    overview:
      'An open-source Python NLP pipeline that preprocesses noisy short-form social media text, extracts TF-IDF n-gram features, benchmarks classical classifiers, and serves predictions through a lightweight Flask endpoint.',
    problem:
      'Short-form social posts contain slang, URLs, and punctuation noise that degrade off-the-shelf sentiment polarity checks without tailored preprocessing.',
    myContribution:
      'Solo Developer — built the text normalization pipeline, trained and compared Logistic Regression, SVM, and Naive Bayes classifiers in Scikit-learn, and packaged the Flask inference script.',
    collaborators: 'Solo Project (Akshit Sukhija)',
    methodology:
      'Tokenization, stop-word removal, TF-IDF vectorization, cross-validated model comparison in Scikit-learn, and confusion-matrix evaluation.',
    technologies: [
      'Python',
      'Scikit-learn',
      'NLTK',
      'TF-IDF',
      'Pandas',
      'Flask',
      'Jupyter Notebook',
    ],
    outcomes:
      'Published complete reproducible Python codebase and evaluation notebooks on GitHub.',
    limitations:
      'Trained on static English tweet corpora; domain-specific sarcasm or code-mixed Hinglish requires fine-tuned transformer embeddings.',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/tweet-sentiment-analysis',
    },
  },

  // ============================================================================
  // SECTION 3: PRODUCT CONCEPTS & EXPERIMENTS
  // ============================================================================
  {
    slug: 'signal-prompt-forge',
    title: 'SIGNAL – Prompt Forge',
    subtitle:
      'Operational change-detection assistant that compares what a team already knows against new updates and surfaces only actionable changes.',
    category: 'Applied AI & Prompt Engineering System',
    workSection: 'product-concepts',
    collaborationType: 'Working Prototype',
    domain: 'ai-automation',
    hasDedicatedCaseStudy: false,
    overview:
      'Built for Prompt Forge 2026, SIGNAL is a live web prototype and 5-stage prompt architecture that filters operational noise by comparing baseline team assumptions against incoming announcements or policy updates.',
    problem:
      'Operations and product teams suffer from alert fatigue when long policy updates or status messages repeat known information without highlighting what actually changed.',
    myContribution:
      'Solo Creator — designed the 5-stage prompt pipeline (Extract → Categorize → Priority Score → Synthesize → Format), built the live web prototype, and evaluated it on a 40-case adversarial test set.',
    collaborators: 'Solo Prototype (Akshit Sukhija)',
    methodology:
      'Enforces strict JSON schema guardrails, explicit priority-scoring heuristics, and zero-assumption fallback rules so only verified deltas trigger an action alert.',
    technologies: [
      'Prompt Architecture',
      'React & TypeScript Web App',
      'JSON Schema Guardrails',
      'Adversarial Evaluation (40 Cases)',
    ],
    outcomes:
      'Deployed live at delta-focus.lovable.app. Achieved 95.0% classification accuracy (38/40 cases) with 100% precision and recall on critical compliance changes across the 40-case evaluation benchmark.',
    limitations:
      'Benchmark metrics reflect performance on the 40-case adversarial evaluation set.',
    screenshotUrl: '/assets/projects/signal-live.png',
    screenshotCaption: 'Live SIGNAL workspace running at delta-focus.lovable.app',
    links: {
      liveDemoUrl: 'https://delta-focus.lovable.app',
      drivePdfPlaceholder: 'SIGNAL Prompt Architecture Report PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'insightforge-ai',
    title: 'InsightForgeAI',
    subtitle:
      'Product intelligence prototype that synthesizes customer reviews, support tickets, and research notes into prioritized feature briefs.',
    category: 'Product Intelligence & Research Synthesis Prototype',
    workSection: 'product-concepts',
    collaborationType: 'Working Prototype',
    domain: 'ai-automation',
    hasDedicatedCaseStudy: false,
    overview:
      'An interactive product intelligence web application that helps product teams turn scattered user feedback, tickets, and research notes into structured, evidence-backed feature priorities.',
    problem:
      'Early-stage founders and product managers struggle to synthesize hundreds of customer reviews and support logs into clear decisions on what to build next.',
    myContribution:
      'Solo Creator — designed the 5-stage synthesis flow (Extract claims → Compare → Verify sources → Surface contradictions → Synthesize decision brief) and built the live web interface.',
    collaborators: 'Solo Prototype (Akshit Sukhija)',
    methodology:
      'Combines structured feedback clustering with source-traceable synthesis so product recommendations stay linked to underlying user complaints.',
    technologies: [
      'React',
      'TypeScript',
      'AI Research Synthesis Workflow',
      'Product Intelligence UX',
    ],
    outcomes:
      'Live interactive web prototype deployed at insightforgeai.lovable.app.',
    limitations:
      'Built as an exploratory product intelligence web prototype.',
    screenshotUrl: '/assets/projects/insightforgeai-live.png',
    screenshotCaption: 'Live InsightForgeAI application running at insightforgeai.lovable.app',
    links: {
      liveDemoUrl: 'https://insightforgeai.lovable.app',
    },
  },
  {
    slug: 'indusshield-proactive-ai-insurance',
    title: 'IndusShield Proactive AI Insurance',
    subtitle:
      'Embedded bancassurance protection concept featuring 6 MVP modules, Shield Score UX, and mobile wireframes.',
    category: 'FinTech Product Strategy & UX Concept',
    workSection: 'product-concepts',
    collaborationType: 'Independent Concept',
    domain: 'product-strategy',
    hasDedicatedCaseStudy: false,
    overview:
      'Created as the capstone product pitch for Product Matters 6.0 (E-Cell IIT Guwahati), IndusShield reimagines retail insurance from an annual renewal chore into a proactive protection companion.',
    problem:
      'Retail policyholders experience fragmented policy tracking, confusing claim paperwork, and zero visibility into coverage gaps until an emergency occurs.',
    myContribution:
      'Solo Product Strategist — defined user personas, architected 6 MVP modules (Unified Dashboard, Smart Claims, Renewal Center, Emergency Hub, Shield Score, Context Nudges), and designed 4 high-fidelity mobile wireframes.',
    collaborators: 'Solo Product Concept (Akshit Sukhija · Product Matters 6.0)',
    methodology:
      'User persona research, coverage-gap scoring logic (Shield Score), bancassurance API middleware mapping, and mobile UX wireframing.',
    technologies: [
      'Product Strategy',
      'Mobile UI Wireframing',
      'Bancassurance UX',
      'MVP Scoping',
    ],
    outcomes:
      'Completed competition capstone pitch deck and 4 mobile UI wireframes.',
    limitations:
      'Unbuilt competition product concept deck; not a live commercial insurance product.',
    links: {
      drivePdfPlaceholder: 'IndusShield Capstone Deck PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'trustfix-c2c-marketplace',
    title: 'TrustFix C2C Service Marketplace',
    subtitle:
      'Dual-sided local service marketplace concept with upfront escrow payment holds and milestone verification.',
    category: 'Marketplace Product Strategy & Service Blueprint',
    workSection: 'product-concepts',
    collaborationType: 'Independent Concept',
    domain: 'product-strategy',
    hasDedicatedCaseStudy: false,
    overview:
      'A product strategy case study designing a consumer-to-consumer local services marketplace that eliminates payment fraud and quality disputes through milestone-based escrow holds.',
    problem:
      'Both customers and independent local technicians face a trust deficit: customers fear poor work after paying upfront, while technicians fear non-payment after completing jobs.',
    myContribution:
      'Solo Product Designer — mapped the dual-sided service blueprint, escrow release triggers, provider verification flow, and dispute resolution UX.',
    collaborators: 'Solo Product Concept (Akshit Sukhija)',
    methodology:
      'Dual-sided marketplace friction mapping, escrow state-machine design, and service blueprinting.',
    technologies: [
      'Marketplace UX',
      'Service Blueprinting',
      'Escrow Payment Flow Design',
    ],
    outcomes:
      'Completed end-to-end product case study deck and service blueprint.',
    limitations:
      'Unbuilt product case study concept deck.',
    links: {
      drivePdfPlaceholder: 'TrustFix Product Case Study PDF (Google Drive link placeholder)',
    },
  },
  {
    slug: 'nykaa-post-purchase-retention',
    title: 'Nykaa Post-Purchase Retention ("Routine Start Coach")',
    subtitle:
      '12-slide product teardown designing a 48-hour post-delivery habit loop to reduce single-order skincare drop-off.',
    category: 'Product Teardown & Retention UX Concept',
    workSection: 'product-concepts',
    collaborationType: 'Independent Concept',
    domain: 'product-strategy',
    hasDedicatedCaseStudy: false,
    overview:
      'An independent, uncommissioned 12-slide product teardown analysing why first-time skincare buyers fail to reorder and designing a lightweight post-delivery usage guide triggered 48 hours after order delivery.',
    problem:
      'Many beauty and skincare customers buy active-ingredient products during sales but stop using them due to routine confusion, leading to low second-order conversion.',
    myContribution:
      'Solo Product Analyst — analysed Play Store customer reviews, mapped post-purchase friction points, and designed the 48-hour Order Management System (OMS) trigger workflow.',
    collaborators: 'Independent Uncommissioned Concept (Akshit Sukhija)',
    methodology:
      'Qualitative review mining, post-purchase journey mapping, and retention trigger wireframing.',
    technologies: [
      'Product Teardown',
      'User Review Mining',
      'Retention Loop Design',
      'UX Wireframing',
    ],
    outcomes:
      '12-slide product teardown deck (uncommissioned concept; no commercial deployment or live business metrics claimed).',
    limitations:
      'Independent concept; not commissioned by or affiliated with Nykaa.',
    links: {
      drivePdfPlaceholder: 'Nykaa Retention Teardown Deck PDF (Google Drive link placeholder)',
    },
  },
];
