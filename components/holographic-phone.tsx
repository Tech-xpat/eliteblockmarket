"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HolographicPhone() {
  const containerRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const rotateX = (y - 0.5) * 20
      const rotateY = (x - 0.5) * 20

      if (phoneRef.current) {
        phoneRef.current.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `
      }
    }

    const handleMouseLeave = () => {
      if (phoneRef.current) {
        phoneRef.current.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        ref={phoneRef}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Phone body with holographic effect */}
        <div className="relative w-64 h-96 mx-auto">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 opacity-30 blur-2xl" />

          {/* Phone frame */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-lime-400/50 overflow-hidden shadow-2xl">
            {/* Screen */}
            <div className="absolute inset-3 rounded-2xl bg-gradient-to-b from-slate-800 to-black overflow-hidden">
              {/* Screen content - trading interface */}
              <div className="h-full flex flex-col justify-between p-4">
                {/* Status bar */}
                <div className="flex justify-between text-xs text-lime-400 font-mono">
                  <span>$9,472.98 ETH</span>
                  <span>●●●●●</span>
                </div>

                {/* Price ticker */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-sm font-bold text-lime-400 text-center"
                >
                  +12.5%
                </motion.div>

                {/* Chart area with animated lines */}
                <svg className="w-full h-20" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <polyline
                    points="0,60 25,50 50,45 75,30 100,35 125,25 150,20 175,30 200,15"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B0FF00" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#B0FF00" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Bottom buttons */}
                <div className="flex gap-2">
                  <motion.div
                    className="flex-1 h-10 rounded-lg bg-lime-400/20 border border-lime-400/50"
                    whileHover={{ backgroundColor: "rgba(176, 255, 0, 0.3)" }}
                  />
                  <motion.div
                    className="flex-1 h-10 rounded-lg bg-lime-400/20 border border-lime-400/50"
                    whileHover={{ backgroundColor: "rgba(176, 255, 0, 0.3)" }}
                  />
                </div>
              </div>

              {/* Screen scanline effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-b from-transparent via-lime-400/10 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl border border-lime-400/30" />
          </div>

          {/* Floating particles around phone */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-lime-400"
              animate={{
                x: Math.cos((i / 8) * Math.PI * 2) * 120,
                y: Math.sin((i / 8) * Math.PI * 2) * 120,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
