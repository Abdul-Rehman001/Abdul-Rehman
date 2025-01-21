/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative flex flex-col lg:flex-row items-center bg-gradient-to-bl from-gray-950 to-violet-950/20 overflow-hidden"
    >
      {/* Background animations */}
      <div
        className="absolute items-center h-[50rem] -translate-y-[-25rem] lg:h-auto lg:w-1/2 lg:right-[15rem] 
                   transform lg:translate-x-1/3 
                   md:translate-y-1/4 lg:translate-y-0
                   z-20 overflow-hidden"
      >
        <Spline scene="https://prod.spline.design/kZvr1nQUD-QvETXr/scene.splinecode" />
      </div>

      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute w-full h-full opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(147, 51, 234, 0.6) 0%, transparent 60%)",
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.6) 0%, transparent 60%)",
              "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(236, 72, 225, 0.6) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={
            {
              "--mouse-x": `${mousePosition.x * 100}%`,
              "--mouse-y": `${mousePosition.y * 100}%`,
            } as React.CSSProperties
          }
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity }}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-sm sm:text-base text-purple-400 font-medium flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <Sparkles className="w-5 h-5" />
                Hi, I'm Abdul Rehman Tahir
              </motion.h2>
              <motion.h1
                className="text-4xl sm:text-6xl font-bold text-white"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
                  Crafting Engaging Web Interfaces
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                As a Frontend Developer, I specialize in designing and building
                high-performance, user-centric web applications using React,
                Next.js, and modern UI/UX techniques. My mission is to turn
                complex ideas into seamless digital solutions.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <Link href="#projects">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 h-10 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-medium relative overflow-hidden group"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                      style={{ filter: "blur(20px)" }}
                    />
                    <span className="relative">View Projects</span>
                  </motion.button>
                </Link>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    borderColor: [
                      "rgba(147, 51, 234, 1)",
                      "rgba(59, 130, 246, 1)",
                      "rgba(236, 72, 153, 1)",
                    ],
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    borderColor: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="px-8 h-10 rounded-full border-2 border-purple-500 text-white font-medium relative overflow-hidden group"
                >
                  <span className="relative">Contact Me</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right column - Spline Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-full h-[400px] lg:h-[600px] mt-12 lg:mt-0"
          >
            {/* Spline container is now managed by the absolute positioned div above */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
