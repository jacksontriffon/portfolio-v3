"use client";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import { AnimatedSubscribeButton } from "~/components/magicui/animated-subscribe-button";
import { useInterval, useCopyToClipboard } from "usehooks-ts";
import { WordRotate } from "~/components/magicui/word-rotate";
import { InteractiveHoverButton } from "~/components/magicui/interactive-hover-button";
import { toast } from "sonner";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const emails = [
  "sayHello",
  "whisperSweetNothings",
  "awkwardlySmile",
  "stareIntensely",
  "singOpera",
  "tapDance",
  "slowlyClap",
  "waveAnElbow",
  "curtsy",
  "bow",
];

function buildMailto({
  to,
  cc,
  bcc,
  subject,
  body,
}: {
  to: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams();
  if (cc) params.append("cc", cc);
  if (bcc) params.append("bcc", bcc);
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`;
}

export const EmailCta = () => {
  const [index, setIndex] = useState(0);
  const currentEmail = `${emails[index]}@sjcoded.com`;

  const [, copy] = useCopyToClipboard();

  useInterval(() => {
    setIndex((prev) => (prev + 1) % emails.length);
  }, 5000);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-36 sm:gap-0">
      <InteractiveHoverButton
        onClick={() => {
          window.location.href = buildMailto({
            to: "hello@sjcoded.com",
            subject: "Project enquiry via your portfolio",
            body: "Hi SJ,%0A%0A",
          });
          toast("Opening default email application...", {
            icon: <EnvelopeClosedIcon />,
            dismissible: true,
          });
        }}
        className="text-antique-900 sm:col-span-17 sm:ml-auto"
      >
        Send Email?
      </InteractiveHoverButton>
      <div className="col-span-19 flex w-full flex-col">
        <AnimatedSubscribeButton
          onClick={async () => {
            await copy(currentEmail);
          }}
          className="bg-antique-50/0 text-antique-700 text-sm transition duration-150 hover:scale-105 active:scale-90"
        >
          <span className="group inline-flex items-center gap-2 text-base transition-all duration-150">
            <CopyIcon className="ml-1 size-4 transition-all duration-300" />
            <WordRotate words={emails} duration={5000} />
            @sjcoded.com
          </span>
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Copied Email
          </span>
        </AnimatedSubscribeButton>
        {/* <p className="text-antique-500 ml-12 text-sm font-bold">
          - yes, these emails all send to me
        </p> */}
      </div>
    </div>
  );
};
