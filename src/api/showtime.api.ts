import http from "@/config/http";

export const getShowtimeByMovieId = (id: string) => http.get(`showtimes/movie/${id}`);

export const getShowtimeByCinemaIdAndMovieIdAndShowDate = (
  cinemaId: string,
  movieId: string,
  showDate: string,
) => http.get(`showtimes/cinema/${cinemaId}/movie/${movieId}/date/${showDate}`);

export const getProjectionTypeByShowTimeId = (id: string) =>
  http.get(`showtimes/${id}/projection-type`);
