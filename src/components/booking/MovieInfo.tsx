import { Category } from "@/types/category.type";

type MovieInfoProps = {
  movie: {
    title: string;
    director: string;
    description: string;
    categories: Category[];
  };
};

export default function MovieInfo({ movie }: MovieInfoProps) {
  return (
    <div className='grid grid-cols-3 gap-20 mx-auto max-w-7xl'>
      <div className='relative aspect-[2/3] rounded-lg overflow-hidden'>
        <img
          src='https://image.vnreview.vn/img.php?src=524288_141218524716544_155976032321536?wt=a23063afba8920276a8a38b2ee084cda&rt=b921bf40c4aa1231edf1aa0f745c59f7&width=1080'
          alt={movie.title}
          className='object-cover h-full w-full shadow-lg shadow-current'
        />
      </div>
      <div className='space-y-6'>
        <h1 className='text-4xl font-bold'>{movie.title}</h1>
        <div className='flex space-x-4 text-sm'>
          {movie.categories.map((category) => (
            <span
              key={category.id}
              className='inline-block px-3 py-1 bg-[#383942] rounded-full text-sm text-[#CFCFCF]'
            >
              {category.name}
            </span>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          <div className='bg-yellow-400 text-black px-2 py-1 text-xs'>IMDb</div>
          <span>7.6/10</span>
          <div className='bg-red-500 px-2 py-1 text-xs'>PG</div>
          <span>13 (8+)</span>
          <div className='bg-green-500 px-2 py-1 text-xs'>$</div>
          <span>3h 12m</span>
        </div>
        <p className='text-gray-400 max-w-2xl'>{movie.description}</p>
        <div className='flex space-x-4'>
          <button className='bg-blue-500 text-white px-6 py-2 rounded-full flex items-center space-x-2'>
            <span>WATCH TRAILER</span>
          </button>
          <button className='border border-gray-600 px-6 py-2 rounded-full flex items-center space-x-2'>
            <span>TO WATCHLIST</span>
            <span>+</span>
          </button>
        </div>
      </div>
      <div className='grid grid-rows-3 gap-3 mt-28'>
        <div>
          <h3 className='text-gray-400 text-sm mb-1'>Director</h3>
          <p>{movie.director}</p>
        </div>
        <div>
          <h3 className='text-gray-400 text-sm mb-1'>Writers</h3>
          <p>Rick Jaffa • James Cameron • Amanda Silver</p>
        </div>
        <div>
          <h3 className='text-gray-400 text-sm mb-1'>Stars</h3>
          <p>Zoe Saldana • Rick Jaffa • Sigourney Weaver</p>
        </div>
      </div>
    </div>
  );
}
