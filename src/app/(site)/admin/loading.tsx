export default function AdminLoading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-live="polite">
      <p className="text-[0.78rem] text-muted-foreground">
        Loading admin data…
      </p>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-2xl border border-border bg-card/60"
          />
        ))}
      </div>
      <div className="h-56 rounded-2xl border border-border bg-card/60" />
    </div>
  );
}
