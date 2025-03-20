import HeroSlider from "@/components/home-page/movie/HeroSlider";
import MovieTabs from "@/components/home-page/movie/MovieTabs";
import QuickBooking from "@/components/home-page/movie/QuickBooking";
import Subscription from "@/components/home-page/subscription/Subscription";
import { DefaultLayout } from "@/layouts/default";

export default function HomePage() {
  return (
    <DefaultLayout>
      <div className='min-h-screen bg-gradient-to-r from-[#2D2E35] to-[#1A1A1A] text-white'>
        <HeroSlider />
        <QuickBooking />
        <div className='max-w-full px-4 py-8 mx-12'>
          <MovieTabs />
          <Subscription />
        </div>
      </div>
    </DefaultLayout>
  );
}
