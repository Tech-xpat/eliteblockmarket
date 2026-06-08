"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev
        return prev + 5
      })
    }, 350)

    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    }, 7000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="relative mb-8">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-muted border-t-primary rounded-full animate-spin"></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/50 rounded-full animate-pulse"></div>
        </div>

        {/* Logo text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">EBM</span>
        </div>
      </div>

      {/* Loading text with progress */}
      <div className="text-center">
        <div className="text-foreground text-lg font-semibold mb-4">Loading EliteBlockMarket...</div>
        <div className="w-64 h-2 bg-card rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-muted text-sm mt-2">{progress}%</div>
      </div>
    </div>
  )
}
