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
  muted: "#8B8FA8",
};

const examStyles: Record<
  string,
  { title: string; edition: string; passText: string }
> = {
  mock: {
    title: "Foundation Mock Exam",
    edition: "PRINCE2® 7TH EDITION FOUNDATION",
    passText: "60% pass mark",
  },
  simulator: {
    title: "Foundation Exam Simulator",
    edition: "PRINCE2® 7TH EDITION FOUNDATION",
    passText: "60% pass mark",
  },
  practitioner: {
    title: "Practitioner Mock Exam",
    edition: "PRINCE2® 7TH EDITION PRACTITIONER",
    passText: "38-mark pass mark",
  },
  ielts: {
    title: "IELTS Academic Reading Mock Test",
    edition: "IELTS ACADEMIC READING",
    passText: "23 of 40 pass mark",
  },
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
  const style = examStyles[params.get("exam") ?? ""] ?? examStyles.simulator;
  const name = ((params.get("name") ?? "").trim() || "MockAcademy learner").slice(0, 40);
  const issued = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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
          background: brand.navy,
          padding: 54,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: brand.cream,
            border: `4px solid ${brand.gold}`,
            padding: "84px 110px 56px",
            position: "relative",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -180,
              right: -180,
              width: 480,
              height: 480,
              borderRadius: 480,
              background: brand.lavender,
              display: "flex",
              opacity: 0.55,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -200,
              left: -160,
              width: 420,
              height: 420,
              borderRadius: 420,
              background: brand.amber,
              display: "flex",
              opacity: 0.5,
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <svg viewBox="0 0 40 40" width={84} height={84}>
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
            <div style={{ display: "flex", fontSize: 48, fontWeight: 600, color: brand.navy }}>
              MockAcademy
              <span style={{ color: brand.magenta }}>.org</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 210,
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: 10,
              color: brand.plum,
            }}
          >
            MOCK EXAM SCORE CARD
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 120,
              fontSize: 130,
              fontWeight: 800,
              color: brand.navy,
              lineHeight: 1.1,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 84,
              width: 520,
              height: 7,
              background: brand.gold,
            }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 140,
              fontSize: 34,
              fontWeight: 400,
              color: brand.muted,
            }}
          >
            for completing the
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 64,
              fontWeight: 600,
              color: brand.navy,
            }}
          >
            {style.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 6,
              color: brand.plum,
            }}
          >
            {style.edition}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 160,
              background: passed ? brand.mint : "#FFFFFF",
              border: `2px solid ${passed ? brand.navy : brand.muted}`,
              color: brand.navy,
              borderRadius: 999,
              padding: "16px 44px",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            {passed ? (
              <svg viewBox="0 0 24 24" width={30} height={30}>
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

          <div style={{ display: "flex", alignItems: "baseline", marginTop: 120 }}>
            <span style={{ fontSize: 340, fontWeight: 800, color: brand.navy, lineHeight: 1 }}>
              {percent}
            </span>
            <span style={{ fontSize: 150, fontWeight: 800, color: brand.plum, marginLeft: 12 }}>
              %
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 44,
              fontSize: 44,
              fontWeight: 600,
              color: brand.plum,
            }}
          >
            {passed
              ? `above the ${style.passText}`
              : `on the way to the ${style.passText}`}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "auto",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: brand.navy }}>
                Issued {issued}
              </div>
              <div style={{ display: "flex", fontSize: 26, fontWeight: 400, color: brand.muted }}>
                mockacademy.org
              </div>
            </div>
            <svg viewBox="0 0 40 40" width={72} height={72}>
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              marginTop: 40,
              fontSize: 21,
              fontWeight: 400,
              color: brand.muted,
            }}
          >
            <div style={{ display: "flex" }}>
              Practice result from a free MockAcademy paper — not an examination
              certification.
            </div>
            <div style={{ display: "flex" }}>
              PRINCE2® is a registered trademark of the PeopleCert group.
              MockAcademy is independent and not affiliated with, endorsed by or
              licensed by PeopleCert.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 2160,
      height: 2700,
      fonts: [
        { name: "Montserrat", data: regular, weight: 400, style: "normal" },
        { name: "Montserrat", data: semibold, weight: 600, style: "normal" },
        { name: "Montserrat", data: extrabold, weight: 800, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=86400, immutable" },
    },
  );
}
