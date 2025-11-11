import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "tech-stack" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleResume = () => {
    window.open("/Amutha_Lakshmi_Resume.pdf", "_blank");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Amutha_Lakshmi_Resume.pdf";
      link.download = "Amutha_Lakshmi_Resume.pdf";
      link.click();
    }, 200);
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 left-0 right-0 flex justify-center z-[100] pointer-events-none"
    >
      {/* Desktop */}
      <div className="hidden md:flex bg-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-full shadow-lg px-6 py-3 space-x-6 pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-4 py-1 rounded-full transition-all ${
              active === item.id
                ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                : "text-gray-300 hover:text-indigo-400"
            }`}
          >
            {item.name}
          </button>
        ))}

        <button
          onClick={handleResume}
          className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90"
        >
          Resume
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden pointer-events-auto">
        <button
          onClick={() => setOpen(!open)}
          className="px-6 py-2 rounded-full bg-gray-900/80 backdrop-blur-md border border-gray-700 shadow-lg text-white text-sm"
        >
          {open ? "Close Menu ▲" : "Menu ▼"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 8 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 bg-gray-900/95 border border-gray-700 backdrop-blur-xl rounded-xl shadow-xl p-4 w-60 text-center"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full py-2 text-gray-300 hover:text-indigo-400"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={handleResume}
                className="block w-full mt-2 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-full"
              >
                Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
