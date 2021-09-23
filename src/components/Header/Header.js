import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
  return (
    <div className='header-container'>
      <img src={logo} alt="" />
      <nav>
        <ul>
          <a href="/shop">Shop</a>
          <a href="/order">Order Review</a>
          <a href="/inventory">Manage Inventory here</a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;