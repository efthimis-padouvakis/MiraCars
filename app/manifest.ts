import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mira Cars – Car rental in Crete",
    short_name: "Mira Cars",
    description: "Car rental in Crete with pick-up at Heraklion and Chania airport.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcfaf6",
    theme_color: "#193254",
    icons: [{ src: "/img/brand/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
