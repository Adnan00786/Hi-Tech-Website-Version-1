"use client";
import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import '@/css/Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-media">
          <a className="Youtube" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a className="Facebook" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a className="Instagram" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="X" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a className="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="address">
          <p>Hyderabad, India</p>
        </div>
        <div className="copy-right">
          {/* <p>&copy; Hi-Tech. All rights reserved.</p> */}
          <p>&copy; All rights reserved.</p>
        </div>
        <div className="scroll-to-top">
          <button onClick={handleScrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
