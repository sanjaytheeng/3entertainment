import React, { useState, useEffect, useMemo, useCallback } from "react";

// Hero carousel images
import img1 from "../assets/2024-1.webp";
import img2 from "../assets/2024-2.webp";
import img3 from "../assets/2024-3.jpg";
import img4 from "../assets/2024-4.webp";
import img5 from "../assets/2024-5.webp";
import img6 from "../assets/2024-6.webp";

// Import the additional sections/components
import Services from "./Services";
import About from "./About";
import PastEvents from "./PastEvents";
import UpcomingEvents from "./Upcoming";
import ContactUs from "./Contact";

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = useMemo(() => ["ENCOURAGING", "ENGAGING", "EMPOWERING"], []);
  const typingDelay = useMemo(() => 150, []);
  const erasingDelay = useMemo(() => 100, []);
  const pauseDelay = useMemo(() => 2000, []);

  const handleTransition = useMemo(
    () => (callback) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        callback();
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    handleTransition(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    });
  }, [handleTransition]);

  const prevSlide = useCallback(() => {
    handleTransition(() => {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    });
  }, [handleTransition]);

  const goToSlide = useCallback(
    (index) => {
      if (index === current) return;
      handleTransition(() => {
        setCurrent(index);
      });
    },
    [current, handleTransition]
  );

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Typing effect logic
  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (typingText.length < currentPhrase.length) {
          setTypingText(currentPhrase.slice(0, typingText.length + 1));
          timer = setTimeout(handleTyping, typingDelay);
        } else {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(currentPhrase.slice(0, typingText.length - 1));
          timer = setTimeout(handleTyping, erasingDelay);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    timer = setTimeout(handleTyping, isDeleting ? erasingDelay : typingDelay);
    return () => clearTimeout(timer);
  }, [
    typingText,
    currentIndex,
    isDeleting,
    phrases,
    typingDelay,
    erasingDelay,
    pauseDelay,
  ]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-fadeIn">
            OUR COMMITMENT
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4 relative">
            {typingText}
            <span className="inline-block ml-1 animate-blink">|</span>{" "}
            {/* Blinking cursor */}
          </h2>
          <p className="text-gray-300 leading-relaxed mt-4 max-w-xl animate-fadeIn">
            3E Entertainment is on a mission to unite and celebrate the Nepalese
            diaspora by showcasing Nepal's rich culture, art, music, and
            cuisine—all while introducing Nepal to the American audience and
            promoting tourism.
          </p>
          <button className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
            Explore Events
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Previous Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm z-20"
          aria-label="Next Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-red-600 w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Past Events Section */}
      <PastEvents />

      {/* Upcoming Events Section */}
      <UpcomingEvents />

      {/* Contact Section */}
      <ContactUs />

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Blinking cursor animation */
        .animate-blink {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
