import { HydrateClient } from "~/trpc/server";
import { Bento, Headline, ScratchMyFace } from "./_components/index.client";
import { Particles } from "~/components/magicui/particles";
import { Intro } from "./_components";
import { EmailCta } from "./_components/templates/hero/EmailCta";
import { Edge } from "./_components/templates/edge/EdgeSection";
import { ResumeCarousel } from "./_components/templates/resume/ResumeCarousel";
import { DotPattern } from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";
import { ShinyBento } from "./_components/templates/edge/ShinyBento";
import { ResumeDownload } from "./_components/templates/resume/ResumeDownload";

export default async function Home() {
  return (
    <>
      <HydrateClient>
        <div className="bg-[url(/paper.png)]">
          <Particles
            className="absolute h-screen w-screen opacity-50"
            color="#522b2d"
          />
          <section className="2xs:px-4 flex min-h-screen flex-col gap-32 px-1 pt-20 text-white">
            <Intro />
            <div className="flex flex-col gap-24">
              <Headline />
              <EmailCta />
            </div>
            {/* <ScratchMyFace /> */}
            <Bento />
          </section>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg pt-30">
            <DotPattern
              className={cn(
                "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              )}
            />
            <Edge />
          </div>
          <section className="2xs:px-4 flex justify-center">
            <div className="max-w-7xl">
              <ShinyBento />
            </div>
          </section>
          <section className="bg-neutral-900">
            {/* <ResumeCarousel /> */}
          </section>
          <ResumeDownload />
        </div>
      </HydrateClient>
    </>
  );
}
