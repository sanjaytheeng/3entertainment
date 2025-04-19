import React, { useState, useEffect } from 'react';
import dashainImg from '../assets/dashain.webp';
import eventPic from '../assets/2024-1.webp';
import eventPic2 from '../assets/2024-2.webp';

const UpcomingEvents = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date for Dashain Tihar Fest 2025 (example date)
  const targetDate = new Date('2025-10-15T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="upcoming-events" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent text-center mb-6">
          Upcoming Events
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          Get ready for an extraordinary celebration at the Dashain Tihar Fest 2025—where tradition meets modern festivity.
        </p>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Information Card */}
          <div className="lg:w-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/40">
            <h3 className="text-2xl font-semibold text-white mb-4">Dashain Tihar Fest 2025</h3>
            <div className="text-xl font-medium text-gray-300 mb-4">
              <span>Countdown:</span>
              <strong>
                {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
              </strong>
            </div>
            <p className="text-gray-400 mb-6">
              The Dashain Tihar Fest 2025 promises to be an unforgettable celebration of Nepal’s most cherished festivals—Dashain and Tihar. Enjoy mesmerizing cultural performances, traditional music and dance, delicious Nepali cuisine, and interactive experiences that immerse you in the spirit of Nepalese heritage.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-6 rounded-lg font-medium transition duration-300 hover:bg-red-800"
            >
              Learn More
            </a>
          </div>

          {/* Image Gallery */}
          <div className="lg:w-1/2">
            <div className="gallery relative overflow-hidden">
              {/* Main Image */}
              <img
                src={dashainImg}
                alt="Dashain Tihar Fest 2025"
                className="w-full object-cover rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
              />
              {/* Overlay for caption */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl text-white font-semibold">Main Event</p>
                </div>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={eventPic}
                  alt="Event Detail"
                  className="w-full object-cover transform transition-all duration-300 hover:scale-105"
                />
                {/* Overlay for caption */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-white font-semibold">Cultural Performances</p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={eventPic2}
                  alt="Event Detail 2"
                  className="w-full object-cover transform transition-all duration-300 hover:scale-105"
                />
                {/* Overlay for caption */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-xl text-white font-semibold">Traditional Music & Dance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;