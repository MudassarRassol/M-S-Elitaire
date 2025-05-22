"use client"
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import kidsImage from '@/assets/Flux_Dev_A_young_boy_with_a_bright_smile_and_dark_skin_is_cent_0.jpg' // Replace with your image

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation (slides in from left)
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 170%",
          toggleActions: "play none none none"
        }
      })

      // Content animation (slides in from right)
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      })

      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Kids Image */}
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={kidsImage}
              alt="M&S ELitaire Kids Collection"
              width={600}
              height={800}
              className="object-cover w-full h-auto rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* About Us Content */}
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 px-0 md:px-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#c79e60] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since 1985, M&S ELitaire has been crafting exceptional children's fashion that combines timeless elegance with modern comfort. Our journey began with a simple vision: to create clothing that allows children to shine with sophistication while enjoying complete freedom of movement.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Each piece in our collection is thoughtfully designed using only the finest materials, ensuring both durability and unparalleled softness against delicate skin. We take pride in our attention to detail, from the carefully selected fabrics to the exquisite hand-stitched accents.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-[#c79e60] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">100% organic cotton and sustainable materials</p>
              </div>
              <div className="flex items-start">
                <div className="text-[#c79e60] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Handcrafted with attention to every detail</p>
              </div>
              <div className="flex items-start">
                <div className="text-[#c79e60] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Ethically produced in our family-owned ateliers</p>
              </div>
            </div>
            <button className="mt-10 px-8 py-3 border-2 border-[#c79e60] text-[#c79e60] hover:bg-[#c79e60] hover:text-white transition-all duration-300">
              Discover Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2