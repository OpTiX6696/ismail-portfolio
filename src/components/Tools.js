import React from 'react';
import '../styles/Tools.scss'
import * as SiIcons from "react-icons/si"

const Tools = () => {
  return (
    <div id='tools'>
      <div className="section-header">
          <h3>I work with:</h3>
          {/* <p>Some of my projects</p> */}
        </div>
      <div id='tools_icons'>
        <div className='icon'>
          <SiIcons.SiJavascript />
        </div>


        <div className='icon'>
          <SiIcons.SiHtml5 />
        </div>

        <div className='icon'>
          <SiIcons.SiCss3 />
        </div>


        <div className='icon'>
          <SiIcons.SiReact />
        </div>

        <div className='icon'>
          <SiIcons.SiPython />
        </div>


      </div>

    </div>
  )
}

export default Tools 