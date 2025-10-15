"use client"

import type React from "react"

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12m-7 6h7" />
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
              <Link href="/contact" className="text-white font-semibold transition-colors block py-2">
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

const contactMethods = [
  {
    icon: "📧",
    title: "Email Us",
    details: "support@ultimatestcktrader.online",
    description: "Send us an email anytime",
  },
  {
    icon: "📞",
    title: "Call Us",
    details: "+27 71 540 3179",
    description: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: "💬",
    title: "Live Chat",
    details: "Available 24/7",
    description: "Get instant support",
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: "123 Wall Street, New York, NY 10005",
    description: "Our headquarters",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{method.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-orange-500 font-semibold mb-2">{method.details}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us A Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2 font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-orange-500 focus:outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2 font-semibold">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-orange-500 focus:outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2 font-semibold">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-orange-500 focus:outline-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="account">Account Issues</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-white mb-2 font-semibold">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-orange-500 focus:outline-none resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Global Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">New York (HQ)</h3>
                  <p className="text-gray-400">123 Wall Street</p>
                  <p className="text-gray-400">New York, NY 10005</p>
                  <p className="text-gray-400 mt-2">United States</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">London</h3>
                  <p className="text-gray-400">45 Canary Wharf</p>
                  <p className="text-gray-400">London E14 5AB</p>
                  <p className="text-gray-400 mt-2">United Kingdom</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Singapore</h3>
                  <p className="text-gray-400">1 Raffles Place</p>
                  <p className="text-gray-400">Singapore 048616</p>
                  <p className="text-gray-400 mt-2">Singapore</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
            <p className="text-white/90 text-lg mb-8">Open your account in minutes</p>
            <Button
              onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            >
              Create Free Account
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
