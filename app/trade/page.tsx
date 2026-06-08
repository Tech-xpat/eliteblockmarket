"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"

const TradingPairs = [
  { symbol: "BTC/USDT", name: "Bitcoin", currentPrice: 67100.12, change: 2.45 },
  { symbol: "ETH/USDT", name: "Ethereum", currentPrice: 3512.45, change: -1.23 },
  { symbol: "SOL/USDT", name: "Solana", currentPrice: 168.80, change: 5.12 },
  { symbol: "XRP/USDT", name: "Ripple", currentPrice: 0.5214, change: 3.87 },
]

export default function TradePage() {
  const [selectedPair, setSelectedPair] = useState(TradingPairs[0])
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState(selectedPair.currentPrice.toString())

  const [orders, setOrders] = useState<Array<{ id: number; type: string; pair: string; amount: string; price: string; date: string }>>([
    {
      id: 1,
      type: "BUY",
      pair: "BTC/USDT",
      amount: "0.5",
      price: "67,100",
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "SELL",
      pair: "ETH/USDT",
      amount: "5.2",
      price: "3,512",
      date: "5 hours ago",
    },
  ])

  useEffect(() => {
    setPrice(selectedPair.currentPrice.toString())
  }, [selectedPair])

  const handlePlaceOrder = () => {
    if (amount && price) {
      const newOrder = {
        id: orders.length + 1,
        type: orderType.toUpperCase(),
        pair: selectedPair.symbol,
        amount: amount,
        price: price,
        date: "just now",
      }
      setOrders([newOrder, ...orders])
      setAmount("")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary neon-glow">ELITE</span>
            <span className="text-foreground">BlockMarket</span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/markets" className="text-sm hover:text-primary transition">
              Markets
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Account
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Trading Layout */}
      <div className="pt-20 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Price Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Trading Pair Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {TradingPairs.map((pair) => (
                <button
                  key={pair.symbol}
                  onClick={() => setSelectedPair(pair)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedPair.symbol === pair.symbol
                      ? "bg-primary text-primary-foreground neon-box-glow"
                      : "bg-card border border-primary/30 hover:border-primary/50"
                  }`}
                >
                  {pair.symbol}
                </button>
              ))}
            </div>

            {/* Price Display Card */}
            <Card className="bg-card/50 border-primary/20 neon-box-glow">
              <CardContent className="p-8">
                <motion.div
                  key={selectedPair.symbol}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-muted text-sm mb-2">{selectedPair.name}</p>
                  <motion.h2
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold mb-4"
                  >
                    ${selectedPair.currentPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.h2>

                  <motion.div
                    animate={{
                      color: selectedPair.change >= 0 ? ["#B0FF00", "#00ff88", "#B0FF00"] : ["#ff0050", "#ff6b9d", "#ff0050"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl font-bold"
                  >
                    {selectedPair.change >= 0 ? "+" : ""}{selectedPair.change.toFixed(2)}% Today
                  </motion.div>
                </motion.div>

                {/* Chart placeholder with animated waves */}
                <div className="mt-8 h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chart-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#B0FF00" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#B0FF00" stopOpacity="0.01" />
                      </linearGradient>
                    </defs>
                    {/* Animated chart line */}
                    <polyline
                      points="0,150 20,130 40,120 60,100 80,110 100,90 120,85 140,75 160,70 180,60 200,50 220,55 240,45 260,40 280,35 300,40 320,30 340,25 360,20 380,25 400,15"
                      fill="url(#chart-gradient)"
                      stroke="#B0FF00"
                      strokeWidth="2"
                    />
                    <polyline
                      points="0,150 20,130 40,120 60,100 80,110 100,90 120,85 140,75 160,70 180,60 200,50 220,55 240,45 260,40 280,35 300,40 320,30 340,25 360,20 380,25 400,15"
                      fill="none"
                      stroke="#B0FF00"
                      strokeWidth="2"
                      opacity="0.5"
                      style={{
                        animation: "dash 20s linear infinite",
                      }}
                    />
                  </svg>
                </div>

                {/* Time periods */}
                <div className="flex gap-2 mt-6">
                  {["1H", "4H", "1D", "1W", "1M"].map((period) => (
                    <button
                      key={period}
                      className="px-3 py-1 text-xs rounded bg-primary/10 hover:bg-primary/20 transition text-primary"
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "24h High", value: "$68,500" },
                { label: "24h Low", value: "$65,800" },
                { label: "Market Cap", value: "$1.32T" },
                { label: "Volume", value: "$28.5B" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="bg-card/50 border-primary/20">
                    <CardContent className="p-4">
                      <p className="text-muted text-xs mb-2">{stat.label}</p>
                      <p className="text-xl font-bold text-primary">{stat.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel - Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Order Type Selector */}
            <div className="flex gap-2 bg-card/50 border border-primary/20 rounded-lg p-1">
              {(["buy", "sell"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`flex-1 py-2 rounded transition-all ${
                    orderType === type
                      ? type === "buy"
                        ? "bg-primary/50 text-primary"
                        : "bg-destructive/50 text-destructive"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* Trading Form */}
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-6 space-y-6">
                {/* Pair display */}
                <div>
                  <p className="text-muted text-sm mb-2">Trading Pair</p>
                  <p className="text-lg font-bold">{selectedPair.symbol}</p>
                </div>

                {/* Amount Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Amount ({selectedPair.symbol.split("/")[0]})
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Price Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Price (USDT)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                    className="w-full px-4 py-3 bg-card border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Total */}
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <p className="text-muted text-sm mb-2">Total</p>
                  <p className="text-2xl font-bold text-primary">
                    ${(parseFloat(amount || "0") * parseFloat(price || "0")).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    orderType === "buy"
                      ? "bg-primary/80 hover:bg-primary text-primary-foreground"
                      : "bg-destructive/80 hover:bg-destructive text-white"
                  }`}
                >
                  {orderType.charAt(0).toUpperCase() + orderType.slice(1)} {selectedPair.symbol}
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
          <Card className="bg-card/50 border-primary/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                {orders.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-primary/20 hover:border-primary/50 transition"
                  >
                    <div className="flex-1">
                      <p className="font-semibold">{order.pair}</p>
                      <p className="text-sm text-muted">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${order.type === "BUY" ? "text-primary" : "text-destructive"}`}>
                        {order.type}
                      </p>
                      <p className="text-sm text-muted">
                        {order.amount} @ ${order.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4 text-center text-muted text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">
            <span className="text-primary font-bold">EliteBlockMarket</span> - Advanced Trading Platform
          </p>
          <p>© 2026 EliteBlockMarket. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
      `}</style>
    </div>
  )
}
