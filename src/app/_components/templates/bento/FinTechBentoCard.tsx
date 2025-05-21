"use client";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";
import { CreditCardIcon } from "lucide-react";

const FinTechIcon: React.FC = () => (
  <CreditCardIcon className="h-8 w-8 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
);
export const FinTechBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      name="FinTech"
      videoSrc="/fintech/Wizit.mp4"
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
      cta="Learn More"
      description="Advancing the future of how we pay"
      href=""
      icon={FinTechIcon}
    />
  );
};
