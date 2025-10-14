"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TypingAnimation } from "@/components/typing-animation"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

// --- Helper Components & Data ---

// Using inline SVGs for icons to keep it all in one file
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-3.938 10.062a9 9 0 01-5.124 5.124"
    />
  </svg>
)

const PaperPlaneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

// Mock data for the market table
const marketData = [
  {
    name: "BTC/USDT",
    shortName: "Bitcoin",
    change: -1.56,
    value: "67,100.12",
    isPositive: false,
    logo: "https://placehold.co/24x24/F7931A/FFFFFF?text=B",
  },
  {
    name: "ETH/USDT",
    shortName: "Ethereum",
    change: 2.34,
    value: "3,512.45",
    isPositive: true,
    logo: "https://placehold.co/24x24/627EEA/FFFFFF?text=E",
  },
  {
    name: "SOL/USDT",
    shortName: "Solana",
    change: 5.12,
    value: "168.80",
    isPositive: true,
    logo: "https://placehold.co/24x24/9945FF/FFFFFF?text=S",
  },
  {
    name: "DOGE/USDT",
    shortName: "Dogecoin",
    change: -0.78,
    value: "0.1589",
    isPositive: false,
    logo: "https://placehold.co/24x24/C2A633/FFFFFF?text=D",
  },
  {
    name: "XRP/USDT",
    shortName: "Ripple",
    change: 1.05,
    value: "0.5214",
    isPositive: true,
    logo: "https://placehold.co/24x24/000000/FFFFFF?text=X",
  },
  {
    name: "ADA/USDT",
    shortName: "Cardano",
    change: -2.11,
    value: "0.4532",
    isPositive: false,
    logo: "https://placehold.co/24x24/0033AD/FFFFFF?text=A",
  },
]

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    })
    document.getElementById("tradingview-widget")?.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container" id="tradingview-widget">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  )
}

const TradingViewMarketOverview = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-market-overview")
    if (!container) return

    // Clear previous content
    container.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      width: "100%",
      height: "100%",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      plotLineColorGrowing: "rgba(41, 98, 255, 1)",
      plotLineColorFalling: "rgba(41, 98, 255, 1)",
      gridLineColor: "rgba(240, 243, 250, 0)",
      scaleFontColor: "rgba(106, 109, 120, 1)",
      belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
      belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
      belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
      symbolActiveColor: "rgba(41, 98, 255, 0.12)",
      tabs: [
        {
          title: "Indices",
          symbols: [
            { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
            { s: "FOREXCOM:NSXUSD", d: "US 100" },
            { s: "FOREXCOM:DJI", d: "Dow 30" },
            { s: "INDEX:NKY", d: "Nikkei 225" },
            { s: "INDEX:DEU40", d: "DAX Index" },
            { s: "FOREXCOM:UKXGBP", d: "UK 100" },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR to USD" },
            { s: "FX:GBPUSD", d: "GBP to USD" },
            { s: "FX:USDJPY", d: "USD to JPY" },
            { s: "FX:USDCHF", d: "USD to CHF" },
            { s: "FX:AUDUSD", d: "AUD to USD" },
            { s: "FX:USDCAD", d: "USD to CAD" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
            { s: "BINANCE:ETHUSDT", d: "Ethereum" },
            { s: "BINANCE:BNBUSDT", d: "BNB" },
            { s: "BINANCE:SOLUSDT", d: "Solana" },
            { s: "BINANCE:XRPUSDT", d: "XRP" },
            { s: "BINANCE:ADAUSDT", d: "Cardano" },
          ],
        },
      ],
    })
    container.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: "500px", width: "100%" }}>
      <div id="tradingview-market-overview" style={{ height: "100%", width: "100%" }}></div>
    </div>
  )
}

const TradingViewHotlists = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-hotlists")
    if (!container) return

    // Clear previous content
    container.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "crypto",
      showToolbar: true,
      colorTheme: "dark",
      locale: "en",
      isTransparent: false,
    })
    container.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: "600px", width: "100%" }}>
      <div id="tradingview-hotlists" style={{ height: "100%", width: "100%" }}></div>
    </div>
  )
}

