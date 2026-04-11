import React, { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
   
  ]

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 pt-4 top-0">
      <nav className={`max-w-6xl mx-auto transition-all duration-300 rounded-full ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg border border-white/10 shadow-indigo-600/10' 
          : 'bg-transparent border border-transparent'
      }`}>
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
           
            <div className="text-xl font-display font-bold text-white tracking-wide">
              Dhrumil Gajjar
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all duration-300 font-semibold text-sm shadow-md"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 mt-2 rounded-b-2xl bg-slate-900/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  className="block px-4 py-3 bg-indigo-600 text-white text-center rounded-xl hover:bg-indigo-500 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header