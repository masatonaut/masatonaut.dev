import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const accentColors = ["#E85D3A", "#5B8DEF", "#D4A853", "#4CAF82", "#2D2D2D"];

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
          backgroundColor: "#FAFAF8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Main text */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#1A1A1A",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          masatonaut
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#6B6B6B",
            marginBottom: 60,
          }}
        >
          AI Engineer • Indie Maker
        </div>

        {/* Choimo dots */}
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {accentColors.map((color, i) => (
            <div
              key={i}
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
