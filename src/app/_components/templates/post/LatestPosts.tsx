"use client";

import Image from "next/image";

import { api } from "~/trpc/react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

export function LatestPosts() {
  const [allPosts] = api.post.getAll.useSuspenseQuery();
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="flex w-full max-w-xs flex-col text-center" role="list">
      {allPosts
        .map((post) => {
          return (
            <div key={post.id} role="listitem">
              <div className="flex items-center gap-4 pb-2">
                <Image
                  className="border-antique-900 outline-antique-500 rounded-full border outline outline-offset-2"
                  width={32}
                  height={32}
                  alt={`${post.createdBy.name}'s avatar`}
                  src={post.createdBy.image ?? ""}
                />
                <div className="flex flex-col">
                  <blockquote className="flex w-full">
                    <span>&quot;</span>
                    <p className="max-w-68 truncate text-left">{post.name}</p>
                    <span>&quot;</span>
                  </blockquote>
                  <div className="flex gap-2">
                    <p className="text-antique-200 truncate text-left text-sm font-bold">
                      {post.createdBy.name}
                    </p>
                    <p className="text-antique-500 truncate text-left text-sm">
                      {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
        .slice(0, viewMore ? undefined : 2)}

      {allPosts.length === 0 && <p>No-one has posted yet...</p>}
      {allPosts.length > 3 && (
        <button
          onClick={() => {
            setViewMore((prev) => !prev);
          }}
          className="hover:text-antique-500 cursor-pointer pt-4 text-sm underline"
        >
          {viewMore ? "View less..." : "View more..."}
        </button>
      )}
    </div>
  );
}
