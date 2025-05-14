"use client";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { AnimatedSubscribeButton } from "~/components/magicui/animated-subscribe-button";
import { useInterval, useCopyToClipboard } from "usehooks-ts";
import { WordRotate } from "~/components/magicui/word-rotate";
import { ShinyButton } from "~/components/magicui/shiny-button";
import { InteractiveHoverButton } from "~/components/magicui/interactive-hover-button";

const emails = [
  "sayHello",
  "whisperSweetNothings",
  "awkwardlySmile",
  "stareIntensely",
  "singOpera",
  "tapDance",
  "slowlyClap",
  "waveAnElbow",
  "curtsy",
  "bow",
];
export const EmailCta = () => {
  const [index, setIndex] = useState(0);
  const currentEmail = emails[index] ?? "";

  const [, copy] = useCopyToClipboard();

  useInterval(() => {
    setIndex((prev) => (prev + 1) % emails.length);
  }, 5000);

  return (
    <div className="grid w-full grid-cols-36 items-center justify-center gap-0">
      {/* <ShinyButton className="bg-antique-900 text-white">
        Send Email
      </ShinyButton> */}
      <InteractiveHoverButton className="text-antique-900 col-span-17 ml-auto">
        Send Email?
      </InteractiveHoverButton>
      <AnimatedSubscribeButton
        onClick={async () => {
          await copy(currentEmail);
        }}
        className="bg-antique-50/0 text-antique-700 col-span-19 text-sm transition duration-150 hover:scale-105 active:scale-90"
      >
        <span className="group inline-flex items-center gap-2 text-base transition-all duration-150">
          <CopyIcon className="ml-1 size-4 transition-all duration-300" />
          <WordRotate words={emails} duration={5000} />
          @sjcoded.com
        </span>
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          Copied Email
        </span>
      </AnimatedSubscribeButton>
    </div>
  );
};
