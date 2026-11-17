import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

const brand = {
  gold: "#F2C230",
  plum: "#A65EA4",
  magenta: "#EE3F80",
  navy: "#1F2B59",
  cream: "#FBF8F1",
  lavender: "#EFE4F4",
  mint: "#DDF2E7",
  amber: "#FCEFC7",
};

const examTitles: Record<string, string> = {
  mock: "Foundation Mock Exam",
  simulator: "Foundation Exam Simulator",
};

async function loadFont(weight: 400 | 600 | 800) {
  const buffer = await readFile(
    path.join(
      process.cwd(),
      `src/app/api/share-card/fonts/montserrat-latin-${weight}-normal.woff`,
    ),
  );
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const percent = Math.min(100, Math.max(0, Number(params.get("percent")) || 0));
  const passed = params.get("passed") === "1";
  const examTitle = examTitles[params.get("exam") ?? ""] ?? examTitles.simulator;

  const [regular, semibold, extrabold] = await Promise.all([
    loadFont(400),
    loadFont(600),
    loadFont(800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brand.cream,
          padding: "56px 64px 40px",
          fontFamily: "Montserrat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: brand.lavender,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 340,
            height: 340,
            borderRadius: 340,
            background: brand.amber,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg viewBox="0 0 40 40" width={52} height={52}>
              <rect x="1.5" y="1.5" width="15" height="15" rx="1.8" fill={brand.gold} />
              <rect x="1.5" y="20.5" width="15" height="15" rx="1.8" fill={brand.plum} />
              <rect x="20.5" y="20.5" width="15" height="15" rx="1.8" fill={brand.magenta} />
              <path
                d="M21 11.2l4.8 5.3L35.4 5.4"
                fill="none"
                stroke={brand.navy}
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: brand.navy }}>
              MockAcademy
              <span style={{ color: brand.magenta }}>.org</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: passed ? brand.mint : "#FFFFFF",
              color: brand.navy,
              borderRadius: 999,
              padding: "10px 24px",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {passed ? (
              <svg viewBox="0 0 24 24" width={22} height={22}>
                <path
                  d="M4 12.5l5.5 6L20 6.5"
                  fill="none"
                  stroke={brand.navy}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
            {passed ? "Passed" : "Practice attempt"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4,
              color: brand.plum,
            }}
          >
            PRINCE2® 7TH EDITION FOUNDATION
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              fontSize: 40,
              fontWeight: 600,
              color: brand.navy,
            }}
          >
            {examTitle}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 8 }}>
            <span style={{ fontSize: 150, fontWeight: 800, color: brand.navy, lineHeight: 1.1 }}>
              {percent}%
            </span>
            <span style={{ fontSize: 30, fontWeight: 600, color: brand.plum, marginLeft: 20 }}>
              {passed ? "above the 60% pass mark" : "on the way to the 60% pass mark"}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 26, fontWeight: 600, color: brand.navy }}>
              Sit the free mock exam → mockacademy.org
            </div>
            <div style={{ display: "flex", fontSize: 14, color: "#8B8FA8" }}>
              PRINCE2® is a registered trademark of the PeopleCert group. MockAcademy is
              independent and not affiliated with, endorsed by or licensed by PeopleCert.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Montserrat", data: regular, weight: 400, style: "normal" },
        { name: "Montserrat", data: semibold, weight: 600, style: "normal" },
        { name: "Montserrat", data: extrabold, weight: 800, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=86400, immutable" },
    },
  );
}
