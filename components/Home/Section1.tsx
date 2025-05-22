"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import logo from '@/assets/Home.jpg'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Section1 = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Master timeline for coordinated animations
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" }
    })

    // Overlay fade out first
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    })

    // Image animation with parallax effect
    tl.from(imageRef.current, {
      y: 150,
      scale: 1.1,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    }, "-=1.2")

    // Text animation with staggered elements
    if (textRef.current) {
      tl.from(textRef.current.querySelectorAll('*'), {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.2)"
      }, "-=1.5")
    }

    // Button animation with subtle pulse
    tl.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8")
    .to(buttonRef.current, {
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut"
    }, "+=1")

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      animation: gsap.to(imageRef.current, {
        y: 100,
        ease: "none"
      })
    })
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Initial loading overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20"
      />

      {/* Background Image with parallax wrapper */}
      <div className="absolute inset-0 overflow-hidden bgi">
        <div 
          ref={imageRef}
          className="absolute inset-0 w-full h-full "
        >
            <div className='bgi' ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </div>

      {/* Text Content */}
      <div 
        ref={textRef}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full h-screen flex flex-col items-center justify-center bg-[#0000006f] p-2 rounded-3xl"
      >
        <h1 className="text-5xl md:text-8xl font-serif font-light text-white mb-6 tracking-tight">
          M&S <span className="text-[#c79e60]">ELitaire</span>
        </h1>
        <p className="text-xl md:text-3xl text-[#c79e60] font-light tracking-widest mb-8">
          Crafting Timeless Elegance Since 1985
        </p>
        <p className="text-lg md:text-xl text-white font-thin mb-12 max-w-2xl mx-auto leading-relaxed">
          Where every piece tells a story of unparalleled craftsmanship and refined taste
        </p>
        <button 
          ref={buttonRef}
          className="mt-4 px-10 py-4 border-2 border-[#c79e60] text-[#c79e60] hover:bg-[#c79e60]/10 transition-all duration-500 group"
        >
          <span className="block group-hover:translate-x-2 transition-transform duration-300">
            Explore Our Collections →
          </span>
        </button>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-[#c79e60] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#c79e60] rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}

export default Section1