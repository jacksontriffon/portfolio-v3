"use client";
import Image from "next/image";
import { BentoCard } from "~/app/_components/molecules/BentoCard";
import HoverVideo from "../../atoms/HoverVideo";

const AusGovIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/adf/aus-gov-logo.svg"
    alt="Australian Government Logo"
    className="text-antique-900 h-20 w-20 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const ADFBentoCard = () => {
  return (
    <BentoCard
      name="Australian Defense Force"
      background={
        // <div className="relative z-0 min-h-full min-w-full">
        <div className="absolute inset-0 flex min-h-full min-w-full items-center justify-center overflow-hidden object-cover">
          <HoverVideo src="/adf/immersive-lightmode.mov" />
          {/* <Image
            className=""
            width={3840}
            height={1080}
            src={"/adf/topo-graph-bg4.png"}
            alt="Topographical Map Wallpaper"
          /> */}
          {/* <video
            className="h-full w-full object-cover opacity-35"
            loop
            // autoPlay
            muted
            src="/adf/immersive-lightmode.mov"
          /> */}
          {/* <video
            className="h-full w-full object-cover opacity-35"
            loop
            // autoPlay
            muted
            src="/adf/silly-but-relevant-ui-overlays.mov"
          /> */}
          {/* Gradient overlay */}
          <div className="bg-antique-50/20 absolute bottom-0 h-full w-full" />
          <div className="from-antique-50 via-antique-50 absolute bottom-0 h-2/3 w-full bg-gradient-to-t to-transparent" />
        </div>
        // </div>
      }
      onMouseEnter={() => {
        console.log("entered!");
      }}
      className="text-antique-900 col-span-6 lg:col-span-4"
      cta="Learn More"
      description="Unused prototype footage"
      href="#adf-project"
      Icon={AusGovIcon}
    />
  );
};
