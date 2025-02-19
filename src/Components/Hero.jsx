import React from "react";
import profile from "../assets/profile.jpg";
import { motion } from "motion/react";

const Hero = () => {
  const container = (delay) => {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
      },
    };
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {/* Flex container to align text and image */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 lg:px-16">
        {/* Left Side - Text Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight mt-6 lg:mt-16"
          >
            Gagan Pandey
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl mt-3"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-light"
          >
            I'm a Full Stack Developer passionate about building dynamic,
            user-friendly web applications. With a focus on JavaScript, Node.js,
            and React, I love solving problems and bringing ideas to life
            through clean, efficient code. Let's create something impactful
            together!
          </motion.p>
          <motion.div
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="mt-6"
          ></motion.div>
        </div>

        {/* Right Side - Image Section */}
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
        >
          <img
            className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-auto rounded-xl shadow-lg object-cover"
            src={profile}
            alt="Profile"
          />
        </motion.div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/file/d/1x54agSvBbwlxI9gUeoVS92xzAv6co9AH/view?usp=drive_link"
          target="_blank"
          download
        >
          <button className="mt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-2 px-4 rounded-md hover:shadow-lg transition duration-300">
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
