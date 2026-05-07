import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { BrandImage } from "@/components/BrandImage";
import { InitialAvatar } from "@/components/InitialAvatar";

export const metadata = {
  title: "About | H2B Workforce",
  description:
    "H2B Workforce was founded by immigration attorney Michael Lerner to bridge regulatory complexity and operational necessity for American trades.",
};

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main>
        {/* Hero */}
        <section className="mx-auto flex max-w-7xl flex-col items-start px-8 py-20">
          <span className="mb-4 block font-label text-xs font-semibold uppercase tracking-widest text-copper">
            Our Genesis
          </span>
          <h1 className="mb-6 max-w-3xl font-serif text-h1 text-navy">
            Built by an immigration attorney.
          </h1>
          <p className="max-w-2xl font-body text-body-lg text-navy/70">
            We believe that American labor shortages shouldn&apos;t hinder growth. H2B Workforce
            was founded to bridge the gap between regulatory complexity and operational necessity.
          </p>
        </section>

        {/* The Lerner Story */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <div className="overflow-hidden rounded-lg border border-navy/12 shadow-ambient md:col-span-5">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <BrandImage imageKey="legalBooks" alt="Legal library and attorney workspace" fill />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="mb-8 font-serif text-h2 text-navy">The Lerner story</h2>
              <div className="space-y-6 font-body text-navy/80">
                <p>
                  Michael Lerner didn&apos;t set out to build a tech platform. As a practicing
                  immigration attorney admitted in OH, IL, and IN, he saw firsthand how traditional
                  agencies often left business owners in the dark, navigating a labyrinth of DOL
                  and USCIS regulations without transparency.
                </p>
                <p>
                  He recognized that the trades (landscapers, roofers, hospitality managers)
                  didn&apos;t just need workers; they needed a legally bulletproof system that
                  worked at the speed of their business.
                </p>
                <div className="my-8 border-l-4 border-copper py-2 pl-6 font-serif text-lg italic text-navy">
                  &ldquo;The goal was simple: take the legal precision of a law firm and combine it
                  with the efficiency of modern technology to serve the backbone of American
                  industry.&rdquo;
                </div>
                <p>
                  Today, H2B Workforce stands as the realization of that vision. A platform
                  designed by experts who actually understand the law, built for employers who have
                  work to do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-32 border-y border-navy/12 bg-white py-24">
          <div className="mx-auto max-w-7xl px-8">
            <div className="mb-16">
              <h2 className="mb-2 font-serif text-h2 text-navy">Leadership</h2>
              <p className="font-body text-navy/60">
                Decades of combined experience in law, operations, and technology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <TeamCard name="Michael Lerner" role="Founder & Lead Counsel" />
              <TeamCard name="Eric Lerner" role="Director of Operations" />
              <TeamCard name="GDS Engineering" role="Technology Partner" />
            </div>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-h2 text-navy">Why we exist</h2>
              <p className="mb-8 font-body text-body-lg text-navy/80">
                For too long, the H-2B industry has been dominated by legacy firms like Mas Labor.
                While they have history, they often lack the modern transparency and tech-driven
                precision required in today&apos;s landscape.
              </p>
              <div className="space-y-4">
                <ValueRow
                  icon="verified"
                  title="Legal accountability"
                  body="Directly overseen by an attorney, not just a consultant group."
                />
                <ValueRow
                  icon="analytics"
                  title="Real-time tracking"
                  body="Know exactly where your petition stands at every moment."
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-navy p-12 text-paper">
              <div className="absolute right-0 top-0 p-8 opacity-10">
                <Icon name="gavel" className="text-9xl" />
              </div>
              <h3 className="mb-6 font-serif text-h3">Our mission</h3>
              <p className="font-serif text-xl italic leading-relaxed opacity-90">
                &ldquo;To provide American businesses with a transparent, legally superior, and
                frictionless H-2B experience, ensuring they have the workforce they need to
                thrive.&rdquo;
              </p>
              <div className="mt-12 flex items-center justify-between border-t border-paper/20 pt-8">
                <div className="font-mono text-copper">H2B-CORE-EST-2024</div>
                <div className="text-sm opacity-60">Mentor, OH</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bar Admission */}
        <section className="mx-auto mb-32 max-w-7xl px-8">
          <div className="rounded-lg border border-navy/12 bg-white/50 p-8 backdrop-blur">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <Icon name="balance" className="text-4xl text-copper" />
              </div>
              <div>
                <h4 className="mb-2 font-label text-xs font-semibold uppercase tracking-widest text-navy">
                  Professional Disclosure
                </h4>
                <p className="font-body text-sm leading-relaxed text-navy/70">
                  Attorney Michael Lerner is admitted to practice law in the states of Ohio,
                  Illinois, and Indiana. This platform provides logistical and management services
                  for H-2B petitions; however, all legal advice is provided directly through
                  authorized legal channels. This website constitutes attorney advertising in
                  certain jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-copper py-24">
          <div className="mx-auto max-w-3xl px-8 text-center">
            <h2 className="mb-8 font-serif text-h1 text-white">Ready to grow your workforce?</h2>
            <p className="mb-12 font-body text-body-lg text-white/90">
              Take the first step toward a more reliable labor pipeline with attorney-led
              precision.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/eligibility"
                className="rounded-lg bg-navy px-10 py-4 font-serif text-white transition-colors hover:bg-black"
              >
                Start Eligibility Check
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white bg-transparent px-10 py-4 font-serif text-white transition-colors hover:bg-white/10"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="group">
      <div className="mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-navy to-navy/80 transition-transform duration-500 group-hover:scale-[1.02]">
        <InitialAvatar name={name} size="xl" variant="paper" />
      </div>
      <h3 className="font-serif text-h3 text-navy">{name}</h3>
      <p className="mt-1 font-label text-xs font-semibold uppercase tracking-widest text-copper">
        {role}
      </p>
    </div>
  );
}

function ValueRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-4">
      <Icon name={icon} filled className="text-copper" />
      <div>
        <h4 className="font-bold text-navy">{title}</h4>
        <p className="text-sm text-navy/60">{body}</p>
      </div>
    </div>
  );
}
