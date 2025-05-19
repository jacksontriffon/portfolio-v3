import { EvervaultCard } from "~/components/ui/evervault-card";
import { PathsDraw } from "./PathsDraw";

export const Edge = () => {
  return (
    <div className="relative w-full">
      <PathsDraw />
      <div className="absolute -top-6 flex w-full items-center justify-center">
        <EvervaultCard
          className="text-antique-900 h-96 max-w-[450px]"
          text="UX + Dev"
        />
      </div>
    </div>
  );
};
