"use client";

// import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { HorizontalLine } from "app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { siteMetadata } from "app/data/siteMetadata";
import { ProfilePicture } from "../components/ProfilePicture";

import React, { useEffect, useRef, useState } from "react";
import { BentoCard } from "../components/BentoCard";
// import { Scrapbook } from "../components/Scrapbook";
import { ShadowBox } from "../components/ShadowBox";
import { useScroll, motion } from "framer-motion";
import { Resume } from "app/components/Resume";
import { Button } from "../components/Button";
import { AboutPattern, HeaderPattern } from "../components/SvgPatterns";
import { Link } from "../components/Link";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative pb-24">
      <span className="absolute top-20 -translate-y-1/2 left-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <HeaderPattern />

      <div className="space-y-[80px] lg:space-y-[80px] relative">
        {/* Title */}

        <div className="pt-[40px] md:pt-[100px] flex flex-col lg:flex-row justify-around items-center space-y-2 lg:space-y-0">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-text-primary text-balance font-medium text-4xl sm:text-5xl lg:text-6xl leading-[48px] sm:leading-[56px] lg:leading-[64px] tracking-tighter">
              {timeOfDayGreeting} <br />
              I&apos;m Gehad, a software engineer and quantum researcher.
            </h1>
          </div>
          <div className="flex-shrink-0 lg:ml-8">
            <ProfilePicture />
          </div>
        </div>

        <span className="absolute top-40 -translate-y-1/2 left-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        <div className="relative text-center space-y-8 mt-16">
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600">
              <span>Experience</span>
            </div>
            <div className="max-w-3xl mx-auto">
              <h2 className="max-w-96 mx-auto text-text-primary text-balance font-medium text-2xl sm:text-3xl lg:text-4xl leading-[32px] sm:leading-[40px] lg:leading-[48px] tracking-tighter">
                My work and research journey.
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-16 mt-12">
          <Resume />
          <div className="flex justify-center">
            <Button variant="secondary" href={siteMetadata.resume} target="_blank">
              Download Resume
            </Button>
          </div>
        </div>

        {/* <section className="space-y-16 relative">
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>More</span>
            </div>

            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tight max-w-lg leading-10">
              Here&apos;s what sets me apart and makes me unique
            </h2>
          </div>

          <div className="grid grid-cols-12 grid-rows-[14] gap-2">
            <AboutPattern />
            <div className="col-span-2 row-span-7 row-start-14 col-start-11 row-start-1 h-full">
              <BentoCard height="h-full">bonus</BentoCard>
            </div>
            <BentoCard colSpan={3} rowSpan={4} height="h-[220px]">
              Stats
            </BentoCard>
          </div>
          <HorizontalLine />
        </section> */}

        {/* Newsletter */}
        {/* <NewsletterSignUp /> */}
      </div>
    </div>
  );
}
