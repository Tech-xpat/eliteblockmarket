"use client"

import Link from "next/link"
import { TradingViewMarketOverview, TradingViewCryptoHeatmap, TradingViewEconomicCalendar } from "@/components/tradingview-widgets"

interface MarketCoin {
  symbol: string
  name: string
  price: number
  change24h: number
  volume: number
  marketCap: number
  high24h: number
  low24h: number
}

const initialMarketData: MarketCoin[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 67100.12,
    change24h: 2.45,
    volume: 28500000000,
    marketCap: 1320000000000,
    high24h: 68500,
    low24h: 65800,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3512.45,
    change24h: -1.23,
    volume: 15200000000,
    marketCap: 421000000000,
    high24h: 3650,
    low24h: 3450,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 168.80,
    change24h: 5.12,
    volume: 890000000,
    marketCap: 78000000000,
    high24h: 172,
    low24h: 162,
  },
  {
    symbol: "XRP",
    name: "Ripple",
    price: 0.5214,
    change24h: 3.87,
    volume: 2300000000,
    marketCap: 28500000000,
    high24h: 0.54,
    low24h: 0.49,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 0.9876,
    change24h: 1.56,
    volume: 456000000,
    marketCap: 35600000000,
    high24h: 1.02,
    low24h: 0.95,
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: 0.1589,
    change24h: -0.78,
    volume: 1200000000,
    marketCap: 23400000000,
    high24h: 0.165,
    low24h: 0.155,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    price: 28.45,
    change24h: 4.23,
    volume: 234000000,
    marketCap: 13500000000,
    high24h: 29.5,
    low24h: 27.2,
  },
  {
    symbol: "AVAX",
    name: "Avalanche",
    price: 45.67,
    change24h: 6.89,
    volume: 456000000,
    marketCap: 17800000000,
    high24h: 47.2,
    low24h: 43.1,
  },
]

export default function MarketsPage() {
  const [coins, setCoins] = useState<MarketCoin[]>(initialMarketData)
  const [sortBy, setSortBy] = useState<"price" | "change24h" | "volume">("price")
  const [searchTerm, setSearchTerm] = useState("")

  // Simulate live market updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prev) =>
        prev.map((coin) => ({
          ...coin,
          price: coin.price * (1 + (Math.random() - 0.5) * 0.02),
          change24h: coin.change24h + (Math.random() - 0.5) * 0.3,
          volume: coin.volume * (1 + (Math.random() - 0.5) * 0.05),
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const filteredCoins = coins
    .filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price") return b.price - a.price
      if (sortBy === "change24h") return b.change24h - a.change24h
      return b.volume - a.volume
    })

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
            <Link href="/trade" className="text-sm hover:text-primary transition">
              Trade
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Launch App
            </Button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Live Crypto </span>
              <span className="text-primary neon-glow">Markets</span>
            </h1>
            <p className="text-muted text-lg">Real-time market data with comprehensive trading analytics</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center"
          >
            <input
              type="text"
              placeholder="Search coins..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-card border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition"
            />
            <div className="flex gap-2">
              {(["price", "change24h", "volume"] as const).map((option) => (
                <Button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-4 py-2 rounded-lg transition ${sortBy === option ? "bg-primary text-primary-foreground" : "bg-card border border-primary/30 text-foreground hover:border-primary/50"}`}
                >
                  {option === "price" && "Price"}
                  {option === "change24h" && "Change"}
                  {option === "volume" && "Volume"}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCoins.map((coin, index) => (
              <motion.div
                key={coin.symbol}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:neon-box-glow cursor-pointer group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="font-bold text-lg">{coin.symbol}</p>
                        <p className="text-xs text-muted">{coin.name}</p>
                      </div>
                      <motion.div
                        animate={{
                          backgroundColor: coin.change24h >= 0 ? ["rgba(176, 255, 0, 0.1)", "rgba(0, 255, 136, 0.1)"] : ["rgba(255, 0, 80, 0.1)", "rgba(255, 107, 157, 0.1)"],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm"
                      >
                        {coin.change24h >= 0 ? (
                          <span className="text-primary">↑</span>
                        ) : (
                          <span className="text-destructive">↓</span>
                        )}
                      </motion.div>
                    </div>

                    {/* Price */}
                    <motion.p
                      key={coin.price}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold mb-2"
                    >
                      ${coin.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </motion.p>

                    {/* Change percentage with color animation */}
                    <motion.p
                      animate={{
                        color: coin.change24h >= 0 ? ["#B0FF00", "#00ff88", "#B0FF00"] : ["#ff0050", "#ff6b9d", "#ff0050"],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg font-bold mb-4"
                    >
                      {coin.change24h >= 0 ? "+" : ""}{coin.change24h.toFixed(2)}%
                    </motion.p>

                    {/* Stats */}
                    <div className="space-y-3 border-t border-primary/20 pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">24h High</span>
                        <span className="text-foreground font-semibold">${coin.high24h.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">24h Low</span>
                        <span className="text-foreground font-semibold">${coin.low24h.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Volume</span>
                        <span className="text-foreground font-semibold">${(coin.volume / 1e9).toFixed(2)}B</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted">Market Cap</span>
                        <span className="text-foreground font-semibold">${(coin.marketCap / 1e9).toFixed(0)}B</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/trade?coin=${coin.symbol}`}>
                      <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                        Trade {coin.symbol}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4 text-center text-muted text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">
            <span className="text-primary font-bold">EliteBlockMarket</span> - Live market data updates every 5 seconds
          </p>
          <p>© 2026 EliteBlockMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
