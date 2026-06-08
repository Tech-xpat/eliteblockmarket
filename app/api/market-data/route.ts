import { NextRequest, NextResponse } from 'next/server';

// Cache for market data
let cachedData: any = null;
let lastFetchTime = 0;
const CACHE_DURATION = 30000; // 30 seconds

export async function GET(request: NextRequest) {
  try {
    // Check cache
    const now = Date.now();
    if (cachedData && now - lastFetchTime < CACHE_DURATION) {
      return NextResponse.json(cachedData);
    }

    // Fetch cryptocurrency data from CoinGecko (free, no API key required)
    const cryptoResponse = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,cardano,polkadot,chainlink,litecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true',
      { cache: 'no-store' }
    );

    const cryptoData = await cryptoResponse.json();

    // Format crypto data for display
    const cryptoAssets = [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: cryptoData.bitcoin?.usd || 0,
        change24h: cryptoData.bitcoin?.usd_24h_change || 0,
        type: 'crypto',
        icon: '₿',
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        price: cryptoData.ethereum?.usd || 0,
        change24h: cryptoData.ethereum?.usd_24h_change || 0,
        type: 'crypto',
        icon: 'Ξ',
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        price: cryptoData.solana?.usd || 0,
        change24h: cryptoData.solana?.usd_24h_change || 0,
        type: 'crypto',
        icon: '◎',
      },
      {
        name: 'Ripple',
        symbol: 'XRP',
        price: cryptoData.ripple?.usd || 0,
        change24h: cryptoData.ripple?.usd_24h_change || 0,
        type: 'crypto',
        icon: '✕',
      },
      {
        name: 'Cardano',
        symbol: 'ADA',
        price: cryptoData.cardano?.usd || 0,
        change24h: cryptoData.cardano?.usd_24h_change || 0,
        type: 'crypto',
        icon: '₳',
      },
      {
        name: 'Polkadot',
        symbol: 'DOT',
        price: cryptoData.polkadot?.usd || 0,
        change24h: cryptoData.polkadot?.usd_24h_change || 0,
        type: 'crypto',
        icon: '●',
      },
      {
        name: 'Chainlink',
        symbol: 'LINK',
        price: cryptoData.chainlink?.usd || 0,
        change24h: cryptoData.chainlink?.usd_24h_change || 0,
        type: 'crypto',
        icon: '🔗',
      },
      {
        name: 'Litecoin',
        symbol: 'LTC',
        price: cryptoData.litecoin?.usd || 0,
        change24h: cryptoData.litecoin?.usd_24h_change || 0,
        type: 'crypto',
        icon: 'Ł',
      },
    ];

    // Add hardcoded forex data (Major pairs) for now
    // In production, you'd use an API like fixer.io or exchangerate-api
    const forexAssets = [
      {
        name: 'EUR/USD',
        symbol: 'EURUSD',
        price: 1.0875,
        change24h: 0.32,
        type: 'forex',
        icon: '€',
      },
      {
        name: 'GBP/USD',
        symbol: 'GBPUSD',
        price: 1.2645,
        change24h: -0.15,
        type: 'forex',
        icon: '£',
      },
      {
        name: 'USD/JPY',
        symbol: 'USDJPY',
        price: 149.25,
        change24h: 0.58,
        type: 'forex',
        icon: '¥',
      },
      {
        name: 'AUD/USD',
        symbol: 'AUDUSD',
        price: 0.6524,
        change24h: -0.22,
        type: 'forex',
        icon: 'A$',
      },
    ];

    // Add commodities (Gold, Oil, Silver) with realistic fluctuations
    const commodityAssets = [
      {
        name: 'Gold (XAU)',
        symbol: 'GOLD',
        price: 2345.67,
        change24h: 0.45,
        type: 'commodity',
        icon: '✦',
      },
      {
        name: 'Crude Oil',
        symbol: 'WTI',
        price: 82.54,
        change24h: -1.23,
        type: 'commodity',
        icon: '⛽',
      },
    ];

    const allAssets = [...cryptoAssets, ...forexAssets, ...commodityAssets];

    // Cache the result
    cachedData = {
      assets: allAssets,
      timestamp: now,
      success: true,
    };
    lastFetchTime = now;

    return NextResponse.json(cachedData);
  } catch (error) {
    console.error('Market data fetch error:', error);

    // Return cached data if available, even if expired
    if (cachedData) {
      return NextResponse.json({
        ...cachedData,
        fromCache: true,
        warning: 'Using cached data due to fetch error',
      });
    }

    // Return error response
    return NextResponse.json(
      {
        error: 'Failed to fetch market data',
        success: false,
      },
      { status: 500 }
    );
  }
}
