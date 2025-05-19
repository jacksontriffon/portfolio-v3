"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "~/components/ui/3d-pin";
import { AntiqueDivider } from "../edge/PathsDrawEffect";
import { ShinyButton } from "~/components/magicui/shiny-button";
import { InteractiveGridPattern } from "~/components/magicui/interactive-grid-pattern";
import { cn } from "~/lib/utils";
import { BackgroundBeams } from "~/components/ui/background-beams";

export function ResumeDownload() {
  return (
    <>
      <div className="relative"></div>
      <div className="flex h-[60rem] w-full flex-col items-center justify-center gap-28 sm:gap-56">
        <div className="z-10 flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center justify-center gap-6 px-10">
            <AntiqueDivider />
            <h3 className="text-antique-500 font-regular text-4xl">
              Looking for my resume?
            </h3>
            <AntiqueDivider />
          </div>
          <a href="/resume/SJ's-Resume.pdf" download>
            <ShinyButton className="text-antique-900 cursor-pointer">
              Well, look no further! <br /> Click to Download
            </ShinyButton>
          </a>
          {/* <p className="text-antique-500 rotate-3">Well, look no further!</p> */}
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="pointer-events-none absolute z-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
            {/* <InteractiveGridPattern
              className={cn(
                "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-40%] skew-y-12",
              )}
            /> */}
            <BackgroundBeams />
          </div>
          <PinContainer
            title="Download Resume"
            href="/resume/SJ's-Resume.pdf"
            className="aspect-[1/1.414] max-h-[70dvh] w-screen max-w-[80dvw] sm:h-screen sm:w-auto"
          >
            <Image
              className="h-full w-full"
              src={"/resume/resume-page-1.svg"}
              width={800}
              height={1600}
              alt="Resume"
            />
          </PinContainer>
        </div>
      </div>
    </>
  );
}
