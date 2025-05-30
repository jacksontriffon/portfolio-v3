import { LatestPosts } from "~/app/_components/templates/post/LatestPosts";
import { AuthButton } from "../../auth/AuthButton";
import { auth } from "~/server/auth";
import { AntiqueDivider } from "../edge/PathsDrawEffect";
import { SendPost } from "./SendPost";

export async function Post() {
  const session = await auth();
  return (
    <section
      id="posts"
      className="text-antique-900 mb-20 flex w-full flex-col items-center justify-center gap-6"
    >
      <div className="flex w-full flex-col items-center gap-2">
        <div className="flex w-full max-w-[1440px] items-center justify-center gap-6 px-10">
          <AntiqueDivider />
          <h3 className="text-antique-500 font-regular text-4xl">
            Post a message!
          </h3>
          <AntiqueDivider />
        </div>
        <p className="text-antique-500 text-base font-medium">
          Here&apos;s what other people said
        </p>
      </div>
      <LatestPosts />
      <div className="flex flex-col items-center gap-4 px-4">
        {session ? (
          <>
            <SendPost />
            <p>Signed in as {session?.user.name}</p>
          </>
        ) : (
          <p>Sign in to post a message</p>
        )}
        <AuthButton isSignedIn={!!session} />
      </div>
    </section>
  );
}
