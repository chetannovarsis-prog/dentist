import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value)
      if (start === end) return

      const totalMiliseconds = duration
      const incrementTime = (totalMiliseconds / end)
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100)
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 30)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export const TrustSection = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Happy Patients', value: 12000, suffix: '+' },
    { label: 'Years Experience', value: 15, suffix: '' },
    { label: 'Smile Makeovers', value: 3500, suffix: '+' },
    { label: 'Certifications', value: 24, suffix: '' },
  ]

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H_and_M-Logo.svg/1024px-H_and_M-Logo.svg.png'
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-heading text-primary mb-2 flex justify-center items-baseline">
                <AnimatedNumber value={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-primary/60 text-sm uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-20 border-t border-primary/5">
          <div className="flex flex-col items-center">
            <p className="text-primary/40 text-sm font-medium uppercase tracking-[0.3em] mb-12">
              Insurance Partners & Affiliations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {logos.map((logo, i) => (
                <img 
                  key={i} 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-8 md:h-10 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
