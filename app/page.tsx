"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section1 from '@/components/Home/Section1'
import Section2 from '@/components/Home/Section2'
import MenSection from '@/components/Home/HomeCollection/MenSection'
import WomenSection from '@/components/Home/HomeCollection/WomenSection'
import KidSection from '@/components/Home/HomeCollection/KidsSection'
import BeautySection from '@/components/Home/HomeCollection/BeautySection'
import Footer from '@/components/Header&Footer/Footer'
gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return
      
      // Animate the section title
      gsap.from(section.querySelector('h2'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // Animate product cards with stagger
      gsap.from(section.querySelectorAll('.product-card'), {
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el
  }

  return (
    <>
      <Section1 />
      
      <div ref={el => addToRefs(el, 0)}>
        <MenSection />
      </div>
      
      <div ref={el => addToRefs(el, 1)}>
        <WomenSection />
      </div>
      
      <div ref={el => addToRefs(el, 2)}>
        <KidSection />
      </div>
      
      <div ref={el => addToRefs(el, 3)}>
        <BeautySection />
      </div>
  
      <Section2 />
    </>
  )
}

export default HomePage