import { BookOpen, Check, FileText, Layers, LockOpen, Sparkles } from "lucide-react";

const content = {
  login: {
    title: "One account. Two ways to prepare.",
    description:
      "Mock exams and illustrated lessons in one place, with a clear view of what to study next.",
    points: [
      "Resume your lessons and mock exams where you left off",
      "See topic-level performance at a glance",
      "Study comfortably on any device",
    ],
  },
  register: {
    title: "Start with a solid foundation.",
    description:
      "Everything you need to prepare for PRINCE2 Foundation, without a subscription or a sales call.",
    points: [
      "23 illustrated lessons across six modules",
      "Five free full and focused mock papers",
      "A single syllabus that tracks your progress",
    ],
  },
};

export function AuthAside({ mode }: { mode: "login" | "register" }) {
  const copy = content[mode];

  return (
    <aside className="relative hidden overflow-hidden bg-navy p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-[0.13]" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-[26rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-16 size-80 rounded-full bg-magenta/30 blur-3xl"
      />

      <div className="relative">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-white/10 text-gold">
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/45">
            Free PRINCE2® Foundation preparation
          </p>
        </div>
        <h2 className="display mt-7 max-w-md text-balance text-4xl leading-[1.1]">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-md text-pretty text-[0.92rem] leading-relaxed text-white/60">
          {copy.description}
        </p>

        <ul className="mt-9 space-y-4">
          {copy.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[0.88rem] leading-relaxed text-white/75">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-12 rounded-2xl border border-white/12 bg-white/[0.05] p-5 backdrop-blur-sm">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/40">
          Course at a glance
        </p>
        <dl className="mt-4 grid grid-cols-4 gap-3">
          {[
            { icon: Layers, value: "6", label: "modules" },
            { icon: BookOpen, value: "23", label: "lessons" },
            { icon: FileText, value: "5", label: "mock papers" },
            { icon: LockOpen, value: "£0", label: "forever" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="size-3.5 text-gold" aria-hidden="true" />
              <dd className="mt-2 font-heading text-xl leading-none text-white">
                {value}
              </dd>
              <dt className="mt-1 text-[0.6rem] text-white/40">{label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
