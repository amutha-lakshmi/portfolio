import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MemeHub",
    desc: "A modern meme generator web app built with React and Firebase, allowing users to create, save, and share memes instantly.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://memeshub-project.netlify.app/",
  },
  {
    title: "Medicine Reminder App",
    desc: "A full-stack reminder application for scheduling and tracking medicine intake — includes notifications and doctor management features.",
    tech: ["TypeScript", "Firebase", "Vite"],
    link: "https://medication-management-tool.netlify.app/",
  },
  {
    title: "Travel Planner",
    desc: "Plan your trips effortlessly with itinerary builder, map integration, expense tracking, and sharing options.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://travelitenaryplanner.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative bg-[#111827]/60 border border-gray-700 rounded-2xl p-6 hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 border border-indigo-500/40 text-indigo-300 rounded-full bg-indigo-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
