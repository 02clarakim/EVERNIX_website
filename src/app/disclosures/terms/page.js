"use client";

import Navbar from "../../navbar";
import Footer from "../../footer";

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black w-full min-h-screen flex justify-center items-start">
        <div className="max-w-4xl px-6 py-6 lg:px-32 lg:py-32 flex flex-col gap-6">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">Terms of Use</h1>
            <p className="text-gray-700">Effective date: Sep 4th, 2025</p>
            <p className="text-gray-700 mb-3">Owner: Evernix (“we,” “us,” “our”)</p>

            <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                    <strong>What we do:</strong> Evernix is a decision-support platform. We provide research and recommendations surfaced by a multi-agent engine with plain-English explanations. We do not execute trades, take custody of assets, or guarantee outcomes. Nothing on our services is financial, legal, tax, or investment advice.
                </li>
                <li>
                    <strong>Acceptance & eligibility:</strong> By accessing or using our Services, you agree to these Terms. You must be 18+ and legally able to enter contracts. If you use the Services for an organization, you represent you’re authorized to bind it.
                </li>
                <li>
                    <strong>Your account:</strong> You’re responsible for account information, the security of your login, and all activity under your account.
                </li>
                <li>
                    <strong>License & acceptable use:</strong> We grant you a limited, revocable, non-transferable license to access and use the Services for personal, lawful purposes. You agree not to reverse engineer, scrape, violate law or others’ rights, or misrepresent identity.
                </li>
                <li>
                    <strong>No advice; user control:</strong> All outputs are informational. You decide whether to act, skip, or adjust any recommendation.
                </li>
                <li>
                    <strong>Beta features:</strong> Certain features may be labeled Beta and are provided “as is.” Functionality may change or be discontinued; data may be reset.
                </li>
                <li>
                    <strong>Third-party content & links:</strong> We may reference third-party data or link to third-party sites. We don’t control or endorse them.
                </li>
                <li>
                    <strong>Intellectual property:</strong> Services, including text, UI, software, and content, are owned by Evernix or its licensors.
                </li>
                <li>
                    <strong>Disclaimers:</strong> THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES.
                </li>
                <li>
                    <strong>Limitation of liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, EVERNIX WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. TOTAL LIABILITY IS LIMITED.
                </li>
                <li>
                    <strong>Indemnity:</strong> You agree to indemnify and hold Evernix harmless from claims arising out of your use of the Services or violation of these Terms.
                </li>
                <li>
                    <strong>Changes; termination:</strong> We may update these Terms and will post a new effective date when we do.
                </li>
                <li>
                    <strong>Governing law:</strong> These Terms are governed by the laws of California, USA. Venue lies in courts of Los Angeles, California.
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
