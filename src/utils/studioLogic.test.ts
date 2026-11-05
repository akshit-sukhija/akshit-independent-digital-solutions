import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterAndSortProjects,
  getProjectBySlug,
  matchProblemToService,
  estimateProjectScope,
  validateEnquiryForm,
  formatEnquiryBrief,
  AVAILABLE_INFO_OPTIONS,
  DESIRED_OUTCOME_OPTIONS,
  type EnquiryFormInput,
} from './studioLogic';

test('strict project hierarchy preserves Notice Decoder, SentinelX, Decoding Customer Value, Contract Risk Governance, and Lureline', () => {
  const all = filterAndSortProjects('all', 'all');
  assert.equal(all.length, 5);
  assert.equal(all[0].slug, 'notice-decoder');
  assert.equal(all[1].slug, 'sentinelx');
  assert.equal(all[2].slug, 'decoding-customer-value');
  assert.equal(all[3].slug, 'contract-risk-governance');
  assert.equal(all[4].slug, 'lureline');
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

test('factual accuracy guardrails on project records', () => {
  const sentinelx = getProjectBySlug('sentinelx');
  assert.ok(sentinelx);
  assert.equal(sentinelx.liveDemoUrl, undefined);
  assert.equal(sentinelx.githubUrl, undefined);

  const dcv = getProjectBySlug('decoding-customer-value');
  assert.ok(dcv);
  assert.equal(dcv.liveDemoUrl, undefined);
  assert.ok(dcv.githubUrl?.includes('IITG_Decoding_Customer_Value_Akshit_Bhumika'));
});

test('four-step estimateProjectScope recommends appropriate service without inventing prices', () => {
  const estimate = estimateProjectScope({
    problemCategory: 'Automate a repetitive workflow',
    availableInformation: AVAILABLE_INFO_OPTIONS[1],
    desiredOutcomeType: DESIRED_OUTCOME_OPTIONS[1],
    timelinePreference: 'Within 1–2 weeks (Focused analysis / small pilot)',
  });

  assert.equal(estimate.recommendedService.id, 'ai-workflow-automation');
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
  assert.ok(brief.includes('01. Business Data & Insights'));
  assert.ok(brief.includes('Indicative only; final quote depends on scope review'));
});

test('matchProblemToService maps plain business problems to the three core services', () => {
  const dataMatch = matchProblemToService('Understand my business data');
  assert.equal(dataMatch.recommendedService.id, 'business-data-insights');

  const autoMatch = matchProblemToService('Automate a repetitive workflow');
  assert.equal(autoMatch.recommendedService.id, 'ai-workflow-automation');

  const toolMatch = matchProblemToService('Build a dashboard or internal tool');
  assert.equal(toolMatch.recommendedService.id, 'custom-digital-tools');
});
