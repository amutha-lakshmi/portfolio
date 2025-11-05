import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="tech-stack" className="min-h-screen py-20 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-[#111827]/60 text-indigo-400 px-5 py-2 rounded-full border border-indigo-500/40 hover:bg-indigo-500 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
