"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";

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
    <VideoBentoCard
      className="text-antique-900 col-span-6 lg:col-span-4"
      cta="Learn More"
      description="Unused prototype footage"
      href="#adf-project"
      videoSrc={"/adf/immersive-lightmode.mov"}
      name="Australian Defense Force"
      icon={AusGovIcon}
    />
  );
};
