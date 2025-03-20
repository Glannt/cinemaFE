import { Category } from "./category.type";
import { Image } from "./image.type";
import { Showtime } from "./showtime.type";

type Movie = {
  id: number;
  title: string;
  releaseDate: string; // Dùng string vì DATE thường được lưu dưới dạng ISO string
  duration: number; // Số phút
  director: string;
  images: Image[];
  categories: Category[];
  allowedToShow: boolean;
  createdAt: string; // Timestamp dạng ISO string
  updatedAt: string; // Timestamp dạng ISO string
  status: string;
  description: string;
  showtimes: Showtime[];
};
export type { Movie };
