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
    title: "Le smack",
    type: "Aquarelle",
    dimensions: "50x60",
    image: "/images/oeuvres/enfantMere.jpg",
},
{
  id: 3,
  title: "La muscienne",
  type: "Aquarelle",
  dimensions: "50x50",
  image: "/images/oeuvres/music.jpg",
  description: "Fait en démonstration à l'atelier de Saint Augustin de la Société Bordelaise d'aquarelle",
}, 
{
  id: 5,
  title: "Marée basse",
  type: "Huile",
  dimensions: "40x40",
  image: "/images/oeuvres/marebasse.jpg",
},
{
    id: 6,
    title: "Times Square",
    type: "Acrylique",
    dimensions: "73x92",
    image: "/images/oeuvres/timesquare.jpg",
  },
  {
      id: 7,
      title: "Le canal",
      type: "Huile",
      dimensions: "50x50",
      image: "/images/oeuvres/orange.jpg",
    },
    {
        id: 8,
        title: "Sieste Grêque",
        type: "Huile",
        dimensions: "40x40",
        image: "/images/oeuvres/italie.jpg",
        description: "Diptyque de la Sieste Grêque",
    },
    {
      id: 9,
      title: "Le croiseur",
      type: "Huile",
      dimensions: "60x78",
      image: "/images/oeuvres/batiment.jpg",
    },    
    {
    id: 10,
    title: "Cancan",
    type: "Mixte",
    dimensions: "50x60",
    image: "/images/oeuvres/theatre.jpg",
  },
    {
      id: 11,
      title: "TATUATA",
      type: "Mixte",
      dimensions: "50x60",
      image: "/images/oeuvres/femme.jpg",
    },
  {
    id: 12,
    title: "La barque",
    type: "Aquarelle",
    dimensions: "40x50",
    image: "/images/oeuvres/barque.jpg",
  } 
];

export function getOeuvreById(id: number): Oeuvre | undefined {
  return oeuvres.find((o) => o.id === id);
}