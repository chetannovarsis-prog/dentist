import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustSection } from './components/TrustSection'
import { Services } from './components/Services'
import { AboutDoctor } from './components/AboutDoctor'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Gallery } from './components/Gallery'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // GSAP Scroll Animations for sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      )
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <div id="content-reveal" className="overflow-x-hidden">
        <TrustSection />
        <Services />
        <AboutDoctor />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <Appointment />
      </div>
      <Footer />
    </main>
  )
}

export default App
