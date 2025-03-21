import { useState } from "react";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@heroui/react";

import BookingSummary from "@/components/booking/BookingSummary";
import DateSelector from "@/components/booking/DateSelector";
import MovieInfo from "@/components/booking/MovieInfo";
import SeatSelector from "@/components/booking/SeatSelector";
import ShowtimeSelector from "@/components/booking/ShowtimeSelector";
// import { movies } from "@/data/movie";
import { DefaultLayout } from "@/layouts/default";
import { getMovieById } from "@/api/movie.api";
import { Movie } from "@/types/movie.type";
const fetchMovieById = async ({ queryKey }: { queryKey: [string, string | undefined] }) => {
  const [, id] = queryKey;

  if (!id) throw new Error("Movie ID is required");
  const response = await getMovieById(id);

  return response.data.data;
};

export default function MoviePage() {
  // const { movieId } = useParams<{ movieId: string }>();
  const location = useLocation();
  const movieId = location.state?.id;
  // const movie = movies.find((m) => m.id.toString() === movieId) || movies[0];
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();

    return today.toISOString().split("T")[0]; // '2025-03-13'
  });
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { data: movie, isLoading } = useQuery<Movie>({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovieById({ queryKey: ["movie", movieId] }),
  });

  console.log(selectedDate);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center fixed inset-0 bg-black bg-opacity-50 z-50'>
        <CircularProgress className='w-48 h-48' />
      </div>
    );
  }

  return (
    //
    <DefaultLayout>
      <div className='max-w-7xl mx-auto py-8 min-h-screen'>
        <MovieInfo movie={movie} />

        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32'>
          <DateSelector
            movieId={movieId}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <ShowtimeSelector
            movieId={movieId}
            selectedAddress={selectedAddress}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            setSelectedAddress={setSelectedAddress}
            setSelectedTime={setSelectedTime}
            setSelectedType={setSelectedType}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_19rem] gap-8 lg:gap-32 mt-8'>
          {/* SeatSelector chỉ mở khi chọn đủ date, address, time, type */}
          <div
            className={
              selectedDate && selectedAddress && selectedTime
                ? ""
                : "opacity-50 pointer-events-none"
            }
          >
            <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
          </div>

          {/* BookingSummary chỉ mở khi chọn ghế */}
          <div className={selectedSeats.length > 0 ? "" : "opacity-50 pointer-events-none"}>
            <BookingSummary selectedSeats={selectedSeats} />
          </div>
        </div>

        {/* Thông báo yêu cầu chọn đủ thông tin */}
        {!(
          selectedDate &&
          selectedAddress &&
          selectedTime &&
          selectedType &&
          selectedSeats.length > 0
        ) && (
          <div className='flex justify-center mt-8'>
            <p className='text-lg font-medium text-center'>
              Please select a date, address, time, type, and seats to proceed.
            </p>
          </div>
        )}
      </div>
    </DefaultLayout>

    //
  );
}
