"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for images and content
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5F5F0]">
      <div className="flex flex-col items-center gap-6">
        {/* Animated food bowl icon */}
        <div className="relative">
          <div className="animate-bounce">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              {/* Bowl */}
              <path d="M20 50C20 50 25 80 60 80C95 80 100 50 100 50H20Z" fill="#000000" className="animate-pulse" />
              {/* Steam lines */}
              <path
                d="M40 35C40 35 42 25 45 20"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-[wiggle_1s_ease-in-out_infinite]"
                style={{ animationDelay: "0s" }}
              />
              <path
                d="M60 30C60 30 62 20 65 15"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-[wiggle_1s_ease-in-out_infinite]"
                style={{ animationDelay: "0.2s" }}
              />
              <path
                d="M80 35C80 35 82 25 85 20"
                stroke="#000000"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-[wiggle_1s_ease-in-out_infinite]"
                style={{ animationDelay: "0.4s" }}
              />
              {/* Food inside bowl */}
              <ellipse cx="60" cy="52" rx="25" ry="8" fill="#000000" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-serif text-3xl font-bold text-black">Sri Velan Foods</h2>
          <p className="font-serif text-lg italic text-black/70">Preparing your delicious experience...</p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-black" style={{ animationDelay: "0s" }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-black" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-3 w-3 animate-bounce rounded-full bg-black" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
