import React, { useState } from "react";
import about from "../assets/about.jpg";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b border-neutral-900 mt-40 flex justify-center items-center ">
      <div className="flex flex-col items-center w-full lg:w-2/3">
        {/* Button */}
        <motion.button
          className={`border-2 border-gray-600 text-4xl px-6 py-2 mb-5 rounded-xl transition duration-300 
            ${
              show
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 active:bg-gray-900"
            }`}
          onClick={() => setShow((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {show ? "Hide" : "About Me"}
        </motion.button>

        {/* Animated Text */}
        <AnimatePresence>
          {show && (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-800 p-6 w-[90%] lg:w-[60%] rounded-lg shadow-lg text-center"
            >
              <motion.h4
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="leading-relaxed text-white text-lg sm:text-xl md:text-2xl font-light mt-4 mb-6 px-4"
              >
                Hi! I'm Gagan Pandey, a passionate Full Stack Developer with a
                love for creating interactive and dynamic web applications. I
                specialize in JavaScript, React, Node.js, and MongoDB, focusing
                on building efficient and user-friendly websites. I enjoy
                solving complex problems and translating ideas into functional,
                scalable solutions. When I'm not coding, you’ll likely find me
                exploring new tech trends or working on personal projects that
                challenge my skills. Let's collaborate and create something
                amazing!
              </motion.h4>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;
