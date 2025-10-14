"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900/95 backdrop-blur-md p-4 sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
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
              <Link href="/markets" className="text-white font-semibold transition-colors block py-2">
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

const marketCategories = [
  {
    title: "Forex",
    description: "Trade major, minor, and exotic currency pairs with tight spreads and high liquidity.",
    icon: "💱",
    pairs: [
      { name: "EUR/USD", price: "1.0856", change: "+0.12%" },
      { name: "GBP/USD", price: "1.2634", change: "-0.08%" },
      { name: "USD/JPY", price: "149.82", change: "+0.34%" },
      { name: "AUD/USD", price: "0.6523", change: "+0.21%" },
    ],
  },
  {
    title: "Stocks",
    description: "Access thousands of stocks from global exchanges including NYSE, NASDAQ, and LSE.",
    icon: "📈",
    pairs: [
      { name: "AAPL", price: "$178.45", change: "+1.23%" },
      { name: "MSFT", price: "$412.89", change: "+0.87%" },
      { name: "GOOGL", price: "$142.56", change: "-0.45%" },
      { name: "TSLA", price: "$248.32", change: "+2.14%" },
    ],
  },
  {
    title: "Cryptocurrencies",
    description: "Trade Bitcoin, Ethereum, and other major cryptocurrencies 24/7 with low fees.",
    icon: "₿",
    pairs: [
      { name: "BTC/USD", price: "$67,234", change: "+2.45%" },
      { name: "ETH/USD", price: "$3,512", change: "+1.89%" },
      { name: "SOL/USD", price: "$168.80", change: "+5.12%" },
      { name: "XRP/USD", price: "$0.5214", change: "+1.05%" },
    ],
  },
  {
    title: "Commodities",
    description: "Trade gold, silver, oil, and other commodities with competitive pricing.",
    icon: "🛢️",
    pairs: [
      { name: "Gold", price: "$2,034.50", change: "+0.56%" },
      { name: "Silver", price: "$24.12", change: "+0.78%" },
      { name: "Crude Oil", price: "$78.45", change: "-1.23%" },
      { name: "Natural Gas", price: "$2.89", change: "+2.34%" },
    ],
  },
  {
    title: "Indices",
    description: "Trade major global indices including S&P 500, NASDAQ, and FTSE 100.",
    icon: "📊",
    pairs: [
      { name: "S&P 500", price: "4,567.89", change: "+0.45%" },
      { name: "NASDAQ", price: "14,234.56", change: "+0.67%" },
      { name: "FTSE 100", price: "7,456.23", change: "-0.23%" },
      { name: "DAX", price: "16,789.45", change: "+0.89%" },
    ],
  },
  {
    title: "ETFs",
    description: "Diversify your portfolio with exchange-traded funds across various sectors.",
    icon: "📦",
    pairs: [
      { name: "SPY", price: "$456.78", change: "+0.45%" },
      { name: "QQQ", price: "$389.23", change: "+0.67%" },
      { name: "IWM", price: "$198.45", change: "-0.12%" },
      { name: "GLD", price: "$189.67", change: "+0.56%" },
    ],
  },
]

export default function MarketsPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <TradingViewWidget />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore Global Markets</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access thousands of trading instruments across forex, stocks, cryptocurrencies, commodities, indices, and
              ETFs. Trade with confidence on our advanced platform.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg">
              Start Trading Now
            </Button>
          </div>
        </section>

        {/* Market Categories */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {marketCategories.map((category, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-5xl mr-4">{category.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                        <p className="text-gray-400 mt-2">{category.description}</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {category.pairs.map((pair, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors"
                        >
                          <span className="text-white font-semibold">{pair.name}</span>
                          <div className="text-right">
                            <div className="text-white font-bold">{pair.price}</div>
                            <div
                              className={`text-sm font-semibold ${pair.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                            >
                              {pair.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Trade {category.title}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Market Features */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Trade With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Fast Execution</h3>
                  <p className="text-gray-400">Lightning-fast order execution with minimal slippage</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-white mb-2">Low Fees</h3>
                  <p className="text-gray-400">Competitive spreads and transparent pricing</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Tools</h3>
                  <p className="text-gray-400">Professional charting and analysis tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-white/90 text-lg mb-8">Open your account today and access global markets</p>
            <Button
              onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            >
              Create Free Account
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="container mx-auto text-center">
          <p>© 2025 UltimateStckTrader. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
