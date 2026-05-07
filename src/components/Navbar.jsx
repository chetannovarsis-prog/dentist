import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '../lib/utils'
import { Magnetic } from './Magnetic'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
          isScrolled ? "glass px-8 py-3 shadow-lg" : "px-4"
        )}
      >
        <div className="flex items-center gap-1.5 md:gap-2 group cursor-pointer">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-heading text-lg md:text-xl transition-transform group-hover:rotate-12">
            R
          </div>
          <span className={cn(
            "font-heading text-lg md:text-xl tracking-tight transition-colors duration-300",
            isScrolled ? "text-primary" : "text-primary md:text-white"
          )}>
            Relaxation <span className="font-light italic text-accent hidden xs:inline">Dental</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-all hover:text-accent relative group",
                isScrolled ? "text-primary/70" : "text-primary/80 md:text-white/80"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
          <Magnetic>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              Book Appointment
            </button>
          </Magnetic>
        </div>

        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={cn(
          "md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 shadow-2xl transition-all duration-300",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-primary/80 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary text-white w-full py-4 rounded-2xl text-lg font-medium">
            Book Appointment
          </button>
        </div>
      </motion.div>
    </nav>
  )
}
