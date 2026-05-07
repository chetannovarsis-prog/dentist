import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'

export const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consultation',
    date: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 bg-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-medium uppercase tracking-[0.3em] text-sm mb-6"
            >
              Book Your Visit
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading text-primary mb-8 leading-tight"
            >
              Start Your Journey <br />
              <span className="italic text-accent">Today.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primary/60 text-lg max-w-md mb-12"
            >
              Experience dental care the way it should be. Fill out the form and our concierge team will contact you shortly.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Phone />, label: "Call Us", val: "+1 (555) 000-0000" },
                { icon: <Mail />, label: "Email", val: "concierge@relaxationdental.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-accent shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-primary/40 text-xs uppercase tracking-widest">{item.label}</div>
                    <div className="text-primary font-medium text-lg">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-[48px] blur-3xl -z-10" />
              <div className="glass p-8 md:p-12 rounded-[40px] shadow-2xl">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-primary/60 ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/20" />
                            <input 
                              type="text" 
                              required
                              className="w-full bg-white/50 border border-primary/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
                              placeholder="John Doe"
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-primary/60 ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/20" />
                            <input 
                              type="tel" 
                              required
                              className="w-full bg-white/50 border border-primary/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
                              placeholder="+1 (555) 000-0000"
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary/60 ml-1">Service Interested In</label>
                        <select 
                          className="w-full bg-white/50 border border-primary/5 rounded-2xl py-4 px-4 focus:outline-none focus:border-accent transition-colors appearance-none"
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option>Invisalign</option>
                          <option>Smile Design</option>
                          <option>Dental Implants</option>
                          <option>Teeth Whitening</option>
                          <option>General Checkup</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary/60 ml-1">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/20" />
                          <input 
                            type="date" 
                            required
                            className="w-full bg-white/50 border border-primary/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-primary text-white py-5 rounded-2xl font-medium text-lg hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/20"
                      >
                        Schedule Appointment
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-heading text-primary mb-4">Request Received!</h3>
                      <p className="text-primary/60 text-lg">
                        Thank you, {formData.name}. Our team will contact you within 24 hours to confirm your appointment.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-accent font-medium hover:underline"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
