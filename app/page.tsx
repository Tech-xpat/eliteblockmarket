'use client';

import Link from 'next/link';
import { TradingViewTicker, TradingViewMarketOverview } from '@/components/tradingview-widgets';

export default function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
            <span className="text-primary">Elite</span>BlockMarket
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/markets" className="text-sm hover:text-primary transition-colors">
              Markets
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Trading Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 -z-10" />

        {/* 3D Animated background elements with crypto symbols */}
        <div className="absolute inset-0 -z-5 overflow-hidden">
          {/* Floating crypto symbols with 3D animation */}
          <div className="absolute top-20 left-10 text-7xl font-bold text-primary/15 animate-crypto-float-1">₿</div>
          <div className="absolute top-40 right-20 text-6xl font-bold text-primary/10 animate-crypto-float-2">Ξ</div>
          <div className="absolute bottom-32 left-1/4 text-5xl font-bold text-primary/12 animate-crypto-float-3">◆</div>
          <div className="absolute top-1/2 right-10 text-6xl font-bold text-primary/10 animate-crypto-float-4">₹</div>
          <div className="absolute bottom-20 right-1/3 text-5xl font-bold text-primary/15 animate-crypto-float-5">₽</div>
          
          {/* Glowing orbs with parallax effect */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow-delayed" />
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/8 rounded-full blur-2xl animate-float-slower" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-7xl py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
                  Professional Trading Platform
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Follow The Path</span>
                  <span className="block">of Elite</span>
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Trading Legends
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Access institutional-grade trading tools with real-time market data. Trade cryptocurrencies, forex, and commodities 24/7 with confidence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center"
                >
                  Start Trading Now
                </Link>
                <Link
                  href="/markets"
                  className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center"
                >
                  Explore Markets
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-xs text-muted-foreground">Active Traders</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">$2.5B+</div>
                  <div className="text-xs text-muted-foreground">Daily Volume</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-xs text-muted-foreground">Trading Pairs</div>
                </div>
              </div>
            </div>

            {/* Right Column - TradingView Ticker */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 h-full flex items-center">
              <div className="relative w-full">
                {/* Glass card container */}
                <div className="bg-card/40 border border-primary/30 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
                  <div className="p-6 border-b border-border/50 flex items-center justify-between">
                    <h2 className="text-lg font-bold">Live Market Ticker</h2>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                  
                  <div className="p-6">
                    <TradingViewTicker />
                  </div>
                </div>

                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/50 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-primary">Elite</span>BlockMarket?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade trading platform designed for serious traders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 group">
              <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Ultra-Fast Execution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Real-time market data with sub-millisecond order execution. Trade with confidence knowing your orders are processed instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 group">
              <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Level Security</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Military-grade encryption and multi-signature wallets protect your assets 24/7. Your security is our top priority.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 group">
              <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Professional charting tools, technical indicators, and AI-powered market insights at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Highlights Section */}
      <section className="border-t border-border/50 py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Market <span className="text-primary">Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Market News 1 */}
            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="text-3xl">📈</div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold">Bitcoin Crosses Major Milestone</h3>
                  <p className="text-sm text-muted-foreground">
                    BTC reaches new all-time high as institutional adoption accelerates globally.
                  </p>
                  <p className="text-xs text-primary font-semibold pt-2">Updated 2 hours ago</p>
                </div>
              </div>
            </div>

            {/* Market News 2 */}
            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="text-3xl">💱</div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold">EUR/USD Shows Volatility</h3>
                  <p className="text-sm text-muted-foreground">
                    Forex markets react to latest ECB policy signals and economic data.
                  </p>
                  <p className="text-xs text-primary font-semibold pt-2">Updated 1 hour ago</p>
                </div>
              </div>
            </div>

            {/* Market News 3 */}
            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="text-3xl">🌐</div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold">Ethereum Ecosystem Expands</h3>
                  <p className="text-sm text-muted-foreground">
                    New partnerships and layer-2 solutions drive record trading volumes.
                  </p>
                  <p className="text-xs text-primary font-semibold pt-2">Updated 3 hours ago</p>
                </div>
              </div>
            </div>

            {/* Market News 4 */}
            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex gap-4">
                <div className="text-3xl">💰</div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold">Gold Prices Surge Higher</h3>
                  <p className="text-sm text-muted-foreground">
                    Commodity markets respond to shifting economic outlook and geopolitical tensions.
                  </p>
                  <p className="text-xs text-primary font-semibold pt-2">Updated 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of successful traders on EliteBlockMarket today
            </p>
          </div>

          <Link
            href="/login"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Start Trading Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 bg-card/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">
                <span className="text-primary">Elite</span>BlockMarket
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional trading platform for modern investors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/markets" className="hover:text-primary transition-colors">Markets</Link></li>
                <li><Link href="/trade" className="hover:text-primary transition-colors">Trading</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 EliteBlockMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Advanced 3D Crypto Animations */}
      <style>{`
        @keyframes crypto-float-1 {
          0%, 100% {
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-40px) translateX(30px) rotateZ(15deg) scale(1.1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-80px) translateX(-20px) rotateZ(30deg) scale(0.9);
            opacity: 0.25;
          }
          75% {
            transform: translateY(-40px) translateX(40px) rotateZ(15deg) scale(1.05);
            opacity: 0.2;
          }
        }

        @keyframes crypto-float-2 {
          0%, 100% {
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-50px) translateX(-35px) rotateZ(-20deg) scale(1.15);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-100px) translateX(25px) rotateZ(-40deg) scale(0.85);
            opacity: 0.2;
          }
          75% {
            transform: translateY(-50px) translateX(-40px) rotateZ(-20deg) scale(1.1);
            opacity: 0.15;
          }
        }

        @keyframes crypto-float-3 {
          0%, 100% {
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0.12;
          }
          25% {
            transform: translateY(-35px) translateX(25px) rotateZ(25deg) scale(1.08);
            opacity: 0.18;
          }
          50% {
            transform: translateY(-70px) translateX(-30px) rotateZ(50deg) scale(0.92);
            opacity: 0.22;
          }
          75% {
            transform: translateY(-35px) translateX(30px) rotateZ(25deg) scale(1.05);
            opacity: 0.18;
          }
        }

        @keyframes crypto-float-4 {
          0%, 100% {
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-45px) translateX(-30px) rotateZ(-15deg) scale(1.12);
            opacity: 0.16;
          }
          50% {
            transform: translateY(-90px) translateX(35px) rotateZ(-30deg) scale(0.88);
            opacity: 0.21;
          }
          75% {
            transform: translateY(-45px) translateX(-35px) rotateZ(-15deg) scale(1.08);
            opacity: 0.16;
          }
        }

        @keyframes crypto-float-5 {
          0%, 100% {
            transform: translateY(0) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0.15;
          }
          25% {
            transform: translateY(-40px) translateX(35px) rotateZ(20deg) scale(1.1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-75px) translateX(-25px) rotateZ(40deg) scale(0.9);
            opacity: 0.25;
          }
          75% {
            transform: translateY(-40px) translateX(40px) rotateZ(20deg) scale(1.05);
            opacity: 0.2;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translate(50px, -50px) scale(1.05);
            opacity: 0.15;
          }
        }

        @keyframes float-slow-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translate(-50px, 50px) scale(0.95);
            opacity: 0.1;
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
          50% {
            transform: translate(30px, -30px) scale(1.02);
            opacity: 0.12;
          }
        }

        .animate-crypto-float-1 {
          animation: crypto-float-1 8s ease-in-out infinite;
        }

        .animate-crypto-float-2 {
          animation: crypto-float-2 10s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-crypto-float-3 {
          animation: crypto-float-3 9s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-crypto-float-4 {
          animation: crypto-float-4 11s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-crypto-float-5 {
          animation: crypto-float-5 10.5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 18s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
          animation-delay: 1s;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-crypto-float-1,
          .animate-crypto-float-2,
          .animate-crypto-float-3,
          .animate-crypto-float-4,
          .animate-crypto-float-5,
          .animate-float-slow,
          .animate-float-slow-delayed,
          .animate-float-slower {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}
