import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "SJ's Portfolio",
  description: "Baked with hidden goodies, ready to polish your ideas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

import { Zilla_Slab } from "next/font/google";
import { PostHogProvider } from "./providers";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-zilla-slab",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${zillaSlab.variable}`}>
      <body>
        <PostHogProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Toaster />
        </PostHogProvider>
      </body>
    </html>
  );
}
