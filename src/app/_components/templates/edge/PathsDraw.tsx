"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useMotionValue } from "motion/react";
import { animate } from "motion";
import { PathsDrawEffect } from "./PathsDrawEffect";

export function PathsDraw() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // `once:true` ⇒ fire a single time, threshold 20 % of the component height
  const isInView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  /* Five independent motion-values, one for each path */
  const pathLengthFirst = useMotionValue(0);
  const pathLengthSecond = useMotionValue(0);
  const pathLengthThird = useMotionValue(0);
  const pathLengthFourth = useMotionValue(0);
  const pathLengthFifth = useMotionValue(0);

  /* Kick off the animation when the section becomes visible */
  useEffect(() => {
    if (!isInView) return;

    const opts = { duration: 2, easing: "ease-in-out" } as const;
    animate(pathLengthFirst, 1, { ...opts, delay: 0.0 });
    animate(pathLengthSecond, 1, { ...opts, delay: 0.05 });
    animate(pathLengthThird, 1, { ...opts, delay: 0.1 });
    animate(pathLengthFourth, 1, { ...opts, delay: 0.15 });
    animate(pathLengthFifth, 1, { ...opts, delay: 0.2 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={containerRef} className="relative w-full overflow-clip">
      <PathsDrawEffect
        title="Clever designs save weeks."
        description="I spot flaws in Figma, not in Production."
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
