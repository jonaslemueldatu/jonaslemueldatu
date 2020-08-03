import React from "react";
import "./Link.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "../../../node_modules/react-icons/fa";

function Links() {
  return (
    <div>
      <div className="facebookContainer" data-aos="fade-left">
        <a
          className="Facebook"
          href="https://www.facebook.com/JonasLemuelCamayaDatu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare></FaFacebookSquare>
        </a>
      </div>
      <div className="instagramContainer" data-aos="fade-left">
        <a
          className="Instagram"
          href="https://www.instagram.com/jonaslemueldatu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare></FaInstagramSquare>
        </a>
      </div>
      <div className="linkedInContainer" data-aos="fade-left">
        <a
          className="LinkedIn"
          href="https://www.instagram.com/jonaslemueldatu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
    </div>
  );
}
export default Links;
