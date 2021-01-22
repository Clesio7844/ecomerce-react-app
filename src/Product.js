import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function Product({ id, title, image, price, rating }) {
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
      <button className='btn__product'>Add to Basket</button>
    </div>
  );
}

export default Product;
