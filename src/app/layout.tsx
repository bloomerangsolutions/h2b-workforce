import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

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
  title: "H2B Workforce | Attorney-led seasonal labor solutions",
  description:
    "Hire your 2026 crew without the legal headache. Attorney-led H-2B visa processing for landscaping, roofing, hospitality, and seasonal trades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${workSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
