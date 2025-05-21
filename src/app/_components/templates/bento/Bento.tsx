import { BentoGrid } from "~/components/magicui/bento-grid";
import { ADFBentoCard } from "~/app/_components/templates/bento/ADFBentoCard";
import { GlobeBentoCard } from "~/app/_components/templates/bento/GlobeBentoCard";
import { EdTechBentoCard } from "~/app/_components/templates/bento/EdTechBentoCard";
import { MeijiBentoCard } from "~/app/_components/templates/bento/MeijiBentoCard";
import { GameStudioBentoCard } from "./GameStudioBentoCard";
import { AIProjectsBentoCard } from "./AIProjectsBentoCard";
import { FinTechBentoCard } from "./FinTechBentoCard";

export interface CustomBentoCardProps {
  wide?: boolean;
  tall?: boolean;
  showPrompt?: boolean;
}

export const Bento = () => {
  return (
    <section className="relative flex w-full justify-center">
      <BentoGrid color="#fff7eb" className="max-w-7xl">
        <ADFBentoCard wide showPrompt />
        <MeijiBentoCard tall />
        <FinTechBentoCard />

        {/* <GlobeBentoCard /> */}
        <EdTechBentoCard />
        <GameStudioBentoCard />
        <AIProjectsBentoCard wide />
      </BentoGrid>
    </section>
  );
};
