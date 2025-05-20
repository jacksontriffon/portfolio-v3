"use client";
import { FloatingPhone } from "./FloatingPhone";
import DottedButton from "../../atoms/DottedButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~/lib/utils";

export const SwitchToMobile = () => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <section
      className={cn(
        "relative hidden w-[600px] flex-col items-start justify-center gap-2 pt-10 pr-10 transition-all lg:flex",
        {
          "items-start": showPhone,
          "items-end": !showPhone,
        },
      )}
    >
      <DottedButton
        onClick={() => {
          setShowPhone((prev) => !prev);
        }}
      >
        {showPhone ? "Actually, Let's Hide IT" : "Need this on mobile?"}
      </DottedButton>

      {showPhone && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-10"
          >
            <FloatingPhone />
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};
