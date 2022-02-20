import React, { Component }  from 'react';
import '../styles/Header.scss';
// import Navbar from './Navbar';
import Logo from './Logo'
import Hamburger from './Hamburger';



const Header = () => {

  return (
    <div className='header'>
      <Logo />
      {/* <Navbar /> */}
      <Hamburger />
    </div>
  )
}

export default Header;
