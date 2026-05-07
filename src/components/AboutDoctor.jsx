import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap } from 'lucide-react'

export const AboutDoctor = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-[40px] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Julian Reed" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
            
            {/* Floating Info Cards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 top-1/4 glass p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading text-lg text-primary">Best Dentist 2024</div>
                  <div className="text-xs text-primary/40 uppercase tracking-widest">Medical Excellence</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute -left-8 bottom-1/4 glass p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-xl text-accent">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading text-lg text-primary">Harvard DMD</div>
                  <div className="text-xs text-primary/40 uppercase tracking-widest">Ivy League Graduate</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-6"
            >
              Meet Our Visionary
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading text-primary mb-8 leading-tight"
            >
              Dr. Julian Reed, <span className="italic">DMD, PhD</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-primary/70 text-lg leading-relaxed"
            >
              <p>
                With over 15 years of experience in restorative and cosmetic dentistry, Dr. Julian Reed has dedicated his career to one simple philosophy: dental care should be an experience, not a chore.
              </p>
              <p>
                After graduating with honors from Harvard Dental School, he pioneered the "Relaxation First" methodology, integrating spa-level comfort with cutting-edge dental technology.
              </p>
              <div className="pt-8 flex flex-col gap-6">
                <div className="flex items-center gap-4 text-primary font-medium italic font-heading text-4xl opacity-80">
                  Julian Reed
                </div>
                <div className="flex items-center gap-12 pt-4">
                  <div className="flex flex-col">
                    <span className="text-primary font-heading text-2xl">500+</span>
                    <span className="text-primary/40 text-xs uppercase tracking-widest">Smile Designs</span>
                  </div>
                  <div className="w-px h-12 bg-primary/10" />
                  <div className="flex flex-col">
                    <span className="text-primary font-heading text-2xl">15+</span>
                    <span className="text-primary/40 text-xs uppercase tracking-widest">Awards Won</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
