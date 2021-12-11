import React from "react";
import './About.css';
import {NavLink} from 'react-bootstrap';
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div id="about" className="mt-3 container about">
      <h1 data-aos="fade-down-right" style={{marginTop:'40px'}} className="fw-5" >About Me</h1>
      <p data-aos="fade-up">
        I am a MERN Stack Developer. I am a professional web designer and
        developer Recently I have completed react and node js. I am expertise in
        Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS,
        Mongo DB. Resourceful Web Developer lends hands-on approach to
        customizing web presence strategy. Adept creation of scripts using HTML,
        CSS , and JavaScript to convey unique branding and promote sales and
        marketing opportunities. Especially supporting intricate backend needs
        and lending assistance throughout the webpage lifecycle.
      </p>

      <div className="d-flex"  data-aos="fade-up-right">
      <NavLink className="p-0" target="_blank" href="https://github.com/Mahir-Asef">
          <FontAwesomeIcon className="social text-dark" icon={faGithubSquare} />
        </NavLink>
        <NavLink className="p-0" target="_blank" href="https://www.linkedin.com/in/mahirashef/">
          <FontAwesomeIcon className="social" icon={faLinkedin} />
        </NavLink>
        <NavLink className="p-0" target="_blank" href="https://www.facebook.com/profile.php?id=100010043595086">
          <FontAwesomeIcon className="social" icon={faFacebookSquare} />
        </NavLink>
        <NavLink className="p-0" target="_blank" href="https://twitter.com/MaHirAsEf4">
          <FontAwesomeIcon className="social" icon={faTwitterSquare} />
        </NavLink>
      </div>

      <button data-aos="fade-up-right">
        <a 
          rel="noreferrer"
          target="_blank"
          href=" mailto: mahirasef30@gmail.com "
        >
        Hire Me
        </a>
      </button>
    </div>
  );
};

export default About;
