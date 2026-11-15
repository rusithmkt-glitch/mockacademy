import type { LessonArtKey } from "@/data/types";

const descriptions: Record<LessonArtKey, string> = {
  principles:
    "Layered building blocks beside a compass, representing the principles that guide every PRINCE2 project.",
  team:
    "A project board at the centre connected to four project roles, showing a clear reporting structure.",
  lifecycle:
    "Four sequential project stages joined by a dashed path, ending with a completion flag.",
  "business-case":
    "A business case document beside a growing chart and stacked coins, showing continued justification.",
  planning:
    "A product-based plan board with staged bars and milestone diamonds.",
  risk:
    "A radar scanning for threats next to a protective shield, representing risk management.",
  progress:
    "A rising performance line crossing a target ring, representing progress monitoring and control.",
  products:
    "A set of linked deliverable boxes flowing into an approved product checklist.",
};

function Principles() {
  return (
    <g>
      <g data-art-part>
        {[
          { y: 46, width: 220, fill: "var(--accent)" },
          { y: 84, width: 248, fill: "var(--card)" },
          { y: 122, width: 204, fill: "var(--sand)" },
        ].map((layer) => (
          <g key={layer.y}>
            <rect
              x={132 + (248 - layer.width) / 2}
              y={layer.y}
              width={layer.width}
              height="96"
              rx="16"
              fill={layer.fill}
              stroke="var(--border)"
            />
          </g>
        ))}
        <g fill="var(--primary)">
          <rect x="164" y="72" width="92" height="7" rx="3.5" />
          <rect x="164" y="110" width="140" height="7" rx="3.5" />
          <rect x="164" y="148" width="112" height="7" rx="3.5" />
        </g>
        {[64, 102, 140].map((y, index) => (
          <g key={y}>
            <circle cx="330" cy={y} r="13" fill="var(--card)" stroke="var(--primary)" strokeOpacity="0.35" />
            <circle cx="330" cy={y} r="4" fill="var(--primary)" opacity={1 - index * 0.22} />
          </g>
        ))}
      </g>

      <g data-art-part transform="translate(566 148)">
        <circle r="96" fill="var(--card)" fillOpacity="0.7" />
        <circle r="80" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeDasharray="3 7" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="0"
            y1="-80"
            x2="0"
            y2="-68"
            stroke="var(--navy)"
            strokeOpacity="0.3"
            strokeWidth="3"
            transform={`rotate(${angle})`}
          />
        ))}
        <path d="M0 0L38-26 0-52-38-26Z" fill="var(--primary)" />
        <path d="M0 0L38-26 0-52Z" fill="var(--navy)" fillOpacity="0.22" />
        <circle r="7" fill="var(--navy)" />
      </g>

      <circle data-art-part cx="654" cy="62" r="10" fill="var(--amber)" />
      <circle data-art-part cx="86" cy="238" r="7" fill="var(--primary)" fillOpacity="0.45" />
    </g>
  );
}

function Team() {
  const nodes = [
    { x: 218, y: 84 },
    { x: 560, y: 76 },
    { x: 196, y: 228 },
    { x: 574, y: 226 },
  ];
  return (
    <g>
      <g data-art-part>
        {nodes.map((node) => (
          <line
            key={`${node.x}-${node.y}`}
            x1="382"
            y1="150"
            x2={node.x}
            y2={node.y}
            stroke="var(--primary)"
            strokeOpacity="0.32"
            strokeWidth="2.5"
            strokeDasharray="4 7"
          />
        ))}
      </g>

      <g data-art-part>
        {nodes.map((node, index) => (
          <g key={node.x}>
            <circle cx={node.x} cy={node.y} r="38" fill="var(--card)" stroke="var(--border)" />
            <circle cx={node.x} cy={node.y - 9} r="10" fill="var(--primary)" fillOpacity={index % 2 === 0 ? 0.9 : 0.55} />
            <path
              d={`M${node.x - 16} ${node.y + 20}q16-20 32 0`}
              fill="none"
              stroke="var(--navy)"
              strokeOpacity="0.4"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
        ))}
      </g>

      <g data-art-part>
        <circle cx="382" cy="150" r="58" fill="var(--navy)" />
        <circle cx="382" cy="133" r="15" fill="var(--card)" />
        <path d="M354 176q28-34 56 0" fill="none" stroke="var(--card)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="424" cy="106" r="12" fill="var(--amber)" />
        <path d="M424 100v7" stroke="var(--navy)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="424" cy="112" r="1.8" fill="var(--navy)" />
      </g>

      <g data-art-part>
        <rect x="470" y="140" width="96" height="48" rx="14" fill="var(--card)" stroke="var(--border)" />
        <circle cx="492" cy="164" r="3.4" fill="var(--primary)" />
        <circle cx="508" cy="164" r="3.4" fill="var(--primary)" fillOpacity="0.65" />
        <circle cx="524" cy="164" r="3.4" fill="var(--primary)" fillOpacity="0.35" />
      </g>

      <circle data-art-part cx="664" cy="148" r="22" fill="var(--sand)" />
      <circle data-art-part cx="100" cy="152" r="13" fill="var(--accent)" />
    </g>
  );
}

