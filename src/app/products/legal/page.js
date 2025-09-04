'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Legal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const CheckIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17" stroke="#6CADDF" strokeWidth="2" fill="none"/>
      <path d="M26 11L14.5 22.5L9 17" stroke="#6CADDF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 2)"/>
    </svg>
  );

  const XIcon = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17" stroke="#4A4A4A" strokeWidth="2" fill="none"/>
                <path d="M12 12L24 24M24 12L12 24" stroke="#4A4A4A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                                                  
  )

  return (
    <main className="min-h-screen bg-white relative" >
      <div className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(122, 192, 217, 1) 0%, rgba(144, 174, 185, 1) 20%, rgba(144, 174, 185, 0.02) 90%)",
        opacity: 0.2, // fades whole gradient effect to 20%
      }}/>
      {/* Hero Section with Navigation */}
      <section className="relative min-h-[100vh] flex flex-col">
        <div className="relative z-10 flex flex-col lg:justify-start flex-1">
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
                  className="text-black text-[16px] font-inter flex items-center gap-2 font-bold"
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
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100/75 hover: rounded-lg font-inter font-bold"
                    >
                      Legal
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-black text-[16px] font-inter">
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
                          <Link href="/products/legal" className="font-bold">Legal</Link>
                        </div>
                      )}
                    </div>

                    <Link href="/about">About Us</Link>
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

          {/* Hero Content */}
          <div className="text-center px-4 sm:px-8 lg:px-0 flex-1 flex flex-col justify-center lg:mt-[209px] lg:flex-none lg:justify-start">
            <h1 className="text-[#1D1D1F] text-4xl lg:text-[64px] font-bold font-inter mb-6 lg:mb-[74px]">
              Legal
            </h1>
            <p className="text-[#001F3F] text-lg lg:text-[24px] font-inter max-w-[599px] mx-auto px-10">
              A decision pathway for legal research and reasoning support, organizing facts, issues, and authorities into explainable, auditable steps.
            </p>
            {/* Scroll Down Arrow */}
            <div className="absolute bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  const nextSection = document.querySelector('#legal-how');
                  nextSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center gap-2 text-black hover:opacity-70 transition-opacity animate-bounce"
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

      {/* How it works Section */}
      <section id="legal-how" className="h-screen flex flex-col justify-center px-10 lg:px-[138px] py-12 lg:py-[100px] mt-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[115px]">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-[#1D1D1F] text-3xl lg:text-[48px] font-inter mb-8 lg:mb-[36px]">
              How it works
            </h2>

            <div className="space-y-8 lg:space-y-0">
              {/* Issue Map */}
              <div className="pb-1 lg:pb-[20px]">
                <h3 className="text-[#001F3F] text-xl lg:text-[24px] font-bold font-inter mb-2 lg:mb-[15px]">
                  Issue Map
                </h3>
                <p className="text-[#8E8E93] text-lg lg:text-[20px] font-inter max-w-[550px] mb-4 lg:mb-[20px]">
                  Frame questions, parties, and jurisdictions.
                </p>
                <div className="w-full lg:w-[592px] h-[1px] bg-[#E6E6E6]"></div>
              </div>

              {/* Authority stack */}
              <div className="pb-1 lg:pb-[20px]">
                <h3 className="text-[#001F3F] text-xl lg:text-[24px] font-bold font-inter mb-2 lg:mb-[15px]">
                  Authority stack
                </h3>
                <p className="text-[#8E8E93] text-lg lg:text-[20px] font-inter max-w-[579px] mb-4 lg:mb-[20px]">
                  Surface potentially relevant statutes, cases, and secondary sources with provenance.
                </p>
                <div className="w-full lg:w-[592px] h-[1px] bg-[#E6E6E6]"></div>
              </div>

              {/* Act with Context */}
              <div className="pb-1 lg:pb-[20px]">
                <h3 className="text-[#001F3F] text-xl lg:text-[24px] font-bold font-inter mb-2 lg:mb-[15px]">
                  Act with Context
                </h3>
                <p className="text-[#8E8E93] text-lg lg:text-[20px] font-inter max-w-[601px] mb-4 lg:mb-[20px]">
                  Outline arguments and counterarguments with traceable citations and confidence indicators.
                </p>
                <div className="w-full lg:w-[592px] h-[1px] bg-[#E6E6E6]"></div>
              </div>

              {/* Review & Export */}
              <div className="pb-0">
                <h3 className="text-[#001F3F] text-xl lg:text-[24px] font-bold font-inter mb-2 lg:mb-[15px]">
                  Review & Export
                </h3>
                <p className="text-[#8E8E93] text-lg lg:text-[20px] font-inter max-w-[601px]">
                  Produce structured notes or briefing scaffolds you can refine.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] lg:max-w-[536px] aspect-square rounded-[20px] overflow-hidden">
              <Image
                src="/assets/images/legal.png"
                alt="Legal Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You get Section */}
    <section className="min-h-screen flex flex-col justify-center px-10 lg:px-[147px] py-12 mt-16">
      <h2 className="text-[#1D1D1F] text-3xl lg:text-[48px] font-inter mb-12 lg:mb-[58px]">
        You get:
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-[50px] items-start">
        {/* Left Column - What you get */}
        <div className="space-y-12">
          {/* Faster orientation */}
          <div className="flex items-center gap-4 lg:gap-[26px]">
            <div className="flex-shrink-0 w-10 h-10">
              <CheckIcon />
            </div>
            <span className="text-black text-lg lg:text-[24px] font-inter">
              Faster orientation on unfamiliar matters
            </span>
          </div>

      {/* Transparent why */}
      <div className="flex items-center gap-4 lg:gap-[26px]">
        <div className="flex-shrink-0 w-10 h-10">
          <CheckIcon />
        </div>
        <span className="text-black text-lg lg:text-[24px] font-inter">
          Transparent &quot;why,&quot; not just &quot;what&quot;
        </span>
      </div>

      {/* Consistent structure */}
      <div className="flex items-center gap-4 lg:gap-[26px]">
        <div className="flex-shrink-0 w-10 h-10">
          <CheckIcon />
        </div>
        <span className="text-black text-lg lg:text-[24px] font-inter">
          Consistent structure for collaboration and review
        </span>
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-[1px] bg-[#E6E6E6] lg:w-[1px] lg:h-full lg:self-stretch  mx-auto"></div>

    {/* Right Column - What it isn't */}
    <div className="space-y-12">
      {/* Not legal advice */}
      <div className="flex items-center gap-4 lg:gap-[26px]">
        <div className="flex-shrink-0 w-10 h-10">
          <XIcon />
        </div>
        <span className="text-black text-lg lg:text-[24px] font-inter">
          Not legal advice and not a law firm
        </span>
      </div>

      {/* Not replacement */}
      <div className="flex items-center gap-4 lg:gap-[26px]">
        <div className="flex-shrink-0 w-10 h-10">
          <XIcon />
        </div>
        <span className="text-black text-lg lg:text-[24px] font-inter">
          Not a replacement for licensed counsel or your own judgment
        </span>
      </div>
    </div>
  </div>
</section>


      {/* Status Section */}
      <section className="px-4 sm:px-8 lg:px-[134px] pt-4 pb-12 lg:py-0 mb-15 lg:mb-[140px]">
        <div className="bg-[rgba(144,174,185,0.10)] border-2 border-[#E6E6E6] rounded-[50px] px-8 lg:px-[244px] py-8 lg:py-[39px] text-center">
          <h3 className="text-[#1D1D1F] text-xl lg:text-[24px] font-bold font-inter mb-4 lg:mb-[15px]">
            STATUS
          </h3>
          <p className="text-[#8E8E93] text-lg lg:text-[24px] font-inter max-w-[693px] mx-auto">
            Planned vertical, under exploration. Availability will be announced on our site.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative w-full bg-cover bg-center text-white lg:h-[318px]" 
        style={{ backgroundImage: "url('/assets/images/footer_img.png')" }}
      >
        <div className="absolute inset-0"></div>

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
