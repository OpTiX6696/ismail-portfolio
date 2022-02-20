import React, { Component }  from 'react';
import '../styles/Home.scss';
// import {Link} from 'react-router-dom';
import Works from './Works';

import "swiper/css/bundle";

function Home() {
  return ( 
    <div> 
      <div className = "facade">
        {/* <p>The name is...</p> */}
        <h2>Salaudeen Ismail</h2>
        <p>is the name.</p>
        <h4>Creating awesome web experiences</h4>
        <p>is the goal.</p>
        <button className='facade_contact_btn'>Contact Me</button>
      </div>

      {/* <div className='abt'>
        <div className='abt_card'>
          <p>
            I am Salaudeen Ismail, a graduate mechanical engineer who is passionate about clean energy and clean air. Apparently, I have a knack for web development too. I love to design nice interfaces and bring your ideas to life.
          </p>
          <Link to='/about'>
            More about me
          </Link>
        </div>

        
        
      </div> */}

      <Works />

    </div>
  )
}

export default Home