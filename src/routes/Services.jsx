import React, { useState, useEffect } from "react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/2024-2.webp";
import img4 from "../assets/3.webp";
import img5 from "../assets/1974ad.jpg";
import img6 from "../assets/pastevent.webp";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: "Event Management",
      description:
        "Comprehensive event management solutions for both non-profit and profit-based organizations.",
      img: img1,
    },
    {
      title: "Global Family",
      description:
        "Organizing non-profit events dedicated to supporting various causes and initiatives.",
      img: img2,
    },
    {
      title: "Music & Movie Promotions",
      description:
        "Promoting talented singers, musicians, and filmmakers from Nepal through concerts and premieres.",
      img: img3,
    },
    {
      title: "Cultural Showcases",
      description:
        "Showcasing traditional dance, music, and art exhibitions that bridge communities across continents.",
      img: img4,
    },
    {
      title: "Artist Development",
      description:
        "Providing platforms for emerging Nepali artists to showcase their talents internationally.",
      img: img5,
    },
    {
      title: "Community Events",
      description:
        "Creating memorable experiences that celebrate Nepali heritage and foster community connections.",
      img: img6,
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("our-services");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="our-services"
      className="py-16 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          {/* Heading Animation */}
          <h2
            className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our Services
          </h2>

          {/* Underline Animation */}
          <div
            className={`w-20 h-1 bg-red-600 mx-auto mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transformOrigin: "left" }}
          ></div>

          {/* Description Animation */}
          <p
            className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            3E Entertainment is dedicated to promoting Nepal and its rich
            cultural heritage through meticulously organized events and global
            exposure for local talents.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 text-red-400 hover:text-red-300 font-medium text-sm flex items-center transition-colors">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
            {" "}
            View All Services{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
