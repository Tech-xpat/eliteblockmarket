'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CryptoData {
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
}

export default function Home() {
  const router = useRouter();
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch real crypto data from CoinGecko
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.log('[v0] Error fetching crypto data:', error);
        // Fallback data
        setCryptoData([
          { symbol: 'btc', name: 'Bitcoin', current_price: 67500, price_change_percentage_24h: 2.45, market_cap_rank: 1 },
          { symbol: 'eth', name: 'Ethereum', current_price: 3520, price_change_percentage_24h: -1.23, market_cap_rank: 2 },
          { symbol: 'bnb', name: 'BNB', current_price: 612, price_change_percentage_24h: 1.87, market_cap_rank: 3 },
          { symbol: 'xrp', name: 'XRP', current_price: 0.52, price_change_percentage_24h: 3.21, market_cap_rank: 4 },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

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

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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

            {/* Right Column - API Display Container */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative">
                {/* Glass card container */}
                <div className="bg-card/40 border border-primary/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">Live Market Data</h2>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    </div>

                    {/* Market ticker */}
                    <div className="space-y-3">
                      {loading ? (
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-12 bg-muted/20 rounded-lg animate-pulse" />
                          ))}
                        </div>
                      ) : (
                        cryptoData.slice(0, 4).map((coin) => (
                          <div
                            key={coin.symbol}
                            className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group cursor-pointer"
                          >
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{coin.name}</div>
                              <div className="text-xs text-muted-foreground">
                                #{coin.market_cap_rank}
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="font-bold text-sm">
                                ${coin.current_price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                              </div>
                              <div
                                className={`text-xs font-semibold ${
                                  coin.price_change_percentage_24h >= 0
                                    ? 'text-chart-2'
                                    : 'text-chart-4'
                                }`}
                              >
                                {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                                {coin.price_change_percentage_24h.toFixed(2)}%
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Footer button */}
                    <Link
                      href="/markets"
                      className="block text-center py-3 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 transition-colors text-sm"
                    >
                      View All Markets
                    </Link>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-2xl pointer-events-none" />
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
    </main>
  );
}
