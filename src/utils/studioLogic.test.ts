import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterAndSortProjects,
  getProjectBySlug,
  matchProblemToService,
  estimateProjectScope,
  recommendSolutionFromFinder,
  validateEnquiryForm,
  formatEnquiryBrief,
  AVAILABLE_INFO_OPTIONS,
  DESIRED_OUTCOME_OPTIONS,
  SOLUTION_FINDER_PROBLEMS,
  SOLUTION_FINDER_BUSINESS_TYPES,
  SOLUTION_FINDER_HELP_TYPES,
  type EnquiryFormInput,
} from './studioLogic';
import {
  PROFILE_CONFIG,
  VERIFIED_EXPERIENCE,
  VERIFIED_ACADEMIC_RECORD,
  ENGAGEMENT_STEPS,
  INSIGHT_NOTES,
  TECHNOLOGY_EXPLORER_ITEMS,
  STUDIO_FAQS,
} from '../data/studioData';

test('strict project hierarchy preserves Notice Decoder, SentinelX, Decoding Customer Value, Contract Risk Governance, and Lureline with full productThinking flow', () => {
  const all = filterAndSortProjects('all', 'all');
  assert.equal(all.length, 5);
  assert.equal(all[0].slug, 'notice-decoder');
  assert.equal(all[1].slug, 'sentinelx');
  assert.equal(all[2].slug, 'decoding-customer-value');
  assert.equal(all[3].slug, 'contract-risk-governance');
  assert.equal(all[4].slug, 'lureline');

  for (const project of all) {
    assert.ok(project.productThinking.researchContext.length > 20);
    assert.ok(project.productThinking.userNeeds.length > 20);
    assert.ok(project.productThinking.alternativesConsidered.length > 20);
    assert.ok(project.productThinking.productDecision.length > 20);
    assert.ok(project.productThinking.prototypeEvolution.length > 20);
  }
});

test('Portfolio Explorer filters by category, technology, and evidence type accurately', () => {
  const liveApps = filterAndSortProjects('all', 'all', 'all', 'live-demo');
  assert.deepEqual(
    liveApps.map((p) => p.slug),
    ['notice-decoder', 'lureline']
  );

  const pythonProjects = filterAndSortProjects('all', 'all', 'Python', 'all');
  assert.deepEqual(
    pythonProjects.map((p) => p.slug),
    ['sentinelx', 'decoding-customer-value', 'contract-risk-governance']
  );

  const reportOrStudy = filterAndSortProjects('all', 'all', 'all', 'report-or-study');
  assert.deepEqual(
    reportOrStudy.map((p) => p.slug),
    ['sentinelx', 'decoding-customer-value']
  );
});

test('factual accuracy guardrails on project, academic, internship, and central profile records', () => {
  const sentinelx = getProjectBySlug('sentinelx');
  assert.ok(sentinelx);
  assert.equal(sentinelx.liveDemoUrl, undefined);
  assert.equal(sentinelx.githubUrl, undefined);

  const dcv = getProjectBySlug('decoding-customer-value');
  assert.ok(dcv);
  assert.equal(dcv.liveDemoUrl, undefined);
  assert.ok(dcv.githubUrl?.includes('IITG_Decoding_Customer_Value_Akshit_Bhumika'));

  // Verify internships include ResolX.ai and CareerWithDishani and exclude MatchBest Group
  const orgNames = VERIFIED_EXPERIENCE.map((e) => e.organisation);
  assert.deepEqual(orgNames, ['ResolX.ai', 'CareerWithDishani']);
  assert.ok(!JSON.stringify(VERIFIED_EXPERIENCE).toLowerCase().includes('matchbest'));

  // Verify academic record, verified contact config, and 5-step signature methodology
  assert.equal(VERIFIED_ACADEMIC_RECORD.cgpa, '9.10 / 10');
  assert.equal(VERIFIED_ACADEMIC_RECORD.aggregatePercentage, '85.026%');
  assert.equal(PROFILE_CONFIG.name, 'AKSHIT SUKHIJA');
  assert.equal(PROFILE_CONFIG.roleSubtitle, 'Independent Digital & Product Solutions');
  assert.equal(
    PROFILE_CONFIG.shortBio,
    'I turn business problems and early ideas into useful digital solutions through research, data, AI and technology.'
  );
  assert.equal(PROFILE_CONFIG.contact.github.url, 'https://github.com/akshit-sukhija');
  assert.equal(PROFILE_CONFIG.contact.linkedin.url, 'https://www.linkedin.com/in/akshit-sukhija-/');
  assert.equal(PROFILE_CONFIG.contact.emailPrimary.address, 'akshithere075@gmail.com');
  assert.equal(PROFILE_CONFIG.contact.emailSecondary.address, 'akshitsukhija4@gmail.com');
  assert.equal(PROFILE_CONFIG.contact.phone.displayNumber, '+91 9873865213');
  assert.deepEqual(
    ENGAGEMENT_STEPS.map((s) => s.stageKey),
    ['RESEARCH', 'ANALYSIS', 'AI & LOGIC', 'SOFTWARE', 'DELIVERY']
  );

  // Verify Insights includes Marketing vs Branding vs Advertising research article
  assert.equal(INSIGHT_NOTES[0].id, 'marketing-vs-branding-vs-advertising');
  assert.ok(TECHNOLOGY_EXPLORER_ITEMS.length >= 6);
  assert.equal(STUDIO_FAQS.length, 5);
  assert.deepEqual(
    STUDIO_FAQS.map((f) => f.category),
    ['Scope', 'Project Stages', 'Collaboration Models', 'Delivery Timelines', 'Handover']
  );
  for (const faq of STUDIO_FAQS) {
    assert.ok(faq.id.length > 3);
    assert.ok(faq.question.length > 10);
    assert.ok(faq.answer.length > 40);
  }
});

