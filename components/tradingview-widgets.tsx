'use client';

import { useEffect } from 'react';

// TradingView Ticker Tape Widget - Shows live crypto and stock prices
export function TradingViewTicker() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    const container = document.getElementById('tradingview-ticker');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="tradingview-ticker" className="w-full">
      <div className="tradingview-widget-container__widget"></div>
      <script type="text/plain" dangerouslySetInnerHTML={{
        __html: `{
          "symbols": [
            {
              "description": "Bitcoin",
              "proName": "BITSTAMP:BTCUSD"
            },
            {
              "description": "Ethereum",
              "proName": "BITSTAMP:ETHUSD"
            },
            {
              "description": "S&P 500",
              "proName": "FOREXCOM:SPXUSD"
            },
            {
              "description": "EUR/USD",
              "proName": "FX_IDC:EURUSD"
            },
            {
              "description": "Gold",
              "proName": "TVC:GOLD"
            },
            {
              "description": "Crude Oil",
              "proName": "TVC:CRUDE"
            }
          ],
          "showSymbolLogo": true,
          "colorTheme": "dark",
          "isTransparent": false,
          "displayMode": "adaptive",
          "locale": "en"
        }`
      }} />
    </div>
  );
}

// TradingView Market Overview Widget - Shows market data grid
export function TradingViewMarketOverview() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    const container = document.getElementById('tradingview-overview');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="tradingview-overview" className="w-full">
      <div className="tradingview-widget-container__widget"></div>
      <script type="text/plain" dangerouslySetInnerHTML={{
        __html: `{
          "colorTheme": "dark",
          "dateRange": "12M",
          "showChart": true,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "showFloatingTooltip": false,
          "width": "100%",
          "height": "100%",
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(239, 68, 68, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0.06)",
          "scaleFontColor": "rgba(120, 123, 134, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(239, 68, 68, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(239, 68, 68, 0)",
          "symbolActiveColor": "rgba(212, 175, 55, 0.06)"
        }`
      }} />
    </div>
  );
}

// TradingView Advanced Chart Widget - For trading dashboard
export function TradingViewAdvancedChart({ symbol = 'BITSTAMP:BTCUSD' }: { symbol?: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: 'rgba(10, 10, 10, 1)',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview-chart',
          studies: [
            'Volume@tv-basicstudies',
            'MACD@tv-basicstudies',
          ],
          show_popup_button_study: true,
          popup_width: '1000',
          popup_height: '650',
          custom_css_url: 'https://s3.tradingview.com/static/bundles/trading-view.css',
        });
      }
    };

    const container = document.getElementById('tradingview-chart');
    if (container && !container.querySelector('script')) {
      container.appendChild(script);
    }
  }, [symbol]);

  return (
    <div 
      id="tradingview-chart" 
      className="w-full min-h-[600px] rounded-lg overflow-hidden border border-border/50"
      style={{ height: '600px' }}
    />
  );
}

// TradingView Crypto Coins Heatmap
export function TradingViewCryptoHeatmap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js';
    script.async = true;
    const container = document.getElementById('tradingview-heatmap');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="tradingview-heatmap" className="w-full">
      <div className="tradingview-widget-container__widget"></div>
      <script type="text/plain" dangerouslySetInnerHTML={{
        __html: `{
          "dataSource": "Crypto",
          "blockSize": 30,
          "blockColor": "#1f2937",
          "textColor": "#d1d5db",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": true,
          "isDataTypeEnabled": true,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "isMonoColoredList": false,
          "fieldsColor": "#787b86",
          "width": "100%",
          "height": "400"
        }`
      }} />
    </div>
  );
}

// TradingView Economic Calendar
export function TradingViewEconomicCalendar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    const container = document.getElementById('tradingview-calendar');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="tradingview-calendar" className="w-full">
      <div className="tradingview-widget-container__widget"></div>
      <script type="text/plain" dangerouslySetInnerHTML={{
        __html: `{
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "importanceFilter": "-1,0,1"
        }`
      }} />
    </div>
  );
}

// TradingView Mini Chart
export function TradingViewMiniChart({ symbol = 'BITSTAMP:BTCUSD', displayName = 'Bitcoin' }: { symbol?: string; displayName?: string }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    const container = document.getElementById(`tradingview-mini-${symbol.replace(':', '-')}`);
    if (container) {
      container.appendChild(script);
    }
  }, [symbol]);

  return (
    <div id={`tradingview-mini-${symbol.replace(':', '-')}`} className="w-full">
      <div className="tradingview-widget-container__widget"></div>
      <script type="text/plain" dangerouslySetInnerHTML={{
        __html: `{
          "symbol": "${symbol}",
          "width": "100%",
          "locale": "en",
          "colorTheme": "dark",
          "isTransparent": false,
          "autosize": true
        }`
      }} />
    </div>
  );
}
