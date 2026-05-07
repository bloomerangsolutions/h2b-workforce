"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

type Question = {
  id: string;
  question: string;
  context: string;
  options: { letter: string; text: string; qualifies: boolean }[];
};

const QUESTIONS: Question[] = [
  {
    id: "industry",
    question: "Which best describes your industry?",
    context:
      "H-2B is for non-agricultural seasonal work. Common qualifying industries include landscaping, roofing, hospitality, and construction.",
    options: [
      { letter: "A", text: "Landscaping, roofing, or construction trades", qualifies: true },
      { letter: "B", text: "Hospitality, food service, or seasonal resort operations", qualifies: true },
      { letter: "C", text: "Agricultural / farm work", qualifies: false },
      { letter: "D", text: "Permanent professional services (tech, legal, finance)", qualifies: false },
    ],
  },
  {
    id: "us-business",
    question: "Are you a US-based business with a Federal Employer Identification Number (FEIN)?",
    context:
      "H-2B requires a registered US employer. Sole proprietors, LLCs, and corporations all qualify as long as they have a FEIN and a physical US address.",
    options: [
      { letter: "A", text: "Yes, we have a FEIN and US address", qualifies: true },
      { letter: "B", text: "No, we operate internationally", qualifies: false },
    ],
  },
  {
    id: "seasonality",
    question:
      "Does your business experience a seasonal peak or one-time occurrence that requires additional labor?",
    context:
      "To qualify for H-2B, an employer must establish that its need for the worker's services is temporary and falls into one of four categories: One-time occurrence, Seasonal need, Peak-load need, or Intermittent need.",
    options: [
      { letter: "A", text: "Yes, we have a recurring seasonal need (e.g., Summer/Winter peak)", qualifies: true },
      { letter: "B", text: "Yes, we have a one-time project or intermittent need", qualifies: true },
      { letter: "C", text: "No, our labor needs are consistent year-round", qualifies: false },
    ],
  },
  {
    id: "duration",
    question: "How long is your peak labor need?",
    context:
      "H-2B visas are typically issued for periods of 9-10 months. Your seasonal need should align with these durations.",
    options: [
      { letter: "A", text: "3-6 months", qualifies: true },
      { letter: "B", text: "6-9 months", qualifies: true },
      { letter: "C", text: "More than 10 months continuously", qualifies: false },
    ],
  },
  {
    id: "workers",
    question: "How many workers do you need this season?",
    context:
      "There's no minimum, but most successful petitions request 5-50 workers. We can support requests of any size with the right strategy.",
    options: [
      { letter: "A", text: "1-9 workers", qualifies: true },
      { letter: "B", text: "10-49 workers", qualifies: true },
      { letter: "C", text: "50+ workers", qualifies: true },
    ],
  },
  {
    id: "timeline",
    question: "When do you need workers to arrive?",
    context:
      "Filing windows are tight. April 1 start dates require recruitment to begin by December. October 1 starts require July recruitment.",
    options: [
      { letter: "A", text: "April 2026 (spring season)", qualifies: true },
      { letter: "B", text: "October 2026 (winter season)", qualifies: true },
      { letter: "C", text: "Within 30 days", qualifies: false },
    ],
  },
  {
    id: "housing",
    question:
      "Are you prepared to assist workers with finding housing (or provide it) per DOL standards?",
    context:
      "Most landscaping employers deduct compliant housing costs from weekly wages. We help source compliant housing solutions.",
    options: [
      { letter: "A", text: "Yes, we can provide or assist with compliant housing", qualifies: true },
      { letter: "B", text: "We need help understanding the housing requirements", qualifies: true },
      { letter: "C", text: "No, we cannot help with housing at all", qualifies: false },
    ],
  },
];

