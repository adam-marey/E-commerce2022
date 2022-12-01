import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Adam's Products All rights reserved</p>
      <p className="icons">
        <AiFillGithub />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
