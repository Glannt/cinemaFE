export default function ShowtimeSelector() {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
      <div>
        <label className='text-gray-400 text-sm block mb-2'>Time</label>
        <select className='w-full bg-[#2D2E33] text-[#BAB4B4] rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-[#3D3E43] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option>CHOOSE TIME</option>
          <option>20:00 PM</option>
          <option>22:30 PM</option>
        </select>
      </div>
      <div>
        <label className='text-gray-400 text-sm block mb-2'>Type</label>
        <select className='w-full bg-[#2D2E33] text-[#BAB4B4] rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-[#3D3E43] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option>2D</option>
          <option>3D</option>
          <option>IMAX</option>
        </select>
      </div>
      <div>
        <label className='text-gray-400 text-sm block mb-2'>Address</label>
        <select className='w-full bg-[#2D2E33] text-[#BAB4B4] rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-[#3D3E43] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'>
          <option>OCEAN MALL</option>
          <option>DOWNTOWN</option>
        </select>
      </div>
    </div>
  );
}
