export default function RootLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="min-h-[60vh] w-full px-4 sm:px-6"
    >
      <span className="sr-only">Yükleniyor…</span>

      <div className="mx-auto mt-28 max-w-7xl">
        <div className="h-3 w-24 animate-pulse rounded-full bg-graphite-elevated" />
        <div className="mt-4 h-10 w-3/4 animate-pulse rounded-lg bg-graphite-elevated sm:h-12 sm:w-2/3" />
        <div className="mt-3 h-10 w-2/3 animate-pulse rounded-lg bg-graphite-elevated sm:w-1/2" />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl border border-border-hairline bg-graphite-elevated"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
