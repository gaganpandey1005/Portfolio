import React from "react";
import { useTheme } from "../../Context/ThemeContext";

// Mock theme context for demo


const Contact = () => {
   const { theme } = useTheme();
    const isDark = theme === "dark";

  const details = [
    {
      label: import.meta.env.VITE_EMAIL,
      icon: "📧",
      link: "mailto:import.meta.env.VITE_EMAIL",
      type: "Email",
    },
    {
      label: "8871860269",
      icon: "📱",
      link: "tel:mailto:import.meta.env.VITE_PHONE",
      type: "Phone",
    },
    {
      label: "Indore, Madhya Pradesh",
      icon: "📍",
      link: "https://www.google.com/maps?q=/MR+9+Rd,+Indore,+Madhya+Pradesh",
      type: "Location",
    },
  ];

  return (
    <footer
      className={`${
        isDark
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-gray-700"
          : "bg-gradient-to-r from-gray-50 via-white to-gray-50 border-gray-200"
      } relative overflow-hidden border-t-2 py-12 px-6`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-32 bg-pink-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              Let's{" "}
            </span>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-lg max-w-2xl mx-auto`}
          >
            Ready to collaborate? I'm just a message away. Let's build something
            amazing together.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {details.map((detail, index) => (
            <a
              key={index}
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark
                  ? "bg-gray-800/30 border-gray-700 hover:bg-gray-700/50 hover:border-pink-500/50"
                  : "bg-white/50 border-gray-200 hover:bg-gray-50/80 hover:border-pink-400/50"
              } group relative flex flex-col items-center text-center p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                {detail.icon}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } text-sm font-medium uppercase tracking-wide`}
                >
                  {detail.type}
                </div>
                <div
                  className={`${
                    isDark ? "text-white" : "text-gray-900"
                  } font-semibold text-lg group-hover:text-pink-500 transition-colors duration-300`}
                >
                  {detail.label}
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side - Brand/Name */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <div
                  className={`${
                    isDark ? "text-white" : "text-gray-900"
                  } font-semibold text-lg`}
                >
                  Gagan Pandey
                </div>
                <div
                  className={`${
                    isDark ? "text-gray-400" : "text-gray-600"
                  } text-sm`}
                >
                  Full Stack Developer
                </div>
              </div>
            </div>

            {/* Right side - Social or additional info */}
            <div className="flex items-center space-x-6">
              <div
                className={`${
                  isDark ? "text-gray-400" : "text-gray-600"
                } text-sm`}
              >
                © 2025 All rights reserved
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
