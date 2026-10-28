import Rich from "@/components/Rich";
import { PlusIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n/config";
import { karpaduHref } from "@/lib/karpaduLinks";

export default function FaqList({
  items,
  locale,
  name = "faq",
  headingLevel = 3,
}: {
  items: { q: string; a: string }[];
  locale: Locale;
  name?: string;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="reveal divide-y divide-sea-100 border-y border-sea-100">
      {items.map((item, index) => (
        <details key={item.q} name={name} className="group relative" open={index === 0}>
          <span aria-hidden="true" className="absolute -left-4 bottom-4 top-4 w-[3px] rounded-full bg-sun-400 opacity-0 transition group-open:opacity-100 max-sm:hidden" />
          <summary className="flex cursor-pointer items-start gap-4 py-5 text-left text-[17px] font-semibold text-ink transition hover:text-sea-700">
            <span className="mt-px grid size-7 shrink-0 place-items-center rounded-full border-2 border-sun-400 text-sm text-sun-600 transition duration-300 group-open:rotate-45 group-open:bg-sun-400 group-open:text-sea-950">
              <PlusIcon />
            </span>
            {/* Headings keep the body face here: condensed caps would be hard to read as questions */}
            <Heading className="flex-1 font-sans">{item.q}</Heading>
          </summary>
          <p className="-mt-1 pb-6 pl-11 leading-relaxed text-ink/70">
            <Rich
              text={item.a}
              values={{
                karpadu: (
                  <a href={karpaduHref("home", locale, "miracars-faq")} className="font-semibold text-sea-700 underline decoration-sun-400 underline-offset-4">
                    Karpadu
                  </a>
                ),
              }}
            />
          </p>
        </details>
      ))}
    </div>
  );
}
