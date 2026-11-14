import type { SceneVariant } from "@/data/types";
import { cn } from "@/lib/utils";

const labels: Record<SceneVariant, string> = {
  foundations: "Illustration of the building blocks of the PRINCE2 method",
  people: "Illustration of a connected project team",
  starting: "Illustration of a project mandate becoming a controlled project",
  planning: "Illustration of a product-based project plan",
  risk: "Illustration of a radar tracking project risk",
  delivery: "Illustration of staged delivery through to project closure",
};

function FoundationsScene() {
  return (
    <g>
      <circle cx="520" cy="150" r="118" fill="var(--card)" fillOpacity="0.55" />
      <circle
        cx="520"
        cy="150"
        r="96"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.25"
        strokeDasharray="3 7"
      />
      <g transform="translate(288 58)">
        {[
          { y: 0, w: 170, fill: "var(--navy)" },
          { y: 32, w: 210, fill: "var(--card)" },
          { y: 64, w: 190, fill: "var(--accent)" },
        ].map((layer) => (
          <rect
            key={layer.y}
            x="0"
            y={layer.y}
            width={layer.w}
            height="112"
            rx="16"
            fill={layer.fill}
            stroke="var(--border)"
          />
        ))}
        <g fill="var(--primary)" opacity="0.9">
          <rect x="20" y="48" width="86" height="7" rx="3.5" />
          <rect x="20" y="80" width="120" height="7" rx="3.5" />
          <rect x="20" y="112" width="64" height="7" rx="3.5" />
        </g>
        <circle cx="238" cy="76" r="26" fill="var(--card)" stroke="var(--border)" />
        <path
          d="M228 76l7 7 13-15"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g transform="translate(520 150)">
        <circle r="72" fill="var(--card)" stroke="var(--border)" />
        <circle r="58" fill="none" stroke="var(--muted)" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="0"
            y1="-58"
            x2="0"
            y2="-50"
            stroke="var(--navy)"
            strokeOpacity="0.35"
            strokeWidth="2"
            transform={`rotate(${angle})`}
          />
        ))}
        <path d="M0 0L30-22 0-43-30-22Z" fill="var(--primary)" />
        <path d="M0 0L30-22 0-43Z" fill="var(--navy)" fillOpacity="0.25" />
        <circle r="6" fill="var(--navy)" />
        <circle r="88" fill="none" stroke="var(--primary)" strokeOpacity="0.2" />
      </g>
      <circle cx="640" cy="74" r="9" fill="var(--sand)" />
      <circle cx="190" cy="235" r="7" fill="var(--primary)" fillOpacity="0.5" />
    </g>
  );
}