const TradingViewTimeline = () => {
  useEffect(() => {
    const container = document.getElementById("tradingview-timeline")
    if (!container) return

    // Clear previous content
    container.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "regular",
      width: "100%",
      height: "100%",
      locale: "en",
    })
    container.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: "600px", width: "100%" }}>
      <div id="tradingview-timeline" style={{ height: "100%", width: "100%" }}></div>
    </div>
  )
}

const TradingViewChart = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    })
    document.getElementById("tradingview-chart")?.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: "500px", width: "100%" }}>
      <div id="tradingview-chart" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  )
}

// --- Main Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900/95 backdrop-blur-md p-4 sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-colors"
        >
          <img
            src="https://i.ibb.co/pBSBnW9y/Whats-App-Image-2025-10-10-at-8-45-37-AM-1-removebg-preview-1.png"
            alt="UltimateStckTrader Logo"
            className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <nav
          className={`absolute md:relative top-full left-0 md:top-0 md:left-auto w-full md:w-auto bg-slate-900 md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          } overflow-hidden md:overflow-visible border-b md:border-b-0 border-slate-800`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <Link href="/markets" className="text-gray-300 hover:text-white transition-colors block py-2">
                Markets
              </Link>
            </li>
            <li>
              <Link href="/trade" className="text-gray-300 hover:text-white transition-colors block py-2">
                Trade
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors block py-2">
                Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors block py-2">
                Contact
              </Link>
            </li>
            <li className="w-full md:w-auto">
              {/* TODO: Add get started URL here */}
              <a
                href="https://ultimatestcktrader.online"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-2 px-6 rounded-full block text-center hover:shadow-lg transition-all"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const Hero = () => (
  <section className="relative bg-slate-900 text-white text-center py-20 md:py-32 px-4 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
      <img
        src="https://i.ibb.co/zVvS63QZ/IMG-20251013-WA0010.png"
        alt="Trading background"
        className="w-full h-full object-cover animate-zoom-slow"
      />
    </div>

    {/* Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#000000,rgba(0,0,0,0))] z-10"></div>

    <div className="relative z-20 w-full max-w-6xl mx-auto">
      <div className="inline-flex items-center bg-gray-700/50 rounded-full py-2 px-4 md:px-6 mb-6">
        <GlobeIcon />
        <span className="text-sm md:text-base">Available in 87 Countries</span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight px-4">
        Bespoke Methods For <br className="hidden sm:block" />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 min-h-[1.2em] inline-block">
          <TypingAnimation
            words={["Forex Enthusiasts", "Stock Marketers", "Crypto Enthusiasts", "Blockchain Profiteers"]}
            typingSpeed={100}
            deletingSpeed={50}
            delayBetweenWords={3000}
          />
        </span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-gray-300 text-sm md:text-base lg:text-lg px-4">
        Blockchain technology doesn't have to be "all or nothing". Whether you're a total beginner or a confident
        veteran, we'll make it quick, easy, and safe to buy, sell, and trade.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
        <a
          href="https://ultimatestcktrader.online"
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto hover:shadow-lg hover:scale-105 transition-all text-center"
        >
          Login
        </a>
        <a
          href="https://ultimatestcktrader.online"
          className="border-2 border-orange-500 text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto hover:bg-orange-500/10 transition-all text-center"
        >
          Open Account
        </a>
      </div>
    </div>
  </section>
)

const PlatformUI = () => (
  <section className="bg-slate-900 py-16 md:py-24 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience Our Powerful Trading Platform</h2>
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
          Trade with confidence using our intuitive, feature-rich platform designed for traders of all levels. Access
          real-time data, advanced charts, and execute trades seamlessly across all your devices.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-3xl"></div>

        {/* Platform screenshot */}
        <div className="relative">
          <img
            src="https://i.ibb.co/Gv6rJFP0/Screenshot-2025-1013-174052.png"
            alt="UltimateStckTrader Platform Interface"
            className="w-full h-auto rounded-xl shadow-2xl border border-slate-700"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://ultimatestcktrader.online"
          className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-10 rounded-full hover:shadow-lg hover:scale-105 transition-all text-lg"
        >
          <span>Get Started Now</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  </section>
)

