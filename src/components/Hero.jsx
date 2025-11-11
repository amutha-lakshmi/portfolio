import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0A0F1C] text-white text-center px-6 pt-28 md:pt-32 pb-6"
    >
      {/* Floating Glowing Image */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.6)]"
      >
        <img src="/photo.png" alt="Profile" className="w-full h-full object-cover" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"></div>
      </motion.div>

      <motion.h1
        className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I’m Amutha Lakshmi
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Full–Stack Developer
      </motion.h2>

      <motion.p
        className="max-w-2xl text-gray-400 mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I’m a Full-Stack Web Developer specializing in React, Node.js, Express, and MongoDB, with a strong focus on building scalable, high-performance web applications. I combine clean, intuitive front-end design with secure, efficient backend architecture to deliver seamless digital experiences. Passionate about writing maintainable code and solving real-world challenges, I strive to create reliable, modern, and impactful web solutions that make a difference.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="#contact"
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Get in Touch →
        </a>

        <a
          href="/Amutha_Lakshmi_Resume.pdf"
          download="Amutha_Lakshmi_Resume.pdf"
          className="border border-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 hover:text-black transition"
        >
          Download Resume ⬇️
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 text-2xl mt-0 mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/amuthas/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/amutha-lakshmi"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
