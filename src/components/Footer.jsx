import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-white">Dhrumil Gajjar</h3>
            <p className="text-slate-400 font-light">
              Full Stack Developer passionate about creating innovative solutions 
              and automation tools that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-slate-400 hover:text-indigo-500 transition-colors duration-200">Home</a></li>
              <li><a href="/#about" className="text-slate-400 hover:text-indigo-500 transition-colors duration-200">About</a></li>
              <li><a href="/#projects" className="text-slate-400 hover:text-indigo-500 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Technologies</h4>
            <ul className="space-y-2 text-slate-400 font-light">
              <li>MERN Stack Development</li>
              <li>Laravel & PHP</li>
              <li>Bot Automation</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 mt-8 text-center flex flex-col items-center justify-between md:flex-row">
          <p className="text-slate-500 text-sm">
            © 2026 Dhrumil Gajjar. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"><i className="fa-brands fa-github"></i></span>
             <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"><i className="fa-brands fa-linkedin-in"></i></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer