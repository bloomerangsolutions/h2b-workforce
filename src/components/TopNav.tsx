"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "./Icon";

const NAV_ITEMS = [
  { href: "/programs", label: "Programs" },
  { href: "/industries/landscaping", label: "Industries", match: "/industries" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (item: (typeof NAV_ITEMS)[number]) => {
    const matcher = item.match ?? item.href;
    return pathname === item.href || pathname.startsWith(matcher);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/12 bg-paper shadow-ambient">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl font-black tracking-tight text-navy">
          H2B Workforce
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-serif transition-all duration-200 ${
                  active
                    ? "border-b-2 border-copper pb-1 text-copper"
                    : "text-navy/80 hover:text-copper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="hidden rounded px-3 py-1 font-serif text-sm text-navy/80 transition-all hover:bg-navy/5 md:block"
            aria-label="Toggle language"
          >
            EN/ES
          </button>
          <Link
            href="/eligibility"
            className="hidden rounded-lg bg-copper px-6 py-2 font-serif font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#a0622a] active:scale-95 md:inline-block"
          >
            Check eligibility →
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="text-navy" />
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="border-t border-navy/12 bg-paper md:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 font-serif ${active ? "text-copper" : "text-navy/80"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/eligibility"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-copper px-6 py-3 text-center font-serif font-medium text-white"
            >
              Check eligibility →
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