export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const currentQ = QUESTIONS[step];
  const progress = Math.round(((step + (done ? 1 : 0)) / total) * 100);

  const select = (letter: string) => {
    setAnswers({ ...answers, [currentQ.id]: letter });
  };

  const next = () => {
    if (!answers[currentQ.id]) return;
    if (step + 1 >= total) {
      setDone(true);
      return;
    }
    setStep(step + 1);
  };

  const prev = () => {
    if (done) {
      setDone(false);
      return;
    }
    if (step === 0) return;
    setStep(step - 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  // Determine eligibility based on disqualifying answers
  const qualifies = QUESTIONS.every((q) => {
    const a = answers[q.id];
    if (!a) return false;
    return q.options.find((o) => o.letter === a)?.qualifies ?? false;
  });

  return (
    <>
      {/* Simplified Top Nav */}
      <nav className="sticky top-0 z-50 border-b border-navy/12 bg-paper shadow-ambient">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4">
          <Link href="/" className="font-serif text-xl font-black tracking-tight text-navy">
            H2B Workforce
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant md:block">
              Assessment in progress
            </span>
            <Link
              href="/"
              className="font-body text-navy/80 transition-all hover:text-copper"
            >
              Exit Quiz
            </Link>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        {!done ? (
          <>
            {/* Hero */}
            <section className="mx-auto max-w-7xl px-8 pb-12 pt-20">
              <div className="max-w-3xl">
                <h1 className="mb-4 font-serif text-h1 text-navy">Are you eligible for H-2B?</h1>
                <p className="font-body text-body-lg text-on-surface-variant">
                  Take our 2-minute assessment to determine if your business qualifies for the H-2B
                  non-agricultural seasonal worker program.
                </p>
              </div>
            </section>

            {/* Quiz */}
            <section className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-8 pb-24">
              <div className="col-span-12 lg:col-span-8">
                <div className="mb-8">
                  <div className="mb-4 flex items-end justify-between">
                    <span className="font-label text-xs font-semibold uppercase tracking-widest text-copper">
                      Question {step + 1} of {total}
                    </span>
                    <span className="font-mono text-sm">{progress}% Complete</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-navy/12">
                    <div
                      className="h-full bg-copper transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-navy/12 bg-white p-10 shadow-ambient">
                  <h2 className="mb-8 font-serif text-h2 leading-tight text-navy">
                    {currentQ.question}
                  </h2>
                  <div className="space-y-4">
                    {currentQ.options.map((opt) => {
                      const selected = answers[currentQ.id] === opt.letter;
                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          onClick={() => select(opt.letter)}
                          className={`flex w-full items-center justify-between p-6 text-left transition-all active:scale-[0.98] ${
                            selected
                              ? "border-2 border-copper bg-copper/5"
                              : "border border-navy/12 hover:border-copper/50"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className={`flex h-8 w-8 items-center justify-center border font-mono ${
                                selected
                                  ? "border-copper text-copper"
                                  : "border-navy/20 text-on-surface-variant"
                              }`}
                            >
                              {opt.letter}
                            </span>
                            <span className="font-body text-body-lg">{opt.text}</span>
                          </div>
                          {selected ? (
                            <Icon name="check_circle" filled className="text-copper" />
                          ) : null}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-12 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prev}
                      disabled={step === 0}
                      className="flex items-center gap-2 font-body text-on-surface-variant transition-colors hover:text-navy disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Icon name="arrow_back" />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      disabled={!answers[currentQ.id]}
                      className="rounded-lg bg-copper px-10 py-4 font-body font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {step + 1 === total ? "See Results →" : "Next Question →"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:col-span-4 lg:block">
                <div className="space-y-8 rounded-lg bg-navy p-8 text-white">
                  <div>
                    <Icon name="gavel" className="mb-4 text-copper" style={{ fontSize: "32px" }} />
                    <h3 className="mb-2 font-serif text-h3">Legal context</h3>
                    <p className="font-body text-white/70">{currentQ.context}</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-body italic text-white/60">
                      &ldquo;The H-2B program is designed for non-agricultural work. If your
                      business is agricultural, you may need an H-2A visa assessment instead.&rdquo;
                    </p>
                  </div>
                </div>
              </aside>
            </section>
          </>
        ) : (
          <ResultScreen qualifies={qualifies} onRestart={restart} />
        )}
      </main>
    </>
  );
}

function ResultScreen({ qualifies, onRestart }: { qualifies: boolean; onRestart: () => void }) {
  return (
    <section className="border-y border-navy/12 bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1 ${
                qualifies
                  ? "bg-on-tertiary-container/10 text-on-tertiary-container"
                  : "bg-error/10 text-error"
              }`}
            >
              <Icon
                name={qualifies ? "verified" : "info"}
                className="text-[18px]"
              />
              <span className="font-label text-xs font-semibold uppercase tracking-widest">
                Your Result
              </span>
            </div>
            <h2 className="mb-6 font-serif text-h1 text-navy">
              {qualifies ? "You qualify." : "Let's talk."}
            </h2>
            <p className="mb-8 font-body text-body-lg text-on-surface-variant">
              {qualifies
                ? "Based on your preliminary answers, your business profile matches the H-2B visa requirements for seasonal labor. Here is your roadmap to securing your workforce for the upcoming season."
                : "Some of your answers fall outside standard H-2B eligibility, but that doesn't mean we can't help. There are alternative visa programs (H-2A, H-1B, J-1) and structural changes that may make you eligible. Schedule a consultation to discuss your specific situation."}
            </p>
            {qualifies ? (
              <ul className="mb-10 space-y-6">
                <RoadmapStep
                  num="01"
                  title="Department of Labor filing"
                  body="Submit a prevailing wage request and temporary labor certification."
                />
                <RoadmapStep
                  num="02"
                  title="Recruitment period"
                  body="Conduct mandatory domestic recruitment to ensure no US workers are displaced."
                />
                <RoadmapStep
                  num="03"
                  title="Visa adjudication"
                  body="USCIS review and Consular processing for international workers."
                />
              </ul>
            ) : null}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-copper px-8 py-4 font-body font-bold text-white shadow-xl transition-all hover:brightness-110 active:scale-95"
              >
                Schedule a Consultation
              </Link>
              <button
                type="button"
                onClick={onRestart}
                className="rounded-lg border border-navy px-8 py-4 font-body font-bold text-navy transition-all hover:bg-navy hover:text-white"
              >
                Restart Quiz
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -rotate-2 rounded-xl bg-copper/5" />
            <div className="relative flex h-[500px] w-full items-center justify-center rounded-lg border border-navy/12 bg-navy shadow-2xl">
              <Icon
                name={qualifies ? "verified" : "support_agent"}
                className="text-copper"
                style={{ fontSize: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapStep({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="font-mono text-xl text-copper">{num}</span>
      <div>
        <h4 className="font-body text-body-lg font-bold text-navy">{title}</h4>
        <p className="font-body text-on-surface-variant">{body}</p>
      </div>
    </li>
  );
}
