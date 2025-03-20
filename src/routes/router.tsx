import { createBrowserRouter } from "react-router-dom";

import BookingPage from "@/pages/BookingPage";
import HomePage from "@/pages/HomePage";
import IndexPage from "@/pages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book/:movieId",
    element: <BookingPage />,
  },
  {
    path: "/index",
    element: <IndexPage />,
  },
]);
