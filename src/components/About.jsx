import React from 'react'
import { CodeBracketIcon, RocketLaunchIcon, CpuChipIcon, DevicePhoneMobileIcon, SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const About = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern frameworks and best practices",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: RocketLaunchIcon,
      title: "Bot Development",
      description: "Creating intelligent automation solutions for businesses using Telegram and WhatsApp APIs",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: CpuChipIcon,
      title: "API Integration",
      description: "Seamlessly connecting different services and platforms for comprehensive solutions",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Mobile Development",
      description: "Learning Flutter to expand into cross-platform mobile app development",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ]

  const achievements = [
    "3+ Full-Stack Projects Completed",
    "MERN Stack & Laravel Expertise",
    "Bot Automation Specialist",
    "Data Science Certified",
    "Currently Learning Flutter"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
            Crafting Digital Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies, 
            automation solutions, and a commitment to continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Column - Journey */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <RocketLaunchIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  I'm a dedicated full-stack developer specializing in the <span className="font-semibold text-blue-600">MERN stack</span> with 
                  extensive experience in <span className="font-semibold text-green-600">Laravel</span> and modern web technologies. 
                  My passion lies in creating efficient, scalable solutions that solve real-world problems.
                </p>
                <p>
                  Beyond traditional web development, I've ventured into <span className="font-semibold text-purple-600">bot automation</span>, 
                  creating sophisticated Telegram and WhatsApp bots for business automation. My expertise extends to integrating 
                  various APIs and third-party services to create comprehensive solutions.
                </p>
                <p>
                  Currently expanding my skill set with <span className="font-semibold text-orange-600">Flutter</span> for mobile 
                  development and continuously learning new technologies to stay at the forefront of software development.
                </p>
              </div>

              {/* Achievements List */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-4">Key Achievements</h4>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <CpuChipIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">What I Do</h3>
              </div>
              
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="group p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-200">
                          {service.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next project and bring your ideas to life with modern technology and innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Start a Conversation</span>
              <RocketLaunchIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About