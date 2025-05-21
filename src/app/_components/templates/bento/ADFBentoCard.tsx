"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";

const AusGovIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/adf/aus-gov-logo.svg"
    alt="Australian Government Logo"
    className="text-antique-900 h-20 w-20 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const ADFBentoCard = ({
  tall,
  wide,
  showPrompt,
}: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="View Prototypes"
      description="Unused prototype footage"
      href="#adf-project"
      // videoSrc={"/adf/immersive-lightmode.mov"}
      videoSrc={"/adf/silly-but-relevant-ui-overlays.mov"}
      name="Australian Defense Force"
      icon={AusGovIcon}
      showPrompt={showPrompt}
    />
  );
};
