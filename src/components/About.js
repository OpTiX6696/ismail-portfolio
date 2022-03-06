import React from 'react';
// import {Link} from 'react-router-dom';
import '../styles/About.scss';
// import '../styles/StyleVars.scss'



function About() {
  return (

    <>
    <div id='about' className='abt'>
        <div className="section-header">
            <h3>About Me</h3>
            {/* <p>Some of my projects</p> */}
        </div>


        <div className='abt_card'>
          <p>
            I am a graduate of mechanical engineering from one of the most prestigious universities in Nigeria who is passionate about developing sustainable solutions to the littlest of problems. I am interested in talks that involve clean air, clean energy and technology-driven solutions.
          </p>
          <p>
            I love building brilliant and amazing web experieces. The accuracy with which I turn deesigns into webpages can be attributed to my meticulous nature. I pay massive attention to the littlest details while ensuring efficiency and conformity with standards.
          </p>
          <p>
            I understand that sleep is the most underrated thing on earth, with so many levels of abstraction; humans cannot understand. I will also gleefully honour your invite to talks that align with my interests, games (strictly Pro Evolution Soccer and scrabble) and parties (especially <span style={{fontStyle: "italic"}}>Owambe</span>). 
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
