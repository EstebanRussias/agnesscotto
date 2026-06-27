export type Oeuvre = {
  id: number;
  title: string;
  type: string;
  dimensions: string;
  image: string;
  description?: string;
};

export const oeuvres: Oeuvre[] = [
  {
    id: 1,
    title: "LEO",
    type: "Aquarelle",
    dimensions: "40x50",
    image: "/images/oeuvres/leo.jpg",
    description: "Mon petit fils ceinture jaune",
  },
  {
    id: 2,
    title: "Times Square",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/timesquare.jpg",
  },
  {
    id: 3,
    title: "Le croiseur",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/batiment.jpg",
  },    
  {
    id: 4,
    title: "TATUATA",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/femme.jpg",
  },
  {
    id: 5,
    title: "Le canal",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/orange.jpg",
  },
  {
    id: 6,
    title: "Cancan",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/theatre.jpg",
  },
  {
    id: 7,
    title: "Le smack",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/enfantMere.jpg",
  },
  {
    id: 8,
    title: "Lanzarote",
    type: "...",
    dimensions: "..x..",
    image: "/images/oeuvres/italie.jpg",
    description: "Diptyque de Lanzarote",
  },
  {
    id: 9,
    title: "Marée basse",
    type: "Huile",
    dimensions: "40x40",
    image: "/images/oeuvres/marebasse.jpg",
  },
  {
    id: 10,
    title: "La muscienne",
    type: "Aquarelle",
    dimensions: "50x50",
    image: "/images/oeuvres/music.jpg",
    description: "Fait en démonstration à l'atelier de Saint Augustin de la Société Bordelaise d'aquarelle",
  }, 
  {
    id: 11,
    title: "La barque",
    type: "Aquarelle",
    dimensions: "..x..",
    image: "/images/oeuvres/barque.jpg",
  } 
];

export function getOeuvreById(id: number): Oeuvre | undefined {
  return oeuvres.find((o) => o.id === id);
}