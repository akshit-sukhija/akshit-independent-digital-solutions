import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Compass, Layers, Sparkles } from 'lucide-react';
import {
  SOLUTION_FINDER_PROBLEMS,
  SOLUTION_FINDER_BUSINESS_TYPES,
  SOLUTION_FINDER_HELP_TYPES,
  recommendSolutionFromFinder,
} from '../utils/studioLogic';

export function SolutionFinder() {
  const [problem, setProblem] = useState<string>(SOLUTION_FINDER_PROBLEMS[0]);
  const [businessType, setBusinessType] = useState<string>(SOLUTION_FINDER_BUSINESS_TYPES[0]);
  const [helpNeeded, setHelpNeeded] = useState<string>(SOLUTION_FINDER_HELP_TYPES[0]);

  const recommendation = recommendSolutionFromFinder({
    problem,
    businessType,
    helpNeeded,
  });

  const enquiryUrl = `/enquire?problem=${encodeURIComponent(
    recommendation.mappedProblemCategory
  )}&material=${encodeURIComponent(
    `Organisation type: ${businessType.replace(/\.$/, '')}`
  )}&outcome=${encodeURIComponent(
    `${problem.replace(/\.$/, '')} — specifically looking for: ${helpNeeded.replace(/\.$/, '')}`
  )}`;

  return (
    <div className="bg-[#161822] border border-[#2C2F42] rounded-xl p-6 md:p-10 bg-blueprint-grid space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#2C2F42]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8B75FF]">
            <Compass className="w-4 h-4" />
            <span>Interactive Solution Finder · 3 Simple Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#F4F0E8]">
            Not sure which service fits your problem?
          </h2>
          <p className="text-sm sm:text-base text-[#A6A9B8] max-w-2xl">
            Pick the options that sound closest to your situation. This tool uses transparent,
            rule-based matching to point you to the most relevant service and a real example project.
          </p>
        </div>
        <span className="font-mono text-xs text-[#E6D3A7] bg-[#0E0F14] border border-[#2C2F42] px-3 py-1.5 rounded self-start md:self-auto">
          Rule-based matching · No fake AI claims
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3 Simple Questions */}
        <div className="lg:col-span-7 space-y-7">
          {/* Question 1 */}
          <div className="space-y-3">
            <label className="block font-mono text-xs text-[#E6D3A7]">
              Question 01 · What problem are you trying to solve?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SOLUTION_FINDER_PROBLEMS.map((option) => {
                const active = problem === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setProblem(option)}
                    className={`text-left px-4 py-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-start justify-between gap-2 ${
                      active
                        ? 'bg-[#8B75FF]/15 border-[#8B75FF] text-[#F4F0E8] font-medium shadow-sm'
                        : 'bg-[#0E0F14] border-[#2C2F42] text-[#A6A9B8] hover:border-[#8B75FF]/50 hover:text-[#F4F0E8]'
                    }`}
                  >
                    <span>{option}</span>
                    {active && <CheckCircle2 className="w-4 h-4 text-[#8B75FF] shrink-0 mt-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-3">
            <label className="block font-mono text-xs text-[#E6D3A7]">
              Question 02 · What kind of business or project is this?
            </label>
            <div className="flex flex-wrap gap-2.5">
              {SOLUTION_FINDER_BUSINESS_TYPES.map((option) => {
                const active = businessType === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBusinessType(option)}
                    className={`px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${
                      active
                        ? 'bg-[#D4AE5C] border-[#D4AE5C] text-[#0E0F14] font-medium'
                        : 'bg-[#0E0F14] border-[#2C2F42] text-[#A6A9B8] hover:border-[#D4AE5C]/60 hover:text-[#F4F0E8]'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-3">
            <label className="block font-mono text-xs text-[#E6D3A7]">
              Question 03 · What would help you most?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SOLUTION_FINDER_HELP_TYPES.map((option) => {
                const active = helpNeeded === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setHelpNeeded(option)}
                    className={`text-left px-4 py-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      active
                        ? 'bg-[#8B75FF]/15 border-[#8B75FF] text-[#F4F0E8] font-medium'
                        : 'bg-[#0E0F14] border-[#2C2F42] text-[#A6A9B8] hover:border-[#8B75FF]/50 hover:text-[#F4F0E8]'
                    }`}
                  >
                    <span>{option}</span>
                    {active && <CheckCircle2 className="w-4 h-4 text-[#8B75FF] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Recommended Solution Card */}
        <div className="lg:col-span-5 bg-[#0E0F14] border border-[#8B75FF]/60 rounded-xl p-6 md:p-7 space-y-6">
          <div className="space-y-2 pb-4 border-b border-[#2C2F42]">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-[#8B75FF]">Recommended Solution</span>
              <span className="font-mono text-xs text-[#E6D3A7]">
                Service {recommendation.recommendedService.number}
              </span>
            </div>
            <h3 className="font-display text-3xl text-[#F4F0E8]">
              {recommendation.recommendedService.title}
            </h3>
            <p className="text-xs text-[#E6D3A7]">
              {recommendation.recommendedService.plainTagline}
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-xs text-[#8B75FF]">Why It Matches Your Answers</p>
            <p className="text-sm text-[#F4F0E8] leading-relaxed">
              {recommendation.whyItMatches}
            </p>
          </div>

          {recommendation.supportingCapabilityNote && (
            <div className="bg-[#161822] border border-[#2C2F42] rounded-lg p-3.5 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#D4AE5C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#E6D3A7] leading-relaxed">
                {recommendation.supportingCapabilityNote}
              </p>
            </div>
          )}

          {/* Relevant Example Project */}
          <div className="bg-[#161822] border border-[#2C2F42] rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-[#D4AE5C] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Relevant Example Project
              </span>
              <span className="font-mono text-[11px] text-[#7AD992]">
                {recommendation.relevantProject.evidenceTypeLabel}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#F4F0E8]">
              {recommendation.relevantProject.indexNumber}. {recommendation.relevantProject.title}
            </p>
            <p className="text-xs text-[#A6A9B8] leading-relaxed">
              {recommendation.relevantProject.plainSubtitle}
            </p>
            <Link
              to={`/work/${recommendation.relevantProject.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8B75FF] hover:text-[#E6D3A7] pt-1 transition-colors"
            >
              <span>Inspect {recommendation.relevantProject.title} Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Suggested Next Step */}
          <div className="space-y-1.5">
            <p className="font-mono text-xs text-[#E6D3A7]">Suggested Next Step</p>
            <p className="text-xs text-[#A6A9B8] leading-relaxed">
              {recommendation.suggestedNextStep}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to={enquiryUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-medium text-[#0E0F14] bg-[#D4AE5C] hover:bg-[#E6D3A7] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Start an Enquiry With This Selection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[11px] text-[#A6A9B8] border-t border-[#2C2F42] pt-3">
            {recommendation.matchingMethodNote}
          </p>
        </div>
      </div>
    </div>
  );
}
