import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";
import { SocialPill } from "./SocialPill";
import { BgSectionTag, TagType } from "./BgSectionTag";

export function Footer() {
  return (
    <>
      <div className="max-w-7xl border-border-primary/50 relative">
        <HorizontalLine />
        <div className="max-w-6xl lg:mx-auto flex divide-x">
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
            <div>
              <div className="space-y-6 flex-grow">
                <Link className="inline-block" href="/">
                  <img className="w-16 h-16" src="/logo.png" alt="Gehad's Logo" />
                </Link>
                <p className="w-60 text-gray-500 leading-5">
                  I&apos;m Gehad - a software engineer, quantum computing researcher and blogger.
                  Thanks for checking out my site!
                </p>
              </div>
              <p className="mt-6 text-gray-500">© {new Date().getFullYear()} Gehad Salem</p>
              {/* TODO: highlight Braydon Coyer Desgin */}
            </div>
            <div className="flex items-end w-full justify-end pr-16">
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
