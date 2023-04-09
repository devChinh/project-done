import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {SiZalo} from 'react-icons/si'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        TIKTOK :  HOC IT CUNG DEVC
      </a>

      {/* <h3>Khoá học MERN stack ở link bio  </h3> */}

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="/#"><FaFacebookF /></a>
        <a href="/#"><SiZalo /></a>
        <a href="/#"><FaTiktok /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DEVC Tutorials . All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
