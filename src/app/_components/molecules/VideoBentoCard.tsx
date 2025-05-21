"use client";
import { BentoCard } from "~/app/_components/molecules/BentoCard";
import { useRef } from "react";
import { cn } from "~/lib/utils";

interface VideoBentoCardProps {
  name: string;
  videoSrc: string;
  icon: React.FC;
  cta: string;
  description: string;
  href: string;
  className?: string;
  tall?: boolean;
  showPrompt?: boolean;
}

export const VideoBentoCard: React.FC<VideoBentoCardProps> = ({
  name,
  videoSrc,
  icon: Icon,
  cta,
  description,
  href,
  className,
  tall,
  showPrompt,
}) => {
  const vidRef = useRef<HTMLVideoElement>(null);

  const play = () => vidRef.current?.play();
  const pause = () => {
    if (!vidRef.current) return;
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
  };

  return (
    <BentoCard
      name={name}
      background={
        <div className="absolute inset-0 flex min-h-full min-w-full items-center justify-center overflow-hidden object-cover">
          <video
            ref={vidRef}
            src={videoSrc}
            muted
            loop
            className="h-full w-full object-cover"
          />
          <div className="bg-antique-50/20 absolute bottom-0 h-full w-full" />
          <div
            className={cn(
              "from-antique-50/99 via-antique-50/90 absolute bottom-0 h-2/3 w-full bg-gradient-to-t to-transparent",
              {
                "h-1/3": tall,
              },
            )}
          />
        </div>
      }
      onMouseEnter={play}
      onMouseLeave={pause}
      onPointerEnter={play}
      onPointerLeave={pause}
      className={cn("text-antique-900", className)}
      cta={cta}
      description={description}
      href={href}
      Icon={Icon}
      showPrompt={showPrompt}
    />
  );
};
