"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";
import { BrainIcon } from "lucide-react";

const AIIcon: React.FC = () => (
  <BrainIcon className="mb-1 h-8 w-8 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
);
export const AIProjectsBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      name="Projects with AI"
      videoSrc="/ai/subspaced.mov"
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="Learn More"
      description="Expanding capabilities with the newest tools"
      href="#thrive-by-five"
      icon={AIIcon}
    />
  );
};
