// import BookingSumary.css;
type BookingSummaryProps = {
  selectedSeats: string[];
};

export default function BookingSummary({ selectedSeats }: BookingSummaryProps) {
  const totalPrice = selectedSeats.length * 20;

  return (
    <div className='bg-blue-500/20 rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 fade-in-animation'>
      <h3 className='font-bold mb-4 text-xl'>MOVIE TICKETS</h3>
      <div className='space-y-2 text-sm'>
        <div className='flex justify-between'>
          <span className='text-gray-400'>Date & Time</span>
          <span className='font-medium'>21/07/2023, 20:00 PM</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-400'>Tickets (Double comfort)</span>
          <span className='font-medium'>
            20$×{selectedSeats.length}={totalPrice}$
          </span>
        </div>
        <div className='flex justify-between font-bold mt-4'>
          <span>Total</span>
          <span className='pulse-animation'>{totalPrice}$</span>
        </div>
      </div>
      <button className='w-full bg-[#2D2E33] text-white py-2 rounded-lg mt-4 transition-all duration-300 ease-in-out hover:bg-[#3D3E43] hover:scale-105 active:scale-95'>
        ADD SERVICE
      </button>
      <button className='w-full bg-blue-500 text-white py-2 rounded-lg mt-2 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 active:scale-95'>
        BUY
      </button>
    </div>
  );
}
