import { useState } from "react";
import { useParams } from "react-router";

import BookingSummary from "@/components/booking/BookingSummary";
import DateSelector from "@/components/booking/DateSelector";
import MovieInfo from "@/components/booking/MovieInfo";
import SeatSelector from "@/components/booking/SeatSelector";
import ShowtimeSelector from "@/components/booking/ShowtimeSelector";
import { movies } from "@/data/movie";
import { DefaultLayout } from "@/layouts/default";

export default function BookingPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const movie = movies.find((m) => m.id.toString() === movieId) || movies[0];
  const [selectedDate, setSelectedDate] = useState(11);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  return (
    //
    <DefaultLayout>
      <div className='max-w-7xl mx-auto py-8 min-h-screen'>
        <MovieInfo movie={movie} />
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-32'>
          <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <ShowtimeSelector />
        </div>

        <div className='grid grid-cols-[1fr_300px] gap-32 mt-8'>
          <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          <BookingSummary selectedSeats={selectedSeats} />
        </div>
      </div>
    </DefaultLayout>

    //
  );
}
