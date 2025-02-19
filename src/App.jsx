import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="min-h-screen">
          <div className="container mx-auto px-8">
            <NavBar />
            <Hero />
            <About />
            <Technologies/>
            <Project/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
