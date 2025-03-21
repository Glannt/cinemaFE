import http from "@/config/http";

export const getMovieWithShowingStatus = () => http.get("movies/showing");

export const getMovieWithUpcomingStatus = () => http.get("movies/upcoming");

export const getMovieById = (id: string) =>
  http.get(`movies/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getGenresByMovieId = (id: string) => http.get(`movies/${id}/types`);
