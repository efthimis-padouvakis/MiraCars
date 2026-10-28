// Copied by hand from the Google Maps listing. Update rating, count and syncedAt when new reviews come in.
// Quotes are optional: add verbatim ones, authors shortened to first name + initial. Without quotes the
// home page shows the rating card and links to Google.

// Place ID built from the listing's map IDs (0x149a5b087f3f04e1:0xa1badcc0725d24eb); the CID is the second one
const PLACE_ID = "ChIJ4QQ_fwhbmhQR6yRdcsDcuqE";
export const GOOGLE_CID = "11653869704885118187";

export interface Review {
  author: string;
  text: string;
}

export interface GoogleListing {
  rating: number;
  count: number;
  syncedAt: string;
  url: string;
  writeUrl: string;
  mapsUrl: string;
}

export const GOOGLE_REVIEWS: GoogleListing | null = {
  rating: 5.0,
  count: 209,
  syncedAt: "2026-10-28",
  url: `https://search.google.com/local/reviews?placeid=${PLACE_ID}`,
  writeUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
  mapsUrl: `https://www.google.com/maps?cid=${GOOGLE_CID}`,
};

export const reviews: Review[] = [];
