import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      // ↓ reduced outside spacing (only section padding)
      className="flex flex-col justify-center items-center px-6 pt-12 pb-6 md:pt-12 md:pb-6 sm:pt-8 sm:pb-4"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I’m a dedicated Full-Stack Developer specializing in the MERN stack —
        MongoDB, Express.js, React, and Node.js. I focus on building scalable,
        secure, and user-friendly web applications that solve real-world needs.
        With experience in developing platforms such as travel planners, medicine
        reminder systems, and meme creation applications, I combine clean UI
        design with efficient backend logic to deliver seamless digital experiences.
      </motion.p>

      <motion.p
        className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I enjoy breaking down complex problems, writing maintainable code, and
        continuously learning new technologies to improve performance and
        reliability. I believe in building products that are not only functional,
        but also meaningful and impactful for users.
      </motion.p>

      <motion.p
        // last paragraph has no bottom margin so section bottom shrinks
        className="max-w-3xl text-center text-lg text-indigo-300 font-medium mb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Let’s collaborate and turn ideas into reality!
      </motion.p>
    </section>
  );
};

export default About;
