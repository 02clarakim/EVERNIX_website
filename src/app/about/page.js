'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";


function WhatMakesDifferent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Strategy lineage",
      description: "inspired by time-tested approaches, not one-off hot tips",
      titleWidth: "w-[501px]",
      descWidth: "w-[646px]"
    },
    {
      title: "Explainability first",
      description: "you see the \"why,\" not just the \"what.\"",
      titleWidth: "w-[544px]",
      descWidth: "w-[435px]"
    },
    {
      title: "Safety culture",
      description: "engineering choices documented and reviewed",
      titleWidth: "w-[428px]",
      descWidth: "w-[544px]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [sections.length]);

  return (
    <section className="min-h-[95vh] flex flex-col justify-center px-4 lg:px-[118px] py-8">
      <h2 className="text-[#001F3F] text-2xl lg:text-[64px] font-medium font-inter text-center mb-8 lg:mb-12 max-w-[746px] mx-auto">
        What makes us different
      </h2>

      {/* Three Features */}
      <div className="space-y-6 lg:space-y-12">
        {sections.map((section, index) => (
          <div key={index} className="lg:flex lg:items-center transition-all duration-1000 ease-in-out">
            <h3 className={`text-2xl lg:text-[50px] font-medium font-inter mb-4 lg:mb-0 flex-shrink-0 transition-colors duration-1000 ease-in-out ${
              activeIndex === index ? 'text-[#036]' : 'text-[#E6E6E6]'
            }`}>
              {section.title}
            </h3>
            <div className="lg:flex-1 lg:flex lg:justify-end">
              <p className={`text-lg lg:text-[24px] font-medium font-inter lg:text-right lg:max-w-[646px] transition-colors duration-1000 ease-in-out ${
                activeIndex === index ? 'text-[#4A4A4A]' : 'text-[#E6E6E6]'
              }`}>
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className="min-h-screen bg-white relative">
      {/* Hero Section with Navigation */}
      <section className="relative h-screen" style={{
        background: 'linear-gradient(180deg, #6CADDF 0%, #90AEB9 100%)'
      }}>
        <div className="relative z-10 h-full flex flex-col">
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

              <Link href="/about" className="text-black text-[16px] font-inter font-bold">
                About Us
              </Link>
              <Link href="/faq" className="text-black text-[16px] font-inter">
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

                    <Link href="/about" className="font-bold">About Us</Link>
                    <Link href="/faq">FAQ</Link>
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


          {/* Hero Content with Circle */}
          <div className="flex-1 flex items-center justify-center px-4 lg:px-0">
            <div className="relative">
              {/* Animated Circle */}
              <motion.svg
                width="350"
                height="350"
                viewBox="0 0 679 680"
                fill="none"
                className="lg:w-[550px] lg:h-[550px]"
              >
                <motion.circle
                  cx="339.5"
                  cy="340"
                  r="336"
                  stroke="#E6E6E6"
                  strokeOpacity="0.6"
                  strokeWidth="8"
                  strokeLinecap="round"
                  transform="rotate(-90 339.5 340)"
                  // style={{ transformOrigin: "center" }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.svg>

              {/* Animated Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} // starts after circle finishes
              >
                <p className="text-white text-center font-inter text-lg lg:text-[20px] font-medium max-w-[280px] lg:max-w-[500px] leading-normal">
                  EVERNIX is building an explainable, risk-aligned decision pathway
                  that helps everyday people make disciplined choices without spending
                  hours on research, designed to work across domains.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="h-screen flex flex-col justify-center px-4 lg:px-[118px] py-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-[#001F3F] text-3xl lg:text-[64px] font-medium font-inter mb-4 lg:mb-6">
            Mission
          </h2>
          <p className="text-[#90AEB9] text-2xl lg:text-[44px] font-medium font-inter leading-tight lg:leading-normal max-w-[1043px]">
            Make disciplined, explainable decision-making accessible to everyone, across domains.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[10px]">
          {/* Row 1 */}
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-70 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] bg-[#F5F5F5] rounded-[10px]"></div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-[10px]"></div>
          </div>

          {/* Row 2 */}
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-40 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] bg-[#F5F5F5] rounded-[10px]"></div>
          <div className="relative w-full h-[100px] lg:h-[120px] bg-[#F5F5F5] rounded-[10px]"></div>

          {/* Row 3 */}
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-red-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-30 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-500 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-70 rounded-[10px]"></div>
          </div>

          {/* Row 4 */}
          {/* <div className="relative w-full h-[120px] lg:h-[165px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-70 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[120px] lg:h-[165px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-40 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[120px] lg:h-[165px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-300 to-lime-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-70 rounded-[10px]"></div>
          </div>
          <div className="relative w-full h-[120px] lg:h-[165px] rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-500 rounded-[10px]"></div>
            <div className="absolute inset-0 bg-white bg-opacity-20 rounded-[10px]"></div>
          </div> */}
        </div>
      </section>

      {/* What makes us different */}
      <WhatMakesDifferent />
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
