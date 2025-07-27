import React from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, SparklesIcon, CheckCircleIcon, RocketLaunchIcon, CpuChipIcon, DevicePhoneMobileIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: "ApnaPG",
      description: "A comprehensive PG accommodation platform built with Laravel, featuring three distinct modules for seamless property management and booking experience.",
      longDescription: "ApnaPG revolutionizes the PG accommodation search and booking process by providing a unified platform for students, property owners, and administrators. The application features advanced filtering capabilities, real-time availability tracking, and secure booking management.",
      tech: [
        { name: "Laravel", icon: "🔴", color: "from-red-500 to-pink-500", bgColor: "bg-red-50", textColor: "text-red-700" },
        { name: "PHP", icon: "🐘", color: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
        { name: "MySQL", icon: "🐬", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "HTML5", icon: "🟧", color: "from-orange-500 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-700" },
        { name: "CSS3", icon: "🎨", color: "from-blue-500 to-indigo-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "JavaScript", icon: "🟨", color: "from-yellow-500 to-amber-500", bgColor: "bg-yellow-50", textColor: "text-yellow-700" }
      ],
      features: [
        "Admin module for comprehensive platform management",
        "User module for searching and booking accommodations",
        "PG Owner module for property listing and management",
        "Advanced search and filtering system",
        "Secure booking management system",
        "Real-time availability tracking"
      ],
      type: "Web Application",
      status: "Completed",
      icon: BuildingOfficeIcon,
      headerColor: "from-red-600 to-pink-600",
      accentColor: "red",
      category: "Full-Stack Web Development"
    },
    {
      title: "SkillSwap",
      description: "A skill exchange platform built with the MERN stack, connecting users to trade skills and knowledge through an intelligent matching system.",
      longDescription: "SkillSwap creates a community-driven ecosystem where individuals can exchange skills and knowledge. The platform uses sophisticated algorithms to match users based on complementary skill sets and availability, fostering meaningful professional connections.",
      tech: [
        { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Express.js", icon: "🚀", color: "from-slate-500 to-gray-600", bgColor: "bg-slate-50", textColor: "text-slate-700" },
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-lime-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Tailwind CSS", icon: "💨", color: "from-cyan-500 to-teal-500", bgColor: "bg-cyan-50", textColor: "text-cyan-700" },
        { name: "JWT", icon: "🔐", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-50", textColor: "text-emerald-700" }
      ],
      features: [
        "User registration and authentication system",
        "Profile management with skills offered/wanted",
        "Advanced search and browsing by skills",
        "Intelligent swap request management",
        "Comprehensive rating and feedback system",
        "Public/private profile settings",
        "Availability scheduling system",
        "Admin dashboard for user and content management"
      ],
      type: "Full-Stack Web App",
      status: "Completed",
      icon: RocketLaunchIcon,
      headerColor: "from-blue-600 to-indigo-600",
      accentColor: "blue",
      category: "MERN Stack Development"
    },
    {
      title: "Blood Test Booking Bot",
      description: "Intelligent automation solution featuring both Telegram and WhatsApp bots for streamlined blood test appointment booking with Google Sheets integration.",
      longDescription: "This innovative automation solution transforms healthcare appointment booking by providing multi-platform bot interfaces. Users can book appointments, receive confirmations, and get QR codes seamlessly across Telegram and WhatsApp platforms.",
      tech: [
        { name: "Express.js", icon: "🚀", color: "from-slate-500 to-gray-600", bgColor: "bg-slate-50", textColor: "text-slate-700" },
        { name: "Telegram Bot API", icon: "✈️", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "Venom.js", icon: "💬", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Google Sheets API", icon: "📊", color: "from-green-500 to-teal-500", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
        { name: "QR Generation", icon: "📱", color: "from-slate-500 to-zinc-500", bgColor: "bg-slate-50", textColor: "text-slate-700" }
      ],
      features: [
        "Telegram bot for seamless appointment booking",
        "WhatsApp bot with Venom.js integration",
        "Real-time Google Sheets database integration",
        "Automated QR code generation and sharing",
        "Instant booking confirmation system",
        "Multi-platform support with unified experience"
      ],
      type: "Bot Automation",
      status: "Completed",
      icon: CpuChipIcon,
      headerColor: "from-green-600 to-emerald-600",
      accentColor: "green",
      category: "Automation & Integration"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions combining modern web technologies, automation, and user-centric design
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Column - Project Info */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${project.headerColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                          {project.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 bg-${project.accentColor}-100 text-${project.accentColor}-700 rounded-full text-sm font-medium mt-1`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <p className="text-slate-500 mb-8 leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    {/* Technology Stack */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-slate-800 mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className={`group/tech flex items-center gap-2 px-4 py-2 ${tech.bgColor} rounded-xl hover:shadow-md transition-all duration-200 hover:scale-105 transform`}
                          >
                            <span className="text-lg group-hover/tech:scale-110 transition-transform duration-200">
                              {tech.icon}
                            </span>
                            <span className={`font-medium ${tech.textColor} text-sm`}>
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                 {/* Action Buttons */}
<div className="flex flex-wrap gap-4 mb-6">
  {project.title === "SkillSwap" ? (
    <a
      href="https://skillswapplat.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.headerColor} text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium hover:scale-105 transform`}
    >
      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      View Project
    </a>
  ) : (
    <button
      disabled
      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.headerColor} text-white rounded-xl opacity-60 cursor-not-allowed`}
      title="Project is currently hosted locally for internal testing"
    >
      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      View Project (Coming Soon)
    </button>
  )}


</div>


                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-xl">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      <span className="text-green-700 font-medium text-sm">{project.status}</span>
                    </div>
                  </div>
                  
                  {/* Right Column - Features */}
                  <div className="p-8 lg:p-10 bg-gradient-to-br from-slate-50 to-white">
                    <div className="sticky top-8">
                      <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <SparklesIcon className="h-5 w-5 text-blue-600" />
                        Key Features
                      </h4>
                      
                      <div className="space-y-4">
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex} 
                            className="group/feature flex items-start gap-3 p-4 rounded-xl bg-white hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-all duration-200 hover:shadow-sm"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.headerColor} rounded-full mt-2 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200`}></div>
                            <span className="text-slate-600 leading-relaxed group-hover/feature:text-slate-800 transition-colors duration-200">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Project Type Badge */}
                      <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">Project Type</span>
                          <span className={`px-3 py-1 bg-${project.accentColor}-100 text-${project.accentColor}-800 rounded-full text-sm font-medium`}>
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions that make a real impact.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-800 rounded-xl hover:bg-slate-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Discuss Your Project</span>
              <RocketLaunchIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Projects