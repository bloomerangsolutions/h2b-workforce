import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Attorney-led seasonal labor solutions`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "H-2B visa",
    "seasonal workers",
    "landscaping labor",
    "roofing labor",
    "immigration attorney",
    "DOL filing",
    "USCIS H-2B",
    "Mas Labor alternative",
    "H-2B Ohio",
    "H-2B Indiana",
  ],
  authors: [{ name: SITE.attorney.name }],
  openGraph: {
    title: `${SITE.name} — Hire your 2026 crew without the legal headache`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD structured data: LegalService schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    areaServed: { "@type": "Country", name: "United States" },
    founder: { "@type": "Person", name: SITE.attorney.name },
    knowsAbout: ["H-2B Visa", "Seasonal Labor", "Immigration Law", "DOL Filing"],
  };

  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${workSans.variable}`}
    >
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
