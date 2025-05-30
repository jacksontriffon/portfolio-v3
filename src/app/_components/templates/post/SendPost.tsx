"use client";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";

export const SendPost = () => {
  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
      className="mt-4 flex items-center justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={name}
        disabled={createPost.isPending}
        onChange={(e) => setName(e.target.value)}
        className="text-antique-900 border-antique-500 my-2 h-fit w-full rounded-full border px-4 py-2"
      />
      <button
        type="submit"
        className={cn(
          "border-antique-500 hover:border-antique-700 bg-antique-900 h-fit rounded-sm border px-8 py-2 text-sm font-semibold text-white transition",
          {
            "bg-antique-500 animate-pulse": createPost.isPending,
          },
        )}
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
