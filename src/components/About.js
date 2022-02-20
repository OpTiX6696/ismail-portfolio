import React from 'react';
// import {Link} from 'react-router-dom';
import '../styles/About.scss';



function About() {
  return (

    <>
    <div className='abt'>
        <div className='abt_card'>
          <p>
            I am a graduate mechanical engineer from the University of Ilorin, Nigeria who is passionate about clean energy and clean air. 
          </p>

          <p>
            Apparently, I have a knack for web development too. I love to design nice interfaces and bring your ideas to life.
          </p>
            
          {/* <Link to='/about'>
            More about me
          </Link> */}
        </div>        
      </div>
    </>
    
    )
  
}

export default About;
