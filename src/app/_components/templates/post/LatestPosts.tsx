"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { api } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { useTransition } from "react";
import { AnimatePresence, motion } from "motion/react";

const LIMIT = 10; // posts per page

export function LatestPosts() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const page = Number(searchParams.get("page") ?? "1");

  const utils = api.useUtils();
  const prefetchPage = (p: number) =>
    utils.post.listPaged.prefetch({ page: p, limit: LIMIT });

  const { data, isLoading, error } = api.post.listPaged.useQuery({
    page,
    limit: LIMIT,
  });

  if (isLoading) return <PostSkeleton></PostSkeleton>;
  if (error) return <p>Couldn’t load posts 😢</p>;

  const { posts, totalPages } = data!;

  const go = (targetPage: number) => {
    if (targetPage === page) return;

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("page", String(targetPage));
      router.push(`?${params}`, { scroll: false });
    });
  };

  // Stagger list animation
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -6,
      width: "100%",
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <div className="relative w-full max-w-xs space-y-4 text-center">
      <AnimatePresence mode="wait">
        {isPending ? (
          <motion.ul
            key="skeleton"
            variants={listVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="space-y-2"
          >
            {Array.from({ length: posts.length || LIMIT }).map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </motion.ul>
        ) : (
          <motion.ul
            key="posts"
            variants={listVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="space-y-2"
          >
            {posts.map((post) => (
              <motion.li
                key={post.id}
                variants={itemVariants}
                layout
                className="flex min-h-[52px] items-center gap-3"
              >
                <div className="border-antique-900 outline-antique-500 rounded-full border outline outline-offset-2">
                  {post.createdBy.image ? (
                    <Image
                      src={post.createdBy.image ?? ""}
                      alt={`${post.createdBy.name}'s avatar`}
                      width={32}
                      height={32}
                    />
                  ) : (
                    <div className="bg-antique-900 flex h-8 w-8 items-center justify-center rounded-full text-center">
                      <p className="text-white capitalize">
                        {post.createdBy.name
                          ? String(post.createdBy.name?.[0]) +
                            String(post.createdBy.name?.[1])
                          : "?"}
                      </p>
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <blockquote className="flex">
                    <span className="text-antique-200">&quot;</span>
                    <p className="max-w-68 truncate">{post.name}</p>
                    <span className="text-antique-200">&quot;</span>
                  </blockquote>
                  <p className="text-sm">
                    <span className="text-antique-200 font-bold">
                      {post.createdBy.name}
                    </span>{" "}
                    ·{" "}
                    <span className="text-antique-500">
                      {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                    </span>
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {posts.length === 0 && <p>No-one has posted yet…</p>}
      {posts.length > 10 && (
        <nav className="mt-4 flex justify-center gap-1 text-sm">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="enabled:hover:border-antique-700 rounded border px-2 py-1 enabled:cursor-pointer disabled:opacity-40"
          >
            Prev
          </button>

          {/* show at most 5 numbered buttons around the current page */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (p) => Math.abs(p - page) <= 2 || p === 1 || p === totalPages,
            )
            .map((p) => (
              <button
                key={p}
                onClick={() => go(p)}
                disabled={p === page}
                className={cn(
                  "enabled:hover:border-antique-900 enabled:active:bg-antique-200 rounded border px-2 py-1 transition duration-150 enabled:cursor-pointer",
                  {
                    "bg-antique-900 text-white": p === page,
                  },
                )}
              >
                {p}
              </button>
            ))}

          <button
            onMouseEnter={() => prefetchPage(page + 1)}
            onClick={() => go(page + 1)}
            disabled={page === totalPages}
            className="enabled:hover:border-antique-700 rounded border px-2 py-1 transition duration-150 enabled:cursor-pointer disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}

const PostSkeleton = () => {
  return (
    <article
      aria-label="Loading post"
      className="flex animate-pulse items-center gap-3"
    >
      {/* avatar */}
      <div className="bg-antique-200 h-8 w-8 shrink-0 rounded-full" />

      {/* text lines */}
      <div className="flex flex-col gap-1">
        {/* quote line */}
        <div className="bg-antique-200 h-3 w-40 rounded" />

        {/* name · time line */}
        <div className="flex gap-2">
          <div className="bg-antique-200 h-3 w-24 rounded" />
          <div className="bg-antique-200 h-3 w-16 rounded" />
        </div>
      </div>
    </article>
  );
};
