import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.scss';



function Logo() {

  return (
    <>
    <Link to="/" className='logo'>
      <h1>OptExpert</h1> 
      <div className='logo-box'> </div>
    </Link>
      
    </>
    
  )
}

export default Logo;
