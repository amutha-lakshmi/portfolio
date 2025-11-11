import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="bg-[#0A0F1C] text-white relative overflow-x-hidden scroll-smooth">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-indigo-500 to-pink-500 w-[var(--scroll)] z-50" />

      <Navbar />
      <Hero />
      <About />
      {/* render Skills directly (it already has id="tech-stack") */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
