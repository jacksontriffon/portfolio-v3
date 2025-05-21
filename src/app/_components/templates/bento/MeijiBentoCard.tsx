"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";
import type { CustomBentoCardProps } from "./Bento";
import { cn } from "~/lib/utils";

const MeijiIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/meiji/meiji icon.svg"
    alt="Meiji Logo"
    className="h-12 w-16 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);

export const MeijiBentoCard = ({ tall, wide }: CustomBentoCardProps) => {
  return (
    <VideoBentoCard
      videoSrc="/meiji/oldMeijiAd.mp4"
      name="Japanese Chocolate & Wellness"
      cta="Explore Projects"
      description="Coupons, E-commerce, Health and Wellness"
      href="#meiji"
      tall={tall}
      icon={MeijiIcon}
      className={cn("text-antique-900 col-span-6 lg:col-span-2", {
        "row-span-2": tall,
        "lg:col-span-4": wide,
      })}
    />
  );
};
