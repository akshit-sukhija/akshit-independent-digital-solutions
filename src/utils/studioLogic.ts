import {
  PROJECTS,
  SERVICES,
  PROBLEM_CATEGORIES,
  BUDGET_CHOICES_INR,
  type CapabilityDomain,
  type ProjectData,
  type ServiceCategory,
} from '../data/studioData';

export interface EnquiryFormInput {
  name: string;
  businessName: string;
  email: string;
  problemCategory: string;
  desiredOutcome: string;
  availableMaterial: string;
  budgetRange: string;
  expectedTimeline: string;
  additionalDetails: string;
}

export interface EnquiryValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryFormInput, string>>;
}

/**
 * Filters projects by capability domain or tier while strictly preserving
 * the mandatory priority order:
 * 1. Notice Decoder (Flagship 01)
 * 2. SentinelX (Flagship 02)
 * 3. Decoding Customer Value (Featured 03)
 * 4. Contract Risk Governance Engine (Secondary 04)
 * 5. Lureline (Secondary 05)
 */
export function filterAndSortProjects(
  domainFilter: CapabilityDomain | 'all' = 'all',
  tierFilter: 'all' | 'primary' | 'secondary' = 'all'
): ProjectData[] {
  return [...PROJECTS]
    .filter((project) => {
      if (domainFilter !== 'all' && project.domain !== domainFilter) {
        return false;
      }
      if (tierFilter === 'primary' && project.tier === 'secondary') {
        return false;
      }
      if (tierFilter === 'secondary' && project.tier !== 'secondary') {
        return false;
      }
      return true;
    })
    .sort((a, b) => a.priorityOrder - b.priorityOrder);
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/**
 * Matches a client's selected problem category to the most relevant service
 * and portfolio evidence without requiring technical jargon from the client.
 */
export function matchProblemToService(problemCategory: string): {
  recommendedService: ServiceCategory;
  rationale: string;
  suggestedPilotIdea: string;
} {
  switch (problemCategory) {
    case 'Understand my business data':
      return {
        recommendedService: SERVICES[0],
        rationale:
          'Starts with cleaning and validating your existing sales, customer, or operational records to uncover actionable patterns before building any software.',
        suggestedPilotIdea:
          'A focused audit and segmentation of a sample historical spreadsheet or transaction export.',
      };
    case 'Automate a repetitive workflow':
    case 'Develop an AI-assisted solution':
      return {
        recommendedService: SERVICES[1],
        rationale:
          'Pairs deterministic validation rules with AI-assisted document or text extraction to eliminate repetitive manual processing safely.',
        suggestedPilotIdea:
          'A small proof-of-concept extraction or rule-validation script tested on 10–20 real sample documents.',
      };
    case 'Build a dashboard or internal tool':
    case 'Prototype a product idea':
      return {
        recommendedService: SERVICES[2],
        rationale:
          'Designs and builds a working web interface, data ingestion tool, or automated PDF reporting pipeline around your specific operational workflow.',
        suggestedPilotIdea:
          'A clickable functional prototype or single-workflow internal tool to validate the core use case.',
      };
    default:
      return {
        recommendedService: SERVICES[0],
        rationale:
          'When the right approach is not yet obvious, we review your current workflow or data first and recommend the simplest effective deliverable.',
        suggestedPilotIdea:
          'An initial requirements and data review to define a right-sized scope.',
      };
  }
}

/**
 * Validates the problem-first project enquiry form.
 * Never bypasses empty or invalid required inputs.
 */
export function validateEnquiryForm(input: EnquiryFormInput): EnquiryValidationResult {
  const errors: Partial<Record<keyof EnquiryFormInput, string>> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!input.businessName || input.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your business, startup, or organisation name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Please enter a valid email address so I can reply with a proposal.';
  }

  if (
    !input.problemCategory ||
    !PROBLEM_CATEGORIES.includes(input.problemCategory as (typeof PROBLEM_CATEGORIES)[number])
  ) {
    errors.problemCategory = 'Please select the problem category that best fits your need.';
  }

  if (!input.desiredOutcome || input.desiredOutcome.trim().length < 15) {
    errors.desiredOutcome =
      'Please describe the outcome you want in at least a short sentence (15+ characters).';
  }

  if (!input.availableMaterial || input.availableMaterial.trim().length < 5) {
    errors.availableMaterial =
      'Please mention what data, spreadsheets, documents, or workflow steps are currently available.';
  }

  if (
    !input.budgetRange ||
    !BUDGET_CHOICES_INR.includes(input.budgetRange as (typeof BUDGET_CHOICES_INR)[number])
  ) {
    errors.budgetRange = 'Please select an approximate INR budget range or custom estimate.';
  }

  if (!input.expectedTimeline || input.expectedTimeline.trim().length === 0) {
    errors.expectedTimeline = 'Please select an expected timeline window.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a structured, transparent project enquiry summary.
 * Explicitly notes that the budget indication does not auto-generate a final price.
 */
export function formatEnquiryBrief(input: EnquiryFormInput): string {
  const match = matchProblemToService(input.problemCategory);
  const divider = '--------------------------------------------';
  const headerRule = '============================================';
  const lines = [
    headerRule,
    'PROJECT ENQUIRY BRIEF — AKSHIT STUDIO',
    headerRule,
    `Client Name      : ${input.name.trim()}`,
    `Business / Org   : ${input.businessName.trim()}`,
    `Reply Email      : ${input.email.trim()}`,
    divider,
    `Problem Area     : ${input.problemCategory}`,
    `Aligned Service  : ${match.recommendedService.number}. ${match.recommendedService.title}`,
    `Indicative INR   : ${input.budgetRange} (Indicative only; final quote depends on scope review)`,
    `Timeline Window  : ${input.expectedTimeline}`,
    divider,
    'DESIRED BUSINESS OUTCOME:',
    input.desiredOutcome.trim(),
    '',
    'AVAILABLE DATA, DOCUMENTS OR WORKFLOWS:',
    input.availableMaterial.trim(),
  ];

  if (input.additionalDetails && input.additionalDetails.trim().length > 0) {
    lines.push('', 'ADDITIONAL CONTEXT / CONSTRAINTS:', input.additionalDetails.trim());
  }

  lines.push(
    divider,
    'NEXT STEP: Review material -> Define realistic scope -> Share customised INR proposal.',
    headerRule
  );

  return lines.join('\n');
}
