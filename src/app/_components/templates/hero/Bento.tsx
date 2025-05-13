import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { BentoCard, BentoGrid } from "~/components/magicui/bento-grid";
import { Globe } from "~/app/_components/index.client";
import {} from "@radix-ui/react-icons";
import { LocateIcon, LocationEditIcon } from "lucide-react";

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

export const Bento = () => {
  const melbourneTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Australia/Melbourne",
    hour12: true, // 12-hour clock (AM/PM)
    hour: "numeric", // e.g. “1”
    minute: "2-digit", // e.g. “07”
  });

  const features: BentoCardProps[] = [
    {
      name: "Crystal clear comms.",
      background: <div className="-translate-y-44"></div>,
      className: "col-span-3 lg:col-span-2",
      cta: "",
      description: "",
      href: "",
      Icon: "a",
    },
    {
      name: "Proudly Aussie!",
      background: (
        <div className="relative">
          <Globe className="-top-24 scale-255" />
        </div>
      ),
      className: "row-span-1 col-span-3 lg:col-span-1 text-antique-900",
      cta: "Check our Time Difference",
      description: `Based in Melbourne - ${melbourneTime}`,
      href: "https://www.worldtimebuddy.com/?pl=1&lid=2147714,1850147,2643743,5128581&h=2147714&hf=1",
      Icon: LocationEditIcon,
    },
    {
      name: "Merely a tool amongst tools",
      background: <></>,
      className: "col-span-3 lg:col-span-1",
      cta: "",
      description: "",
      href: "",
      Icon: "a",
    },
    {
      name: "Looking to meetup?",
      background: <></>,
      className: "col-span-3 lg:col-span-2",
      cta: "",
      description: "",
      href: "",
      Icon: "a",
    },
  ];
  return (
    <BentoGrid color="#fff7eb" className="">
      {features.map((feature, index) => {
        return <BentoCard key={feature.name + index} {...feature} />;
      })}
    </BentoGrid>
  );
};
