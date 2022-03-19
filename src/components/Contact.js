import React from "react";
import "../styles/Contact.scss";
import * as AiIcons from "react-icons/ai";
import { ContactItems } from "./ContactItems";

const Contact = () => {
  return (
    <div id="contact">
      <div className="section-header">
        <h3>Reach Out to me via:</h3>
        {/* <p>Some of my projects</p> */}
      </div>

      <div className='all_contacts'>
        <div className="contact_details">
          {ContactItems.map((contactItem, index) => {
            return (
              <div key={index} className={`contact_detail ${contactItem.title}`}>
                <a
                  target="_blank"
                  className="contact_item"
                  href={contactItem.reference}
                >
                  <span className="contactLogo">{contactItem.icon}</span>
                  <h4>{contactItem.title}</h4>

                  {/* <AiIcons.AiOutlineTwitter /> */}
                </a>
              </div>
            );
          })}
        </div>
        <div className="github">
          <div className="section-header">
            <h3>See all my projects on</h3>
            {/* <p>Some of my projects</p> */}
          </div>

          <a
            href="https://github.com/OpTiX6696"
            target="_blank"
            className="contact_item"
          >
            <AiIcons.AiOutlineGithub />
            <h4>Github</h4>
          </a>
        </div>
      </div>
      

    </div>
  );
};

export default Contact;
