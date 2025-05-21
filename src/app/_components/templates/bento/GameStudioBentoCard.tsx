"use client";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";
import { GamepadIcon } from "lucide-react";

const GameStudioIcon: React.FC = () => (
  <GamepadIcon className="h-8 w-8 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
);
export const GameStudioBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      name="Indie Video Games"
      videoSrc="/games/vyfrost.com.mp4"
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="See Games"
      description="Developing tiny games in a team of three"
      href=""
      icon={GameStudioIcon}
    />
  );
};
