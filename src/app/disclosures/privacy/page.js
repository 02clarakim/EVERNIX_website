"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black w-full min-h-screen flex justify-center items-start">
        <div className="max-w-4xl px-6 py-6 lg:px-32 lg:py-28 flex flex-col gap-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-700">Effective date: Sep 4th, 2025</p>
          <p className="text-gray-700 mb-3">Owner: EVERNIX</p>

          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            <li>
              <strong>What this covers:</strong> This policy explains what we collect, why, how we use and share it, and the choices you have. Applies to our website, apps, and beta programs.
            </li>
            <li>
              <strong>What we collect:</strong>
              <ul className="list-disc list-inside pl-5 mt-1 space-y-1">
                <li>Identifiers & contact info: name, email, optional phone, IP, device identifiers.</li>
                <li>Usage data: pages viewed, features used, approximate location, timestamps.</li>
                <li>Preferences & inputs: risk/guardrail choices, settings, feedback.</li>
                <li>Beta or waitlist info: responses to forms or surveys.</li>
              </ul>
            </li>
            <li>
              <strong>How we use data:</strong>
              <ul className="list-disc list-inside pl-5 mt-1 space-y-1">
                <li>Provide, maintain, and improve the Services.</li>
                <li>Personalize recommendations to your preferences.</li>
                <li>Communicate updates, beta participation, and security notices.</li>
                <li>Detect, prevent, and investigate fraud, abuse, or security incidents.</li>
                <li>Comply with law.</li>
              </ul>
            </li>
            <li>
              <strong>Sharing:</strong> We share personal info with service providers under contracts, for legal & safety reasons. We do not sell personal info.
            </li>
            <li>
              <strong>Retention:</strong> We keep personal info only as long as needed, then delete or de-identify.
            </li>
            <li>
              <strong>Your choices & rights:</strong> Access, correct, delete info; opt-out of marketing; California residents have specific rights.
            </li>
            <li>
              <strong>Security:</strong> Administrative, technical, and physical safeguards, including encryption.
            </li>
            <li>
              <strong>Children:</strong> Services not directed to children under 13; we do not knowingly collect from them.
            </li>
            <li>
              <strong>Changes:</strong> Updates posted here with revised effective date.
            </li>
            <li>
              <strong>Contact:</strong> evernix.ai@gmail.com
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
