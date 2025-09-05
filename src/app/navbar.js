"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 lg:px-[74px] py-4 lg:py-[34px] bg-[#001F3F] text-white relative z-50">
      <Link href="/" className="flex items-center gap-4 lg:gap-[20px]">
        <div className="w-6 h-6 lg:w-8 lg:h-8 relative">
          <Image
            src="/assets/images/logo1_white.png"
            alt="Evernix Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <span className="text-white font-bold text-sm lg:text-[16px] font-inter">
          EVERNIX
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-[50px]">
        <Link href="/" className="text-white font-bold text-[16px] font-inter">
          Home
        </Link>

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

        <Link href="/about" className="text-white text-[16px] font-inter">
          About Us
        </Link>
        <Link href="/faq" className="text-white text-[16px] font-inter">
          FAQ
        </Link>
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
              <Link href="/" className="font-bold">
                Home
              </Link>

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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
