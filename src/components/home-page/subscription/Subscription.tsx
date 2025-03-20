import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

import SubScriptionCard from "./subscription-card";

import { subscriptionPlans } from "@/data/subscription"; // Adjust the path as needed

export default function Subscription() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = React.useRef(null);

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(subscriptionPlans.length / cardsPerSlide);

  // Auto-slide functionality
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: any) => {
    setCurrentSlide(index);
  };

  return (
    <div className='px-4 py-8'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl font-semibold'>Subscription</h2>
        <div className='flex items-center gap-2'>
          <button
            aria-label='Previous slide'
            className='p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors'
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </button>
          <div className='flex gap-1'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-violet-600" : "bg-zinc-600"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button
            aria-label='Next slide'
            className='p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors'
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className='relative overflow-hidden'
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className='min-w-full flex gap-4'>
              {subscriptionPlans
                .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                .map((plan) => (
                  <div key={plan.id} className='flex-1'>
                    <SubScriptionCard plan={plan} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
