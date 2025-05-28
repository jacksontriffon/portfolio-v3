import { HydrateClient } from "~/trpc/server";
import { Headline } from "./_components/index.client";
import { Particles } from "~/components/magicui/particles";
import { Intro } from "./_components/templates/hero/Intro";
import { EmailCta } from "./_components/templates/hero/EmailCta";
import { Edge } from "./_components/templates/edge/EdgeSection";
import { DotPattern } from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";
import { ShinyBento } from "./_components/templates/edge/ShinyBento";
import { ResumeDownload } from "./_components/templates/resume/ResumeDownload";
import { Projects } from "./_components/templates/projects/Projects";
import { Navbar } from "./_components/molecules/Dock";

export default async function Home() {
  return (
    <>
      <HydrateClient>
        <div className="relative bg-[url(/paper.png)]">
          <Navbar />
          <div id="top"></div>
          <Particles
            className="absolute inset-0 h-screen w-full"
            color="#522b2d"
          />
          <div className="2xs:px-4 flex flex-col gap-32 px-1 py-20 text-white">
            <Intro />
            <div className="flex flex-col gap-24">
              <Headline />
              <EmailCta />
            </div>
          </div>
          <Projects />

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
          <section className="flex justify-center pb-40" id="resume">
            <ResumeDownload />
          </section>
        </div>
      </HydrateClient>
    </>
  );
}
