import React from 'react';

const projects = [
  {
    title: "HOCCO UI Experience",
    description: "A visually stunning, modern animated UI/UX website showcasing smooth transitions, advanced animations, and premium frontend design aesthetics inspired by high-end product experiences.",
    tech: ["React.js", "Vite", "Framer Motion", "Tailwind CSS"],
    url: "https://hocco-theta.vercel.app/"
  },
  {
    title: "Nexus ERP Enterprise",
    description: "A production-grade ERP system for retail and e-commerce featuring modular architecture with HR & Payroll, Inventory, Accounting, and CRM modules. Built with secure JWT authentication and granular role-based access control (RBAC), supporting live dashboards.",
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
    url: "https://nexus-beta-lemon-95.vercel.app/"
  },
  {
    title: "DreamHome Platform",
    description: "A modern real estate web platform where users can explore, list, and manage luxury properties with secure authentication, spatial searches, and advanced criteria filtering.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    url: "https://dream-home-uxjv.vercel.app/"
  },
  {
    title: "DreamHome Mobile",
    description: "A cross-platform real estate mobile application built with Flutter, connected to an active Node.js backend for seamless property management on the move.",
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    title: "ApnaPG Accommodation",
    description: "A comprehensive PG accommodation platform built with Laravel, featuring modules for property management, booking, and user handling.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "SkillSwap Marketplace",
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
    <section id="projects" className="py-32 relative bg-transparent border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-stone-400 font-bold text-xs uppercase tracking-widest">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-stone-950 mb-6 font-serif italic">
            Digital Creations
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            A curated showcase of my latest projects, combining high-end interactive frontend design with robust, complex backend architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-panel-neon p-8 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-stone-950 mb-4 group-hover:text-black transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 bg-white border border-stone-200/80 rounded-lg text-[10px] font-semibold text-stone-600 tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                    {project.url ? (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-800 hover:text-black transition-colors group/link"
                      >
                        <span>Launch Live Experience</span>
                        <svg 
                          className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-stone-400">
                        Local Environment / Private
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;