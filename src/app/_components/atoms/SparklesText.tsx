"use client";

import { motion } from "motion/react";
import { type CSSProperties, type ReactElement, useState } from "react";

import { cn } from "~/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

interface SparklesTextProps {
  as?: ReactElement;
  className?: string;
  children: React.ReactNode;
  sparklesCount?: number;
  colors?: { first: string; second: string };
}

const generateStar = (colors: { first: string; second: string }): Sparkle => {
  const starX = `${Math.random() * 100}%`;
  const starY = `${Math.random() * 100}%`;
  const color = Math.random() > 0.5 ? colors.first : colors.second;
  const delay = Math.random() * 2;
  const scale = Math.random() * 1 + 0.3;
  const id = crypto.randomUUID();
  return { id, x: starX, y: starY, color, delay, scale };
};

const Sparkle: React.FC<Sparkle & { onComplete: (oldId: string) => void }> = ({
  id,
  x,
  y,
  color,
  delay,
  scale,
  onComplete,
}) => (
  <motion.svg
    key={id}
    className="pointer-events-none absolute z-20"
    initial={{ opacity: 0, left: x, top: y }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, scale, 0],
      rotate: [75, 120, 150],
    }}
    transition={{ duration: 0.8, delay }}
    onAnimationComplete={() => onComplete(id)}
    width="21"
    height="21"
    viewBox="0 0 21 21"
  >
    <path
      d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
      fill={color}
    />
  </motion.svg>
);

export const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  colors = { first: "#FDC06B", second: "#FFE29A" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  // base sparkle state
  const [sparkles, setSparkles] = useState<Sparkle[]>(() =>
    Array.from({ length: sparklesCount }, () => generateStar(colors)),
  );
  // extra sparkles on hover
  const [hoverSparkles, setHoverSparkles] = useState<Sparkle[]>([]);

  const replaceStar = (oldId: string) => {
    setSparkles((current) =>
      current.map((star) => (star.id === oldId ? generateStar(colors) : star)),
    );
  };

  const handleHoverStart = () => {
    setHoverSparkles(
      Array.from({ length: sparklesCount * 3 }, () => generateStar(colors)),
    );
  };

  const handleHoverEnd = () => {
    setHoverSparkles([]);
  };

  return (
    <motion.div
      className={cn("", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": colors.first,
          "--sparkles-second-color": colors.second,
        } as CSSProperties
      }
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      whileHover={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="relative inline-block">
        {[...sparkles, ...hoverSparkles].map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} onComplete={replaceStar} />
        ))}
        <strong>{children}</strong>
      </span>
    </motion.div>
  );
};
