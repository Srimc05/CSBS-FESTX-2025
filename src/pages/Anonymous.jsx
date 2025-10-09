import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AnonymousEventPage() {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('https://ik.imagekit.io/sri05/Group%20195.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="bg-black/60 min-h-screen w-full relative z-10 flex flex-col items-center justify-center">
        {/* Back button */}
        <Link
          to="/events"
          className="fixed z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/40 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-5 md:top-7 left-3 md:left-6"
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

        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-center py-10 px-4">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0 relative"
          >
            <img
              src="https://ik.imagekit.io/sri05/Muthupandi_Ghilli-removebg-preview.png"
              alt="Clint Eastwood"
              className="w-full h-auto object-contain scale-105 " // 👈 increases size by 25%
            />
          </motion.div>

          {/* Text Overlay */}
          <div className="flex-1 text-center md:text-left mt-6 md:mt-0 md:ml-10 relative z-20">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl text-[#D9B536] font-bold font-[ewert] drop-shadow-lg"
            >
              ANONYMOUS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-lg md:text-xl text-[#D97A36] font-light italic"
            >
              “Kathai Thiraikathai Vasanam Iyakkam”
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-4 text-[#F5F2E7] text-base md:text-lg font-[poppins] leading-7"
            >
              Hii Chellam! Step into ANONYMOUS — a wild ride through Kollywood’s
              movies, music, and madness! Expect mind-bending games, mystery
              rounds, and pure cinematic chaos. Relive iconic moments, laugh,
              vibe, and feel the reel thrill like never before!
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-5 mt-6 justify-center md:justify-start">
              <a
                href="https://forms.gle/h44ucxaFa49RRKqM6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 12px gold",
                    boxShadow: "0px 0px 15px rgba(255,215,0,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="px-6 py-3 border-2 border-[#D9B536] text-[#D9B536] font-semibold rounded-full hover:bg-[#D9B536] hover:text-black transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 12px gold",
                    boxShadow: "0px 0px 15px rgba(255,215,0,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="px-6 py-3 border-2 border-[#D9B536] text-[#D9B536] font-semibold rounded-full hover:bg-[#D9B536] hover:text-black transition-all duration-300"
                >
                  Watch Trailer
                </motion.button>
              </a>
            </div>
          </div>
        </section>

        {/* Coordinators Section - Right below hero content */}
        <section className="relative w-full max-w-7xl mt-8 px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-[#D9B536] rounded-2xl p-6 shadow-2xl w-full max-w-md">
              <h3 className="text-lg font-bold text-[#D9B536] mb-4 text-center font-nikkyou underline decoration-[#D9B536] decoration-2 underline-offset-4">
                Event Coordinators
              </h3>
              {/* Mobile view (stacked) */}
              <div className="space-y-3 font-nikkyou lg:hidden">
                <div className="text-center">
                  <p className="text-[#F5F2E7] text-lg">
                    <span className="font-semibold text-[#D9B536]">
                      Madhuvanti
                    </span>
                    <br />
                    <span className="text-[#D9B536]">7358617488</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#F5F2E7] text-lg">
                    <span className="font-semibold text-[#D9B536]">
                      Rithika
                    </span>
                    <br />
                    <span className="text-[#D9B536]">6379739380</span>
                  </p>
                </div>
              </div>

              {/* Large screen view (inline) */}
              <div className="hidden lg:flex justify-center text-center gap-6 font-nikkyou text-[#F5F2E7] text-lg mb-16">
                <p>
                  <span className="font-semibold text-[#D9B536]">
                    Madhuvanti
                  </span>
                  <br />
                  <span className="text-[#D9B536]">7358617488</span>
                </p>
                <p>
                  <span className="font-semibold text-[#D9B536]">Rithika</span>
                  <br />
                  <span className="text-[#D9B536]">6379739380</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
