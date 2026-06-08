"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Configuration
    const particleCount = 50
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      originalY: number
    }> = []

    // Lime green neon color
    const neonGreen = "rgba(176, 255, 0, "

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        originalY: 0,
      })
    }

    let scrollOffset = 0

    const handleScroll = () => {
      scrollOffset = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        // Parallax effect based on scroll
        const parallaxY = (scrollOffset * 0.3) % canvas.height
        p.y = (p.y + p.vy + parallaxY) % canvas.height
        if (p.y < 0) p.y += canvas.height

        p.x = (p.x + p.vx + canvas.width) % canvas.width
        if (p.x < 0) p.x += canvas.width

        // Draw particle
        ctx.fillStyle = neonGreen + "0.6)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach((p2, j) => {
          if (i < j) {
            const dx = p2.x - p.x
            const dy = p2.y - p.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = neonGreen + (0.2 * (1 - distance / 150)) + ")"
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  )
}
