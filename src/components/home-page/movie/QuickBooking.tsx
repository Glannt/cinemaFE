import { Button } from "@heroui/button";

import SelectWrapper from "./SelectWrapper";

import { movies } from "@/data/movie";

export default function QuickBooking() {
  return (
    <div className='max-w-6xl mx-auto px-4 -mt-8 relative z-10'>
      <div className='bg-zinc-800/90 backdrop-blur rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-4'>Quick Book</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <SelectWrapper
            items={movies.map((movie) => ({ value: movie.id.toString(), label: movie.title }))}
            placeholder='Select Movie'
          />
          <SelectWrapper
            items={["Today", "Tomorrow", "In 2 Days"].map((date) => ({ value: date, label: date }))}
            placeholder='Select Date'
          />
          <SelectWrapper
            items={["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"].map((time) => ({
              value: time,
              label: time,
            }))}
            placeholder='Select Time'
          />
          <Button className='bg-violet-600 hover:bg-violet-700 text-white rounded px-4 py-2'>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
