import http from "@/config/http";

export const getCinemaWithActiveStatus = () => http.get("cinema/active");

export const getCinemaWithActiveStatusAndMovieId = (id: string | undefined) =>
  http.get(`/cinema/active-with-movie/${id}`);
