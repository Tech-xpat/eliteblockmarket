'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="text-2xl font-bold">
            <span className="text-primary">Elite</span>BlockMarket
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/markets" className="text-sm hover:text-primary transition-colors">
              Markets
            </Link>
            <Link href="/trade" className="text-sm hover:text-primary transition-colors">
              Trade
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section with Tech Node Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-card/10 to-background">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated nodes */}
        <canvas id="nodeCanvas" className="absolute inset-0 w-full h-full opacity-30" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/50 z-5" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 max-w-5xl">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Follow The Path of</span>
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-black">
                  Elite Trading Legends
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Trade crypto, forex, and commodities with real-time data. Access institutional-grade tools with a community of professional traders.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/trade"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Start Trading Now
              </Link>
              <Link
                href="/markets"
                className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                View All Markets
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border/30">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground mt-2">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">$2.5B+</div>
                <div className="text-sm text-muted-foreground mt-2">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-2">Market Access</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-primary/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">Elite</span>BlockMarket?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional trading platform with institutional-grade features and retail accessibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Real-time market data from CoinGecko and premium forex feeds with sub-second latency.
              </p>
            </div>

            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Secure & Regulated</h3>
              <p className="text-muted-foreground">
                Bank-level security with multi-signature wallets and compliance with international regulations.
              </p>
            </div>

            <div className="p-8 border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/30 backdrop-blur-sm">
              <div className="text-4xl font-bold text-primary mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Professional charting tools with technical indicators and AI-powered market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market News Section */}
      <section className="relative py-20 md:py-32 bg-card/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Live Market <span className="text-primary">News</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📈</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Bitcoin ETF Approval Drives Adoption</h3>
                  <p className="text-sm text-muted-foreground">
                    Institutional investors increase allocation to Bitcoin following recent regulatory approvals globally.
                  </p>
                  <p className="text-xs text-primary mt-3">Updated 2 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💱</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">EUR/USD Volatile on Central Bank Signals</h3>
                  <p className="text-sm text-muted-foreground">
                    Forex markets react to latest ECB and Federal Reserve policy hints. Watch key resistance levels.
                  </p>
                  <p className="text-xs text-primary mt-3">Updated 1 hour ago</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⛽</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Oil Prices Hit 6-Month High on Geopolitical Tensions</h3>
                  <p className="text-sm text-muted-foreground">
                    WTI crude crosses $85 per barrel as supply concerns mount in key producing regions.
                  </p>
                  <p className="text-xs text-primary mt-3">Updated 3 hours ago</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-border/50 rounded-lg bg-background/40 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏆</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Solana Ecosystem Growth Accelerates</h3>
                  <p className="text-sm text-muted-foreground">
                    New partnerships and reduced fees boost trading volume on Solana network by 35% this month.
                  </p>
                  <p className="text-xs text-primary mt-3">Updated 4 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Elite Traders?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access professional trading tools, real-time market data, and join a community of successful traders.
          </p>
          <Link
            href="/trade"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground text-sm">
          <p className="mb-4">
            <span className="text-primary font-bold">EliteBlockMarket</span> - Professional Trading Platform
          </p>
          <p>© 2026 EliteBlockMarket. All rights reserved.</p>
        </div>
      </footer>

      {/* Canvas animation for tech nodes */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const canvas = document.getElementById('nodeCanvas');
          if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const nodes = [];
            for (let i = 0; i < 15; i++) {
              nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.3,
                radius: 3 + Math.random() * 2,
              });
            }
            
            function animate() {
              ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                
                if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
                  node.vx *= -0.8;
                  node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
                }
                if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
                  node.vy *= -0.8;
                  node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
                }
                
                node.vx *= 0.999;
                node.vy *= 0.999;
                
                ctx.fillStyle = 'rgba(212, 175, 55, 0.4)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
              });
              
              for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                  const dx = nodes[i].x - nodes[j].x;
                  const dy = nodes[i].y - nodes[j].y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  
                  if (distance < 200) {
                    ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                  }
                }
              }
              
              requestAnimationFrame(animate);
            }
            
            animate();
            
            window.addEventListener('resize', () => {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            });
          }
        `
      }} />
    </main>
  );
}
