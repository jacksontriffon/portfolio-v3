import Image from "next/image";
import { BentoCard } from "~/app/_components";

const AusGovIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/adf/aus-gov-logo.svg"
    alt="Australian Government Logo"
    className="h-20 w-20 origin-bottom-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const ADFBentoCard = () => {
  return (
    <BentoCard
      name="Australian Defense Force"
      background={
        // <div className="relative z-0 min-h-full min-w-full">
        <div className="absolute inset-0 flex min-h-full min-w-full items-center justify-center overflow-hidden object-cover">
          <Image
            className=""
            width={3840}
            height={1080}
            src={"/adf/topo-graph-bg6.png"}
            alt="Topographical Map Wallpaper"
          />
          {/* <video
              className="h-full w-full object-cover opacity-35"
              loop
              autoPlay
              muted
              src="/adf/immersive-lightmode.mov"
            /> */}
          {/* <video
              className="h-full w-full object-cover opacity-35"
              loop
              autoPlay
              muted
              src="/adf/silly-but-relevant-ui-overlays.mov"
            /> */}
          {/* Gradient overlay */}
          {/* <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-white to-transparent" /> */}
        </div>
        // </div>
      }
      className="text-antique-900 col-span-6 lg:col-span-4"
      cta="Learn More"
      description="Unused prototype footage"
      href="#adf-project"
      Icon={AusGovIcon}
    />
  );
};
