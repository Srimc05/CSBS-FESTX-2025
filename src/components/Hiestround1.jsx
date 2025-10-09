"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect"

export function CanvasRevealEffect3() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[30rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center  border border-gray-500 rounded-lg bg-black w-full gap-4 mx-auto px-8 relative">
      <p
        className="md:text-2xl text-2xl font-medium font-[poppins] leading-10 text-center text-white relative z-20 max-w-2xl mx-auto">
            <h1 className="text-red-500">Digital El Dorado</h1>
        Draw secret chits to crack puzzles & hack rival vaults. Loot up to 30% of their gold!
      </p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0">
           <CanvasRevealEffect
  animationSpeed={5}
  containerClassName="bg-transparent"
  colors={[
    [151, 20, 20],   // #971414 (deep red)
    [218, 218, 218], // #DADADA (silver-white)
    [7, 7, 7],       // #070707 (dark accent)
  ]}
  opacities={[0.6, 0.7, 0.8, 0.9, 1]}  // higher opacity = more visible
  dotSize={3}  // slightly larger particles
/>

          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
