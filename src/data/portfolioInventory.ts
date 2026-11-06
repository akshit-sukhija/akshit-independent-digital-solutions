export type InventoryTierCategory = 'flagship' | 'library' | 'restricted';

export type EvidenceTierBadge =
  | 'Tier 1 · Codebase / Live App'
  | 'Tier 2 · Evaluated Data & Report'
  | 'Tier 3 · Product Concept / Framework'
  | 'Restricted / Redacted Deliverable';

export type LibraryDomain =
  | 'ai-automation'
  | 'data-intelligence'
  | 'custom-systems'
  | 'product-strategy'
  | 'software-qa';

export interface PortfolioInventoryItem {
  inventoryNumber: number;
  slug: string;
  hasDedicatedCaseStudy: boolean;
  tierCategory: InventoryTierCategory;
  evidenceTier: EvidenceTierBadge;
  domain: LibraryDomain;
  title: string;
  subtitle: string;
  category: string;
  projectType: string;
  documentedRole: string;
  collaborators: string;
  technologies: string[];
  problem: string;
  methodology: string;
  results: string;
  limitations: string;
  status: string;
  confidentialityNotice?: string;
  mandatoryLabel?: string;
  links: {
    githubUrl?: string;
    liveDemoUrl?: string;
    colabUrl?: string;
    evidenceMatrixPdfUrl?: string;
  };
  documentedArtifacts: string[];
}

export interface ReconciliationEntry {
  inventoryNumber: number;
  projectName: string;
  previousWebsiteState: 'Existing (5-Project List)' | 'Incomplete / Partial' | 'Missing from Website' | 'Restricted / Sensitive';
  actionTaken: string;
  assignedSection: 'Flagship Case Study' | 'Secondary Project Library' | 'Private & Restricted Work';
  evidenceSummary: string;
}

export interface GroundingVerificationItem {
  claimOrQuery: string;
  verificationStatus: 'VERIFIED' | 'NOT FOUND (DISCLOSED)' | 'RESTRICTED / REDACTED' | 'EXCLUDED';
  exactFinding: string;
}

export const CONSOLIDATED_MATRIX_PDF_URL =
  '/assets/aistudio/Portfolio_Matrix__1__9cbe3e88.pdf';

