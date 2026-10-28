export const SITE_URL = "https://www.miracars.gr";

export const COMPANY = {
  name: "Mira Cars",
  legalName: "Moirakis Michail Myron",
  phone: "+30 694 088 8848",
  phoneHref: "tel:+306940888848",
  whatsapp: "306940888848",
  email: "rental@miracars.gr",
  address: {
    street: "Petlempouri 6",
    locality: "Heraklion",
    region: "Crete",
    postalCode: "71303",
    country: "GR",
  },
  // The Google Maps listing (CID 11653869704885118187, see lib/reviews.ts) and its pin
  mapUrl: "https://www.google.com/maps?cid=11653869704885118187",
  geo: { lat: 35.3388158, lng: 25.1216923 },
  // Add the Facebook / Instagram URLs here when Mira has them; the icons only render for set links.
  social: {} as { facebook?: string; instagram?: string },
  priceFrom: 20,
} as const;

export const KARPADU_URL = "https://www.karpadu.com";

/** Landing page for "car rental Crete no credit card / no deposit" */
export const NO_CARD_PATH = "/no-credit-card-car-rental-crete";

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${COMPANY.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
