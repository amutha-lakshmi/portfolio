import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MemeHub",
    desc: "A meme generator web app allowing users to create, customize, download and share memes.",
    tech: ["React.js", "CSS", "Firebase"],
    img: "/project-images/memehub.png",
    live: "https://memeshub-project.netlify.app/",
    github: "https://github.com/amutha-lakshmi/Memeshub.git"
  },
  {
    title: "Medicine Reminder App",
    desc: "Medicine scheduling and tracking app with alerts and doctor management.",
    tech: ["HTML", "CSS", "Firebase", "Vite"],
    img: "/project-images/medicine.png",
    live: "https://medication-management-tool.netlify.app/",
    github: "https://github.com/amutha-lakshmi/medication-management-tool.git"
  },
  {
    title: "Travel Planner",
    desc: "Plan trips, manage itinerary, expenses and collaborate with group members.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Socket.IO", "Express.js", "MongoDB", "Multer"],
    img: "/project-images/travel.png",
    live: "https://travelitenaryplanner.netlify.app/",
    github: "https://github.com/amutha-lakshmi/Travel-Itinerary-Planner.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-14 sm:py-10 px-6 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-[#111827]/60 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:border-indigo-500 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Screenshot */}
            <img src={proj.img} alt={proj.title} className="w-full h-44 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full border border-indigo-400 text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Always Visible Links */}
              <div className="flex justify-between items-center">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-sm"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-sm"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
