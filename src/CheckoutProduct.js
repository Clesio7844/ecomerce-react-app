import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
import { userInfo } from 'os';

function CheckouProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return (
    <div className='checkoutProduct'>
      <tr>
        <td>
          <div className='cart-info'>
            <img src={image} alt='' />
            <div className='checkout__productall'>
              <p>{title}</p>
              <small>£{price}</small>
              <div className='checkoutProduct__rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <StarIcon />
                  ))}
              </div>
              <br />
              <button onClick={removeFromBasket}>Remove to Basket</button>
            </div>
          </div>
        </td>
        <td>
          <input type='number' value='1' />
        </td>
        <td className='price__checkout'>£19.00</td>
      </tr>
    </div>
  );
}

export default CheckouProduct;
