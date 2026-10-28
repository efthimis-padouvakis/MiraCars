import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import GoogleReviews, { GoogleRating } from "@/components/GoogleReviews";
import PageHero from "@/components/PageHero";
import SearchForm from "@/components/SearchForm";
import { ArrowRightIcon, CheckIcon, PlaneIcon, ShipIcon, TownIcon } from "@/components/icons";
import { fill, getDictionary } from "@/lib/i18n";
import { localeFrom } from "@/lib/i18n/params";
import { locationPages } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";
import { NO_CARD_PATH } from "@/lib/site";

const KIND_ICONS = { Airport: PlaneIcon, Port: ShipIcon, Downtown: TownIcon };
// Mira sells Full (included) and Premium (zero excess); both have a €0 deposit.
const PLAN_CODES = ["FULL", "PREMIUM"] as const;

export async function generateMetadata({ params }: PageProps<"/[lang]/no-credit-card-car-rental-crete">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: NO_CARD_PATH, title: t.noCard.title, description: t.noCard.description, absoluteTitle: true });
}

export default async function NoCardPage({ params }: PageProps<"/[lang]/no-credit-card-car-rental-crete">) {
  const locale = await localeFrom(params);
  const t = getDictionary(locale);
  const n = t.noCard;

  return (
    <>
      <PageHero
        eyebrow={n.eyebrow}
        title={n.h1}
        lead={n.lead}
        crumbs={[
          { name: t.nav.home, href: `/${locale}` },
          { name: n.navLabel, href: `/${locale}${NO_CARD_PATH}` },
        ]}
        aside={
          <div className="leaf-lg border border-sand-200 bg-white p-6 sm:p-8">
            <ul className="space-y-3">
              {n.points.map((point) => (
                <li key={point} className="flex items-start gap-3 font-semibold text-ink/85">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sea-600 text-xs text-white">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <GoogleRating locale={locale} t={t} tone="light" className="mt-6" />
          </div>
        }
      >
        <div id="search" className="mt-10 scroll-mt-28 leaf-lg bg-white p-3 shadow-lift ring-1 ring-black/5 sm:p-4">
          <h2 className="px-2 pb-3 pt-1 text-base font-extrabold text-sea-800 sm:text-lg">{n.searchTitle}</h2>
          <SearchForm locale={locale} t={{ search: t.search, common: t.common }} />
        </div>
      </PageHero>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-20">
        <h2 className="text-4xl font-extrabold uppercase leading-[0.95] text-sea-800 sm:text-5xl">{n.howTitle}</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {n.how.map((step, index) => (
            <li key={step.title} className="leaf border border-sand-200 bg-white p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-full bg-sea-800 text-lg font-extrabold text-sun-300">{index + 1}</span>
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Covers */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-20">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-extrabold uppercase leading-[0.95] text-sea-800 sm:text-5xl">{n.coversTitle}</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink/65">{n.coversText}</p>
        </div>
        <div className="mt-8 overflow-x-auto leaf border border-sand-200 bg-white">
          <table className="w-full min-w-[34rem] text-left">
            <thead className="bg-sand-50 text-xs font-bold uppercase tracking-[0.12em] text-ink/55">
              <tr>
                <th scope="col" className="px-5 py-4 sm:px-6">{n.coverHead.cover}</th>
                <th scope="col" className="px-5 py-4 sm:px-6">{n.coverHead.card}</th>
                <th scope="col" className="px-5 py-4 sm:px-6">{n.coverHead.deposit}</th>
                <th scope="col" className="px-5 py-4 sm:px-6">{n.coverHead.excess}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-100">
              {PLAN_CODES.map((code, index) => {
                const row = n.covers[index];
                return (
                  <tr key={code}>
                    <th scope="row" className="px-5 py-4 font-bold text-ink sm:px-6">{t.car.plans[code]}</th>
                    <td className="px-5 py-4 text-ink/75 sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <CheckIcon className="text-sea-600" /> {row.card}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-extrabold text-sea-700 sm:px-6">{row.deposit}</td>
                    <td className="px-5 py-4 text-ink/75 sm:px-6">{row.excess}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-ink/55">{n.coversNote}</p>
      </section>

      {/* Why + what to bring */}
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:pt-20">
        <div className="leaf bg-sand-100 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold uppercase leading-[0.95] text-sea-800">{n.whyTitle}</h2>
          {n.whyText.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="leaf border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold uppercase leading-[0.95] text-sea-800">{n.bringTitle}</h2>
          <ul className="mt-5 space-y-3">
            {n.bring.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink/80">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sea-600 text-xs text-white">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pick-up points */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-20">
        <h2 className="text-4xl font-extrabold uppercase leading-[0.95] text-sea-800 sm:text-5xl">{n.pointsTitle}</h2>
        <p className="mt-4 text-lg text-ink/65">{n.pointsText}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locationPages.map((page) => {
            const Icon = KIND_ICONS[page.kind];
            return (
              <li key={page.slug}>
                <Link
                  href={`/${locale}/locations/${page.slug}`}
                  className="group flex items-center gap-3 leaf-sm border border-sand-200 bg-white p-3.5 pr-4 font-semibold text-ink transition hover:border-sea-300 hover:shadow-soft"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sea-50 text-lg text-sea-700">
                    <Icon />
                  </span>
                  <span className="flex-1">{fill(t.locations.rentIn, { place: page.copy[locale].name })}</span>
                  <ArrowRightIcon className="text-ink/30 transition group-hover:translate-x-0.5 group-hover:text-sea-600" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <GoogleReviews locale={locale} t={t} />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <h2 className="text-4xl font-extrabold uppercase leading-[0.95] text-sea-800 sm:text-5xl">{n.faqTitle}</h2>
        <div className="mt-8">
          <FaqList items={n.faq} locale={locale} name="no-card-faq" />
        </div>
      </section>

      {/* CTA stays on this page */}
      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 leaf-lg bg-deep px-6 py-12 text-white sm:px-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold uppercase leading-[0.95]">{n.ctaTitle}</h2>
            <p className="mt-3 max-w-lg text-white/70">{n.ctaText}</p>
          </div>
          <a href="#search" className="font-display uppercase tracking-wide shrink-0 leaf-sm bg-sun-400 px-8 py-4 text-lg font-bold text-sea-950 transition hover:bg-sun-300">
            {n.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
