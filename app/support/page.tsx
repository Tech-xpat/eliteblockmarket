"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-white font-semibold transition-colors block py-2">
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

const supportOptions = [
  {
    icon: "💬",
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    action: "Start Chat",
  },
  {
    icon: "📧",
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 24h",
    action: "Send Email",
  },
  {
    icon: "📞",
    title: "Phone Support",
    description: "Call us at +27 71 540 3179",
    availability: "Mon-Fri, 9AM-6PM EST",
    action: "Call Now",
  },
  {
    icon: "📚",
    title: "Help Center",
    description: "Browse our knowledge base",
    availability: "Always available",
    action: "Visit Help Center",
  },
]

const faqs = [
  {
    question: "How do I deposit funds into my account?",
    answer:
      "You can deposit funds through multiple methods: bank transfer, credit/debit card, or cryptocurrency. Log into your account, go to the 'Deposit' section, select your preferred method, and follow the instructions. Most deposits are processed instantly, though bank transfers may take 1-3 business days.",
  },
  {
    question: "What are the trading hours?",
    answer:
      "Trading hours vary by market. Forex markets are open 24/5 from Sunday 5 PM EST to Friday 5 PM EST. Stock markets follow their respective exchange hours (e.g., NYSE: 9:30 AM - 4 PM EST). Cryptocurrency markets are available 24/7.",
  },
  {
    question: "How do I withdraw my profits?",
    answer:
      "To withdraw funds, log into your account and navigate to the 'Withdrawal' section. Select your preferred withdrawal method and enter the amount. Withdrawals are typically processed within 1-3 business days, depending on the method chosen. Note that you may need to verify your identity before your first withdrawal.",
  },
  {
    question: "What is the minimum deposit amount?",
    answer:
      "The minimum deposit varies by account type. Standard accounts require a minimum deposit of $100, while Pro accounts require $10,000. Demo accounts are free and don't require any deposit.",
  },
  {
    question: "Are there any trading fees?",
    answer:
      "We offer competitive pricing with transparent fees. There are no deposit or withdrawal fees. Trading fees vary by instrument and account type, typically charged as spreads or commissions. Check our pricing page for detailed information on fees for specific instruments.",
  },
  {
    question: "How secure is my money?",
    answer:
      "Your funds are held in segregated accounts with tier-1 banks, separate from our operational funds. We use bank-level 256-bit encryption, two-factor authentication, and are regulated by major financial authorities. Client funds are also protected by investor compensation schemes up to $100,000.",
  },
  {
    question: "Can I use automated trading bots?",
    answer:
      "Yes, our platform supports automated trading through Expert Advisors (EAs) and trading bots. You can use popular platforms like MetaTrader 4/5 or develop your own strategies using our API. Make sure to test your bots thoroughly on a demo account before using them with real funds.",
  },
  {
    question: "What educational resources do you offer?",
    answer:
      "We provide comprehensive educational resources including video tutorials, webinars, trading guides, market analysis, and a demo account for practice. Our education center covers everything from basic trading concepts to advanced strategies for experienced traders.",
  },
]

export default function SupportPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">How Can We Help You?</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our dedicated support team is here 24/7 to assist you with any questions or issues.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 rounded-full bg-slate-800 text-white border border-slate-700 focus:border-orange-500 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-gray-400 mb-2">{option.description}</p>
                    <p className="text-sm text-orange-500 mb-4">{option.availability}</p>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">{option.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-center mb-12">Find quick answers to common questions</p>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-900 border border-slate-700 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-white hover:text-orange-500 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Popular Help Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Getting Started</h3>
                  <p className="text-gray-400 text-sm">Learn how to open an account and start trading</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Deposits & Withdrawals</h3>
                  <p className="text-gray-400 text-sm">Manage your funds and payment methods</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Platform Guide</h3>
                  <p className="text-gray-400 text-sm">Master our trading platform features</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Account Verification</h3>
                  <p className="text-gray-400 text-sm">Complete your KYC verification process</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Trading Strategies</h3>
                  <p className="text-gray-400 text-sm">Learn effective trading techniques</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Security & Safety</h3>
                  <p className="text-gray-400 text-sm">Protect your account and funds</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 to-yellow-500 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-white/90 text-lg mb-8">Our support team is ready to assist you</p>
            <Button
              onClick={() => (window.location.href = "https://ultimatestcktrader.online")}
              className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg"
            >
              Contact Support
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