function PeopleScene() {
  const nodes = [
    { x: 210, y: 92 },
    { x: 550, y: 82 },
    { x: 190, y: 224 },
    { x: 566, y: 220 },
  ];
  return (
    <g>
      {nodes.map((node) => (
        <line
          key={`${node.x}-${node.y}`}
          x1="380"
          y1="150"
          x2={node.x}
          y2={node.y}
          stroke="var(--primary)"
          strokeOpacity="0.3"
          strokeWidth="2"
          strokeDasharray="4 6"
        />
      ))}
      {nodes.map((node, index) => (
        <g key={node.x + "-node"}>
          <circle
            cx={node.x}
            cy={node.y}
            r="34"
            fill="var(--card)"
            stroke="var(--border)"
          />
          <circle cx={node.x} cy={node.y - 8} r="9" fill="var(--primary)" fillOpacity={index % 2 === 0 ? 0.85 : 0.55} />
          <path
            d={`M${node.x - 14} ${node.y + 17}q14-18 28 0`}
            fill="none"
            stroke="var(--navy)"
            strokeOpacity="0.45"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle cx="380" cy="150" r="54" fill="var(--navy)" />
      <circle cx="380" cy="134" r="14" fill="var(--card)" />
      <path
        d="M354 174q26-32 52 0"
        fill="none"
        stroke="var(--card)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <g transform="translate(440 88)">
        <rect width="84" height="44" rx="14" fill="var(--card)" stroke="var(--border)" />
        <circle cx="20" cy="22" r="3" fill="var(--primary)" />
        <circle cx="34" cy="22" r="3" fill="var(--primary)" fillOpacity="0.65" />
        <circle cx="48" cy="22" r="3" fill="var(--primary)" fillOpacity="0.35" />
      </g>
      <circle cx="640" cy="155" r="24" fill="var(--sand)" />
      <circle cx="126" cy="156" r="14" fill="var(--accent)" />
    </g>
  );
}

function StartingScene() {
  return (
    <g>
      <rect x="158" y="52" width="252" height="196" rx="18" fill="var(--card)" stroke="var(--border)" />
      <rect x="181" y="78" width="76" height="8" rx="4" fill="var(--primary)" />
      <rect x="181" y="104" width="176" height="6" rx="3" fill="var(--muted)" />
      <rect x="181" y="122" width="142" height="6" rx="3" fill="var(--muted)" />
      <rect x="181" y="140" width="164" height="6" rx="3" fill="var(--muted)" />
      <rect x="181" y="174" width="96" height="30" rx="15" fill="var(--accent)" />
      <circle cx="370" cy="212" r="27" fill="var(--primary)" />
      <path
        d="M356 212l9 9 17-19"
        fill="none"
        stroke="var(--primary-foreground)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M430 190C494 172 502 108 566 96"
        fill="none"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeDasharray="5 7"
      />
      <g transform="translate(574 40)">
        <rect x="0" y="0" width="7" height="176" rx="3.5" fill="var(--navy)" />
        <path d="M7 10h104l-20 26 20 26H7z" fill="var(--primary)" />
        <path d="M7 10h104l-20 26H7z" fill="var(--navy)" fillOpacity="0.12" />
      </g>
      <circle cx="654" cy="246" r="10" fill="var(--sand)" />
      <circle cx="100" cy="112" r="7" fill="var(--primary)" fillOpacity="0.5" />
    </g>
  );
}

function PlanningScene() {
  return (
    <g>
      <rect x="142" y="52" width="476" height="196" rx="18" fill="var(--card)" stroke="var(--border)" />
      <rect x="142" y="52" width="476" height="42" rx="18" fill="var(--accent)" />
      <rect x="142" y="76" width="476" height="18" fill="var(--accent)" />
      <rect x="170" y="68" width="84" height="8" rx="4" fill="var(--primary)" />
      <rect x="410" y="68" width="58" height="8" rx="4" fill="var(--primary)" fillOpacity="0.35" />
      <g transform="translate(170 118)">
        {[
          { y: 0, width: 170, fill: "var(--primary)" },
          { y: 38, width: 240, fill: "var(--navy)", opacity: 0.85 },
          { y: 76, width: 130, fill: "var(--sand)" },
          { y: 114, width: 300, fill: "var(--primary)", opacity: 0.45 },
        ].map((bar) => (
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
        <line
          x1="330"
          y1="-16"
          x2="330"
          y2="140"
          stroke="var(--navy)"
          strokeOpacity="0.25"
          strokeDasharray="4 5"
        />
        <path d="M356 8l10 10-10 10-10-10z" fill="var(--primary)" />
        <path d="M356 84l10 10-10 10-10-10z" fill="var(--navy)" />
        <path d="M356 122l10 10-10 10-10-10z" fill="var(--sand)" />
      </g>
      <circle cx="664" cy="118" r="12" fill="var(--accent)" />
      <circle cx="96" cy="212" r="8" fill="var(--primary)" fillOpacity="0.45" />
    </g>
  );
}

function RiskScene() {
  return (
    <g>
      <g transform="translate(486 150)">
        <circle r="104" fill="var(--card)" fillOpacity="0.6" stroke="var(--primary)" strokeOpacity="0.2" />
        <circle r="78" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeDasharray="3 7" />
        <circle r="52" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeDasharray="3 7" />
        <circle r="26" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeDasharray="3 7" />
        <line x1="-104" y1="0" x2="104" y2="0" stroke="var(--primary)" strokeOpacity="0.15" />
        <line x1="0" y1="-104" x2="0" y2="104" stroke="var(--primary)" strokeOpacity="0.15" />
        <path d="M0 0L78-58A98 98 0 0 1 96 4Z" fill="var(--primary)" fillOpacity="0.12" />
        <circle cx="34" cy="-22" r="8" fill="var(--destructive)" />
        <circle cx="60" cy="34" r="6" fill="var(--sand)" />
        <circle cx="-40" cy="-56" r="5" fill="var(--primary)" />
        <circle cx="0" cy="0" r="5" fill="var(--navy)" />
      </g>
      <g transform="translate(150 62)">
        <rect width="200" height="176" rx="18" fill="var(--card)" stroke="var(--border)" />
        <path
          d="M100 24l48 18v38c0 32-22 54-48 64-26-10-48-32-48-64V42z"
          fill="var(--accent)"
          stroke="var(--primary)"
          strokeWidth="2"
        />
        <path
          d="M82 88l13 13 26-29"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="34" y="142" width="132" height="7" rx="3.5" fill="var(--muted)" />
      </g>
      <circle cx="680" cy="70" r="9" fill="var(--sand)" />
      <circle cx="110" cy="264" r="6" fill="var(--primary)" fillOpacity="0.5" />
    </g>
  );
}

function DeliveryScene() {
  return (
    <g>
      <path
        d="M126 150H620"
        stroke="var(--primary)"
        strokeOpacity="0.3"
        strokeWidth="2.5"
        strokeDasharray="5 8"
      />
      {[
        { x: 180, fill: "var(--card)" },
        { x: 344, fill: "var(--card)" },
        { x: 508, fill: "var(--card)" },
      ].map((stage, index) => (
        <g key={stage.x}>
          <rect
            x={stage.x - 58}
            y="102"
            width="116"
            height="96"
            rx="18"
            fill={stage.fill}
            stroke="var(--border)"
          />
          <circle
            cx={stage.x}
            cy="138"
            r="17"
            fill={index === 2 ? "var(--sand)" : "var(--accent)"}
          />
          <path
            d={`M${stage.x - 7} 138l5 5 10-11`}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x={stage.x - 32}
            y="166"
            width="64"
            height="6"
            rx="3"
            fill="var(--muted)"
          />
        </g>
      ))}
      <g transform="translate(638 74)">
        <rect x="0" y="0" width="6" height="152" rx="3" fill="var(--navy)" />
        <path d="M6 8h76l-16 22 16 22H6z" fill="var(--primary)" />
        <circle cx="3" cy="158" r="9" fill="var(--navy)" />
      </g>
      <circle cx="120" cy="198" r="8" fill="var(--sand)" />
      <circle cx="584" cy="64" r="6" fill="var(--primary)" fillOpacity="0.5" />
    </g>
  );
}

const scenes: Record<SceneVariant, () => React.ReactElement> = {
  foundations: FoundationsScene,
  people: PeopleScene,
  starting: StartingScene,
  planning: PlanningScene,
  risk: RiskScene,
  delivery: DeliveryScene,
};

export function SceneIllustration({
  variant,
  className,
}: {
  variant: SceneVariant;
  className?: string;
}) {
  const Scene = scenes[variant];
  return (
    <div
      data-reveal
      className={cn(
        "relative overflow-hidden rounded-3xl border border-primary/10 bg-lilac",
        className,
      )}
    >
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-30" />
      <svg
        viewBox="0 0 760 300"
        className="relative block h-auto w-full"
        role="img"
        aria-label={labels[variant]}
      >
        <Scene />
      </svg>
    </div>
  );
}
