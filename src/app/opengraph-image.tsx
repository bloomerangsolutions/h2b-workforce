import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = "H2B Workforce — attorney-led seasonal labor solutions";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0D1B2A",
          color: "#FAF8F4",
          padding: "80px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(184,115,51,0.15) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#B87333",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          H2B Workforce
        </div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            display: "flex",
          }}
        >
          Hire your 2026 crew without the legal headache.
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 28,
            color: "rgba(250,248,244,0.7)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span>Attorney-led H-2B visa processing for American trades</span>
          <span style={{ color: "#B87333", fontWeight: 700 }}>h2bworkforce.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
