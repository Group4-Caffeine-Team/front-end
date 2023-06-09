import React from 'react';
import Wave from 'react-wavify';
import './footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <>
      <Wave mask="url(#mask)" fill="">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
			<footer>
  <div class="footer-container">
    <div class="footer-logo">
      <img src={logo} alt="Company Logo" />
    </div>
    
		<div style={{color:"#fff",display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
      <span style={{ border: '1px solid silver', borderRadius: '0.25em', padding: '0.5em' }}>
        <FaFacebook title="Facebook" />
      </span>
      <span style={{ border: '1px solid silver', borderRadius: '0.25em', padding: '0.5em' }}>
        <FaTwitter title="Twitter" />
      </span>
      <span style={{ border: '1px solid silver', borderRadius: '0.25em', padding: '0.5em' }}>
        <FaInstagram title="Instagram" />
      </span>
      <span style={{ border: '1px solid silver', borderRadius: '0.25em', padding: '0.5em' }}>
        <FaLinkedin title="LinkedIn" />
      </span>
      <span style={{ border: '1px solid silver', borderRadius: '0.25em', padding: '0.5em' }}>
        <FaYoutube title="YouTube" />
      </span>
      
    </div>
    <div class="footer-bottom">
    <p>&copy; 2023 Book Library. All Rights Reserved.</p>
    <p>Terms of Service | Privacy Policy</p>
  </div>
    <div class="footer-contact" style={{color:"#fff"}}>
      <h3>Contact Us</h3>
      <p>Jordan, Amman</p>
      <p>Phone: +962 999999999</p>
      <p>Email: xxxxx@gmail.com</p>
    </div>
    <div class="footer-subscribe" style={{color:"#fff"}}>
      <h3>Subscribe to Our Newsletter</h3>
      <form action="#" method="post">
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  
</footer>

    </>
  );
};

export default Footer;
