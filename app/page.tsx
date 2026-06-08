"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { HolographicPhone } from "@/components/holographic-phone"

interface CryptoMarket {
  symbol: string
  name: string
  price: number
  change: number
  isPositive: boolean
}

const LiveMarketData: CryptoMarket[] = [
  { symbol: "BTC", name: "Bitcoin", price: 67100.12, change: 2.45, isPositive: true },
  { symbol: "ETH", name: "Ethereum", price: 3512.45, change: -1.23, isPositive: false },
  { symbol: "SOL", name: "Solana", price: 168.80, change: 5.12, isPositive: true },
  { symbol: "XRP", name: "Ripple", price: 0.5214, change: 3.87, isPositive: true },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  const [marketData, setMarketData] = useState<CryptoMarket[]>(LiveMarketData)
  const [isScrolled, setIsScrolled] = useState(false)

  // Simulate live market updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((coin) => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.01),
          change: coin.change + (Math.random() - 0.5) * 0.5,
          isPositive: coin.change >= 0,
        }))
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-primary neon-glow">ELITE</span>
            <span className="text-foreground">BlockMarket</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {["Home", "Markets", "Trade", "About"].map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm hover:text-primary transition">
                {item}
              </Link>
            ))}
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 neon-box-glow">
            Launch App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm text-primary uppercase tracking-widest font-bold">Keep Your Money Safe!</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Best crypto</span>
                <br />
                <span className="text-primary neon-glow">investing platform</span>
                <br />
                <span className="text-muted">for your future.</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base text-muted leading-relaxed">
              EliteBlockMarket unites and secures a growing ecosystem of specialized blockchain applications. Trade, invest, and manage your digital assets with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background flex items-center justify-center text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">168K+</p>
                <p className="text-muted">Realtime Users</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-bold neon-box-glow">
                Explore Now →
              </Button>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 px-8 py-6">
                Learn More
              </Button>
            </motion.div>

            {/* Info boxes */}
            <motion.div variants={itemVariants} className="flex gap-6 text-sm border-t border-primary/20 pt-6">
              <div>
                <p className="text-primary font-bold">$4,528 USD</p>
                <p className="text-muted text-xs">Polkadot unites and secures</p>
              </div>
              <div>
                <p className="text-primary font-bold">↑ 48.66%</p>
                <p className="text-muted text-xs">Average ROI</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Holographic Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full flex items-center justify-center"
          >
            <HolographicPhone />
          </motion.div>
        </div>
      </section>

      {/* Live Markets Ticker */}
      <section className="py-16 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-foreground">Trusted </span>
              <span className="text-primary neon-glow">platform</span>
            </h2>
            <p className="text-muted">Real-time market data with live price updates</p>
          </motion.div>

          {/* Market Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketData.map((coin, index) => (
              <motion.div
                key={coin.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:neon-box-glow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-bold text-lg">{coin.symbol}</p>
                        <p className="text-xs text-muted">{coin.name}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${coin.isPositive ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"}`}>
                        {coin.isPositive ? "↑" : "↓"}
                      </div>
                    </div>

                    <p className="text-2xl font-bold mb-2">${coin.price.toFixed(2)}</p>
                    <motion.p
                      animate={{
                        color: coin.isPositive ? ["#B0FF00", "#00ff88", "#B0FF00"] : ["#ff0050", "#ff6b9d", "#ff0050"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-sm font-bold"
                    >
                      {coin.isPositive ? "+" : ""}{coin.change.toFixed(2)}%
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Your <span className="text-primary neon-glow">trusted</span> partner of cryptocurrency.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Service for Any Level of Expertise", description: "Whether you&apos;re a beginner or pro trader, EliteBlockMarket adapts to your needs with intuitive tools and advanced features." },
              { title: "Industry Best Practices", description: "We implement cutting-edge security protocols and follow compliance standards to protect your assets and ensure regulatory adherence.", highlight: true },
              { title: "Protected by Insurance", description: "Your funds are safeguarded with comprehensive insurance coverage, giving you peace of mind on every transaction." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className={`h-full transition-all hover:neon-box-glow ${feature.highlight ? "bg-primary/20 border-primary/50" : "bg-card/50 border-primary/20"}`}>
                  <CardContent className="p-8">
                    <h3 className={`text-xl font-bold mb-4 ${feature.highlight ? "text-primary" : ""}`}>{feature.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                    {feature.highlight && (
                      <Link href="/learn" className="inline-block mt-4 text-primary hover:text-primary/80 font-bold text-sm">
                        Learn More →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-primary/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to start trading?
          </h2>
          <p className="text-muted mb-8 text-lg">Join thousands of traders on EliteBlockMarket today</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-lg font-bold neon-box-glow">
            Get Started Now
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4 text-center text-muted text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">
            <span className="text-primary font-bold">EliteBlockMarket</span> - Your Gateway to Next-Generation Crypto Trading
          </p>
          <p>© 2026 EliteBlockMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
