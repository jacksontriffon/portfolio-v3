import { BentoGrid } from "~/components/magicui/bento-grid";
import { ADFBentoCard } from "~/app/_components/templates/bento/ADFBentoCard";
import { GlobeBentoCard } from "~/app/_components/templates/bento/GlobeBentoCard";
import { EdTechBentoCard } from "~/app/_components/templates/bento/EdTechBentoCard";
import { MeijiBentoCard } from "~/app/_components/templates/bento/MeijiBentoCard";
import { GameStudioBentoCard } from "./GameStudioBentoCard";
import { AIProjectsBentoCard } from "./AIProjectsBentoCard";
import { FinTechBentoCard } from "./FinTechBentoCard";
import { AntiqueDivider } from "../edge/PathsDrawEffect";

export interface CustomBentoCardProps {
  wide?: boolean;
  tall?: boolean;
  showPrompt?: boolean;
}

export const Bento = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-20">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center gap-4">
        <div className="flex w-full max-w-[1440px] items-center justify-center gap-6 px-10">
          <AntiqueDivider />
          <h3 className="text-antique-500 font-regular text-4xl">
            Abit of a Track Record
          </h3>
          <AntiqueDivider />
        </div>
        <p className="text-antique-500">
          Here's a <b>snippet</b> of projects I have worked on
        </p>
      </div>

      <BentoGrid color="#fff7eb" className="max-w-7xl">
        <ADFBentoCard wide showPrompt />
        <MeijiBentoCard tall />
        <AIProjectsBentoCard tall />
        <FinTechBentoCard />

        {/* <GlobeBentoCard /> */}
        <EdTechBentoCard />
        <GameStudioBentoCard />
      </BentoGrid>
    </section>
  );
};