export const COMPLETE_PORTFOLIO_INVENTORY: PortfolioInventoryItem[] = [
  {
    inventoryNumber: 1,
    slug: 'contract-risk-governance',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'ai-automation',
    title: 'Contract Risk Governance Engine (Nexus Governance OS)',
    subtitle:
      'Zero-hallucination, audit-grade contract intelligence system separating deterministic CPU compliance logic from NPU-accelerated AI explanations.',
    category: 'Applied AI & Risk Governance',
    projectType: 'Competition Entry (AMD Slingshot Hackathon 2026)',
    documentedRole: 'System Architecture Lead',
    collaborators:
      'Team Nexus Architects (Tanishq Khanna — Full-Stack Engineering; Tanish Sabharwal — AI Optimization)',
    technologies: [
      'Python 3.10+',
      'FastAPI',
      'Streamlit',
      'FAISS',
      'SHA-256',
      'ONNX Runtime',
      'DirectML',
    ],
    problem:
      'Traditional LLM contract review tools use unconstrained reasoning, creating hallucinations, non-reproducible outputs, and legal compliance risks.',
    methodology:
      'Fixed policy rules evaluate contract text on CPU first; immutable SHA-256 fingerprints and JSONL decision traces are recorded; AI layer is constrained to explaining rule outcomes offloaded to AMD Ryzen AI NPU via DirectML.',
    results:
      'Offloading narrative generation to AMD Ryzen AI NPU via DirectML achieved ~420ms latency per explanation (~4x speedup vs CPU) on a 120-page test contract under Windows 11, reducing CPU utilization from 85–95% down to 25–35%. Completed codebase (57 commits, MIT License).',
    limitations:
      'NPU acceleration benchmarks (~420ms / ~4x speedup) are specific to AMD Ryzen AI hardware with DirectML under Windows 11 as documented in the repository README.',
    status: 'Completed codebase (57 commits, MIT License)',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/contract-risk-governance',
    },
    documentedArtifacts: ['GitHub Repository (57 commits, MIT License)', 'FastAPI (/evaluate, /health) & Streamlit UI'],
  },
  {
    inventoryNumber: 2,
    slug: 'notice-decoder',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'ai-automation',
    title: 'Notice Decoder (College Notice Schedule Planner)',
    subtitle:
      'Intelligent web app converting unstructured college notices into organized events, detecting schedule clashes, and exporting .ics calendar files.',
    category: 'AI Automation & Full-Stack Web Application',
    projectType: 'Competition Entry & Prototype (SETU 2026 Problem Statement PS-02)',
    documentedRole: 'Team Leader & System Architect',
    collaborators: 'Team Signal Forge (Tanya Garg — Co-Creator & Repository Host)',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Express',
      'Tailwind CSS',
      'Featherless API (Qwen2.5-7B-Instruct)',
      'RFC 5545 .ics',
      'Render',
    ],
    problem:
      'Academic notices distributed via WhatsApp forwards, text, and PDFs contain dates, times, and venues buried in unstructured text, causing missed deadlines and schedule overlaps.',
    methodology:
      'Local deterministic token parsing extracts dates and time intervals without LLM schedule hallucination; time-interval overlap algorithms flag collisions; semantic diff engine (Notice Change Radar) tracks circular updates.',
    results:
      'Flagged a 30-minute interval overlap between Internal Test 2 (10:00–11:30 AM) and Guest Lecture (11:00 AM–12:30 PM) on 13 Nov 2026, while correctly identifying a 12:00 PM lab submission deadline.',
    limitations:
      'Built for educational/demo use; free Render hosting tier exhibits cold-start delays on initial load. Repository hosted under co-creator Tanya-garg10.',
    status: 'Fully completed & live deployed web application',
    links: {
      liveDemoUrl: 'https://notice-decoder-ai-powered-college-notice-schedule-planner.onrender.com/',
      githubUrl:
        'https://github.com/Tanya-garg10/Notice-Decoder-AI-Powered-College-Notice-Schedule-Planner',
    },
    documentedArtifacts: [
      'SETU2026_Round2_PS02_SignalForge_NoticeDecoder.pdf',
      'SETU2026_Round1_PS02_NoticeDecoder_SignalForge.pptx',
    ],
  },
  {
    inventoryNumber: 3,
    slug: 'lureline',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'custom-systems',
    title: 'Lureline (Cyber Deception Investigation Workbench)',
    subtitle:
      'Evidence-first cyber deception investigation workbench ingesting synthetic event streams across a 6-node network to detect decoy interactions.',
    category: 'Cyber Analytics & Automation Workbench',
    projectType: 'Competition Entry (ORCATHON 2026 Cybersecurity & Blockchain)',
    documentedRole: '100% Solo Candidate (Solo Developer)',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: ['TypeScript', 'Vite', 'Express', 'Node.js', 'CSS', 'HTML', 'Vercel', 'GitHub Actions'],
    problem:
      'Investigating cyber attacks across decoy/honeypot assets often suffers from opaque inferences or fabricated network hops.',
    methodology:
      'Ingests deterministic event streams across a 6-node network (4 ordinary assets, 2 decoy assets); applies transparent rules to detect decoy hits; reconstructs sequential movement paths without inventing unobserved hops.',
    results:
      '100% pass on automated test suite (npm test); automated CI validation via GitHub Actions (.github/workflows/lureline-validation.yml); live Vercel deployment.',
    limitations:
      'All input datasets are synthetic demonstration fixtures created for competition evaluation.',
    status: 'Live deployed application & open-source repository',
    links: {
      liveDemoUrl: 'https://lureline-orcathon-2026.vercel.app/',
      githubUrl: 'https://github.com/akshit-sukhija/lureline-orcathon-2026',
    },
    documentedArtifacts: [
      'Live Vercel Deployment',
      '.github/workflows/lureline-validation.yml CI Pipeline',
    ],
  },
  {
    inventoryNumber: 4,
    slug: 'clarity-redemption-ai',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'custom-systems',
    title: 'Clarity Redemption AI (Mutual Fund Consequence Engine)',
    subtitle:
      'Context-aware mutual fund redemption workspace displaying exact FIFO unit lot consumption, exit load, STT deductions, and remaining holding value prior to confirmation.',
    category: 'Applied AI & FinTech Math Engine',
    projectType: 'Competition Entry & Prototype (Produscope 2026 - E-Cell IIT Guwahati)',
    documentedRole: 'Co-Developer & Product Analyst',
    collaborators: 'Team Leader: Devanshi Pandey; Team Member: Akshit Sukhija',
    technologies: [
      'TypeScript',
      'React',
      'Vite',
      'Deterministic FIFO Math Engine',
      'Ask Clarity LLM Explainer',
    ],
    problem:
      'Indian retail mutual fund investors face extreme information asymmetry during redemption, as deductions, lot rules, and exit loads are scattered across fund SID documents.',
    methodology:
      'Deterministic calculation engine executes all financial math on single-source-of-truth rules; AI serves strictly as an explanation layer ("Ask Clarity") bounded to scenario figures and blocks buy/sell/hold advice.',
    results:
      'Passed 15/15 automated unit tests (npm test) verifying FIFO boundaries, full liquidation, 365-day holding period logic, and mathematical invariants; 0 linter errors (tsc --noEmit).',
    limitations:
      'Product prototype using illustrative NAVs and sample fund SID data; not connected to live AMC order routing APIs.',
    status: 'Live prototype & open-source codebase (TypeScript 98.7%)',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/Clarity-Redemption-AI',
    },
    documentedArtifacts: [
      'GitHub Repository (15/15 unit tests passing)',
      'Produscope 2026 E-Cell IIT Guwahati Report PDF',
      'Studio Prototype (clarity-redemption.ai.studio)',
    ],
  },
  {
    inventoryNumber: 5,
    slug: 'tweet-sentiment-analysis',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'ai-automation',
    title: 'Tweet Sentiment Analysis',
    subtitle:
      'Natural language processing pipeline classifying tweet sentiment using TF-IDF vectorization, classical ML classifiers, and a Flask web endpoint.',
    category: 'Machine Learning & NLP',
    projectType: 'Independent / Educational Project',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'Python',
      'Scikit-learn',
      'TF-IDF Vectorizer',
      'Logistic Regression',
      'Naive Bayes',
      'SVM',
      'Random Forest',
      'BERT',
      'Flask',
      'Pickle (.pkl)',
    ],
    problem:
      'Text classification and sentiment evaluation on noisy micro-blogging social data.',
    methodology:
      'Vectorized Sentiment140 dataset using TF-IDF; trained and compared multiple classifiers; serialized model artifacts to .pkl files; built Flask web endpoint (app.py).',
    results:
      'Serialized sentiment model (sentiment_model.pkl) and vectorizer (vectorizer.pkl) integrated into a working Flask backend.',
    limitations:
      'Baseline NLP implementation built on the historical Sentiment140 dataset.',
    status: 'Completed public repository',
    links: {
      githubUrl: 'https://github.com/akshit-sukhija/tweet-sentiment-analysis',
    },
    documentedArtifacts: ['sentiment_model.pkl', 'vectorizer.pkl', 'app.py (Flask endpoint)'],
  },
  {
    inventoryNumber: 6,
    slug: 'decoding-customer-value',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'data-intelligence',
    title: 'Decoding Customer Value (D2C Customer Intelligence)',
    subtitle:
      'Direct-to-Consumer retail analytics across 3,900 records separating promotional dependency (43.0% Discount Survivors) from organic repeat loyalty (36.4% Premium Loyalists).',
    category: 'Data Analytics & Business Intelligence',
    projectType: 'Academic / Competition Project (IIT Guwahati Summer Analytics)',
    documentedRole: 'Lead Product Analyst',
    collaborators: 'Co-authored with Bhumika Singhal',
    technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'SQL', 'Power BI', 'Jupyter Notebook'],
    problem:
      'D2C retail brands confuse total purchase spend with organic brand loyalty, giving away excessive discounts to bargain hunters and degrading profit margins.',
    methodology:
      'Cleaned 3,900 transactional records; engineered Promo_Dependency_Score, Loyalty_Score_A, and Loyalty_Score_B; executed SQL CASE and window-function segmentation; designed a promotional sunsetting strategy.',
    results:
      'Identified that 43.0% of customers were "Discount Survivors" (1.00 promo dependency) vs 36.4% "Premium Loyalists" (0.00 promo dependency); proved spend tier alone fails to indicate organic brand loyalty.',
    limitations:
      'Findings describe the specific supplied dataset (N = 3,900) and are not universal retail industry benchmarks.',
    status: 'Completed 5-part deliverable suite & public repository',
    links: {
      githubUrl:
        'https://github.com/akshit-sukhija/IITG_Decoding_Customer_Value_Akshit_Bhumika',
    },
    documentedArtifacts: [
      'Deliverable-1_Cleaned_Dataset.csv',
      'Deliverable-1_Python_Notebook.ipynb',
      'Deliverable-2_SQL_Analysis_Report.pdf',
      'Deliverable-3_PowerBI_Dashboard.pbix',
      'Deliverable-4_Retention_Playbook.pdf',
      'Deliverable-5_Executive_Summary.pdf',
    ],
  },
  {
    inventoryNumber: 7,
    slug: 'sentinelx',
    hasDedicatedCaseStudy: true,
    tierCategory: 'flagship',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'custom-systems',
    title: 'SentinelX / DSARS (Digital Security Assessment & Reporting Platform)',
    subtitle:
      'Centralized web platform ingesting Nmap XML and OWASP ZAP XML/CSV logs, verifying SHA-256 fingerprints, and generating automated ReportLab PDF reports.',
    category: 'Data Engineering & Cybersecurity Systems',
    projectType: 'Academic Capstone Project (IITM Summer Training)',
    documentedRole: 'Co-Developer & System Architect',
    collaborators:
      'Co-developed with Adyot Ohri (IITM Summer Training; 100-Hour Cybersecurity Certificate from SSSAM Academy)',
    technologies: [
      'Python',
      'FastAPI',
      'React 19',
      'Vite',
      'SQLite',
      'SQLAlchemy',
      'Recharts',
      'ReportLab',
      'ThreadPoolExecutor',
      'Nmap & OWASP ZAP',
    ],
    problem:
      'Security analysts waste hours manually parsing, deduplicating, and formatting raw Nmap and OWASP ZAP scanner outputs into executive vulnerability reports.',
    methodology:
      'Multithreaded inspection orchestrator using Python ThreadPoolExecutor (max 11 workers) in api/security.py executing 8 parallel security routines; SHA-256 integrity verification; deduplication; 5-tier severity normalization (Critical to Info); ReportLab PDF generation.',
    results:
      'Automated security log normalization, deduplication, interactive React 19 + Recharts dashboard visualization, and one-click ReportLab PDF executive report generation documented in a 100+ page formal report.',
    limitations:
      'Academic capstone built for controlled evaluation environments; source code is documented inside the 100+ page formal report PDF (no public GitHub URL).',
    status: 'Completed academic project & 100+ page formal report',
    links: {},
    documentedArtifacts: ['FINAL COMPLETE SENTINEL PROJECT REPORT-merged.pdf (100+ Pages)'],
  },
  {
    inventoryNumber: 8,
    slug: 'uidai-demographic-intelligence',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'data-intelligence',
    title: 'UIDAI Demographic Update Intelligence',
    subtitle:
      'Spatial and temporal analysis of 500,000+ official UIDAI demographic update records across 956 districts and 19,607 pincodes.',
    category: 'Data Science & Public Policy Analytics',
    projectType: 'Competition Entry (UIDAI Data Hackathon 2026 · Team ID: UIDAI_7528)',
    documentedRole: 'Individual Lead Analyst',
    collaborators: 'Individual Lead Analyst (Akshit Sukhija)',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Google Colab'],
    problem:
      'Public identity systems need geographic and demographic visibility to spot mobility trends, youth participation drop-offs, and service demand hotspots.',
    methodology:
      'Analyzed 500,000+ aggregated records (March–December 2025) across 956 districts and 19,607 pincodes using a 3-layer indicator framework (geography, month, age group).',
    results:
      'Uncovered an 11% youth update participation gap (ages 5–17) and identified high adult mobility corridors in Uttar Pradesh (~2.19M updates), Bihar (~1.25M), and Maharashtra (~1.22M).',
    limitations:
      'Update volumes alone are indirect administrative signals and do not constitute direct causal proof of migration or service access quality.',
    status: 'Completed hackathon report & public Google Colab notebook',
    links: {
      colabUrl:
        'https://colab.research.google.com/drive/17bSIIzpAwQZnbobBpOfM6El0EARxvHka?usp=sharing',
    },
    documentedArtifacts: [
      'Google Colab Notebook (500,000+ records)',
      'UIDAI Hackathon 15-Page Analytical Report PDF',
    ],
  },
  {
    inventoryNumber: 9,
    slug: 'ott-viewer-retention',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'data-intelligence',
    title: 'OTT Viewer Retention Analysis (Winter Consulting Capstone)',
    subtitle:
      'Data-driven diagnosis of mid-season viewer disengagement across N = 33,171 streaming episodes (Netflix, Prime Video, Hulu, Crunchyroll).',
    category: 'Data Analytics & Media Retention',
    projectType: 'Academic Capstone Project (Winter Consulting, Dec 2025)',
    documentedRole: '100% Solo Candidate (Presented by Akshit Sukhija, IITM)',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'Python',
      'SQL',
      'Power BI',
      'Tableau',
      'Pearson Correlation',
      'Logistic Regression',
    ],
    problem:
      'Streaming viewers disengage most frequently during mid-season episodes (Episodes 4–8), reducing ad revenue and complicating series renewal decisions.',
    methodology:
      'Random stratified sampling of N = 33,171 episodes (2020–2024) across Netflix (12,742), Prime Video (7,120), Hulu (6,310), and Crunchyroll (6,999); evaluated completion rate, continuation rate, hook strength (1–10), narrative complexity (1–10), and pause frequency.',
    results:
      'Diagnosed mid-season drop-off spike (Episodes 4–8 at 16.7% drop-off vs 11.8% Ep 1–3); identified positive correlation between narrative complexity and drop-off risk (Pearson r ≈ +0.57, p < 0.01); proved strong cliffhanger hooks (8–10) mitigate churn to ~4.2% drop-off vs 19.7% for weak hooks.',
    limitations:
      'Findings reflect patterns within the supplied 33,171-episode dataset and are not universal streaming industry benchmarks.',
    status: 'Completed analytical report PDF',
    links: {},
    documentedArtifacts: ['01_OTT_Viewer_Retention_Report.pdf (N = 33,171 Dataset Study)'],
  },
  {
    inventoryNumber: 10,
    slug: 'dmi-finance-qa-audit',
    hasDedicatedCaseStudy: false,
    tierCategory: 'restricted',
    evidenceTier: 'Restricted / Redacted Deliverable',
    domain: 'software-qa',
    title: 'DMI Finance 27-Call QA Review (Total Value Audit — TVA)',
    subtitle:
      'Structured quality assurance evaluation of 27 multi-lingual collection calls across 22 Total Value Audit (TVA) parameters with fatal compliance override scoring.',
    category: 'Operations Analytics & Quality Audit',
    projectType: 'Quality Assurance Audit Project (October 2026)',
    documentedRole: '100% Solo Auditor',
    collaborators: '100% Solo Auditor (Akshit Sukhija)',
    technologies: [
      'Excel Workbook Analysis',
      '22 TVA Parameters',
      'Call Quality (CQ) Formula Scoring',
      'Compliance Override Rules',
    ],
    problem:
      'Auditing debt collection call quality, detecting CRM disposition errors, and flagging fatal compliance overrides across multi-lingual collection calls.',
    methodology:
      'Evaluated 27 call transcripts across 22 parameters (Greeting, TPC verification, RPC confirmation, EMI negotiation, CRM disposition, PTP confirmation); computed Call Quality (CQ) scores and fatal override triggers (P11 TPC breach, P16 CRM disposition error, P21 fee disclosure failure, P22 PTP defect).',
    results:
      'Audited 27 multi-lingual calls across Hindi, Hinglish, Kannada, Malayalam, Marathi, Tamil, and Telugu; identified fatal compliance overrides causing 0.0% CQ scores on non-compliant calls.',
    limitations:
      'Audit covers provided sample transcripts. Because the raw workbook contains sensitive borrower PII (names, ConnIDs, and internal audit text), raw files are strictly omitted and redacted from public display.',
    status: 'Completed audit workbook (Redacted Methodology Summary Only)',
    confidentialityNotice:
      'REDACTED / OMITTED RAW FILE: Contains borrower PII and internal ConnIDs. Raw audit transcripts are never published on this website.',
    mandatoryLabel: 'Redacted QA Methodology Summary Only (Zero Borrower PII Published)',
    links: {},
    documentedArtifacts: ['DMI_Finance_27_Call_QA_Review_Oct_2026.docx (Withheld — PII Redacted)'],
  },
  {
    inventoryNumber: 11,
    slug: 'sikshasarovar-paywall-qa',
    hasDedicatedCaseStudy: false,
    tierCategory: 'restricted',
    evidenceTier: 'Restricted / Redacted Deliverable',
    domain: 'software-qa',
    title: 'Subscription Paywall Functional QA Test Suite (Anonymized Platform Sample)',
    subtitle:
      '40+ executed functional test cases evaluating paywall stability, access permissions, coupon validation, and session concurrency.',
    category: 'Software Quality Assurance',
    projectType: 'Software QA Testing Deliverable',
    documentedRole: 'Group 3 Testing Contributor (Akshit Sukhija)',
    collaborators: 'Group 3 QA Testing Team',
    technologies: [
      'Software Quality Assurance',
      'Functional Testing',
      'Equivalence Class Partitioning (ECP)',
      'Boundary Value Analysis (BVA)',
      'Test Matrix Design (CSV)',
    ],
    problem:
      'Verifying functional correctness, payment state transitions, and security boundary enforcement for digital learning platform subscriptions.',
    methodology:
      'Designed and executed 40+ structured test cases using Equivalence Class Partitioning and Boundary Value Analysis covering authentication, payment processing, subscription unlocks, coupon validation, concurrency, and session expiration.',
    results:
      'Executed 40+ test cases logged in a structured CSV test execution matrix.',
    limitations:
      'Manual QA test execution matrix. Presented as an anonymized QA methodology sample to protect internal platform defect logs.',
    status: 'Executed 40+ test-case CSV matrix',
    confidentialityNotice:
      'ANONYMIZED QA SAMPLE: Presented purely as a Software QA methodology sample; internal bug entries are not exposed publicly.',
    mandatoryLabel: 'Anonymized QA Methodology Sample (40+ Executed Test Cases)',
    links: {},
    documentedArtifacts: [
      'SikshaSarovar_UnlockPro_Testing_Group3_Final.xlsx_-_AKSHIT_.csv (Anonymized Summary)',
    ],
  },
  {
    inventoryNumber: 12,
    slug: 'signal-delta-detector',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'ai-automation',
    title: 'SIGNAL (Delta Detector with Consequence Lens)',
    subtitle:
      'Locked V2.1 system prompt engine with two-layer state tracking that filters noisy multi-channel sprint updates into SIGNAL, WATCH, CLARIFY, or SUPPRESS.',
    category: 'Applied AI & Prompt Architecture',
    projectType: 'Competition Entry (PromptForge #1, Forge Realm)',
    documentedRole: '100% Solo Candidate (GGSIPU 3rd Year)',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'Locked V2.1 System Prompt Architecture',
      'Two-Layer State Tracking',
      'Gemini Execution',
      'ChatGPT Red-Teaming',
      'Lovable Web Prototype',
    ],
    problem:
      'Team leads are buried in multi-channel updates (Slack, email, rule changes, mentor feedback), making it hard to see which updates actually alter strategy, assumptions, risks, or requirements.',
    methodology:
      'Two-layer state tracking (Strategy, Assumptions, Risks, Requirements), material delta detection, source hierarchy enforcement, temporal validation, and strict evidence discipline.',
    results:
      'Evaluated against a frozen 40-case adversarial development set: 95.0% classification accuracy (38/40 cases), 100% precision, and 100% recall on critical compliance cases.',
    limitations:
      'Evaluation metrics (95.0% accuracy across 38/40 cases) reflect performance on the designed 40-case adversarial test set.',
    status: 'Completed system prompt & live web prototype',
    links: {
      liveDemoUrl: 'https://delta-focus.lovable.app',
    },
    documentedArtifacts: [
      'Live Web Prototype (delta-focus.lovable.app)',
      'Akshit_Sukhija_SIGNAL_Prompt_Forge.pdf',
      '40-Case Adversarial Evaluation Set',
    ],
  },
  {
    inventoryNumber: 13,
    slug: 'resolx-omvia-sentiment',
    hasDedicatedCaseStudy: false,
    tierCategory: 'restricted',
    evidenceTier: 'Restricted / Redacted Deliverable',
    domain: 'ai-automation',
    title: 'ResolX.ai Omvia Speech-Call Sentiment Analysis Architecture',
    subtitle:
      'Internship research and solutioning specification exploring how acoustic voice signals and transcript text combine for call-center sentiment analysis.',
    category: 'Applied AI & Solutioning Architecture',
    projectType: 'Internship Solutioning Deliverable (ResolX.ai / One Point One Technology Labs)',
    documentedRole: 'AI Solutioning Intern',
    collaborators: 'ResolX.ai / One Point One Technology Labs Team',
    technologies: [
      'Multimodal Sentiment Framework',
      'Acoustic Signal Integration Guidelines',
      'Human-in-the-Loop Review Workflow',
      'Escalation Boundary Design',
    ],
    problem:
      'Single-modal text sentiment misses acoustic voice cues (tone, rate of speech, dead air) in customer support calls.',
    methodology:
      'Audited UI workflow requirements, defined "Not Clear" escalation boundaries, drafted multimodal acoustic + text sentiment guidelines, and established human-in-the-loop quality review loops.',
    results:
      'Authored formal internship solutioning specification report.',
    limitations:
      'Research/specification deliverable only; explicitly NOT a trained or deployed production model. Internal UI mockups are withheld.',
    status: 'Completed research & solutioning specification',
    confidentialityNotice:
      'MANDATORY DISCLAIMER: Research/spec deliverable only; not a deployed production model. Internal product screenshots are withheld per internship confidentiality.',
    mandatoryLabel: 'Research / Specification Deliverable Only — Not a Deployed Model',
    links: {},
    documentedArtifacts: ['ResolX_Omvia_Speech_Call_Sentiment_Analysis_Report.pdf (Internal Spec)'],
  },
  {
    inventoryNumber: 14,
    slug: 'insightforge-ai',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'ai-automation',
    title: 'InsightForge / InsightForgeAI',
    subtitle:
      'AI-assisted research synthesis prototype extracting claims from unstructured text, surfacing contradictions, and producing structured decision briefs.',
    category: 'Applied AI & Research Synthesis',
    projectType: 'Personal Prototype & Web Application',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: ['AI-Assisted Web Development', 'Gemini', 'ChatGPT', 'Lovable', 'Vercel'],
    problem:
      'Manual research synthesis across messy documents is slow and prone to missed contradictions.',
    methodology:
      '5-stage research workflow: Extract claims → Compare & analyze → Verify with sources → Surface contradictions → Synthesize decision brief.',
    results:
      'Functioning web prototype built as an exploratory research synthesis workflow.',
    limitations:
      'Built as an exploratory research synthesis prototype.',
    status: 'Completed prototype',
    links: {},
    documentedArtifacts: ['Cited in Akshit_Sukhija_CareerWithDishani_Research_Intern.pdf'],
  },
  {
    inventoryNumber: 15,
    slug: 'aviation-voice-agent-prompt',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'ai-automation',
    title: 'Aviation Voice Agent System Prompt (Akasa Air Case Scenario)',
    subtitle:
      'Conversational state-machine system prompt architecture for resolving flight-cancellation support calls with minimal turns.',
    category: 'Applied AI & Prompt Engineering',
    projectType: 'Applied Prompt Asset',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'System Prompt Engineering',
      'Conversational State Machine',
      'Deterministic Fallback Rules',
      'Voice UX Verbiage',
    ],
    problem:
      'Voice AI agents need to resolve customer flight cancellation requests safely, empathetically, and naturally with minimal conversational turns.',
    methodology:
      'Enforced "Listen first" rule, minimal identity verification turns, deterministic refund/rebooking state transitions, and strict fallback guardrails.',
    results:
      'Completed production-style system prompt specification asset.',
    limitations:
      'Prompt specification asset; not affiliated with or deployed by Akasa Air.',
    status: 'Completed prompt specification asset',
    links: {},
    documentedArtifacts: ['Aviation_Voice_Agent_System_Prompt_Updated.docx'],
  },
  {
    inventoryNumber: 16,
    slug: 'ai-youtube-script-writing-os',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'ai-automation',
    title: 'AI YouTube Script Writing OS',
    subtitle:
      '7-stage multi-model scriptwriting operating system combining channel intelligence, fact-checking, Hinglish flow editing, and retention stress testing.',
    category: 'Technical Scriptwriting Operating System',
    projectType: 'Application Operating System Asset',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'NotebookLM',
      'Gemini',
      'Claude',
      'Perplexity Fact-Checking',
      'Groq Hinglish Flow Editing',
      '5-Point Retention Stress Test',
    ],
    problem:
      'Educational tech YouTube channels suffer from audience drop-off due to weak opening hooks, unverified claims, and unnatural bilingual pacing.',
    methodology:
      '7-stage pipeline: NotebookLM channel intelligence → Gemini topic research & hooks → Claude script generation → Perplexity fact-checking → Groq Hinglish editing → 5-point retention stress test.',
    results:
      'Authored complete 7-stage operating system blueprint PDF.',
    limitations:
      'Operational scriptwriting framework document.',
    status: 'Completed document asset',
    links: {},
    documentedArtifacts: ['AI_YouTube_Script_Writing_OS.pdf'],
  },
  {
    inventoryNumber: 17,
    slug: 'nykaa-post-purchase-retention',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'product-strategy',
    title: 'Nykaa Post-Purchase Retention ("Routine Start Coach")',
    subtitle:
      '12-slide product teardown analyzing post-purchase skincare drop-off and designing a 48-hour OMS delivery trigger loop.',
    category: 'Product Concept & UX Teardown',
    projectType: 'Independent Uncommissioned Concept',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'Product Teardown',
      'Play Store Review Mining',
      '48-Hour OMS Trigger Loop',
      '12-Slide UX Deck',
    ],
    problem:
      'Many skincare buyers stop after one purchase because no usage routine guidance fires post-delivery.',
    methodology:
      'Analyzed 17 Play Store reviews, mapped post-purchase friction points, and designed a 48-hour Order Management System (OMS) delivery trigger loop for routine formation.',
    results:
      '12-slide product concept deck; explicitly 0 measured commercial business impact.',
    limitations:
      'Independent concept; not commissioned by Nykaa; 0 live commercial business results claimed.',
    status: 'Independent Concept Deck',
    mandatoryLabel: 'Independent Concept; Not commissioned by Nykaa · 0 Measured Business Impact',
    links: {},
    documentedArtifacts: ['Akshit_Nykaa_Retention_Analysis.pdf (12-Slide Teardown Deck)'],
  },
  {
    inventoryNumber: 18,
    slug: 'indusshield-proactive-ai-insurance',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'product-strategy',
    title: 'IndusShield Proactive AI Insurance Platform',
    subtitle:
      'Product Matters 6.0 capstone deck designing an embedded bancassurance protection platform with 6 MVP modules and 4 mobile UI wireframes.',
    category: 'FinTech & Product Concept',
    projectType: 'Competition Pitch Deck (Product Matters 6.0 Capstone · E-Cell IIT Guwahati)',
    documentedRole: 'Individual Presenter (Akshit Sukhija)',
    collaborators: 'Individual Presenter (Akshit Sukhija)',
    technologies: [
      'Product Vision Deck',
      '4 Mobile UI Wireframes',
      'Shield Score (85/100) UX',
      'Bancassurance API Middleware Concept',
    ],
    problem:
      'Retail customers experience fragmentation across their insurance lifecycle, treating insurance as an annual chore rather than an ongoing financial protection strategy.',
    methodology:
      'Defined primary persona (Aarav Sharma, 29, Software Engineer) and designed 6 core MVP modules: Unified Dashboard, Smart Claims, Renewal Center, Emergency Hub, Shield Score, and Context Nudges.',
    results:
      'Completed competition capstone pitch deck and 4 mobile UI wireframes.',
    limitations:
      'Unbuilt competition pitch deck created for Product Matters 6.0.',
    status: 'Unbuilt Competition Pitch Deck',
    mandatoryLabel: 'Unbuilt Competition Pitch Deck (Product Matters 6.0 Capstone)',
    links: {},
    documentedArtifacts: ['IndusShield_ProductMatters6.0_AkshitSukhija.pdf'],
  },
  {
    inventoryNumber: 19,
    slug: 'trustfix-c2c-marketplace',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'product-strategy',
    title: 'TrustFix C2C Marketplace',
    subtitle:
      'Dual-sided consumer-to-consumer service marketplace concept introducing upfront escrow payment holds and service quality blueprints.',
    category: 'Marketplace UX & Product Concept',
    projectType: 'Product Matters Case Study Deck',
    documentedRole: '100% Solo Candidate',
    collaborators: '100% Solo Candidate (Akshit Sukhija)',
    technologies: [
      'Marketplace UX Wireframes',
      'Service Blueprinting',
      'Escrow Payment Hold Logic',
      'Provider Verification UX',
    ],
    problem:
      'Trust deficit, payment fraud, and service quality uncertainty in consumer-to-consumer local services.',
    methodology:
      'Designed dual-sided marketplace UX featuring upfront escrow payment holds, verified provider profiles, milestone booking tracking, and dispute resolution flows.',
    results:
      'Completed product case study deck and service blueprint.',
    limitations:
      'Unbuilt product case study deck.',
    status: 'Unbuilt Case Study Deck',
    mandatoryLabel: 'Unbuilt Product Case Study Deck',
    links: {},
    documentedArtifacts: ['TrustFix_Product_Matters_Case_Study_Akshit_Sukhija.pdf'],
  },
  {
    inventoryNumber: 20,
    slug: 'reframe-smart-glasses',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'product-strategy',
    title: 'RE:FRAME Smart Glasses',
    subtitle:
      'AR smart glasses hardware and focus-engine UI concept designed around reducing digital attention fragmentation.',
    category: 'Hardware & AR Product Concept',
    projectType: 'Unbuilt Hardware Concept Pitch Deck',
    documentedRole: 'Team Member (Team ReviveX)',
    collaborators: 'Team ReviveX',
    technologies: [
      'Product Concept Deck',
      'AR UI Focus Engine Mockups',
      'Hardware Pricing Strategy (₹39,999)',
    ],
    problem:
      'Attention fragmentation and constant smartphone context-switching disrupt deep focus.',
    methodology:
      'Conceptualized AR smart glasses with a minimal focus management UI, multi-modal sensory cues, and Indian market positioning (₹39,999 tier).',
    results:
      'Completed hardware & UX concept pitch deck.',
    limitations:
      'Unbuilt hardware concept pitch deck.',
    status: 'Unbuilt Concept Deck',
    mandatoryLabel: 'Unbuilt Hardware Concept (Team ReviveX)',
    links: {},
    documentedArtifacts: ['REFRAME_Smart_Glasses_Product_Concept.pdf'],
  },
  {
    inventoryNumber: 21,
    slug: 'clensta-brand-growth-memos',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'product-strategy',
    title: 'Clensta Brand Growth & Content Strategy Memos',
    subtitle:
      'D2C growth operator pitch decks analyzing IIT Delhi R&D positioning, consumer psychology hooks, and a 90-day content roadmap.',
    category: 'D2C Growth & Content Strategy',
    projectType: 'Internship Application Pitch Decks (2026)',
    documentedRole: '100% Solo Applicant (Akshit Sukhija)',
    collaborators: '100% Solo Applicant (Akshit Sukhija)',
    technologies: [
      'D2C Growth Framework',
      '30-60-90 Day Playbook',
      'Consumer Psychology Mapping',
      'Creator Brief Hooks',
    ],
    problem:
      'Translating technical R&D differentiation (IIT Delhi origin, waterless technology) into clear consumer content hooks across haircare and skincare.',
    methodology:
      'Content gap diagnosis; consumer psychology mapping (Control factor for haircare, Confidence radiance for skincare, Smart-care for waterless); 30-60-90 day audit and execution roadmap.',
    results:
      'Authored 2 structured presentation decks with creator brief hooks.',
    limitations:
      'Uncommissioned internship application pitch decks; not proof of owning or managing brand accounts.',
    status: 'Internship Application Pitch Decks',
    mandatoryLabel: 'Internship Pitch; Not proof of owning accounts',
    links: {},
    documentedArtifacts: [
      'Clensta Brand Growth memo (1) (1).pptx',
      'Clensta_Akshit_Sukhija (1).pptx',
    ],
  },
  {
    inventoryNumber: 22,
    slug: 'convolve-genai-document-ai',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 1 · Codebase / Live App',
    domain: 'ai-automation',
    title: 'Convolve 4.0 GenAI Document AI',
    subtitle:
      'Offline multilingual document and invoice extraction pipeline using Python, EasyOCR, field mapping, and visual detection.',
    category: 'Document AI & Information Extraction',
    projectType: 'Hackathon Project (Convolve 4.0 GenAI Track)',
    documentedRole: 'Hackathon Participant',
    collaborators: 'Convolve 4.0 Hackathon Entry',
    technologies: ['Python', 'EasyOCR', 'Field Mapper', 'Visual Detector', 'Structured JSON Output'],
    problem:
      'Offline extraction of structured fields from multilingual documents and invoices without relying on external cloud APIs.',
    methodology:
      'Offline OCR processing, field mapping, visual bounding-box detection, and structured JSON serialization (executable.py, requirements.txt).',
    results:
      'Completed executable Python document extraction pipeline for hackathon evaluation.',
    limitations:
      'Hackathon competition pipeline documented in portfolio records.',
    status: 'Completed hackathon project',
    links: {},
    documentedArtifacts: ['executable.py & requirements.txt (Cited in Personal Brand OS.docx)'],
  },
  {
    inventoryNumber: 23,
    slug: 'rankistan-ipu-cutoff-parser',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'custom-systems',
    title: 'Rankistan (GGSIPU Admission Cutoff Parser & Web App)',
    subtitle:
      'Utility parser and web interface converting unstructured GGSIPU college admission cutoff PDFs into searchable decision tables.',
    category: 'Data Processing & Web Utility',
    projectType: 'Personal / Educational Utility Project',
    documentedRole: '100% Solo Developer',
    collaborators: '100% Solo Developer (Akshit Sukhija)',
    technologies: ['Python', 'PDF Table Parsing', 'Information Retrieval', 'Web UI'],
    problem:
      'Students struggle to navigate dense, multi-page Guru Gobind Singh Indraprastha University (GGSIPU) admission cutoff PDFs.',
    methodology:
      'Parsed unstructured GGSIPU cutoff tables into structured records with a searchable web interface for rank-based college lookup.',
    results:
      'Completed educational web parser utility.',
    limitations:
      'Educational utility tool documented in portfolio context briefs.',
    status: 'Completed utility application',
    links: {},
    documentedArtifacts: [
      'Cited in Akshit Sukhija Personal Brand OS.docx & Career_Direction_OS_Personal_Context_Brief.docx',
    ],
  },
  {
    inventoryNumber: 24,
    slug: 'digital-mental-health-streamlit',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'custom-systems',
    title: 'Digital Mental Health Streamlit App',
    subtitle:
      'Interactive Python and Streamlit web application built as an educational exploration of structured self-check workflows.',
    category: 'Streamlit Web Application',
    projectType: 'Educational Application Project',
    documentedRole: '100% Solo Developer',
    collaborators: '100% Solo Developer (Akshit Sukhija)',
    technologies: ['Python', 'Streamlit', 'Interactive Web UI'],
    problem:
      'Designing a clean, interactive Streamlit web interface for structured user inputs and summary feedback.',
    methodology:
      'Built an interactive Streamlit frontend processing structured questionnaire inputs into visual summaries.',
    results:
      'Completed educational Streamlit web application.',
    limitations:
      'Strictly an educational software project; does NOT imply clinical or medical validity.',
    status: 'Completed educational Streamlit app',
    mandatoryLabel: 'Educational Software Project Only — Does NOT Imply Clinical Validity',
    links: {},
    documentedArtifacts: [
      'Cited in Akshit Sukhija Personal Brand OS.docx & Career_Direction_OS_Personal_Context_Brief.docx',
    ],
  },
  {
    inventoryNumber: 25,
    slug: 'zomato-data-analysis',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'data-intelligence',
    title: 'Zomato Restaurant Data Analysis',
    subtitle:
      'Exploratory data analysis (EDA) and visualization of restaurant pricing, cuisine distribution, and review patterns in Python.',
    category: 'Applied Data Analytics',
    projectType: 'Educational Data Analytics Project',
    documentedRole: '100% Solo Analyst',
    collaborators: '100% Solo Analyst (Akshit Sukhija)',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    problem:
      'Analyzing restaurant performance, pricing tiers, delivery availability, and rating distributions from raw listing data.',
    methodology:
      'Data cleaning, missing-value treatment, and exploratory visual analysis in Python using Pandas, Matplotlib, and Seaborn.',
    results:
      'Completed visual EDA summary of pricing and review patterns.',
    limitations:
      'Educational exploratory data analysis project.',
    status: 'Completed analysis',
    links: {},
    documentedArtifacts: [
      'Cited in Akshit Sukhija Personal Brand OS.docx & Career_Direction_OS_Personal_Context_Brief.docx',
    ],
  },
  {
    inventoryNumber: 26,
    slug: 'real-time-dynamic-pricing',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 3 · Product Concept / Framework',
    domain: 'data-intelligence',
    title: 'Real-Time Dynamic Pricing Simulation',
    subtitle:
      'Analytical modeling and rule-based dynamic pricing simulation exploring demand-elastic price adjustments in Python.',
    category: 'Analytics & Business Decision Systems',
    projectType: 'Educational / Concept Project',
    documentedRole: '100% Solo Developer / Analyst',
    collaborators: '100% Solo Developer / Analyst (Akshit Sukhija)',
    technologies: ['Python', 'Analytical Modeling', 'Rule-Based Pricing Logic'],
    problem:
      'Structuring rule-based decision support for demand-sensitive price adjustments.',
    methodology:
      'Implemented deterministic pricing rules and analytical simulation scenarios in Python.',
    results:
      'Completed dynamic pricing simulation model.',
    limitations:
      'Educational concept simulation model.',
    status: 'Completed concept model',
    links: {},
    documentedArtifacts: [
      'Cited in Akshit Sukhija Personal Brand OS.docx & Career_Direction_OS_Personal_Context_Brief.docx',
    ],
  },
  {
    inventoryNumber: 27,
    slug: 'ayushman-events-operational-system',
    hasDedicatedCaseStudy: false,
    tierCategory: 'library',
    evidenceTier: 'Tier 2 · Evaluated Data & Report',
    domain: 'custom-systems',
    title: 'Ayushman Events Operational Information System',
    subtitle:
      'Process mapping and operational workflow management system structured for an event operations context.',
    category: 'Applied Business Operational System',
    projectType: 'Applied Business Context Project',
    documentedRole: 'System Developer / Analyst',
    collaborators: 'Akshit Sukhija (System Developer / Analyst)',
    technologies: ['Process Mapping', 'Workflow Organization', 'Operational System Design'],
    problem:
      'Organizing scattered event vendor, schedule, and operational tracking workflows into a structured information system.',
    methodology:
      'Mapped end-to-end event agency processes and structured an operational management workflow.',
    results:
      'Completed operational system workflow implementation.',
    limitations:
      'Applied operational context project documented in portfolio records.',
    status: 'Completed operational system',
    links: {},
    documentedArtifacts: ['Cited in Akshit Sukhija Personal Brand OS.docx'],
  },
  {
    inventoryNumber: 28,
    slug: 'career-strategy-operating-systems',
    hasDedicatedCaseStudy: false,
    tierCategory: 'restricted',
    evidenceTier: 'Restricted / Redacted Deliverable',
    domain: 'product-strategy',
    title: 'Personal Brand OS & Career Strategy Frameworks',
    subtitle:
      'Internal strategy documents mapping capability positioning, skill taxonomy, and independent studio workflow.',
    category: 'Internal Studio Strategy & Positioning',
    projectType: 'Internal Strategy Documents',
    documentedRole: '100% Solo Author',
    collaborators: '100% Solo Author (Akshit Sukhija)',
    technologies: [
      'Capability Taxonomy',
      'Portfolio Evidence Auditing',
      'Positioning Architecture',
    ],
    problem:
      'Structuring personal positioning, capability mapping, and factual verification rules across projects.',
    methodology:
      'Authored 4 internal operating documents defining core vs. supporting capabilities and source-grounding standards.',
    results:
      'Used as the internal strategic foundation for this website.',
    limitations:
      'Internal personal strategy documents; not a client software deliverable.',
    status: 'Internal Strategy Frameworks',
    confidentialityNotice:
      'INTERNAL STRATEGY DOCS: Personal planning and positioning documents; excluded from public client project counts.',
    mandatoryLabel: 'Internal Studio Strategy Documents (Not a Client Deliverable)',
    links: {},
    documentedArtifacts: [
      'Akshit Sukhija Personal Brand OS.docx',
      'Career_Direction_OS_Personal_Context_Brief.docx',
      'strategic_career_playbook_akshit_v2.docx',
      'AI_Freelance_and_Micro_Agency_Strategy_Summary.docx',
    ],
  },
  {
    inventoryNumber: 29,
    slug: 'portfolio-audit-evidence-matrix',
    hasDedicatedCaseStudy: false,
    tierCategory: 'restricted',
    evidenceTier: 'Restricted / Redacted Deliverable',
    domain: 'product-strategy',
    title: 'Consolidated Portfolio Audit & Evidence Matrix (49 Sources)',
    subtitle:
      'Master verification blueprint reconciling 49 notebook sources, Evidence Tiers 1–3, academic marksheets, and confidentiality rules.',
    category: 'Portfolio Audit & System Specification',
    projectType: 'Master Source Verification Blueprint',
    documentedRole: '100% Solo Author',
    collaborators: '100% Solo Author (Akshit Sukhija)',
    technologies: [
      'Source-Grounded Verification',
      'Evidence Tiers 1–3',
      'PII & Confidentiality Auditing',
    ],
    problem:
      'Auditing 49 fragmented portfolio files to eliminate unverified claims, resolve link discrepancies, and enforce confidentiality rules.',
    methodology:
      'Classified all 29 inventory items into Tier 1 (codebases), Tier 2 (evaluated reports), Tier 3 (concepts), and Restricted/Redacted items.',
    results:
      'Published as the verifiable source-of-truth PDF attached to this portfolio.',
    limitations:
      'Internal documentation and evidence audit specification.',
    status: 'Active Master Evidence Matrix PDF',
    confidentialityNotice:
      'SOURCE AUDIT BLUEPRINT: Available for inspection via the Consolidated Portfolio Evidence Matrix PDF.',
    mandatoryLabel: 'Master Evidence Audit & Source Verification Specification',
    links: {
      evidenceMatrixPdfUrl: CONSOLIDATED_MATRIX_PDF_URL,
    },
    documentedArtifacts: ['Portfolio_Matrix__1__9cbe3e88.pdf (Attached 21-Page Evidence Matrix)'],
  },
];

