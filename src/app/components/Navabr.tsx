"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Works", href: "/work" },
    { title: "Experience", href: "/experience" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md h-18">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-32">
        <div className="flex justify-between items-center h-12 md:h-20">
          {/* Left Section: Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray-300 text-2xl font-semibold relative"
          >
            <span className="bg-gradient-to-r from-purple-400 to-violet-800 bg-clip-text text-transparent">
              Abdul Rehman
            </span>
          </motion.div>

          {/* Center Section: Navigation Links (Desktop) */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="hidden md:flex items-center"
          >
            <div className="flex space-x-1 p-1 rounded-full bg-gray-800/50 relative border border-violet-500 shadow-lg">
              {/* Gradient Border Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-800 to-purple-500 opacity-20"></div>

              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="relative px-6 py-2 text-sm text-gray-300 rounded-full transition-all duration-100 hover:text-white"
                  whileHover={{
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)",
                  }}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
          </motion.nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="hidden sm:flex px-4 py-2 text-sm text-white rounded-full bg-gradient-to-r from-violet-500 to-purple-800 hover:from-purple-600 hover:to-violet-600 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
              }}
            >
              Download Resume
            </motion.a>

            {/* Theme Toggle
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-gray-300 hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-300 md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white transition-all duration-300"
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(168, 85, 247, 0.15)",
                  }}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                className="block px-4 py-3 text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
