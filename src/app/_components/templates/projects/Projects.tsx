import { ThreeDMarquee, type Media } from "~/components/ui/3d-marquee";
import { ProjectDialog } from "./ProjectDialog";

export const Projects = () => {
  const media: Media[] = [
    { src: "/marquee/defence-marquee.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee2.png", type: "image" },
    { src: "/marquee/gaming-marquee.png", type: "image" },
    { src: "/marquee/inner-garden-marquee.png", type: "image" },
    { src: "/marquee/probio-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee.png", type: "image" },
    { src: "/marquee/inner-garden-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee2.png", type: "image" },
    { src: "/marquee/gaming-marquee.png", type: "image" },
    { src: "/marquee/probio-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee.png", type: "image" },
    //
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee2.png", type: "image" },
    { src: "/marquee/inner-garden-marquee.png", type: "image" },
    { src: "/marquee/gaming-marquee.png", type: "image" },
    { src: "/marquee/probio-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/fintech-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee2.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/gaming-marquee.png", type: "image" },
    { src: "/marquee/inner-garden-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee.png", type: "image" },
    { src: "/marquee/coupon-marquee-brown.png", type: "image" },
    { src: "/marquee/edtech-marquee-brown.png", type: "image" },
    { src: "/marquee/probio-marquee.png", type: "image" },
    { src: "/marquee/fintech-marquee.png", type: "image" },
    { src: "/marquee/defence-marquee2.png", type: "image" },
    { src: "/marquee/inner-garden-marquee.png", type: "image" },
    { src: "/marquee/gaming-marquee.png", type: "image" },
    { src: "/marquee/probio-marquee.png", type: "image" },
  ];
  return (
    <div className="relative mx-auto my-10 w-full max-w-screen overflow-hidden ring-1 ring-neutral-700/10 sm:max-w-7xl">
      <div className="pointer-events-none absolute z-10 h-full w-full bg-[radial-gradient(400px_circle_at_center,rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.1))]"></div>
      <div className="pointer-events-none absolute z-20 flex h-full w-full flex-col items-center justify-center gap-8">
        <h3 className="pointer-events-none text-5xl font-bold text-white">
          A Glimpse at the Work
        </h3>
        <p className="pointer-events-none max-w-96 text-center text-base font-medium text-neutral-200">
          Check out snippets of projects I can share.
          <br /> Click below for details!
        </p>
        <div className="pointer-events-auto">
          <ProjectDialog />
        </div>
      </div>
      <ThreeDMarquee media={media} />
    </div>
  );
};
