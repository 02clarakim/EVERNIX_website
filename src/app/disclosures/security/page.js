"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";

export default function Security() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black w-full min-h-screen flex justify-center items-start">
        <div className="max-w-4xl px-6 py-6 lg:px-32 lg:py-28 flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Security</h1>
          <p className="text-gray-700">Effective date: Sep 5th, 2025</p>

          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Our approach:</strong> Security and privacy are first principles, aligned with internal Perfection-Driven Requirements.
            </li>
            <div>
              <li><strong>Core controls:</strong></li>
              <ul className="list-disc list-inside pl-5 mt-1 space-y-1">
                <li>Encryption: TLS in transit, at rest.</li>
                <li>Access control: least-privilege, role-based.</li>
                <li>Logging: centralized, avoids sensitive content.</li>
                <li>Secure SDLC: code review, dependency scanning, change management.</li>
                <li>Vendor risk: agreements and reviews.</li>
                <li>Incident response: defined procedures for detection and containment.</li>
              </ul>
            </div>
            <li>
              <strong>Your control:</strong> You decide what to connect or share. Requests for deletion are honored as allowed by law.
            </li>
          </ol>

        </div>
      </main>
      <Footer />
    </>
  );
}
