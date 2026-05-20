import React from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      description: "Modern frontend frameworks and libraries for building dynamic, gorgeous interfaces",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML5", icon: "🟧" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Vite", icon: "⚡" }
      ]
    },
    {
      title: "Backend & Server",
      description: "Robust server-side technologies for secure, high-performance web applications",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Laravel", icon: "🔴" },
        { name: "PHP", icon: "🐘" },
        { name: "JWT Auth", icon: "🔐" },
        { name: "RESTful APIs", icon: "🌐" }
      ]
    },
    {
      title: "Database Systems",
      description: "Modern structured and unstructured database solutions for efficient data management",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "Mongoose", icon: "🦫" },
        { name: "MySQL", icon: "🐬" },
        { name: "Database Design", icon: "📊" }
      ]
    },
    {
      title: "Automation & Bots",
      description: "Intelligent automation scripts and conversational interfaces for workflow optimization",
      skills: [
        { name: "Telegram Bot", icon: "✈️" },
        { name: "WhatsApp Bot", icon: "💬" },
        { name: "Google Sheets API", icon: "📊" },
        { name: "QR Generation", icon: "📱" }
      ]
    },
    {
      title: "Tools & Ecosystem",
      description: "Development workflows, version controls, and secondary research platforms",
      skills: [
        { name: "Git & GitHub", icon: "🔗" },
        { name: "Flutter", icon: "📱" },
        { name: "Data Science", icon: "📈" },
        { name: "API Integration", icon: "🔌" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-stone-400 font-bold text-xs uppercase tracking-widest">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-stone-950 mb-6 font-serif italic">
            Technical Expertise
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit of modern frameworks and languages designed for constructing high-end digital solutions.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-panel-neon p-8 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center shadow-xs flex-shrink-0">
                    <CodeBracketIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-stone-950">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-stone-500 text-sm mb-8 leading-relaxed font-light">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-stone-200/80 hover:bg-stone-50 hover:border-stone-300 transition-all duration-205"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-bold text-stone-700 text-xs tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-stone-900 relative p-8 sm:p-16 rounded-3xl text-center overflow-hidden border border-stone-950 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-serif italic font-light mb-4 text-white">
              Let's build with these technologies
            </h3>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Ready to leverage these cutting-edge technologies for your next web application, mobile app, or automation bot? Let's build something beautiful.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full hover:bg-stone-100 transition-all duration-300 font-bold text-xs tracking-wider uppercase shadow-xs hover:scale-102 transform"
            >
              <span>Start Your Project</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills