import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaGithub } from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiFirebase, SiTailwindcss, 
  SiJavascript, SiTypescript, SiMysql, SiHtml5, SiCss3 
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, desc: "Dynamic UI with reusable components" },
  { name: "Node.js", icon: <FaNode />, desc: "REST API & backend services" },
  { name: "Express.js", icon: <SiExpress />, desc: "Routing & middleware logic" },
  { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL database modeling" },
  { name: "Firebase", icon: <SiFirebase />, desc: "Auth + hosting + cloud DB" },
  { name: "MySQL", icon: <SiMysql />, desc: "Relational database & SQL" },
  { name: "JavaScript", icon: <SiJavascript />, desc: "Core web application logic" },
  { name: "TypeScript", icon: <SiTypescript />, desc: "Typed scalable codebase" },
  { name: "HTML5", icon: <SiHtml5 />, desc: "Semantic UI structure" },
  { name: "CSS3", icon: <SiCss3 />, desc: "Responsive visual styling" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Utility-first UI framework" },
  { name: "Git & GitHub", icon: <FaGithub />, desc: "Version control & teamwork" },
];

const Skills = () => {
  return (
    <section id="tech-stack" className="py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300 mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, y: -4 }}
            className="bg-[#0f1220] border border-[#2a2f45] rounded-xl p-5 
                       flex flex-col items-center text-center shadow-sm
                       hover:shadow-lg hover:border-indigo-400/50 transition-all duration-300"
          >
            <div className="text-5xl text-indigo-300 mb-3">{skill.icon}</div>
            <h3 className="text-base font-medium text-gray-200 tracking-wide">{skill.name}</h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
