export default function SectionHeading({ eyebrow, title, text, tone = "light" }: { eyebrow?: string; title: string; text?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="reveal max-w-2xl">
      {eyebrow && (
        <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-wave" : "text-sea-600"}`}>
          <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-sun-400" />
          {eyebrow}
        </p>
      )}
      <h2 className={`${eyebrow ? "mt-3" : ""} text-balance font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl ${dark ? "text-white" : "text-sea-800"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-pretty text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink/65"}`}>{text}</p>}
    </div>
  );
}
