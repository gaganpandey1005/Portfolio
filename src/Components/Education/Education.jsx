import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";

const Education = () => {
  const [active, setActive] = useState("Degree");
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const categories = ["Degree", "Certification", "Courses & Training"];

  const handleClick = (category) => {
    setActive(category);
  };

  const 
  description = {
    "Degree": "Formal educational qualifications and academic achievements",
    "Certification": "Professional certifications and online course completions",
    "Courses & Training":
      "Additional courses and specialized training programs",
  };

  const educationData = {
    Degree: [
      {
        institution: "Acropolis Institute of Technology and Research",
        degree: "Bachelor of Technology",
        field: "Computer Science & Engineering",
        duration: "2022 - Current",
        location: "Indore, India",
        grade: "CGPA: 7.05/10",
        icon: "🏛️",
        color: "from-blue-400 to-blue-600",
        highlights: [
          "Data Structures & Algorithms",
          "Web Development",
          "Database Management Systems",
          "Software Engineering",
        ],
        achievements: [
          "Scored 71% in Programming in Java",
          "Completed MEAN Stack Training",
          "Active member of Coding Club",
        ],
      },
      {
        institution: "M.G.M Higher Seconadary School",
        degree: "Higher Secondary Certificate",
        field: "Science (PCM)",
        duration: "2021 - 2022",
        location: "Indore, India",
        grade: "Percentage: 84%",
        icon: "🏫",
        color: "from-green-400 to-green-600",
        highlights: ["Mathematics", "Physics", "Chemistry"],
        achievements: ["School Topper ", "Head Boy"],
      },
    ],
    Certification: [
      {
        institution: "Acropolis Institute of Technology and Research",
        degree: "MERN Stack Developer",
        field: "Full Stack",
        duration: "2025",
        location: "Online - Simplilearn",
        grade: "Completed",
        icon: "📜",
        color: "from-blue-400 to-purple-600",
        highlights: [
          "React.js  Concepts",
          "Node.js Concepts",
          "Express.js  Concepts",
          "MongoDB  Concepts",
          "JavaScript ES6+",
          "Responsive Web Design",
          "Version Control with Git",
        ],
        achievements: [
          "Capstone Project: Ed-Tech Platform",
          "Peer Review Excellence",
          "100% Assignment Completion",
        ],
      },
      {
        institution: "Acropolis Institute of Technology and Research",
        degree: "MEAN Stack Training",
        field: "Full Stack",
        duration: "2024",
        location: "On-Site Certification",
        grade: "Certified",
        icon: "💻",
        color: "from-orange-400 to-red-600",
        highlights: ["Angular"],
        achievements: ["Hands-on Labs Completion", "Project Implementation"],
      },
    ],
    "Courses & Training": [
      {
        institution: "Universal Informatics ",
        degree: "Programming in C (Basics)",

        duration: "2022",
        location: "Online Course",
        grade: "5-Star Rating",
        icon: "🎓",
        color: "from-purple-400 to-pink-600",
        highlights: [
          "C"
        ],
        achievements: [
          "12 Basic Projects",
          
        ],
      },
    
    ],
  };

  return (
    <>
      <div
        className={`min-h-screen py-20 px-4 
          text-black"
        }`}
      >
        <span className="font-bold text-6xl flex justify-center">
          <h1 className={isDark ? "text-white" : "text-black"}>Edu</h1>
          <h1 className="text-pink-600">cation</h1>
        </span>
        <span className="justify-center font-semibold flex">
          <p className={`p-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            My academic journey and continuous learning path
          </p>
        </span>

        <div className="flex gap-4 justify-center flex-wrap">
          {categories.map((category) => {
            return (
              <div
                key={category}
                className={`${
                  active === category
                    ? "bg-pink-500"
                    : isDark
                    ? "bg-gray-700"
                    : "bg-gray-300"
                } mt-2 shadow-md rounded-xl transition-all duration-300 hover:scale-105`}
              >
                <button
                  onClick={() => handleClick(category)}
                  className={`p-2 font-semibold rounded-2xl ${
                    active === category
                      ? "text-white"
                      : isDark
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          {Object.entries(description).map(([key, desc]) => {
            return (
              <div key={key} className="flex flex-col">
               <h1 className="text-3xl font-bold text-center">
                {active===key? key:""}
               </h1>
                <p
                  className={`mt-2 text-center text-lg ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {active === key ? desc : ""}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education Cards */}
        <div className="flex flex-wrap gap-8 justify-center mt-10">
          {educationData[active]?.map((item, index) => (
            <div
              key={`${item.institution}-${index}`}
              className={`${
                isDark
                  ? "bg-gray-800 border-gray-700 shadow-gray-900/50"
                  : "bg-white border-gray-200 shadow-gray-300/50"
              } border p-6 rounded-xl w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl mt-1">{item.icon}</div>
                <div className="flex-1">
                  <h2
                    className={`text-xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {item.degree}
                  </h2>
                  <h3 className="text-lg font-semibold text-pink-600 mb-2">
                    {item.institution}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.field}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="text-pink-500">📅</span>
                  <span>{item.duration}</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="text-pink-500">📍</span>
                  <span>{item.location}</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="text-pink-500">🏆</span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {item.grade}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Key Subjects/Topics:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full transition-colors duration-200 ${
                        isDark
                          ? "bg-gray-700 text-gray-200 border border-gray-600"
                          : "bg-gray-50 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4
                  className={`text-sm font-semibold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Achievements:
                </h4>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className={`text-xs flex items-start gap-2 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span className="text-pink-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    isDark ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: "100%",
                      animation: "loadProgress 2s ease-out forwards",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes loadProgress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Education;
