import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const StellarQuest = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile =
      window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
    const STAR_COUNT = prefersReduced ? 0 : isMobile ? 100 : 200;

    const stars = new Array(STAR_COUNT).fill(0).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      tw: Math.random() * Math.PI * 2,
      tws: 0.01 + Math.random() * 0.02,
    }));

    const drawBg = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, "#0e1a2b");
      grd.addColorStop(1, "#000000");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    };

    const tick = () => {
      drawBg();
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.tw += s.tws;
        if (s.x < -5) s.x = window.innerWidth + 5;
        if (s.x > window.innerWidth + 5) s.x = -5;
        if (s.y < -5) s.y = window.innerHeight + 5;
        if (s.y > window.innerHeight + 5) s.y = -5;
        const alpha = 0.6 + 0.4 * Math.sin(s.tw);
        ctx.globalAlpha = Math.max(0.15, Math.min(1, alpha));
        ctx.fillStyle = "#e8eefb";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      rafRef.current = requestAnimationFrame(tick);
    };

    if (!prefersReduced) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      drawBg();
    }

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-12 px-6 relative overflow-hidden">
      {/* Lightweight canvas starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold neon-title font-orbitron tracking-wide mb-4">
            🌌 The Stellar Quest
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 font-jetbrains mb-6">
            Your Cosmic Adventure Awaits! 🚀
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* Character Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-yellow-300 text-center mb-8 font-orbitron tracking-wide">
            Assemble Your Crew
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engineer */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/1char.webp"
                  alt="Engineer Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-yellow-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-2 font-orbitron">
                Engineer
              </h3>
              <p className="text-gray-300 font-jetbrains">
                Debug broken code and fix AI prompts to get systems running
              </p>
            </div>

            {/* Navigator */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/2char.webp"
                  alt="Navigator Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-cyan-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2 font-orbitron">
                Navigator
              </h3>
              <p className="text-gray-300 font-jetbrains">
                Solve data puzzles and cosmic maps to chart your course
              </p>
            </div>

            {/* Decoder */}
            <div className="text-center group">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/3char.webp"
                  alt="Decoder Character"
                  className="relative w-48 h-48 mx-auto rounded-full border-4 border-purple-400 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-2 font-orbitron">
                Decoder
              </h3>
              <p className="text-gray-300 font-jetbrains">
                Crack secret ciphers and hidden transmissions to uncover final
                clues
              </p>
            </div>
          </div>
        </div>

        {/* Mission Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Blueprint */}
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-extrabold text-cyan-300 mb-6 font-orbitron flex items-center tracking-wide">
              <span className="mr-3">📋</span>
              Your Mission Blueprint
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2 font-jetbrains">
                    Teams & Tools
                  </h3>
                  <p className="text-gray-300 font-jetbrains">
                    Gather your crew of three. You'll have one laptop, and all
                    AI tools, programming environments, and online decoders are
                    fair game. Use everything at your disposal!
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 font-jetbrains">
                    The Path
                  </h3>
                  <p className="text-gray-300 font-jetbrains">
                    Navigate three epic stages in a set order: Engineer →
                    Navigator → Decoder
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2 font-jetbrains">
                    Teamwork is Key
                  </h3>
                  <p className="text-gray-300 font-jetbrains">
                    Two members tackle main puzzles while the third works on
                    side subtasks to earn coins 💰. Use coins to buy hints!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Prize */}
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-extrabold text-yellow-300 mb-6 font-orbitron flex items-center tracking-wide">
              <span className="mr-3">🏆</span>
              The Final Prize
            </h2>

            <div className="text-center">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4 font-orbitron">
                Eternal Starforge
              </h3>
              <p className="text-gray-300 mb-6 font-jetbrains">
                Solve the puzzles to collect all the artifacts and clues. The
                first team to assemble them and unlock the Eternal Starforge
                wins the{" "}
                <span className="text-yellow-400 font-bold">
                  +30 point bonus
                </span>{" "}
                and cosmic glory!
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg">
                Duration: 1.5-2 Hours
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="#" className="treasure-btn px-6 py-2 text-lg">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StellarQuest;
