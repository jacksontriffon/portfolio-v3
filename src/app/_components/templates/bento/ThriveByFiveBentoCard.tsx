"use client";
import Image from "next/image";
import { useRef } from "react";
import { BentoCard } from "~/app/_components/molecules/BentoCard";

const ThriveByFiveIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/thrivebyfive/logo-thrive-by-five-antique.svg"
    alt="Thrive By Five Logo"
    className="h-12 w-12 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);
export const ThriveByFiveBentoCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => videoRef.current?.play();
  const stop = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // rewind so it starts fresh next hover
  };

  return (
    <BentoCard
      name="Thrive by Five"
      onMouseEnter={play}
      onMouseLeave={stop}
      background={
        <div>
          <video
            className="bg-antique-50 pointer-events-none absolute inset-0 h-full w-full object-cover"
            loop
            playsInline
            muted
            src="/thrivebyfive/ThriveByFive - Square.mp4"
          />
          {/* Gradient overlay */}
          <div className="bg-antique-50/20 absolute bottom-0 h-full w-full" />
          <div className="from-antique-50 via-antique-50 absolute bottom-0 h-2/3 w-full bg-gradient-to-t to-transparent" />
        </div>
      }
      className="text-antique-900 col-span-3 lg:col-span-2"
      cta="Learn More"
      description="Parental education in 3rd world countries."
      href="#thrive-by-five"
      Icon={ThriveByFiveIcon}
    />
  );
};
