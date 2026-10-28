import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Fira_Sans, Fira_Sans_Extra_Condensed } from "next/font/google";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import WhatsAppFab from "@/components/WhatsAppFab";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/config";
import { businessJsonLd, websiteJsonLd } from "@/lib/seo";
import { COMPANY, SITE_URL } from "@/lib/site";

const firaSans = Fira_Sans({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-fira-sans",
  display: "swap",
});

// Display face for headings, buttons and nav: condensed like the logo, and it has Greek
const firaCondensed = Fira_Sans_Extra_Condensed({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["600", "700", "800"],
  variable: "--font-fira-condensed",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.homeTitle, template: `%s | ${COMPANY.name}` },
    description: t.meta.homeDescription,
    applicationName: COMPANY.name,
    formatDetection: { telephone: true, email: true, address: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={`${firaSans.variable} ${firaCondensed.variable}`} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#main" className="sr-only z-50 rounded-lg bg-white px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          {t.common.skipToContent}
        </a>
        <JsonLd data={[businessJsonLd(lang, t.meta.homeDescription), websiteJsonLd(lang)]} />
        <Header locale={lang} t={t} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} t={t} />
        <Suspense>
          <WhatsAppFab />
        </Suspense>
      </body>
    </html>
  );
}
