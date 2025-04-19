import React, { useState, useEffect } from "react";
import pastEvent1 from "../assets/main_2024.webp";
import pastEvent2 from "../assets/PastEvent1.png";
import pastEvent3 from "../assets/pastevent.webp";

const pastEventData = [
  {
    image: pastEvent1,
    alt: "Main Event 2024",
    description:
      "Main Event 2024 – A celebration of culture, music, and unity in the Nepali community.",
  },
  {
    image: pastEvent2,
    alt: "Live Concert",
    description:
      "Live Concert – Energetic performances by rising Nepali stars and guest artists.",
  },
  {
    image: pastEvent3,
    alt: "Cultural Night",
    description:
      "Cultural Night – Traditional dance, food, and a vibrant showcase of Nepali heritage.",
  },
];

const PastEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = 3000; // 3 seconds

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % pastEventData.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + pastEventData.length) % pastEventData.length
    );
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="past-events" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent text-center mb-6">
          Past Events
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Take a look at some of our previous events that brought joy, unity,
          and cultural pride to the community.
        </p>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Images */}
          <div className="transition duration-700 ease-in-out">
            {pastEventData.map((event, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index ? "block" : "hidden"
                } relative`}
              >
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                {/* Description */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 text-center space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-white">
                    {event.alt}
                  </p>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-colors z-10"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-colors z-10"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-4">
            {pastEventData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-red-600 scale-125" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
