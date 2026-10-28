import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BeyondCrete from "@/components/BeyondCrete";
import CreteMap from "@/components/CreteMap";
import { SunDisc, Wave } from "@/components/Decor";
import FaqList from "@/components/FaqList";
import FleetCard from "@/components/FleetCard";
import GoogleReviews, { GoogleRating } from "@/components/GoogleReviews";
import JsonLd from "@/components/JsonLd";
import SearchForm from "@/components/SearchForm";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRightIcon,
  BookIcon,
  CardIcon,
  CheckIcon,
  HeadsetIcon,
  InfinityIcon,
  PlaneIcon,
  RefreshIcon,
  ShieldIcon,
  ShipIcon,
  SparkleIcon,
  TagIcon,
  TownIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { fleet } from "@/lib/fleet";
import { fill, getDictionary } from "@/lib/i18n";
import { localeFrom } from "@/lib/i18n/params";
import { locationPages } from "@/lib/locations";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { COMPANY, NO_CARD_PATH, whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const t = getDictionary(locale);
  return pageMetadata({ locale, path: "", title: t.meta.homeTitle, description: t.meta.homeDescription, absoluteTitle: true });
}

const USP_ICONS = [PlaneIcon, CardIcon, UsersIcon, RefreshIcon, SparkleIcon, HeadsetIcon];
const TRUST_ICONS = [InfinityIcon, ShieldIcon, RefreshIcon, HeadsetIcon];
const KIND_ICONS = { Airport: PlaneIcon, Port: ShipIcon, Downtown: TownIcon };

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const locale = await localeFrom(params);
  const t = getDictionary(locale);
  const faqItems = t.faq.items.slice(0, 6);

  return (
    <>
      <JsonLd data={faqJsonLd(faqItems)} />

      {/* Hero. Clip only sideways, so the search dropdowns can still hang below it */}
      <section className="bg-summer relative overflow-x-clip">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-12 lg:pt-14">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-6">
            <div>
              <p className="flex animate-rise items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-sea-700 sm:text-sm">
                <span aria-hidden="true" className="h-[3px] w-8 rounded-full bg-sun-400" />
                {t.home.heroEyebrow}
              </p>
              <h1 className="mt-3 max-w-2xl animate-lift text-balance font-display text-[2.6rem] font-extrabold uppercase leading-[0.92] text-sea-800 sm:mt-5 sm:text-7xl lg:text-[5.5rem]">
                {t.home.heroTitle}
              </h1>
              <p className="mt-5 max-w-xl animate-rise text-pretty text-lg leading-relaxed text-ink/70 [animation-delay:120ms] max-sm:hidden">{t.home.heroSubtitle}</p>
              <div className="mt-4 flex animate-rise flex-wrap items-center gap-3 [animation-delay:200ms] sm:mt-7">
                <p className="leaf-sm inline-flex items-center gap-2 bg-white px-4 py-2 text-sm font-bold text-sea-800 shadow-soft ring-1 ring-sun-200">
                  <TagIcon className="text-sun-500" /> {fill(t.home.fromPrice, { price: COMPANY.priceFrom })}
                </p>
                <GoogleRating locale={locale} t={t} tone="light" className="max-sm:hidden" />
              </div>
            </div>
            <div className="relative hidden aspect-[5/4] lg:block">
              <SunDisc className="right-[9%] top-[3%] size-[66%] animate-sun-up [animation-delay:80ms]" />
              <span aria-hidden="true" className="absolute inset-x-[6%] bottom-[14%] h-[12%] rounded-[50%] bg-sea-900/25 blur-xl" />
              <Image
                src={fleet[0].image}
                alt={`${fleet[0].name} ${fleet[0].year}, ${COMPANY.name} Crete`}
                fill
                priority
                sizes="(min-width: 1280px) 560px, 45vw"
                className="animate-drive-in object-contain object-bottom pb-[8%] drop-shadow-[0_22px_24px_rgba(14,31,55,0.28)] [animation-delay:300ms]"
              />
            </div>
          </div>

          <div id="search" className="leaf-lg relative z-20 mt-6 animate-rise scroll-mt-28 bg-white [animation-delay:250ms] p-3 shadow-[0_28px_60px_-30px_rgb(31_68_121/0.55)] ring-1 ring-sea-100 sm:p-5 lg:mt-2">
            <h2 className="px-2 pb-3 pt-1 font-display text-xl font-bold uppercase tracking-wide text-sea-800">{t.search.title}</h2>
            <SearchForm locale={locale} t={{ search: t.search, common: t.common }} />
          </div>
          {/* On phones the rating and subtitle sit under the form, so the form fits in the first screen */}
          <GoogleRating locale={locale} t={t} tone="light" className="ml-2 mt-5 sm:hidden" />
          <p className="mt-4 px-2 text-pretty leading-relaxed text-ink/70 sm:hidden">{t.home.heroSubtitle}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 px-2 sm:flex sm:flex-wrap sm:gap-x-8">
            {t.home.trust.map((item, index) => {
              const Icon = TRUST_ICONS[index % TRUST_ICONS.length];
              return (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-sea-900/80">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-sea-700 ring-1 ring-wave-200">
                    <Icon />
                  </span>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <Wave className="mt-6 text-white" />
      </section>

      {/* No credit card strip */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <Link href={`/${locale}${NO_CARD_PATH}`} className="leaf reveal group flex items-center gap-4 bg-sea-800 px-5 py-4 text-white transition hover:bg-sea-700 sm:px-7 sm:py-5">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun-400 text-xl text-sea-950">
            <CardIcon />
          </span>
          <span className="flex-1 text-sm sm:text-base">
            <span className="font-display text-lg font-bold uppercase tracking-wide sm:text-xl">{t.noCard.calloutTitle}</span>{" "}
            <span className="block text-white/70 sm:inline">{t.noCard.calloutText}</span>
          </span>
          <span className="hidden font-display text-lg font-bold uppercase tracking-wide text-sun-300 md:inline">{t.noCard.calloutCta}</span>
          <ArrowRightIcon className="shrink-0 text-sun-300 transition group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Why Mira: numbered list instead of cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[0.8fr_1.6fr] lg:gap-16 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={t.meta.siteName} title={t.home.uspTitle} />
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-0">
          {t.home.usps.map((usp, index) => {
            const Icon = USP_ICONS[index % USP_ICONS.length];
            return (
              <li key={usp.title} className="reveal border-t-2 border-sea-100 pt-6">
                <div className="flex items-center justify-between">
                  <span aria-hidden="true" className="font-display text-5xl font-extrabold leading-none text-sun-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full bg-wave-50 text-2xl text-sea-700 ring-1 ring-wave-100">
                    <Icon />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">{usp.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{usp.text}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Fleet on a sea-coloured band */}
      <section>
        <Wave className="text-wave-50" back="fill-wave/25" />
        <div className="bg-wave-50 pb-14 pt-6 lg:pb-16">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:flex-row sm:items-end sm:px-6">
            <SectionHeading eyebrow={t.nav.fleet} title={t.home.fleetTitle} text={t.home.fleetText} />
            <Link
              href={`/${locale}/fleet`}
              className="leaf-sm inline-flex shrink-0 items-center gap-2 self-start border-2 border-sea-800 px-5 py-2.5 font-display text-base font-bold uppercase tracking-wide text-sea-800 transition hover:bg-sea-800 hover:text-white sm:self-auto"
            >
              {t.home.fleetCta} <ArrowRightIcon />
            </Link>
          </div>
          <ul className="no-scrollbar reveal mx-auto mt-10 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {fleet.slice(0, 4).map((car) => (
              <li key={car.slug} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
                <FleetCard car={car} t={t} href={`/${locale}#search`} />
              </li>
            ))}
          </ul>
        </div>
        <Wave className="rotate-180 text-wave-50" back="fill-wave/25" />
      </section>

      {/* Steps: big outlined numbers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading title={t.home.stepsTitle} />
        <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {t.home.steps.map((step, index) => (
            <li key={step.title} className="reveal">
              <span aria-hidden="true" className="fill-on-view block font-display text-[6.5rem] font-extrabold leading-[0.85] text-transparent [-webkit-text-stroke:2px_var(--color-sun-400)]">
                {index + 1}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <GoogleReviews locale={locale} t={t} />

      {/* Locations: list beside the map */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <SectionHeading eyebrow={t.nav.locations} title={t.home.locationsTitle} text={t.home.locationsText} />
          <ul className="reveal mt-8 divide-y divide-sea-100 border-y border-sea-100">
            {locationPages.map((page) => {
              const Icon = KIND_ICONS[page.kind];
              return (
                <li key={page.slug}>
                  <Link href={`/${locale}/locations/${page.slug}`} className="group flex items-center gap-4 py-4 font-semibold text-ink">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun-50 text-lg text-sun-700 ring-1 ring-sun-200 transition group-hover:bg-sun-400 group-hover:text-sea-950">
                      <Icon />
                    </span>
                    <span className="flex-1 transition group-hover:text-sea-700">{fill(t.locations.rentIn, { place: page.copy[locale].name })}</span>
                    <ArrowRightIcon className="text-sea-300 transition group-hover:translate-x-1 group-hover:text-sea-700" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="leaf-lg reveal mt-10 bg-wave-50 px-4 py-10 ring-1 ring-wave-100 sm:px-8 lg:mt-0">
          <CreteMap locale={locale} t={t} className="mx-auto max-w-4xl" />
        </div>
      </section>

      {/* Free extras + guide */}
      <section className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="leaf-lg reveal relative isolate grid overflow-hidden bg-sun-400 p-7 text-sea-950 sm:p-10 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-6">
          <span aria-hidden="true" className="absolute -right-20 -top-24 -z-10 size-80 rounded-full bg-sun-300/70" />
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95]">{t.home.extrasTitle}</h2>
            <p className="mt-3 max-w-md leading-relaxed text-sea-950/75">{t.home.extrasText}</p>
            <Link
              href={`/${locale}#search`}
              className="leaf-sm mt-7 inline-flex items-center gap-2 bg-sea-800 px-6 py-3 font-display text-lg font-bold uppercase tracking-wide text-white transition hover:bg-sea-700"
            >
              {t.home.extrasCta} <ArrowRightIcon />
            </Link>
          </div>
          <div className="relative mt-8 aspect-[16/10] md:mt-0">
            <Image src={fleet[2].image} alt={`${fleet[2].name} ${fleet[2].year}, ${COMPANY.name}`} fill sizes="(min-width: 1024px) 320px, 80vw" className="object-contain" />
          </div>
        </div>
        <Link href={`/${locale}/crete-driving-guide`} className="leaf-lg reveal group flex flex-col justify-between bg-sea-800 p-7 text-white transition hover:bg-sea-700 sm:p-10">
          <span className="grid size-12 place-items-center rounded-full bg-wave text-2xl text-sea-950">
            <BookIcon />
          </span>
          <span className="mt-8 block">
            <span className="block font-display text-3xl font-extrabold uppercase leading-[0.95]">{t.guide.title}</span>
            <span className="mt-3 line-clamp-3 block leading-relaxed text-white/70">{t.guide.intro}</span>
            <span className="mt-5 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-sun-300">
              {t.common.readMore} <ArrowRightIcon className="transition group-hover:translate-x-1" />
            </span>
          </span>
        </Link>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow={t.nav.faq} title={t.home.faqTitle} text={t.faq.intro} />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink()} className="leaf-sm inline-flex items-center gap-2 bg-whatsapp px-5 py-2.5 font-display text-base font-bold uppercase tracking-wide text-sea-950">
              <WhatsAppIcon /> WhatsApp
            </a>
            <Link
              href={`/${locale}/faq`}
              className="leaf-sm inline-flex items-center gap-2 border-2 border-sea-800 px-5 py-2 font-display text-base font-bold uppercase tracking-wide text-sea-800 transition hover:bg-sea-800 hover:text-white"
            >
              {t.common.seeAll} <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <FaqList items={faqItems} locale={locale} />
      </section>

      <BeyondCrete locale={locale} t={t} />

      {/* Final CTA: sun setting behind the sea */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="leaf-lg reveal relative isolate overflow-hidden bg-sea-800 px-6 pb-20 pt-14 text-white sm:px-12 sm:pb-24 sm:pt-16">
          <SunDisc className="sun-on-view -bottom-32 right-[8%] -z-10 size-72 sm:-bottom-40 sm:size-96" />
          <Wave className="absolute inset-x-0 bottom-0 -z-10 text-sea-900" back="fill-wave/30" />
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">{t.home.ctaTitle}</h2>
              <p className="mt-3 max-w-lg text-white/75">{t.home.ctaText}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-white/85">
                {t.home.trust.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="text-wave" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/${locale}#search`}
              className="leaf-sm shrink-0 bg-sun-400 px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-sea-950 transition hover:bg-sun-300"
            >
              {t.home.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
