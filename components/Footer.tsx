import Image from "next/image";
import Link from "next/link";
import CurrentYear from "@/components/CurrentYear";
import { Wave } from "@/components/Decor";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import { fill, type Dictionary } from "@/lib/i18n";
import { karpaduHref } from "@/lib/karpaduLinks";
import { locationPages } from "@/lib/locations";
import { COMPANY, NO_CARD_PATH, whatsappLink } from "@/lib/site";

export default function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const explore = [
    { href: `/${locale}/fleet`, label: t.nav.fleet },
    { href: `/${locale}/locations`, label: t.nav.locations },
    { href: `/${locale}${NO_CARD_PATH}`, label: t.noCard.navLabel },
    { href: `/${locale}/crete-driving-guide`, label: t.nav.guide },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];
  const pickups = locationPages.map((page) => ({
    href: `/${locale}/locations/${page.slug}`,
    label: fill(t.locations.rentIn, { place: page.copy[locale].name }),
  }));
  const social = "grid size-11 place-items-center rounded-full border border-white/15 text-lg text-white/80 transition hover:border-wave hover:text-white";

  return (
    <footer className="mt-10">
      <Wave className="text-sea-950" back="fill-wave/40" />
      <div className="bg-sea-950 text-white/70">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:pt-10">
          {/* Top row: brand on the left, the phone number as the main call to action on the right */}
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <Image src="/img/brand/logo-light.svg" alt={COMPANY.name} width={148} height={40} className="h-12 w-auto" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
            </div>
            <div className="md:text-right">
              <a href={COMPANY.phoneHref} className="font-display text-4xl font-bold tracking-wide text-white transition hover:text-sun-300 sm:text-5xl">
                {COMPANY.phone}
              </a>
              <div className="mt-4 flex gap-2.5 md:justify-end">
                <a href={whatsappLink()} aria-label="WhatsApp" className={social}>
                  <WhatsAppIcon />
                </a>
                <a href={`mailto:${COMPANY.email}`} aria-label={COMPANY.email} className={social}>
                  <MailIcon />
                </a>
                {COMPANY.social.facebook && (
                  <a href={COMPANY.social.facebook} rel="noopener" target="_blank" aria-label="Facebook" className={social}>
                    <FacebookIcon />
                  </a>
                )}
                {COMPANY.social.instagram && (
                  <a href={COMPANY.social.instagram} rel="noopener" target="_blank" aria-label="Instagram" className={social}>
                    <InstagramIcon />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <FooterColumn title={t.footer.explore} items={explore} />
            <FooterColumn title={t.locations.title} items={pickups} />
            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-wide text-wave">{t.footer.contact}</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={COMPANY.mapUrl} target="_blank" rel="noopener" className="flex gap-3 transition hover:text-white">
                    <PinIcon className="mt-0.5 shrink-0 text-base text-sun-300" />
                    <span>
                      {COMPANY.address.street}, {COMPANY.address.locality}
                      <br />
                      {COMPANY.address.postalCode} {COMPANY.address.region}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={COMPANY.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                    <PhoneIcon className="text-base text-sun-300" /> {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 transition hover:text-white">
                    <MailIcon className="text-base text-sun-300" /> {COMPANY.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-black/20">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <span>
                © <CurrentYear fallback={2026} /> {COMPANY.name}. {t.footer.rights}
              </span>
              <Link href={`/${locale}/terms`} className="hover:text-white">
                {t.terms.title}
              </Link>
              <Link href={`/${locale}/privacy`} className="hover:text-white">
                {t.privacy.title}
              </Link>
            </p>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>{t.footer.poweredBy}</span>
              <a href={karpaduHref("home", locale, "miracars-footer")} className="font-bold text-sun-300 hover:text-sun-200">
                Karpadu
              </a>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <a href={karpaduHref("greece", locale, "miracars-footer")} className="hover:text-white">
                {t.footer.greece}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-lg font-bold uppercase tracking-wide text-wave">{title}</h2>
      <ul className="mt-5 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
