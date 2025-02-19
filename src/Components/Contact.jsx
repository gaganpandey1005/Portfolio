import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => {
  const [showLinks, setShowLinks] = useState(false); // State for toggling social media links

  return (
    <div className="border-b border-neutral-900 pb-20 mt-40 text-center">
      <div className="tracking-tight">
        <p className="my-6">
          {/* Toggle Social Links on Click */}
          <motion.button
            className={`border-2 border-gray-600 text-4xl px-6 py-2 rounded-xl transition duration-300 
              ${
                showLinks
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800 active:bg-gray-900"
              }`}
            onClick={() => setShowLinks((prev) => !prev)}
            whileHover={{ scale: 1.1 }} // Smooth hover effect
            whileTap={{ scale: 0.95 }}
          >
            {showLinks ? "Hide Links" : "Get in Touch"}
          </motion.button>
        </p>

        {/* Social Media Links - Show only when `showLinks` is true */}
        <AnimatePresence>
          {showLinks && (
            <motion.div
              key="links"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center space-y-4 mt-6"
            >
              <motion.a
                href="mailto:prathampandey1005@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-gray-200 active:text-gray-100 transition duration-300 py-2 px-4 rounded-lg bg-gray-700 bg-opacity-50 backdrop-blur-sm border border-gray-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-xl" />
                <span>Mail Me</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/gaganpandey/"
                className="flex items-center space-x-3 text-gray-400 hover:text-gray-200 active:text-gray-100 transition duration-300 py-2 px-4 rounded-lg bg-blue-600 bg-opacity-50 backdrop-blur-sm border border-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
