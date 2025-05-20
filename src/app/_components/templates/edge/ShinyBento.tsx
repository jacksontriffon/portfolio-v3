"use client";

import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
  Box,
  HammerIcon,
  HandshakeIcon,
  Lock,
  PaintbrushIcon,
  Search,
  SearchIcon,
  Settings,
  Sparkles,
} from "lucide-react";
import { GlowingEffect } from "~/components/ui/glowing-effect";

export function ShinyBento() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<LightningBoltIcon className="text-antique-900 h-4 w-4" />}
        title="Rapid MVP Prototyping"
        description="Launch-ready prototypes built quickly, without cutting corners on polish or clarity."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<PaintbrushIcon className="text-antique-900 h-4 w-4" />}
        title="UX-Led Engineering"
        description="Design decisions baked into the codebase, cutting weeks of rework and confusion."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<HammerIcon className="text-antique-900 h-4 w-4" />}
        title="End-to-End Product Development"
        description="From idea to launch — I design, build, and ship complete digital products without needing a big team."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<SearchIcon className="text-antique-900 h-4 w-4" />}
        title="Scope-Driven Tech Strategy"
        description="Features are reduced to their essence — saving time, cost, and cognitive overhead."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<HandshakeIcon className="text-antique-900 h-4 w-4" />}
        title="Collaborative Product Partner"
        description="Clear communication across design, product, and dev teams to ship smarter, faster."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
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
      </div>
    </li>
  );
};
