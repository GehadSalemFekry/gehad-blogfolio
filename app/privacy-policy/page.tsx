import React from "react";
import { AboutPattern, HeaderPattern } from "../components/SvgPatterns";
import { PageTitle } from "../components/PageTitle";

export default function PrivacyPolicy() {
  return (
    <div className="space-y-[40px] md:space-y-[80px] relative  pb-8 sm:pb-24">
      <AboutPattern />
      <div className="max-w-2xl mx-auto">
        <PageTitle title="Privacy Policy" />
      </div>

      <div className="relative z-10 px-5 md:px-8 lg:px-16 max-w-4xl mx-auto py-12 bg-white shadow-lg rounded-lg space-y-6">
        <p className="text-sm text-gray-500">
          <strong>Last Updated:</strong> January 28, 2025.
        </p>

        <p className="text-base text-gray-700">
          Hi, I&apos;m <strong>Gehad Salem</strong>, and welcome to my blog and portfolio! I value
          your trust and take your privacy seriously. This page explains how I handle your
          information and maintain transparency while you browse and interact with my content.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Information I Collect
        </h2>
        <p className="text-base text-gray-700">
          I don&apos;t collect any personal data from you when you visit my blog. No cookies, no
          trackers—nothing! Your privacy is completely respected here.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Affiliate Disclosure
        </h2>
        <p className="text-base text-gray-700">
          Some pages on my blog may include affiliate links. If you click on one and decide to make
          a purchase, I might earn a small commission—at no extra cost to you. These commissions
          help me keep this blog running and allow me to create valuable content for you.
        </p>
        <p className="text-base text-gray-700">
          I only recommend products and services I personally believe in, have used, or would
          confidently recommend to my closest friends and family. I will never promote anything I
          don&apos;t fully stand behind. Your trust means the world to me, and I genuinely
          appreciate it.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Third-Party Websites
        </h2>
        <p className="text-base text-gray-700">
          When you click on affiliate or external links on my site, you may be directed to
          third-party websites. I can&apos;t control the privacy practices or content of those
          sites, so I encourage you to review their privacy policies for more information.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-base text-gray-700">
          I may update this Privacy Policy occasionally to reflect changes in how I work or to
          comply with legal requirements. If I make any updates, I&apos;ll update the &quot;Last
          Updated&quot; date at the top of this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
          Contact Me
        </h2>
        <p className="text-base text-gray-700">
          If you have any questions or concerns about this Privacy Policy—or just want to say
          hello—you can reach me here:
        </p>
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <strong className="w-24 text-gray-800">Email:</strong>
            <a
              href="mailto:gehadsalemfekry@aucegypt.edu"
              className="text-indigo-600 hover:underline"
            >
              gehadsalemfekry@aucegypt.edu
            </a>
          </li>
          <li className="flex items-start">
            <strong className="w-24 text-gray-800">Website:</strong>
            <a
              href="https://www.gehadsalem.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              www.gehadsalem.tech
            </a>
          </li>
        </ul>
        <p className="text-base text-gray-700">
          Thank you for taking the time to read this Privacy Policy and for supporting my work. I
          deeply appreciate your trust and the time you&apos;ve taken to explore my blog. It means
          the world to me!
        </p>
      </div>
    </div>
  );
}
