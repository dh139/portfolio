import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dhrumil Gajjar</h3>
            <p className="text-slate-300">
              Full Stack Developer passionate about creating innovative solutions 
              and automation tools that make a difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-slate-300">
              <li>MERN Stack Development</li>
              <li>Laravel & PHP</li>
              <li>Bot Automation</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-8 text-center">
          <p className="text-slate-300">
            © 2025 Dhrumil Gajjar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer