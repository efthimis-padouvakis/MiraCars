import { SunDisc } from "@/components/Decor";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRightIcon, GoogleIcon, StarIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import { fill, type Dictionary } from "@/lib/i18n";
import { GOOGLE_REVIEWS, reviews, type GoogleListing } from "@/lib/reviews";

type ReviewStrings = Pick<Dictionary, "reviews">;

function formatRating(locale: Locale, listing: GoogleListing) {
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(listing.rating);
}

function Stars({ value, label, className = "" }: { value: number; label: string; className?: string }) {
  const filled = Math.round(value);
  return (
    <span role="img" aria-label={label} className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className={index < filled ? "text-sun-400" : "text-current opacity-20"} />
      ))}
    </span>
  );
}

/** Compact "5.0 ★★★★★ 33 Google reviews" pill linking to the Google listing. */
export function GoogleRating({ locale, t, tone, className = "" }: { locale: Locale; t: ReviewStrings; tone: "dark" | "light"; className?: string }) {
  const listing = GOOGLE_REVIEWS;
  if (!listing) return null;
  const rating = formatRating(locale, listing);
  const tones = {
    dark: "bg-white/10 text-white ring-white/15 hover:bg-white/15",
    light: "bg-white text-ink ring-sand-200 hover:ring-sea-300",
  };
  return (
    <a
      href={listing.url}
      target="_blank"
      rel="noopener"
      className={`leaf-sm inline-flex items-center gap-2 py-2 pl-2 pr-4 text-sm ring-1 transition ${tones[tone]} ${className}`}
    >
      <span className="grid size-6 place-items-center rounded-full bg-white">
        <GoogleIcon className="text-sm" />
      </span>
      <span className="font-extrabold">{rating}</span>
      <Stars value={listing.rating} label={fill(t.reviews.outOf, { rating })} className="text-[0.8rem]" />
      <span className="font-semibold opacity-70">{fill(t.reviews.count, { n: listing.count })}</span>
    </a>
  );
}

export default function GoogleReviews({ locale, t }: { locale: Locale; t: ReviewStrings }) {
  const listing = GOOGLE_REVIEWS;
  if (!listing) return null;
  const rating = formatRating(locale, listing);
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.3fr_1fr] md:items-center lg:gap-16">
        <div>
          <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} text={t.reviews.text} />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={listing.url}
              target="_blank"
              rel="noopener"
              className="leaf-sm inline-flex items-center gap-2 border-2 border-sea-800 px-5 py-2 font-display text-base font-bold uppercase tracking-wide text-sea-800 transition hover:bg-sea-800 hover:text-white"
            >
              {t.reviews.readAll} <ArrowRightIcon />
            </a>
            <a href={listing.writeUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-sea-700 transition hover:text-sea-900">
              <StarIcon className="text-sun-500" /> {t.reviews.write}
            </a>
          </div>
        </div>
        <a
          href={listing.url}
          target="_blank"
          rel="noopener"
          className="leaf-lg reveal relative isolate block overflow-hidden bg-sun-50 p-8 ring-1 ring-sun-200 transition hover:ring-sun-400 sm:p-10"
        >
          <SunDisc className="-right-14 -top-14 -z-10 size-44 opacity-40" />
          <span className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full bg-white text-2xl shadow-soft">
              <GoogleIcon />
            </span>
            <span className="font-display text-lg font-bold uppercase tracking-wide text-sea-800">Google</span>
          </span>
          <span className="mt-6 flex items-end gap-4">
            <span className="font-display text-[5.5rem] font-extrabold leading-[0.8] text-sea-800">{rating}</span>
            <span className="pb-1">
              <Stars value={listing.rating} label={fill(t.reviews.outOf, { rating })} className="text-2xl" />
              <span className="mt-2 block font-semibold text-ink/65">{fill(t.reviews.count, { n: listing.count })}</span>
            </span>
          </span>
        </a>
      </div>

      {reviews.length > 0 && (
        <ul className="no-scrollbar mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {reviews.map((review) => (
            <li key={review.author} className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
              <figure className="flex h-full flex-col leaf border border-sand-200 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <Stars value={5} label={fill(t.reviews.outOf, { rating: 5 })} />
                  <GoogleIcon className="text-lg" />
                </div>
                <blockquote lang="en" className="mt-4 flex-1 text-pretty leading-relaxed text-ink/75">
                  <p>&ldquo;{review.text}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-sea-800 font-extrabold text-sun-300">
                    {review.author[0]}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{review.author}</span>
                    <span className="block text-sm text-ink/55">{t.reviews.source}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
