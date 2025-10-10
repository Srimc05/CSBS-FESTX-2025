import React from "react";
import { Link } from "react-router-dom";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";

const UnlockX = () => {
  // List of assets to preload for UnlockX page
  const assetsToLoad = [
    "/unlockx.webm",
    "/UnlockX.webp",
    "/unlockxcontent.webp",
  ];

  const isLoading = useAssetLoader(assetsToLoad);

  // Show loading spinner while assets are loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

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
      <div className="relative z-10 px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* First Round */}
          <div className="bg-gradient-to-br from-slate-800/60 to-purple-900/40 backdrop-blur-md rounded-2xl p-4 md:p-6 border-2 border-cyan-400/40 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-[1.01]">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2">
              <div className="text-3xl sm:text-4xl animate-bounce">🤖</div>
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 font-alata text-center sm:text-left">
                First Round: The AI Oracle
              </h2>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 font-alata text-center">
              🎯 Akinator-Style Challenge - Unlock the identity!
            </h3>
            <p className="text-gray-200 text-sm sm:text-base mb-4 font-alata text-center">
              A custom-built AI chatbot is tuned to "become" a famous
              person/entity (e.g., Albert Einstein, Cleopatra, Iron Man, Mona
              Lisa, Elon Musk).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3 border border-cyan-500/40 flex flex-col items-center text-center hover:bg-cyan-500/10 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">⏱️</div>
                <span className="text-cyan-300 font-bold font-alata text-sm">
                  15 Questions
                </span>
                <span className="text-gray-400 text-xs">Limited chances</span>
              </div>
              <div className="bg-black/30 rounded-lg p-3 border border-purple-500/40 flex flex-col items-center text-center hover:bg-purple-500/10 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">⏰</div>
                <span className="text-purple-300 font-bold font-alata text-sm">
                  10-15 Minutes
                </span>
                <span className="text-gray-400 text-xs">Time limit</span>
              </div>
              <div className="bg-black/30 rounded-lg p-3 border border-pink-500/40 flex flex-col items-center text-center hover:bg-pink-500/10 transition-all">
                <div className="text-2xl sm:text-3xl mb-2">💬</div>
                <span className="text-pink-300 font-bold font-alata text-sm">
                  Yes/No/Maybe
                </span>
                <span className="text-gray-400 text-xs">AI responses</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-400/50">
              <p className="text-yellow-300 font-bold text-sm sm:text-base font-alata text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl">🏆</span>
                <span>First correct guess or best accuracy wins!</span>
              </p>
            </div>

            <p className="text-gray-300 text-center font-alata italic text-xs sm:text-sm mt-4 px-2">
              💡 Tests strategic questioning, logic, and deductive reasoning
              with AI constraints
            </p>
          </div>

          {/* Final Round */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-md rounded-2xl p-4 md:p-6 border-2 border-cyan-400/40 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-[1.01]">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2">
              <div className="text-3xl sm:text-4xl animate-pulse">🔐</div>
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 font-alata text-center sm:text-left">
                Final Round: The AI Guess Chain
              </h2>
              <div className="text-3xl sm:text-4xl animate-pulse">🧠</div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 font-alata text-center">
              🎨 Chinese Whisper: AI Edition - Unlock the imagination!
            </h3>
            <p className="text-gray-200 text-sm sm:text-base mb-4 font-alata text-center leading-relaxed">
              Step into the world where human perception meets AI imagination!
              In this creative final round, participants will play a chain game
              between human observers and AI generators.
            </p>

            <div className="space-y-3 mb-4">
              <div className="bg-black/30 rounded-lg p-3 border border-cyan-500/40 flex items-start gap-3 hover:bg-cyan-500/10 transition-all">
                <div className="text-2xl sm:text-3xl flex-shrink-0">👁️</div>
                <div>
                  <span className="text-cyan-300 font-bold text-sm sm:text-base font-alata block mb-1">
                    Step 1: Observe
                  </span>
                  <p className="text-gray-300 font-alata text-xs sm:text-sm">
                    One participant views an image for a short time and
                    describes it in detail using their own words.
                  </p>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-3 border border-blue-500/40 flex items-start gap-3 hover:bg-blue-500/10 transition-all">
                <div className="text-2xl sm:text-3xl flex-shrink-0">🤖</div>
                <div>
                  <span className="text-blue-300 font-bold text-sm sm:text-base font-alata block mb-1">
                    Step 2: AI Generation
                  </span>
                  <p className="text-gray-300 font-alata text-xs sm:text-sm">
                    The description is fed to an AI image generator to recreate
                    the scene.
                  </p>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-3 border border-purple-500/40 flex items-start gap-3 hover:bg-purple-500/10 transition-all">
                <div className="text-2xl sm:text-3xl flex-shrink-0">🔄</div>
                <div>
                  <span className="text-purple-300 font-bold text-sm sm:text-base font-alata block mb-1">
                    Step 3: Chain Continues
                  </span>
                  <p className="text-gray-300 font-alata text-xs sm:text-sm">
                    The next participant describes the AI-generated image,
                    creating a fascinating chain of interpretation!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 border border-yellow-400/50 mb-4">
              <p className="text-yellow-300 font-bold text-sm sm:text-base font-alata text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <span className="text-lg sm:text-xl">⭐</span>
                <span>
                  Judged on accuracy, creativity, and descriptive clarity
                </span>
                <span className="text-lg sm:text-xl hidden sm:inline">⭐</span>
              </p>
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
            <Link
              to="https://youtu.be/H0LHVcE7wyw"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
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

              {/* Mobile view (stacked) */}
              <div className="space-y-3 lg:hidden">
                <div className="text-center">
                  <p className="text-amber-200 text-lg">
                    <span className="font-semibold text-white">
                      Bala Nivasa Vel
                    </span>
                    <br />
                    <span className="text-amber-300">9361603509</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-amber-200 text-lg">
                    <span className="font-semibold text-white">Rogith</span>
                    <br />
                    <span className="text-amber-300">9629314051</span>
                  </p>
                </div>
              </div>

              {/* Large screen view (inline) */}
              <div className="hidden lg:flex justify-center text-center gap-6 text-amber-200 text-lg">
                <p>
                  <span className="font-semibold text-white no-wrap">Bala</span>{" "}
                  9361603509
                </p>
                <p>
                  <span className="font-semibold text-white">Rogith</span>{" "}
                  9629314051
                </p>
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
