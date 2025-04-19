import React, { useEffect, useMemo } from "react";
import aboutImg from "../assets/img11.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterAnimation = ({ end, duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <>{count}</>;
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4"
          >
            About 3E Entertainment
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Uniting communities through culture, entertainment, and social
            responsibility
          </motion.p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                3E Entertainment is dedicated to uniting the Nepalese diaspora
                and promoting Nepalese culture through impactful events that
                resonate with diverse audiences.
              </p>
            </motion.div>

            {/* Audience Card */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                Our Audience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We bridge cultures by bringing together Nepalese and American
                audiences, fostering cross-cultural understanding and
                appreciation through entertainment.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Social Responsibility */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              Social Impact
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              At 3E Entertainment, we are committed to making a difference. Our
              unique business model dedicates 20% of all revenue to charitable
              causes, supporting education, healthcare, and community
              development initiatives in Nepal.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={aboutImg}
                alt="Social Responsibility in Action"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">
              <CounterAnimation end={10} />+
            </div>
            <div className="text-gray-300">Successful Events</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">
              <CounterAnimation end={1000} />+
            </div>
            <div className="text-gray-300">Community Members</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl font-bold text-red-500 mb-2">
              <CounterAnimation end={20} />%
            </div>
            <div className="text-gray-300">Revenue to Charity</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
