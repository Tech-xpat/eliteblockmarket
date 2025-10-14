"use client"

import { useState } from "react"
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
              <Link href="/trade" className="text-gray-300 hover:text-white transition-colors block py-2">
                Trade
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white font-semibold transition-colors block py-2">
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

const stats = [
  { value: "2M+", label: "Active Traders" },
  { value: "$50B+", label: "Trading Volume" },
  { value: "150+", label: "Countries" },
  { value: "10+", label: "Years Experience" },
]

const values = [
  {
    icon: "🎯",
    title: "Customer First",
    description: "We put our traders at the center of everything we do, ensuring the best trading experience.",
  },
  {
    icon: "🔒",
    title: "Security & Trust",
    description: "Your funds and data are protected with bank-level security and regulatory compliance.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "We continuously improve our platform with cutting-edge technology and features.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    description: "Clear pricing, no hidden fees, and honest communication with our community.",
  },
]

const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://placehold.co/200x200/3B82F6/FFFFFF?text=JA",
    bio: "20+ years in financial markets and fintech",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    image: "https://placehold.co/200x200/10B981/FFFFFF?text=SC",
    bio: "Former lead engineer at major trading platforms",
  },
  {
    name: "Michael Roberts",
    role: "Head of Trading",
    image: "https://placehold.co/200x200/F59E0B/FFFFFF?text=MR",
    bio: "15+ years as institutional trader",
  },
  {
    name: "Emily Watson",
    role: "Chief Compliance Officer",
    image: "https://placehold.co/200x200/8B5CF6/FFFFFF?text=EW",
    bio: "Expert in financial regulation and compliance",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About UltimateStckTrader</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to democratize trading and make financial markets accessible to everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Our Story</h2>
            <div className="max-w-4xl mx-auto mb-8">
              <img
                src="/images/design-mode/download-1.jpg"
                alt="Our Story"
                className="rounded-lg shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="max-w-4xl mx-auto text-gray-300 space-y-6 text-lg leading-relaxed">
              <p>
                Founded in 2015, UltimateStckTrader was born from a simple idea: trading should be accessible,
                transparent, and empowering for everyone. Our founders, experienced traders and technologists, saw an
                industry dominated by complex platforms, hidden fees, and barriers to entry.
              </p>
              <p>
                We set out to change that. Starting with a small team of passionate individuals, we built a platform
                that combines institutional-grade technology with user-friendly design. Today, we serve over 2 million
                traders across 150 countries, processing billions in trading volume every month.
              </p>
              <p>
                Our journey has been marked by continuous innovation - from introducing zero-commission trading to
                pioneering mobile-first trading experiences. But our core mission remains unchanged: to empower traders
                with the tools, education, and support they need to succeed in the financial markets.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-slate-900 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400 text-center mb-12">
              Experienced professionals dedicated to your trading success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Info */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Regulated & Secure</h2>
            <p className="text-gray-300 text-lg mb-8">
              UltimateStckTrader is regulated by leading financial authorities worldwide. We maintain the highest
              standards of security, compliance, and operational excellence to protect your funds and ensure fair
              trading conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-gray-400">
                <p className="font-semibold text-white mb-2">Licensed & Regulated</p>
                <p>FCA, CySEC, ASIC</p>
              </div>
              <div className="text-gray-400">
                <p className="font-semibold text-white mb-2">Segregated Accounts</p>
                <p>Tier-1 Banks</p>
              </div>
              <div className="text-gray-400">
                <p className="font-semibold text-white mb-2">Investor Protection</p>
                <p>Up to $100,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-white/90 text-lg mb-8">Be part of the trading revolution</p>
            <Button
              onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Trading Today
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
