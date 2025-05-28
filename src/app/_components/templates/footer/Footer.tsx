"use client";

import { PenToolIcon } from "lucide-react";
import { AntiqueDivider } from "../edge/PathsDrawEffect";
import { toast } from "sonner";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="mb-4 flex min-h-12 w-full flex-col gap-4 px-4 sm:px-10">
      <AntiqueDivider />
      <div className="flex justify-between px-4">
        <div className="mt-auto flex items-center gap-2">
          <PenToolIcon size={16} className="text-antique-500 rotate-180" />
          <p className="text-antique-700">Designed & Crafted by SJ Triffon</p>
        </div>
        {/* <div className="flex flex-col gap-1">
          <p className="text-antique-200 pb-1 font-medium">Contact</p>
          <a
            className="text-antique-500 underline"
            onClick={() => {
              toast("Opening default email application...", {
                icon: <EnvelopeClosedIcon />,
                dismissible: true,
              });
            }}
            href="mailto:who@sjcoded.com"
          >
            Email
          </a>
          <a
            className="text-antique-500 underline"
            onClick={() => {
              toast("Opening default email application...", {
                icon: <EnvelopeClosedIcon />,
                dismissible: true,
              });
            }}
            href="mailto:who@sjcoded.com"
          >
            Book a meeting
          </a>
        </div> */}
      </div>
    </footer>
  );
};
