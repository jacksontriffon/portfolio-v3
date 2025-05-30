"use server";

import { signIn, signOut, auth } from "~/server/auth";

export async function toggleAuth() {
  const session = await auth();

  if (session) {
    await signOut();
  } else {
    await signIn("", { redirectTo: "/#posts" });
  }
}
