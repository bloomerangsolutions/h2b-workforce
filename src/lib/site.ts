// Site-wide data. Update here, propagates everywhere.

export const SITE = {
  name: "H2B Workforce",
  url: "https://h2b-workforce.vercel.app",
  description:
    "Attorney-led H-2B visa processing for landscaping, roofing, hospitality, and seasonal trades. Hire your 2026 crew without the legal headache.",
  email: "hello@h2bworkforce.com",
  phone: "(440) 555-0142",
  address: {
    street: "8039 Broadmoor Road",
    city: "Mentor",
    state: "OH",
    zip: "44060",
  },
  attorney: {
    name: "Michael Lerner",
    barAdmissions: ["OH", "IL", "IN"],
  },
} as const;

export const CAP_STATUS = {
  asOf: "2m ago",
  firstHalf: { used: 33000, total: 33000, label: "1st Half (Oct 1 Start)" },
  secondHalf: { used: 20550, total: 33000, label: "2nd Half (April 1 Start)" },
} as const;

export const PRICING_TIERS = [
  {
    id: "self-serve",
    name: "Self-Serve",
    price: 4500,
    priceLabel: "$4,500",
    tagline: "Digital infrastructure for the DIY business owner.",
    features: ["Document preparation software", "Filing deadline tracking", "Email support"],
    cta: "Start for free",
    highlighted: false,
  },
  {
    id: "attorney-reviewed",
    name: "Attorney-Reviewed",
    price: 7500,
    priceLabel: "$7,500",
    tagline: "Peace of mind for scaling landscaping & roofing ops.",
    features: [
      "Everything in Self-Serve",
      "Full attorney audit of filings",
      "RFE protection guarantee",
      "Priority phone support",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    id: "white-glove",
    name: "White-Glove",
    price: 11500,
    priceLabel: "$11,500",
    tagline: "Total hands-off management for large fleets.",
    features: [
      "Everything in Attorney-Reviewed",
      "Recruitment & housing coordination",
      "Dedicated account manager",
      "On-site audit preparation",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
] as const;

// Verified Unsplash photo IDs. All return 200 from images.unsplash.com.
export const IMAGES = {
  heroLandscaping: "1416879595882-3373a0480b5b",
  attorneyDesk: "1461988320302-91bde64fc8e4",
  blueprints: "1503387762-592deb58ef4e",
  goldenHourCrew: "1581094271901-8022df4466f9",
  industrialWorkers: "1504307651254-35680f356dfd",
  modernOffice: "1497366216548-37526070297c",
  teamMeeting: "1521737604893-d14cc237f11d",
  abstractArchitecture: "1485827404703-89b55fcc595e",
  legalBooks: "1486406146926-c627a92ad1ab",
  geometricBuilding: "1542621334-a254cf47733d",
  sunsetField: "1454165804606-c3d57bc86b40",
  contractor: "1581092580497-e0d23cbdf1dc",
  toolsBackground: "1572177812156-58036aae439c",
  workersOnSite: "1581094288338-2314dddb7ece",
  warehouse: "1567496898669-ee935f5f647a",
  documentsDesk: "1521791136064-7986c2920216",
} as const;

export const unsplashUrl = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;

export type ImageKey = keyof typeof IMAGES;
