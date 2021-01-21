import React from 'react';
import './Home.css';
import bckg from './images/image1.png';

function Home() {
  return (
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
  );
}

export default Home;
