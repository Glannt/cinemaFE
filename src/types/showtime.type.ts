type Showtime = {
  showtimeId: number;
  movieId: number;
  hallId: number;
  showTime: string; // ISO timestamp format (e.g., "2024-02-06T12:00:00Z")
  duration: number; // In minutes
  availableSeat: number;
  createdAt: string; // ISO timestamp format
  updatedAt: string; // ISO timestamp format
  status: string;
};
export type { Showtime };
