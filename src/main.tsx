import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './components/YourNextDeliveyrCard/YourNextDeliveryCard.scss';
import './pages/ErrorPage/ErrorPage.scss';

import YourNextDeliveryPage from './pages/YourNextDeliveryPage/YourNextDeliveryPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  // LY:NOTE - The endpoint functions in the backend, but we wont be supporting it as per TH instructions..
  // {
  //   path: '/welcome/:id',
  //   element: <ErrorPage />,
  // },
  {
    path: '/your-next-delivery/:userId',
    element: <YourNextDeliveryPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
