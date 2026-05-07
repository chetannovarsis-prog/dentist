import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Heart, Zap, Smile, Activity } from 'lucide-react'

const services = [
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth with state-of-the-art precision.",
    icon: <Activity className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Invisalign",
    description: "Straighten your teeth discreetly with nearly invisible, comfortable aligners.",
    icon: <Zap className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Smile Design",
    description: "Custom digital planning to create the perfect smile that matches your unique facial features.",
    icon: <Smile className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile in just one visit.",
    icon: <Sparkles className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Root Canal",
    description: "Pain-free endodontic therapy to save your natural teeth and relieve discomfort.",
    icon: <Heart className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Cosmetic Dentistry",
    description: "A comprehensive range of aesthetic treatments to enhance the beauty of your smile.",
    icon: <Shield className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1593022356769-11f09a79a5cc?auto=format&fit=crop&q=80&w=600"
  }
]

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] overflow-hidden rounded-3xl bg-white shadow-xl shadow-primary/5 cursor-pointer"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <div className="mb-4 bg-accent w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
          {service.icon}
        </div>
        <h3 className="text-2xl font-heading mb-3">{service.title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {service.description}
        </p>
        <button className="flex items-center gap-2 text-accent font-medium group/btn">
          Learn More 
          <div className="w-6 h-px bg-accent group-hover/btn:w-10 transition-all duration-300" />
        </button>
      </div>
    </motion.div>
  )
}

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading text-primary leading-tight"
            >
              Tailored Solutions for Your <span className="italic">Perfect Smile</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary/60 max-w-sm"
          >
            We combine art and science to provide the highest level of dental care in a luxury environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
