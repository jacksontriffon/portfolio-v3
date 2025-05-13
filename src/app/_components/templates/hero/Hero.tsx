"use client";

import { AuroraText } from "~/components/magicui/aurora-text";
import { LineShadowText } from "~/components/magicui/line-shadow-text";
import { MorphingText } from "~/components/magicui/morphing-text";
import { TextAnimate } from "~/components/magicui/text-animate";
import { SparklesText } from "~/app/_components/index.client";
import { CoolMode } from "~/components/magicui/cool-mode";
import { AnimatedShinyText } from "~/components/magicui/animated-shiny-text";

export const Headline = () => {
  return (
    <div className="flex flex-col gap-3 text-2xl font-bold sm:text-3xl">
      <TextAnimate
        className="text-antique-900 inline-block"
        animation="scaleUp"
        by="character"
      >
        Let me polish your ideas into
      </TextAnimate>
      {/* <AuroraText
          className="stroke-antique-900 font-bold italic"
          colors={[
            "#985D25",
            "#CD7219",
            "#DC8C2F",
            "#FFE29A",
            "#FDC06B",
            "#D36E27",
            "#985622",
            "#8D441E",
            "#4E1A02",
          ]}
          speed={0.5}
        >
          Stunning
        </AuroraText> */}
      <div className="flex justify-center gap-4">
        <SparklesText
          sparklesCount={3}
          className="text-antique-500 hover:text-antique-700 cursor-pointer text-3xl font-medium tracking-tight transition-all duration-300 hover:tracking-normal"
        >
          Stunning
        </SparklesText>
        <div className="relative w-fit">
          <p className="text-antique-200 absolute -right-4 -bottom-8 -rotate-6 text-sm font-medium">
            👆 Click me!
          </p>
          <CoolMode>
            <AnimatedShinyText className="border-antique-100 text-antique-500 hover:text-antique-700 hover:border-antique-200 inline-flex w-fit cursor-pointer items-center justify-center rounded-2xl border-2 px-4 py-1 text-lg font-medium transition ease-out select-none hover:duration-300 active:scale-95">
              <span>Interactive Experiences ✨ </span>
            </AnimatedShinyText>
          </CoolMode>
        </div>
      </div>
      {/* <LineShadowText className="text-antique-50 stroke-antique-900 inline-block font-bold">
        Experiences
      </LineShadowText> */}
      {/* <MorphingText
          className="text-antique-900 text-3xl"
          texts={[
            "Interactive",
            "Digital",
            "Transformative",
            "Impactful",
            "Legendary",
          ]}
        /> */}
    </div>
  );
};
