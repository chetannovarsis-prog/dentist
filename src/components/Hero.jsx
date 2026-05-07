import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { Magnetic } from './Magnetic'

export const Hero = () => {
  const containerRef = useRef(null)
  const spotlightRef = useRef(null)
  const { scrollY } = useScroll()
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return
      const { clientX, clientY } = e
      gsap.to(spotlightRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/hero-bg.png" 
          alt="Luxury Dental Clinic" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80" />
      </motion.div>

      {/* Mouse Spotlight Effect */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px] z-10"
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-accent/20 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-white text-sm font-medium ml-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 Rating (2.5k+ Reviews)</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-heading text-white max-w-5xl leading-[1.1] text-balance mb-8"
        >
          Because There’s a Better Way to <span className="italic text-accent">Experience</span> Dental Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Combining clinical excellence with a luxury spa-like environment. 
          Your journey to a perfect smile starts with unparalleled comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Magnetic>
            <button className="group bg-white text-primary px-10 py-5 rounded-full font-medium text-lg flex items-center gap-3 hover:bg-accent hover:text-white transition-all duration-500 hover:scale-105 shadow-2xl shadow-white/10">
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Magnetic>
          <button className="text-white font-medium text-lg hover:text-accent transition-colors flex items-center gap-2 group">
            Explore Services
            <div className="w-8 h-px bg-white/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-12 hidden lg:block"
      >
        <div className="glass p-6 rounded-2xl max-w-[200px]">
          <div className="text-accent font-heading text-4xl mb-1">99%</div>
          <div className="text-primary/60 text-sm leading-tight">Patient Satisfaction Rate</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-12 hidden lg:block"
      >
        <div className="glass p-6 rounded-2xl max-w-[200px]">
          <div className="text-accent font-heading text-4xl mb-1">15+</div>
          <div className="text-primary/60 text-sm leading-tight">Years of Clinical Excellence</div>
        </div>
      </motion.div>

      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-soft to-transparent z-10" />
    </section>
  )
}
