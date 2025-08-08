import React, { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaLink, FaNodeJs, FaGitAlt, FaGithub, FaNpm, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiJsonwebtokens  } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
const TechStack = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [category, setCategory] = useState("Frontend Development");

  const techStackData = {
    frontend: {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      technologies: [
        {
          name: "React",
          level: 90,
          icon: <FaReact className="text-blue-500" />,
          description: "Component-based UI library",
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "JavaScript",
          level: 85,
          icon: <FaJsSquare className="text-yellow-400" />,
          description: "Dynamic programming language",
          color: "from-yellow-400 to-yellow-600",
        },
        {
          name: "Tailwind CSS",
          level: 88,
          icon: <SiTailwindcss className="text-cyan-400" />,
          description: "Utility-first CSS framework",
          color: "from-cyan-400 to-cyan-600",
        },
        {
          name: "HTML5",
          level: 95,
          icon: <FaHtml5 className="text-orange-500" />,
          description: "Semantic markup language",
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "CSS3",
          level: 85,
          icon: <FaCss3Alt className="text-blue-600" />,
          description: "Styling and animations",
          color: "from-blue-400 to-purple-600",
        },
      ],
    },
    backend: {
      title: "Backend Development",
      description: "Server-side development and API creation",
      technologies: [
        {
          name: "Node.js",
          level: 85,
          icon: <FaNodeJs className="text-green-500" />,
          description: "JavaScript runtime environment",
          color: "from-green-400 to-green-600",
        },
        {
          name: "Express.js",
          level: 80,
          icon: <SiExpress className="text-gray-600" />,
          description: "Web application framework",
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "MongoDB",
          level: 75,
          icon: <SiMongodb className="text-green-700" />,
          description: "NoSQL database",
          color: "from-green-500 to-green-700",
        },
        {
          name: "MySQL",
          level: 70,
          icon: <SiMysql className="text-blue-700" />,
          description: "Relational database",
          color: "from-blue-500 to-blue-700",
        },
        {
          name: "REST APIs",
          level: 85,
          icon: <FaLink className="text-purple-500" />,
          description: "RESTful web services",
          color: "from-purple-400 to-purple-600",
        },
        {
          name: "JWT",
          level: 78,
          icon: <SiJsonwebtokens className="text-red-500" />,
          description: "JSON Web Tokens",
          color: "from-red-400 to-red-600",
        },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      description: "Development tools and workflow management",
      technologies: [
        {
          name: "Git",
          level: 88,
          icon: <FaGitAlt className="text-orange-500" />,
          description: "Version control system",
          color: "from-orange-400 to-red-600",
        },
        {
          name: "GitHub",
          level: 90,
          icon: <FaGithub className="text-gray-700" />,
          description: "Code hosting platform",
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "VS Code",
          level: 95,
          icon: <DiVisualstudio className="text-blue-500" />,
          description: "Code editor",
          color: "from-blue-400 to-blue-600",
        },
        {
          name: "Postman",
          level: 85,
          icon: <SiPostman className="text-orange-500" />,
          description: "API testing tool",
          color: "from-orange-400 to-orange-600",
        },
        {
          name: "npm",
          level: 85,
          icon: <FaNpm className="text-red-600" />,
          description: "Package manager",
          color: "from-red-400 to-red-600",
        },
      ],
    },
  };
  

  const categories = Object.keys(techStackData);

  return (
    <div className={`min-h-screen py-20 px-4 sm:px-8 md:px-16 `}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-2">
          <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold mb-2 text-center">
            <span
              className={`${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Tech{" "}
            </span>
            <span className="text-pink-600">Stack</span>
          </h1>
        </h1>
        <p>Technologies and tools I use to bring ideas in life</p>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-x-6 flex-wrap mt-8">
        {categories.map((key) => (
          <button
            key={techStackData[key].title}
            onClick={() => setCategory(techStackData[key].title)}
            className={`z-10 p-1 px-3 font-medium m-2 rounded ${
              isDark ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            } ${
              category === techStackData[key].title
                ? "bg-pink-600 text-white"
                : ""
            } transition-colors duration-300`}
          >
            {techStackData[key].title}
          </button>
        ))}
      </div>

      {/* Category Title & Description */}
      <div className="flex flex-col mt-10 items-center">
        <h1 className="text-xl font-bold mb-2">{category}</h1>
        <p className="mb-6 text-center max-w-xl">
          {categories.map((key) =>
            techStackData[key].title === category ? (
              <span key={key}>{techStackData[key].description}</span>
            ) : null
          )}
        </p>
      </div>

      {/* Technologies Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {categories.map((key) => {
          if (techStackData[key].title === category) {
            return techStackData[key].technologies.map((tech) => (
              <div
                key={tech.name}
                className={`${
                  isDark ? "darkTheme" : "lightTheme"
                }   p-4 rounded-lg w-[280px] shadow-md transition-colors duration-300`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <h1 className="text-xl font-semibold">{tech.name}</h1>
                </div>
                <p className="text-sm mb-2">{tech.description}</p>
                <p className="text-sm font-medium">Proficiency</p>
                <div className="w-full bg-white dark:bg-gray-700 h-2 rounded overflow-hidden mt-1">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color}`}
                    style={{
                      width: `${tech.level}%`,
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            ));
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default TechStack;
