import { HydrateClient } from "~/trpc/server";
import { Bento, Headline, ScratchMyFace } from "./_components/index.client";
import { Particles } from "~/components/magicui/particles";
import { Intro } from "./_components";
import { EmailCta } from "./_components/templates/hero/EmailCta";

export default async function Home() {
  return (
    <>
      <HydrateClient>
        <Particles
          className="absolute h-screen w-screen opacity-50"
          color="#522b2d"
        />
        <main className="2xs:px-4 flex min-h-screen flex-col gap-32 bg-[url(/paper.png)] px-1 pt-20 text-white">
          <Intro />
          <div className="flex flex-col gap-24">
            <Headline />
            <EmailCta />
          </div>
          {/* <ScratchMyFace /> */}
          <Bento />
        </main>
      </HydrateClient>
    </>
  );
}
