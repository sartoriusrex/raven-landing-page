import React from 'react';

import "./About.css";
import MimiThian from '../../images/img.jpg';

const AboutSection = () => {
  return(
    <section className="about-section-container">
      <img
        src={ MimiThian }
        alt="Mimi and Thian Collaborating"
      />
      <div className="about-text-container">
        <h2 className="about-title">About us</h2>
        <div className="about-paragraph-container">
          <p className="about-paragraph">
            Raven is young initiative command, which includes professionals of his activity. Each member of the commands, is not just an employee, they are something more valuable to us.
          </p>
          <p className="about-paragraph">
              Penetrating into a fairly large and modern activity, the company Raven provides each time clearer and perfected solutions for the task.  
          </p>
          <p className="about-paragraph">
            Every employee of our company has a great experience in working with customers and solving tasks, while keeping unlimited energy and initiative.
          </p>
          <p className="about-paragraph">
              Every client, who had come to us, did not left without a well-provided service.
          </p>
          <p className="about-paragraph">
              Let us work together - you will not regret!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;