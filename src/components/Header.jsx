import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects']
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // trigger when section occupies central screen space
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 pt-5 top-0">
      <motion.nav 
        animate={{
          y: isScrolled ? 0 : 0,
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`max-w-5xl mx-auto transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'rounded-[2rem]' : 'rounded-full'
        } ${
          isScrolled 
            ? 'bg-stone-950/95 border border-stone-800/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-lg' 
            : 'bg-stone-950/90 border border-stone-900/50 shadow-none backdrop-blur-md'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-2.5">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-base font-display font-black tracking-tight text-white hover:opacity-80 transition-opacity">
              Dhrumil Gajjar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-stone-900/60 p-0.5 rounded-full border border-stone-800/30 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2 rounded-full transition-colors duration-300 font-semibold text-[10px] tracking-wider uppercase z-10 ${
                      isActive ? 'text-stone-950' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 bg-white text-stone-950 rounded-full transition-all duration-300 font-bold text-[10px] tracking-wider uppercase hover:bg-stone-100 hover:scale-103 active:scale-95 flex items-center gap-2 overflow-hidden shadow-xs"
            >
              <span>Let's Talk</span>
              <svg 
                className="h-3 w-3 transform transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-stone-900/50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5 text-white" />
            ) : (
              <Bars3Icon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-stone-800/80 mt-0.5 bg-stone-950/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-3 rounded-2xl transition-all duration-200 font-bold tracking-wide uppercase text-[10px] ${
                        isActive 
                          ? 'bg-stone-900 text-white font-extrabold' 
                          : 'text-stone-400 hover:text-white hover:bg-stone-900/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                })}
                <div className="pt-3 border-t border-stone-900 mt-2">
                  <a
                    href="#contact"
                    className="block px-4 py-3 bg-white hover:bg-stone-100 text-stone-950 text-center rounded-2xl font-bold tracking-wider uppercase text-[10px] hover:shadow-xs"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

export default Header