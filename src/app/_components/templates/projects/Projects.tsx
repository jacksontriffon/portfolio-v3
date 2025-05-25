import { ThreeDMarquee, type Media } from "~/components/ui/3d-marquee";
import { ProjectDialog } from "./ProjectDialog";
import { cn } from "~/lib/utils";
import { AntiqueDivider } from "../edge/PathsDrawEffect";
import { ShinyButton } from "~/components/magicui/shiny-button";

export const Projects = () => {
  const media: Media[] = [
    { src: "/marquee/defence-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/ai-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee-brown.png", type: "image" },
    { src: "/marquee/defence-marquee-brown.png", type: "image" },
    { src: "/marquee/gaming-marquee2-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee-brown.png", type: "image" },
    { src: "/marquee/defence-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    { src: "/marquee/defence-marquee2-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/ai-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee-brown.png", type: "image" },
    // column - 2
    { src: "/marquee/defence-marquee2-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee-brown.png", type: "image" },
    { src: "/marquee/defence-marquee2-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    // invisible
    { src: "/marquee/gaming-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee-brown.png", type: "image" },
    // column - 3
    { src: "/marquee/gaming-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    // invisible
    { src: "/marquee/gaming-marquee-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee-brown.png", type: "image" },
    { src: "/marquee/inner-garden-marquee-brown.png", type: "image" },
    // column - 4
    { src: "/marquee/ai-marquee-brown.png", type: "image" },
    { src: "/marquee/gaming-marquee2-brown.png", type: "image" },
  ];
  return (
    <div>
      {/* <div className="z-10 flex w-full flex-col items-center gap-4">
        <div className="flex w-full max-w-[1440px] items-center justify-center gap-6 px-10">
          <AntiqueDivider />
          <h3 className="text-antique-500 font-regular text-4xl">
            Projects you say?
          </h3>
          <AntiqueDivider />
        </div>
        <ShinyButton className="text-antique-900 cursor-pointer">
          Check these bad boys out
        </ShinyButton>
      </div> */}
      <div className="relative mx-auto my-10 w-full max-w-screen overflow-hidden ring-1 ring-neutral-700/10 sm:max-w-7xl">
        <div className="pointer-events-none absolute z-20 flex h-full w-full flex-col items-center justify-center gap-8">
          <h3 className="text-antique-700 pointer-events-none text-5xl font-bold">
            A Glimpse at the Work
          </h3>
          <p className="text-antique-200 pointer-events-none max-w-96 text-center text-base font-medium">
            Check out snippets of projects I can share.
            <br /> Click below for details!
          </p>
          <div className="pointer-events-auto">
            <ProjectDialog />
          </div>
        </div>
        <div
          className={cn(
            "absolute z-10 h-full w-full",
            "bg-[radial-gradient(700px_circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.8),rgba(255,255,255,0.1))]",
          )}
        ></div>
        <ThreeDMarquee media={media} />
      </div>
    </div>
  );
};
