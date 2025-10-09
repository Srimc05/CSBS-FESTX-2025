import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Include this in your index.html or Tailwind config
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">

const Event9 = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-12 px-6 overflow-hidden bg-black">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://ik.imagekit.io/sri05/Scene_1_08_202510082209.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

      {/* Back Button */}
      <Link
        to="/events"
        className="z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/40 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all absolute top-5 left-5 md:left-10"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Events
      </Link>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center text-yellow-300 space-y-6">
        {/* Title Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full flex justify-center"
        >
          <img
            src="https://ik.imagekit.io/sri05/9.png"
            alt="The Last Zone"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-[#FF4500]"
          style={{
            fontFamily: "'Anton', sans-serif",
            textShadow: "2px 2px 8px #DADADA",
          }}
        >
          Clutch X Booyah - Pirate Hunt edition
        </motion.h2>

        {/* Event Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{
            fontFamily: "'Anton', sans-serif",
            color: "#DADADA",
          }}
        >
          It’s time for the veetula mass BOOYAH! 4-member squad only, Your room
          = Bermuda map, Wi-Fi = life, Amma = hype commentator . Reflex, aim, or
          luck—show it in FREE FIRE. Betrayal, chaos, and revive
          cries—“MACHAAAA, REVIVE DAAAA!” Work as a team or get “return to
          lobby.” One mission: BOOYAH!
        </motion.p>

        {/* Figma Outline Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex justify-center gap-6 flex-wrap mt-4"
        >
          <a
            href="https://forms.gle/EpEBVkJW1Dsu77s89"
            className="px-8 py-2 rounded-md bg-[#FF4500] text-white font-bold transition duration-200 hover:bg-white hover:text-[#FF4500] border-2 border-transparent hover:border-[#FF4500]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Register
          </a>
          <a
            href="/trailer"
            className="px-8 py-2 rounded-md bg-[#FF4500] text-white font-bold transition duration-200 hover:bg-white hover:text-[#FF4500] border-2 border-transparent hover:border-[#FF4500]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Watch Trailer
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Event9;
