'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const steps = [
    {
      title: "Step 1: Set your comfort level",
      description: "Take a 2-minute risk quiz (Cautious / Balanced / Aggressive). You can change it anytime.",
      theme: "dark",
      videoPath: "/assets/videos/home_step1.mp4" // Add your step 1 video path

    },
    {
      title: "Step 2:Agents debate & Synthesize",
      description: "Specialized agents apply durable playbooks, challenge each other, score options, and validate them against your constraints.",
      theme: "dark",
      videoPath: "/assets/videos/home_step2.mp4" // Add your step 1 video path

    },
    {
      title: "Step 3: Review & Decide",
      description: (
      <>
        Receive an explainable recommendation with confidence <br />
        and trade-offs; accept, adjust, or skip – nothing happens without you.
      </>
      ),
      theme: "dark",
      videoPath: "/assets/videos/home_step3.mp4" // Add your step 1 video path
    }
  ];

  const getStepSize = (stepIndex) => {
    const distance = Math.abs(stepIndex - activeStep);
    if (distance === 0) return 'large'; // Active step
    if (distance === 1) return 'medium'; // Adjacent step
    return 'small'; // Further step
  };

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
    <main className="min-h-screen bg-white relative">
      {/* Hero Section with Navigation */}
      <section className="relative h-screen">
        {/* Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/hero_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 h-full">
          {/* Navigation */}
          <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-[74px] py-4 lg:py-[34px]">
            <div className="flex items-center gap-4 lg:gap-[25px]">
              <div className="w-[19px] h-[19px] bg-white rounded-full"></div>
              <span className="text-white font-bold text-sm lg:text-[16px] font-inter">EVERNIX</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[50px]">
              <Link href="/" className="text-white font-bold text-[16px] font-inter">
                Home
              </Link>

              {/* Products Dropdown (Desktop) */}
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="text-white text-[16px] font-inter flex items-center gap-2"
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

              <Link href="/about" className="text-white text-[16px] font-inter">
                About Us
              </Link>
              <Link href="/faq" className="text-white text-[16px] font-inter">
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
              className="lg:hidden text-white p-2"
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
                    <Link href="/" className="font-bold">Home</Link>

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
          <div className="px-4 sm:px-8 lg:px-[155px] mt-8 sm:mt-16 lg:mt-[151px] pb-8 lg:pb-0">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-[64px] font-inter leading-tight lg:leading-normal max-w-full lg:max-w-[1130px] mb-6 lg:mb-[45px]">
              Decisions that think with you <br/>
              – minus the guesswork
            </h1>

            <p className="text-white text-base sm:text-lg lg:text-[18px] font-inter max-w-full sm:max-w-[665px] mb-8 lg:mb-[71px]">
              EVERNIX (n.) /ˈɛvərnɪks/ : a continuously evolving, tech-built pathway
            </p>

            <button className="bg-[rgba(255,255,255,0.30)] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-sm lg:text-[16px] font-inter">
              Get Early Access
            </button>
            {/* Scroll Down Arrow */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  const nextSection = document.querySelector('#vertical-products');
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

      {/* Investing Section - Full Screen */}
      <section id="vertical-products" className="h-screen flex flex-col justify-center px-10 lg:px-[138px] py-8 lg:py-16">
        <h2 className="text-[#1D1D1F] font-bold text-xl sm:text-2xl lg:text-[24px] font-inter mt-24 mb-4 lg:mt-4 lg:mb-15">
          Vertical Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[114px] items-center">
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between w-full">
              {/* Left: Text */}
              <div>
                <h3 className="text-[#1D1D1F] font-bold text-3xl sm:text-4xl lg:text-[48px] font-inter leading-normal">
                  Investing
                </h3>
                <p className="text-[#E6E6E6] font-medium text-lg lg:text-[24px] font-inter">
                  (Beta / in development)
                </p>
              </div>

              {/* Right: Arrow */}
              <div className="flex-shrink-0">
                <Link href="/products/investment">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1D1D1F]"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                </Link>
              </div>
            </div>

            <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[592px]">
              Explainable, risk-aligned portfolio guidance powered by multi-agent AI.
            </p>
            <div className="w-full h-px bg-[#E6E6E6]"></div>

            {/* What you get section */}
            <div className="space-y-3 lg:space-y-4 pt-1">
              <div>
                <h4 className="text-[#001F3F] font-normal text-lg lg:text-[24px] font-inter mb-3 lg:mb-4">
                  What you get
                </h4>
                <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[592px]">
                  plain-English rationales, risk tiers (Cautious / Balanced / Aggressive), beginner safeguards.
                </p>
              </div>
              <div className="w-full h-px bg-[#E6E6E6]"></div>
              <div>
                <h4 className="text-[#001F3F] font-normal text-lg lg:text-[24px] font-inter mb-3 lg:mb-4">
                  What it isn&apos;t
                </h4>
                <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[592px]">
                  trade execution or guaranteed returns.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] lg:max-w-[536px] aspect-square rounded-[20px] overflow-hidden">
              <video
                src="/assets/videos/investment.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section - Full Screen */}
      <section className="h-screen flex flex-col justify-center px-10 lg:px-[138px] py-8 lg:py-16 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[114px] items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] lg:max-w-[536px] aspect-square rounded-[20px] overflow-hidden">
              <video
                src="/assets/videos/legal.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6 order-first lg:order-2">
            <div className="flex items-center justify-between w-full">
              {/* Left: Text */}
              <div>
                <h3 className="text-[#1D1D1F] font-bold text-3xl sm:text-4xl lg:text-[48px] font-inter leading-normal">
                  Legal
                </h3>
                <p className="text-[#E6E6E6] font-medium text-lg lg:text-[24px] font-inter">
                  (Planned / exploratory)
                </p>
                
              </div>

              {/* Right: Arrow */}
              <div className="flex-shrink-0">
                <Link href="/products/investment">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1D1D1F]"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[592px]">
              A structured pathway for legal research and decision support.
            </p>
              <div className="w-full h-px bg-[#E6E6E6]"></div>


            {/* Goal section */}
            <div className="space-y-3 lg:space-y-4 pt-1">
              <div>
                <h4 className="text-[#001F3F] font-normal text-lg lg:text-[24px] font-inter mb-3 lg:mb-4">
                  Goal
                </h4>
                <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[572px]">
                  organize facts, surface precedents, and show step-by-step reasoning you can audit.
                </p>
              </div>
              <div className="w-full h-px bg-[#E6E6E6]"></div>
              <div>
                <h4 className="text-[#001F3F] font-normal text-lg lg:text-[24px] font-inter mb-3 lg:mb-4">
                  What it isn&apos;t
                </h4>
                <p className="text-[#8E8E93] font-normal text-lg lg:text-[24px] font-inter leading-normal max-w-[592px]">
                  legal advice or a law firm; availability to be announced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="lg:h-screen px-10 lg:px-[138px] mb-4 lg:mb-[100px] mt-10">
        <h2 className="text-[#1D1D1F] text-3xl sm:text-3xl lg:text-[48px] font-medium font-inter mb-8 lg:mb-[64px]">How It Works</h2>

        {/* 3 Rectangles Layout */}
        <div className="flex gap-4 lg:gap-[42px] items-center justify-center">

          {steps.map((step, stepIndex) => {
            const isActive = stepIndex === activeStep;

            return (
              <div
                key={stepIndex}
                className={`
                  rounded-[10px] relative overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between
                  ${isActive
                    ? 'w-[280px] sm:w-[500px] lg:w-[708px] h-[300px] lg:h-[445px] p-6 sm:p-8 lg:p-[60px] opacity-100 blur-none z-20'
                    : getStepSize(stepIndex) === 'medium'
                      ? 'w-[120px] sm:w-[200px] lg:w-[297px] h-[200px] lg:h-[445px] p-4 sm:p-6 lg:p-8 opacity-70 blur-[1px] z-10'
                      : 'w-[80px] sm:w-[120px] lg:w-[105px] h-[200px] lg:h-[445px] p-3 sm:p-4 lg:p-6 opacity-50 blur-[2px] z-5'
                  }
                  ${step.theme === 'dark' ? 'dark-step-card' : 'bg-[#D9D9D9]'}
                `}
                onClick={() => setActiveStep(stepIndex)}
              >
                {/* Video Background for each step */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={`${stepIndex}-${isActive}`} // Force re-render when active state changes
                >
                  <source src={step.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Content - only show full content when active */}
                {isActive ? (
                  <>
                    <div className="relative z-10">
                      <h3 className={`
                        text-lg sm:text-xl lg:text-[24px] font-medium font-inter mb-4 lg:mb-[27px]
                        ${step.theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}
                      `}>
                        {step.title}
                      </h3>
                    </div>
                    <div className="relative z-10">
                      <p className={`
                        text-base sm:text-md lg:text-[20px] font-medium font-inter
                        ${step.theme === 'dark' ? 'text-white' : 'text-[#8E8E93]'}
                      `}>
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Inactive state - just title and video placeholder */}
                    {/* <div className="relative z-10">
                      <h3 className={`
                        text-sm sm:text-base lg:text-lg font-medium font-inter
                        ${step.theme === 'dark' ? 'text-white' : 'text-[#1D1D1F]'}
                      `}>
                        {step.title}
                      </h3>
                    </div>
                    <div className="relative z-10 flex-1 flex items-center justify-center">
                      <div className="w-full h-24 lg:h-40 bg-gradient-to-b from-white/40 to-white/10 backdrop-blur-[5px] rounded-lg flex items-center justify-center">
                        <span className="text-white/60 font-inter text-xs">Video {stepIndex + 1}</span>
                      </div>
                    </div> */}
                  </>
                )}

                {/* Overlay for inactive steps */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/20 rounded-[10px]"></div>
                )}
              </div>
            );
          })}

        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === activeStep ? 'bg-[#1D1D1F] w-8' : 'bg-[#D9D9D9]'}
              `}
            />
          ))}
        </div>

        <button className="text-[#1D1D1F] font-bold text-sm lg:text-[16px] font-inter mb-12 lg:mb-[100px] mt-8">
          Learn More &gt;
        </button>
      </section>

      {/* Your guardrails. Our engine. */}
      <section className="px-4 sm:px-8 lg:px-[118px] mb-12 lg:mb-[180px]">
        <div className="text-center mb-8 lg:mb-[32px]">
          <h2 className="text-[#1D1D1F] text-2xl sm:text-3xl lg:text-[48px] font-normal font-inter max-w-[637px] mx-auto">
            Your guardrails. Our engine.
          </h2>
        </div>

        {/* Multi-Agent Decision Engine */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-start lg:items-center mb-0 max-w-[1180px] mx-auto">
          <div className="relative w-7/8 lg:w-[592px] h-[200px] lg:h-[238px] bg-gray-300 rounded-[10px] overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/assets/images/home_desc1.png"
              alt="Multi-Agent Decision Engine"
              fill
              className="w-[full] h-full object-cover object-bottom"
            />
          </div>
          <div className="flex-1 bg-white rounded-r-[10px] p-8 lg:p-[43px] min-h-[200px] lg:min-h-[324px] flex flex-col justify-between">
            <div>
              <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-normal font-inter mb-6 lg:mb-[120px]">
                Multi-Agent Decision Engine
              </h3>
            </div>
            <div>
              <p className="text-[#4A4A4A] text-base lg:text-[18px] font-normal font-inter mb-4 lg:mb-[23px]">
                Multiple specialized AI agents emulate time-tested playbooks, challenge one another, and synthesize a consensus with confidence scores.
              </p>
              <div className="h-[1px] bg-[#E6E6E6] w-full max-w-[496px]"></div>
            </div>
          </div>
        </div>

        {/* Explainable, Auditable Guidance */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-start lg:items-center mb-0 max-w-[1180px] mx-auto">
          <div className="relative w-7/8 lg:w-[592px] h-[200px] lg:h-[238px] bg-gray-300 rounded-[10px] overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/assets/images/home_desc2.png"
              alt="Explainable, Auditable Guidance"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 bg-white rounded-r-[10px] p-8 lg:p-[43px] min-h-[200px] lg:min-h-[324px] flex flex-col justify-between">
            <div>
              <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-normal font-inter mb-6 lg:mb-[121px]">
                Explainable, Auditable Guidance
              </h3>
            </div>
            <div>
              <p className="text-[#4A4A4A] text-base lg:text-[18px] font-normal font-inter mb-4 lg:mb-[23px]">
                Every recommendation comes with plain-English rationale, source provenance, and a change log, so you can see the &quot;why,&quot; not just the &quot;what.&quot;
              </p>
              <div className="h-[1px] bg-[#E6E6E6] w-full max-w-[496px]"></div>
            </div>
          </div>
        </div>

        {/* Risk-Aligned Control */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] items-start lg:items-center mb-0 max-w-[1180px] mx-auto">
          <div className="relative w-7/8 lg:w-[592px] h-[200px] lg:h-[238px] bg-gray-300 rounded-[10px] overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/assets/images/home_desc3.png"
              alt="Risk-Aligned Control"
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 bg-white rounded-r-[10px] p-8 lg:p-[43px] min-h-[200px] lg:min-h-[324px] flex flex-col justify-between">
            <div>
              <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-normal font-inter mb-6 lg:mb-[116px]">
                Risk-Aligned Control
              </h3>
            </div>
            <div>
              <p className="text-[#4A4A4A] text-base lg:text-[18px] font-normal font-inter mb-4 lg:mb-[23px]">
              You set intent and guardrails; EVERNIX validates suggestions against them, and you choose to accept, adjust, or pause. Nothing happens without you.
              </p>
              <div className="h-[1px] bg-[#E6E6E6] w-full max-w-[496px]"></div>
            </div>
          </div>
        </div>

        <button className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-[30px] text-[#1D1D1F] font-bold text-sm lg:text-[16px] font-inter mt-0">
          Learn More &gt;
        </button>
      </section>


      {/* FAQ Section */}
      <section className="px-10 lg:px-[138px] mb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[114px]">
          <div className="w-full lg:w-[359px] order-1 lg:order-1">
            <h2 className="text-black text-3xl sm:text-3xl lg:text-[48px] font-inter leading-normal mb-4 lg:mb-[18px]">Any Questions?</h2>
            <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal mb-4 lg:mb-[18px] max-w-full lg:w-[355px]">
              We are here to assist you with any kind of questions. Sign up and ask personalized questions directly to us. We will get in touch shortly.
            </p>
            <div className="hidden lg:block mt-8">
              <button className="
              inline-flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[30px]
              border-2 border-[#001F3F] focus:outline-none
            ">
                <Link href='/faq'>
                  <span className="text-[#001F3F] font-bold text-sm lg:text-[16px] font-inter">
                    Learn More &gt;
                  </span>
                </Link>
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-full lg:max-w-[690px] order-2 lg:order-2">
            {/* Question 1 - Expanded */}
            <div className="pb-6 lg:pb-[32px] mb-6 lg:mb-[32px]">
              <div className="flex items-start lg:items-center justify-between mb-4 lg:mb-[32px] gap-4">
                <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-medium leading-normal flex-1 pr-2">What is EVERNIX?</h3>
                <button onClick={() => toggleFaq(0)} className="flex-shrink-0">
                  {expandedFaq === 0 ? <MinusIcon /> : <PlusIcon />}
                </button>
              </div>
              {expandedFaq === 0 && (
                <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal max-w-full lg:w-[682px] mt-[30px]">
                  EVERNIX is an always-on, tech-native decision pathway that turns messy inputs into clear, explainable recommendations you can audit and control. Powered by a multi-agent engine that cross-checks time-tested playbooks and assigns confidence, it’s multi-vertical by design. With Investing (Beta, in development) available first. EVERNIX provides research and recommendations; outcomes aren’t guaranteed and you remain in charge.
                </p>
              )}
              <div className="w-full lg:w-[690px] h-[1px] bg-[#8E8E93] mt-4 lg:mt-[32px]"></div>
            </div>

            {/* Question 2 */}
            <div className="pb-6 lg:pb-[32px] mb-6 lg:mb-[32px]">
              <div className="flex items-start lg:items-center justify-between gap-4">
                <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-medium leading-normal flex-1 pr-2">Who is EVERNIX for?</h3>
                <button onClick={() => toggleFaq(1)} className="flex-shrink-0">
                  {expandedFaq === 1 ? <MinusIcon /> : <PlusIcon />}
                </button>
              </div>
              {expandedFaq === 1 && (
                <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal max-w-full lg:w-[682px] mt-[30px]">
                  Beginners and busy people who want disciplined, transparent guidance without spending hours on research. If you prefer plain-English reasoning, adjustable guardrails, and the ability to accept, adjust, or skip any suggestion, EVERNIX is built for you. Early access focuses on U.S. users for the Investing beta, with additional domains planned.
                </p>
              )}
              <div className="w-full lg:w-[690px] h-[1px] bg-[#8E8E93] mt-4 lg:mt-[32px]"></div>
            </div>

            {/* Question 3 */}
            <div className="pb-6 lg:pb-[32px] mb-1 lg:mb-[32px]">
              <div className="flex items-start lg:items-center justify-between gap-4">
                <h3 className="text-[#1D1D1F] text-lg sm:text-xl lg:text-[24px] font-medium leading-normal flex-1 pr-2">What do you mean by a “multi-agent system”?</h3>
                <button onClick={() => toggleFaq(2)} className="flex-shrink-0">
                  {expandedFaq === 2 ? <MinusIcon /> : <PlusIcon />}
                </button>
              </div>
              {expandedFaq === 2 && (
                <p className="text-[#4A4A4A] text-base lg:text-[18px] font-medium leading-normal max-w-full lg:w-[682px] mt-[30px]">
                  Multiple specialized AI agents, each trained to apply a different, durable perspective, debate and challenge one another’s ideas, then synthesize a consensus before anything reaches you. Each recommendation includes a confidence score, explicit trade-offs, and provenance (sources and/or assumptions), and is validated against your guardrails so the result is explainable, risk-aligned, and auditable.
                </p>
              )}
              <div className="w-full lg:w-[690px] h-[1px] bg-[#8E8E93] mt-4 lg:mt-[32px]"></div>
            </div>
          </div>
          <div className="w-full order-3 mt-1 lg:hidden">
            <button className="
              inline-flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[30px]
        border-2 border-[#001F3F] focus:outline-none
            ">
              <Link href='/faq'>
                <span className="text-[#001F3F] font-bold text-sm lg:text-[16px] font-inter">
                  Learn More &gt;
                </span>
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Join Waitlist + Footer */}
      <section className="lg:h-screen relative px-10 flex flex-col justify-between">
        {/* Join Waitlist content at the top */}
        <div className="mt-4 lg:mt-32 text-center mb-20">
          <h2 className="text-[#1D1D1F] text-2xl sm:text-3xl lg:text-[48px] font-inter mb-6 lg:mb-[31px]">
            Join Waitlist
          </h2>
          <p className="text-[#8E8E93] text-base lg:text-[18px] font-inter max-w-[414px] mx-auto mb-6 lg:mb-[42px]">
            Explore how EVERNIX can help you while staying in touch with recent updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[20px] justify-center max-w-sm sm:max-w-none mx-auto">
            <button className="bg-[#036] rounded-[30px] px-[20px] py-[10px] text-white font-bold text-sm lg:text-[16px] font-inter">
              Get Trial
            </button>
            <button className="border border-[#001F3F] rounded-[30px] px-[20px] py-[10px] text-[#001F3F] font-bold text-sm lg:text-[16px] font-inter">
              Stay Updated
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer 
          className="relative w-full bg-cover bg-center text-white lg:h-[318px]" 
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
      </section>
      
    </main>
  );
}
