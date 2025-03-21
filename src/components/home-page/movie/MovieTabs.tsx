import { Tabs, Tab, Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

import { MovieCard } from "./MovieCard";

// import { movies } from "@/data/movie";
import { getMovieWithShowingStatus, getMovieWithUpcomingStatus } from "@/api/movie.api";
import { Movie } from "@/types/movie.type";

const fetchMoviesShowing = async () => {
  const response = await getMovieWithShowingStatus();

  return response.data.data;
};

const fetchMoviesUpcoming = async () => {
  const response = await getMovieWithUpcomingStatus();

  return response.data.data;
};

export default function MovieTabs() {
  // const nowShowing = movies.filter((movie) => movie.status === "showing");
  // const upcoming = movies.filter((movie) => movie.status === "upcoming");

  const { data: showings = [] } = useQuery<Movie[]>({
    queryKey: ["showings"],
    queryFn: fetchMoviesShowing,
  });

  const { data: upcomings = [] } = useQuery<Movie[]>({
    queryKey: ["showings"],
    queryFn: fetchMoviesUpcoming,
  });

  return (
    <div className='flex w-full flex-col max-w-full px-4 py-8 '>
      <Tabs
        aria-label='Movie listings'
        className='ml-7'
        classNames={{
          tabList: "gap-6",
          cursor: "w-full",
          tab: "max-w-fit px-0 h-12 text-lg",
        }}
        color='default'
        variant='underlined'
      >
        <Tab key='now-showing' title='Now Showing'>
          <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {showings.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Tab>
        <Tab key='upcoming' title='Upcoming'>
          <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {upcomings.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Tab>
      </Tabs>
      <div className='w-full flex items-center justify-end py-3'>
        <Button>See more</Button>
      </div>
    </div>
  );
}
