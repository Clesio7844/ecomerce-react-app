import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { breakStatement } from '@babel/types';

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal (0 items):
              <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order container a gif
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prifix={'£'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
