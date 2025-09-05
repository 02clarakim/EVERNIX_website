'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../footer';
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
            <Link href="/" className="flex items-center gap-4 lg:gap-[20px]">
              <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
                <Image
                  src="/assets/images/logo1_white.png"
                  alt="Evernix Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>              
              <span className="text-white font-bold text-sm lg:text-[16px] font-inter">EVERNIX</span>
            </Link>

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
                      className="block px-4 py-2 text-gray-700 hover:text-black hover:font-semibold font-inter"
                    >
                      Investment
                    </Link>
                    <Link
                      href="/products/legal"
                      className="block px-4 py-2 text-gray-700 hover:text-black hover:font-semibold font-inter"
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
            {/* <div className="hidden lg:flex items-center gap-[17px]">
              <button className="bg-white rounded-[30px] px-[20px] py-[10px] text-black font-bold text-[16px] font-inter">
                Log In
              </button>
              <button className="bg-[#001F3F] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-[16px] font-inter">
                Sign Up
              </button>
            </div> */}

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
                  {/* <div className="mt-auto flex flex-col gap-3">
                    <button className="w-full bg-white text-black rounded-full px-6 py-3 font-bold">
                      Log In
                    </button>
                    <button className="w-full border border-white rounded-full px-6 py-3 font-bold">
                      Sign Up
                    </button>
                  </div> */}
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
            {/* Scroll Down Arrow */}
            <div className="absolute bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  const nextSection = document.querySelector('#mission');
                  nextSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-2 text-white hover:opacity-70 transition-opacity animate-bounce"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </button>
            </div>
          
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="h-screen flex flex-col justify-center px-4 lg:px-[118px] py-8"
      >
        <div className="mb-6 lg:mb-8">
          <h2 className="text-[#001F3F] text-3xl lg:text-[64px] font-medium font-inter mb-4 lg:mb-6">
            Mission
          </h2>
          <p className="text-[#90AEB9] text-2xl lg:text-[40px] font-medium font-inter leading-tight lg:leading-normal max-w-[1043px]">
            Make disciplined, explainable decision-making accessible to everyone, across domains.
          </p>
        </div>

        {/* Image/Video Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-[10px]">
          {/* Mobile: show only m5–m10 */}
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m5.png" alt="Mission 5" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m1.png" alt="Mission 7" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <video src="/assets/missions/m10.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m8.png" alt="Mission 8" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m9.png" alt="Mission 9" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <video src="/assets/missions/m6.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>

          {/* Desktop only: show remaining items m1–m4 & m11–m12 */}
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m7.png" alt="Mission 1" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m2.png" alt="Mission 2" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m3.png" alt="Mission 3" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m4.png" alt="Mission 4" fill className="object-cover" />
          </div>
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <video src="/assets/missions/m11.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
          <div className="hidden lg:block relative w-full h-[100px] lg:h-[120px] rounded-[10px] overflow-hidden opacity-70">
            <Image src="/assets/missions/m12.png" alt="Mission 12" fill className="object-cover" />
          </div>
        </div>
      </section>



      {/* What makes us different */}
      <WhatMakesDifferent />
      {/* Footer */}
      <Footer />
    </main>
  );
}