function Lifecycle() {
  const stages = [
    { x: 118, fill: "var(--accent)" },
    { x: 292, fill: "var(--card)" },
    { x: 466, fill: "var(--card)" },
    { x: 640, fill: "var(--sand)" },
  ];
  return (
    <g>
      <g data-art-part>
        <path d="M96 132H662" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="3" strokeDasharray="6 9" />
        <path d="M652 124l16 8-16 8" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {stages.map((stage, index) => (
        <g data-art-part key={`${stage.x}-${index}`}>
          <rect x={stage.x - 56} y="86" width="112" height="92" rx="18" fill={stage.fill} stroke="var(--border)" />
          <circle cx={stage.x} cy="118" r="17" fill={index === 3 ? "var(--green)" : "var(--card)"} stroke={index === 3 ? "none" : "var(--border)"} />
          {index === 3 ? (
            <path
              d={`M${stage.x - 7} 118l5 5 10-11`}
              fill="none"
              stroke="var(--card)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <text x={stage.x} y="123" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--primary)">
              {index + 1}
            </text>
          )}
          <rect x={stage.x - 30} y="148" width="60" height="6" rx="3" fill="var(--muted)" />
        </g>
      ))}

      <g data-art-part transform="translate(668 52)">
        <rect x="0" y="0" width="6" height="52" rx="3" fill="var(--navy)" />
        <path d="M6 8h58l-12 17 12 17H6z" fill="var(--primary)" />
      </g>
    </g>
  );
}

function BusinessCase() {
  return (
    <g>
      <g data-art-part transform="translate(150 46)">
        <rect width="264" height="208" rx="20" fill="var(--card)" stroke="var(--border)" />
        <rect x="26" y="28" width="104" height="8" rx="4" fill="var(--primary)" />
        <rect x="26" y="52" width="186" height="6" rx="3" fill="var(--muted)" />
        <rect x="26" y="70" width="152" height="6" rx="3" fill="var(--muted)" />
        <rect x="26" y="102" width="70" height="60" rx="12" fill="var(--accent)" />
        <rect x="112" y="102" width="70" height="60" rx="12" fill="var(--sand)" />
        <rect x="198" y="102" width="40" height="60" rx="12" fill="var(--muted)" />
        <rect x="26" y="178" width="120" height="6" rx="3" fill="var(--muted)" />
        <circle cx="226" cy="182" r="14" fill="var(--green)" />
        <path d="M219 182l5 5 9-10" fill="none" stroke="var(--card)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g data-art-part transform="translate(482 68)">
        <rect width="196" height="172" rx="18" fill="var(--card)" fillOpacity="0.8" stroke="var(--border)" />
        <path d="M26 130l44-38 38 22 52-56" fill="none" stroke="var(--green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M140 58h22v22" fill="none" stroke="var(--green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="70" cy="92" r="5" fill="var(--primary)" />
        <circle cx="108" cy="114" r="5" fill="var(--primary)" />
        <rect x="26" y="146" width="100" height="6" rx="3" fill="var(--muted)" />
      </g>

      <g data-art-part>
        {[0, 1, 2].map((index) => (
          <g key={index} transform={`translate(634 ${196 - index * 22})`}>
            <ellipse rx="34" ry="9" fill={index === 2 ? "var(--amber)" : "var(--sand)"} stroke="var(--border)" />
          </g>
        ))}
        <circle cx="516" cy="58" r="9" fill="var(--amber)" />
      </g>
    </g>
  );
}

