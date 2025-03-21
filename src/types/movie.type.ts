import { Image } from "./image.type";

type Movie = {
  id: string;
  title: string;
  description: string;
  duration: number;
  director: string;
  // cast: string | null;
  genres: string[]; // mảng string
  releaseDate: string; // ISO date string
  images: Image[];
  status: "showing" | "upcoming" | string; // tùy thêm các status khác
};
export type { Movie };
