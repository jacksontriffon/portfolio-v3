import { HydrateClient } from "~/trpc/server";
import { Edge } from "./_components/templates/edge/EdgeSection";
import { DotPattern } from "~/components/magicui/dot-pattern";
import { cn } from "~/lib/utils";
import { ShinyBento } from "./_components/templates/edge/ShinyBento";
import { ResumeDownload } from "./_components/templates/resume/ResumeDownload";
import { Hero } from "./_components/templates/hero/Hero";
import { Footer } from "./_components/templates/footer/Footer";
import { Post } from "./_components/templates/post/Post";

export default async function Home() {
  return (
    <>
      <HydrateClient>
        <div className="relative bg-[url(/paper.png)]">
          <Hero />
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
          <section className="flex justify-center pb-0 sm:pb-40" id="resume">
            <ResumeDownload />
          </section>
          <section>
            <Post />
          </section>
          <Footer />
        </div>
      </HydrateClient>
    </>
  );
}
