"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";

const ThriveByFiveIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/thrivebyfive/logo-thrive-by-five-antique.svg"
    alt="Thrive By Five Logo"
    className="h-12 w-12 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const AIProjectsBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      name="Projects with AI"
      videoSrc="/thrivebyfive/ThriveByFive - Square.mp4"
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="Learn More"
      description="Parental education in 3rd world countries."
      href="#thrive-by-five"
      icon={ThriveByFiveIcon}
    />
  );
};
