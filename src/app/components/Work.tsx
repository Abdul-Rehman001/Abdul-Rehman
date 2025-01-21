"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Building, Code, Github, ArrowRight } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

const WorkPage = () => {
  const experience = [
    {
      company: "Alazka Solutions",
      role: "Front End Developer",
      period: "December 2024 - Present",
      description:
        "Developed the official website and customer support platform, focusing on improved user experience.",
      type: "work",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      company: "Alazka Solutions",
      role: "Frontend Developer Intern",
      period: "September 2024 – December 2024",
      description:
        "Developed the official website and customer support platform, focusing on improved user experience.",
      type: "work",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      company: "Proven Robotics",
      role: "React Developer Intern",
      period: "July 2024 – December 2024",
      description:
        "Worked on Bot Builder platform and enhanced product features with cross-functional teams.",
      type: "work",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Node.js", icon: <FaNodeJs /> },
      ],
    },
  ];

  const projects = [
    {
      title: "Alazka Solutions",
      description: "Official website for Alazka.ai showcasing company services",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      demo: "#",
      type: "project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Prompter",
      description: "AI Prompt Sharing platform with integrated chat system",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
      demo: "#",
      type: "project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "React Pizza",
      description: "Pizza ordering website with real-time location tracking",
      tech: ["React.js", "Tailwind CSS"],
      demo: "#",
      type: "project",
      image: "/api/placeholder/600/400",
    },
    {
      title: "React Flix",
      description: "Movie rating website using public Movie API",
      tech: ["React.js", "REST API"],
      demo: "#",
      type: "project",
      image: "/api/placeholder/600/400",
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
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-violet-950 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute h-full w-screen -translate-y[-50rem]  overflow-hidden">
        <Spline scene="https://prod.spline.design/XmKCO-EfQYhFk9XM/scene.splinecode" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={fadeInUpVariants} className="space-y-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Career Path
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Work Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-purple-500/20 rounded-xl"
                    >
                      <Building className="text-purple-400" size={24} />
                    </motion.div>
                    <span className="text-sm text-gray-400 font-medium px-4 py-2 bg-gray-800/50 rounded-full">
                      {job.period}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                    {job.company}
                  </h3>
                  <p className="text-lg text-purple-400 font-medium mb-4">
                    {job.role}
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-lg rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {skill.icon}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="absolute h-full w-screen -translate-y[-50rem] ">
          <Spline scene="https://prod.spline.design/XmKCO-EfQYhFk9XM/scene.splinecode" />
        </div>

        {/* Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
          id="projects"
        >
          <motion.div variants={fadeInUpVariants} className="space-y-4">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Latest Work
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Code className="text-purple-400" size={24} />
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                        <motion.a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                        >
                          <Github size={18} />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={project.demo}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkPage;
