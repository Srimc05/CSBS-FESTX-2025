import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Generate random positions for floating dots
const floatingDots = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  size: 6, // Fixed size for all dots
  duration: 20, // Same speed for all dots
  delay: i * 0.08 + (Math.random() * 0.5 - 0.25), // More consistent spacing with slight variation
}));

const WolfGambit = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const roundsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen relative font-alata overflow-hidden bg-black">
      {/* Among Us Floating Dots Background */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        {floatingDots.map((dot) => (
          <div
            key={dot.id}
            className="floating-dot"
            style={{
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}

        {/* Among Us Character Floating */}
        <img
          src="/amongus.webp"
          alt="Among Us Character"
          className="amongus-character"
        />
      </div>

      <style>{`
        .floating-dot {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatLeftToRight linear infinite;
          left: -10px;
        }
        
        @keyframes floatLeftToRight {
          0% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(calc(100vw + 10px));
          }
        }
        
        .amongus-character {
          position: absolute;
          width: 100px;
          height: auto;
          top: 15%;
          left: -80px;
          opacity: 0.8;
          animation: amongusFloat linear infinite;
          animation-duration: 15s;
          z-index: 1;
        }
        
        @keyframes amongusFloat {
          0% {
            transform: translateX(-80px) rotate(0deg);
          }
          33% {
            transform: translateX(calc(50vw - 30px)) rotate(120deg);
          }
          66% {
            transform: translateX(calc(100vw + 80px)) rotate(240deg);
          }
          66.1% {
            transform: translateX(-80px) rotate(360deg);
          }
          100% {
            transform: translateX(-80px) rotate(360deg);
          }
        }

        /* --- MODIFIED SECTION: Electric Fire Effect Styles --- */
        .electric-fire-container {
            position: relative;
            /* Make it a square for a perfect circle */
            width: 200px; 
            height: 200px; 
            display: flex;
            align-items: center;
            justify-content: center;
            /* Add border-radius to make the container round */
            border-radius: 50%;
        }
        
        /* Responsive size for md and above screens */
        @media (min-width: 768px) {
          .electric-fire-container {
            width: 360px;
            height: 360px;
          }
        }

        .electric-fire-container::before {
            content: '';
            position: absolute;
            inset: -10px;
            background: 
                radial-gradient(circle at 50% 10%, #FF4500 0%, transparent 70%),
                radial-gradient(circle at 30% 80%, #FF8C00 0%, transparent 70%),
                radial-gradient(circle at 70% 80%, #FFA500 0%, transparent 70%);
            background-size: 100% 100%;
            animation: electric-fire-anim 1.5s infinite alternate;
            filter: blur(8px);
            z-index: -1;
            /* Add border-radius to make the effect round */
            border-radius: 50%;
        }
        
        .electric-fire-container::after {
            content: '';
            position: absolute;
            inset: -15px;
            background: rgba(255, 69, 0, 0.2);
            /* This was already round, which is perfect */
            border-radius: 50%;
            filter: blur(20px);
            z-index: -2;
            animation: electric-fire-outer-glow 2s infinite alternate;
        }


        @keyframes electric-fire-anim {
            /* ... (keyframes are unchanged) ... */
        }
        
        @keyframes electric-fire-outer-glow {
            /* ... (keyframes are unchanged) ... */
        }
        /* --- END OF MODIFIED SECTION --- */
      `}</style>

      {/* Back button */}
      <Link
        to="/events"
        className="fixed z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-yellow-400 bg-black/60 backdrop-blur-sm text-yellow-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-300 shadow-lg transition-all top-5 md:top-7 left-3 md:left-6"
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

      {/* SECTION 1: Initial Viewport with Title Images */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center relative z-10 gap-2 animate-pulse"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Electric Fire Effect Wrapper */}
        <div className="electric-fire-container animate-none">
          {/* === MODIFIED IMAGE === */}
          <img
            src="/WGambit1.webp"
            alt="Wolf Gambit Character"
            className="w-50 h-50 md:w-80 md:h-80 rounded-full object-cover relative z-10"
          />
        </div>

        {/* <img src="/Logos/WolfsGambit.webp" alt="Wolf Gambit Logo" className="w-auto h-24 mt-6 animate-pulse duration-75"/> */}
        <p
          className="text-3xl sm:text-5xl lg:text-8xl m-2 sm:m-4 text-white font-black text-center tracking-widest uppercase px-4"
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            letterSpacing: "0.15em",
          }}
        >
          Wolf's Gambit
        </p>
        <img
          src="/wolfsgambit-tagline.webp"
          alt="Wolf Gambit Tagline"
          className="h-6 sm:h-8 lg:h-10 w-auto animate-bounce mx-4"
        />
      </motion.div>

      {/* SECTION 2: Scrollable Content */}
      <motion.div
        className="relative z-10 px-6 pb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction Card */}
          <motion.div
            variants={cardVariants}
            className="group bg-gradient-to-br from-gray-900/60 via-red-950/40 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-red-500/30 shadow-2xl transition-all duration-500 hover:border-red-400/60 hover:shadow-red-500/20 hover:scale-[1.01] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-rose-500/0 to-red-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                Introduction
              </h2>
              <p className="text-gray-100 text-lg text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                Welcome to{" "}
                <span className="text-red-400 font-bold">Wolf's Gambit</span>, a
                fun twist on technical treasure-hunting with a mix of logic 🧠,
                bluffing 😏, and teamwork 🤝. Some of you will be{" "}
                <strong className="text-yellow-400">Sheep 🐑</strong> solving
                the puzzle, while a few hidden{" "}
                <strong className="text-red-500">Wolves 🐺</strong> will try to
                mislead you. Guess smart, vote wisely, and outwit your
                opponents!
              </p>
            </div>
          </motion.div>

          {/* Instructions Card */}
          <motion.div
            variants={cardVariants}
            className="group bg-gradient-to-br from-gray-900/60 via-purple-950/40 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-500/30 shadow-2xl transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-500/20 hover:scale-[1.01] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Instructions
              </h2>
              <div className="space-y-4">
                <div className=" group-hover:border-red-400/50 transition-all duration-300 flex items-center gap-3">
                  <span className="text-3xl">📱</span>
                  <p className="text-gray-200 text-lg">
                    <strong className="text-red-400">
                      Mobile Phones: ❌ Not allowed
                    </strong>{" "}
                    during the event
                  </p>
                </div>

                <div className="group-hover:border-yellow-400/50 transition-all duration-300 flex items-center gap-3">
                  <span className="text-3xl">⚡</span>
                  <p className="text-gray-200 text-lg">
                    Event organizers'{" "}
                    <strong className="text-yellow-400">
                      decision is final
                    </strong>
                  </p>
                </div>

                <div className="group-hover:border-blue-400/50 transition-all duration-300 flex items-center gap-3">
                  <span className="text-3xl">⏳</span>
                  <p className="text-gray-200 text-lg">
                    Respect{" "}
                    <strong className="text-blue-400">time limits</strong> and
                    maintain{" "}
                    <strong className="text-green-400">fair play 🤝</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Event Flow Card */}
          <motion.div
            variants={cardVariants}
            className="group bg-gradient-to-br from-gray-900/60 via-indigo-950/40 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-indigo-500/30 shadow-2xl transition-all duration-500 hover:border-indigo-400/60 hover:shadow-indigo-500/20 hover:scale-[1.01] relative overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Event Flow
              </h2>

              <div className="space-y-6">
                {/* Round 1 */}

                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                      Hints
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Each team gets a{" "}
                      <strong className="text-cyan-300">clue</strong>; Wolves
                      secretly know the answer.
                    </p>
                  </div>
                </div>

                {/* Round 2 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">
                      Discussion
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Teams{" "}
                      <strong className="text-orange-300">
                        discuss and share hints
                      </strong>{" "}
                      while Wolves mislead.
                    </p>
                  </div>
                </div>

                {/* Round 3 */}
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">🎯</div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-400 mb-2">
                      Guess & Vote
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Teams submit their{" "}
                      <strong className="text-red-300">guess</strong>, then vote
                      to expose Wolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Details and Scoring - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Details Card */}
            <motion.div
              variants={cardVariants}
              className="group bg-gradient-to-br from-yellow-900/40 via-orange-950/30 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-500/30 shadow-2xl transition-all duration-500 hover:border-yellow-400/60 hover:shadow-yellow-500/20 hover:scale-[1.01] relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 via-orange-500/0 to-yellow-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Team Details
                </h2>
                <div className="flex justify-center">
                  <div className="group-hover:border-yellow-300/60 transition-all duration-300">
                    <p className="text-yellow-300 text-xl font-bold text-center">
                      Team Size:{" "}
                      <span className="text-2xl text-yellow-400">
                        2 participants
                      </span>{" "}
                      per team
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scoring Card */}
            <motion.div
              variants={cardVariants}
              className="group bg-gradient-to-br from-green-900/40 via-emerald-950/30 to-gray-900/60 backdrop-blur-md rounded-2xl p-8 border-2 border-green-500/30 shadow-2xl transition-all duration-500 hover:border-green-400/60 hover:shadow-green-500/20 hover:scale-[1.01] relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-emerald-500/0 to-green-700/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h2 className="text-3xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                  Scoring
                </h2>
                <p className="text-gray-200 text-xl leading-relaxed">
                  Points for{" "}
                  <strong className="text-green-300">correct answers</strong>{" "}
                  and{" "}
                  <strong className="text-yellow-300">spotting Wolves</strong>{" "}
                  🐺
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Footer placeholder or additional content */}
    </div>
  );
};

export default WolfGambit;
