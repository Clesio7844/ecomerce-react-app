import React from 'react';
import './Checkout.css';
import buyImg from './images/buy-1.jpg';
import Subtotal from './Subtotal';
import CheckouProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='small-container  cart-page'>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        {/* <tr>
          <td>
            <div className='cart-info'>
              <img src={buyImg} alt='' />
              <div>
                <p>Red Printed Tshirt</p>
                <small>Price: £19.00</small>
                <br />
                <button>Remove to Basket</button>
              </div>
            </div>
          </td>
          <td>
            <input type='number' value='1' />
          </td>
          <td>£19.00</td>
        </tr> */}
        {basket.map(item => (
          <CheckouProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </table>

      <div className='totl-price'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
