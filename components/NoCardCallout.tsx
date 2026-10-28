import Link from "next/link";
import { Wave } from "@/components/Decor";
import { ArrowRightIcon, CardIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { NO_CARD_PATH } from "@/lib/site";

/** Dark card that sends visitors to the no-credit-card landing page. */
export default function NoCardCallout({ locale, t, className = "" }: { locale: Locale; t: Pick<Dictionary, "noCard">; className?: string }) {
  return (
    <Link
      href={`/${locale}${NO_CARD_PATH}`}
      className={`group relative isolate flex flex-col justify-between overflow-hidden leaf bg-sea-900 p-6 text-white transition hover:bg-sea-800 sm:p-8 ${className}`}
    >
      <Wave className="absolute inset-x-0 bottom-0 -z-10 text-sea-950/40" back="fill-wave/20" />
      <span className="grid size-12 place-items-center rounded-full bg-sun-400 text-2xl text-sea-950">
        <CardIcon />
      </span>
      <span className="mt-6 block">
        <span className="block text-2xl font-extrabold tracking-tight">{t.noCard.calloutTitle}</span>
        <span className="mt-2 block max-w-md leading-relaxed text-white/75">{t.noCard.calloutText}</span>
        <span className="mt-5 inline-flex items-center gap-2 font-bold text-sun-300">
          {t.noCard.calloutCta} <ArrowRightIcon className="transition group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