const Features = () => (
  <section className="bg-slate-900 py-12 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
        <PaperPlaneIcon className="h-10 w-10 text-orange-500 flex-shrink-0" />
        <h3 className="text-white text-xl md:text-2xl font-semibold text-center md:text-left">
          Seamless Crypto Transactions
        </h3>
      </div>
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
        <PaperPlaneIcon className="h-10 w-10 text-orange-500 flex-shrink-0" />
        <h3 className="text-white text-xl md:text-2xl font-semibold text-center md:text-left">Easy To Use</h3>
      </div>
    </div>
  </section>
)

const PlatformShowcase = () => (
  <section className="bg-slate-900 py-16 md:py-20 px-4">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="text-center lg:text-left order-2 lg:order-1">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Your Sure-Fire Choice For Forex</h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Our platform is made a perfect trading partner for everyone around the globe to trade the world's markets.
        </p>
        <a
          href="https://ultimatestcktrader.online"
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all hover:scale-105"
        >
          <span>Open Account</span>
          <ArrowRightIcon />
        </a>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="https://i.ibb.co/Gv6rJFP0/Screenshot-2025-1013-174052.png"
          alt="Platform UI on different devices"
          className="rounded-lg shadow-2xl shadow-slate-950 w-full"
        />
      </div>
    </div>
  </section>
)

// Removed duplicate StocksSection component
// Removed duplicate Sponsors component

