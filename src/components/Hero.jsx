import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Leaf, Zap } from 'lucide-react'
import { Magnetic } from './Magnetic'

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      {/* Full Page Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg-new.png" 
          alt="Luxury Dental Clinic" 
          className="w-full h-full object-cover"
        />
        {/* Left Side White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full md:w-3/4 lg:w-2/3" />
        
        {/* Top White Gradient for Navbar area */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
        
        {/* Bottom White Effect - Transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-128px)]">
        
        {/* Left Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-blue-200" />
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">
              15+ Years of Clinical Excellence
            </span>
            <div className="h-px w-12 bg-blue-200" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-8xl font-heading text-[#0F172A] leading-[1.1] mb-8"
          >
            Because There’s <br />
            a Better Way to <br />
            <span className="italic text-blue-500">Experience</span> Dental Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-500 max-w-xl mb-12 leading-relaxed"
          >
            Combining clinical excellence with a luxury spa-like environment. 
            Your journey to a perfect smile starts with unparalleled comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-8 mb-16"
          >
            <Magnetic>
              <button className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-blue-600 transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </button>
            </Magnetic>
            <button className="text-[#0F172A] font-bold text-lg flex items-center gap-3 group border-b-2 border-transparent hover:border-blue-200 transition-all pb-1">
              Explore Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Features - positioned below buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {[
              { icon: Zap, title: 'Advanced Technology', desc: 'State-of-the-art dental solutions' },
              { icon: Shield, title: 'Expert Care', desc: 'Experienced specialists you can trust' },
              { icon: Leaf, title: 'Comfort First', desc: 'Relaxing environment designed for you' }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-100">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-tight">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating elements on top of background */}
        <div className="relative h-full hidden lg:block">
          {/* Satisfaction Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-0 bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 max-w-[240px] z-20"
          >
            <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-4xl font-heading text-blue-500 mb-2">99%</div>
            <p className="text-sm text-gray-500 font-medium leading-snug">
              Patient Satisfaction Rate
            </p>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[99%] bg-blue-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
