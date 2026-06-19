export interface Event {
  id: number;
  titre: string;
  lieu: string;
  type: string;
  dateDebut: string;
  dateFin: string;
  img: string;
  maps: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 1,
    titre: "Exposition d'été 2026",
    lieu: "Château Pichon Bellevue",
    type: "Exposition",
    dateDebut: "2026-04-08",
    dateFin: "2026-06-03",
    img: "/images/evenements/evenement_1.jpg",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.482436770835!2d-0.33194212427299!3d44.893180671357236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55364f14248017%3A0xf47baf2238b129cd!2sCh%C3%A2teau%20Pichon%20Bellevue!5e0!3m2!1sfr!2sfr!4v1781904418204!5m2!1sfr!2sfr",
    description:
      "Découvrez une sélection d'œuvres récentes présentées dans un cadre exceptionnel.",
  },
  {
    id: 2,
    titre: "Exposition d'été 2026",
    lieu: "Château Pichon Bellevue",
    type: "Exposition",
    dateDebut: "2026-04-08",
    dateFin: "2026-06-03",
    img: "/images/evenements/evenement_1.jpg",
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.482436770835!2d-0.33194212427299!3d44.893180671357236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55364f14248017%3A0xf47baf2238b129cd!2sCh%C3%A2teau%20Pichon%20Bellevue!5e0!3m2!1sfr!2sfr!4v1781904418204!5m2!1sfr!2sfr",
    description:
      "Découvrez une sélection d'œuvres récentes présentées dans un cadre exceptionnel.",
  }
];

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
