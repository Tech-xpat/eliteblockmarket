'use client';

import Link from 'next/link';
import { TradingViewMarketOverview } from '@/components/tradingview-widgets';

export default function MarketsPage() {
  const markets = [
    { symbol: 'BTC', name: 'Bitcoin', price: 67100, change: 2.45 },
    { symbol: 'ETH', name: 'Ethereum', price: 3512, change: -1.23 },
    { symbol: 'SOL', name: 'Solana', price: 168.80, change: 5.12 },
    { symbol: 'XRP', name: 'XRP', price: 0.5214, change: 3.87 },
    { symbol: 'ADA', name: 'Cardano', price: 0.9876, change: 1.56 },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.1589, change: -0.78 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">Elite</span>BlockMarket
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/markets" className="text-sm hover:text-primary transition-colors font-semibold">
              Markets
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Link
            href="/login"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Trading Now
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <section className="border-b border-border/50 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold mb-4">
            Live Crypto <span className="text-primary">Markets</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time market data with comprehensive trading analytics
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 border-b border-border/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Market Overview</h2>
          <TradingViewMarketOverview />
        </div>
      </section>

      {/* Markets Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-8">Top Markets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market) => (
              <div
                key={market.symbol}
                className="p-6 border border-border/50 rounded-lg bg-card/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{market.symbol}</h3>
                    <p className="text-sm text-muted-foreground">{market.name}</p>
                  </div>
                  <div
                    className={`text-xl font-bold ${
                      market.change >= 0 ? 'text-chart-2' : 'text-chart-4'
                    }`}
                  >
                    {market.change >= 0 ? '↑' : '↓'} {Math.abs(market.change).toFixed(2)}%
                  </div>
                </div>

                <div className="text-3xl font-bold mb-4">
                  ${market.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </div>

                <Link
                  href={`/trade?pair=${market.symbol}`}
                  className="block text-center py-2 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 transition-colors text-sm"
                >
                  Trade {market.symbol}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 bg-card/20">
        <div className="container mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>© 2026 EliteBlockMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
