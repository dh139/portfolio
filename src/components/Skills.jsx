import React from 'react'
import { SparklesIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries for building dynamic user interfaces",
      skills: [
        { name: "React.js", icon: "⚛️", bgColor: "bg-indigo-500/10", textColor: "text-indigo-400" },
        { name: "JavaScript", icon: "🟨", bgColor: "bg-amber-500/10", textColor: "text-amber-400" },
        { name: "HTML5", icon: "🟧", bgColor: "bg-orange-500/10", textColor: "text-orange-400" },
        { name: "CSS3", icon: "🎨", bgColor: "bg-blue-500/10", textColor: "text-blue-400" },
        { name: "Tailwind CSS", icon: "💨", bgColor: "bg-cyan-500/10", textColor: "text-cyan-400" },
        { name: "Vite", icon: "⚡", bgColor: "bg-purple-500/10", textColor: "text-purple-400" }
      ],
      headerColor: "from-blue-500 to-indigo-500"
    },
    {
      title: "Backend & Server",
      description: "Robust server-side technologies for scalable web applications",
      skills: [
        { name: "Node.js", icon: "🟢", bgColor: "bg-emerald-500/10", textColor: "text-emerald-400" },
        { name: "Express.js", icon: "🚀", bgColor: "bg-slate-500/10", textColor: "text-slate-400" },
        { name: "Laravel", icon: "🔴", bgColor: "bg-red-500/10", textColor: "text-red-400" },
        { name: "PHP", icon: "🐘", bgColor: "bg-indigo-500/10", textColor: "text-indigo-400" },
        { name: "JWT Auth", icon: "🔐", bgColor: "bg-teal-500/10", textColor: "text-teal-400" },
        { name: "RESTful APIs", icon: "🌐", bgColor: "bg-blue-500/10", textColor: "text-blue-400" }
      ],
      headerColor: "from-emerald-500 to-teal-500"
    },
    {
      title: "Database Systems",
      description: "Modern database solutions for efficient data management",
      skills: [
        { name: "MongoDB", icon: "🍃", bgColor: "bg-green-500/10", textColor: "text-green-400" },
        { name: "Mongoose", icon: "🦫", bgColor: "bg-amber-500/10", textColor: "text-amber-400" },
        { name: "MySQL", icon: "🐬", bgColor: "bg-blue-500/10", textColor: "text-blue-400" },
        { name: "Database Design", icon: "📊", bgColor: "bg-purple-500/10", textColor: "text-purple-400" }
      ],
      headerColor: "from-purple-500 to-indigo-500"
    },
    {
      title: "Automation & Bots",
      description: "Intelligent automation solutions for business process optimization",
      skills: [
        { name: "Telegram Bot", icon: "✈️", bgColor: "bg-cyan-500/10", textColor: "text-cyan-400" },
        { name: "WhatsApp Bot", icon: "💬", bgColor: "bg-emerald-500/10", textColor: "text-emerald-400" },
        { name: "Google Sheets API", icon: "📊", bgColor: "bg-teal-500/10", textColor: "text-teal-400" },
        { name: "QR Generation", icon: "📱", bgColor: "bg-slate-500/10", textColor: "text-slate-400" }
      ],
      headerColor: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and emerging technologies for modern solutions",
      skills: [
        { name: "Git", icon: "🔗", bgColor: "bg-orange-500/10", textColor: "text-orange-400" },
        { name: "Flutter", icon: "📱", bgColor: "bg-cyan-500/10", textColor: "text-cyan-400" },
        { name: "Data Science", icon: "📈", bgColor: "bg-pink-500/10", textColor: "text-pink-400" },
        { name: "API Integration", icon: "🔌", bgColor: "bg-indigo-500/10", textColor: "text-indigo-400" }
      ],
      headerColor: "from-slate-500 to-gray-500"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-6 w-6 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks for building exceptional digital solutions
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.headerColor} rounded-xl flex items-center justify-center`}>
                  <CodeBracketIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-200">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group/skill flex items-center gap-3 p-3 rounded-2xl ${skill.bgColor} border border-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-105 transform`}
                  >
                    <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`font-medium ${skill.textColor} text-sm`}>
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-10 rounded-3xl text-white shadow-2xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Let's Build with These Technologies</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto text-lg">
              Ready to leverage these cutting-edge technologies for your next project? Let's create something extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-slate-200 transition-all duration-200 font-bold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Start Your Project</span>
              <RocketLaunchIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills