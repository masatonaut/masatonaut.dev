import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090B",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#FAFAFA",
            marginBottom: 16,
            letterSpacing: "-0.03em",
          }}
        >
          Masato Ito
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#A1A1AA",
            marginBottom: 48,
          }}
        >
          AI Engineer &amp; Indie Maker
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#52525B",
          }}
        >
          kyren.app &middot; masatonaut.dev
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
