import Link from "next/link";

const PROGRAMS = [
  { href: "/programs", label: "H-2B Seasonal" },
  { href: "/programs", label: "H-2A Agricultural" },
  { href: "/programs", label: "Compliance Audits" },
];

const RESOURCES = [
  { href: "/resources", label: "H-2B Cap Tracker" },
  { href: "/resources", label: "DOL Wage Tool" },
  { href: "/resources", label: "Housing Guide" },
  { href: "/privacy", label: "Privacy Policy" },
];

const CONNECT = [
  { href: "/eligibility", label: "Eligibility Quiz" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-navy py-16 text-paper/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 md:grid-cols-4">
        <div>
          <span className="mb-4 block font-serif text-2xl text-paper">H2B Workforce</span>
          <p className="mb-6 font-body text-sm">
            Attorney-led seasonal workforce solutions for American trades.
          </p>
          <p className="text-xs leading-relaxed">
            © 2026 H2B Workforce. 8039 Broadmoor Road, Mentor, OH 44060. Attorney Michael Lerner is
            admitted to practice in OH, IL, and IN.
          </p>
        </div>

        <FooterColumn title="Programs" items={PROGRAMS} />
        <FooterColumn title="Resources" items={RESOURCES} />
        <FooterColumn title="Connect" items={CONNECT} />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h5 className="mb-6 font-label text-xs font-semibold uppercase tracking-widest text-copper">
        {title}
      </h5>
      <ul className="space-y-4 font-body">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="transition-colors hover:text-copper">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
