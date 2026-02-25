import React from 'react'
import { SparklesIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries for building dynamic user interfaces",
      skills: [
        { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "JavaScript", icon: "🟨", color: "from-yellow-500 to-amber-500", bgColor: "bg-yellow-50", textColor: "text-yellow-700" },
        { name: "HTML5", icon: "🟧", color: "from-orange-500 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-700" },
        { name: "CSS3", icon: "🎨", color: "from-blue-500 to-indigo-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
        { name: "Tailwind CSS", icon: "💨", color: "from-cyan-500 to-teal-500", bgColor: "bg-cyan-50", textColor: "text-cyan-700" },
        { name: "Vite", icon: "⚡", color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50", textColor: "text-purple-700" }
      ],
      headerColor: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-200"
    },
    {
      title: "Backend & Server",
      description: "Robust server-side technologies for scalable web applications",
      skills: [
        { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Express.js", icon: "🚀", color: "from-slate-500 to-gray-600", bgColor: "bg-slate-50", textColor: "text-slate-700" },
        { name: "Laravel", icon: "🔴", color: "from-red-500 to-pink-500", bgColor: "bg-red-50", textColor: "text-red-700" },
        { name: "PHP", icon: "🐘", color: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
        { name: "JWT Auth", icon: "🔐", color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
        { name: "RESTful APIs", icon: "🌐", color: "from-blue-500 to-indigo-500", bgColor: "bg-blue-50", textColor: "text-blue-700" }
      ],
      headerColor: "from-green-600 to-emerald-600",
      borderColor: "border-green-200"
    },
    {
      title: "Database Systems",
      description: "Modern database solutions for efficient data management",
      skills: [
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-lime-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Mongoose", icon: "🦫", color: "from-amber-500 to-orange-500", bgColor: "bg-amber-50", textColor: "text-amber-700" },
        { name: "MySQL", icon: "🐬", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "Database Design", icon: "📊", color: "from-purple-500 to-indigo-500", bgColor: "bg-purple-50", textColor: "text-purple-700" }
      ],
      headerColor: "from-purple-600 to-indigo-600",
      borderColor: "border-purple-200"
    },
    {
      title: "Automation & Bots",
      description: "Intelligent automation solutions for business process optimization",
      skills: [
        { name: "Telegram Bot", icon: "✈️", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "WhatsApp Bot", icon: "💬", color: "from-green-500 to-emerald-500", bgColor: "bg-green-50", textColor: "text-green-700" },
        { name: "Google Sheets API", icon: "📊", color: "from-green-500 to-teal-500", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
        { name: "QR Generation", icon: "📱", color: "from-slate-500 to-zinc-500", bgColor: "bg-slate-50", textColor: "text-slate-700" }
      ],
      headerColor: "from-orange-600 to-red-600",
      borderColor: "border-orange-200"
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and emerging technologies for modern solutions",
      skills: [
        { name: "Git", icon: "🔗", color: "from-orange-500 to-red-500", bgColor: "bg-orange-50", textColor: "text-orange-700" },
        { name: "Flutter", icon: "📱", color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
        { name: "Data Science", icon: "📈", color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50", textColor: "text-purple-700" },
        { name: "API Integration", icon: "🔌", color: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
        { name: "Google APIs", icon: "🌈", color: "from-red-500 to-pink-500", bgColor: "bg-red-50", textColor: "text-red-700" }
      ],
      headerColor: "from-slate-600 to-gray-600",
      borderColor: "border-slate-200"
    }
  ]

  const mernStack = [
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-500", description: "NoSQL Database" },
    { name: "Express.js", icon: "🚀", color: "from-slate-500 to-gray-600", description: "Web Framework" },
    { name: "React.js", icon: "⚛️", color: "from-blue-500 to-cyan-500", description: "Frontend Library" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-lime-600", description: "Runtime Environment" }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-6 w-6 text-purple-600" />
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional digital solutions
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.headerColor} rounded-xl flex items-center justify-center`}>
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group/skill flex items-center gap-3 p-3 rounded-xl ${skill.bgColor} hover:shadow-md transition-all duration-200 hover:scale-105 transform`}
                  >
                    <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`font-medium ${skill.textColor} text-sm`}>
                        {skill.name}
                      </span>
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-70 group-hover/skill:opacity-100 transition-opacity duration-200`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
       

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Let's Build with These Technologies</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Ready to leverage these cutting-edge technologies for your next project? Let's create something extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-purple-600 rounded-xl hover:bg-purple-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Start Your Project</span>
              <RocketLaunchIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
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

export default Skills