function Planning() {
  const bars = [
    { y: 0, width: 186, fill: "var(--primary)" },
    { y: 36, width: 248, fill: "var(--navy)", opacity: 0.8 },
    { y: 72, width: 138, fill: "var(--amber)" },
    { y: 108, width: 302, fill: "var(--primary)", opacity: 0.42 },
  ];
  return (
    <g>
      <g data-art-part>
        <rect x="128" y="48" width="504" height="204" rx="20" fill="var(--card)" stroke="var(--border)" />
        <path d="M128 92h504" stroke="var(--border)" />
        <rect x="158" y="66" width="92" height="8" rx="4" fill="var(--primary)" />
        <rect x="430" y="66" width="62" height="8" rx="4" fill="var(--primary)" fillOpacity="0.35" />
      </g>

      <g data-art-part transform="translate(158 118)">
        {bars.map((bar) => (
          <rect
            key={bar.y}
            x="0"
            y={bar.y}
            width={bar.width}
            height="20"
            rx="10"
            fill={bar.fill}
            fillOpacity={bar.opacity ?? 1}
          />
        ))}
        <line x1="330" y1="-18" x2="330" y2="142" stroke="var(--navy)" strokeOpacity="0.25" strokeDasharray="4 5" />
      </g>

      <g data-art-part>
        {[26, 74, 110].map((offset, index) => (
          <path
            key={offset}
            d={`M${158 + 330 + 26} ${110 + offset}l9 9-9 9-9-9z`}
            fill={index === 2 ? "var(--amber)" : "var(--primary)"}
          />
        ))}
        <circle cx="676" cy="74" r="12" fill="var(--accent)" />
        <circle cx="92" cy="220" r="7" fill="var(--primary)" fillOpacity="0.45" />
      </g>
    </g>
  );
}

function Risk() {
  return (
    <g>
      <g data-art-part>
        <rect x="112" y="52" width="212" height="196" rx="20" fill="var(--card)" stroke="var(--border)" />
        <path
          d="M218 76l56 20v44c0 36-24 60-56 72-32-12-56-36-56-72v-44z"
          fill="var(--accent)"
          stroke="var(--primary)"
          strokeWidth="2.5"
        />
        <path d="M198 122l14 14 28-32" fill="none" stroke="var(--primary)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="146" y="214" width="144" height="6" rx="3" fill="var(--muted)" />
      </g>

      <g data-art-part transform="translate(530 150)">
        <circle r="112" fill="var(--card)" fillOpacity="0.55" stroke="var(--primary)" strokeOpacity="0.2" />
        {[84, 58, 32].map((radius) => (
          <circle key={radius} r={radius} fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeDasharray="3 7" />
        ))}
        <line x1="-112" y1="0" x2="112" y2="0" stroke="var(--primary)" strokeOpacity="0.15" />
        <line x1="0" y1="-112" x2="0" y2="112" stroke="var(--primary)" strokeOpacity="0.15" />
        <path d="M0 0L84-62A105 105 0 0 1 103 4Z" fill="var(--primary)" fillOpacity="0.12" />
        <circle cx="36" cy="-24" r="8" fill="var(--destructive)" />
        <circle cx="64" cy="36" r="6" fill="var(--amber)" />
        <circle cx="-42" cy="-60" r="5" fill="var(--primary)" />
        <circle r="5" fill="var(--navy)" />
      </g>

      <circle data-art-part cx="674" cy="64" r="9" fill="var(--sand)" />
    </g>
  );
}

