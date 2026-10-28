/**
 * Mira's own photos in public/img/brand/cars, shown instead of the backend's stock images.
 * Empty for now: every car uses its Karpadu image. Add entries like
 * { name: "Toyota Yaris", year: 2026, file: "toyota-yaris-2026" } once real photos exist.
 */
const CAR_IMAGES: { name: string; year: number; file: string }[] = [];

/** "Citroën C3-Aircross" and "Citroen C3 Aircross" compare equal. */
function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/** Photo of the same make and model, closest year first; null when Mira has no photo of it. */
export function carImage(make: string, model: string, year?: number) {
  const wanted = normalize(`${make} ${model}`);
  const matches = CAR_IMAGES.filter((car) => normalize(car.name) === wanted);
  if (!matches.length) return null;
  const target = year ?? new Date().getFullYear();
  const best = matches.reduce((a, b) => (Math.abs(b.year - target) < Math.abs(a.year - target) ? b : a));
  return `/img/brand/cars/${best.file}.avif`;
}
