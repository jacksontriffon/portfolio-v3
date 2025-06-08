"use client";
import Image from "next/image";
import { ScratchMyFace } from "~/app/_components/molecules/ScratchMyFace";
import { useState, type JSX } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SwitchToMobile } from "./SwitchToMobile";

const introText = {
  default: {
    title: "Hey! I'm SJ 👋",
    description: (
      <span>
        “This portfolio is <b>baked with hidden goodies,</b> best of luck
        finding them all!”
      </span>
    ),
  },
  faceClicked: {
    title: "Or am I 'really' SJ?... 🤔",
    description: (
      <span>
        &quot;Go ahead and <b>scratch to reveal</b> my true identity ~ but this
        is <i>just</i> between you and me alright.&quot;
      </span>
    ),
  },
  faceRevealed: {
    title: "Ha. ALRIGHT. You got me!",
    description: (
      <span>
        Now, what about a <i>quick game</i> of poker? ♠️♥️
      </span>
    ),
  },
} as const;

export const Intro = () => {
  const [activeText, setActiveText] = useState<{
    readonly title: string;
    readonly description: JSX.Element;
  }>(introText.default);

  return (
    <div className="3xl:mx-auto flex max-w-[1920px] justify-between">
      <section className="flex items-center justify-center gap-6 pt-10 sm:justify-normal sm:px-20 sm:pt-20 lg:pr-40 lg:pl-10 xl:pl-40">
        <div>
          {activeText !== introText.default ? (
            <ScratchMyFace
              onComplete={() => {
                setActiveText(introText.faceRevealed);
              }}
            />
          ) : (
            <Image
              onClick={() => {
                if (activeText === introText.default)
                  setActiveText(introText.faceClicked);
              }}
              src={"/SJ's face.png"}
              alt="SJ's face, smiling casually."
              priority
              width={120}
              height={120}
              className="border-antique-900 outline-antique-900 hover:shadow-antique-100 w-32 cursor-pointer rounded-full border-2 shadow-xl outline-1 outline-offset-2 transition-all duration-300 hover:-translate-y-1 active:scale-95"
            />
          )}
        </div>
        <div className="text-antique-900 flex max-w-96 flex-col gap-2">
          <AnimatePresence mode="wait">
            <div className="flex flex-col gap-1">
              <motion.h2
                key={activeText.title}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-3xl"
              >
                {activeText.title}
              </motion.h2>

              <motion.p
                key={activeText.title + "-desc"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-base"
              >
                {activeText.description}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
      </section>
      <SwitchToMobile />
    </div>
  );
};
