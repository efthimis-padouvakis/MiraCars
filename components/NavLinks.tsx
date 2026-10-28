"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
  href: string;
  label: string;
}

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Links({ items, pathname }: { items: Item[]; pathname: string }) {
  return (
    <ul className="flex h-full items-stretch gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href} className="flex">
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`group relative flex items-center whitespace-nowrap px-3.5 font-display text-[17px] font-semibold uppercase tracking-wide transition ${
                active ? "text-sea-800" : "text-ink/65 hover:text-sea-800"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3.5 bottom-0 h-[3px] rounded-t-full bg-sun-400 transition ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function CurrentLinks({ items }: { items: Item[] }) {
  return <Links items={items} pathname={usePathname()} />;
}

export default function NavLinks({ items, pathname }: { items: Item[]; pathname?: string }) {
  if (pathname !== undefined) return <Links items={items} pathname={pathname} />;
  return <CurrentLinks items={items} />;
}
