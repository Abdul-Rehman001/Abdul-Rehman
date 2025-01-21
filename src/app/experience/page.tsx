"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  ExternalLink,
  Building,
  Github,
} from "lucide-react";
import Image from "next/image";

const ExperiencePage = () => {
  const experience = [
    {
      company: "Alazka.ai",
      role: "Front End Developer",
      period: "September 2024 - Present",
      description: [
        "Developed the official website for Alazka.ai, showcasing the company's services and offerings.",
        "Built a customer support platform tailored to handle client interactions and support queries.",
        "Contributed to ongoing projects aimed at improving customer experience and expanding platform functionality.",
      ],
      skills: ["Next.js", "TypeScript", "Tailwind", "React"],
      type: "Full-time",
    },
    {
      company: "Proven Robotics",
      role: "React Developer Intern",
      period: "July 2024 – December 2024",
      description: [
        "Worked on the Bot Builder platform, contributing to the development of an interactive bot-building interface for clients.",
        "Collaborated with cross-functional teams to enhance product features and user experience.",
      ],
      skills: ["React.js", "JavaScript", "UI/UX", "Team Collaboration"],
      type: "Internship",
    },
  ];

  const projects = [
    {
      title: "Alazka Solutions",
      description:
        "Official website for Alazka.ai showcasing the company's services and offerings",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      demo: "#",
      github: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Prompter",
      description: "AI Prompt Sharing platform with integrated AI chat system",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
      demo: "#",
      github: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "React Pizza",
      description: "Pizza ordering website with real-time location tracking",
      tech: ["React.js", "Tailwind CSS"],
      demo: "#",
      github: "#",
      image: "/api/placeholder/600/400",
    },
    {
      title: "React Flix",
      description: "Movie rating website using public Movie API",
      tech: ["React.js", "REST API"],
      demo: "#",
      github: "#",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-4 text-center max-w-3xl mx-auto"
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Career Path
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Professional Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8 lg:p-10 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center"
                      >
                        <Building className="text-purple-400" size={28} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                          {job.company}
                        </h3>
                        <p className="text-lg text-purple-400 font-medium">
                          {job.role}
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          {job.period}
                        </div>
                        <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="lg:col-span-3 space-y-6">
                      <ul className="space-y-3">
                        {job.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight
                              className="mt-1 mr-2 text-purple-400 flex-shrink-0"
                              size={16}
                            />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {job.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="space-y-4 text-center max-w-3xl mx-auto"
          >
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
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

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 pt-4">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-all duration-300"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ExperiencePage;
