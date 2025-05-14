"use client";
import { LocationEditIcon } from "lucide-react";
import { BentoCard } from "~/app/_components/molecules/BentoCard";
import { Globe } from "~/app/_components/atoms/Globe";

const melbourneTime = new Date().toLocaleTimeString("en-US", {
  timeZone: "Australia/Melbourne",
  hour12: true, // 12-hour clock (AM/PM)
  hour: "numeric", // e.g. “1”
  minute: "2-digit", // e.g. “07”
});

export const GlobeBentoCard = () => {
  return (
    <BentoCard
      name={`Based in Melbourne - ${melbourneTime}`}
      background={
        <div className="relative">
          {/* <Meteors number={50} /> */}
          <Globe className="-top-24 scale-255" />
        </div>
      }
      className="text-antique-900 col-span-6 row-span-1 lg:col-span-2"
      cta="Apocalypse mode?"
      description="Flexible across timezones"
      onClick={() => {
        alert("How could you????????");
      }}
      href="https://www.worldtimebuddy.com/?pl=1&lid=2147714,1850147,2643743,5128581&h=2147714&hf=1"
      Icon={LocationEditIcon}
    />
  );
};
