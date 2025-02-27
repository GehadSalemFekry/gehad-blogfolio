import { getTimeOfDayGreeting } from "../lib/utils";
import { BentoCard } from "./BentoCard";
import Image from "next/image";

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[220px] lg:h-[520px]" linkTo={linkTo}>
      <div className="flex flex-row lg:flex-col h-full lg:space-x-4 group">
        <div className="min-w-40 w-full sm:w-2/3 lg:w-full">
          <h2 className="text-base font-medium mb-4">Learn more about me</h2>
          <p className="mb-24 text-text-secondary text-sm sm:text-base">
            {timeOfDayGreeting} <br />
            I&apos;m Gehad, an experienced software engineer, and quantum computing researcher.
          </p>
        </div>

        <div className="relative">
          <div className="text-center group lg:pl-8 pl-16">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all ease-out duration-500 group-hover:border-indigo-400"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] grid place-items-center"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div>
          <Image
            src="/profile_pic_large.png"
            alt="A headshot"
            width={180}
            height={270}
            className="w-[180px] h-[270px] absolute -top-1 left-8 sm:-top-1 sm:left-16 lg:left-10 rotate-[8deg] object-cover rounded-lg shadow group-hover:rotate-[4deg] group-hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </BentoCard>
  );
}
