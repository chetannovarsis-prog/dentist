import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Smile Makeover Patient",
    text: "I used to be terrified of the dentist. Relaxation Dental completely changed my perspective. The atmosphere is so calming, and the results are life-changing.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=32"
  },
  {
    name: "Michael Chen",
    role: "Invisalign Patient",
    text: "The technology here is incredible. Everything is digital, fast, and professional. My Invisalign journey was seamless from start to finish.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Emma Williams",
    role: "Regular Checkup",
    text: "It feels more like a spa than a dental clinic. I actually look forward to my appointments now. Truly a premium experience in every sense.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=44"
  },
  {
    name: "David Smith",
    role: "Dental Implants",
    text: "The expertise of Dr. Reed is unmatched. He explained every step of my implant procedure, making me feel comfortable and confident.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=55"
  }
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4"
            >
              Testimonials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading"
            >
              Stories of <span className="italic text-accent">Transformation</span>
            </motion.h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-2xl font-heading">4.9/5</div>
              <div className="text-white/40 text-xs uppercase tracking-widest">Google Rating</div>
            </div>
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16 testimonial-swiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] h-full flex flex-col backdrop-blur-sm">
                <Quote className="w-10 h-10 text-accent mb-6 opacity-50" />
                <p className="text-lg leading-relaxed text-white/80 mb-8 italic">
                  "{t.text}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div>
                    <div className="font-heading text-lg">{t.name}</div>
                    <div className="text-accent text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
