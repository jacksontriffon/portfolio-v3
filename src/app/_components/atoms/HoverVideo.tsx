"use client";

import { useEffect, useRef, type Ref } from "react";
import { cn } from "~/lib/utils";

interface HoverVideoProps {
  src: string;
  poster?: string;
  className?: string;
  parentRef?: Ref<HTMLDivElement>;
}

export default function HoverVideo({
  src,
  poster,
  className,
  parentRef,
}: HoverVideoProps) {
  useEffect(() => {
    parent.onmouseenter = async (_) => {
      await play();
    };
    parent.onmouseleave = (_) => {
      pause();
    };
  }, [parentRef]);

  const vidRef = useRef<HTMLVideoElement>(null);
  const play = () => vidRef.current?.play();
  const pause = () => {
    if (!vidRef.current) return;
    vidRef.current.pause();
    vidRef.current.currentTime = 0; // rewind
  };

  return (
    // <div
    // className={cn("group relative", className)}
    // >
    <video
      onMouseEnter={async () => {
        console.log("Mouse entered");
        await play();
      }}
      onMouseLeave={pause}
      ref={vidRef}
      src={src}
      poster={poster}
      muted // required for autoplay without a click
      loop
      // playsInline // avoids full-screen hijack on iOS
      className={cn("h-full w-full object-cover", className)}
    />
    // </div>
  );
}
