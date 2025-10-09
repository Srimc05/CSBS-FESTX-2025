import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const StellarQuest = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    // Hide centered navbar while on this single event page
    document.body.classList.add("hide-centered-nav");
    return () => document.body.classList.remove("hide-centered-nav");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight; // draw only to the viewport for performance
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
    const STAR_COUNT = prefersReduced ? 0 : isMobile ? 50 : 150;

    const stars = new Array(STAR_COUNT).fill(0).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      // Slightly larger stars for more presence
      r: Math.random() * 1.6 + 0.6, // 0.6 - 2.2 px
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.1,
      tw: Math.random() * Math.PI * 2,
      tws: 0.01 + Math.random() * 0.02,
    }));

    // Shooting stars array
    const shootingStars = [];
    let lastShootingStar = 0;

    const drawBg = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const grd = ctx.createLinearGradient(0, 0, 0, h);
      grd.addColorStop(0, "#0e1a2b");
      grd.addColorStop(0.9, "#0a0f1a");
      grd.addColorStop(1, "#000000");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    };

    const createShootingStar = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const centerX = w / 2;
      const centerY = h / 2;
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let x, y, vx, vy;

      // 30% chance to aim toward center, 70% chance for random direction
      const aimToCenter = Math.random() < 0.3;

      switch (side) {
        case 0: // top
          x = Math.random() * w;
          y = -10;
          if (aimToCenter) {
            const dx = centerX - x;
            const dy = centerY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 3 + Math.random() * 2;
            vx = (dx / distance) * speed;
            vy = (dy / distance) * speed;
          } else {
            vx = (Math.random() - 0.5) * 8;
            vy = Math.random() * 3 + 2;
          }
          break;
        case 1: // right
          x = w + 10;
          y = Math.random() * h;
          if (aimToCenter) {
            const dx = centerX - x;
            const dy = centerY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 3 + Math.random() * 2;
            vx = (dx / distance) * speed;
            vy = (dy / distance) * speed;
          } else {
            vx = -(Math.random() * 3 + 2);
            vy = (Math.random() - 0.5) * 8;
          }
          break;
        case 2: // bottom
          x = Math.random() * w;
          y = h + 10;
          if (aimToCenter) {
            const dx = centerX - x;
            const dy = centerY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 3 + Math.random() * 2;
            vx = (dx / distance) * speed;
            vy = (dy / distance) * speed;
          } else {
            vx = (Math.random() - 0.5) * 8;
            vy = -(Math.random() * 3 + 2);
          }
          break;
        case 3: // left
          x = -10;
          y = Math.random() * h;
          if (aimToCenter) {
            const dx = centerX - x;
            const dy = centerY - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const speed = 3 + Math.random() * 2;
            vx = (dx / distance) * speed;
            vy = (dy / distance) * speed;
          } else {
            vx = Math.random() * 3 + 2;
            vy = (Math.random() - 0.5) * 8;
          }
          break;
      }

      return {
        x,
        y,
        vx,
        vy,
        life: 1.0,
        decay: 0, // No fading
        length: 30 + Math.random() * 40,
        width: 1 + Math.random() * 2,
        startX: x,
        startY: y,
        // Calculate total distance needed to cross the screen
        totalDistance: Math.max(w, h) + 100, // Extra buffer to ensure full crossing
        distance: 0,
      };
    };

    const tick = () => {
      drawBg();
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Update and draw regular stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.tw += s.tws;
        if (s.x < -5) s.x = window.innerWidth + 5;
        if (s.x > window.innerWidth + 5) s.x = -5;
        const vh = window.innerHeight;
        if (s.y < -5) s.y = vh + 5;
        if (s.y > vh + 5) s.y = -5;
        const alpha = 0.8 + 0.45 * Math.sin(s.tw);
        ctx.globalAlpha = Math.max(0.25, Math.min(1, alpha));
        ctx.fillStyle = "#f2f6ff";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#dbeafe";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Create new shooting stars randomly
      const now = Date.now();
      if (now - lastShootingStar > 8000 + Math.random() * 12000) {
        // 8-20 seconds
        shootingStars.push(createShootingStar());
        lastShootingStar = now;
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += star.vx;
        star.y += star.vy;
        star.distance += Math.sqrt(star.vx * star.vx + star.vy * star.vy);

        // Remove star only when it has traveled the full distance across the screen
        if (star.distance >= star.totalDistance) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw shooting star trail
        ctx.globalAlpha = 1.0; // Always fully visible
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = star.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(
          star.x - star.vx * star.length,
          star.y - star.vy * star.length
        );
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Draw bright head
        ctx.globalAlpha = 0.9; // Slightly dimmer head for contrast
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.width * 2, 0, Math.PI * 2);
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

  useEffect(() => {
    const cards = document.querySelectorAll(".char-card");
    if (!cards.length) return;
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      cards.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.4 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Mobile: tap triggers scan animation (adds/removes .scanning briefly)
  useEffect(() => {
    const cards = document.querySelectorAll(".char-card");
    if (!cards.length) return;
    const onClick = (e) => {
      const el = e.currentTarget;
      el.classList.remove("scanning");
      // Force reflow to restart animation if tapped repeatedly
      void el.offsetWidth;
      el.classList.add("scanning");
      window.setTimeout(() => el.classList.remove("scanning"), 950);
    };
    cards.forEach((el) => el.addEventListener("click", onClick));
    return () =>
      cards.forEach((el) => el.removeEventListener("click", onClick));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Lightweight canvas starfield */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
      />

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

      {/* Hero Section - Centered in viewport */}
      <div className="h-screen flex items-center justify-center text-center relative z-10">
        <div>
          <h1
            className="text-6xl md:text-8xl font-extrabold neon-title font-orbitron tracking-wide mb-4 glitch"
            data-text="The Stellar Quest"
          >
            The Stellar Quest
          </h1>
          <p
            className="text-2xl md:text-3xl text-cyan-300 font-jetbrains mb-6 glitch"
            data-text="Your Cosmic Adventure Awaits! 🚀"
          >
            Your Cosmic Adventure Awaits! 🚀
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content below viewport */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Character Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-yellow-300 text-center mb-8 font-orbitron tracking-wide">
              Assemble Your Crew
            </h2>

            {/* Cards grid: two on first row, third centered below */}
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 place-items-center">
              {/* Card 1 */}
              <div
                className="triangle-face w-[100%] h-[100%] slide-in-from-corner char-card"
                style={{ transitionDelay: "0s" }}
              >
                <div className="triangle-content">
                  <img
                    src="/atlas.webp"
                    alt="Engineer Character"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="triangle-face w-[100%] h-[100%] slide-in-from-corner char-card"
                style={{ transitionDelay: "0.12s" }}
              >
                <div className="triangle-content">
                  <img
                    src="/ironclad.webp"
                    alt="Navigator Character"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card 3 centered in second row */}
              <div className="md:col-span-2 flex justify-center">
                <div
                  className="triangle-face w-[100%] h-[100%] md:w-[50%] md:h-[50%] slide-in-from-corner char-card"
                  style={{ transitionDelay: "0.24s" }}
                >
                  <div className="triangle-content">
                    <img
                      src="/runestone.webp"
                      alt="Decoder Character"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Video box below cards */}
            <div className="flex items-center justify-center mb-16">
              <div className="triangle-face w-full md:w-3/4 lg:w-2/3 h-72 md:h-96 flex items-center justify-center">
                <div className="text-center text-cyan-300 font-jetbrains">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-xl font-orbitron mb-2">
                    Mission Briefing
                  </h3>
                  <p className="text-gray-400">
                    YouTube video will be embedded here
                  </p>
                </div>
              </div>
            </div>

            {/* Story Description */}
            <div className="mb-16">
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-2xl font-extrabold text-yellow-300 mb-6 font-orbitron tracking-wide text-center">
                  The Cosmic Mission
                </h3>
                <p className="text-gray-300 font-jetbrains text-lg leading-relaxed">
                  In a distant galaxy, three agents from the Galactic Guild set
                  out on a mission to uncover the{" "}
                  <span className="text-yellow-400 font-bold">
                    Eternal Starforge
                  </span>
                  —a mythical relic said to hold the power to reshape worlds.
                  But fate had other plans. As the{" "}
                  <span className="text-cyan-400 font-semibold">Petrov</span>{" "}
                  and{" "}
                  <span className="text-purple-400 font-semibold">Veynn</span>{" "}
                  approach the planet believed to hide the Forge, a violent ion
                  surge tears through their ship, sending them crashing onto a
                  barren world. Meanwhile,{" "}
                  <span className="text-orange-400 font-semibold">
                    Runestone
                  </span>
                  , stationed at their orbital base, is caught in the chaos and
                  thrown onto another planet within the same system—the one that
                  secretly guards the true Forge. Now scattered across space,
                  the trio must find a way to reunite through cryptic
                  transmissions, broken systems, and coded trails. Their only
                  hope lies in decoding the cosmos before the stars themselves
                  fade away.
                </p>
              </div>
            </div>

            {/* Rules Section - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Left Column - Rounds */}
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-2xl font-extrabold text-cyan-300 mb-6 font-orbitron tracking-wide flex items-center">
                  <span className="mr-3">🌌</span>
                  ROUNDS
                </h3>
                <div className="space-y-4 text-gray-300 font-jetbrains">
                  <p className="font-semibold text-yellow-300">
                    Single Round — Three Cosmic Paths
                  </p>
                  <p>
                    The Stellar Quest is a single-round event divided into three
                    thrilling levels, each inspired by one of the three
                    voyagers' journeys:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>
                      <span className="text-yellow-400 font-semibold">
                        Path of the Engineer
                      </span>{" "}
                      – Repair broken systems by fixing faulty codes, and
                      rebuild lost mechanisms of the spaceship.
                    </li>
                    <li>
                      <span className="text-cyan-400 font-semibold">
                        Path of the Navigator
                      </span>{" "}
                      – Decode distorted star maps, data patterns (regex), and
                      cosmic coordinates.
                    </li>
                    <li>
                      <span className="text-purple-400 font-semibold">
                        Path of the Decoder
                      </span>{" "}
                      – Crack encrypted transmissions, hidden ciphers, and
                      mysterious signals.
                    </li>
                  </ol>
                  <p>
                    All teams will play through every path sequentially,
                    progressing deeper into the storyline with each level.
                  </p>
                  <p>
                    Each path unveils new types of puzzles, unique challenges,
                    and fragments that could be solved through coding, AI
                    assistance, or any other online tools.
                  </p>
                  <p>
                    Your team's ability to collaborate, strategize, and adapt to
                    different puzzle styles will determine how far you go before
                    time runs out.
                  </p>
                  <p className="font-semibold text-yellow-300">
                    Only those who can decode the cosmos together will reach the
                    Starforge.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-yellow-500/20 border border-cyan-400/30 rounded-xl backdrop-blur-sm shadow-lg">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-2xl">⏱️</div>
                    <div className="text-center">
                      <div className="text-cyan-300 font-orbitron text-sm tracking-wider uppercase mb-1">
                        Mission Duration
                      </div>
                      <div className="text-yellow-300 font-jetbrains text-xl font-bold">
                        1.5 - 2 Hours
                      </div>
                    </div>
                    <div className="text-2xl">🚀</div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                    <span className="text-xl leading-none">👥</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-cyan-300 font-orbitron text-[11px] tracking-[0.2em] uppercase">
                        Team Size
                      </span>
                      <span className="text-yellow-300 font-jetbrains text-xl font-bold">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Rules */}
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="text-2xl font-extrabold text-yellow-300 mb-6 font-orbitron tracking-wide flex items-center">
                  <span className="mr-3">⚙️</span>
                  RULES & GUIDELINES
                </h3>
                <div className="space-y-4 text-gray-300 font-jetbrains text-sm">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      1. Team Composition
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Each team must consist of exactly 3 members.</li>
                      <li>Only 1 laptop is permitted per team.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      2. Event Structure
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        The event consists of one single round containing three
                        sequential paths — Engineer → Navigator → Cipherbreaker.
                      </li>
                      <li>
                        Teams must complete the paths in the given order;
                        skipping or changing sequence is not allowed.
                      </li>
                      <li>
                        Although, within each path, puzzles may be attempted in
                        any order.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      3. Subtasks & Coins
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        At any time, one member will play a short subtask
                        (mini-puzzle) while the other two solve the main
                        challenges.
                      </li>
                      <li>
                        Subtasks rotate each round so that every participant
                        within the team takes part.
                      </li>
                      <li>
                        Completing subtasks earns Coins, which can be redeemed
                        for hints during the main puzzles.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      4. Tools Allowed
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Use of AI tools, online utilities, and
                        programming/decoding platforms is permitted.
                      </li>
                      <li>
                        Logical reasoning, teamwork, and time management will be
                        key to victory.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      5. Scoring
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Each main puzzle solved = 10–15 points.</li>
                      <li>
                        Unlocking the Final Code (Eternal Starforge) grants +30
                        bonus points.
                      </li>
                      <li>
                        Coins are used only for hints and do not reduce your
                        score.
                      </li>
                      <li>
                        The winner will be:
                        <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                          <li>
                            The first team to unlock the Eternal Starforge, or
                          </li>
                          <li>
                            The team with the highest total score when time
                            ends.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">
                      6. Fair Play
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        No cross-team discussions or external help from other
                        teams.
                      </li>
                      <li>
                        Teams breaking laptop or composition rules will be
                        disqualified.
                      </li>
                      <li>Organizers' decisions will be final.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center flex items-center justify-center gap-6">
            <Link
              to="https://forms.gle/LujZtb2uod1mWkUv9"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
              Register Now
            </Link>
            <Link to="#" className="treasure-btn px-6 py-2 text-lg my-4 mb-16">
              Watch Trailer
            </Link>
          </div>

          {/* Coordinators Section */}
          <div className="flex justify-center mb-16">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl md:w-96">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 text-center font-nikkyou underline decoration-yellow-400 decoration-2 underline-offset-4">
                Event Coordinators
              </h3>
              <div className="space-y-3 font-nikkyou">
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Hariharan B
                    </span>
                    <br />
                    <span className="text-yellow-400">7397758672</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Kaarthic V R
                    </span>
                    <br />
                    <span className="text-yellow-400">7010786974</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StellarQuest;
