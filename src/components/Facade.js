import React  from 'react';
import '../styles/Home.scss';
// import {Link} from 'react-router-dom';


import "swiper/css/bundle";

const Facade = () => {
  return ( 
    <div> 
      <div id='facade' className = "facade">
        {/* <p>The name is...</p> */}
        <h2>Salaudeen Ismail</h2>
        <p>is the name.</p>
        <h4>Creating awesome web experiences</h4>
        <p>is the goal.</p>
        <button className='facade_contact_btn'>Contact Me</button>
      </div>     
    </div>
  )
}

export default Facade;