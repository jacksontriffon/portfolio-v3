"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInterval } from "usehooks-ts";
import { TextAnimate } from "../magicui/text-animate";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  type: "video" | "image";
  title: string;
  subtitle: string;
  tags?: string[];
  buttonOrLink?: ReactNode;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [delay, setDelay] = useState<number | null>(autoplay ? 10_000 : null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === active) {
        // guarantee autoplay — must be muted on Chrome/Safari
        vid.muted = true;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        void vid.play().catch(() => {});
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  }, [active]);

  /** Clear current timer → start a fresh one */
  const restartTimer = () => {
    if (!autoplay) return;
    setDelay(null);
    setTimeout(() => setDelay(10_000), 0);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    restartTimer();
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    restartTimer();
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useInterval(handleNext, delay);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto px-4 antialiased">
      <div className="relative grid grid-cols-1 gap-14 md:grid-cols-2 xl:pt-4">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="border-antique-100 absolute inset-0 origin-bottom overflow-hidden rounded-3xl border shadow-xl"
                >
                  {testimonial.type === "image" ? (
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                    />
                  ) : testimonial.type === "video" ? (
                    <>
                      <div className="from-antique-50 via-antique-50/95 via-antique-50/50 to-antique-50/0 absolute bottom-0 h-1/3 w-full bg-gradient-to-t"></div>
                      <div className="absolute bottom-0 flex flex-col px-4 py-4">
                        <p className="text-antique-900 font-bold">
                          {testimonials[active]?.name}
                        </p>
                        <p className="text-antique-500 text-sm font-normal">
                          {testimonials[active]?.designation}
                        </p>
                      </div>
                      <video
                        preload="auto"
                        src={testimonial.src}
                        width={500}
                        height={500}
                        draggable={false}
                        muted
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        loop
                        className="h-full w-full object-cover object-center"
                      />
                    </>
                  ) : null}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-4">
          <motion.div
            key={active}
            className="flex flex-col lg:gap-1"
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-antique-500 pb-2 text-2xl font-bold lg:text-3xl">
              {testimonials[active]?.title}
            </h3>
            <p className="text-antique-500 text-sm lg:text-base dark:text-neutral-500">
              {testimonials[active]?.subtitle}
            </p>
            <TextAnimate
              className="text-antique-500 mt-4 text-base whitespace-pre-line lg:text-xl"
              animation="blurIn"
              by="word"
              duration={1}
            >
              {testimonials[active]?.quote ?? ""}
            </TextAnimate>
            {testimonials[active]?.buttonOrLink}
            <div className="flex flex-wrap gap-2 pt-4">
              {testimonials[active]?.tags?.map((tag, i) => (
                <motion.div
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 1 + 0.1 * i,
                  }}
                  className="border-antique-100 rounded border px-1 py-1"
                  key={tag + testimonials[active]?.name}
                >
                  <p className="text-antique-500 text-sm font-medium lg:text-base">
                    {tag}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="flex items-end justify-between">
            <div className="flex gap-4 pt-16 md:pt-8">
              <button
                onClick={handlePrev}
                className="group/button border-antique-200 hover:outline-antique-200 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:outline hover:outline-offset-2 focus:outline-4"
              >
                <IconArrowLeft className="text-antique-900 h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button hover:outline-antique-200 border-antique-200 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border hover:outline hover:outline-offset-2 focus:outline-4"
              >
                <IconArrowRight className="text-antique-900 h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
            <p className="text-antique-900">
              {active + 1} / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
