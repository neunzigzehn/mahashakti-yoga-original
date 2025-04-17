
import { getImageUrl } from '@/utils/supabaseStorage';

export interface Retreat {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  price: string;
  spots: string;
  objectPosition?: string;
}

export const getRetreats = (): Retreat[] => {
  return [
    {
      id: 1,
      title: "YOGA-RETREAT im BIKINI ISLAND & MOUNTAIN HOTEL",
      location: "Port de Sollér, Mallorca, Spanien",
      date: "24.-28.05.2025",
      description: "Yoga-Retreat in den Bergen mit Blick aufs Meer. Erlebe eine perfekte Balance aus Yoga-Praxis, Entspannung und mediterranem Flair auf der wunderschönen Insel Mallorca.",
      image: getImageUrl("retreat-images", "retreat-1.png"),
      price: "Ab 1.950€",
      spots: "8 Plätze verfügbar",
      objectPosition: "center 30%", // Adjusted for better positioning
    },
    {
      id: 2,
      title: "YOGA-RETREAT im VIGILIUS MOUNTAIN HOTEL",
      location: "Lana, Südtirol, 1500m Höhe",
      date: "12.06.-15.06.2025",
      description: "Eintauchen in die alpine Bergwelt auf 1500m Höhe. Ein besonderes Retreat in diesem exklusiven Naturresort, nur mit der Seilbahn erreichbar, für echte Erholung und tiefe Yoga-Praxis.",
      image: getImageUrl("retreat-images", "retreat-2.png"),
      price: "Ab 1.200€",
      spots: "10 Plätze verfügbar",
      objectPosition: "center 25%", // Adjusted for better positioning
    },
    {
      id: 3,
      title: "YOGA-RETREAT im HOLZHOTEL FORSTHOFALM",
      location: "Salzburger Land, Österreich",
      date: "04.-07.09.2025",
      description: "Drei Tage Yoga inmitten der atemberaubenden Bergkulisse des Salzburger Landes. Das nachhaltige Holzhotel bietet den perfekten Rahmen für Yoga und Naturerlebnisse.",
      image: getImageUrl("retreat-images", "retreat-3.png"),
      price: "Ab 990€",
      spots: "12 Plätze verfügbar",
      objectPosition: "center 30%", // Adjusted for better positioning
    },
  ];
};
