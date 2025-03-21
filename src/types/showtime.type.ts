type Showtime = {
  id: number;
  movieTitle: number;
  hallName: number;
  startTime: string; // ISO timestamp format (e.g., "2024-02-06T12:00:00Z")
  endTime: string;
  // duration: number; // In minutes
  // availableSeat: number;
  // createdAt: string; // ISO timestamp format
  // updatedAt: string; // ISO timestamp format
  // status: string;
  showDate: string;
  price: number;
  projectionType: string;
};
export type { Showtime };
