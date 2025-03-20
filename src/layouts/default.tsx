import { Outlet } from "react-router";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const DefaultLayout: React.FC<{ children?: JSX.Element | React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='relative flex flex-col h-screen'>
      <Navbar />
      <main className='w-full mx-auto flex-grow '>{children || <Outlet />}</main>
      {/* <footer className='w-full flex items-center justify-center py-3'>
       */}
      {/* <Link
          isExternal
          className='flex items-center gap-1 text-current'
          href='https://heroui.com'
          title='heroui.com homepage'
        >
          <span className='text-default-600'>Powered by</span>
          <p className='text-primary'>HeroUI</p>
        </Link> */}
      <footer className='bg-transparent py-3'>
        <Footer />
      </footer>
    </div>
  );
};
