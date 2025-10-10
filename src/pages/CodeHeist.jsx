import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CanvasRevealEfctDemo3 } from "../components/Heistcard";
import { CanvasRevealEffect3 } from "../components/Hiestround1";
import { CanvasRevealEffectDemo3 } from "../components/Heistthree";
import { HeistCountdown } from "../components/HeistCountdown";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";
const CodeHeist = () => {
  // List of assets to preload for CodeHeist page
  const assetsToLoad = [
    "https://ik.imagekit.io/sri05/heustttt.jpg?updatedAt=1759858469115",
    "https://ik.imagekit.io/sri05/Group%205.png",
    "https://ik.imagekit.io/sri05/mmamamma.jpg?updatedAt=1759902138441",
  ];

  const isLoading = useAssetLoader(assetsToLoad);

  // Show loading spinner while assets are loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen pt-5 pb-12 px-6">
      <div className="">
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

        <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
          {/* Background money heist style */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601597115123-3a5d2c8fc14d?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>

          {/* Overlay for dark cinematic effect */}
          <div className="absolute inset-0 bg-black/70"></div>

          <header className="relative z-10 text-center py-20 px-4 h-screen flex flex-col justify-center items-center">
            {/* Hero Background */}
            <div
              className="absolute inset-0 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url('https://ik.imagekit.io/sri05/heustttt.jpg?updatedAt=1759858469115')",
              }}
            ></div>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Hero Content */}
            <motion.img
              src="https://ik.imagekit.io/sri05/Group%205.png"
              alt="CODE HEIST Logo"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-3/4 md:w-1/2 drop-shadow-lg z-10"
            />

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="mt-6 pt-2 space-x-2 text-lg md:text-2xl font-[poppins] leading-15  text-white/80 max-w-2xl mx-auto z-10"
            >
              <span className="text-[#DADADA]  font-bold">
                {" "}
                Welcome to the Life of
                <span className="text-red-500"> Heist </span>
              </span>
              <br />
              <span className="text-red-500 font-bold">
                {" "}
                “La Casa de Papel vibes,{" "}
                <span className="text-[#DADADA] ">code edition</span>”
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-12 flex justify-center gap-6 z-10"
            >
              <a
                href="https://forms.gle/9SM5JsLB87sLmide8"
                target="_blank"
                className="px-4 md:px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 font-[poppins]"
              >
                Join Heist
              </a>
              <a
                href="#"
                className="px-4 md:px-8  font-[poppins] py-4 border border-red-600 hover:bg-red-600 hover:text-white rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Watch Heist
              </a>
            </motion.div>
          </header>
          {/* Countdown Timer Section */}

          {/* Event Rounds Section */}
          <section className="relative z-10 sm:py-0 md:py-20  px-4 max-w-5xl mx-auto">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-100 mb-12 text-center"
            >
              The <span className="text-[#971414]">Heist</span> Protocol
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <CanvasRevealEffectDemo3 />
              <CanvasRevealEfctDemo3 />
              <CanvasRevealEffect3 />
            </div>
          </section>
          <section className="relative z-10 py-10 bg-black flex justify-center">
            <div className="max-w-md w-full">
              <div className="flex justify-center items-center py-10">
                <div className="bg-transparent border-1 border-gray-100 rounded-xl p-6 shadow-[0_0_30px_#ff0000]">
                  <div className="flex gap-3 text-3xl font-[poppins] text-red-600 tracking-widest select-none">
                    {/* Countdown Logic */}
                    <HeistCountdown />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Coordinators Section */}
          <div className="flex justify-center mb-16">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-red-500 rounded-2xl p-6 shadow-2xl md:w-96">
              <h3 className="text-lg font-bold text-red-500 mb-4 text-center font-[poppins] underline decoration-red-500 decoration-2 underline-offset-4">
                Event Coordinators
              </h3>

              {/* Mobile view (stacked) */}
              <div className="space-y-3 font-[poppins] lg:hidden">
                <div className="text-center">
                  <p className="text-red-200 text-lg">
                    <span className="font-semibold text-red-300">
                      Tharun A K
                    </span>
                    <br />
                    <span className="text-red-400">9940868855</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-red-200 text-lg">
                    <span className="font-semibold text-red-300">
                      Livinesh L
                    </span>
                    <br />
                    <span className="text-red-400">9486767685</span>
                  </p>
                </div>
              </div>

              {/* Large screen view (inline) */}
              <div className="hidden lg:flex justify-center text-center gap-6 font-[poppins] text-red-200 text-lg">
                <p>
                  <span className="font-semibold text-red-300">Tharun AK</span>{" "}
                  9940868855
                </p>
                <p>
                  <span className="font-semibold text-red-300">Livinesh L</span>{" "}
                  9486767685
                </p>
              </div>
            </div>
          </div>

          {/* Money Heist Dialogue Section */}
          <section
            className="relative z-10 py-20 px-4 text-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://ik.imagekit.io/sri05/mmamamma.jpg?updatedAt=1759902138441')",
            }}
          >
            {/* Dark overlay to make text pop */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            <div className="relative z-10">
              <motion.h2
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white/80 mb-8"
              >
                "In this heist, the code is our weapon."
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-[#DADADA] max-w-2xl mx-auto"
              >
                Think fast. Code fierce. Loot big. Only the bold conquer the
                vault.
              </motion.p>
            </div>
          </section>

          {/* Register Section */}
          {/* <section id="register" className="relative z-10 py-20 px-4 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-red-500 mb-8"
        >
          Ready to Join the Heist?
        </motion.h2>
        <a
          href="#"
          className="px-12 py-4 bg-yellow-400 text-black font-bold rounded-full text-xl shadow-xl hover:bg-yellow-300 transition-all duration-300"
        >
          Register Now
        </a>
      </section> */}
        </div>
      </div>
    </div>
  );
};

export default CodeHeist;

{
  /* <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 p-6 rounded-xl shadow-lg border border-red-700"
          >
            <h3 className="text-2xl font-bold mb-4">Round 1</h3>
            <p>Solve coding challenges to fill your virtual vault with treasure. Fast brains earn more gold!</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 p-6 rounded-xl shadow-lg border border-red-700"
          >
            <h3 className="text-2xl font-bold mb-4">Round 2</h3>
            <p>Draw secret chits to crack puzzles & hack rival vaults. Loot up to 30% of their gold!</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/80 p-6 rounded-xl shadow-lg border border-red-700"
          >
            <h3 className="text-2xl font-bold mb-4">Round 3</h3>
            <p>Final showdown: Bet your gold on your partner’s skill. Solve fast to double it, or lose it all!</p>
          </motion.div> */
}
