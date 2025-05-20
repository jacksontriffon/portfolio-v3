import { EvervaultCard } from "~/components/ui/evervault-card";
import { PathsDraw } from "./PathsDraw";
import Image from "next/image";

export const Edge = () => {
  return (
    <div className="relative w-full">
      <div>
        <Image
          src={"/edge/Figma.svg"}
          width={40}
          height={40}
          alt="Figma logo"
          className="absolute w-7 translate-y-9"
        />
        <PathsDraw />
      </div>
      <div className="absolute -top-6 flex w-full flex-col items-center justify-center">
        <EvervaultCard
          className="text-antique-900 z-10 h-96 max-w-[450px]"
          text="UX + Dev"
        />
        {/* <h4 className="text-antique-500 -translate-y-16 text-4xl font-thin underline">
          Why Design Fluency Helps
        </h4> */}
      </div>
    </div>
  );
};
