import { useState, useEffect, type FormEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Check,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MessageSquare,
  Phone,
  RotateCcw,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { MotionReveal } from '../components/MotionReveal';
import { StudioFaqSection } from '../components/StudioFaqSection';
import {
  PROFILE_CONFIG,
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
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadBrief = () => {
    const textToSave = submittedBrief ?? livePreviewBrief;
    const blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `project-enquiry-${(form.businessName || 'studio')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedBrief(null);
    setCopied(false);
  };

  const mailtoHref = `mailto:${PROFILE_CONFIG.contact.emailPrimary.address}?cc=${encodeURIComponent(
    PROFILE_CONFIG.contact.emailSecondary.address
  )}&subject=${encodeURIComponent(
    `Project Enquiry: ${form.businessName || 'New Digital Solution'} (${form.problemCategory})`
  )}&body=${encodeURIComponent(submittedBrief ?? livePreviewBrief)}`;

  return (
    <div>
      <PageMeta
        title="Contact & Project Scope Builder"
        description="Contact Akshit directly via email, phone, WhatsApp, or LinkedIn—or build a structured Project Brief in plain English."
      />

      {/* 1. Header & Verified Direct Contact Channels */}
      <section className="bg-[#0E0F14] bg-lamplit-glow border-b border-[#2C2F42] pt-14 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <MotionReveal className="max-w-3xl space-y-4">
            <p className="font-mono text-xs text-[#8B75FF]">
              Contact &amp; Project Scope Builder · Direct 1-on-1 Collaboration
            </p>
            <h1
              className="font-display text-[#F4F0E8] leading-[1.08]"
              style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.85rem)' }}
            >
              Reach Out Directly or Build a Structured Project Brief
            </h1>
            <p className="text-base sm:text-lg text-[#A6A9B8] leading-relaxed">
              You can contact me immediately by email, phone call, WhatsApp, or LinkedIn—or use
              the Project Scope Builder below to structure your problem, available material, and
              desired deliverable into a ready-to-send brief.
            </p>
          </MotionReveal>

          {/* Direct Contact Channels Grid (Email, Phone Call, WhatsApp, LinkedIn, GitHub) */}
          <MotionReveal delay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Verified Emails */}
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#8B75FF]">
                  <span>Verified Email</span>
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#F4F0E8]">Direct Studio Inbox</p>
              </div>
              <div className="space-y-2 text-xs font-mono pt-2 border-t border-[#2C2F42]">
                <a
                  href={PROFILE_CONFIG.contact.emailPrimary.mailto}
                  className="block text-[#E6D3A7] hover:text-[#8B75FF] truncate transition-colors"
                >
                  {PROFILE_CONFIG.contact.emailPrimary.address}
                </a>
                <a
                  href={PROFILE_CONFIG.contact.emailSecondary.mailto}
                  className="block text-[#A6A9B8] hover:text-[#F4F0E8] truncate transition-colors"
                >
                  {PROFILE_CONFIG.contact.emailSecondary.address}
                </a>
              </div>
            </div>

            {/* Verified Phone Call */}
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#D4AE5C]">
                  <span>Phone Call</span>
                  <Phone className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#F4F0E8]">
                  {PROFILE_CONFIG.contact.phone.displayNumber}
                </p>
                <p className="text-xs text-[#A6A9B8]">Direct voice call (India)</p>
              </div>
              <a
                href={PROFILE_CONFIG.contact.phone.telHref}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {PROFILE_CONFIG.contact.phone.displayNumber}</span>
              </a>
            </div>

            {/* Verified WhatsApp */}
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#7AD992]">
                  <span>WhatsApp Direct</span>
                  <MessageSquare className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#F4F0E8]">
                  {PROFILE_CONFIG.contact.phone.displayNumber}
                </p>
                <p className="text-xs text-[#A6A9B8]">Quick chat for project questions</p>
              </div>
              <a
                href={PROFILE_CONFIG.contact.phone.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#0E0F14] bg-[#7AD992] hover:bg-[#7AD992]/90 rounded-lg transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Verified LinkedIn & GitHub */}
            <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-5 flex flex-col justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between font-mono text-xs text-[#8B75FF]">
                  <span>Professional Profiles</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-[#F4F0E8]">LinkedIn &amp; GitHub</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2C2F42]">
                <a
                  href={PROFILE_CONFIG.contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-[#8B75FF]" />
                </a>
                <a
                  href={PROFILE_CONFIG.contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-[#E6D3A7] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#D4AE5C] rounded-lg transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#D4AE5C]" />
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* 2. Project Scope Builder & Live Project Brief Preview */}
      <section className="bg-[#0E0F14] py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          {submittedBrief && (
            <div
              role="status"
              aria-live="polite"
              className="bg-[#161822] border-2 border-[#8B75FF] rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2C2F42] pb-4">
                <div>
                  <p className="font-mono text-xs text-[#7AD992]">
                    Project Brief Validated &amp; Ready
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#F4F0E8] mt-1">
                    Your Project Brief Is Ready to Send or Save
                  </h2>
                  <p className="text-xs text-[#A6A9B8] mt-1">
                    This brief was created right in your browser. Click &quot;Email to{' '}
                    {PROFILE_CONFIG.contact.emailPrimary.address}&quot;, copy the text, or download
                    it as a .txt file.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email to {PROFILE_CONFIG.contact.emailPrimary.address}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#7AD992]" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Brief Text</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadBrief}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-[#F4F0E8] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .txt</span>
                  </button>
                </div>
              </div>

              <pre className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-5 font-mono text-xs text-[#E6D3A7] overflow-x-auto leading-relaxed">
                {submittedBrief}
              </pre>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Guided Project Scope Builder Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-7 bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 md:p-8 space-y-8"
            >
              <div className="space-y-5">
                <div className="border-b border-[#2C2F42] pb-3">
                  <h2 className="font-display text-2xl text-[#F4F0E8]">01. Your Details</h2>
                  <p className="text-xs text-[#A6A9B8] mt-0.5">
                    Fields marked with * are needed to generate your structured project brief.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block font-mono text-xs text-[#E6D3A7] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleFieldChange('name', e.target.value)}
                      placeholder="e.g. Rohan Mehta"
                      className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-xs text-[#E08A1E] mt-1.5 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-business"
                      className="block font-mono text-xs text-[#E6D3A7] mb-2"
                    >
                      Business or Organisation *
                    </label>
                    <input
                      id="enquiry-business"
                      type="text"
                      value={form.businessName}
                      onChange={(e) => handleFieldChange('businessName', e.target.value)}
                      placeholder="e.g. Mehta Retail / SaaS Team"
                      className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none"
                    />
                    {errors.businessName && (
                      <p className="text-xs text-[#E08A1E] mt-1.5 font-mono">
                        {errors.businessName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-email"
                    className="block font-mono text-xs text-[#E6D3A7] mb-2"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="name@company.in"
                    className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#E08A1E] mt-1.5 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Problem & Context */}
              <div className="space-y-5 pt-2 border-t border-[#2C2F42]">
                <h2 className="font-display text-2xl text-[#F4F0E8]">
                  02. Problem, Material &amp; Desired Deliverable
                </h2>

                <div>
                  <label
                    htmlFor="enquiry-problem"
                    className="block font-mono text-xs text-[#E6D3A7] mb-2"
                  >
                    What best describes what you need help with? *
                  </label>
                  <select
                    id="enquiry-problem"
                    value={form.problemCategory}
                    onChange={(e) => handleFieldChange('problemCategory', e.target.value)}
                    className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] focus:outline-none"
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
                    className="block font-mono text-xs text-[#E6D3A7] mb-2"
                  >
                    What deliverable or outcome would help you most? *
                  </label>
                  <textarea
                    id="enquiry-outcome"
                    rows={3}
                    value={form.desiredOutcome}
                    onChange={(e) => handleFieldChange('desiredOutcome', e.target.value)}
                    placeholder="e.g. We want to see which customer groups come back without discount codes, plus an interactive Power BI dashboard."
                    className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg p-4 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none leading-relaxed"
                  />
                  {errors.desiredOutcome && (
                    <p className="text-xs text-[#E08A1E] mt-1.5 font-mono">
                      {errors.desiredOutcome}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-material"
                    className="block font-mono text-xs text-[#E6D3A7] mb-2"
                  >
                    What spreadsheets, documents, or notes do you already have? *
                  </label>
                  <textarea
                    id="enquiry-material"
                    rows={2}
                    value={form.availableMaterial}
                    onChange={(e) => handleFieldChange('availableMaterial', e.target.value)}
                    placeholder="e.g. Excel / CSV order exports, sample PDF circulars, or notes on how we do the task today."
                    className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg p-4 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none leading-relaxed"
                  />
                  {errors.availableMaterial && (
                    <p className="text-xs text-[#E08A1E] mt-1.5 font-mono">
                      {errors.availableMaterial}
                    </p>
                  )}
                </div>
              </div>

              {/* Timeline & Indicative Budget */}
              <div className="space-y-5 pt-2 border-t border-[#2C2F42]">
                <h2 className="font-display text-2xl text-[#F4F0E8]">
                  03. Preferred Timeline &amp; Scope Indication
                </h2>
                <p className="text-xs text-[#A6A9B8]">
                  No automatic quotes or guaranteed delivery dates are generated here. These
                  choices simply help frame whether a Fixed-Scope Pilot or Custom Project fits best.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-budget"
                      className="block font-mono text-xs text-[#E6D3A7] mb-2"
                    >
                      Indicative INR Scope Range *
                    </label>
                    <select
                      id="enquiry-budget"
                      value={form.budgetRange}
                      onChange={(e) => handleFieldChange('budgetRange', e.target.value)}
                      className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] focus:outline-none"
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
                      className="block font-mono text-xs text-[#E6D3A7] mb-2"
                    >
                      Preferred Timeline *
                    </label>
                    <select
                      id="enquiry-timeline"
                      value={form.expectedTimeline}
                      onChange={(e) => handleFieldChange('expectedTimeline', e.target.value)}
                      className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg px-4 py-3 text-sm text-[#F4F0E8] focus:outline-none"
                    >
                      {TIMELINE_OPTIONS.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-details"
                    className="block font-mono text-xs text-[#A6A9B8] mb-2"
                  >
                    Anything else you want to mention? (Optional)
                  </label>
                  <textarea
                    id="enquiry-details"
                    rows={2}
                    value={form.additionalDetails}
                    onChange={(e) => handleFieldChange('additionalDetails', e.target.value)}
                    placeholder="Questions about starting with a small pilot or specific requirements."
                    className="w-full bg-[#0E0F14] border border-[#2C2F42] focus:border-[#8B75FF] rounded-lg p-3.5 text-sm text-[#F4F0E8] placeholder-[#A6A9B8]/40 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors cursor-pointer"
                  >
                    Prepare &amp; Validate Project Brief
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-[#A6A9B8] hover:text-[#F4F0E8] border border-[#2C2F42] rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Form</span>
                  </button>
                </div>

                <p className="text-xs text-[#A6A9B8] leading-relaxed">
                  Note: Clicking this button validates your inputs and prepares a formatted Project
                  Brief on this page so you can email it directly to{' '}
                  <span className="text-[#E6D3A7]">
                    {PROFILE_CONFIG.contact.emailPrimary.address}
                  </span>
                  , copy it, or download it.
                </p>
              </div>
            </form>

            {/* Right: Live Project Brief & Email Fallback */}
            <aside className="lg:col-span-5 bg-[#161822] border border-[#2C2F42] rounded-2xl p-6 space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between border-b border-[#2C2F42] pb-4">
                <div>
                  <p className="font-mono text-xs text-[#8B75FF]">Live Project Scope Preview</p>
                  <h2 className="font-display text-2xl text-[#F4F0E8] mt-0.5">
                    Your Project Brief
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#E6D3A7] bg-[#0E0F14] border border-[#2C2F42] hover:border-[#8B75FF] rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#7AD992]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 space-y-2">
                <p className="font-mono text-xs text-[#8B75FF]">
                  Recommended Service: {matchedRecommendation.recommendedService.number}.{' '}
                  {matchedRecommendation.recommendedService.title}
                </p>
                <p className="text-xs text-[#A6A9B8] leading-relaxed">
                  {matchedRecommendation.rationale}
                </p>
                <p className="text-xs text-[#E6D3A7] pt-1 border-t border-[#2C2F42]/70">
                  Suggested Starting Step: {matchedRecommendation.suggestedPilotIdea}
                </p>
              </div>

              <pre className="bg-[#0E0F14] border border-[#2C2F42] rounded-xl p-4 font-mono text-[11px] text-[#A6A9B8] overflow-x-auto leading-relaxed">
                {livePreviewBrief}
              </pre>

              {/* Direct Email Fallback Button */}
              <div className="pt-2 border-t border-[#2C2F42] space-y-3">
                <a
                  href={mailtoHref}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>
                    Open in Email App ({PROFILE_CONFIG.contact.emailPrimary.address})
                  </span>
                </a>
                <p className="text-xs text-[#A6A9B8]">
                  Not sure what scope fits?{' '}
                  <Link to="/solutions" className="text-[#8B75FF] hover:underline">
                    Try the 3-Question Solution Finder →
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Expectations & Working Together FAQ (Scope, Project Stages, Collaboration Models & Delivery Timelines) */}
      <StudioFaqSection variant="ivory" showCtaLink={false} />
    </div>
  );
}
