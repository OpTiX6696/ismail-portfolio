import React, { Component }  from 'react';

import { Link } from 'react-router-dom';
// import * as AiIcons from "react-icons/ai";
// import * as MdIcons from "react-icons/md";
// import * as GiIcons from "react-icons/gi";
// import * as FaIcons from "react-icons/fa";
// import * as SiIcons from "react-icons/si";

import '../styles/Navbar.scss';
import NavItemsData from './NavItems';


const Navbar = () => {

  return (
    <div className='nav'>
      <ul>
        {NavItemsData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className="nav-item">
                {/* <div className="item_icon">{item.icon}</div> */}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}




export default Navbar;