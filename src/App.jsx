import React from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";

import Projects from "./Components/Projects/Project";
import { useTheme } from "./Context/ThemeContext";
import TechStack from "./Components/TechStack/TechStack";
import Education from "./Components/Education/education";


import Contact from "./Components/Contact/Contact";




const App = () => {
  const {theme}=useTheme()
  const isDark=theme=="dark";
  return (
    <div className={`${isDark ? "darkTheme" : "lightTheme"}`}>
      <Navbar />
      <section id="home">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      
       
  
    </div>
  );
};

export default App;
