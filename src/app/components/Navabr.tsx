"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, FileText, User, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const menuItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Works", href: "/work", icon: Briefcase },
    { title: "Experience", href: "/experience", icon: FileText },
    { title: "About", href: "/about", icon: User },
    { title: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md h-18">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-32">
          <div className="flex justify-between items-center h-12 md:h-20">
            {/* Left Section: Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-300 text-2xl font-semibold relative"
            >
              <Link href="/">
                <span className="bg-gradient-to-r from-purple-400 to-violet-800 bg-clip-text text-transparent">
                  Abdul Rehman
                </span>
              </Link>
            </motion.div>

            {/* Center Section: Navigation Links (Desktop only) */}
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="hidden lg:flex items-center"
            >
              <div className="flex space-x-1 p-1 rounded-full bg-gray-800/50 relative border border-violet-500 shadow-lg">
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
            <div className="flex items-center">
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
            </div>
          </div>
        </div>
      </div>

      {/* Dock Navigation for Mobile and Tablet */}
      <div className="fixed inset-x-0 bottom-8 z-50 lg:hidden flex justify-center px-6 ">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="w-full max-w-xs mx-auto"
        >
          <motion.div
            className="flex justify-between items-end bg-gradient-to-r from-violet-950 via-fuchsia-800/20 to-purple-500/10 backdrop-blur-lg px-4 py-2 rounded-2xl border border-violet-800 shadow-lg"
            animate={{
              padding: hoveredIcon !== null ? "0.75rem 1.25rem" : "0.5rem 1rem",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const isHovered = hoveredIcon === index;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex-1 flex justify-center"
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      y: isHovered ? -12 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className={`p-2 rounded-xl flex items-center justify-center
                        ${
                          isActive ? "bg-violet-500/20" : "hover:bg-gray-800/50"
                        }`}
                    >
                      <Icon
                        size={22}
                        className={`${
                          isActive
                            ? "text-violet-400"
                            : "text-gray-400 group-hover:text-white"
                        } transition-colors`}
                      />
                    </motion.div>

                    {/* Reflection effect */}
                    <motion.div
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1 bg-gradient-to-t from-violet-500/0 to-violet-500/20 rounded-full blur-sm"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        width: isHovered ? "28px" : "24px",
                      }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
