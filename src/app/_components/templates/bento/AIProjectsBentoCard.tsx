"use client";
import Image from "next/image";
import { VideoBentoCard } from "../../molecules/VideoBentoCard";

const ThriveByFiveIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/thrivebyfive/logo-thrive-by-five-antique.svg"
    alt="Thrive By Five Logo"
    className="h-12 w-12 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const AIProjectsBentoCard = () => {
  return (
    <VideoBentoCard
      name="Projects with AI"
      videoSrc="/thrivebyfive/ThriveByFive - Square.mp4"
      className="text-antique-900 col-span-6 lg:col-span-2"
      cta="Learn More"
      description="Parental education in 3rd world countries."
      href="#thrive-by-five"
      icon={ThriveByFiveIcon}
    />
  );
};
