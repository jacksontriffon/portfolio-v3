"use client";
import { motion } from "motion/react";
import { Navbar } from "../../molecules/Dock";
import { Particles } from "~/components/magicui/particles";

import { Intro } from "./Intro";
import { Headline } from "./Headline";
import { EmailCta } from "./EmailCta";
import { Projects } from "../projects/Projects";

/* ---------- variants ------------------------------------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35, // 0.35 s between every direct child
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
/* -------------------------------------------------------------------- */

export const Hero = () => (
  <>
    <div id="top" />
    <Particles
      className="absolute inset-0 h-screen w-full opacity-60"
      color="#522b2d"
    />

    {/* master timeline */}
    <motion.div
      className="2xs:px-4 flex flex-col px-1 py-20 text-white sm:gap-32"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col gap-24">
        <motion.div variants={item}>
          <Intro />
        </motion.div>

        <motion.div variants={item} className="flex flex-col">
          <Headline />
        </motion.div>

        {/* 3️⃣ Email CTA */}
        <motion.div variants={item} className="flex flex-col gap-24">
          <EmailCta />
        </motion.div>
      </div>

      {/* 4️⃣ Projects — staggered in automatically after Email CTA */}
      <motion.div variants={item}>
        <Projects />
      </motion.div>

      {/*
        Add more sections the same way:
        <motion.div variants={item}><Testimonials /></motion.div>
        <motion.div variants={item}><Footer /></motion.div>
      */}
      <motion.div variants={item} className="fixed inset-x-0 top-0 z-50">
        <Navbar />
      </motion.div>
    </motion.div>
  </>
);
