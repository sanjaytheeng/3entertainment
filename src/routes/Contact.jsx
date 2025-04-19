import React, { useState } from 'react';
import contact1 from '../assets/contact1.webp';
import contact2 from '../assets/contact2.jpg';
import contact3 from '../assets/contact3.webp';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    console.log({ name, email, message });
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent text-center mb-10">
          Contact Us
        </h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Contact Form */}
          <div className="lg:w-1/2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/40">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                  rows="5"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300 shadow-lg"
              >
                Send Message
              </button>
              {/* Submission Feedback */}
              {formSubmitted && (
                <p className="mt-4 text-green-400">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* Right Column: Image Collage */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={contact1}
                alt="Contact Illustration 1"
                className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
              />
              {/* Overlay for caption */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl text-white font-semibold">Reach Out</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={contact2}
                alt="Contact Illustration 2"
                className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
              />
              {/* Overlay for caption */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl text-white font-semibold">Connect with Us</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="col-span-2 relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={contact3}
                alt="Contact Illustration 3"
                className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
              />
              {/* Overlay for caption */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <p className="text-xl text-white font-semibold">Stay in Touch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;