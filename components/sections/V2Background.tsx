export default function V2Background() {
  return (
    <>
      {/* Living radial gradient background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 75% 15%, rgba(56, 189, 248, 0.10), transparent 55%),
            radial-gradient(ellipse 70% 50% at 15% 85%, rgba(2, 132, 199, 0.08), transparent 55%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(56, 189, 248, 0.03), transparent 60%)
          `,
        }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(160, 200, 230, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 200, 230, 0.018) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
    </>
  );
}
