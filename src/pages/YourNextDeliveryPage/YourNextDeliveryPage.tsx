import YourNextDeliveryCard from '../../components/YourNextDeliveyrCard/YourNextDeliveryCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import { BASE_URL } from '../../until/constants';

/**
 * `YourNextDeliveryPage` is a React functional component that fetches and displays
 * the next delivery details for a user. It uses the `useParams` hook to extract the
 * `userId` from the URL parameters and the `useQuery` hook from `react-query` to
 * fetch the delivery data from the backend API.
 *
 * The component handles three states:
 * - Loading: Displays a loading message while the data is being fetched.
 * - Error: Displays an error message if there is an issue fetching the data.
 * - Success: Renders the `YourNextDeliveryCard` component with the fetched delivery details.
 *
 * @returns A JSX element representing the next delivery page.
 */
const YourNextDeliveryPage: FC = () => {
  const params = useParams<{ userId: string }>();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['nextDelivery', params.userId],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/comms/your-next-delivery/${params.userId}`,
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    retry: false,
  });

  //LY:NOTE - Ideally we would create a loading page here but for now, this will do..
  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div>
      <YourNextDeliveryCard deliveryDetails={data} />
    </div>
  );
};

export default YourNextDeliveryPage;
