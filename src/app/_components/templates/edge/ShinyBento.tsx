"use client";

import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
  HammerIcon,
  HandshakeIcon,
  PaintbrushIcon,
  SearchIcon,
} from "lucide-react";
import { GlowingEffect } from "~/components/ui/glowing-effect";
import { motion } from "motion/react";
import { Pointer } from "~/components/magicui/pointer";
import {
  CoolMode,
  type CoolParticleOptions,
} from "~/components/magicui/cool-mode";

export function ShinyBento() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<LightningBoltIcon className="text-antique-900 h-4 w-4" />}
        title="Rapid MVP Prototyping"
        description="Launch-ready prototypes built quickly, without cutting corners on polish or clarity."
        pointer={
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">⚡</div>
            </motion.div>
          </Pointer>
        }
        coolModeOptions={{
          particle: "/emoji/bolt.png",
        }}
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<PaintbrushIcon className="text-antique-900 h-4 w-4" />}
        title="UX-Led Engineering"
        description="Design decisions baked into the codebase, cutting weeks of rework and confusion."
        pointer={
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">🔭</div>
            </motion.div>
          </Pointer>
        }
        coolModeOptions={{
          particle: "/emoji/think.png",
        }}
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<HammerIcon className="text-antique-900 h-4 w-4" />}
        title="End-to-End Product Development"
        description="From idea to launch — I design, build, and ship complete digital products without needing a big team."
        pointer={
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 30, -30, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">🔨</div>
            </motion.div>
          </Pointer>
        }
        coolModeOptions={{
          particle: "/emoji/fire.png",
        }}
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<SearchIcon className="text-antique-900 h-4 w-4" />}
        title="Scope-Driven Tech Strategy"
        description="Features are reduced to their essence — saving time, cost, and cognitive overhead."
        pointer={
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">🔍</div>
            </motion.div>
          </Pointer>
        }
        coolModeOptions={{
          particle: "/emoji/target.png",
        }}
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<HandshakeIcon className="text-antique-900 h-4 w-4" />}
        title="Collaborative Product Partner"
        description="Clear communication across design, product, and dev teams to ship smarter, faster."
        pointer={
          <Pointer>
            <motion.div
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-2xl">🤝</div>
            </motion.div>
          </Pointer>
        }
        coolModeOptions={{
          particle: "/emoji/gnarly.png",
        }}
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  pointer?: React.ReactNode;
  coolModeOptions?: CoolParticleOptions;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  pointer,
  coolModeOptions,
}: GridItemProps) => {
  return (
    <li
      className={`min-h-[14rem] list-none ${area} pointer-events-none sm:pointer-events-auto`}
    >
      <CoolMode options={coolModeOptions}>
        <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            borderWidth={2}
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="border-antique-700 w-fit rounded-lg border p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="-tracking-4 text-antique-900 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] dark:text-white">
                  {title}
                </h3>
                <h2 className="text-antique-900 font-sans text-sm/[1.125rem] md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              </div>
            </div>
          </div>
          {pointer}
        </div>
      </CoolMode>
    </li>
  );
};
