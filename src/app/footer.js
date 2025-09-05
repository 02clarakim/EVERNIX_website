// src/components/Footer.js
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center text-white mt-10 lg:mt-0"
      style={{ backgroundImage: "url('/assets/backgrounds/footer_img.png')" }}
    >
      <div className="absolute inset-0 bg-black/20"></div> {/* overlay */}
      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section: Logo + Contact */}
        <div className="flex flex-col justify-start gap-6">
          <Link href="/">
            <div className="w-10 h-10 lg:w-16 lg:h-16 relative cursor-pointer">
              <Image
                src="/assets/images/logo1_white.png"
                alt="Evernix Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
          <div className="text-sm space-y-5">
            <p>Contact Us</p>
            <p>evernix.ai@gmail.com</p>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <p className="mb-4 font-bold">Products</p>
            <Link href="/products/investment" className="text-sm block hover:underline">Investment</Link>
            <Link href="/products/legal" className="text-sm block hover:underline">Legal</Link>
          </div>
          <div>
            <p className="mb-4 font-bold">Company</p>
            <Link href="/about" className="text-sm block hover:underline">About Us</Link>
            <Link href="/faq" className="text-sm block hover:underline">FAQ</Link>
          </div>
          <div>
            <p className="mb-4 font-bold">Connect</p>
            {/* Add social icons here if needed */}
          </div>
        </div>
      </div>

      {/* Bottom section: Risk disclosure + Privacy/Terms/etc */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-4 border-t border-white/20 text-sm flex flex-col gap-2 items-center">
        <p className="text-gray-300">
          Risk Disclosure: All decisions involve risk; outcomes aren’t guaranteed. Evernix provides research and recommendations; final decisions remain yours.
        </p>
        <div className="flex flex-wrap gap-4 text-gray-300">
          <Link href="/disclosures/privacy" className="hover:underline">Privacy</Link>
          <li><Link href="/disclosures/terms" className="hover:underline">Terms</Link></li>
          <li><Link href="/disclosures/disc" className="hover:underline">Disclosures</Link></li>
          <li><Link href="/disclosures/security" className="hover:underline">Security</Link></li>
          <li><Link href="/disclosures/access" className="hover:underline">Accessibility</Link></li>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative text-center text-sm py-4 text-gray-300">
        © {new Date().getFullYear()} Evernix. All rights reserved.
      </div>
    </footer>
  );
}
