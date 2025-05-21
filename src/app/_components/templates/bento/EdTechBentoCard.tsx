"use client";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";
import { BookOpenIcon } from "lucide-react";

const EdTechIcon: React.FC = () => (
  <BookOpenIcon className="mb-1 h-8 w-8 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
);
export const EdTechBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      name="EdTech"
      videoSrc="/edtech/ThriveByFive - Square.mp4"
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="Learn More"
      description="Parental education in 3rd world countries"
      href="#thrive-by-five"
      icon={EdTechIcon}
    />
  );
};
