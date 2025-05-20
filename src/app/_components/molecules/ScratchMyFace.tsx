"use client";
import Image from "next/image";
import { ScratchToReveal } from "~/app/_components/atoms/ScratchImageToReveal";

export const ScratchMyFace = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <ScratchToReveal
      onComplete={onComplete}
      width={200}
      height={200}
      imageSrc="SJ's face.png"
    >
      <Image
        src={"/mytrueidentity.jpg"}
        alt="my true identity"
        width={200}
        height={200}
      />
    </ScratchToReveal>
  );
};
