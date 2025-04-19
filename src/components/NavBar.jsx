import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import eee from "../assets/3e.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-opacity-80 bg-black backdrop-blur-sm shadow-lg"
          : "bg-black"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={eee} alt="3E Entertainment Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold">3E Entertainment</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/" ? "border-b-2 border-red-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/services"
                ? "border-b-2 border-red-600"
                : ""
            }`}
          >
            Our Services
          </Link>
          <Link
            to="/about"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/about" ? "border-b-2 border-red-600" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/pastevents"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/pastevents"
                ? "border-b-2 border-red-600"
                : ""
            }`}
          >
            Past Events
          </Link>
          <Link
            to="/upcoming"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/upcoming"
                ? "border-b-2 border-red-600"
                : ""
            }`}
          >
            Upcoming Events
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 text-white hover:text-red-600 transition duration-300 ${
              location.pathname === "/contact"
                ? "border-b-2 border-red-600"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div
              className={`w-7 h-7 relative transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "rotate-45 top-1/2" : "top-1/4"
                }`}
              ></span>
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "opacity-0" : "top-1/2"
                }`}
              ></span>
              <span
                className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "-rotate-45 top-1/2" : "top-3/4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black text-white p-4 space-y-4">
          <Link
            to="/"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/" ? "bg-gray-700" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/services" ? "bg-gray-700" : ""
            }`}
          >
            Our Services
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/about" ? "bg-gray-700" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/pastevents"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/pastevents" ? "bg-gray-700" : ""
            }`}
          >
            Past Events
          </Link>
          <Link
            to="/upcoming"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/upcoming" ? "bg-gray-700" : ""
            }`}
          >
            Upcoming Events
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 text-white hover:bg-gray-700 transition duration-300 ${
              location.pathname === "/contact" ? "bg-gray-700" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
