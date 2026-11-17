import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "MockAcademy — free PRINCE2 7th edition Foundation mock exams and illustrated lessons";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const brand = {
  gold: "#F2C230",
  plum: "#A65EA4",
  magenta: "#EE3F80",
  navy: "#1F2B59",
  cream: "#FBF8F1",
  lavender: "#EFE4F4",
  amber: "#FCEFC7",
  mint: "#DDF2E7",
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

export default async function Image() {
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
          padding: "56px 64px 48px",
          fontFamily: "Montserrat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -130,
            width: 440,
            height: 440,
            borderRadius: 440,
            background: brand.lavender,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -170,
            left: -110,
            width: 360,
            height: 360,
            borderRadius: 360,
            background: brand.amber,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg viewBox="0 0 40 40" width={56} height={56}>
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
          <div style={{ display: "flex", fontSize: 32, fontWeight: 600, color: brand.navy }}>
            MockAcademy
            <span style={{ color: brand.magenta }}>.org</span>
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
              marginTop: 14,
              fontSize: 62,
              fontWeight: 800,
              color: brand.navy,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Free mock exams and illustrated lessons.
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
            {["60-question papers", "66 illustrated sessions", "£0 forever"].map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  background: brand.mint,
                  color: brand.navy,
                  borderRadius: 999,
                  padding: "10px 22px",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 14, color: "#8B8FA8" }}>
          PRINCE2® is a registered trademark of the PeopleCert group. MockAcademy is independent
          and not affiliated with, endorsed by or licensed by PeopleCert.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: regular, weight: 400, style: "normal" },
        { name: "Montserrat", data: semibold, weight: 600, style: "normal" },
        { name: "Montserrat", data: extrabold, weight: 800, style: "normal" },
      ],
    },
  );
}