test('three-question SolutionFinder rule-based matching recommends appropriate service and project evidence', () => {
  const dataRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[0], // Understand business performance and customers.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[1], // D2C or e-commerce.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[0], // Dashboard or analysis.
  });
  assert.equal(dataRec.recommendedService.id, 'data-intelligence');
  assert.equal(dataRec.relevantProject.slug, 'decoding-customer-value');
  assert.ok(dataRec.matchingMethodNote.includes('Transparent rule-based matching'));

  const aiRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[1], // Automate repetitive work.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[2], // Small business.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[1], // Automation workflow.
  });
  assert.equal(aiRec.recommendedService.id, 'ai-automation');
  assert.equal(aiRec.relevantProject.slug, 'notice-decoder');

  const productRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[3], // Improve software quality and reporting.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[3], // Product or technology team.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[3], // Custom software.
  });
  assert.equal(productRec.recommendedService.id, 'digital-products');
  assert.equal(productRec.relevantProject.slug, 'sentinelx');
  assert.ok(productRec.supportingCapabilityNote?.includes('Software Quality'));
});

test('four-step estimateProjectScope recommends appropriate service without inventing prices', () => {
  const estimate = estimateProjectScope({
    problemCategory: 'Automate a repetitive workflow',
    availableInformation: AVAILABLE_INFO_OPTIONS[1],
    desiredOutcomeType: DESIRED_OUTCOME_OPTIONS[1],
    timelinePreference: 'Within 1–2 weeks (Focused analysis / small pilot)',
  });

  assert.equal(estimate.recommendedService.id, 'ai-automation');
  assert.ok(estimate.scopeDisclaimer.includes('No instant price or guaranteed date'));
  assert.ok(estimate.matchingProjects.some((p) => p.slug === 'notice-decoder'));
});

test('validateEnquiryForm rejects empty or invalid inputs and accepts valid Indian business enquiry', () => {
  const emptyInput: EnquiryFormInput = {
    name: '',
    businessName: '',
    email: 'invalid-email',
    problemCategory: '',
    desiredOutcome: 'Too short',
    availableMaterial: '',
    budgetRange: '',
    expectedTimeline: '',
    additionalDetails: '',
  };

  const invalidResult = validateEnquiryForm(emptyInput);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);

  const validInput: EnquiryFormInput = {
    name: 'Rohan Mehta',
    businessName: 'Mehta Retail & D2C',
    email: 'rohan@mehtaretail.in',
    problemCategory: 'Understand my business data',
    desiredOutcome: 'We want to identify which customer segments buy without heavy discount codes.',
    availableMaterial: '18 months of Shopify order CSVs and discount logs.',
    budgetRange: '₹10,000–₹25,000',
    expectedTimeline: '2–4 weeks (Standard dashboard / workflow / prototype)',
    additionalDetails: 'Prefer a Power BI dashboard plus a short retention summary.',
  };

  const validResult = validateEnquiryForm(validInput);
  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});

  const brief = formatEnquiryBrief(validInput);
  assert.ok(brief.includes('Mehta Retail & D2C'));
  assert.ok(brief.includes('01. Data & Business Intelligence'));
  assert.ok(brief.includes('Indicative only; final quote depends on scope review'));
});

test('matchProblemToService maps plain business problems to the three core services', () => {
  const dataMatch = matchProblemToService('Understand my business data');
  assert.equal(dataMatch.recommendedService.id, 'data-intelligence');

  const autoMatch = matchProblemToService('Automate a repetitive workflow');
  assert.equal(autoMatch.recommendedService.id, 'ai-automation');

  const toolMatch = matchProblemToService('Build a dashboard or internal tool');
  assert.equal(toolMatch.recommendedService.id, 'digital-products');
});
