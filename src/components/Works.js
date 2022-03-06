import React, { Component }  from 'react';
import projects from "./Projects";
import '../styles/Works.scss';
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//////// Import Swiper styles
// import "swiper/css";
// import "swiper/css//pagination";
// import "swiper/css/navigation";
// import "swiper/css/bundle";


// import required modules
import { Pagination, Navigation } from "swiper";
// import { GiChampions } from "react-icons/gi";


const Works = () => {
  return (
    <div className="works">

      <div className="section-header">
        <h3>My Projects</h3>
        <p>Some of my projects</p>
      </div>
      


      <Swiper
        style={{color: 'aliceblue'}}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper projects-container"
      >

        {/* <div className=''> */}

          {projects.map((project, index) => {
          return (
            <SwiperSlide
            style={{backgroundImage: project.bg}}
            className='project_card'
            index={index} >

              <div className='project_card-container'>
                <h3 className="project_title">{project.title}</h3>
                <p className="project_description">{project.description}</p>

                <div className="links">
                  <a target='blank' href={project.repo}><AiIcons.AiFillGithub/></a>
                  <a target='blank' href={project.project_url}><GiIcons.GiEarthAfricaEurope /></a>
                </div>
              </div>

            </SwiperSlide>    
              )
            })}
        {/* </div> */}
      </Swiper>
    </div>
  );
}



export default Works;