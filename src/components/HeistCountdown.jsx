"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function HeistCountdown() {
  const targetDate = new Date("2025-10-27T00:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hrs = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return {
      days,
      hrs: hrs.toString().padStart(2, "0"),
      mins: mins.toString().padStart(2, "0"),
      secs: secs.toString().padStart(2, "0"),
    };
  };

  const { days, hrs, mins, secs } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#DADADA] tracking-widest">
       CIA'S Closing In
      </h2>
      <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 justify-center text-4xl sm:text-5xl md:text-7xl font-[poppins] text-[#971414]">
        <div>{days}D</div>
         <span className="">:</span>
        <div>{hrs}</div>
          
        
        {/* <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        > */}
          
        {/* </motion.div> */}
        <span className="">:</span>
        <div>{mins}</div>
        {/* <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
        >
          
        </motion.div> */}
        <span className="">:</span>
        <div> {secs}</div>
        {/* <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
        >
         
        </motion.div> */}
      </div>
    </div>
  );
}
