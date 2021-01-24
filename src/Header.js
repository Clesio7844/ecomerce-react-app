import React, { useState } from 'react';

import Logo from './images/LogoMakr-2.png';
import CartImg from './images/cart.png';
import ToggleImg from './images/menu.png';
import { links, social } from './data';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  const [showLinks, setShowLinks] = useState(true);
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/'>
              <img
                src={Logo}
                alt='logo'
                style={{ width: '125px' }}
                className='logo__img'
              />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='MenuItems'>
              <Link to='/login'>
                <div className='header__option'>
                  <span className='header_optionLinOne'>Hello Guest</span>
                  <span className='header_optionLintwo'>Sign In</span>
                </div>
              </Link>
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
          <Link to='/checkout'>
            <div className='header__optionBasket'>
              <ShoppingCartIcon />
              <span className='header__optionLineTwo header__basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>

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
