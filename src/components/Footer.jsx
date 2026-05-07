import React from 'react'
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-heading text-xl">
                R
              </div>
              <span className="font-heading text-2xl tracking-tight">
                Relaxation <span className="font-light italic text-accent">Dental</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Redefining the dental experience with luxury, comfort, and clinical excellence. Your smile is our masterpiece.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Smile Gallery', 'Testimonials', 'Book Appointment'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Invisalign', 'Smile Design', 'Dental Implants', 'Teeth Whitening', 'Cosmetic Dentistry'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <span className="text-white/60">123 Luxury Lane, Suite 100, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <span className="text-white/60">+1 (555) 000-0000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <span className="text-white/60">concierge@relaxationdental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white/40 text-sm">
            © 2024 Relaxation Dental. All rights reserved.
          </div>
          <div className="flex gap-8 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
