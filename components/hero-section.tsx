"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const backgroundImages = [
  "/hero-chicken-biriyani.jpg",
  "/hero-fish-curry.jpg",
  "/hero-mutton-meals.jpg",
  "/hero-prawn-fry.jpg",
]

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`South Indian cuisine ${index + 1}`}
              fill
              priority={index === 0}
              quality={85}
              className="object-cover object-center scale-110"
              style={{
                animation: index === currentImageIndex ? "slow-zoom 20s ease-in-out infinite alternate" : "none",
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-secondary/40" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
        <div className="flex items-center justify-center lg:justify-end min-h-[85vh]">
          <div
            className={`max-w-2xl text-center lg:text-right transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 tracking-tight leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="block animate-glow">Sri Velan Foods</span>
            </h1>

            <p
              className={`font-serif italic text-lg sm:text-xl md:text-2xl text-white mb-12 leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              Taste the warmth of motherly love in every bite. <br className="hidden sm:block" />
              <span className="text-white">Freshly prepared, traditionally cooked, lovingly delivered.</span>
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-end items-center transition-all duration-1000 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Link href="#menu">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-black px-10 py-7 text-lg font-semibold rounded-full transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/50 animate-pulse-slow"
                >
                  Our Foods
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white px-10 py-7 text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all hover:scale-110 hover:shadow-2xl hover:shadow-white/50 bg-black/50 backdrop-blur-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div
              className={`mt-16 flex justify-center lg:justify-end transition-all duration-1000 delay-1000 ${
                isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="w-32 h-1.5 bg-white rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-32 h-1.5 bg-white rounded-full animate-slide-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black z-10" />

      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        @keyframes slide-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
