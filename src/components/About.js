import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import '../styles/About.scss';
// import '../styles/StyleVars.scss'



function About() {

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => setShowMore(!showMore)


  return (

    <>
    <div id='about' className='abt'>
        <div className="section-header">
            <h3>About Me</h3>
            {/* <p>Some of my projects</p> */}
        </div>


        <div className="abt_card">
          <p>
            I am a graduate of mechanical engineering from one of the most prestigious universities in Nigeria. I am passionate about developing sustainable solutions to the littlest problems. I am interested in talks that involve clean air, clean energy and technology-driven solutions.
          </p>
          <div className={`rest ${showMore? "more" : ''}`}>
            <p>
              I love building brilliant and amazing web experieces. The accuracy with which I turn designs into webpages can be attributed to my meticulous nature. I pay massive attention to the smallest details while ensuring efficiency and conformity with standards.
            </p>
            <p>
              There are a lot of things I love to do. Topping the chart is learning. I can not assure you that I know or have all it takes to complete your project. However, I assure you that I can learn. I can learn as fast as is reasonably required of a human. An alpha one. I believe learning is why we are still here, else we would all be dead. Laerning keeps us alive. Learning is life. It is what my life revolves around.
            </p>
            <p>
              I understand that sleep is the most underrated thing on earth, with so many levels of abstraction; humans cannot understand, hence, I advice you always to sleep well (Take that as a freebie since technology is still working on e-candies). I love sleep. I also love to receive invites to talks that align with my interests, games (strictly Pro Evolution Soccer and scrabble) and parties (especially <span style={{fontStyle: "italic"}}>Owambe</span>). 
            </p>
          </div>

          <button onClick={handleClick}>{showMore ? "Show Less": "Show More"}</button>
        </div>        
      </div>
    </>
    
    )
  
}

export default About;
