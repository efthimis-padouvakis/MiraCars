import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BagIcon, BoltIcon, FuelIcon, GearIcon, LeafIcon, UsersIcon } from "@/components/icons";
import type { FleetCar } from "@/lib/fleet";
import { fill, type Dictionary } from "@/lib/i18n";

export type FleetCardText = Pick<Dictionary, "car" | "common" | "fleet" | "meta">;

export default function FleetCard({ car, t, href, priority = false }: { car: FleetCar; t: FleetCardText; href: string; priority?: boolean }) {
  const FuelGlyph = car.fuel === "Electric" ? BoltIcon : car.fuel === "Hybrid" ? LeafIcon : FuelIcon;
  const green = car.fuel !== "Petrol";
  return (
    <article className="leaf group relative flex h-full flex-col overflow-hidden bg-white shadow-soft ring-1 ring-sea-100 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* Car in front of a low sun, on a strip of sea */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <span aria-hidden="true" className="absolute left-1/2 top-[14%] size-[58%] -translate-x-1/2 rounded-full bg-sun-100 transition duration-500 group-hover:bg-sun-200" />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[30%] bg-wave-50" />
        <Image
          src={car.image}
          alt={`${car.name} ${car.year}, ${t.meta.siteName}`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 85vw"
          className="object-contain px-5 pb-2 pt-6 transition duration-500 group-hover:translate-x-1.5 group-hover:scale-[1.04]"
        />
        <span className="absolute left-0 top-4 rounded-r-sm bg-sea-800 py-1 pl-4 pr-2.5 text-[11px] font-bold uppercase tracking-wider text-white">
          {t.car.sizes[car.size] ?? car.size}
        </span>
        {green && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-sm bg-wave-100 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-sea-800">
            <FuelGlyph /> {t.car.fuel[car.fuel]}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-display text-2xl font-bold uppercase leading-none text-sea-800">{car.name}</h3>
        <p className="mt-1.5 text-sm text-ink/50">
          {car.year} · {t.common.orSimilar}
        </p>
        <ul className="mb-5 mt-4 grid grid-cols-2 border-y border-sand-200 text-sm text-ink/70 [&>li:nth-child(even)]:border-l [&>li:nth-child(even)]:border-sand-200 [&>li:nth-child(even)]:pl-3 [&>li:nth-child(n+3)]:border-t [&>li:nth-child(n+3)]:border-t-sand-200">
          <li className="flex items-center gap-2 py-2.5">
            <UsersIcon className="text-wave-600" /> {fill(t.car.seats, { n: car.seats })}
          </li>
          <li className="flex items-center gap-2 py-2.5">
            <GearIcon className="text-wave-600" /> {t.car.transmission[car.transmission]}
          </li>
          <li className="flex items-center gap-2 py-2.5">
            <FuelGlyph className="text-wave-600" /> {t.car.fuel[car.fuel]}
          </li>
          <li className="flex items-center gap-2 py-2.5">
            <BagIcon className="text-wave-600" /> {fill(car.bagSize === "big" ? t.car.bigBags : t.car.smallBags, { n: car.bags })}
          </li>
        </ul>
        <Link
          href={href}
          className="mt-auto flex items-center justify-between gap-3 font-display text-lg font-bold uppercase tracking-wide text-sea-800 after:absolute after:inset-0"
        >
          {t.fleet.checkPrices}
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sun-400 text-sea-950 transition group-hover:translate-x-0.5 group-hover:bg-sun-300">
            <ArrowRightIcon />
          </span>
        </Link>
      </div>
    </article>
  );
}
