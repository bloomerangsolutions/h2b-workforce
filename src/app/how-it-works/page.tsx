import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";

export const metadata = {
  title: "How It Works | H2B Workforce",
  description:
    "From application to crew arrival in 12 weeks. The H-2B process broken down with industrial precision.",
};

export default function HowItWorksPage() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-7xl px-8">
        {/* Hero */}
        <section className="flex max-w-4xl flex-col items-start py-20">
          <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
            Proven Methodology
          </span>
          <h1 className="mb-6 font-serif text-h1 text-navy">
            From application to crew arrival in 12 weeks.
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
            The H-2B process is complex, but it doesn&apos;t have to be opaque. We&apos;ve refined a
            12-week timeline that manages legal compliance, recruitment, and logistics with
            industrial precision.
          </p>
        </section>

        {/* Vertical Timeline */}
        <section className="grid grid-cols-1 gap-12 pb-24 md:grid-cols-12">
          {/* Left: Timeline */}
          <div className="relative md:col-span-5">
            <div className="absolute bottom-0 left-4 top-0 w-px bg-navy/12" />
            <div className="space-y-16">
              <Stage num="01" label="WEEK 1-3" title="PWA Filing" body="Prevailing Wage Determination with the Department of Labor." active />
              <Stage num="02" label="WEEK 4-6" title="DOL Application" body="Filing the ETA 9142B and job order for local recruitment." />
              <Stage num="03" label="WEEK 7-8" title="Recruitment" body="Selection of qualified workers in Mexico and Central America." />
              <Stage num="04" label="WEEK 9-10" title="USCIS Petition" body="Submitting I-129 for final guest worker approval." />
            </div>
          </div>

          {/* Right: Detail Cards */}
          <div className="space-y-8 md:col-span-7">
            <div className="rounded border border-navy/12 bg-white p-10 shadow-ambient">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <span className="mb-4 inline-block border border-copper/30 px-2 py-1 font-label text-[10px] text-copper">
                    DETAILED VIEW: STAGE 01
                  </span>
                  <h2 className="font-serif text-h2 text-navy">Prevailing Wage Filing</h2>
                </div>
                <Icon name="description" className="text-4xl text-navy/20" />
              </div>
              <div className="mb-8 grid grid-cols-2 gap-8">
                <div>
                  <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    Who&apos;s Involved
                  </span>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      <span className="font-body">Compliance Attorney</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                      <span className="font-body">Department of Labor</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="mb-2 block font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
                    Est. Timeline
                  </span>
                  <span className="font-mono text-h3 text-navy">14 - 21 Days</span>
                </div>
              </div>
              <div className="border border-navy/12 bg-paper p-6">
                <span className="mb-2 block font-label text-[11px] text-navy">
                  EMPLOYER RESPONSIBILITY
                </span>
                <p className="font-body text-on-surface-variant">
                  You provide detailed job descriptions, work locations, and historic pay rates. We
                  translate these into DOL-compliant formats to ensure no delays in wage
                  determination.
                </p>
              </div>
            </div>

            <div className="border border-navy/12 bg-white p-10 opacity-50">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-h3 text-navy">Stage 02: Recruitment Strategy</h3>
                <Icon name="lock" className="text-2xl text-navy/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Transparency: What Can Go Wrong */}
        <section className="border-t border-navy/8 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="mb-6 font-serif text-h2 text-navy">Radical transparency</h2>
              <p className="text-on-surface-variant">
                The H-2B program has inherent risks. We don&apos;t hide them; we build
                contingencies for them.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-2">
              <RiskCard
                icon="warning"
                title="The H-2B cap"
                body="Visas are limited and issued twice yearly. If the cap is met, even approved petitions can be delayed."
                fix="We file on the first possible micro-second of the window."
              />
              <RiskCard
                icon="security"
                title="Audit requests"
                body="The DOL randomly selects 10% of filings for full audits."
                fix="Our internal legal team 'pre-audits' every file to ensure documentation is bulletproof."
              />
              <RiskCard
                icon="flight_takeoff"
                title="Consulate delays"
                body="Local consulate backlogs in worker home countries can stall arrivals."
                fix="We maintain local coordinators in Monterrey and San Salvador to manage logistics."
              />
              <RiskCard
                icon="group_off"
                title="Worker no-shows"
                body="Rare, but occurs when workers find other opportunities last minute."
                fix="We maintain a 15% reserve pool of pre-vetted candidates ready for immediate swap."
              />
            </div>
          </div>
        </section>

        {/* Why DIY Section */}
        <section className="-mx-8 bg-navy px-8 py-24">
          <div className="mx-auto mb-16 max-w-7xl text-center">
            <h2 className="font-serif text-h2 text-white">Why our process beats DIY</h2>
          </div>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            <DIYCard
              num="01."
              title="Internal legal counsel"
              body="Most agencies outsource legal work. We don't. Our attorneys are involved from the first intake call to ensure total compliance."
            />
            <DIYCard
              num="02."
              title="Direct recruitment"
              body="We own our recruitment network in Mexico. No middle-men, no broker fees for workers, and total control over candidate vetting."
            />
            <DIYCard
              num="03."
              title="The Cap Guard"
              body="Our proprietary software monitors DOL and USCIS load times in real-time, allowing us to submit at high-probability windows."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <h2 className="mb-8 font-serif text-h2 text-navy">Ready to secure your crew?</h2>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Link
              href="/eligibility"
              className="rounded bg-copper px-10 py-4 font-serif text-h3 text-white transition-all hover:opacity-90 active:scale-95"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/resources"
              className="rounded border border-navy px-10 py-4 font-serif text-h3 text-navy transition-all hover:bg-navy/5"
            >
              Download Process Guide
            </Link>
          </div>
          <p className="mt-8 font-mono text-xs text-on-surface-variant">
            NEXT ENROLLMENT WINDOW CLOSES IN 14 DAYS
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stage({
  num,
  label,
  title,
  body,
  active = false,
}: {
  num: string;
  label: string;
  title: string;
  body: string;
  active?: boolean;
}) {
  return (
    <div className="relative pl-12">
      <div
        className={`absolute left-0 top-1 z-10 flex h-8 w-8 items-center justify-center rounded-full ${
          active ? "bg-navy" : "border-2 border-navy bg-white"
        }`}
      >
        <span className={`font-mono text-[12px] ${active ? "text-white" : "text-navy"}`}>
          {num}
        </span>
      </div>
      <h3 className="mb-2 font-serif text-h3 text-navy">{title}</h3>
      <p className="text-on-surface-variant">{body}</p>
      <span className="mt-2 block font-mono text-xs text-copper">{label}</span>
    </div>
  );
}

function RiskCard({
  icon,
  title,
  body,
  fix,
}: {
  icon: string;
  title: string;
  body: string;
  fix: string;
}) {
  return (
    <div className="border border-navy/12 bg-white p-8">
      <Icon name={icon} className="mb-4 text-copper" />
      <h4 className="mb-3 font-serif text-xl text-navy">{title}</h4>
      <p className="text-sm text-on-surface-variant">
        {body}{" "}
        <strong className="text-navy">Our fix:</strong> {fix}
      </p>
    </div>
  );
}

function DIYCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="border border-white/10 p-10 transition-colors hover:border-copper/50">
      <span className="mb-6 block font-mono text-[40px] text-white/10">{num}</span>
      <h4 className="mb-4 font-serif text-h3 text-white">{title}</h4>
      <p className="text-white/60">{body}</p>
    </div>
  );
}
