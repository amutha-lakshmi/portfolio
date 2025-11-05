// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skils", id: "tech-stack" }, // ensure this id matches your section
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", `${(scrollY / docHeight) * 100}vw`);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 80; // adjust for fixed navbar height
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    // full-width fixed bar; inner content is centered
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 left-0 right-0 z-50 pointer-events-none"
    >
      {/* inner container centers the visible pill and allows pointer events */}
      <div className="mx-auto max-w-full flex justify-center pointer-events-auto px-4">
        <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-full shadow-lg px-6 py-3 flex items-center z-50">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    active === item.id
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
                      : "hover:text-indigo-400"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-200 focus:outline-none"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (centered below the pill) */}
      {menuOpen && (
        <div className="fixed top-20 left-0 right-0 flex justify-center z-40 px-4">
          <ul className="bg-gray-900/95 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl py-4 px-6 space-y-3 text-center w-64">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`block w-full py-2 rounded-full transition-all duration-200 ${
                    active === item.id
                      ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white"
                      : "hover:text-indigo-400"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
