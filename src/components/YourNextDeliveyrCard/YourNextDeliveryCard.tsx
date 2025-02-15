import Button from '../Button/Button';
import CatVibing from '../../assets/cat-vibing.gif';
import HappyCat from '../../assets/happycat.jpg';
import { FC, JSX } from 'react';
import { YourNextDeliveryCardProps } from './YourNextDeliveryCardsTypes';

/**
 * A functional component that displays the details of the next delivery.
 *
 * @component
 * @param {YourNextDeliveryCardProps} props - The properties for the component.
 * @param {Object} props.deliveryDetails - The details of the delivery.
 * @param {string} props.deliveryDetails.title - The title of the delivery.
 * @param {string} props.deliveryDetails.message - The message for the delivery.
 * @param {number} props.deliveryDetails.totalPrice - The total price of the delivery.
 * @param {boolean} props.deliveryDetails.freeGift - Indicates if there is a free gift included.
 *
 * @returns {JSX.Element} The rendered component.
 */
const YourNextDeliveryCard: FC<YourNextDeliveryCardProps> = ({
  deliveryDetails,
}: YourNextDeliveryCardProps): JSX.Element => {
  const { title, message, totalPrice, freeGift } = deliveryDetails;
  return (
    <div className="your-next-delivery-card">
      {freeGift && <span className="gift-label">FREE GIFT</span>}
      <div className="image-container">
        <img className="image" src={freeGift ? CatVibing : HappyCat} />
      </div>
      <div className="details-container">
        <h2>{title}</h2>
        <p>{message}</p>
        <p className="price">Total price: £{Number(totalPrice).toFixed(2)}</p>

        <div className="buttons">
          <Button
            text="See Details"
            backgroundColour="green"
            textColour="white"
          />
          <Button
            text="Edit Delivery"
            backgroundColour="white"
            textColour="green"
          />
        </div>
      </div>
    </div>
  );
};

export default YourNextDeliveryCard;
