// Copy by hand from Mira's Google Maps listing once it has reviews: set GOOGLE_REVIEWS (rating, count,
// syncedAt, place links) and add verbatim quotes, authors shortened to first name + initial.
// While GOOGLE_REVIEWS is null the rating pill and the reviews section don't render.

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

export const GOOGLE_REVIEWS: GoogleListing | null = null;

export const reviews: Review[] = [];
