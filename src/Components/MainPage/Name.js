import React from "react";
import "./Name.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Name() {
  Aos.init({
    duration: 2400,
  });
  return (
    <div>
      <div className="NameContainer">
        <h1 className="Name"> JONAS LEMUEL DATU</h1>
        <h3 className="Quotation" data-aos="zoom-in">
          {" "}
          Redesigning the world one pixel at a time
        </h3>
      </div>
    </div>
  );
}
export default Name;
