import React from "react";
import Aos from "aos";
import Links from "./Links";

import gears from "../../images/gears.png";
import jonasSablay from "../../images/jonasSablay.jpg";

import "./SecondSection.css";
import "aos/dist/aos.css";

function SecondSection() {
  Aos.init({
    duration: 600,
  });
  return (
    <div>
      <img className="gears" src={gears} alt="gears"></img>
      <img className="jonasSablay" src={jonasSablay} alt="jonasSablay"></img>
      <h2 className="about"> About</h2>
      <h3 className="me"> Me?</h3>
      <h3 className="aboutMe">
        I'm a <span className="emphasize"> UI Designer </span> and{" "}
        <span className="emphasize"> Front End Developer </span> from the
        Philippines.
      </h3>
      <p className="aboutMe2">
        My passion with web development comes from the satisfaction of seeing
        lines of code manifest into an unlimited combination of colors, shapes,
        layouts, and designs.
      </p>
      <p className="aboutMe3">
        The idea of being able to create and design a world where my imagination
        is the limit is what fuels me to indulge more into the field. As a web
        developer, I make use of my everday idle time to further experiment, and
        combine different designs, technologies, and concepts to master my
        craft.
      </p>
      <div className="linkContainer">
        <Links></Links>
      </div>
    </div>
  );
}
export default SecondSection;
