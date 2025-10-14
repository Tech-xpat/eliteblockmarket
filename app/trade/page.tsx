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
              <Link href="/markets" className="text-gray-300 hover:text-white transition-colors block py-2">
                Markets
              </Link>
            </li>
            <li>
              <Link href="/trade" className="text-white font-semibold transition-colors block py-2">
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
    <div className="tradingview-widget-container" style={{ height: "600px", width: "100%" }}>
      <div id="tradingview-chart" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  )
}

const tradingFeatures = [
  {
    icon: "📊",
    title: "Advanced Charting",
    description: "Professional-grade charts with 100+ technical indicators and drawing tools",
  },
  {
    icon: "⚡",
    title: "One-Click Trading",
    description: "Execute trades instantly with our streamlined order entry system",
  },
  {
    icon: "🔔",
    title: "Price Alerts",
    description: "Set custom alerts and never miss a trading opportunity",
  },
  {
    icon: "📱",
    title: "Mobile Trading",
    description: "Trade anywhere with our powerful mobile apps for iOS and Android",
  },
  {
    icon: "🤖",
    title: "Automated Trading",
    description: "Use expert advisors and trading bots to automate your strategies",
  },
  {
    icon: "📈",
    title: "Real-Time Data",
    description: "Access live market data and news feeds from global exchanges",
  },
]

export default function TradePage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Start Trading Today</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience professional-grade trading with our advanced platform. Access global markets, powerful tools,
              and lightning-fast execution.
            </p>
            <div className="max-w-4xl mx-auto mb-8">
              <img
                src="/images/design-mode/Gr-fico-financeiro-do-gr-fico-de-a-es-do-mercado-de-a-es-caixa-de-negocia-o-de-investimento.jpg"
                alt="Trading Platform"
                className="rounded-lg shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg">
                Open Live Account
              </Button>
              <Button className="border-2 border-orange-500 text-white hover:bg-orange-500/10 font-bold py-3 px-8 rounded-full text-lg bg-transparent">
                Try Demo Account
              </Button>
            </div>
          </div>
        </section>

        {/* Live Trading Chart */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Live Trading Platform</h2>
            <p className="text-gray-400 text-center mb-12">Professional charting powered by TradingView - Try it now</p>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <TradingViewChart />
            </div>
          </div>
        </section>

        {/* Trading Features */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Powerful Trading Tools</h2>
            <p className="text-gray-400 text-center mb-12">Everything you need to trade like a professional</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tradingFeatures.map((feature, index) => (
                <Card key={index} className="bg-slate-900 border-slate-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Types */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Choose Your Account Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Demo Account</h3>
                  <p className="text-gray-400 mb-6">
                    Practice trading with virtual funds. Perfect for beginners to learn without risk.
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>✓ $100,000 virtual funds</li>
                    <li>✓ Full platform access</li>
                    <li>✓ Real-time market data</li>
                    <li>✓ No time limit</li>
                  </ul>
                  <Button className="w-full bg-slate-700 hover:bg-slate-600">Open Demo Account</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Standard Account</h3>
                  <p className="text-gray-400 mb-6">Start trading with as little as $100. Ideal for most traders.</p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>✓ Minimum deposit: $100</li>
                    <li>✓ Competitive spreads</li>
                    <li>✓ All trading instruments</li>
                    <li>✓ 24/7 support</li>
                  </ul>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Open Standard Account</Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Pro Account</h3>
                  <p className="text-gray-400 mb-6">Advanced features for professional traders with higher volumes.</p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>✓ Minimum deposit: $10,000</li>
                    <li>✓ Tightest spreads</li>
                    <li>✓ Priority execution</li>
                    <li>✓ Dedicated manager</li>
                  </ul>
                  <Button className="w-full bg-slate-700 hover:bg-slate-600">Open Pro Account</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Trade?</h2>
            <p className="text-white/90 text-lg mb-8">Join thousands of traders worldwide</p>
            <Button
              onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Trading Now
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
