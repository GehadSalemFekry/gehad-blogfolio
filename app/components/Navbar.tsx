"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SocialPill } from "./SocialPill";
import { usePathname } from "next/navigation";

const navigationLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Toolbox",
    link: "/toolbox",
  },
];

const Navbar: React.FC = () => {
  const path = usePathname();

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  function determineActiveClass(link: string) {
    return path === link ? "text-text-primary" : "text-gray-500";
  }

  return (
    <nav className="w-full flex items-center justify-between h-16 px-4 bleed-border-b bleed-border-primary/50">
      <span className="hidden sm:block w-2 h-px bg-slate-400 absolute right-[-4.25px] top-[63px] z-10"></span>
      <span className="hidden sm:block w-px h-2 bg-slate-400 absolute right-[-1px] top-[59.6px] z-10"></span>

      <span className="hidden sm:block w-2 h-px bg-slate-400 absolute left-[-4.50px] top-[63px] z-10"></span>
      <span className="hidden sm:block w-px h-2 bg-slate-400 absolute left-[-1px] top-[59.6px] z-10"></span>
      <div className="w-[104px]">
        <Link href="/">
          <Image width={64} height={64} src="/logo.png" alt="Gehad's Logo" />
        </Link>
      </div>
      <ul className="hidden sm:flex place-items-center space-x-4 border border-border-primary px-5 py-2 rounded-full text-sm text-gray-500">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className={`${determineActiveClass(link.link)} hover:text-text-primary font-medium`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="sm:hidden p-2 text-gray-500 hover:text-text-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-bg-primary border-t border-border-primary/50 z-20">
          <ul className="flex flex-col space-y-4 p-4 text-sm text-gray-500">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={`${determineActiveClass(
                    link.link
                  )} hover:text-text-primary font-medium block py-2`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden sm:block">
        <SocialPill />
      </div>
    </nav>
  );
};

export default Navbar;
