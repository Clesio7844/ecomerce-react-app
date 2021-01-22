import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //   console.log('this is the baske >>>>>>>', basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className='product'>
      <img src={image} alt='image' />
      <h4>{title}</h4>
      <div className='rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon />
          ))}
      </div>
      <p>
        <small>£</small>
        <strong>{price}</strong>
      </p>
      <button onClick={addToBasket} className='btn__product'>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
