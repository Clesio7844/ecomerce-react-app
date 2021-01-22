import React from 'react';
import './Home.css';
import bckg from './images/image1.png';
import categoriesOne from './images/category-1.jpg';
import categoriesTwo from './images/category-2.jpg';
import categoriesTree from './images/category-3.jpg';
import product1 from './images/product-1.jpg';
import product2 from './images/product-2.jpg';
import product3 from './images/product-4.jpg';
import product5 from './images/product-5.jpg';
import product6 from './images/product-6.jpg';
import product7 from './images/product-7.jpg';
import product4 from './images/product-4.jpg';
import product8 from './images/product-8.jpg';
import product9 from './images/product-9.jpg';
import product10 from './images/product-10.jpg';
import Product from './Product';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <h1>
                Give Your Workout <br />A New Style!
              </h1>
              <p>
                Sucess isn't always about greatness. It's aabout consistancy.
                Consistent <br />
                hard work gains sucess. Greatness will come
              </p>
              <a href='' className='btn'>
                Explore Now &#8594;
              </a>
            </div>
            <div className='col-2'>
              <img src={bckg} alt='bckg' />
            </div>
          </div>
        </div>
      </div>

      {/* ------------ feature categories -------- */}

      <div className='categories'>
        <div className='small-container'>
          <div className='row'>
            <div className='col-3'>
              <img src={categoriesOne} alt='' />
            </div>
            <div className='col-3'>
              <img src={categoriesTwo} alt='' />
            </div>
            <div className='col-3'>
              <img src={categoriesTree} alt='' />
            </div>
          </div>
        </div>
      </div>

      {/* --------- feature product ---------  */}
      <div className='small-container'>
        <h2 className='title'>Featured Products</h2>
        <div className='row__container'>
          <div className='col-4'>
            <Product
              id='1'
              title='Red Print T-Shirt'
              price={29.99}
              image={product1}
              rating={3}
            />
            <Product
              id='2'
              title='Red Print T-Shirt'
              price={39.99}
              image={product2}
              rating={5}
            />
            <Product
              id='3'
              title='Red Print T-Shirt'
              price={19.99}
              image={product3}
              rating={4}
            />
            <Product
              id='4'
              title='Red Print T-Shirt'
              price={20.0}
              image={product5}
              rating={5}
            />
          </div>
          <div className='col-4'>
            <Product
              id='5'
              title='Red Print T-Shirt'
              price={29.99}
              image={product6}
              rating={3}
            />
            <Product
              id='6'
              title='Red Print T-Shirt'
              price={39.99}
              image={product7}
              rating={5}
            />
            <Product
              id='7'
              title='Red Print T-Shirt'
              price={19.99}
              image={product10}
              rating={4}
            />
            <Product
              id='8'
              title='Red Print T-Shirt'
              price={20.0}
              image={product8}
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
