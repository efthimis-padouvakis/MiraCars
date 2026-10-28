export interface FleetCar {
  slug: string;
  name: string;
  year: number;
  image: string;
  size: string;
  fuel: "Petrol" | "Hybrid" | "Electric";
  transmission: "Automatic" | "Manual";
  seats: number;
  bags: number;
  bagSize: "big" | "small";
}

const BLOB = "https://karpadu.blob.core.windows.net/cars";

export const fleet: FleetCar[] = [
  { slug: "toyota-yaris-cross-2026", name: "Toyota Yaris Cross Hybrid", year: 2026, image: `${BLOB}/Toyota/Toyota-Yaris-Cross-2026-karpadu-rentals.avif`, size: "SUV", fuel: "Hybrid", transmission: "Automatic", seats: 5, bags: 3, bagSize: "big" },
  { slug: "toyota-yaris-automatic-2026", name: "Toyota Yaris", year: 2026, image: `${BLOB}/Toyota/Toyota-Yaris-2026-karpadu-rentals.avif`, size: "Economy", fuel: "Petrol", transmission: "Automatic", seats: 5, bags: 2, bagSize: "big" },
  { slug: "kia-stonic-2026", name: "Kia Stonic", year: 2026, image: `${BLOB}/Kia/KIA-Stonic-2026-karpadu-rentals.avif`, size: "SUV", fuel: "Petrol", transmission: "Manual", seats: 5, bags: 3, bagSize: "big" },
  { slug: "toyota-yaris-2026", name: "Toyota Yaris", year: 2026, image: `${BLOB}/Toyota/Toyota-Yaris-2026-karpadu-rentals.avif`, size: "Economy", fuel: "Petrol", transmission: "Manual", seats: 5, bags: 2, bagSize: "big" },
  { slug: "toyota-aygo-2026", name: "Toyota Aygo", year: 2026, image: `${BLOB}/Toyota/Toyota-Aygo-2026-karpadu-rentals.avif`, size: "Mini", fuel: "Petrol", transmission: "Manual", seats: 4, bags: 2, bagSize: "small" },
];
