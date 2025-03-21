import { ChevronLeft, ChevronRight } from "lucide-react";

import { getShowtimeByMovieId } from "@/api/showtime.api";

type DateSelectorProps = {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  movieId: any;
};
const fetchShowtimeByMovieId = async (id: any) => {
  const response = await getShowtimeByMovieId(id);

  return response.data.data;
};

export default function DateSelector({
  selectedDate,
  setSelectedDate,
  movieId,
}: DateSelectorProps) {
  const dates = Array.from({ length: 5 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() + index);

    return {
      date, // giữ nguyên Date object
      day: date.getDate(),
      month: date.toLocaleString("default", { month: "short" }),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      fullDate: date.toISOString().split("T")[0], // YYYY-MM-DD
    };
  });

  // const { data: showtimes, isLoading } = useQuery<Movie>({
  //   queryKey: ["showtimes"],
  //   queryFn: fetchShowtimeByMovieId,
  // });

  return (
    <div className='flex items-center space-x-4 mb-8'>
      <span className='text-gray-400'>Date</span>
      <button className='p-2 rounded-full bg-[#2D2E33]'>
        <ChevronLeft className='w-4 h-4' />
      </button>
      <div className='flex space-x-2'>
        {dates.map((d) => (
          <button
            key={d.fullDate}
            className={`flex flex-col items-center w-16 p-2 rounded-3xl ${
              selectedDate === d.fullDate ? "bg-[#75ADEF]" : "bg-[#2D2E33]"
            }`}
            onClick={() => setSelectedDate(d.fullDate)}
          >
            <span
              className={`text-xs ${selectedDate === d.fullDate ? "text-[#292828]" : "text-gray-400"}`}
            >
              {d.month}
            </span>
            <span
              className={`text-lg font-bold ${selectedDate === d.fullDate ? "text-[#1A1A1A]" : "text-[#E3E3E3]"}`}
            >
              {d.day}
            </span>
            <span
              className={`text-xs ${selectedDate === d.fullDate ? "text-[#292828]" : "text-gray-400"}`}
            >
              {d.weekday}
            </span>
          </button>
        ))}
      </div>
      <button className='p-2 rounded-full bg-[#2D2E33]'>
        <ChevronRight className='w-4 h-4' />
      </button>
    </div>
  );
}
