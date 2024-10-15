import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/ikt_logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#83D9EC] text-black py-8 font-inria-sans  w-full  mt-auto">
      {/* Top Section: Logo and Links */}
      <div className="flex justify-between items-center mx-auto px-4 w-full max-w-screen-3xl">
        {/* Left Section: Logo */}
        <div className="left-section">
          <a href="/">
            <img src={logo} alt="Company Logo" className="h-16 inline-block" />
          </a>
        </div>

        {/* Middle Section: Explore and Contact */}
        <div className="middle-section flex space-x-10">
          {/* Explore Section */}
          <div className="explore">
            <h3 className="text-lg font-bold mb-1">Explore</h3>
            <a href="https://inknowtech.com/" className="hover:text-[#FD8407] text-black ">Official Website</a>
          </div>

          {/* Contact Us Section */}
          <div className="contact">
            <h3 className="text-lg font-bold mb-1">Contact Us</h3>
            <p><b>Email:</b> hr.manager@inknowtech.com</p>
            <p><b>Phone:</b> +91 08061253001</p>
          </div>
        </div>

        {/* Right Section: Social Media */}
        <div className="right-section">
          <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <a href="https://www.linkedin.com/company/inknowtech" target="_blank" rel="noreferrer" className="text-black hover:text-[#FD8407]">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/InKnowTech/" target="_blank" rel="noreferrer" className="text-black hover:text-[#FD8407]">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/InKnowTech" target="_blank" rel="noreferrer" className="text-black hover:text-[#FD8407]">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="copyright text-center text-sm mt-4 mb-2">
        © 2024 InKnowTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 