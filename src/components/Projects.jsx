import React from 'react';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon, RocketLaunchIcon, CpuChipIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "HOCCO UI Experience",
    description: "A visually stunning, modern animated UI/UX website showcasing smooth transitions, advanced animations, and premium frontend design aesthetics inspired by high-end product experiences.",
    tech: ["React.js", "Vite", "Framer Motion", "Tailwind CSS"],
    url: "https://hocco-theta.vercel.app/"
  },
  {
    title: "Nexus ERP (Full-Stack MERN System)",
    description: "A production-grade ERP system for retail and e-commerce businesses featuring modular architecture with HR & Payroll, Inventory, Accounting, and CRM modules. Built with secure JWT authentication and role-based access control (RBAC), supporting real-world business workflows and analytics dashboards.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "RBAC",
      "Cloudinary",
      "Docker"
    ],
    highlights: [
      "Multi-module ERP (HR, Inventory, Accounting, CRM)",
      "Role-based access control with granular permissions",
      "Real-time inventory tracking & stock management",
      "Automated payroll processing & payslip generation",
      "Double-entry accounting system",
      "Sales pipeline & CRM lifecycle tracking",
      "Analytics dashboard with reports"
    ],
    url: "https://nexus-beta-lemon-95.vercel.app/"
  },
  {
    title: "DreamHome (Web)",
    description: "A modern real estate web platform where users can explore, list, and manage properties with secure authentication and advanced filtering.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    url: "https://dream-home-uxjv.vercel.app/"
  },
  {
    title: "DreamHome (Mobile App)",
    description: "A cross-platform real estate mobile application built with Flutter, connected to a Node.js backend for seamless property management.",
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    title: "ApnaPG",
    description: "A comprehensive PG accommodation platform built with Laravel, featuring modules for property management, booking, and user handling.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "SkillSwap",
    description: "A MERN stack skill exchange platform that connects users to trade skills through an intelligent matching system.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    url: "https://skillswapplat.netlify.app/"
  },
  {
    title: "Blood Test Booking Bot",
    description: "Automation solution with Telegram and WhatsApp bots for booking blood test appointments with smart slot handling and Google Sheets integration.",
    tech: ["Node.js", "Express.js", "Telegram API", "Venom.js", "Google Sheets API"]
  },
  {
    title: "GS Community App",
    description: "A full-featured MERN community platform with profile management, connections, and structured family tree visualization.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    url: "https://gs-comminity.vercel.app/"
  },
  {
    title: "Expense Management App",
    description: "A MERN-based expense tracking system for individuals and organizations with analytics and financial insights.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    url: "https://expense01.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A curated showcase of my latest projects, combining functional design with pristine backend architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                    >
                      Evaluate Project <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-slate-500 font-semibold cursor-not-allowed">
                      Local Testing / Private
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;