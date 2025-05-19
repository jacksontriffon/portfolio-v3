import Image from "next/image";
import { BentoCard } from "~/app/_components";

const MeijiIcon: React.FC = () => (
  <Image
    width={120}
    height={120}
    src="/meiji/meiji icon.svg"
    alt="Meiji Logo"
    className="h-12 w-16 origin-bottom-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
  />
);

export const MeijiBentoCard = () => {
  return (
    <BentoCard
      name="Japanese Chocolate & Wellness"
      background={
        <>
          <video
            className="bg-antique-50 pointer-events-none absolute inset-0 h-full w-full object-cover"
            loop
            autoPlay
            playsInline
            muted
            src="/meiji/oldMeijiAd.mp4"
          />
          {/* Gradient overlay */}
          <div className="bg-antique-50/20 absolute bottom-0 h-full w-full" />
          <div className="from-antique-50 via-antique-50 absolute bottom-0 h-1/3 w-full bg-gradient-to-t to-transparent" />
        </>
      }
      className="text-antique-900 col-span-6 row-span-2 lg:col-span-2"
      cta="Explore Projects"
      description="Coupons, E-commerce, Health and Wellness"
      href="#meiji"
      Icon={MeijiIcon}
    />
  );
};
