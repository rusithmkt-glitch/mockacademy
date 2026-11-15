export default function DashboardLoading() {
  return (
    <main id="main" className="flex-1" aria-busy="true" aria-live="polite">
      <div className="shell py-10 lg:py-14">
        <p className="text-[0.78rem] text-muted-foreground">
          Loading your dashboard…
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-24 rounded-2xl border border-border bg-card/60"
            />
          ))}
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="h-64 rounded-3xl border border-border bg-card/60" />
          <div className="h-64 rounded-3xl border border-border bg-card/60" />
        </div>
      </div>
    </main>
  );
}
