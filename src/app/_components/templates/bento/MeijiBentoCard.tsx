"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";

const MeijiIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/meiji/meiji icon.svg"
    alt="Meiji Logo"
    className="h-12 w-16 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);

export const MeijiBentoCard = () => {
  return (
    <VideoBentoCard
      videoSrc="/meiji/oldMeijiAd.mp4"
      name="Japanese Chocolate & Wellness"
      cta="Explore Projects"
      description="Coupons, E-commerce, Health and Wellness"
      href="#meiji"
      icon={MeijiIcon}
      className="text-antique-900 col-span-6 row-span-2 lg:col-span-2"
    />
  );
};
