import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", title: "Smile Design" },
  { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", title: "Cosmetic Veneers" },
  { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800", title: "Full Reconstruction" },
  { url: "https://img.magnific.com/free-photo/cheerful-adorable-young-woman-showing-perfect-white-smile_176420-25413.jpg?ga=GA1.1.966530005.1777894812&semt=ais_hybrid&w=740&q=80", title: "Teeth Whitening" },
  { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", title: "Orthodontics" },
  { url: "https://img.magnific.com/premium-photo/happy-thumbs-up-portrait-dentist-patient-teeth-whitening-service-dental-care-healthcare-dentistry-hand-sign-orthodontist-woman-oral-hygiene-wellness-cleaning_590464-182892.jpg?ga=GA1.1.966530005.1777894812&semt=ais_hybrid&w=740&q=80", title: "Dental Wellness" }
]

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4"
          >
            Smile Gallery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading text-primary"
          >
            Real Results, <span className="italic text-accent">Real Smiles</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-[32px] cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="font-heading text-2xl mb-2">{img.title}</div>
                  <div className="text-sm uppercase tracking-widest text-accent">View Case</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
