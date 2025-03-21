import { createBrowserRouter } from "react-router-dom";

// import BookingPage from "@/pages/BookingPage";
import HomePage from "@/pages/HomePage";
import IndexPage from "@/pages";
import MoviePage from "@/pages/BookingPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book/:name",
    element: <MoviePage />,
  },
  {
    path: "/index",
    element: <IndexPage />,
  },
]);
