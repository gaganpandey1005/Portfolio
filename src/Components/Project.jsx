import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectHub from "../assets/projecthublogo.png";

const Project = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="border-b-4 pb-10 border-neutral-900 flex flex-col items-center">
      <motion.button
        className={`border-2 mt-40 border-gray-600 text-4xl px-6 py-2 rounded-xl transition duration-300 
              ${
                show
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 active:bg-gray-900"
              }`}
        onClick={() => setShow((prev) => !prev)}
        whileHover={{ scale: 1.1 }} // Smooth hover effect
        whileTap={{ scale: 0.95 }}
      >
        {show ? "Hide" : "Projects"}
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
            className="flex flex-col items-center space-y-4 mt-6"
          >
            <h1 className="text-3xl text-blue-500 font-bold">Project Hub</h1>
            <h4 className="leading-7 text-white text-center lg:text-left">
              Project Hub is an innovative platform designed to streamline the
              minor project submission process for students and faculty. It
              enables students to submit their projects online, track progress,
              and collaborate with their assigned guides. Faculty can
              efficiently manage and evaluate projects, ensuring smooth
              coordination and timely feedback. The platform simplifies the
              entire workflow, making it more accessible and organized for both
              students and faculty members.
            </h4>

            {/* Fixed Image Div */}
            <div className="mt-6 flex justify-center bg-blue-600 rounded-2xl w-full">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="object-contain rounded-2xl max-w-full h-auto"
                src={projectHub}
                alt="Project Hub"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
