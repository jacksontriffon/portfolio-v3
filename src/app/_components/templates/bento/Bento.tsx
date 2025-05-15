import {
  BentoCard,
  BentoGrid,
  type BentoCardProps,
} from "~/components/magicui/bento-grid";
import { ADFBentoCard } from "~/app/_components/templates/bento/ADFBentoCard";
import { GlobeBentoCard } from "~/app/_components/templates/bento/GlobeBentoCard";
import { ThriveByFiveBentoCard } from "~/app/_components/templates/bento/ThriveByFiveBentoCard";
import { MeijiBentoCard } from "~/app/_components/templates/bento/MeijiBentoCard";

export const Bento = () => {
  const features: BentoCardProps[] = [
    {
      name: "Ed Tech & Localisation",
      background: <></>,
      className: "col-span-6 lg:col-span-2 text-antique-900",
      cta: "View Extensions",
      description:
        "Chrome extensions to assist in navigating the world around us. ",
      href: "",
      Icon: "a",
    },
    {
      name: "Projects with Artificial Intelligence",
      background: <></>,
      className: "col-span-6 lg:col-span-4 text-antique-900",
      cta: "",
      description: "Building the future with every tool I can find.",
      href: "",
      Icon: "a",
    },
    // {
    //   name: "Vyfrost - Indie Game Studio",
    //   background: <></>,
    //   className: "col-span-6 lg:col-span-3 text-antique-900",
    //   cta: "Play Minigame",
    //   description:
    //     "Together with an artist & a musician - we build video games for fun!",
    //   href: "",
    //   Icon: "a",
    // },
  ];

  return (
    <div className="flex w-full justify-center">
      <BentoGrid color="#fff7eb" className="max-w-7xl">
        <ADFBentoCard />
        <GlobeBentoCard />
        <MeijiBentoCard />
        <ThriveByFiveBentoCard />
        {features.map((feature, index) => {
          return <BentoCard key={feature.name + index} {...feature} />;
        })}
      </BentoGrid>
    </div>
  );
};
