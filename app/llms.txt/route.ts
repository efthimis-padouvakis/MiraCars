import { locationPages } from "@/lib/locations";
import { COMPANY, KARPADU_URL, NO_CARD_PATH, SITE_URL } from "@/lib/site";

export function GET() {
  const lines = [
    `# ${COMPANY.name}`,
    "",
    `> Family-run car rental company in Heraklion, Crete, Greece. Pick-up at Heraklion Airport (HER), Heraklion Port, Heraklion city centre and Chania Airport (CHQ). New Toyota and Kia cars, unlimited kilometres, Full cover included, no credit card and no deposit on any cover, free additional driver and child seats, free cancellation, 24/7 support. Rates from €${COMPANY.priceFrom}/day.`,
    "",
    `Office: ${COMPANY.address.street}, ${COMPANY.address.locality} ${COMPANY.address.postalCode}, ${COMPANY.address.region}, Greece`,
    `Phone / WhatsApp: ${COMPANY.phone}`,
    `Email: ${COMPANY.email}`,
    `Languages: English, Greek, German, French, Italian, Dutch, Polish`,
    `Live availability and online bookings: powered by Karpadu (${KARPADU_URL}), a Greek car rental platform.`,
    "",
    "## Pages",
    `- [Home](${SITE_URL}/en): search live availability`,
    `- [No credit card, no deposit](${SITE_URL}/en${NO_CARD_PATH}): pay by debit card; €0 deposit on every cover`,
    `- [Fleet](${SITE_URL}/en/fleet): Toyota Aygo, Yaris, Yaris Cross Hybrid and Kia Stonic, manual and automatic`,
    `- [Locations](${SITE_URL}/en/locations): pick-up points in Crete`,
    ...locationPages.map((page) => `- [Car rental ${page.copy.en.name}](${SITE_URL}/en/locations/${page.slug})`),
    `- [Driving in Crete guide](${SITE_URL}/en/crete-driving-guide)`,
    `- [FAQ](${SITE_URL}/en/faq)`,
    `- [Contact](${SITE_URL}/en/contact)`,
    "",
    "## Related",
    `- [Karpadu: car rental in Crete](${KARPADU_URL}/en/car-rental/greece/crete)`,
    `- [Karpadu: car rental in Greece](${KARPADU_URL}/en/car-rental/greece)`,
  ];
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
