//GBU.jsx

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GBUBackground from "../components/ui/GBUbackground/GBUbackground";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";

const GBU = () => {
  // List of assets to preload for GBU page
  const assetsToLoad = ["/GBU.webp", "/gbutagline.webp"];

  const isLoading = useAssetLoader(assetsToLoad);

  // All your hooks and variants remain the same
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    // ✨ --- 1. THE MAIN WRAPPER --- ✨
    // This parent holds everything and creates the stacking context with `relative`.
    <div
      className="relative min-h-screen bg-black overflow-hidden gbu-page-root"
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
    >
      <GBUBackground particleCount={140} />
      {/* Subtle darkening overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
      {/* ✨ --- 2. THE BACKGROUND LAYER --- ✨ */}
      {/* This is positioned absolutely to fill the parent container. */}
      {/* It holds the gradient and the ember animation. */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Fire Sparkles falling from top to bottom */}
        <div className="fire-sparkles-container">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`fire-sparkle sparkle-${i + 1}`}></div>
          ))}
        </div>

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-orange-900/20 via-black to-black"></div>

        {/* Multiple ember layers for depth */}
        <div className="ember-container">
          <div className="ember ember-layer-1"></div>
          <div className="ember ember-layer-2"></div>
          <div className="ember ember-layer-3"></div>
          <div className="ember ember-layer-4"></div>
        </div>

        {/* Floating sparks */}
        <div className="sparks-container">
          <div className="spark"></div>
          <div className="spark"></div>
          <div className="spark"></div>
        </div>

        {/* Glowing orbs */}
        <div className="glow-orbs">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>
      </div>

      <style>{`
      
        body { background-color: #000; }
        
        /* 🔥 Enhanced Ember Animations */
        @keyframes animateEmbers {
          0% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-120vh) translateX(30px) rotate(360deg) scale(0.3); opacity: 0; }
        }
        
        @keyframes animateEmbersAlt {
          0% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-120vh) translateX(-30px) rotate(-360deg) scale(0.5); opacity: 0; }
        }
        
        .ember-container { 
          position: absolute; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          overflow: hidden; 
          pointer-events: none;
        }
        
        .ember { 
          position: absolute; 
          width: 4px; 
          height: 4px; 
          background: transparent; 
          border-radius: 50%; 
          bottom: -10px; 
          animation: animateEmbers linear infinite; 
          filter: blur(0.5px);
        }
        
        /* Layer 1 - Small fast particles */
        .ember-layer-1 { 
          width: 2px; 
          height: 2px; 
          animation: animateEmbers 12s linear infinite;
          animation-delay: -2s;
          box-shadow: 
            15vw 10vh 2px 1px #FFD700,
            85vw 5vh 1px 0.5px #FF8C00,
            40vw 35vh 2px 1px #FFC700,
            10vw 85vh 1px 0.5px #FF6347,
            65vw 20vh 2px 1px #FF9800,
            20vw 60vh 1px 1px #FFD700,
            50vw 75vh 2px 1px #FF5722,
            75vw 45vh 1px 0.5px #FFA500,
            30vw 90vh 2px 1px #FF8C00,
            90vw 65vh 1px 1px #FFD700,
            5vw 40vh 2px 1px #FF6347,
            55vw 15vh 1px 0.5px #FFC700,
            45vw 55vh 2px 1px #FF9800,
            70vw 80vh 1px 1px #FF5722,
            25vw 25vh 2px 1px #FFD700;
        }
        
        /* Layer 2 - Medium particles */
        .ember-layer-2 { 
          width: 3px; 
          height: 3px; 
          animation: animateEmbersAlt 18s linear infinite;
          animation-delay: -5s;
          box-shadow: 
            8vw 50vh 3px 1.5px #FFC700,
            78vw 15vh 2px 1px #FF5722,
            32vw 48vh 3px 1.5px #FF9800,
            92vw 12vh 2px 1px #FFD700,
            48vw 70vh 3px 1.5px #FF6347,
            68vw 88vh 2px 1px #FFA500,
            18vw 28vh 3px 1.5px #FF8C00,
            38vw 5vh 2px 1px #FF5722,
            88vw 55vh 3px 1.5px #FFC700,
            58vw 92vh 2px 1px #FFD700,
            12vw 72vh 3px 1.5px #FF9800,
            82vw 38vh 2px 1px #FF6347;
        }
        
        /* Layer 3 - Large glowing particles */
        .ember-layer-3 { 
          width: 5px; 
          height: 5px; 
          animation: animateEmbers 22s linear infinite;
          animation-delay: -8s;
          box-shadow: 
            12vw 15vh 4px 2px #FFD700,
            95vw 32vh 3px 2px #FF9800,
            52vw 92vh 4px 2px #FF5722,
            28vw 68vh 3px 2px #FFC700,
            72vw 42vh 4px 2px #FFA500,
            6vw 8vh 3px 2px #FF8C00,
            42vw 58vh 4px 2px #FF6347,
            66vw 22vh 3px 2px #FFD700,
            82vw 85vh 4px 2px #FF9800;
        }
        
        /* Layer 4 - Extra sparkles */
        .ember-layer-4 { 
          width: 2px; 
          height: 2px; 
          animation: animateEmbersAlt 15s linear infinite;
          animation-delay: -12s;
          box-shadow: 
            22vw 18vh 2px 1px #FFD700,
            62vw 8vh 1px 0.5px #FF8C00,
            35vw 45vh 2px 1px #FFC700,
            88vw 72vh 1px 0.5px #FF6347,
            15vw 55vh 2px 1px #FF9800,
            75vw 35vh 1px 1px #FFD700,
            45vw 82vh 2px 1px #FF5722,
            8vw 28vh 1px 0.5px #FFA500,
            52vw 62vh 2px 1px #FF8C00,
            92vw 48vh 1px 1px #FFD700;
        }
        
        /* ✨ Floating Sparks */
        @keyframes floatSpark {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translate(50px, -60vh) scale(1.2); opacity: 0.8; }
          100% { transform: translate(-30px, -120vh) scale(0.5); opacity: 0; }
        }
        
        .sparks-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .spark {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, #FFD700 0%, #FF8C00 50%, transparent 100%);
          border-radius: 50%;
          bottom: -10px;
          animation: floatSpark linear infinite;
          box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.8);
        }
        
        .spark:nth-child(1) {
          left: 20%;
          animation-duration: 16s;
          animation-delay: -3s;
        }
        
        .spark:nth-child(2) {
          left: 60%;
          animation-duration: 20s;
          animation-delay: -7s;
          width: 4px;
          height: 4px;
        }
        
        .spark:nth-child(3) {
          left: 85%;
          animation-duration: 18s;
          animation-delay: -11s;
        }
        
        /* 🌟 Glowing Orbs */
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.3; }
          50% { transform: scale(1.3) translateY(-20px); opacity: 0.6; }
        }
        
        .glow-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          animation: pulseGlow ease-in-out infinite;
        }
        
        .glow-orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #FF6347 0%, transparent 70%);
          top: 10%;
          left: 15%;
          animation-duration: 8s;
        }
        
        .glow-orb-2 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #FFA500 0%, transparent 70%);
          bottom: 15%;
          right: 20%;
          animation-duration: 10s;
          animation-delay: -3s;
        }
        
        .glow-orb-3 {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, #FFD700 0%, transparent 70%);
          top: 50%;
          left: 50%;
          animation-duration: 12s;
          animation-delay: -6s;
        }
        
        /* GBU Poster animation */
        .gbu-slide-down { 
          animation: gbuSlideDown 2.2s ease-out 0.3s both; 
        }
        
        @keyframes gbuSlideDown { 
          0% { 
            opacity: 0; 
            transform: translateY(-180px) scale(1.5); 
          } 
          40% { 
            opacity: 1; 
            transform: translateY(0) scale(1.3); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          } 
        }
      `}</style>

      {/* ✨ --- 3. THE CONTENT LAYER --- ✨ */}
      {/* This is also inside the wrapper and sits on top of the absolute background. */}
      {/* <div className="relative z-20 pt-20 md:pt-28 pb-12 px-4 md:px-6"> */}
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          to="/events"
          className="fixed z-50 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-yellow-400 bg-black/40 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-4 sm:top-5 md:top-7 left-2 sm:left-3 md:left-6"
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

        {/* This logo will be visible initially */}
        <div className="relative z-20 min-h-screen mt-10 flex flex-col items-center justify-center">
          <div className="max-w-5xl text-center">
            <img
              src="/GBU.webp"
              alt="Guess Build Unlock"
              className="w-full max-w-md scale-150 sm:scale-200 mx-auto gbu-slide-down"
            />
            <img
              src="/gbutagline.webp"
              alt="Every guess brings you closer to gold!"
              className="w-100 h-18 mx-auto mt-16 sm:mt-32 animate-pulse max-w-sm"
            />
          </div>
        </div>
        <div className="relative z-20 pb-12 px-6">
          {/* Animated Cards Container */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="mt-6 space-y-6"
          >
            {/* About the Event Card */}
            <motion.div
              variants={cardVariants}
              className="relative z-30 bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 rounded-2xl p-4 sm:p-6 md:p-8 border border-yellow-400/30 shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-alata text-center flex items-center justify-center gap-3 gbu-heading">
                <span>🧩</span>
                Guess Build Unlock
                <span>⚡</span>
              </h2>

              <div className="space-y-5 text-gray-200">
                <p className="text-lg md:text-xl text-center leading-relaxed">
                  Welcome to{" "}
                  <span className="text-yellow-300 font-bold">
                    Guess Build Unlock
                  </span>{" "}
                  — a fun-filled, brain-twisting challenge where logic meets
                  laughter and creativity takes the lead! 🧠💥
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  This isn't your ordinary event — it's a battle of wits, words,
                  and wonders! From solving mind-bending crosswords to
                  identifying tricky business logos, every round is designed to
                  test your speed, teamwork, and smart thinking. And just when
                  you think you've cracked it all — brace yourself for a
                  surprise round packed with unexpected twists that'll keep you
                  guessing till the end! 🎭
                </p>

                <div className="bg-black/30 rounded-xl p-5 border border-yellow-400/20 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">💡</span>
                    <p className="text-base">
                      <strong className="text-yellow-300">
                        Crack. Create. Conquer.
                      </strong>{" "}
                      — each clue you solve brings you one step closer to
                      victory.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎯</span>
                    <p className="text-base">
                      <strong className="text-yellow-300">
                        Think fast, think smart
                      </strong>{" "}
                      — and sometimes even think sideways!
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🤝</span>
                    <p className="text-base">
                      <strong className="text-yellow-300">
                        Team up, strategize, and sync your minds
                      </strong>{" "}
                      — because only perfect coordination can unlock the path to
                      success.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🚀</span>
                    <p className="text-base">
                      From brains to banter, expect{" "}
                      <strong className="text-yellow-300">
                        laughter, lightbulb moments
                      </strong>
                      , and plenty of "aha!" reactions along the way.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎉</span>
                    <p className="text-base">
                      Win not just by points, but by{" "}
                      <strong className="text-yellow-300">
                        creativity, quick wit, and teamwork
                      </strong>{" "}
                      that stand out!
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg text-center leading-relaxed italic text-yellow-100 mt-6">
                  Whether you're a puzzle pro or a first-time thinker,{" "}
                  <span className="text-yellow-300 font-bold">
                    Guess Build Unlock
                  </span>{" "}
                  promises a thrilling mix of fun, logic, and surprises. So get
                  your team ready, trust your instincts, and unlock your way to
                  ultimate victory! 🔥
                </p>
              </div>
            </motion.div>

            {/* Event Rounds Section - Title */}
            <motion.div
              variants={cardVariants}
              className="relative z-30 text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 gbu-heading">
                Event Rounds
              </h3>
            </motion.div>

            {/* Event Rounds - Grid Responsive */}
            <motion.div
              variants={cardVariants}
              className="relative z-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {/* Round 1 Card */}
              <div className="flex-1 bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 rounded-2xl p-6 border border-yellow-400/30 shadow-xl text-center">
                <div className="text-4xl mb-4 font-alata font-bold gbu-heading text-blue-400">
                  Guess
                </div>
                <h4 className="text-xl font-bold mb-3 font-alata">
                  Round 1 – Crossword Clash 🧩
                </h4>
                <p className="text-gray-200 font-alata">
                  Crack clever clues and race against time to find the right
                  answers! ⏳
                </p>
              </div>

              {/* Round 2 Card */}
              <div className="flex-1 bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 rounded-2xl p-6 border border-yellow-400/30 shadow-xl text-center">
                <div className="text-4xl mb-4 font-alata font-bold gbu-heading text-blue-400">
                  Build
                </div>
                <h4 className="text-xl font-bold text-yellow-200 mb-3 font-alata">
                  Round 2 – Logo Logic 👀
                </h4>
                <p className="text-gray-200 font-alata">
                  Identify famous brands with tricky twists — not as easy as it
                  looks! 🤯
                </p>
              </div>

              {/* Round 3 Card */}
              <div className="flex-1 bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 rounded-2xl p-6 border border-yellow-400/30 shadow-xl text-center">
                <div className="text-4xl mb-4 font-alata font-bold gbu-heading text-blue-400">
                  Unlock
                </div>
                <h4 className="text-xl font-bold text-yellow-200 mb-3 font-alata">
                  Round 3 – Surprise Round 🎁
                </h4>
                <p className="text-gray-200 font-alata">
                  Expect the unexpected! A mystery challenge that'll test your
                  wits and teamwork. 💥
                </p>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              variants={cardVariants}
              className="relative z-30 text-center"
            >
              <div className="italic text-yellow-300 font-semibold text-lg">
                "Business ragasiyam kedacha athisiyam"
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="relative text-3xl z-30 bg-gradient-to-br from-yellow-100/10 to-yellow-400/10 rounded-2xl p-6 border border-yellow-400/30 shadow-xl text-center"
            >
              <div className="text-gray-100 font-alata gbu-coordinators">
                <span className="block text-4xl font-bold text-yellow-400 mb-2">
                  Event Coordinators:
                </span>

                <span className="block mt-4">
                  👤 Gautham S –{" "}
                  <a
                    href="tel:9342652208"
                    className="underline text-yellow-200 hover:text-yellow-300"
                  >
                    93426 52208
                  </a>
                </span>
                <span className="block">
                  👤 Goutham K –{" "}
                  <a
                    href="tel:9629648678"
                    className="underline text-yellow-200 hover:text-yellow-300"
                  >
                    96296 48678
                  </a>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <div className="text-center flex items-center justify-center gap-6">
            <Link
              to="https://forms.gle/r2EH5Tmtg6Cq1SV97"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-16"
            >
              Register Now
            </Link>
            <Link
              to="https://youtu.be/1XI0JW4bJII"
              className="treasure-btn px-6 py-2 text-lg my-16 mb-16"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GBU;
