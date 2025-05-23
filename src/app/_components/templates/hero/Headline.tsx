"use client";

import { TextAnimate } from "~/components/magicui/text-animate";
import { CoolMode } from "~/components/magicui/cool-mode";
import { AnimatedShinyText } from "~/components/magicui/animated-shiny-text";
import { SparklesText } from "~/app/_components/atoms/SparklesText";
import { useState } from "react";

export const Headline = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex flex-col gap-3 text-2xl font-bold sm:text-3xl">
      {pressed ? (
        <TextAnimate
          className="text-antique-900 inline-block text-center font-normal transition-all"
          animation="scaleUp"
          by="character"
        >
          Yes. Yes. Well done. You clicked it.
        </TextAnimate>
      ) : (
        <TextAnimate
          className="text-antique-900 inline-block text-center font-normal transition-all"
          animation="scaleUp"
          by="character"
        >
          Let me polish your ideas into
        </TextAnimate>
      )}
      <div className="flex justify-center gap-4">
        <SparklesText
          sparklesCount={3}
          className="text-antique-500 hover:text-antique-700 cursor-pointer text-xl leading-relaxed font-thin tracking-tight transition-all duration-300 hover:tracking-normal sm:text-2xl"
        >
          attractive
        </SparklesText>
        <div className="relative w-fit">
          <p className="text-antique-500 absolute -right-4 -bottom-8 -rotate-6 text-sm font-medium">
            {pressed ? "Nice. 😎" : "👆 Click me!"}
          </p>
          <div className="bg-antique-50/50">
            <CoolMode>
              <AnimatedShinyText
                className="border-antique-100 text-antique-500 hover:text-antique-900 hover:border-antique-200 inline-flex w-fit cursor-pointer items-center justify-center rounded-2xl border-2 bg-gradient-to-r px-4 py-1 text-base font-normal transition-all ease-out select-none hover:scale-105 hover:duration-300 active:scale-95 sm:text-lg"
                shimmerWidth={100}
                onMouseDown={() => setPressed(true)}
                onMouseUp={() => setPressed(false)}
                onMouseLeave={() => pressed && setPressed(false)}
                onPointerCancel={() => pressed && setPressed(false)}
                onPointerLeave={() => pressed && setPressed(false)}
              >
                <span>Interactive Experiences ✨ </span>
              </AnimatedShinyText>
            </CoolMode>
          </div>
        </div>
      </div>
    </div>
  );
};
