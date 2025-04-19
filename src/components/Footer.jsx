import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">3E Entertainment</h3>
            <p className="text-gray-400">
              Bringing culture, art, and music together. We unite the Nepalese diaspora and share our rich heritage with the world.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#our-services" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#past-events" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Past Events</a>
              </li>
              <li>
                <a href="#upcoming-events" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Upcoming Events</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-red-600">Get in Touch</h4>
            <p className="text-gray-400">
              1234 Main Street,<br />
              City, State, ZIP<br />
              Email: info@3e-entertainment.com<br />
              Phone: (123) 456-7890
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-red-600 transition-colors duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 3E Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
