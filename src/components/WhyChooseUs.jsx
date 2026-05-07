import React from 'react'
import { motion } from 'framer-motion'
import { Wind, Coffee, Clock, Heart, Users, Sparkles } from 'lucide-react'

const features = [
  {
    title: "Pain-Free Treatments",
    description: "Our advanced sedation techniques and gentle approach ensure you never feel a thing.",
    icon: <Wind className="w-10 h-10 text-accent" />,
    className: "md:col-span-2 md:row-span-2 bg-primary text-white",
  },
  {
    title: "Modern Tech",
    description: "Digital scanning and 3D printing for precise results.",
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    className: "bg-white",
  },
  {
    title: "Comfort Lounge",
    description: "Enjoy gourmet coffee and relaxing aromatherapy.",
    icon: <Coffee className="w-8 h-8 text-accent" />,
    className: "bg-beige/30",
  },
  {
    title: "Emergency Care",
    description: "Priority scheduling for urgent dental needs.",
    icon: <Clock className="w-8 h-8 text-accent" />,
    className: "bg-white",
  },
  {
    title: "Friendly Team",
    description: "Highly trained professionals who care for you.",
    icon: <Users className="w-8 h-8 text-accent" />,
    className: "md:col-span-2 bg-accent/5",
  }
]

export const WhyChooseUs = () => {
  return (
    <section className="py-32 my-10 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4"
          >
            The Relaxation Difference
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading text-primary"
          >
            Why Choose Our <span className="italic">Luxury Care</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-10 rounded-[32px] flex flex-col justify-between border border-primary/5 shadow-sm transition-all duration-500 group ${feature.className}`}
            >
              <div>
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-heading mb-4 ${feature.className.includes('primary') ? 'text-white' : 'text-primary'}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`text-base leading-relaxed ${feature.className.includes('primary') ? 'text-white/60' : 'text-primary/60'}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
