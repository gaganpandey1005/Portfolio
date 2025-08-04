import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import profile from "../../assets/profile.png";
const Hero = () => {
    const {theme,toggleTheme}=useTheme()
    const isDark=theme=='dark';
  return (
    <>
      <section
        className={`min-h-screen    md:px-12 md:flex-row px-9  flex flex-col  items-center`}
      >
        <div className="mt-15">
          <span className="bg-pink-700 p-2 rounded-2xl font-semibold">
            MERN Stack Developer
          </span>
          <span className={`block mt-5 text-4xl text-gray-700 font-bold  `}>
            Hi, I'm
            <span className={`ml-2 text-pink-500 `}>Gagan Pandey</span>
          </span>
          <span
            className={`text-black font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Building digital experiences that make a difference
          </span>
          <p className={` ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            I am a passionate developer specializing in creating elegant,
            user-freindly web application with modern technologies. I love
            solving complex problems and turning ideas into reality
          </p>
          <div className="flex space-x-6 mt-4">
            <button className="bg-pink-500 p-2.5 rounded-xl flex gap-2  hover:bg-pink-900  items-center">
              <a href="#projects">
                {" "}
                <p className="font-semibold">View Projects</p>
              </a>
              <HiArrowNarrowRight className="text-xl" />
            </button>
            <button
              className={`relative overflow-hidden border-2 z-20 p-2 rounded-xl border-gray-600   ${
                isDark ? "bg-black" : "bg-gray-400"
              } hover:bg-gray-700 transition-colors duration-300 group`}
            >
              <a href="#contact">
                {" "}
                <p className="font-semibold relative z-10">Let's Connect</p>
              </a>

              <span
                className={`absolute top-0 left-0 w-full h-full  opacity-30 rotate-45 -translate-x-full transform group-hover:translate-x-full transition duration-800 ease-in-out bg-white`}
              ></span>
            </button>
          </div>
          <div className={`mt-4 ${isDark ? "text-white" : "text-gray-700"}`}>
            <p>Connect with me</p>
          </div>
          <div className="mt-2 ml-2 flex gap-9">
            <a href="https://github.com/gaganpandey1005">
              <FaGithub className="text-xl   hover:bg-black rounded-[50%]" />
            </a>
            <a href="https://www.linkedin.com/in/gaganpandey/">
              <BsLinkedin className="text-xl hover:bg-gray-900 rounded-[50%]" />
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div
            className={`rounded-full overflow-hidden border-4 
    ${isDark ? "border-pink-800" : "border-pink-500"} 
    h-64 w-64 lg:mr-30`}
          >
            <img src={profile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
