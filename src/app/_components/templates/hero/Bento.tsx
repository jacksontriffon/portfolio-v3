import {
  BentoCard,
  BentoGrid,
  type BentoCardProps,
} from "~/components/magicui/bento-grid";
import { ADFBentoCard } from "~/app/_components/templates/bento/ADFBentoCard";
import { GlobeBentoCard } from "~/app/_components/templates/bento/GlobeBentoCard";

export const Bento = () => {
  const features: BentoCardProps[] = [
    {
      name: "Meiji - Japanese Chocolate",
      background: <></>,
      className: "row-span-2 col-span-6 lg:col-span-2 text-black",
      cta: "Explore Projects",
      description: "Coupons, Ecommerce, Health and Wellness",
      href: "",
      Icon: "a",
    },
    {
      name: "Thrive by Five",
      background: <></>,
      className: "col-span-6 lg:col-span-2 text-antique-900",
      cta: "Learn More",
      description: "Parental education in 3rd world countries.",
      href: "",
      Icon: "a",
    },
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
        {features.map((feature, index) => {
          return <BentoCard key={feature.name + index} {...feature} />;
        })}
      </BentoGrid>
    </div>
  );
};
