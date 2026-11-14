import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterAndSortProjects,
  filterCuratedWork,
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
  SERVICES,
  INSIGHT_NOTES,
  TECHNOLOGY_EXPLORER_ITEMS,
  STUDIO_FAQS,
  CURATED_WORK_ITEMS,
} from '../data/studioData';

test('flagship case study hierarchy leads with RE:FRAME (1st Place · REVIVEX · ZERO² 2026) and preserves all 7 dedicated case studies', () => {
  const all = filterAndSortProjects('all', 'all');
  assert.equal(all.length, 7);
  assert.equal(all[0].slug, 'reframe');
  assert.equal(all[1].slug, 'notice-decoder');
  assert.equal(all[2].slug, 'sentinelx');
  assert.equal(all[3].slug, 'decoding-customer-value');
  assert.equal(all[4].slug, 'contract-risk-governance');
  assert.equal(all[5].slug, 'lureline');
  assert.equal(all[6].slug, 'clarity-redemption-ai');

  const reframe = getProjectBySlug('reframe');
  assert.ok(reframe);
  assert.equal(reframe.recognitionBadge, '1st Place · REVIVEX · ZERO² 2026');
  assert.equal(reframe.specialCredit, 'Special Video Credit: Adyot Ohri');
  assert.equal(
    reframe.drivePdfUrl,
    '/assets/aistudio/REFRAME_Smart_Glasses_Product_Concept_97e4e1df.pdf'
  );
  assert.equal(
    reframe.screenshotUrl,
    '/assets/aistudio/REFRAME_THUMBNAIL_IMAGE_99a3fe50.jpeg'
  );
  // Ensure RE:FRAME is honestly documented as an independent, unbuilt product concept
  assert.ok(
    reframe.limitationsAndScope.some((lim) =>
      lim.toLowerCase().includes('independent, unbuilt')
    )
  );

  for (const project of all) {
    assert.ok(project.productThinking.researchContext.length > 20);
    assert.ok(project.productThinking.userNeeds.length > 20);
    assert.ok(project.productThinking.alternativesConsidered.length > 20);
    assert.ok(project.productThinking.productDecision.length > 20);
    assert.ok(project.productThinking.prototypeEvolution.length > 20);
  }
});

test('Selected Work explorer filters flagship projects and curated work across Selected Projects, Research & Analytics, and Product Concepts', () => {
  const liveApps = filterAndSortProjects('all', 'all', 'all', 'live-demo');
  assert.deepEqual(
    liveApps.map((p) => p.slug),
    ['notice-decoder', 'sentinelx', 'lureline', 'clarity-redemption-ai']
  );

  const pythonProjects = filterAndSortProjects('all', 'all', 'Python', 'all');
  assert.deepEqual(
    pythonProjects.map((p) => p.slug),
    ['sentinelx', 'decoding-customer-value', 'contract-risk-governance']
  );

  // Verify the 3 Work page sections exist and contain genuine curated entries
  const selectedProjects = filterCuratedWork({ workSection: 'selected-projects' });
  const researchAnalytics = filterCuratedWork({ workSection: 'research-analytics' });
  const productConcepts = filterCuratedWork({ workSection: 'product-concepts' });

  assert.equal(selectedProjects.length, 7);
  assert.equal(selectedProjects[0].slug, 'reframe');
  assert.equal(researchAnalytics.length, 3);
  assert.equal(productConcepts.length, 5);

  // Verify SIGNAL – Prompt Forge and InsightForgeAI live links and genuine screenshots
  const signal = CURATED_WORK_ITEMS.find((item) => item.slug === 'signal-prompt-forge');
  const insightForge = CURATED_WORK_ITEMS.find((item) => item.slug === 'insightforge-ai');

  assert.ok(signal);
  assert.equal(signal.links.liveDemoUrl, 'https://delta-focus.lovable.app');
  assert.equal(signal.screenshotUrl, '/assets/projects/signal-live.png');

  assert.ok(insightForge);
  assert.equal(insightForge.links.liveDemoUrl, 'https://insightforgeai.lovable.app');
  assert.equal(insightForge.screenshotUrl, '/assets/projects/insightforgeai-live.png');

  // Verify UIDAI Colab study and honest concept labels
  const uidai = CURATED_WORK_ITEMS.find((item) => item.slug === 'uidai-demographic-intelligence');
  assert.ok(uidai);
  assert.ok(uidai.links.colabUrl?.includes('17bSIIzpAwQZnbobBpOfM6El0EARxvHka'));

  const nykaa = CURATED_WORK_ITEMS.find((i) => i.slug === 'nykaa-post-purchase-retention');
  const indusshield = CURATED_WORK_ITEMS.find((i) => i.slug === 'indusshield-proactive-ai-insurance');
  assert.equal(nykaa?.collaborationType, 'Independent Concept');
  assert.equal(indusshield?.collaborationType, 'Independent Concept');
});

