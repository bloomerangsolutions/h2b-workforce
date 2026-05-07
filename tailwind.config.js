/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        copper: "#B87333",
        paper: "#FAF8F4",
        "on-tertiary-container": "#009842",
        "on-surface-variant": "#44474c",
        "on-surface": "#1b1b1d",
        "surface-container-lowest": "#ffffff",
        error: "#ba1a1a",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "section-gap": "80px",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
        label: ["var(--font-work-sans)", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        h2: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "data-mono": ["14px", { lineHeight: "1", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      boxShadow: {
        ambient: "0px 4px 20px rgba(13, 27, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
