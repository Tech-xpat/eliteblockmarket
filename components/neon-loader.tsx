"use client"

import { motion } from "framer-motion"

interface NeonLoaderProps {
  size?: "sm" | "md" | "lg"
  message?: string
}

export function NeonLoader({ size = "md", message }: NeonLoaderProps) {
  const sizeMap = {
    sm: { container: "w-12 h-12", dot: "w-2 h-2" },
    md: { container: "w-16 h-16", dot: "w-3 h-3" },
    lg: { container: "w-20 h-20", dot: "w-4 h-4" },
  }

  const dotVariants = {
    animate: (i: number) => ({
      y: [-8, 8, -8],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        delay: i * 0.15,
      },
    }),
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeMap[size].container} flex items-center justify-center gap-1.5`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={dotVariants}
            animate="animate"
            className={`${sizeMap[size].dot} rounded-full bg-primary`}
          />
        ))}
      </div>
      {message && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-primary font-semibold text-sm"
        >
          {message}
        </motion.p>
      )}
    </div>
  )
}

export function NeonLoadingBar() {
  return (
    <div className="w-full h-1 bg-card rounded-full overflow-hidden">
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </div>
  )
}

export function NeonSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full"
    />
  )
}
