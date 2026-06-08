'use client';

import { useEffect, useState } from 'react';

interface Asset {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  type: string;
  icon: string;
}

export function MarketTicker() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch('/api/market-data');
        const data = await response.json();
        if (data.assets) {
          setAssets(data.assets);
        }
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();

    // Refresh data every 30 seconds
    const interval = setInterval(fetchMarketData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="h-20 bg-card/50 rounded-lg animate-pulse border border-border/50" />
    );
  }

  if (assets.length === 0) {
    return null;
  }

  // Duplicate assets for continuous scrolling effect
  const extendedAssets = [...assets, ...assets];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-background via-card/30 to-background border-y border-border/50">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="flex animate-scroll py-4 gap-6 px-4">
        {extendedAssets.map((asset, index) => (
          <div
            key={`${asset.symbol}-${index}`}
            className="flex-shrink-0 flex items-center gap-3 px-4 py-2 rounded-lg border border-border/30 hover:border-primary/50 transition-colors duration-300 bg-card/20 backdrop-blur-sm min-w-fit"
          >
            {/* Icon */}
            <div className="text-xl font-bold text-primary/80 min-w-[24px] text-center">
              {asset.icon}
            </div>

            {/* Asset Info */}
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                {asset.symbol}
              </span>
              <span className="text-sm font-semibold text-foreground">
                ${asset.price.toLocaleString('en-US', {
                  minimumFractionDigits: asset.type === 'crypto' ? 2 : 0,
                  maximumFractionDigits: asset.type === 'crypto' ? 2 : 2,
                })}
              </span>
            </div>

            {/* Change indicator */}
            <div
              className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                asset.change24h >= 0
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