export const RECONCILIATION_AUDIT_SUMMARY: ReconciliationEntry[] = [
  {
    inventoryNumber: 1,
    projectName: 'Contract Risk Governance Engine (Nexus Governance OS)',
    previousWebsiteState: 'Existing (5-Project List)',
    actionTaken:
      'Updated with full Team Nexus Architects collaborator credits (Tanishq Khanna, Tanish Sabharwal), 57 commits (MIT License), FastAPI endpoints (/evaluate, /health), and 85–95% → 25–35% CPU reduction metrics.',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: 'Public GitHub Repo + AMD Ryzen AI NPU benchmark note',
  },
  {
    inventoryNumber: 2,
    projectName: 'Notice Decoder (College Notice Schedule Planner)',
    previousWebsiteState: 'Existing (5-Project List)',
    actionTaken:
      'Updated with SETU 2026 PS-02 competition context, Team Signal Forge credit (Tanya Garg), exact 13 Nov 2026 30-min overlap test result, and Round 1/2 document references.',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: 'Live Render Web App + Public GitHub Repo + SETU 2026 Docs',
  },
  {
    inventoryNumber: 3,
    projectName: 'Lureline (Cyber Deception Investigation Workbench)',
    previousWebsiteState: 'Existing (5-Project List)',
    actionTaken:
      'Updated with 6-node network architecture (4 ordinary, 2 decoy assets), 100% npm test pass rate, and GitHub Actions CI workflow (.github/workflows/lureline-validation.yml).',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: 'Live Vercel App + Public GitHub Repo + CI Pipeline',
  },
  {
    inventoryNumber: 4,
    projectName: 'Clarity Redemption AI (Mutual Fund Consequence Engine)',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added as a full Flagship Case Study (/work/clarity-redemption-ai) with bespoke visual architecture, Devanshi Pandey team credit, 15/15 FIFO unit test results, and public GitHub repository link.',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: 'Public GitHub Repo + 15/15 Unit Tests + Produscope 2026 Report',
  },
  {
    inventoryNumber: 5,
    projectName: 'Tweet Sentiment Analysis',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with public GitHub repository link, TF-IDF + Scikit-learn/BERT pipeline details, and Flask (app.py) .pkl model serialization.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Public GitHub Repo + sentiment_model.pkl & vectorizer.pkl',
  },
  {
    inventoryNumber: 6,
    projectName: 'Decoding Customer Value (D2C Customer Intelligence)',
    previousWebsiteState: 'Existing (5-Project List)',
    actionTaken:
      'Updated with exact segment findings (43.0% Discount Survivors vs 36.4% Premium Loyalists across N=3,900), engineered score names, and all 5 deliverable filenames.',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: 'Public GitHub Repo + CSV + .ipynb + .pbix + 3 PDF Reports',
  },
  {
    inventoryNumber: 7,
    projectName: 'SentinelX / DSARS (Security Reporting Platform)',
    previousWebsiteState: 'Incomplete / Partial',
    actionTaken:
      'Reconciled repository discrepancy: explicitly disclosed that codebase is documented inside the 100+ page report (FINAL COMPLETE SENTINEL PROJECT REPORT-merged.pdf) with 11-worker ThreadPoolExecutor details and SSSAM Academy certification.',
    assignedSection: 'Flagship Case Study',
    evidenceSummary: '100+ Page Formal Academic Report PDF (No public repo claimed)',
  },
  {
    inventoryNumber: 8,
    projectName: 'UIDAI Demographic Update Intelligence',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with verified Google Colab Notebook link, 500,000+ record analysis across 956 districts & 19,607 pincodes, and 11% youth participation gap finding.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Public Google Colab Notebook + 15-Page UIDAI Hackathon Report',
  },
  {
    inventoryNumber: 9,
    projectName: 'OTT Viewer Retention Analysis (Winter Consulting Capstone)',
    previousWebsiteState: 'Incomplete / Partial',
    actionTaken:
      'Promoted from a brief footnote to a full Secondary Project Library entry with N=33,171 episode sample across Netflix/Prime/Hulu/Crunchyroll, 16.7% Ep 4–8 drop-off spike, and Pearson r = +0.57 correlation.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: '01_OTT_Viewer_Retention_Report.pdf (N=33,171 Dataset)',
  },
  {
    inventoryNumber: 10,
    projectName: 'DMI Finance 27-Call QA Review (Total Value Audit)',
    previousWebsiteState: 'Restricted / Sensitive',
    actionTaken:
      'Added to Private & Restricted Work section as a Redacted Methodology Summary Only (27 calls, 22 TVA parameters, 7 languages) — all borrower PII and raw transcripts strictly omitted.',
    assignedSection: 'Private & Restricted Work',
    evidenceSummary: 'Redacted QA Methodology Summary (Raw file withheld for PII privacy)',
  },
  {
    inventoryNumber: 11,
    projectName: 'SikshaSarovar UnlockPro Paywall Test Suite',
    previousWebsiteState: 'Restricted / Sensitive',
    actionTaken:
      'Added to Private & Restricted Work section as an Anonymized Software QA Methodology Sample (40+ ECP & Boundary Value Analysis test cases) without exposing internal bug logs.',
    assignedSection: 'Private & Restricted Work',
    evidenceSummary: '40+ Executed Test-Case CSV Matrix (Anonymized QA Sample)',
  },
  {
    inventoryNumber: 12,
    projectName: 'SIGNAL (Delta Detector with Consequence Lens)',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with live Lovable prototype link (delta-focus.lovable.app), Locked V2.1 Prompt Architecture, and 95.0% accuracy (38/40 cases) on the frozen adversarial test set.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Live Prototype (delta-focus.lovable.app) + PromptForge Report PDF',
  },
  {
    inventoryNumber: 13,
    projectName: 'ResolX.ai Omvia Speech-Call Sentiment Analysis',
    previousWebsiteState: 'Restricted / Sensitive',
    actionTaken:
      'Documented in Private & Restricted Work and About Experience with mandatory disclaimer: "Research/spec deliverable; explicitly NOT a deployed or trained production model."',
    assignedSection: 'Private & Restricted Work',
    evidenceSummary: 'Internship Solutioning Report (Internal UI screenshots withheld)',
  },
  {
    inventoryNumber: 14,
    projectName: 'InsightForge / InsightForgeAI',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting the 5-stage claim extraction and contradiction synthesis workflow.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Research Synthesis Prototype (Cited in CareerWithDishani PDF)',
  },
  {
    inventoryNumber: 15,
    projectName: 'Aviation Voice Agent System Prompt',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting conversational state-machine rules for flight-cancellation handling.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Aviation_Voice_Agent_System_Prompt_Updated.docx',
  },
  {
    inventoryNumber: 16,
    projectName: 'AI YouTube Script Writing OS',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting the 7-stage multi-model scriptwriting and 5-point retention stress-testing pipeline.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'AI_YouTube_Script_Writing_OS.pdf',
  },
  {
    inventoryNumber: 17,
    projectName: 'Nykaa Post-Purchase Retention ("Routine Start Coach")',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with mandatory warning label: "Independent Concept; Not commissioned by Nykaa · 0 Measured Business Impact."',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Akshit_Nykaa_Retention_Analysis.pdf (12-Slide Concept Deck)',
  },
  {
    inventoryNumber: 18,
    projectName: 'IndusShield Proactive AI Insurance Platform',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library clearly labeled as an Unbuilt Competition Pitch Deck (Product Matters 6.0 Capstone, 6 MVP modules, 4 wireframes).',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'IndusShield_ProductMatters6.0_AkshitSukhija.pdf',
  },
  {
    inventoryNumber: 19,
    projectName: 'TrustFix C2C Marketplace',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library clearly labeled as an Unbuilt Case Study Deck (escrow payment holds & service quality blueprints).',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'TrustFix_Product_Matters_Case_Study_Akshit_Sukhija.pdf',
  },
  {
    inventoryNumber: 20,
    projectName: 'RE:FRAME Smart Glasses',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with Team ReviveX attribution and clearly labeled as an Unbuilt Hardware Concept.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'REFRAME_Smart_Glasses_Product_Concept.pdf',
  },
  {
    inventoryNumber: 21,
    projectName: 'Clensta Brand Growth Memos',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with mandatory label: "Internship Pitch; Not proof of owning accounts."',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: '2 PPTX Decks (30-60-90 Day D2C Growth Framework)',
  },
  {
    inventoryNumber: 22,
    projectName: 'Convolve 4.0 GenAI Document AI',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting the offline EasyOCR + Field Mapper multilingual extraction pipeline.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Hackathon Pipeline (executable.py, requirements.txt)',
  },
  {
    inventoryNumber: 23,
    projectName: 'Rankistan (IPU Cutoff Parser & Web App)',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting the GGSIPU admission cutoff PDF parser utility.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Educational Utility App (Cited in Personal Brand OS)',
  },
  {
    inventoryNumber: 24,
    projectName: 'Digital Mental Health Streamlit App',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library with explicit limitation: "Educational project; does NOT imply clinical validity."',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Educational Python/Streamlit App',
  },
  {
    inventoryNumber: 25,
    projectName: 'Zomato Data Analysis',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting exploratory data analysis in Python (Pandas, Matplotlib, Seaborn).',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Educational EDA Study',
  },
  {
    inventoryNumber: 26,
    projectName: 'Real-Time Dynamic Pricing Project',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting rule-based dynamic pricing simulation in Python.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Educational Concept Model',
  },
  {
    inventoryNumber: 27,
    projectName: 'Ayushman Events Operational System',
    previousWebsiteState: 'Missing from Website',
    actionTaken:
      'Added to Secondary Project Library documenting event agency process mapping and workflow organization.',
    assignedSection: 'Secondary Project Library',
    evidenceSummary: 'Applied Operational Context System',
  },
  {
    inventoryNumber: 28,
    projectName: 'Career Strategy & Personal Positioning Frameworks',
    previousWebsiteState: 'Restricted / Sensitive',
    actionTaken:
      'Catalogued under Private & Internal Governance Work so internal planning docs are never misrepresented as client deliverables.',
    assignedSection: 'Private & Restricted Work',
    evidenceSummary: '4 Internal Strategy Word Documents',
  },
  {
    inventoryNumber: 29,
    projectName: 'PORTFOLIO AUDIT (Master Blueprint & Evidence Matrix)',
    previousWebsiteState: 'Restricted / Sensitive',
    actionTaken:
      'Catalogued under Governance & Source Audit with direct link to the attached 21-page Consolidated Portfolio Evidence Matrix PDF.',
    assignedSection: 'Private & Restricted Work',
    evidenceSummary: 'Portfolio_Matrix__1__9cbe3e88.pdf (Attached Local Asset)',
  },
];

