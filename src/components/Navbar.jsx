import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Star } from 'lucide-react'
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
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "py-6"
      )}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0">
          <div className="w-10 h-10 bg-[#0F172A] rounded-full flex items-center justify-center text-white font-heading text-xl transition-transform group-hover:scale-110">
            R
          </div>
          <span className="font-heading text-2xl text-[#0F172A] tracking-tight">
            Relaxation
          </span>
        </div>

        {/* Centered Content: Ratings (Top) and Nav (Bottom) */}
        <div className="hidden xl:flex flex-col items-center gap-4">
          {/* Top Row: Ratings */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-[13px] font-semibold text-[#0F172A]">
                4.9/5 Rating <span className="font-normal text-gray-400">(2.5k+ Reviews)</span>
              </span>
            </div>
          </div>

          {/* Bottom Row: Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-semibold text-[#0F172A] flex items-center gap-1 hover:text-blue-500 transition-colors group"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </a>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="hidden md:block flex-shrink-0">
          <Magnetic>
            <button className="bg-[#0F172A] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#1E293B] transition-all hover:scale-105 shadow-lg shadow-black/5">
              Book Appointment
            </button>
          </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 text-[#0F172A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#0F172A] flex items-center justify-between"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5" />}
                </a>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <button className="bg-[#0F172A] text-white w-full py-4 rounded-2xl text-lg font-semibold">
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
