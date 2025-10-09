import React from "react";
import { Link } from "react-router-dom";

const UnlockX = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/unlockx.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-10"></div>

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

      {/* SECTION 1: Initial Viewport with Logo */}
      <div className="h-screen flex items-center justify-center relative z-20 flex-col">
        <img
          src="/UnlockX.webp"
          alt="UnlockX"
          className="w-full h-auto max-w-[80%] md:max-w-[40%] animate-pulse" // Added max-width for responsiveness
        />
        <img
          src="/unlockxcontent.webp"
          alt="UnlockX"
          className="w-full h-auto max-w-[90%] md:max-w-md animate-pulse" // Added max-width for responsiveness
        />
        {/* <h2 className="text-white font-architype text-2xl md:text-3xl tracking-wide mt-4">Nothing opens without a reason</h2> */}
        {/* Architype Van Doesburg font-face (ensure font file is in public/fonts/ArchitypeVanDoesburg.woff2) */}
        <style>{`
        @font-face {
          font-family: 'Architype Van Doesburg';
          src: url('/fonts/ArchitypeVanDoesburg.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        .font-architype {
          font-family: 'Architype Van Doesburg', sans-serif !important;
          letter-spacing: 0.04em;
        }
      `}</style>
      </div>

      {/* SECTION 2: Scrollable Content */}
      <div className="relative z-20 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* First Round */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-alata flex items-center">
                <span className="mr-3">🤖</span>
                First Round: The AI Oracle
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-xl p-4 border border-cyan-400/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 font-alata">
                    Akinator-Style Challenge{" "}
                    <span className="text-gray-300">
                      - Unlock the identity!
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-4 font-alata">
                    A custom-built AI chatbot is tuned to "become" a famous
                    person/entity (e.g., Albert Einstein, Cleopatra, Iron Man,
                    Mona Lisa, Elon Musk).
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        ⏱
                      </div>
                      <span className="text-gray-300 font-alata">
                        Limited to 15 questions
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        🕐
                      </div>
                      <span className="text-gray-300 font-alata">
                        10-15 minutes time limit
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        💬
                      </div>
                      <span className="text-gray-300 font-alata">
                        AI only answers Yes/No/Maybe
                      </span>
                    </div>
                  </div>
                  <p className="text-yellow-400 font-semibold mt-4 font-alata">
                    First correct guess (or best accuracy within time limit)
                    wins!
                  </p>
                </div>
                <p className="text-gray-300 text-sm font-alata">
                  This round tests strategic questioning, logic, and deductive
                  reasoning with AI constraints.
                </p>
              </div>
            </div>

            {/* Second Round */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 font-alata flex items-center">
                🔐 Final Round: The AI Guess Chain 🧠
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-4 border border-cyan-400/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 font-alata">
                    Chinese Whisper : AI Edition{" "}
                    <span className="text-gray-300">
                      - Unlock the imagination!
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-4 font-alata">
                    Step into the world where human perception meets AI
                    imagination! In this creative final round, participants will
                    play a chain game between human observers and AI generators.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        1
                      </div>
                      <p className="text-gray-300 font-alata">
                        One participant will view an image for a short time and
                        describe it in detail using their own words.
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        2
                      </div>
                      <span className="text-gray-300 font-alata">
                        Each solved question reveals the key to the next
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-xs">
                        3
                      </div>
                      <span className="text-gray-300 font-alata">
                        Logic, AI, and programming challenges
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="text-yellow-400 font-semibold mt-4 font-alata">
                        Teams will be judged based on accuracy, creativity, and
                        descriptive clarity.
                      </p>
                    </div>
                    {/* Centered Duration Div */}
                    <div className="w-fit mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full font-bold text-lg text-center font-alata">
                      Duration: 2-2.5 Hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center flex items-center justify-center gap-6">
            <Link
              to="https://forms.gle/YksyyXBoLWM6ZWbAA"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
              Register Now
            </Link>
            <Link to="#" className="treasure-btn px-6 py-2 text-lg my-4 mb-16">
              Watch Trailer
            </Link>
          </div>

          {/* Event Coordinators Card */}
          <div className="flex justify-center mt-12 mb-16">
            <div className="bg-gradient-to-br from-amber-500/20 via-yellow-600/15 to-orange-700/25 backdrop-blur-md rounded-2xl p-8 border-2 border-amber-400/40 shadow-2xl text-center w-full max-w-sm lg:max-w-xs transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-amber-300 text-xl font-bold font-alata underline decoration-amber-400 decoration-2 underline-offset-4">
                  Event Coordinators
                </h2>
              </div>

              <div className="space-y-2">
                <div className="bg-black/20 rounded-lg p-4 border border-amber-400/20">
                  <h3 className="text-white text-lg font-semibold font-alata mb-2">
                    Bala Nivasa Vel
                  </h3>
                  <p className="text-amber-300 font-medium text-base">
                    9361603509
                  </p>
                </div>

                <div className="bg-black/20 rounded-lg p-4 border border-amber-400/20">
                  <h3 className="text-white text-lg font-semibold font-alata mb-2">
                    Rogith
                  </h3>
                  <p className="text-amber-300 font-medium text-base">
                    9361603509
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockX;