test('studio identity, 4 services, 4-stage process, live project links, and central profile records are verified', () => {
  const noticeDecoder = getProjectBySlug('notice-decoder');
  assert.ok(noticeDecoder);
  assert.equal(noticeDecoder.liveDemoUrl, 'https://notice-decoder-pi.vercel.app/');
  assert.equal(noticeDecoder.screenshotUrl, '/assets/projects/notice-decoder-live.png');

  const sentinelx = getProjectBySlug('sentinelx');
  assert.ok(sentinelx);
  assert.equal(sentinelx.liveDemoUrl, 'https://sentineix.vercel.app/');
  assert.equal(sentinelx.screenshotUrl, '/assets/projects/sentinelx-live.png');

  const clarity = getProjectBySlug('clarity-redemption-ai');
  assert.ok(clarity);
  assert.equal(clarity.liveDemoUrl, 'https://clarity-redemption.ai.studio');
  assert.equal(clarity.screenshotUrl, '/assets/projects/clarity-live.png');

  const dcv = getProjectBySlug('decoding-customer-value');
  assert.ok(dcv);
  assert.equal(dcv.liveDemoUrl, undefined);
  assert.ok(dcv.githubUrl?.includes('IITG_Decoding_Customer_Value_Akshit_Bhumika'));

  // Verify internships include ResolX.ai and CareerWithDishani and exclude MatchBest Group
  const orgNames = VERIFIED_EXPERIENCE.map((e) => e.organisation);
  assert.deepEqual(orgNames, ['ResolX.ai (One Point One Technology Labs)', 'CareerWithDishani']);
  assert.ok(!JSON.stringify(VERIFIED_EXPERIENCE).toLowerCase().includes('matchbest'));

  // Verify academic record, verified contact config, 4 services, and 4-stage process
  assert.equal(VERIFIED_ACADEMIC_RECORD.cgpa, '9.10 / 10');
  assert.equal(VERIFIED_ACADEMIC_RECORD.aggregatePercentage, '85.026%');
  assert.equal(PROFILE_CONFIG.name, 'AKSHIT SUKHIJA');
  assert.equal(PROFILE_CONFIG.roleSubtitle, 'Independent Digital Content & Solutions Studio');
  assert.ok(
    PROFILE_CONFIG.shortBio.startsWith('Creative ideas. Clear stories. Digital experiences.')
  );
  assert.equal(PROFILE_CONFIG.contact.github.url, 'https://github.com/akshit-sukhija');
  assert.equal(PROFILE_CONFIG.contact.linkedin.url, 'https://www.linkedin.com/in/akshit-sukhija-/');
  assert.equal(PROFILE_CONFIG.contact.emailPrimary.address, 'akshithere075@gmail.com');
  assert.equal(PROFILE_CONFIG.contact.emailSecondary.address, 'akshitsukhija4@gmail.com');
  assert.equal(PROFILE_CONFIG.contact.phone.displayNumber, '+91 9873865213');

  assert.deepEqual(
    SERVICES.map((s) => s.id),
    [
      'brand-storytelling',
      'digital-content',
      'websites-digital-experiences',
      'ai-solutions',
    ]
  );

  assert.deepEqual(
    ENGAGEMENT_STEPS.map((s) => s.stageKey),
    ['DISCOVER', 'DEFINE', 'CREATE', 'DELIVER']
  );

  // Verify Insights includes Marketing vs Branding vs Advertising research article
  assert.equal(INSIGHT_NOTES[0].id, 'marketing-vs-branding-vs-advertising');
  assert.ok(TECHNOLOGY_EXPLORER_ITEMS.length >= 6);
  assert.equal(STUDIO_FAQS.length, 5);
});

test('three-question SolutionFinder rule-based matching recommends appropriate studio service and project evidence', () => {
  const dataRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[0], // Understand business performance and customers.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[1], // D2C or e-commerce.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[0], // Dashboard or analysis.
  });
  assert.equal(dataRec.recommendedService.id, 'brand-storytelling');
  assert.equal(dataRec.relevantProject.slug, 'decoding-customer-value');
  assert.ok(dataRec.matchingMethodNote.includes('Transparent rule-based matching'));

  const aiRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[1], // Automate repetitive work.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[2], // Small business.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[1], // Automation workflow.
  });
  assert.equal(aiRec.recommendedService.id, 'ai-solutions');
  assert.equal(aiRec.relevantProject.slug, 'notice-decoder');

  const productRec = recommendSolutionFromFinder({
    problem: SOLUTION_FINDER_PROBLEMS[3], // Improve software quality and reporting.
    businessType: SOLUTION_FINDER_BUSINESS_TYPES[3], // Product or technology team.
    helpNeeded: SOLUTION_FINDER_HELP_TYPES[3], // Custom software.
  });
  assert.equal(productRec.recommendedService.id, 'websites-digital-experiences');
  assert.equal(productRec.relevantProject.slug, 'sentinelx');
  assert.ok(productRec.supportingCapabilityNote?.includes('Software Quality'));
});

test('four-step estimateProjectScope recommends appropriate studio service without inventing prices', () => {
  const estimate = estimateProjectScope({
    problemCategory: 'Automate a repetitive workflow',
    availableInformation: AVAILABLE_INFO_OPTIONS[1],
    desiredOutcomeType: DESIRED_OUTCOME_OPTIONS[1],
    timelinePreference: 'Within 1–2 weeks (Focused analysis / small pilot)',
  });

  assert.equal(estimate.recommendedService.id, 'ai-solutions');
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
  assert.ok(brief.includes('01. Brand Strategy & Storytelling'));
  assert.ok(brief.includes('Indicative only; final quote depends on scope review'));
});

test('matchProblemToService maps plain business problems to the four studio services', () => {
  const brandMatch = matchProblemToService('Understand my business data');
  assert.equal(brandMatch.recommendedService.id, 'brand-storytelling');

  const autoMatch = matchProblemToService('Automate a repetitive workflow');
  assert.equal(autoMatch.recommendedService.id, 'ai-solutions');

  const webMatch = matchProblemToService('Build a dashboard or internal tool');
  assert.equal(webMatch.recommendedService.id, 'websites-digital-experiences');
});
