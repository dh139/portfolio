import React from 'react'
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image/Avatar */}
          {/* <div className="mb-8 animate-fade-in-up">
            <div className="relative w-36 h-36 mx-auto mb-6">
              <div className="w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                DG
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              <SparklesIcon className="absolute -top-4 -left-4 w-6 h-6 text-yellow-500 animate-bounce" />
            </div>
          </div> */}
          
          {/* Main Heading */}
          <div className="p-10 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Dhrumil Gajjar
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Full Stack Developer & Bot Automation 
            </p>
            <p className="text-lg text-slate-500 mt-2 max-w-3xl mx-auto">
              Crafting innovative web solutions and intelligent automation systems
            </p>
          </div>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              MERN Stack
            </span>
            <span className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              Laravel
            </span>
            <span className="px-5 py-2.5 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              Bot Development
            </span>
            <span className="px-5 py-2.5 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              Automation
            </span>
            <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
              Flutter Learning
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 rounded-xl hover:border-blue-500 hover:text-blue-600 hover:bg-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-2xl font-bold text-blue-600 mb-1">3+</div>
              <div className="text-sm text-slate-600 font-medium">Projects</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-2xl font-bold text-green-600 mb-1">5+</div>
              <div className="text-sm text-slate-600 font-medium">Technologies</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-2xl font-bold text-purple-600 mb-1">2+</div>
              <div className="text-sm text-slate-600 font-medium">Bot Systems</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="text-2xl font-bold text-orange-600 mb-1">1</div>
              <div className="text-sm text-slate-600 font-medium">Certification</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Scroll to explore</span>
            <ChevronDownIcon className="h-6 w-6 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero