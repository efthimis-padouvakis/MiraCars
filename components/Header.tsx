import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import LanguageSwitcher, { LanguageSwitcherFallback } from "@/components/LanguageSwitcher";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { COMPANY, whatsappLink } from "@/lib/site";

export default function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const items = [
    { href: `/${locale}/fleet`, label: t.nav.fleet },
    { href: `/${locale}/locations`, label: t.nav.locations },
    { href: `/${locale}/crete-driving-guide`, label: t.nav.guide },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <>
      {/* Contact strip scrolls away; only on wide screens, where the mobile menu (pinned under the header) is hidden */}
      <div className="hidden bg-sea-800 text-[13px] text-white/75 xl:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6">
          <a href={COMPANY.mapUrl} target="_blank" rel="noopener" className="flex items-center gap-2 transition hover:text-white">
            <PinIcon className="text-wave" /> {COMPANY.address.street}, {COMPANY.address.locality}, {COMPANY.address.region}
          </a>
          <div className="flex items-center gap-6">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 transition hover:text-white">
              <PhoneIcon className="text-wave" /> {COMPANY.phone}
            </a>
            <a href={whatsappLink()} className="flex items-center gap-2 transition hover:text-white">
              <WhatsAppIcon className="text-wave" /> WhatsApp
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 transition hover:text-white">
              <MailIcon className="text-wave" /> {COMPANY.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 shadow-[0_1px_0_rgb(31_68_121/0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
          <Link href={`/${locale}`} className="shrink-0 rounded-lg" aria-label={`${COMPANY.name}, ${t.nav.home}`}>
            <Image src="/img/brand/logo.svg" alt={COMPANY.name} width={148} height={40} priority className="h-10 w-auto sm:h-11" />
          </Link>

          <nav className="hidden self-stretch xl:block" aria-label={t.nav.menu}>
            <Suspense fallback={<NavLinks items={items} pathname="" />}>
              <NavLinks items={items} />
            </Suspense>
          </nav>

          <div className="flex items-center gap-2">
            <Suspense fallback={<LanguageSwitcherFallback locale={locale} label={t.nav.language} />}>
              <LanguageSwitcher locale={locale} label={t.nav.language} />
            </Suspense>
            <Link
              href={`/${locale}#search`}
              className="leaf-sm hidden bg-sun-400 px-5 py-2.5 font-display text-[15px] font-bold uppercase tracking-wide text-sea-950 transition hover:bg-sun-300 sm:inline-flex"
            >
              {t.nav.bookNow}
            </Link>
            <MobileMenu
              items={[{ href: `/${locale}`, label: t.nav.home }, ...items]}
              label={t.nav.menu}
              closeLabel={t.common.close}
              bookNow={{ href: `/${locale}#search`, label: t.nav.bookNow }}
              phone={COMPANY.phone}
              phoneHref={COMPANY.phoneHref}
              whatsappHref={whatsappLink()}
            />
          </div>
        </div>
      </header>
    </>
  );
}
