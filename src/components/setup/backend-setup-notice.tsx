import { Database, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BackendSetupNotice({
  title,
  description,
  envVars,
  steps,
}: {
  title: string;
  description: string;
  envVars: string[];
  steps?: string[];
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <Badge tone="sand">
        <Database className="size-3" aria-hidden="true" />
        Setup required
      </Badge>
      <h1 className="display mt-4 text-balance text-2xl leading-tight text-foreground sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-5 rounded-xl border border-border bg-background p-4">
        <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <Terminal className="size-3.5" aria-hidden="true" />
          Environment variables
        </p>
        <ul className="mt-2 space-y-1 font-mono text-[0.72rem] text-foreground">
          {envVars.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>

      {steps?.length ? (
        <ol className="mt-5 space-y-2 text-[0.8rem] leading-relaxed text-muted-foreground">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-2.5">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[0.62rem] font-semibold text-primary">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}

      <p className="mt-6 text-[0.72rem] text-muted-foreground">
        Full instructions live in <span className="font-mono">docs/phase-3-setup.md</span>.
        No real credentials should ever be committed to the repository.
      </p>
    </section>
  );
}
