import React, { Component }  from 'react';
import '../styles/Hamburger.scss';
import NavItemsData from './NavItems';
import {Link} from 'react-router-dom';

function Hamburger() {

  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (e) => setIsOpen(!isOpen);

  return (

    <>
      <div 
      onClick={handleClick}
      className={`hamburger-menu ${isOpen ? " open" : ""}`}>
        <div className="hamburger-slice">
        </div>
      </div>

      <div className={`mobile-nav ${isOpen ? "open" : "close"}`}>
        <ul onClick={handleClick}>
        {NavItemsData.map((item, index) => {
          return (
            <li key={index} >
              <Link to={item.path} className="nav-item">
                <div className="item_icon">{item.icon}</div>
                <span>{item.title}</span>
              </Link>
            </li>
          ) 
        }) }
        </ul>

        <div className='nav_btns'>

          <div className='btn'>
            <a className='phone_btn' href='tel:+2348038624907'>
              <p className='btn_text'>Call Now</p>
              <p className='info'>+234 (0) 803 862 4907</p>
            </a>
          </div>
          
          <div className='btn'>
            <a className='mail_btn' href='mailto:ismailsalaudeen6696@gmail.com'>
              <p className='btn_text'>Send an e-mail</p>
              <p className='info'>ismailsalaudeen6696@gmail.com</p>
            </a>
          </div>

        </div>
      </div>
  </>
  )
}

export default Hamburger;
