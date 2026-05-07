import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { CTABanner } from "@/components/CTABanner";

export const metadata = {
  title: "Programs | H2B Workforce",
  description: "H-2B seasonal, H-2A agricultural, and compliance audit programs.",
};

const PROGRAMS = [
  {
    icon: "park",
    name: "H-2B Seasonal",
    description:
      "The flagship program for non-agricultural seasonal labor. Landscaping, roofing, hospitality, and trades.",
    cta: "View details",
    href: "/eligibility",
    primary: true,
  },
  {
    icon: "agriculture",
    name: "H-2A Agricultural",
    description:
      "For agricultural employers with seasonal or temporary labor needs. Different filing rules and requirements.",
    cta: "Get assessment",
    href: "/contact",
  },
  {
    icon: "verified",
    name: "Compliance Audits",
    description:
      "Already running an H-2B program? We audit existing filings and processes to identify risk before the DOL does.",
    cta: "Schedule audit",
    href: "/contact",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <TopNav />
      <main>
        <section className="mx-auto max-w-7xl px-8 py-24">
          <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
            Our Programs
          </span>
          <h1 className="mb-6 max-w-3xl font-serif text-h1 text-navy">
            Three programs. One legal team.
          </h1>
          <p className="mb-16 max-w-2xl font-body text-body-lg text-on-surface-variant">
            Whether you need seasonal trades labor, agricultural workers, or a compliance audit on
            an existing filing, we operate from the same legal-first foundation.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROGRAMS.map((program) => (
              <div
                key={program.name}
                className={`flex flex-col rounded-lg p-10 ${
                  program.primary
                    ? "bg-navy text-paper shadow-2xl"
                    : "border border-navy/12 bg-white shadow-ambient"
                }`}
              >
                <Icon
                  name={program.icon}
                  className={`mb-6 text-4xl ${program.primary ? "text-copper" : "text-copper"}`}
                />
                <h3
                  className={`mb-4 font-serif text-h3 ${
                    program.primary ? "text-paper" : "text-navy"
                  }`}
                >
                  {program.name}
                </h3>
                <p
                  className={`mb-8 flex-grow font-body ${
                    program.primary ? "text-paper/70" : "text-on-surface-variant"
                  }`}
                >
                  {program.description}
                </p>
                <Link
                  href={program.href}
                  className={`flex items-center gap-2 font-medium ${
                    program.primary ? "text-copper" : "text-copper"
                  } transition-all hover:gap-4`}
                >
                  {program.cta} <Icon name="arrow_forward" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <CTABanner
          variant="navy"
          title="Not sure which program fits?"
          body="A 15-minute call clarifies which program matches your business and your timeline."
          primaryLabel="Book a Consultation"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
