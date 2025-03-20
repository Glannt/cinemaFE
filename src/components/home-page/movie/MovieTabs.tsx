import { Tabs, Tab, Button } from "@heroui/react";

import { MovieCard } from "./MovieCard";

import { movies } from "@/data/movie";

export default function MovieTabs() {
  const nowShowing = movies.filter((movie) => movie.status === "showing");
  const upcoming = movies.filter((movie) => movie.status === "upcoming");

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
            {nowShowing.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </Tab>
        <Tab key='upcoming' title='Upcoming'>
          <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {upcoming.map((movie) => (
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
