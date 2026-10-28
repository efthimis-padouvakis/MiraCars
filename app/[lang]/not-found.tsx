import Link from "next/link";
import { lang } from "next/root-params";
import { SunDisc } from "@/components/Decor";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default async function NotFound() {
  const value = await lang();
  const locale = isLocale(value) ? value : defaultLocale;
  const t = getDictionary(locale);
  return (
    <section className="relative isolate overflow-hidden">
      <SunDisc className="left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-sun-shine font-display text-9xl font-extrabold">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold uppercase text-sea-800">{t.notFound.title}</h1>
        <p className="mt-3 text-ink/65">{t.notFound.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}`} className="font-display uppercase tracking-wide leaf-sm bg-sun-400 px-7 py-3.5 font-bold text-sea-950 hover:bg-sun-300">
            {t.notFound.cta}
          </Link>
          <Link href={`/${locale}/locations`} className="leaf-sm border border-sand-300 bg-white px-7 py-3.5 font-bold text-ink hover:border-sea-300">
            {t.nav.locations}
          </Link>
        </div>
      </div>
    </section>
  );
}
