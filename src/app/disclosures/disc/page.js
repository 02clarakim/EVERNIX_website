"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";

export default function Disclosure() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black w-full min-h-screen flex justify-center items-start">
        <div className="max-w-4xl px-6 py-6 lg:px-32 lg:py-28 flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Disclosure</h1>
          <p className="text-gray-700">Effective date: Sep 4th, 2025</p>

          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            <li>
              <strong>Scope of service:</strong> Evernix provides research and recommendations with explainable rationales. We do not execute trades or take custody of assets. You decide whether to act.
            </li>
            <li>
              <strong>No guarantees:</strong> All decisions involve risk. No outcome is guaranteed. Past performance does not predict future results.
            </li>
            <li>
              <strong>Investment vertical (beta):</strong> Investing vertical is in Beta for testing and feedback. Features may change or be paused.
            </li>
            <li>
              <strong>Performance & methodology:</strong> Any performance displayed identifies actual, model, or backtested results and key limitations.
            </li>
            <li>
              <strong>Third-party data:</strong> References may be used but are not guaranteed.
            </li>
            <li>
              <strong>Testimonials & endorsements:</strong> If featured, material connections will be disclosed.
            </li>
            <li>
              <strong>Geographic availability:</strong> Currently focused on the U.S.; other regions announced when applicable.
            </li>
            <li>
              <strong>Regulatory status:</strong> No regulatory claims. Updates provided if necessary.
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
