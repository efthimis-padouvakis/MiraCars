/** Wave edge between sections. The front wave takes `currentColor`, so set it to the next section's background. */
export function Wave({ className = "", back = "fill-wave/35" }: { className?: string; back?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" className={`pointer-events-none block h-8 w-full overflow-hidden sm:h-12 lg:h-16 ${className}`}>
      {/* The back wave runs past both edges so it can drift sideways without showing a gap */}
      <path className={`animate-drift ${back}`} d="M-120 38C200 0 450 4 720 34s540 42 840 6v40H-120Z" />
      <path fill="currentColor" d="M0 56c220-30 460-30 720-6s500 34 720 4v26H0Z" />
    </svg>
  );
}

/** Sun disc with a thin halo, the circle from the logo. Purely decorative. */
export function SunDisc({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute rounded-full ${className}`}>
      <span className="absolute inset-[-9%] animate-breathe rounded-full border-2 border-sun-300/50" />
      <span className="absolute inset-[-20%] animate-breathe rounded-full border border-wave/40 [animation-delay:-3.5s]" />
      <span className="bg-sun absolute inset-0 rounded-full" />
    </span>
  );
}
