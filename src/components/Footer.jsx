import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-stone-200/50 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-display font-black tracking-wide text-stone-950 mb-4">
              Dhrumil Gajjar
            </h3>
            <p className="text-stone-500 font-light leading-relaxed">
              Full Stack Developer passionate about crafting highly immersive digital experiences, 
              scalable architectures, and clever automation tools.
            </p>
          </div>
          
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-stone-950 mb-4">Quick Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-stone-600 hover:text-black transition-all duration-300 font-semibold text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-stone-600 hover:text-black transition-all duration-300 font-semibold text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-stone-600 hover:text-black transition-all duration-300 font-semibold text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-stone-600 hover:text-black transition-all duration-300 font-semibold text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-600 hover:text-black transition-all duration-300 font-semibold text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider text-stone-950 mb-4">Core Technologies</h4>
            <ul className="space-y-3 text-stone-500 font-light text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                <span>MERN Stack (React, Node, Mongo)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                <span>Laravel & PHP Ecosystem</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                <span>Advanced Bot Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                <span>Cross-platform Apps (Flutter)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-200/60 pt-8 mt-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-stone-400 text-sm font-light">
            © 2026 Dhrumil Gajjar. Crafted with passion and React.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/dh139" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-black hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 hover:scale-105 shadow-xs"
              title="GitHub"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/dhrumil-gajjar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-650 hover:text-black hover:bg-stone-50 hover:border-stone-300 transition-all duration-300 hover:scale-105 shadow-xs"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer