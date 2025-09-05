"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";

export default function Accessibility() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black w-full min-h-screen flex justify-center items-start">
        <div className="max-w-4xl px-6 py-6 lg:px-32 lg:py-28 flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Accessibility</h1>
          <p className="text-gray-700">Effective date: Sep 4th, 2025</p>

          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            <li>
              <strong>Commitment:</strong> Evernix is committed to digital accessibility and aims to conform to WCAG 2.1 AA where practical.
            </li>
            <li>
              <strong>Continuous improvement:</strong> We continuously improve usability for all users.
            </li>
            <li>
              <strong>Reporting issues:</strong> Contact evernix.ai@gmail.com with: (1) page URL, (2) the problem, (3) assistive tech/browser.
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