const TrustedPartners = () => {
  const partners = [
    { name: "Bloomberg", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=Bloomberg" },
    { name: "Reuters", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=Reuters" },
    { name: "TradingView", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=TradingView" },
    { name: "MetaTrader", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=MetaTrader" },
    { name: "Nasdaq", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=Nasdaq" },
    { name: "NYSE", logo: "https://placehold.co/150x60/1E293B/FFFFFF?text=NYSE" },
  ]

  return (
    <section className="bg-slate-800 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Trusted By Industry Leaders</h2>
        <p className="text-gray-400 text-center mb-12">
          Partnered with the world's leading financial institutions and technology providers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const LiveMarketData = () => (
  <section className="bg-slate-900 py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Live Market Data</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Real-time market overview across indices, forex, and cryptocurrencies powered by TradingView
      </p>
      <div className="bg-slate-800 rounded-lg p-4">
        <TradingViewMarketOverview />
      </div>
    </div>
  </section>
)

const TrendingStocks = () => (
  <section className="bg-slate-800 py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Trending Now</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Discover the most active stocks, gainers, and losers in real-time
      </p>
      <div className="bg-slate-900 rounded-lg p-4">
        <TradingViewHotlists />
      </div>
    </div>
  </section>
)

const MarketData = () => {
  const [activeTab, setActiveTab] = useState("Trending")
  const tabs = ["Trending", "Gainers/Losers", "Market Cap"]

  return (
    <section className="bg-slate-900 py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center border-b border-slate-700 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-base md:text-lg font-semibold transition-colors whitespace-nowrap ${
                activeTab === tab ? "text-white border-b-2 border-orange-500" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-left text-white min-w-[600px]">
            <thead className="text-gray-400 text-sm md:text-base">
              <tr>
                <th className="p-3 md:p-4">Assets</th>
                <th className="p-3 md:p-4">Last Price</th>
                <th className="p-3 md:p-4">24h Change</th>
                <th className="p-3 md:p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((item) => (
                <tr key={item.name} className="border-b border-slate-800 hover:bg-slate-800/50">
                  <td className="p-3 md:p-4">
                    <div className="flex items-center">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={`${item.shortName} logo`}
                        className="w-6 h-6 mr-3 rounded-full flex-shrink-0"
                      />
                      <div>
                        <div className="font-bold text-sm md:text-base">{item.name}</div>
                        <div className="text-xs md:text-sm text-gray-400">{item.shortName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 md:p-4 text-sm md:text-base">${item.value}</td>
                  <td
                    className={`p-3 md:p-4 font-semibold text-sm md:text-base ${item.isPositive ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.isPositive ? "+" : ""}
                    {item.change}%
                  </td>
                  <td className="p-3 md:p-4 text-right">
                    <button className="bg-green-500 text-white font-semibold py-2 px-4 md:px-6 rounded-full hover:bg-green-600 transition-colors text-sm md:text-base">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description:
        "Sign up in minutes with just your email and basic information. No complicated verification process.",
    },
    {
      number: "02",
      title: "Fund Your Account",
      description:
        "Deposit funds securely using multiple payment methods including bank transfer, credit card, or crypto.",
    },
    {
      number: "03",
      title: "Start Trading",
      description: "Access global markets and start trading stocks, forex, and crypto with our intuitive platform.",
    },
    {
      number: "04",
      title: "Withdraw Profits",
      description: "Withdraw your earnings anytime with fast processing and low fees. Your money, your control.",
    },
  ]

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">How It Works</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Get started with UltimateStckTrader in four simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-orange-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const DetailedFeatures = () => {
  const features = [
    {
      icon: "🔒",
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption and multi-factor authentication.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our high-performance trading infrastructure.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Make informed decisions with real-time charts, indicators, and market analysis tools.",
    },
    {
      icon: "🌍",
      title: "Global Markets",
      description:
        "Access stocks, forex, commodities, indices, and cryptocurrencies. We provide access to global markets including NYSE, NASDAQ, LSE, and major forex pairs.",
    },
    {
      icon: "📱",
      title: "Mobile Trading",
      description: "Trade on the go with our powerful mobile apps for iOS and Android.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
    },
  ]

  return (
    <section className="bg-slate-800 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Why Choose UltimateStckTrader</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Everything you need to succeed in the financial markets
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900 border-slate-700 hover:border-orange-500 transition-colors">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Corrected StocksSection component to avoid redeclaration
const StockTradingSection = () => (
  <section className="bg-gradient-to-b from-yellow-200/20 to-slate-900 py-20 px-4 text-center">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-white">Stocks Done The Right Way</h2>
      <p className="mt-4 max-w-xl mx-auto text-gray-300">
        Trade stocks, ETFs, and new options without worrying about platform fees or restrictions. Options and cash
        accounts - together at last.
      </p>
      <a
        href="https://ultimatestcktrader.online"
        className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors"
      >
        <span>Start Now</span>
        <ArrowRightIcon />
      </a>
    </div>
  </section>
)

// Corrected Sponsors component to avoid redeclaration
const PartnershipSection = () => (
  <section className="bg-slate-800 py-12 px-4">
    <div className="container mx-auto flex justify-center items-center gap-8 md:gap-16 flex-wrap">
      <span className="text-4xl font-bold text-gray-400 opacity-70">WISDOM TREE</span>
      <span className="text-4xl font-bold text-gray-400 opacity-70">TRIPLE</span>
    </div>
  </section>
)

const LiveChartSection = () => (
  <section className="bg-slate-900 py-20 px-4">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-white text-center mb-4">Live Market Data</h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Real-time charts powered by TradingView - Track your favorite assets
      </p>
      <div className="bg-slate-800 rounded-lg p-4">
        <TradingViewChart />
      </div>
    </div>
  </section>
)

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Day Trader",
      image: "https://placehold.co/80x80/3B82F6/FFFFFF?text=SJ",
      /* Updated site name from UltimateStockTraders to UltimateStckTrader */
      content:
        "UltimateStckTrader has transformed my trading experience. The platform is fast, reliable, and the customer support is exceptional.",
    },
    {
      name: "Michael Chen",
      role: "Forex Investor",
      image: "https://placehold.co/80x80/10B981/FFFFFF?text=MC",
      content:
        "I've tried many platforms, but this one stands out. Low fees, great execution speed, and an intuitive interface.",
    },
    {
      name: "Emma Williams",
      role: "Crypto Enthusiast",
      image: "https://placehold.co/80x80/F59E0B/FFFFFF?text=EW",
      content:
        "The best trading platform I've used. Easy to navigate, powerful tools, and excellent mobile app for trading on the go.",
    },
  ]

  return (
    <section className="bg-slate-800 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">What Our Traders Say</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Join thousands of satisfied traders worldwide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex mt-4 text-yellow-500">{"★".repeat(5)}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const NewsSection = () => {
  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white text-center mb-2">Latest Market News</h2>
          <p className="text-gray-400 text-center">
            Stay informed with real-time financial news powered by TradingView
          </p>
        </div>
        <div className="bg-slate-800 rounded-lg p-4">
          <TradingViewTimeline />
        </div>
      </div>
    </section>
  )
}

const Stats = () => {
  const stats = [
    { value: "2M+", label: "Active Traders" },
    { value: "$50B+", label: "Trading Volume" },
    { value: "150+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <section className="bg-slate-800 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      period: "Forever Free",
      features: [
        "Basic market access",
        "Real-time quotes",
        "Mobile app access",
        "Email support",
        "Educational resources",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "49",
      period: "per month",
      features: [
        "Everything in Starter",
        "Advanced charting tools",
        "Priority execution",
        "24/7 phone support",
        "API access",
        "Lower trading fees",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Contact us",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solutions",
        "Institutional pricing",
        "Advanced risk management",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Choose Your Plan</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Start free and upgrade as you grow. All plans include our core trading features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-slate-800 border-2 ${plan.popular ? "border-orange-500" : "border-slate-700"} relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                  {plan.price === "Custom" && <div className="text-gray-400 text-sm mt-2">{plan.period}</div>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-orange-500 hover:bg-orange-600" : "bg-slate-700 hover:bg-slate-600"}`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ = () => {
  const faqs = [
    {
      /* Updated site name from UltimateStockTraders to UltimateStckTrader */
      question: "How do I get started with UltimateStckTrader?",
      answer:
        "Getting started is easy! Simply click the 'Register' button, fill in your details, verify your email, and you're ready to start trading. The entire process takes less than 5 minutes.",
    },
    {
      question: "What markets can I trade on your platform?",
      answer:
        "You can trade stocks, forex, commodities, indices, and cryptocurrencies. We provide access to global markets including NYSE, NASDAQ, LSE, and major forex pairs.",
    },
    {
      /* Updated site name from UltimateStockTraders to UltimateStckTrader */
      question: "Are my funds safe with UltimateStckTrader?",
      answer:
        "Absolutely. We use bank-level security with 256-bit encryption, two-factor authentication, and keep client funds in segregated accounts with tier-1 banks.",
    },
    {
      question: "What are your trading fees?",
      answer:
        "We offer competitive pricing with no hidden fees. Starter accounts have standard fees, while Professional and Enterprise accounts enjoy reduced rates. Check our pricing page for detailed information.",
    },
    {
      question: "Can I trade on mobile devices?",
      answer:
        "Yes! Our mobile apps for iOS and Android provide full trading functionality, real-time charts, and account management on the go.",
    },
    {
      question: "How long do withdrawals take?",
      answer:
        "Withdrawal processing times vary by method. Bank transfers typically take 1-3 business days, while crypto withdrawals are usually processed within 24 hours.",
    },
  ]

  return (
    <section className="bg-slate-800 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-12">Find answers to common questions about our platform</p>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-900 border border-slate-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-orange-500 text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const FinalCTA = () => (
  <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-20 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Start Trading?</h2>
      <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
        Join millions of traders worldwide and take control of your financial future today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://ultimatestcktrader.online"
          className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-full transition-colors"
        >
          Create Free Account
        </a>
        <a
          href="https://ultimatestcktrader.online"
          className="inline-block border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-4 rounded-full transition-colors"
        >
          Schedule Demo
        </a>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-slate-950 text-gray-400 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <img
              src="https://i.ibb.co/pBSBnW9y/Whats-App-Image-2025-10-10-at-8-45-37-AM-1-removebg-preview-1.png"
              alt="UltimateStckTrader Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <p className="mb-4">
            Your trusted partner for trading stocks, forex, and cryptocurrencies. Trade with confidence on our secure,
            fast, and reliable platform.
          </p>
          <div className="flex space-x-4">
            <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Stocks
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Forex
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Crypto
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Commodities
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Press
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Trading Guide
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                API Docs
              </a>
            </li>
            <li>
              <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
                Status
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2025 UltimateStckTrader. All rights reserved.</p>
        <div className="flex space-x-6 text-sm">
          <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
            Privacy Policy
          </a>
          <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
            Terms of Service
          </a>
          <a href="https://ultimatestcktrader.online" className="hover:text-orange-500 transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
)

const WhatSetsUsApart = () => {
  const advantages = [
    {
      title: "Advanced Trading Technology",
      description:
        "Our cutting-edge trading platform uses the latest technology to provide lightning-fast execution, real-time data, and advanced charting tools. Experience institutional-grade trading infrastructure at your fingertips.",
      image:
        "https://i.ibb.co/Xrr6D1Ff/Gr-fico-financeiro-do-gr-fico-de-a-es-do-mercado-de-a-es-caixa-de-negocia-o-de-investimento.jpg",
      reverse: false,
    },
    {
      title: "Comprehensive Market Access",
      description:
        "Trade across multiple asset classes including stocks, forex, commodities, indices, and cryptocurrencies. Access global markets 24/7 with competitive spreads and deep liquidity. Your gateway to worldwide financial opportunities.",
      image: "https://i.ibb.co/s9DQ6dRN/download-2.jpg",
      reverse: true,
    },
    {
      title: "Unmatched Security & Reliability",
      description:
        "Your security is our top priority. We employ bank-level encryption, multi-factor authentication, cold storage for crypto assets, and segregated client accounts. Trade with confidence knowing your funds are protected by industry-leading security measures.",
      image: "https://i.ibb.co/20q1KPzJ/download-1.jpg",
      reverse: false,
    },
    {
      title: "Crypto Trading Excellence",
      description:
        "Dive into the world of cryptocurrency trading with our comprehensive platform. Trade Bitcoin, Ethereum, and hundreds of altcoins with low fees, instant execution, and advanced order types. Perfect for both beginners and experienced crypto traders.",
      image: "https://i.ibb.co/tM8LLfZX/Bitcoin-for-Beginners-How-to-Start-Investing.jpg",
      reverse: true,
    },
    {
      title: "Expert Support & Education",
      description:
        "Never trade alone. Our dedicated support team is available 24/7 to assist you. Access comprehensive educational resources, market analysis, trading strategies, and webinars from industry experts. We're committed to your trading success.",
      image: "https://i.ibb.co/Q3cxLV7f/download.jpg",
      reverse: false,
    },
  ]

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">What Sets Us Apart</h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          Discover the advantages that give traders confidence and help them succeed in the financial markets
        </p>

        <div className="space-y-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${advantage.reverse ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`${advantage.reverse ? "lg:col-start-2" : ""}`}>
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Advantage #{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">{advantage.description}</p>
                <Button
                  onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </div>
              <div className={`${advantage.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src={advantage.image || "/placeholder.svg"}
                    alt={advantage.title}
                    className="relative rounded-lg shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="bg-slate-900">
      <PageLoader />
      <TradingViewWidget />
      <Header />
      <main>
        <Hero />
        <PlatformUI />
        <Stats />
        <Features />
        <PlatformShowcase />
        <HowItWorks />
        <DetailedFeatures />
        <StockTradingSection />
        <TrustedPartners />
        <LiveMarketData />
        <TrendingStocks />
        <MarketData />
        <LiveChartSection />
        <Testimonials />
        <NewsSection />
        <WhatSetsUsApart />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