export const GROUNDING_VERIFICATION_REGISTER: GroundingVerificationItem[] = [
  {
    claimOrQuery: 'SentinelX Public GitHub Repository URL',
    verificationStatus: 'NOT FOUND (DISCLOSED)',
    exactFinding:
      'Codebase is fully documented inside the 100+ page formal report PDF (FINAL COMPLETE SENTINEL PROJECT REPORT-merged.pdf), but no public github.com URL exists. Never fabricated.',
  },
  {
    claimOrQuery: 'Notice Decoder Public Live Demo & Hosting Tier',
    verificationStatus: 'VERIFIED',
    exactFinding:
      'Live on Render (notice-decoder-ai-powered-college-notice-schedule-planner.onrender.com); free tier exhibits initial cold-start delay. Repository hosted under co-creator Tanya-garg10.',
  },
  {
    claimOrQuery: 'AMD Ryzen AI Hardware Speedup Scope (Contract Risk Governance)',
    verificationStatus: 'NOT FOUND (DISCLOSED)',
    exactFinding:
      '~420ms latency / ~4x speedup (CPU 85–95% down to 25–35%) is specific to a 120-page contract tested on AMD Ryzen AI NPU under Windows 11 DirectML, not a universal hardware guarantee.',
  },
  {
    claimOrQuery: 'SIGNAL 95.0% Classification Accuracy Scope',
    verificationStatus: 'VERIFIED',
    exactFinding:
      'Reflects 38/40 correct classifications (100% precision/recall on critical compliance cases) evaluated against a frozen 40-case adversarial development set.',
  },
  {
    claimOrQuery: 'ResolX.ai Omvia Production Model Deployment',
    verificationStatus: 'RESTRICTED / REDACTED',
    exactFinding:
      'Explicitly disclosed as an internship research and solutioning specification report—NOT a deployed or trained production model.',
  },
  {
    claimOrQuery: 'DMI Finance 27-Call QA Review Raw Transcripts',
    verificationStatus: 'RESTRICTED / REDACTED',
    exactFinding:
      'Contains borrower PII (names, ConnIDs). Raw workbook and transcript text are strictly omitted; only the 22-parameter TVA methodology summary is shown.',
  },
  {
    claimOrQuery: 'Nykaa Post-Purchase Commercial Impact & Duplicate Drive Link',
    verificationStatus: 'NOT FOUND (DISCLOSED)',
    exactFinding:
      'Labeled as an Independent Uncommissioned Concept with 0 measured business impact. Duplicate Drive URL (1zqx6leQ_AfNaTrs6qAp-V9ntYI5oSNHY) from an older PDF is excluded to prevent broken/mismatched links.',
  },
  {
    claimOrQuery: 'MatchBest Group Employment Status',
    verificationStatus: 'EXCLUDED',
    exactFinding:
      'Completely excluded per factual portfolio rules; only verified internships at ResolX.ai and CareerWithDishani are presented.',
  },
  {
    claimOrQuery: 'Official GGSIPU Academic Marksheet Record',
    verificationStatus: 'VERIFIED',
    exactFinding:
      'BCA @ IITM Janakpuri (Batch 2024–2027, affiliated with GGSIPU): SGPAs 9.50, 8.81, 9.10, 8.96; Official CGPA 9.10 / 10; Overall Aggregate Percentage 85.026%.',
  },
];
