type SeatSelectorProps = {
  selectedSeats: string[];
  setSelectedSeats: (seats: string[]) => void;
};

export default function SeatSelector({ selectedSeats, setSelectedSeats }: SeatSelectorProps) {
  return (
    <div className='space-y-8'>
      <h2 className='text-xl font-bold'>Select Your Seats</h2>
      <div className='relative'>
        {/* Screen */}
        <div className='relative mb-16'>
          <div className='h-1 bg-blue-500 rounded-full mb-2 w-full' />
          <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[120%] h-16 bg-gradient-to-b from-blue-500/20 to-transparent rounded-t-full' />
          <p className='absolute top-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-400'>
            SCREEN
          </p>
        </div>

        {/* Seats */}
        <div className='grid gap-2'>
          {Array.from({ length: 10 }).map((_, row) => (
            <div key={row} className='flex justify-center gap-1'>
              <span className='w-6 text-center text-gray-400'>{String.fromCharCode(65 + row)}</span>
              <div className='flex gap-1'>
                {Array.from({ length: 18 }).map((_, seat) => {
                  const seatId = `${String.fromCharCode(65 + row)}${seat + 1}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <button
                      key={seat}
                      className={`w-5 h-5 rounded-t-lg ${
                        isSelected ? "bg-blue-500" : "bg-[#2D2E33] hover:bg-[#3D3E43]"
                      }`}
                      onClick={() => {
                        if (isSelected) {
                          setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
                        } else {
                          setSelectedSeats([...selectedSeats, seatId]);
                        }
                      }}
                    />
                  );
                })}
              </div>
              <span className='w-6 text-center text-gray-400'>{String.fromCharCode(65 + row)}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className='flex justify-center gap-8 mt-8'>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 rounded bg-[#2D2E33]' />
            <span className='text-sm text-gray-400'>Available</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 rounded bg-blue-500' />
            <span className='text-sm text-gray-400'>Selected</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-4 h-4 rounded bg-gray-600' />
            <span className='text-sm text-gray-400'>Taken</span>
          </div>
        </div>
      </div>
    </div>
  );
}
