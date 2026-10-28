import type { Locale } from "@/lib/i18n/config";
import type { KarpaduPage } from "@/lib/karpaduLinks";

interface LocationCopy {
  name: string;
  intro: string;
  tip: string;
}

export interface LocationPage {
  slug: string;
  stationId: number;
  karpadu: KarpaduPage;
  kind: "Airport" | "Port" | "Downtown";
  copy: Record<Locale, LocationCopy>;
}

export const locationPages: LocationPage[] = [
  {
    slug: "heraklion-airport",
    stationId: 1,
    karpadu: "heraklion",
    kind: "Airport",
    copy: {
      en: {
        name: "Heraklion Airport (HER)",
        intro:
          "Most of our customers start their holiday at Nikos Kazantzakis Airport, on the eastern edge of Heraklion. We hand over your car as you come out of arrivals, so there is no shuttle bus and no queue at a rental desk.",
        tip: "The North Road (VOAK) starts at the airport exit: Hersonissos is about 25 minutes east, Knossos 20 minutes south.",
      },
      el: {
        name: "Αεροδρόμιο Ηρακλείου (HER)",
        intro:
          "Οι περισσότεροι πελάτες μας ξεκινούν τις διακοπές τους από το αεροδρόμιο «Νίκος Καζαντζάκης», στην ανατολική άκρη του Ηρακλείου. Σας παραδίδουμε το αυτοκίνητο μόλις βγείτε από τις αφίξεις, χωρίς λεωφορείο μεταφοράς και χωρίς ουρά σε γκισέ.",
        tip: "Ο ΒΟΑΚ ξεκινά από την έξοδο του αεροδρομίου: η Χερσόνησος απέχει περίπου 25 λεπτά ανατολικά και η Κνωσός 20 λεπτά νότια.",
      },
      de: {
        name: "Flughafen Heraklion (HER)",
        intro:
          "Die meisten unserer Kunden beginnen ihren Urlaub am Flughafen Nikos Kazantzakis am östlichen Stadtrand von Heraklion. Wir übergeben Ihnen den Wagen direkt nach der Ankunftshalle – kein Shuttlebus, keine Schlange am Schalter.",
        tip: "Die Nordstraße (VOAK) beginnt an der Flughafenausfahrt: Chersonissos liegt etwa 25 Minuten östlich, Knossos 20 Minuten südlich.",
      },
      fr: {
        name: "Aéroport d'Héraklion (HER)",
        intro:
          "La plupart de nos clients commencent leurs vacances à l'aéroport Nikos Kazantzakis, à l'est d'Héraklion. Nous vous remettons la voiture dès la sortie des arrivées : pas de navette, pas de file d'attente au comptoir.",
        tip: "La route du nord (VOAK) commence à la sortie de l'aéroport : Hersonissos est à environ 25 minutes à l'est, Knossos à 20 minutes au sud.",
      },
      it: {
        name: "Aeroporto di Heraklion (HER)",
        intro:
          "Quasi tutti i nostri clienti iniziano la vacanza all'aeroporto Nikos Kazantzakis, alla periferia est di Heraklion. Ti consegniamo l'auto appena esci dagli arrivi: niente navetta e niente coda al banco.",
        tip: "La strada nazionale del nord (VOAK) parte dall'uscita dell'aeroporto: Hersonissos è a circa 25 minuti a est, Cnosso a 20 minuti a sud.",
      },
      nl: {
        name: "Luchthaven Heraklion (HER)",
        intro:
          "De meeste klanten beginnen hun vakantie op luchthaven Nikos Kazantzakis, aan de oostkant van Heraklion. We geven je de auto zodra je uit de aankomsthal komt: geen shuttlebus en geen rij bij een balie.",
        tip: "De noordelijke weg (VOAK) begint bij de uitgang van de luchthaven: Hersonissos ligt zo'n 25 minuten naar het oosten, Knossos 20 minuten naar het zuiden.",
      },
      pl: {
        name: "Lotnisko Heraklion (HER)",
        intro:
          "Większość naszych klientów zaczyna urlop na lotnisku im. Nikosa Kazantzakisa, na wschodnim skraju Heraklionu. Przekazujemy auto zaraz po wyjściu z hali przylotów – bez busa i bez kolejki do okienka.",
        tip: "Droga północna (VOAK) zaczyna się przy wyjeździe z lotniska: do Chersonissos jest około 25 minut na wschód, do Knossos 20 minut na południe.",
      },
    },
  },
  {
    slug: "chania-airport",
    stationId: 3,
    karpadu: "chania",
    kind: "Airport",
    copy: {
      en: {
        name: "Chania Airport (CHQ)",
        intro:
          "Flying into western Crete? Pick up your Mira car at Chania's Daskalogiannis Airport on the Akrotiri peninsula, and you can return it at Heraklion at the end of your trip if your route runs east.",
        tip: "Chania's Venetian harbour is about 25 minutes away; Balos and Elafonisi are full-day trips from here.",
      },
      el: {
        name: "Αεροδρόμιο Χανίων (CHQ)",
        intro:
          "Προσγειώνεστε στη δυτική Κρήτη; Παραλάβετε το αυτοκίνητό σας στο αεροδρόμιο «Δασκαλογιάννης» στο Ακρωτήρι και, αν η διαδρομή σας πηγαίνει ανατολικά, επιστρέψτε το στο Ηράκλειο στο τέλος του ταξιδιού.",
        tip: "Το ενετικό λιμάνι των Χανίων απέχει περίπου 25 λεπτά· ο Μπάλος και το Ελαφονήσι είναι ολοήμερες εκδρομές από εδώ.",
      },
      de: {
        name: "Flughafen Chania (CHQ)",
        intro:
          "Sie landen im Westen Kretas? Holen Sie Ihren Mira-Mietwagen am Flughafen Daskalogiannis auf der Halbinsel Akrotiri ab – und geben Sie ihn am Ende in Heraklion zurück, wenn Ihre Route nach Osten führt.",
        tip: "Der venezianische Hafen von Chania ist etwa 25 Minuten entfernt; Balos und Elafonisi sind Tagesausflüge von hier.",
      },
      fr: {
        name: "Aéroport de La Canée (CHQ)",
        intro:
          "Vous arrivez dans l'ouest de la Crète ? Récupérez votre voiture Mira à l'aéroport Daskalogiannis, sur la péninsule d'Akrotiri, et rendez-la à Héraklion en fin de séjour si votre itinéraire part vers l'est.",
        tip: "Le port vénitien de La Canée est à environ 25 minutes ; Balos et Elafonissi sont des excursions d'une journée depuis ici.",
      },
      it: {
        name: "Aeroporto di Chania (CHQ)",
        intro:
          "Atterri nella Creta occidentale? Ritira la tua auto Mira all'aeroporto Daskalogiannis, sulla penisola di Akrotiri, e restituiscila a Heraklion alla fine del viaggio se il tuo itinerario va verso est.",
        tip: "Il porto veneziano di Chania è a circa 25 minuti; Balos ed Elafonissi sono gite di un'intera giornata da qui.",
      },
      nl: {
        name: "Luchthaven Chania (CHQ)",
        intro:
          "Vlieg je naar West-Kreta? Haal je Mira-auto op bij luchthaven Daskalogiannis op het schiereiland Akrotiri, en lever hem aan het eind in Heraklion in als je route naar het oosten gaat.",
        tip: "De Venetiaanse haven van Chania ligt op ongeveer 25 minuten; Balos en Elafonisi zijn dagtochten vanaf hier.",
      },
      pl: {
        name: "Lotnisko Chania (CHQ)",
        intro:
          "Lądujesz na zachodzie Krety? Odbierz auto Mira na lotnisku im. Daskalogiannisa na półwyspie Akrotiri, a jeśli trasa prowadzi na wschód, oddaj je na koniec w Heraklionie.",
        tip: "Wenecki port w Chanii jest około 25 minut drogi; Balos i Elafonisi to całodniowe wycieczki stąd.",
      },
    },
  },
  {
    slug: "heraklion-port",
    stationId: 2,
    karpadu: "heraklion",
    kind: "Port",
    copy: {
      en: {
        name: "Heraklion Port",
        intro:
          "Coming over by ferry from Piraeus, Santorini or another island? We meet you at Heraklion Port with the car, a few minutes from our office in the city, and you drive straight off the quay.",
        tip: "The Koules fortress and the old town are a short walk from the ferry terminal, and the North Road is five minutes away.",
      },
      el: {
        name: "Λιμάνι Ηρακλείου",
        intro:
          "Έρχεστε με πλοίο από Πειραιά, Σαντορίνη ή άλλο νησί; Σας περιμένουμε στο λιμάνι του Ηρακλείου με το αυτοκίνητο, λίγα λεπτά από το γραφείο μας στην πόλη, και ξεκινάτε κατευθείαν από την προβλήτα.",
        tip: "Ο Κούλες και η παλιά πόλη είναι λίγα βήματα από τον σταθμό των πλοίων, και ο ΒΟΑΚ πέντε λεπτά με το αυτοκίνητο.",
      },
      de: {
        name: "Hafen Heraklion",
        intro:
          "Sie kommen mit der Fähre aus Piräus, Santorini oder von einer anderen Insel? Wir erwarten Sie mit dem Wagen am Hafen von Heraklion, wenige Minuten von unserem Büro in der Stadt, und Sie fahren direkt vom Kai los.",
        tip: "Die Festung Koules und die Altstadt sind vom Fährterminal zu Fuß erreichbar, die Nordstraße ist fünf Minuten entfernt.",
      },
      fr: {
        name: "Port d'Héraklion",
        intro:
          "Vous arrivez en ferry du Pirée, de Santorin ou d'une autre île ? Nous vous attendons avec la voiture au port d'Héraklion, à quelques minutes de notre agence en ville, et vous partez directement du quai.",
        tip: "La forteresse de Koules et la vieille ville sont à quelques pas du terminal, et la route du nord à cinq minutes.",
      },
      it: {
        name: "Porto di Heraklion",
        intro:
          "Arrivi in traghetto dal Pireo, da Santorini o da un'altra isola? Ti aspettiamo con l'auto al porto di Heraklion, a pochi minuti dal nostro ufficio in città, e parti direttamente dalla banchina.",
        tip: "La fortezza di Koules e il centro storico sono a pochi passi dal terminal, e la strada del nord è a cinque minuti.",
      },
      nl: {
        name: "Haven van Heraklion",
        intro:
          "Kom je met de veerboot uit Piraeus, Santorini of van een ander eiland? We wachten je op in de haven van Heraklion met de auto, een paar minuten van ons kantoor in de stad, en je rijdt zo van de kade weg.",
        tip: "Fort Koules en de oude stad liggen op loopafstand van de veerterminal, en de noordelijke weg is vijf minuten rijden.",
      },
      pl: {
        name: "Port Heraklion",
        intro:
          "Przypływasz promem z Pireusu, Santorini lub innej wyspy? Czekamy z autem w porcie Heraklion, kilka minut od naszego biura w mieście, i ruszasz prosto z nabrzeża.",
        tip: "Twierdza Koules i stare miasto są kilka kroków od terminalu, a droga północna pięć minut jazdy.",
      },
    },
  },
  {
    slug: "heraklion",
    stationId: 59,
    karpadu: "heraklion",
    kind: "Downtown",
    copy: {
      en: {
        name: "Heraklion",
        intro:
          "Our office is in Heraklion itself, so a city-centre pick-up is our home ground. Collect the car in the centre or, on request, at your hotel, and use the capital as a base for the Archaeological Museum, Knossos and the wine villages to the south.",
        tip: "The centre is mostly one-way streets and pedestrian zones; park in a car park by the old walls and explore on foot.",
      },
      el: {
        name: "Ηράκλειο",
        intro:
          "Το γραφείο μας είναι στο ίδιο το Ηράκλειο, οπότε η παραλαβή στο κέντρο είναι το «γήπεδό» μας. Πάρτε το αυτοκίνητο στο κέντρο ή, κατόπιν αιτήματος, στο ξενοδοχείο σας, και κάντε την πόλη βάση για το Αρχαιολογικό Μουσείο, την Κνωσό και τα κρασοχώρια νότια.",
        tip: "Το κέντρο έχει πολλούς μονόδρομους και πεζόδρομους· αφήστε το αυτοκίνητο σε πάρκινγκ κοντά στα τείχη και περπατήστε.",
      },
      de: {
        name: "Heraklion Stadt",
        intro:
          "Unser Büro liegt in Heraklion selbst, eine Übergabe im Zentrum ist für uns also ein Heimspiel. Holen Sie den Wagen im Zentrum oder auf Wunsch an Ihrem Hotel ab und erkunden Sie von hier das Archäologische Museum, Knossos und die Weindörfer im Süden.",
        tip: "Im Zentrum gibt es viele Einbahnstraßen und Fußgängerzonen; parken Sie an der Stadtmauer und gehen Sie zu Fuß weiter.",
      },
      fr: {
        name: "Héraklion ville",
        intro:
          "Notre agence est à Héraklion même : une remise de voiture en centre-ville, c'est chez nous. Récupérez la voiture dans le centre ou, sur demande, à votre hôtel, et partez de la capitale vers le Musée archéologique, Knossos et les villages viticoles au sud.",
        tip: "Le centre est fait de sens uniques et de rues piétonnes : garez-vous près des remparts et continuez à pied.",
      },
      it: {
        name: "Heraklion città",
        intro:
          "Il nostro ufficio è proprio a Heraklion, quindi il ritiro in centro è casa nostra. Prendi l'auto in centro o, su richiesta, al tuo hotel, e usa il capoluogo come base per il Museo Archeologico, Cnosso e i villaggi del vino a sud.",
        tip: "Il centro è fatto di sensi unici e zone pedonali: parcheggia vicino alle mura e prosegui a piedi.",
      },
      nl: {
        name: "Heraklion stad",
        intro:
          "Ons kantoor staat in Heraklion zelf, dus ophalen in het centrum is een thuiswedstrijd. Haal de auto op in het centrum of, op verzoek, bij je hotel, en gebruik de hoofdstad als uitvalsbasis voor het Archeologisch Museum, Knossos en de wijndorpen in het zuiden.",
        tip: "Het centrum bestaat uit eenrichtingsstraten en voetgangerszones; parkeer bij de oude stadsmuren en ga te voet verder.",
      },
      pl: {
        name: "Heraklion miasto",
        intro:
          "Nasze biuro jest w samym Heraklionie, więc odbiór w centrum to nasz teren. Odbierz auto w centrum lub, na życzenie, pod hotelem i traktuj stolicę jako bazę do Muzeum Archeologicznego, Knossos i winiarskich wiosek na południu.",
        tip: "Centrum to głównie ulice jednokierunkowe i deptaki; zaparkuj przy murach i zwiedzaj pieszo.",
      },
    },
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug) ?? null;
}
