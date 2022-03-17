import React, { useState, useEffect }  from 'react';
import '../styles/Header.scss';
// import Navbar from './Navbar';
import Logo from './Logo'
import Hamburger from './Hamburger';



const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e) => {

    e.currentTarget.scrollY > 200 ? setScrolled(true) : setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrolled])

  return (
    <div className= {`header ${scrolled ? 'scrolled' : ''}`}>
      <Logo />
      {/* <Navbar /> */}
      <Hamburger />
    </div>
  )
}

export default Header;
