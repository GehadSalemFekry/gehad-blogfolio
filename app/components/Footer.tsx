import Link from "next/link";
import Image from "next/image";
import { HorizontalLine } from "./HorizontalLine";
import { SocialPill } from "./SocialPill";
import { BgSectionTag, TagType } from "./BgSectionTag";

export function Footer() {
  return (
    <>
      <div className="max-w-7xl border-border-primary/50 relative">
        <HorizontalLine />
        <div className="px-20 flex divide-x">
          <div className="flex flex-col text-xs w-full py-6">
            <div className="flex w-full justify-start gap-20">
              <div>
                <span className="text-base font-medium mb-4 inline-block  text-text-primary">
                  General
                </span>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  {/* <li>
                    <Link href="/projects">Projects</Link>
                  </li> */}
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-base font-medium mb-4 inline-block  text-text-primary">
                  Specifics
                </span>
                <ul className="text-xs space-y-2 text-gray-500">
                  <li>
                    <Link href="/toolbox">Toolbox</Link>
                  </li>
                  <li>
                    <Link href="/resume">Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex text-xs w-full py-6 pl-16">
            <div className="w-full">
              <div className="space-y-6 flex-grow">
                <Link className="inline-block" href="/">
                  <Image width={64} height={64} src="/logo.png" alt="Gehad's Logo" />
                </Link>
                <p className="max-w-80 text-gray-500 leading-5">
                  I&apos;m Gehad - a software engineer, quantum computing researcher and blogger.
                  Thanks for checking out my site!
                </p>
              </div>
              <p className="mt-6 text-gray-500">
                © {new Date().getFullYear()} Gehad Salem. 
                
                Design inspired by{" "}
                <Link
                  href="https://www.braydoncoyer.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Braydon Coyer
                </Link>
                .
              </p>
            </div>
            <div className="flex items-end justify-end">
              <SocialPill />
            </div>
          </div>
        </div>
        <HorizontalLine />
      </div>
      <div className="h-8 w-full relative [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
    </>
  );
}
