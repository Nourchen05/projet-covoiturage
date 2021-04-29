import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_contents">
        <div className="footer_content">
          <h4>Contact</h4>
          <div className="footer_contact">
            <FiMail className="contact_icon" />
            <p>contact@cocar.com</p>
          </div>
          <div className="footer_contact">
            <FiPhoneCall className="contact_icon" />
            <p>+(216)97 222 666</p>
          </div>
        </div>
        <div className="footer_content">
          <h4>Socials</h4>
          <div className="footer_social">
            <FaFacebookSquare className="social_icon" />
            <FaLinkedin className="social_icon" />
            <FaTwitterSquare className="social_icon" />
            <RiInstagramFill className="social_icon" />
          </div>
        </div>
        <div className="footer_content">
          <h4>Quick links</h4>
          <ul className="footer_quick">
            <li>Qui sommes nous ?</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="credit">
        <p>© Copyright 2021</p>
      </div>
    </div>
  );
}

export default Footer;
