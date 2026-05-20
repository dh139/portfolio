import React from 'react'
import { CodeBracketIcon, RocketLaunchIcon, CpuChipIcon, DevicePhoneMobileIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const About = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Development",
      description: "Building robust, end-to-end web applications with modern frameworks and robust engineering practices.",
      bgColor: "bg-stone-100",
      iconColor: "text-stone-800",
      borderColor: "hover:border-stone-300"
    },
    {
      icon: RocketLaunchIcon,
      title: "Bot Orchestration",
      description: "Creating intelligent communication and automated flow pipelines utilizing WhatsApp and Telegram APIs.",
      bgColor: "bg-stone-100",
      iconColor: "text-stone-800",
      borderColor: "hover:border-stone-300"
    },
    {
      icon: CpuChipIcon,
      title: "API Architectures",
      description: "Seamlessly connecting distributed services, databases, and microservices for clean data sync.",
      bgColor: "bg-stone-100",
      iconColor: "text-stone-800",
      borderColor: "hover:border-stone-300"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Implementations",
      description: "Expanding capabilities into native mobile application structures with cross-platform frameworks.",
      bgColor: "bg-stone-100",
      iconColor: "text-stone-800",
      borderColor: "hover:border-stone-300"
    }
  ]

  const achievements = [
    "3+ Full-Stack Projects Completed",
    "MERN Stack & Laravel Expert",
    "Bot Automation Specialist",
    "Data Science Certified",
    "Continuous Learning Focus"
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-stone-400 font-bold text-xs uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-stone-950 mb-6 font-serif italic">
            Pragmatic Engineering
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-3xl mx-auto leading-relaxed font-light">
            Dedicated developer based in India. I write clean, optimized code for both backend business architectures and modern frontends, building bridges between business goals and technical execution.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          {/* Left Column - Journey */}
          <div className="flex">
            <div className="glass-panel-neon w-full h-full p-8 sm:p-10 rounded-3xl flex flex-col justify-between border border-stone-200 hover:border-stone-300 transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center shadow-xs">
                    <RocketLaunchIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 tracking-tight">My Journey</h3>
                </div>
                
                <div className="space-y-6 text-stone-600 leading-relaxed font-light text-base">
                  <p>
                    I'm a software developer specializing in <span className="font-semibold text-stone-950">MERN stack</span> application development, alongside high-performance enterprise scripting using <span className="font-semibold text-stone-950">Laravel & PHP</span>. I build systems designed to run reliably under heavy, real-world requests.
                  </p>
                  <p>
                    My experience reaches beyond conventional web engineering into the world of <span className="font-semibold text-stone-950">smart bot automation</span>. I develop custom WhatsApp and Telegram bots that automate lead tracking, system alerts, and notification flows for companies.
                  </p>
                  <p>
                    I focus heavily on writing code that is clean, decoupled, and easy to maintain. Currently expanding mobile application delivery with <span className="font-semibold text-stone-950">Flutter</span>.
                  </p>
                </div>
              </div>

              {/* Achievements List */}
              <div className="mt-10 pt-8 border-t border-stone-200/80">
                <h4 className="font-semibold tracking-wider text-[10px] uppercase text-stone-400 mb-6 font-mono">Key Credentials</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white border border-stone-200/80 px-4 py-3 rounded-xl hover:border-stone-300 transition-all duration-200">
                      <CheckCircleIcon className="h-5 w-5 text-stone-900 flex-shrink-0" />
                      <span className="text-stone-700 text-sm font-semibold">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Services */}
          <div className="flex">
            <div className="glass-panel-neon w-full h-full p-8 sm:p-10 rounded-3xl border border-stone-200 hover:border-stone-300 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-stone-900 rounded-2xl flex items-center justify-center shadow-xs">
                  <CpuChipIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 tracking-tight">Core Competence</h3>
              </div>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group p-5 rounded-2xl bg-white border border-stone-200/50 hover:bg-stone-50/50 transition-all duration-300 flex items-start gap-5 hover:border-stone-300"
                  >
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
                      <service.icon className={`h-5 w-5 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-950 mb-1 transition-colors duration-300 text-base">
                        {service.title}
                      </h4>
                      <p className="text-stone-500 text-sm leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative">
          <div className="bg-stone-900 relative p-8 sm:p-16 rounded-3xl text-center overflow-hidden border border-stone-950 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-serif italic font-light mb-4 text-white">
              Ready to construct something reliable?
            </h3>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Let's connect to review your platform architecture, build out complex database flows, or implement custom alert and automation bots.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full hover:bg-stone-100 transition-all duration-300 font-bold text-xs tracking-wider uppercase shadow-xs hover:scale-102 transform"
            >
              <span>Initiate Conversation</span>
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

export default About