"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "~/components/ui/3d-pin";
import { AntiqueDivider } from "../edge/PathsDrawEffect";
import { ShinyButton } from "~/components/magicui/shiny-button";
import { BackgroundBeams } from "~/components/ui/background-beams";
import { toast } from "sonner";
import { DownloadIcon } from "lucide-react";

export function ResumeDownload() {
  return (
    <div className="xs:gap-40 flex h-[60rem] w-full flex-col items-center justify-center gap-28 sm:gap-56">
      <div className="z-10 flex w-full flex-col items-center gap-4">
        <div className="flex w-full max-w-[1440px] items-center justify-center gap-6 px-10">
          <AntiqueDivider />
          <h3 className="text-antique-500 font-regular text-4xl">
            Looking for my resume?
          </h3>
          <AntiqueDivider />
        </div>
        <a
          onClick={() => {
            toast("Resume Downloaded", {
              icon: <DownloadIcon />,
              dismissible: true,
            });
          }}
          href="/resume/SJ's-Resume.pdf"
          download
        >
          <ShinyButton className="text-antique-900 cursor-pointer">
            Well, look no further! <br /> Click to Download
          </ShinyButton>
        </a>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="pointer-events-none absolute z-0 flex h-full w-full max-w-[1920px] flex-col items-center justify-center overflow-hidden">
          <BackgroundBeams />
        </div>
        <PinContainer
          title="Download Resume"
          href="/resume/SJ's-Resume.pdf"
          className="aspect-[1/1.414] max-h-[70dvh] w-screen max-w-[80dvw] sm:h-screen sm:w-auto xl:max-h-[700px]"
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
  );
}
