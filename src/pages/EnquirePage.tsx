import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check, Copy, Download, Mail, RotateCcw } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import {
  PROBLEM_CATEGORIES,
  BUDGET_CHOICES_INR,
  TIMELINE_OPTIONS,
} from '../data/studioData';
import {
  validateEnquiryForm,
  formatEnquiryBrief,
  matchProblemToService,
  type EnquiryFormInput,
} from '../utils/studioLogic';

const INITIAL_FORM: EnquiryFormInput = {
  name: '',
  businessName: '',
  email: '',
  problemCategory: PROBLEM_CATEGORIES[0],
  desiredOutcome: '',
  availableMaterial: '',
  budgetRange: BUDGET_CHOICES_INR[5],
  expectedTimeline: TIMELINE_OPTIONS[3],
  additionalDetails: '',
};

export function EnquirePage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<EnquiryFormInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormInput, string>>>({});
  const [submittedBrief, setSubmittedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const preselectedProblem = searchParams.get('problem');
    const preselectedMaterial = searchParams.get('material');
    const preselectedOutcome = searchParams.get('outcome');
    const preselectedTimeline = searchParams.get('timeline');

    setForm((prev) => ({
      ...prev,
      problemCategory:
        preselectedProblem &&
        PROBLEM_CATEGORIES.includes(preselectedProblem as (typeof PROBLEM_CATEGORIES)[number])
          ? preselectedProblem
          : prev.problemCategory,
      availableMaterial: preselectedMaterial ?? prev.availableMaterial,
      desiredOutcome: preselectedOutcome ?? prev.desiredOutcome,
      expectedTimeline:
        preselectedTimeline &&
        TIMELINE_OPTIONS.includes(preselectedTimeline as (typeof TIMELINE_OPTIONS)[number])
          ? preselectedTimeline
          : prev.expectedTimeline,
    }));
  }, [searchParams]);

  const matchedRecommendation = matchProblemToService(form.problemCategory);
  const livePreviewBrief = formatEnquiryBrief({
    ...form,
    name: form.name || '[Your Name]',
    businessName: form.businessName || '[Your Business / Startup]',
    email: form.email || '[your.email@company.in]',
    desiredOutcome:
      form.desiredOutcome || '[Explain the result or time-saver you want]',
    availableMaterial:
      form.availableMaterial || '[Mention what spreadsheets, PDFs, or notes you have]',
  });

  const handleFieldChange = (field: keyof EnquiryFormInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(form);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedBrief(null);
      window.scrollTo({ top: 220, behavior: 'smooth' });
      return;
    }

    setErrors({});
    const formatted = formatEnquiryBrief(form);
    setSubmittedBrief(formatted);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  const handleCopyBrief = async () => {
    const textToCopy = submittedBrief ?? livePreviewBrief;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadTxt = () => {
    const textToSave = submittedBrief ?? livePreviewBrief;
    const blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `project-enquiry-${(form.businessName || 'akshit-studio')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const mailtoSubject = encodeURIComponent(
    `Project Enquiry: ${form.problemCategory} — ${form.businessName || form.name}`
  );
  const mailtoBody = encodeURIComponent(submittedBrief ?? livePreviewBrief);
  const mailtoHref = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div>
      <PageMeta
        title="Discuss a Project — Guided Plain-English Enquiry"
        description="Describe your business problem, available spreadsheets or documents, and desired outcome in plain English to create a structured project enquiry brief."
      />

      {/* Editorial Header */}
      <section className="bg-[#11100E] bg-lamplit-glow border-b border-[#3A3429] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#C9A24B]">
              Project Enquiry · Guided & Plain-English (INR)
            </p>
            <h1
              className="font-display text-[#F2EBDD] leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Tell Me About the Problem You Want to Solve
            </h1>
            <p className="text-base sm:text-lg text-[#A9A092] leading-relaxed">
              You do not need any technical knowledge to fill this out. Answer in everyday words—this
              form builds a clear Project Brief that you can copy, download, or open in your email
              app.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Main Enquiry Workspace */}
      <section className="bg-[#11100E] py-16 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Guided Form */}
          <div className="lg:col-span-7 bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="border-b border-[#3A3429] pb-4">
                <h2 className="font-display text-2xl text-[#F2EBDD]">
                  01. Who You Are
                </h2>
                <p className="text-xs text-[#A9A092] mt-1">
                  Fields marked with * are needed to generate your project brief.
                </p>
              </div>

              {Object.keys(errors).length > 0 && (
                <div
                  role="alert"
                  className="bg-[#232019] border border-[#E08A1E] rounded p-4 text-xs text-[#F2EBDD] space-y-1"
                >
                  <p className="font-mono text-[#E08A1E] font-medium">
                    Please fill in the highlighted fields below:
                  </p>
                  <ul className="list-disc list-inside text-[#A9A092] space-y-0.5">
                    {Object.values(errors).map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block font-mono text-xs text-[#F2EBDD] mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    placeholder="e.g. Rohan Mehta"
                    className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                  />
                  {errors.name && (
                    <p id="err-name" className="text-xs text-[#E08A1E] mt-1.5">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-business"
                    className="block font-mono text-xs text-[#F2EBDD] mb-2"
                  >
                    Business or Organisation *
                  </label>
                  <input
                    id="enquiry-business"
                    type="text"
                    value={form.businessName}
                    onChange={(e) => handleFieldChange('businessName', e.target.value)}
                    aria-invalid={Boolean(errors.businessName)}
                    aria-describedby={errors.businessName ? 'err-business' : undefined}
                    placeholder="e.g. Mehta Retail / Independent Consultant"
                    className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                  />
                  {errors.businessName && (
                    <p id="err-business" className="text-xs text-[#E08A1E] mt-1.5">
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="enquiry-email"
                  className="block font-mono text-xs text-[#F2EBDD] mb-2"
                >
                  Your Email Address *
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  placeholder="name@company.in"
                  className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                />
                {errors.email && (
                  <p id="err-email" className="text-xs text-[#E08A1E] mt-1.5">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="border-t border-[#3A3429] pt-6">
                <h2 className="font-display text-2xl text-[#F2EBDD] mb-4">
                  02. Your Problem & Available Information
                </h2>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="enquiry-problem"
                      className="block font-mono text-xs text-[#F2EBDD] mb-2"
                    >
                      What best describes what you need help with? *
                    </label>
                    <select
                      id="enquiry-problem"
                      value={form.problemCategory}
                      onChange={(e) => handleFieldChange('problemCategory', e.target.value)}
                      aria-invalid={Boolean(errors.problemCategory)}
                      className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
                    >
                      {PROBLEM_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-outcome"
                      className="block font-mono text-xs text-[#F2EBDD] mb-2"
                    >
                      What result do you want? (Explain in everyday words) *
                    </label>
                    <textarea
                      id="enquiry-outcome"
                      rows={3}
                      value={form.desiredOutcome}
                      onChange={(e) => handleFieldChange('desiredOutcome', e.target.value)}
                      aria-invalid={Boolean(errors.desiredOutcome)}
                      aria-describedby={errors.desiredOutcome ? 'err-outcome' : undefined}
                      placeholder="e.g. We want to see which customer groups come back without discount codes, plus an easy Power BI dashboard."
                      className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                    />
                    {errors.desiredOutcome && (
                      <p id="err-outcome" className="text-xs text-[#E08A1E] mt-1.5">
                        {errors.desiredOutcome}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-material"
                      className="block font-mono text-xs text-[#F2EBDD] mb-2"
                    >
                      What spreadsheets, documents, or notes do you already have? *
                    </label>
                    <textarea
                      id="enquiry-material"
                      rows={2}
                      value={form.availableMaterial}
                      onChange={(e) => handleFieldChange('availableMaterial', e.target.value)}
                      aria-invalid={Boolean(errors.availableMaterial)}
                      aria-describedby={errors.availableMaterial ? 'err-material' : undefined}
                      placeholder="e.g. Excel / CSV order sheets, sample PDF circulars, or notes on how we do the task today."
                      className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                    />
                    {errors.availableMaterial && (
                      <p id="err-material" className="text-xs text-[#E08A1E] mt-1.5">
                        {errors.availableMaterial}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#3A3429] pt-6">
                <h2 className="font-display text-2xl text-[#F2EBDD] mb-2">
                  03. Approximate INR Budget & Timeline
                </h2>
                <p className="text-xs text-[#A9A092] mb-4">
                  Choosing a budget range helps me suggest a realistic size (such as a small paid
                  pilot vs. a full web tool). It never locks you into an automatic price.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-budget"
                      className="block font-mono text-xs text-[#F2EBDD] mb-2"
                    >
                      Approximate Budget in INR (₹) *
                    </label>
                    <select
                      id="enquiry-budget"
                      value={form.budgetRange}
                      onChange={(e) => handleFieldChange('budgetRange', e.target.value)}
                      aria-invalid={Boolean(errors.budgetRange)}
                      className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
                    >
                      {BUDGET_CHOICES_INR.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-timeline"
                      className="block font-mono text-xs text-[#F2EBDD] mb-2"
                    >
                      Expected Timeline *
                    </label>
                    <select
                      id="enquiry-timeline"
                      value={form.expectedTimeline}
                      onChange={(e) => handleFieldChange('expectedTimeline', e.target.value)}
                      aria-invalid={Boolean(errors.expectedTimeline)}
                      className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] focus:outline-none"
                    >
                      {TIMELINE_OPTIONS.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="enquiry-additional"
                    className="block font-mono text-xs text-[#F2EBDD] mb-2"
                  >
                    Anything else you want to mention? (Optional)
                  </label>
                  <textarea
                    id="enquiry-additional"
                    rows={2}
                    value={form.additionalDetails}
                    onChange={(e) => handleFieldChange('additionalDetails', e.target.value)}
                    placeholder="Questions about starting with a small pilot or specific requirements."
                    className="w-full bg-[#11100E] border border-[#3A3429] focus:border-[#C9A24B] rounded px-3.5 py-2.5 text-sm text-[#F2EBDD] placeholder:text-[#A9A092]/50 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-[#3A3429] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors cursor-pointer"
                  >
                    Prepare & Validate Project Enquiry
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setForm(INITIAL_FORM);
                      setErrors({});
                      setSubmittedBrief(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-[#A9A092] hover:text-[#F2EBDD] border border-[#3A3429] rounded transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Form</span>
                  </button>
                </div>
                <p className="text-[11px] text-[#A9A092]">
                  Note: Clicking this button validates your inputs and prepares a formatted Project
                  Brief on this page so you can copy it, download it, or open it in your email app.
                  Nothing is sent to an external server without your action.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Live Project Brief & Honest Sharing Actions */}
          <div className="lg:col-span-5 space-y-6">
            {submittedBrief && (
              <div
                role="status"
                aria-live="polite"
                className="bg-[#232019] border border-[#8FBF7A] rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-[#8FBF7A]">
                    Brief Created Locally · Ready to Copy or Email
                  </p>
                  <span className="font-mono text-xs text-[#E8D5A8]">Local Brief Builder</span>
                </div>
                <h3 className="font-display text-2xl text-[#F2EBDD]">
                  Your Project Brief Is Ready
                </h3>
                <p className="text-xs text-[#A9A092] leading-relaxed">
                  This website does not secretly send your form to a third-party database. Choose
                  how you would like to share or save your prepared brief below:
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#11100E] bg-[#C9A24B] hover:bg-[#E8D5A8] rounded transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied Brief to Clipboard' : 'Copy Brief Text'}</span>
                  </button>

                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F2EBDD] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C9A24B]" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadTxt}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono text-[#E8D5A8] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .txt</span>
                  </button>
                </div>
              </div>
            )}

            <div className="bg-[#1A1814] border border-[#3A3429] rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#3A3429] pb-3">
                <div>
                  <p className="font-mono text-xs text-[#C9A24B]">
                    Live Project Summary Preview
                  </p>
                  <h2 className="font-display text-2xl text-[#F2EBDD] mt-0.5">
                    Your Project Brief
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#E8D5A8] bg-[#11100E] border border-[#3A3429] hover:border-[#C9A24B] rounded transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#8FBF7A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-[#11100E] border border-[#3A3429] rounded p-4 space-y-2 text-xs">
                <p className="font-mono text-[#C9A24B]">
                  Recommended Service: {matchedRecommendation.recommendedService.number}.{' '}
                  {matchedRecommendation.recommendedService.title}
                </p>
                <p className="text-[#A9A092] leading-relaxed">
                  {matchedRecommendation.rationale}
                </p>
                <p className="text-[#E8D5A8] pt-1 border-t border-[#3A3429]/60">
                  Pilot Idea: {matchedRecommendation.suggestedPilotIdea}
                </p>
              </div>

              <pre className="bg-[#11100E] border border-[#3A3429] rounded p-4 overflow-x-auto font-mono text-[11px] text-[#F2EBDD]/90 leading-relaxed whitespace-pre-wrap">
                {submittedBrief ?? livePreviewBrief}
              </pre>

              <p className="text-xs text-[#A9A092] leading-relaxed">
                Want to test different scope options first?{' '}
                <Link to="/solutions" className="text-[#C9A24B] hover:underline">
                  Use the 4-Step Project Scope Estimator →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
