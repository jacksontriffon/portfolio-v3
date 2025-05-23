"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  type MotionValue,
  type PanInfo,
  type Transition,
} from "framer-motion";

const ONE_SECOND = 1_000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS: Transition = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

interface SwipeCarouselProps {
  images: string[];
}

export const SwipeCarousel: React.FC<SwipeCarouselProps> = ({ images }) => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const dragX: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, images.length]);

  const onDragEnd = (
    _evt: MouseEvent | TouchEvent | PointerEvent,
    _info: PanInfo,
  ) => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} images={images} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images} />
      <GradientEdges />
    </div>
  );
};

/* ---------- Child Components ---------- */

interface ImagesProps {
  imgIndex: number;
  images: string[];
}

const Images: React.FC<ImagesProps> = ({ imgIndex, images }) => (
  <>
    {images.map((src, idx) => (
      <motion.div
        key={idx}
        style={{
          aspectRatio: "1 / 1.414", // A4 ratio
          backgroundImage: `url(${src})`,
          backgroundSize: "contain", // preserve full image
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
        transition={SPRING_OPTIONS}
        className="max-h-[80vh] w-screen shrink-0 rounded-xl object-cover"
      />
    ))}
  </>
);

interface DotsProps {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
}

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex, images }) => (
  <div className="mt-4 flex w-full justify-center gap-2">
    {images.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setImgIndex(idx)}
        className={`h-3 w-3 rounded-full transition-colors ${
          idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
        }`}
      />
    ))}
  </div>
);

const GradientEdges: React.FC = () => (
  <>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
  </>
);
