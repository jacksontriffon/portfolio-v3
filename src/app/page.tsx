import { HydrateClient } from "~/trpc/server";
import { Headline } from "./_components/index.client";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url(/paper.png)] text-white">
        <Headline />
      </main>
    </HydrateClient>
  );
}
