"use client";
import { LocationEditIcon } from "lucide-react";
import { BentoCard } from "~/app/_components/molecules/BentoCard";
import { Globe } from "~/app/_components/atoms/Globe";
import { useState } from "react";
import { Meteors } from "~/components/magicui/meteors";
import { cn } from "~/lib/utils";

const melbourneTime = new Date().toLocaleTimeString("en-US", {
  timeZone: "Australia/Melbourne",
  hour12: true, // 12-hour clock (AM/PM)
  hour: "numeric", // e.g. “1”
  minute: "2-digit", // e.g. “07”
});

export const GlobeBentoCard = () => {
  const [apocalypseMode, setApocalypseMode] = useState(false);
  return (
    <BentoCard
      name={`Based in Melbourne - ${melbourneTime}`}
      background={
        <div className="relative">
          <Globe className="-top-24 scale-255" />
          {/* <Meteors
            className={cn("-translate-60 transition-all duration-300", {
              "opacity-100": apocalypseMode,
              "opacity-0": !apocalypseMode,
            })}
            number={100}
          /> */}
        </div>
      }
      className="text-antique-900 col-span-6 row-span-1 lg:col-span-2"
      cta="Apocalypse mode?"
      description="Flexible across timezones"
      buttonProps={{
        onClick: () => {
          setApocalypseMode(!apocalypseMode);
        },
      }}
      Icon={LocationEditIcon}
    />
  );
};
