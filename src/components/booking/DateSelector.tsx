import { ChevronLeft, ChevronRight } from "lucide-react";

type DateSelectorProps = {
  selectedDate: number;
  setSelectedDate: (date: number) => void;
};

export default function DateSelector({ selectedDate, setSelectedDate }: DateSelectorProps) {
  return (
    <div className='flex items-center space-x-4 mb-8'>
      <span className='text-gray-400'>Date</span>
      <button className='p-2 rounded-full bg-[#2D2E33]'>
        <ChevronLeft className='w-4 h-4' />
      </button>
      <div className='flex space-x-2'>
        {[9, 10, 11, 12, 13, 14, 15].map((date) => (
          <button
            key={date}
            className={`flex flex-col items-center w-16 p-2 rounded-3xl ${
              selectedDate === date ? "bg-[#75ADEF] duration-200 animate-in" : "bg-[#2D2E33]"
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <span
              className={`text-xs text-gray-400 ${
                selectedDate === date ? "text-[#292828]" : "text-gray-400"
              }`}
            >
              Jun
            </span>
            <span
              className={`text-lg font-bold ${
                selectedDate === date ? "text-[#1A1A1A]" : "text-[#E3E3E3]"
              }`}
            >
              {date}
            </span>
            <span
              className={`text-xs text-gray-400 ${
                selectedDate === date ? "text-[#292828]" : "text-gray-400"
              }`}
            >
              Fr
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
