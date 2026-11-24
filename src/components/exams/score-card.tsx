"use client";

import type { CSSProperties, Ref } from "react";
import { SCORE_CARD_WATERMARK } from "./score-card-watermark";

export const SCORE_CARD_WIDTH = 1080;
export const SCORE_CARD_HEIGHT = 1350;

const teal = "#00BFA5";
const tealDeep = "#00AD98";
const charcoal = "#303333";
const ink = "#111414";
const font = "var(--font-montserrat), Montserrat, Arial, sans-serif";

const canvas: CSSProperties = {
  width: SCORE_CARD_WIDTH,
  height: SCORE_CARD_HEIGHT,
  padding: 16,
  background: charcoal,
  boxShadow: "0 18px 55px rgba(0,0,0,.16)",
  overflow: "hidden",
  boxSizing: "border-box",
  fontFamily: font,
};

const tealFrame: CSSProperties = {
  width: "100%",
  height: "100%",
  padding: 18,
  background: teal,
  boxSizing: "border-box",
};

const paper: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  background: "#FFFFFF",
  borderRadius: 18,
  padding: "48px 54px 34px",
  color: ink,
  boxSizing: "border-box",
};

const watermark: CSSProperties = {
  position: "absolute",
  width: 650,
  height: 650,
  objectFit: "contain",
  left: "50%",
  top: 465,
  transform: "translateX(-50%)",
  zIndex: 0,
  pointerEvents: "none",
};

const layer: CSSProperties = { position: "relative", zIndex: 1 };

const brand: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  color: "#1F2B59",
  fontSize: 43,
  lineHeight: 1,
  fontWeight: 600,
  letterSpacing: "-1.7px",
};

const center = (marginTop: number, extra: CSSProperties = {}): CSSProperties => ({
  marginTop,
  textAlign: "center",
  ...extra,
});

export function ScoreCard({
  name,
  percent,
  passed,
  examTitle,
  editionLine,
  passMarkLine,
  issued,
  ref,
}: {
  name: string;
  percent: number;
  passed: boolean;
  examTitle: string;
  editionLine: string;
  passMarkLine: string;
  issued: string;
  ref?: Ref<HTMLDivElement>;
}) {
  const statusBadge = passed ? "Passed" : "Practice attempt";

  return (
    <div ref={ref} style={canvas} aria-label="MockAcademy mock exam score card">
      <div style={tealFrame}>
        <section style={paper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SCORE_CARD_WATERMARK} alt="" aria-hidden="true" style={watermark} />
          <div style={layer}>
            <header style={brand}>
              <svg
                width={43}
                height={43}
                viewBox="0 0 40 40"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flex: "0 0 43px", display: "block" }}
              >
                <rect x="1.5" y="1.5" width="15" height="15" rx="1.8" fill="#F2C230" />
                <rect x="1.5" y="20.5" width="15" height="15" rx="1.8" fill="#A65EA4" />
                <rect x="20.5" y="20.5" width="15" height="15" rx="1.8" fill="#EE3F80" />
                <path
                  d="M21 11.2l4.8 5.3L35.4 5.4"
                  fill="none"
                  stroke="#1F2B59"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                MockAcademy
                <span style={{ fontWeight: 400, fontSize: 30, letterSpacing: "-1px", color: "#EE3F80" }}>
                  .org
                </span>
              </span>
            </header>

            <div style={center(91, { color: "#222727", fontSize: 20, fontWeight: 800, letterSpacing: "3.5px" })}>
              MOCK EXAM SCORE CARD
            </div>
            <div style={center(27, { fontSize: 22, fontWeight: 600 })}>This is to recognise</div>
            <div style={center(10, { fontSize: 63, lineHeight: 1.14, fontWeight: 800, letterSpacing: "-2px" })}>
              {name}
            </div>

            <div style={center(39, { fontSize: 20, fontWeight: 600 })}>Your practice exam score</div>
            <div
              style={center(0, {
                fontSize: 145,
                lineHeight: 1.03,
                fontWeight: 800,
                letterSpacing: "-8px",
                color: tealDeep,
              })}
            >
              {percent}
              <small style={{ fontSize: 72, verticalAlign: "24px", letterSpacing: "-3px" }}>%</small>
            </div>
            <div
              style={{
                display: "table",
                margin: "13px auto 0",
                padding: "13px 30px",
                border: `2px solid ${teal}`,
                borderRadius: 999,
                color: "#087f70",
                background: "rgba(255,255,255,.92)",
                fontSize: 19,
                fontWeight: 800,
                letterSpacing: "1.3px",
                textTransform: "uppercase",
              }}
            >
              {statusBadge}
            </div>

            <div
              style={{
                maxWidth: 820,
                margin: "25px auto 0",
                textAlign: "center",
                fontSize: 36,
                lineHeight: 1.25,
                fontWeight: 800,
                letterSpacing: "-.6px",
              }}
            >
              {examTitle}
            </div>
            <div style={center(11, { fontSize: 19, fontWeight: 600, color: "#4d5655" })}>{editionLine}</div>

            <div
              style={{
                width: 820,
                maxWidth: "100%",
                margin: "30px auto 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px 48px",
              }}
            >
              <div style={metaItem}>
                <span style={metaLabel}>Pass benchmark</span>
                <span style={metaValue}>{passMarkLine}</span>
              </div>
              <div style={metaItem}>
                <span style={metaLabel}>Result</span>
                <span style={metaValue}>{statusBadge}</span>
              </div>
            </div>
            <div style={center(22, { fontSize: 17, fontWeight: 600, color: "#39413f" })}>
              A practice milestone on your learning journey.
            </div>
          </div>

          <footer
            style={{
              position: "absolute",
              left: 54,
              right: 54,
              bottom: 28,
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
                paddingTop: 13,
                borderTop: "1px solid rgba(0,0,0,.2)",
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: tealDeep }}>mockacademy.org</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#303837" }}>Issued {issued}</div>
            </div>
            <div style={{ fontSize: 10, lineHeight: 1.55, color: "#4d5554", fontWeight: 400, maxWidth: 850 }}>
              <p style={{ margin: "0 0 4px" }}>
                Practice result from a free MockAcademy paper — not an examination certification.
              </p>
              <p style={{ margin: 0 }}>
                PRINCE2® is a registered trademark of the PeopleCert group. MockAcademy is independent and
                not affiliated with, endorsed by or licensed by PeopleCert.
              </p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

const metaItem: CSSProperties = {
  minHeight: 76,
  padding: "0 8px 11px",
  borderBottom: "1px solid rgba(0,0,0,.2)",
};

const metaLabel: CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontSize: 14,
  fontWeight: 800,
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "#5e6866",
};

const metaValue: CSSProperties = {
  display: "block",
  fontSize: 21,
  lineHeight: 1.3,
  fontWeight: 600,
  color: "#171b1a",
};
