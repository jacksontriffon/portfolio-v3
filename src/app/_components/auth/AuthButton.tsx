"use client";

import posthog from "posthog-js";
import { useTransition } from "react";
import { toggleAuth } from "~/app/_actions/authActions";

export function AuthButton({ isSignedIn }: { isSignedIn: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <form action={toggleAuth} className="w-fit">
      <button
        onClick={() => {
          posthog.capture("sign-in-clicked", { isSignedIn });
        }}
        type="submit"
        disabled={isPending}
        className="border-antique-500 text-antique-900 hover:outline-antique-900 cursor-pointer rounded-sm border px-6 py-2 text-sm font-semibold no-underline outline outline-offset-2 outline-transparent transition"
      >
        {isSignedIn ? "Sign out" : "Sign in"}
      </button>
    </form>
  );
}