function Progress() {
  return (
    <g>
      <g data-art-part>
        <rect x="106" y="58" width="548" height="188" rx="20" fill="var(--card)" stroke="var(--border)" />
        {[92, 134, 176].map((y) => (
          <line key={y} x1="138" y1={y} x2="622" y2={y} stroke="var(--muted)" strokeDasharray="4 8" />
        ))}
        <path
          d="M150 206l78-42 74 18 86-58 78 22 94-54"
          fill="none"
          stroke="var(--green)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M150 206l78-42 74 18 86-58 78 22 94-54V222H150Z" fill="var(--green)" fillOpacity="0.1" />
        {[150, 228, 302, 388, 466, 560].map((x, index) => (
          <circle
            key={x}
            cx={x}
            cy={[206, 164, 182, 124, 146, 92][index]}
            r="5.5"
            fill="var(--card)"
            stroke="var(--green)"
            strokeWidth="3"
          />
        ))}
      </g>

      <g data-art-part transform="translate(600 108)">
        <circle r="48" fill="var(--card)" stroke="var(--green)" strokeOpacity="0.4" />
        <circle r="33" fill="none" stroke="var(--muted)" />
        <path d="M0-33a33 33 0 0 1 28 50" fill="none" stroke="var(--green)" strokeWidth="9" strokeLinecap="round" />
        <circle r="8" fill="var(--navy)" />
      </g>

      <circle data-art-part cx="92" cy="82" r="8" fill="var(--amber)" />
    </g>
  );
}

function Products() {
  return (
    <g>
      <g data-art-part>
        {[
          { x: 108, y: 62, fill: "var(--accent)" },
          { x: 240, y: 100, fill: "var(--card)" },
          { x: 372, y: 62, fill: "var(--sand)" },
        ].map((box, index) => (
          <g key={box.x}>
            <rect x={box.x} y={box.y} width="118" height="80" rx="16" fill={box.fill} stroke="var(--border)" />
            <rect x={box.x + 18} y={box.y + 18} width="52" height="7" rx="3.5" fill="var(--primary)" opacity={index === 1 ? 0.55 : 1} />
            <rect x={box.x + 18} y={box.y + 36} width="80" height="5" rx="2.5" fill="var(--muted)" />
            <rect x={box.x + 18} y={box.y + 50} width="62" height="5" rx="2.5" fill="var(--muted)" />
          </g>
        ))}
      </g>

      <g data-art-part>
        <path d="M226 102c16 0 18-8 34-8M358 102c16 0 18 8 34 8" fill="none" stroke="var(--primary)" strokeOpacity="0.4" strokeWidth="2.5" strokeDasharray="4 6" />
        <path d="M250 94l10 4-10 4M382 94l10 14-10-4z" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g data-art-part>
        <rect x="512" y="56" width="154" height="192" rx="18" fill="var(--card)" stroke="var(--border)" />
        <rect x="532" y="78" width="76" height="8" rx="4" fill="var(--primary)" />
        {[0, 1, 2].map((row) => (
          <g key={row} transform={`translate(532 ${112 + row * 36})`}>
            <circle cx="9" cy="9" r="9" fill={row === 2 ? "var(--muted)" : "var(--green)"} />
            {row !== 2 ? (
              <path d="M5 9l3 3 5-6" fill="none" stroke="var(--card)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            <rect x="28" y="6" width={row === 1 ? 76 : 96} height="6" rx="3" fill="var(--muted)" />
          </g>
        ))}
      </g>

      <circle data-art-part cx="682" cy="242" r="8" fill="var(--amber)" />
      <circle data-art-part cx="82" cy="202" r="6" fill="var(--primary)" fillOpacity="0.45" />
    </g>
  );
}

const scenes: Record<LessonArtKey, () => React.ReactElement> = {
  principles: Principles,
  team: Team,
  lifecycle: Lifecycle,
  "business-case": BusinessCase,
  planning: Planning,
  risk: Risk,
  progress: Progress,
  products: Products,
};

export function LessonArt({ art }: { art: LessonArtKey }) {
  const Scene = scenes[art];
  return (
    <svg
      viewBox="0 0 760 300"
      className="block h-auto w-full"
      role="img"
      aria-label={descriptions[art]}
      data-lesson-art={art}
    >
      <Scene />
    </svg>
  );
}
