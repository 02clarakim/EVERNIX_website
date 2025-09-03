'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";


export default function FAQ() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null); // First question expanded by default
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const generalFaqItems = [
    {
      question: "What is EVERNIX?",
      answer: "EVERNIX is an always-on, tech-native decision pathway that turns messy inputs into clear, explainable recommendations you can audit and control. Powered by a multi-agent engine and your guardrails, the platform is multi-vertical by design, with new domains added over time."
    },
    {
      question: "Who is EVERNIX for?",
      answer: "Anyone who wants disciplined, transparent decision-support without spending hours on research, beginners and busy professionals alike. If you value plain-English reasoning, adjustable constraints, and full user control, EVERNIX is built for you."
    },
    {
      question: "Is EVERNIX live?",
      answer: "We’re actively building the platform. The first vertical, EVERNIX Investment, is in development with early access rolling out in waves. Join the waitlist on our site to be notified as we expand."
    },
    {
      question: "What do you mean by a \"multi-agent\" system?",
      answer: "Multiple specialized AI agents apply durable, domain-relevant playbooks from complementary angles, debate and stress-test each other’s outputs, then synthesize a consensus. Each recommendation carries a confidence score, key trade-offs, and assumptions, validated against your guardrails before it reaches you."
    },
    {
      question: "Can I see why a recommendation is made?",
      answer: "Yes. Every recommendation includes a plain-English rationale, optional deep-dive detail (drivers, risks, alternatives), and source/provenance notes, with a trackable log, so you can see the why, not just the what."
    }
  ];

  const investmentFaqItems = [
    {
      question: "Do I have to be an experienced investor to use it?",
      answer: "No. EVERNIX Investment is beginner-friendly: plain-English explanations, risk tiers (Cautious / Balanced / Aggressive), and optional safeguards like loss-threshold alerts and a “pause recommendations” switch. You stay in control at all times."
    },
    {
      question: "Do I have to connect a brokerage account?",
      answer: "No. Access to research and recommendations does not require brokerage linking. If read-only connections or other integrations become available, they’ll be optional and clearly explained. EVERNIX does not place trades or take custody of assets."
    },
    {
      question: "What risk tiers are available?",
      answer: (
        <>
          Cautious: lower volatility orientation with tighter drawdown guardrails. <br />
          Balanced: moderate risk/return with diversified signals. <br />
          Aggressive: higher volatility tolerance aiming for higher long-term alpha. <br />
          You can also adjust constraints, such as cash buffer, sector or beta limits.
        </>
      )
    },
    {
      question: "Can I switch tiers later?",
      answer: "Yes, anytime. You can change tiers or fine-tune constraints; we log changes and refresh recommendations accordingly."
    },
    {
      question: "How do I join the beta?",
      answer: "Add your email to the waitlist on our site. We’re inviting U.S. users in waves and will share simple participation terms before access."
    },
    {
      question: "Are you registered as an investment adviser or broker?",
      answer: "We’re not making regulatory claims on this page. If registrations or approvals become applicable, we’ll update our Disclosures before offering any features that require them."
    },
    {
      question: "Anything else I should know?",
      answer: "All investing involves risk, including loss of principal. Backtests or simulations (if shown) are educational and not predictive. EVERNIX provides research and recommendations; final decisions and outcomes remain yours."
    }
  ];

  const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="5" x2="12" y2="19" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <line x1="5" y1="12" x2="19" y2="12" stroke="black" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  const MinusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <line x1="5" y1="12" x2="19" y2="12" stroke="black" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );

  return (
    <main className="min-h-screen bg-white">
      <div className="relative z-10">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-[74px] py-4 lg:py-[34px]">
            <div className="flex items-center gap-4 lg:gap-[25px]">
              <div className="w-[19px] h-[19px] bg-white rounded-full"></div>
              <span className="text-black font-bold text-sm lg:text-[16px] font-inter">EVERNIX</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[50px]">
              <Link href="/" className="text-black text-[16px] font-inter">
                Home
              </Link>

            {/* Products Dropdown (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="text-black text-[16px] font-inter flex items-center gap-2"
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      productsOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productsOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white/75 rounded-lg shadow-lg z-20">
                    <Link
                      href="/products/investment"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100/75 hover:rounded-lg font-inter"
                    >
                      Investment
                    </Link>
                    <Link
                      href="/products/legal"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100/75 hover: rounded-lg font-inter"
                    >
                      Legal
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-black text-[16px] font-inter">
                About Us
              </Link>
              <Link href="/faq" className="text-black text-[16px] font-inter font-bold">
                FAQ
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-[17px]">
              <button className="bg-white rounded-[30px] px-[20px] py-[10px] text-black font-bold text-[16px] font-inter">
                Log In
              </button>
              <button className="bg-[#001F3F] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-[16px] font-inter">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Slide-in Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed inset-0 bg-[#001F3F] text-white z-50 flex flex-col p-6"
                >
                  <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-6">
                    ✕
                  </button>
                  <nav className="flex flex-col space-y-4 text-lg">
                    <Link href="/">Home</Link>

                    {/* Mobile Products Dropdown */}
                    <div>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex justify-between items-center"
                      >
                        <span>Products</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform ${
                            mobileProductsOpen ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {mobileProductsOpen && (
                        <div className="mt-2 ml-4 flex flex-col space-y-3 text-base font-normal">
                          <Link href="/products/investment">Investment</Link>
                          <Link href="/products/legal">Legal</Link>
                        </div>
                      )}
                    </div>

                    <Link href="/about">About Us</Link>
                    <Link href="/faq" className="font-bold">FAQ</Link>
                  </nav>
                  <div className="mt-auto flex flex-col gap-3">
                    <button className="w-full bg-white text-black rounded-full px-6 py-3 font-bold">
                      Log In
                    </button>
                    <button className="w-full border border-white rounded-full px-6 py-3 font-bold">
                      Sign Up
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>

      {/* Main Content */}
      <div className="px-4 lg:px-0">
        <section className="min-h-screen">
          {/* Main Heading */}
          <div className="lg:ml-[128px] lg:mt-[40px] mt-8 mb-12 lg:mb-[55px]">
            <h1 className="text-black text-3xl lg:text-[64px] font-inter leading-normal max-w-[498px]">
              We Answer Your Questions
            </h1>
          </div>

          {/* FAQ Content */}
          <div className="max-w-[1440px] mx-auto">
              {/* General FAQ Section */}
              <div className="flex flex-col lg:flex-row lg:gap-[118px]">
                {/* Left Title */}
                <div className="lg:ml-[118px] mb-8 lg:mb-0 w-[250px]">
                  <h2 className="text-[#1D1D1F] text-[24px] font-bold font-inter">
                    General FAQ
                  </h2>
                </div>

                {/* Right Questions */}
                <div className="flex-1 lg:mr-[118px]">
                  {generalFaqItems.map((item, index) => (
                    <div key={`general-${index}`} className="mb-6 lg:mb-[24px]">
                      <div className="flex items-start lg:items-center justify-between mb-4 lg:mb-[16px] gap-4">
                          <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-medium leading-normal flex-1 pr-2">
                            {item.question}
                          </h3>
                          <button
                            onClick={() => toggleFaq(index)}
                            className="flex-shrink-0"
                          >
                            {expandedFaq === index ? <MinusIcon /> : <PlusIcon />}
                          </button>
                        </div>
                        {expandedFaq === index && item.answer && (
                          <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal max-w-full lg:w-[682px] mt-[30px]">
                            {item.answer}
                          </p>
                        )}
                      <div className="w-full h-[1px] bg-[#8E8E93] mt-4 lg:mt-[24px]"></div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </section>
          
        <section className="min-h-screen max-w-[1440px] mx-auto">
          {/* Investment FAQ Section */}
          <div className="flex flex-col lg:flex-row lg:gap-[118px]">
            {/* Left Title */}
            <div className="lg:ml-[118px] mb-8 lg:mb-0 w-[250px]">
              <h2 className="text-[#1D1D1F] text-[24px] font-bold font-inter leading-[29px] max-w-[206px]">
                EVERNIX Investment FAQ
              </h2>
            </div>

            {/* Right Questions */}
            <div className="flex-1 lg:mr-[118px]">
              {investmentFaqItems.map((item, index) => (
                <div key={`investment-${index}`} className="mb-6 lg:mb-[20px]">
                  <div className="flex items-start lg:items-center justify-between mb-4 lg:mb-[20px] gap-4">
                      <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-medium leading-normal flex-1 pr-2">
                        {item.question}
                      </h3>
                      <button
                        onClick={() => toggleFaq(index + generalFaqItems.length)}
                        className="flex-shrink-0"
                      >
                        {expandedFaq === index + generalFaqItems.length ? <MinusIcon /> : <PlusIcon />}
                      </button>
                    </div>
                    {expandedFaq === index + generalFaqItems.length && item.answer && (
                      <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal max-w-full lg:w-[682px] mt-[30px]">
                        {item.answer}
                      </p>
                    )}
                  <div className="w-full h-[1px] bg-[#8E8E93] mt-4 lg:mt-[24px]"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        <section className="min-h-screen">
          {/* Contact Form Section */}
          <div className="lg:ml-[128px]">
            <div className="flex flex-col lg:flex-row lg:gap-[80px]">
              {/* Left Content */}
              <div className="mb-8 lg:mb-0">
                <h2 className="text-black text-3xl lg:text-[64px] font-inter leading-normal max-w-[498px] mb-6 lg:mb-[30px]">
                  Can&apos;t Find Your Question?
                </h2>
                <p className="text-[#4A4A4A] text-[18px] font-inter leading-normal max-w-[478px]">
                  Have questions about our products or services, or just feel like saying hi? <br />
                  We&apos;re always here to help.
                </p>
              </div>

              {/* Right Form */}
              <div className="bg-[rgba(144,174,185,0.20)] rounded-[10px] p-6 lg:p-8 w-full lg:w-[682px] h-auto">
                <form className="space-y-6">
                  {/* First Row */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-[22px]">
                    <div className="flex-1">
                      <label className="block text-black text-[18px] font-inter mb-3">
                        First Name <span className="text-[#036]">*</span>
                      </label>
                      <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
                        <input 
                          type="text" 
                          placeholder="Jenny" 
                          className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-black text-[18px] font-inter mb-3">
                        Last Name <span className="text-[#036]">*</span>
                      </label>
                      <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
                        <input 
                          type="text" 
                          placeholder="Kim" 
                          className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="flex flex-col lg:flex-row gap-4 lg:gap-[22px]">
                    <div className="flex-1">
                      <label className="block text-black text-[18px] font-inter mb-3">
                        Email address <span className="text-[#036]">*</span>
                      </label>
                      <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
                        <input 
                          type="email" 
                          placeholder="evernix.ai@google.com" 
                          className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="block text-black text-[18px] font-inter mb-3">
                        Phone number
                      </label>
                      <div className="bg-white rounded-[10px] h-[42px] px-[21px] flex items-center">
                        <input 
                          type="tel" 
                          placeholder="+1 (510) 123-456" 
                          className="w-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-black text-[18px] font-inter mb-3">
                      Message
                    </label>
                    <div className="bg-white rounded-[10px] h-[136px] p-[21px]">
                      <textarea 
                        placeholder="I have a question regarding..." 
                        className="w-full h-full text-[#8E8E93] text-[16px] font-inter bg-transparent border-none outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button 
                      type="submit"
                      className="bg-[#001F3F] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-[16px] font-inter min-w-[154px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>


        {/* Footer */}
        <footer 
          className="relative w-full bg-cover bg-center text-white lg:h-[318px] mt-10 lg:mt-0" 
          style={{ backgroundImage: "url('/assets/images/footer_img.png')" }}
        >
          <div className="absolute inset-0"></div> {/* Overlay for readability */}

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Section */}
            <div>
              <p className="mb-4 font-bold">Contact</p>
              <p className="text-sm">evernix.ai@gmail.com</p>
              <p className="text-sm mt-2">Privacy Policy</p>
              <p className="text-sm">Terms of Service</p>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
              {/* Products */}
              <div>
                <p className="mb-4 font-bold">Products</p>
                <Link href="/products/investment" className="text-sm">Investment</Link><br/>
                <Link href="/products/legal" className="text-sm">Legal</Link>
              </div>

              {/* Company */}
              <div>
                <p className="mb-4 font-bold">Company</p>
                <Link href="/about" className="text-sm">About Us</Link><br/>
                <Link href="/faq" className="text-sm">FAQ</Link>
              </div>

              {/* Connect */}
              <div>
                <p className="mb-4 font-bold">Connect</p>
                <div className="flex space-x-4">
                  
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="relative text-center text-sm py-4 border-t border-white/20 lg:mt-12">
            © {new Date().getFullYear()} Evernix. All rights reserved.
          </div>
        </footer>
    </main>
  );
}
