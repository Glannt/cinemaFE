import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { router } from './routes/router';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import IndexPage from './pages';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/book/:movieId',
    element: <BookingPage />,
  },
  {
    path: '/index',
    element: <IndexPage />,
  },
]);

function App() {
  return (
    // <Routes>
    //   <Route element={<IndexPage />} path='/' />
    //   <Route element={<DocsPage />} path='/docs' />
    //   <Route element={<PricingPage />} path='/pricing' />
    //   <Route element={<BlogPage />} path='/blog' />
    //   <Route element={<AboutPage />} path='/about' />
    // </Routes>

    // <Provider>
    <RouterProvider router={router} />
    // </Provider>
  );
}

export default App;
