'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TradingViewAdvancedChart, TradingViewMarketOverview, TradingViewEconomicCalendar } from '@/components/tradingview-widgets';

interface TradingPair {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

export default function TradePage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedPair, setSelectedPair] = useState<TradingPair | null>(null);
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [tradingPairs, setTradingPairs] = useState<TradingPair[]>([]);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      // In a real app, this would check with your auth provider
      // For now, check if user has a session token in localStorage
      const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
      setIsAuthenticated(!!token);
      setLoading(false);

      if (!token) {
        // Redirect to login if not authenticated
        router.push('/login?redirect=/trade');
      }
    };

    checkAuth();
  }, [router]);

  // Fetch trading pairs from CoinGecko
  useEffect(() => {
    const fetchTradingPairs = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false'
        );
        const data = await response.json();
        const pairs: TradingPair[] = data.map((coin: any) => ({
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          price: coin.current_price,
          change24h: coin.price_change_percentage_24h,
        }));
        setTradingPairs(pairs);
        if (pairs.length > 0) {
          setSelectedPair(pairs[0]);
          setPrice(pairs[0].price.toString());
        }
      } catch (error) {
        console.log('[v0] Error fetching trading pairs:', error);
      }
    };

    if (isAuthenticated) {
      fetchTradingPairs();
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading trading dashboard...</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="text-center max-w-md space-y-6">
          <h1 className="text-4xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground text-lg">
            You must be logged in to access the trading platform.
          </p>
          <Link
            href="/login?redirect=/trade"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Sign In to Trade
          </Link>
        </div>
      </main>
    );
  }

  const handlePlaceOrder = () => {
    if (!amount || !price) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Order placed:', { orderType, pair: selectedPair, amount, price });
    alert(`${orderType.toUpperCase()} order placed for ${amount} ${selectedPair?.symbol}`);
  };

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
            <Link href="/trade" className="text-sm text-primary font-semibold">
              Trade
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem('auth_token');
              router.push('/');
            }}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Trading Dashboard */}
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Market Data */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chart Area - TradingView */}
            <div className="border border-border/50 rounded-lg overflow-hidden bg-card/30">
              <div className="p-4 border-b border-border/50">
                <h2 className="text-xl font-bold">Live Market Chart</h2>
              </div>
              {selectedPair && (
                <TradingViewAdvancedChart symbol={selectedPair.symbol === 'BTC' ? 'BITSTAMP:BTCUSD' : selectedPair.symbol === 'ETH' ? 'BITSTAMP:ETHUSD' : 'BITSTAMP:BTCUSD'} />
              )}
            </div>

            {/* Trading Pairs */}
            <div className="border border-border/50 rounded-lg p-6 bg-card/30">
              <h3 className="font-bold mb-4">Select Trading Pair</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {tradingPairs.map((pair) => (
                  <button
                    key={pair.symbol}
                    onClick={() => {
                      setSelectedPair(pair);
                      setPrice(pair.price.toString());
                    }}
                    className={`p-3 rounded-lg border transition-all text-sm font-medium ${
                      selectedPair?.symbol === pair.symbol
                        ? 'border-primary bg-primary/20 text-primary'
                        : 'border-border/50 bg-background/50 hover:border-primary/50'
                    }`}
                  >
                    <div>{pair.symbol}</div>
                    <div className={`text-xs ${pair.change24h >= 0 ? 'text-chart-2' : 'text-chart-4'}`}>
                      {pair.change24h >= 0 ? '+' : ''}{pair.change24h.toFixed(2)}%
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Order Form */}
          <div className="space-y-6">
            {/* Current Price */}
            {selectedPair && (
              <div className="border border-border/50 rounded-lg p-6 bg-card/30">
                <div className="text-muted-foreground text-sm mb-2">Current Price</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  ${selectedPair.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </div>
                <div className={`text-sm font-semibold ${selectedPair.change24h >= 0 ? 'text-chart-2' : 'text-chart-4'}`}>
                  {selectedPair.change24h >= 0 ? '+' : ''}{selectedPair.change24h.toFixed(2)}% (24h)
                </div>
              </div>
            )}

            {/* Order Form */}
            <div className="border border-border/50 rounded-lg p-6 bg-card/30 space-y-4">
              <h3 className="font-bold">Place Order</h3>

              {/* Order Type */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`py-2 rounded-lg font-semibold transition-colors ${
                    orderType === 'buy'
                      ? 'bg-chart-2 text-background'
                      : 'border border-border/50 hover:border-chart-2/50'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`py-2 rounded-lg font-semibold transition-colors ${
                    orderType === 'sell'
                      ? 'bg-chart-4 text-background'
                      : 'border border-border/50 hover:border-chart-4/50'
                  }`}
                >
                  Sell
                </button>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Price Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Total */}
              {amount && price && (
                <div className="pt-3 border-t border-border/30 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total:</span>
                    <span className="font-bold">${(parseFloat(amount) * parseFloat(price)).toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                  </div>
                </div>
              )}

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${
                  orderType === 'buy'
                    ? 'bg-chart-2 hover:bg-chart-2/90'
                    : 'bg-chart-4 hover:bg-chart-4/90'
                }`}
              >
                {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedPair?.symbol}
              </button>
            </div>

            {/* Risk Warning */}
            <div className="p-4 rounded-lg bg-chart-4/10 border border-chart-4/50 text-sm text-chart-4">
              Trading carries risk. Never invest more than you can afford to lose.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
