import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import { movies } from "@/data/movie";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [currentSlide]); // Re-run effect when currentSlide changes

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const handleSlideChange = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <div
      aria-label='Hero Slider'
      className='relative h-[90vh] w-full overflow-hidden'
      role='region'
    >
      {/* Slides */}
      <div className='relative h-full w-full'>
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
            }`}
            onTransitionEnd={() => setIsTransitioning(false)}
          >
            <img
              alt={movie.title || "Movie image"}
              className='w-full h-full object-cover brightness-75 transition-all duration-300 ease-in-out'
              loading='lazy' // Lazy load images
              src={movie.images[0]?.src || "/placeholder.svg"}
              onError={(e) => (e.currentTarget.src = "/placeholder.svg")} // Fallback for image errors
            />
            <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent' />

            {/* Content */}
            <div className='absolute bottom-20 left-0 right-0 p-8 md:p-16'>
              <div className='max-w-6xl mx-auto'>
                <div
                  className={`space-y-4 mb-8 transition-all duration-700 delay-300 ${
                    index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className='flex gap-2'>
                    {movie.categories.map((category) => (
                      <span
                        key={category.id}
                        className='inline-block px-3 py-1 bg-[#383942] rounded-full text-sm text-[#CFCFCF]'
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h1 className='text-4xl md:text-6xl font-bold'>{movie.title}</h1>
                  <p className='max-w-xl text-zinc-300'>{movie.description}</p>
                  <div className='flex gap-4'>
                    <button className='flex items-center gap-2 bg-[#75ADEF] hover:bg-[#6799d3] hover px-6 py-3 rounded-full transition-colors duration-200'>
                      Book tickets
                    </button>
                    <button className='flex items-center gap-2 bg-transparent border border-0.5 border-[#75ADEF] hover:bg-zinc-700 px-6 py-3 rounded-full transition-colors duration-200'>
                      <Play size={20} /> Watch trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className='absolute bottom-10 left-0 right-0 px-8 md:px-16'>
        <div className='max-w-6xl mx-auto my-auto'>
          <div className='flex items-center gap-4'>
            <button
              aria-label='Previous Slide'
              className='p-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isTransitioning}
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>
            <div className='flex gap-4 overflow-x-hidden overflow-y-hidden'>
              {movies.map((movie, index) => (
                <button
                  key={movie.id}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`relative w-32 h-20 rounded-md overflow-hidden transition-all duration-200 ${
                    currentSlide === index
                      ? "ring-2 ring-violet-500 scale-105"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  disabled={isTransitioning}
                  onClick={() => handleSlideChange(index)}
                >
                  <img
                    alt={movie.title}
                    className='object-cover'
                    src={movie.images[0]?.src || "/placeholder.svg"}
                    onError={(e) => (e.currentTarget.src = "/placeholder.svg")} // Fallback for image errors
                  />
                </button>
              ))}
            </div>
            <button
              aria-label='Next Slide'
              className='p-2 bg-zinc-800/50 rounded-full hover:bg-zinc-700/50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isTransitioning}
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className='flex justify-center mt-4 gap-2'>
            {movies.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-violet-500" : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                disabled={isTransitioning}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
