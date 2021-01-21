import React, { useState } from 'react';

import Logo from './images/LogoMakr-2.png';
import CartImg from './images/cart.png';
import ToggleImg from './images/menu.png';
import { links, social } from './data';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './Header.css';

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <img
              src={Logo}
              alt='logo'
              style={{ width: '125px' }}
              className='logo__img'
            />
          </div>
          <nav className='header__nav'>
            <ul className='MenuItems'>
              <div className='header__option'>
                <span className='header_optionLinOne'>Hello Guest</span>
              </div>
              {links.map(link => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className='header__optionBasket'>
            <ShoppingCartIcon />
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
          {/*  
          {/* {!showLinks && ( */}
          {/* <img
            src={CartImg}
            alt='cart'
            style={{ width: '30px', height: '30px' }}
          /> */}{' '}
          {/* )} */}
          <img
            src={ToggleImg}
            alt='toggle'
            className='menu-icon'
            // onClick={() => setShowLinks(showLinks)}
            style={{ width: '30px', height: '30px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
