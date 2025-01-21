"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Phone,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import Spline from "@splinetool/react-spline";

const AboutPage = () => {
  const skills = {
    frontend: ["Next.js", "React.js", "HTML", "CSS", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    languages: ["TypeScript", "JavaScript", "Python"],
    other: ["Git", "GitHub", "Web Design", "Data Structures"],
  };

  const education = [
    {
      degree: "B.Tech In Computer Science",
      school: "Babu Banarasi Das University",
      location: "Lucknow",
      period: "Oct 2020 – June 2024",
      score: "CGPA: 8.1",
      description:
        "Specialized in web development and software engineering principles",
    },
    {
      degree: "12th Standard (ISC)",
      school: "Exon Montessori College",
      location: "Lucknow",
      score: "Percentage: 67%",
      description: "Focused on science and mathematics",
    },
    {
      degree: "10th Standard (ICSE)",
      school: "St. Teresa's Day School & College",
      score: "Percentage: 76.4%",
      description: "Strong foundation in core subjects",
    },
  ];

  const fadeInUpVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-950/10 to-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute h-screen w-screen  overflow-hidden">
        <Spline scene="https://prod.spline.design/SkpXTj2WRBLSjdmo/scene.splinecode" />
      </div>
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Introduction Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-4 text-left max-w-ful mx-auto mb-12"
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Get to know me
            </span>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              About Me
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            className="relative group rounded-2xl overflow-hidden text-left"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative p-8 text-left lg:p-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
              <div className="max-w-3xl  mx-auto space-y-6">
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed text-left"
                  variants={fadeInUpVariants}
                >
                  Front End Developer with experience in React, Next.js, and
                  TypeScript, specializing in building responsive, user-friendly
                  web applications. Currently contributing to innovative
                  projects at Alazka.ai, including the development of their
                  website and customer support platform.
                </motion.p>
                <motion.p
                  className="text-xl text-gray-300 leading-relaxed"
                  variants={fadeInUpVariants}
                >
                  Passionate about creating accessible, modern solutions and
                  continuously growing within collaborative teams.
                </motion.p>

                {/* Contact Links */}
                <motion.div
                  variants={fadeInUpVariants}
                  className="flex flex-wrap justify-center gap-4 pt-8"
                >
                  {[
                    {
                      icon: Mail,
                      text: "Email",
                      href: "mailto:abdulrehman7619931243@gmail.com",
                    },
                    { icon: Github, text: "GitHub", href: "#github" },
                    { icon: Linkedin, text: "LinkedIn", href: "#linkedin" },
                    {
                      icon: Phone,
                      text: "+91 7619931243",
                      href: "tel:+917619931243",
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300"
                    >
                      <contact.icon size={18} />
                      <span className="text-sm font-medium">
                        {contact.text}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-4 text-left max-w-full mx-auto"
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Technologies
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold capitalize mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-400 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-4 text-left max-w-full mx-auto"
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Academic Background
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Education Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center"
                    >
                      <GraduationCap className="text-purple-400" size={24} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-purple-400 font-medium">
                      {edu.school}
                    </p>
                  </div>

                  <div className="space-y-2 text-gray-300">
                    {edu.location && (
                      <p className="flex items-center text-sm">
                        <Briefcase size={16} className="mr-2 text-purple-400" />
                        {edu.location}
                      </p>
                    )}
                    {edu.period && (
                      <p className="flex items-center text-sm">
                        <ArrowRight
                          size={16}
                          className="mr-2 text-purple-400"
                        />
                        {edu.period}
                      </p>
                    )}
                    <p className="text-sm font-medium text-purple-300">
                      {edu.score}
                    </p>
                  </div>

                  <p className="mt-4 text-gray-400 text-sm">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
