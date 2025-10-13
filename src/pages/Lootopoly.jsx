import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAssetLoader } from "../hooks/useAssetLoader";
import LoadingSpinner from "../components/LoadingSpinner";

const Lootopoly = () => {
  // List of assets to preload for Lootopoly page
  const assetsToLoad = [
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/lootopoly.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/lootopoly_logo.webp",
    "https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/monopoly.webp",
  ];

  // const isLoading = useAssetLoader(assetsToLoad);

  useEffect(() => {
    document.body.classList.add("hide-centered-nav");
    return () => document.body.classList.remove("hide-centered-nav");
  }, []);

  const emitterRef = useRef(null);

  useEffect(() => {
    const host = emitterRef.current;
    if (!host) return;

    const coins = [];
    let animationId;

    const createFlowingCoin = () => {
      const coin = document.createElement("div");

      // Make coin highly visible with gold styling
      coin.style.cssText = `
        position: absolute;
        left: 0px;
        top: 0px;
        width: 24px;
        height: 24px;
        background: linear-gradient(45deg, #ffd700, #ffed4a, #f59e0b);
        border: 2px solid #b45309;
        border-radius: 50%;
        z-index: 1000;
        transform: translate(-50%, -50%);
        box-shadow: 
          inset 0 2px 4px rgba(255,255,255,0.3),
          0 2px 8px rgba(0,0,0,0.3),
          0 0 20px rgba(255,215,0,0.6);
      `;

      host.appendChild(coin);

      // Animation parameters
      const targetX = (Math.random() - 0.5) * window.innerWidth * 0.8;
      const targetY = window.innerHeight * 0.9;
      const duration = 3000 + Math.random() * 2000;
      const startTime = performance.now();

      coins.push({
        element: coin,
        targetX,
        targetY,
        duration,
        startTime,
      });
    };

    const animate = (currentTime) => {
      for (let i = coins.length - 1; i >= 0; i--) {
        const coinData = coins[i];
        const progress = (currentTime - coinData.startTime) / coinData.duration;

        if (progress >= 1) {
          // Remove completed coin
          if (coinData.element.parentNode) {
            coinData.element.parentNode.removeChild(coinData.element);
          }
          coins.splice(i, 1);
          continue;
        }

        // Smooth eased motion
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const x = coinData.targetX * easeProgress;
        const y = coinData.targetY * progress * progress; // Gravity effect
        const rotation = progress * 720; // Two full rotations
        const scale = 1 - progress * 0.3; // Shrink as it falls
        const opacity = progress > 0.8 ? (1 - progress) / 0.2 : 1;

        coinData.element.style.transform = `
          translate(-50%, -50%) 
          translate(${x}px, ${y}px) 
          rotate(${rotation}deg) 
          scale(${scale})
        `;
        coinData.element.style.opacity = opacity;
      }

      if (coins.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Create initial burst of coins
    createFlowingCoin();
    createFlowingCoin();
    createFlowingCoin();
    createFlowingCoin();

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Spawn new coins regularly with higher frequency
    const spawnInterval = setInterval(() => {
      if (coins.length < 30) {
        createFlowingCoin();
        if (!animationId) {
          animationId = requestAnimationFrame(animate);
        }
      }
    }, 200);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearInterval(spawnInterval);
      coins.forEach((coinData) => {
        if (coinData.element.parentNode) {
          coinData.element.parentNode.removeChild(coinData.element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-12 px-6 relative">
      {/* Thunderstorm Background Effect - Always present */}
      <div className="thunderstorm-bg"></div>
      {/* Show loading spinner while assets load */}
      {/* {isLoading && (
        <div className="absolute inset-0 z-50">
          <LoadingSpinner />
        </div>
      )} */}
      {/* Main content - only show when assets are loaded */}
      {/* Main content - only show when assets are loaded */}(
      <>
        {/* Bouncing Die */}
        <div className="bouncing-die-container">
          <div className="bouncing-die">
            {/* Face 1 */}
            <div className="die-face face-1">
              <div className="die-dots">
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
              </div>
            </div>

            {/* Face 2 */}
            <div className="die-face face-2">
              <div className="die-dots">
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
              </div>
            </div>

            {/* Face 3 */}
            <div className="die-face face-3">
              <div className="die-dots">
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
              </div>
            </div>

            {/* Face 4 */}
            <div className="die-face face-4">
              <div className="die-dots">
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
              </div>
            </div>

            {/* Face 5 */}
            <div className="die-face face-5">
              <div className="die-dots">
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
              </div>
            </div>

            {/* Face 6 */}
            <div className="die-face face-6">
              <div className="die-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot invisible"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
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
          {/* Centered hero with logo and tagline */}
          <section
            className="relative overflow-visible min-h-screen -mt-28 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center z-20"
            style={{ zIndex: 20 }}
          >
            {/* Optional dark overlay for readability */}
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative text-center z-30">
              <div className="relative inline-block">
                <img
                  src="https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/lootopoly_logo.webp"
                  alt="Loot-O-Poly"
                  className="mx-auto w-64 md:w-80 logo-glow"
                />
                {/* Coin emitter - coins will be spawned dynamically by JavaScript */}
                <div
                  ref={emitterRef}
                  className="pointer-events-none absolute left-1/2 top-0 w-[1px] h-[1px]"
                  style={{ zIndex: 50 }}
                ></div>
              </div>
              <div className="mt-4 gold-glow font-orbitron tracking-widest text-xs md:text-sm uppercase">
                Roll the dice, rule the board
              </div>
            </div>
          </section>
          {/* Two-column: left content card, right video placeholder */}
          <section className="relative z-20 max-w-7xl mx-auto px-3 md:px-6 mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-stretch">
              {/* Left: Content card */}
              <div className="md:col-span-8 glass-panel rounded-2xl p-8 flex flex-col">
                <div className="font-money-body space-y-4 text-[1.06rem] leading-7 flex-grow">
                  <h3 className="font-bold text-center text-yellow-500  tracking-widest text-sm md:text-base uppercase">
                    Event Description
                  </h3>
                  <p className="text-gray-300">
                    Tired of boring events? Same here da 😴. That’s why we made
                    LOOT-O-POLY – a game where your brain, your luck, and your
                    shamelessness will all be tested at once.
                  </p>
                  <p className="text-gray-300">
                    Here, questions will confuse you , tasks will embarrass you
                    , and Monopoly will ruin friendships faster than “who ate my
                    biryani” fights in the hostel.
                  </p>
                  <p className="text-gray-300">
                    You might end up rich, you might end up broke, or you might
                    end up dancing on the stage because a Chance card told you
                    to. And don’t even ask about the final twist… we promise
                    it’s crazier than your engineering timetable.
                  </p>
                  <p className="text-gray-300">
                    So buckle up , bring your humor , and get ready to loot,
                    laugh, and lose your dignity in style. LOOT-O-POLY – where
                    the only guarantee is laughter bankruptcy!
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 flex">
                <div className="glass-panel rounded-2xl p-6 w-full flex flex-col justify-around">
                  <h3 className="font-bold text-center text-yellow-500 tracking-widest text-sm md:text-base uppercase mb-4">
                    Team Details
                  </h3>
                  <div className="font-nikkyou space-y-4 text-gray-300">
                    <div className="text-center">
                      <p className="text-lg">
                        <span className="font-semibold text-yellow-300">
                          Team Size:
                        </span>
                        <br />
                        <span className="text-yellow-200">
                          2 participants per team 👯‍♂️
                        </span>
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-bold text-yellow-500 text-center mb-3 underline decoration-yellow-400 decoration-2 underline-offset-4">
                        Instructions
                      </h4>
                      <div className="space-y-3">
                        <p className="text-yellow-200 text-center">
                          <span className="font-semibold text-yellow-300">
                            Mobile Phones:
                          </span>
                          <br />
                          Not allowed during the event 🚫📱
                        </p>
                        <p className="text-yellow-200 text-center">
                          Event organizers' decision is final – no arguments! ⚡
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Rounds section with heading */}
          <section className="relative z-20 max-w-7xl mx-auto px-3 md:px-6 mt-14">
            {/* Rounds Heading */}
            <h2 className="text-center text-yellow-400 font-orbitron font-bold text-3xl md:text-4xl mb-12 gold-glow tracking-widest">
              ROUNDS
            </h2>

            <div className="space-y-10 flex flex-col items-center">
              {/* Round 1 */}
              <div className="w-full max-w-4xl">
                <div className="glass-panel rounded-2xl p-6 w-full">
                  <h4 className="text-center text-yellow-500 text-lg md:text-xl mb-4">
                    Round 1
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    <div className="topic-card">Brain Teasers</div>
                    <div className="topic-card">Puzzles</div>
                    <div className="topic-card">Riddles</div>
                    <div className="topic-card">Mind Games</div>
                    <div className="topic-card">Film Questions</div>
                    <div className="topic-card">Celebrity ID</div>
                    <div className="topic-card">General Knowledge</div>
                  </div>
                  <p className="text-center font-money-body text-white text-[1.05rem] md:text-lg leading-7">
                    Quick-fire questions and fun tasks to test your wit and
                    daring.
                  </p>
                </div>
              </div>

              {/* Round 2 */}
              <div className="w-full max-w-4xl">
                <div className="glass-panel rounded-2xl p-6 w-full">
                  <h4 className="text-center text-yellow-500 text-lg md:text-xl mb-4">
                    Round 2
                  </h4>
                  <div className="flex justify-center mb-8">
                    <img
                      src="https://raw.githubusercontent.com/madesh02104/Festx-Assets/main/monopoly.webp"
                      alt="Monopoly Board"
                      className="w-[100%] md:w-[80%] object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-center font-money-body text-white text-[1.05rem] md:text-lg leading-7">
                    Monopoly gameplay — buy, trade, and earn points to dominate
                    the board.
                  </p>
                </div>
              </div>

              {/* Round 3 */}
              <div className="w-full max-w-4xl">
                <div className="glass-panel rounded-2xl p-6 w-full">
                  <h4 className="text-center text-yellow-500 text-lg md:text-xl mb-4">
                    Round 3
                  </h4>
                  <div className="flex justify-center my-16">
                    <div className="dice-container">
                      <div className="spinning-dice">
                        <div className="dice-face front">?</div>
                        <div className="dice-face back">?</div>
                        <div className="dice-face right">?</div>
                        <div className="dice-face left">?</div>
                        <div className="dice-face top">?</div>
                        <div className="dice-face bottom">?</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-money-body text-white text-[1.05rem] md:text-lg leading-7">
                    Suspense round — the twist will be revealed only on the
                    event day 😱
                  </p>
                </div>
              </div>
            </div>
          </section>
          ``
          {/* Call to Action */}
          <div className="text-center flex items-center justify-center gap-6">
            <Link
              to="https://forms.gle/yCyYD9SeNe7CEGke8"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
              Register Now
            </Link>
            <Link
              to="https://youtu.be/CrIGkzze0Cw"
              target="_blank"
              className="treasure-btn px-6 py-2 text-lg my-4 mb-16"
            >
              Watch Trailer
            </Link>
          </div>
          {/* Coordinators Section */}
          <div className="flex justify-center mb-16">
            <div className="bg-black/60 backdrop-blur-sm border-2 border-yellow-400 rounded-2xl p-6 shadow-2xl md:w-96">
              <h3 className="text-lg font-bold text-yellow-400 mb-4 text-center font-nikkyou underline decoration-yellow-400 decoration-2 underline-offset-4">
                Event Coordinators
              </h3>
              {/* Mobile view (stacked) */}
              <div className="space-y-3 font-nikkyou lg:hidden">
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Hemanthraj S
                    </span>
                    <br />
                    <span className="text-yellow-400">9791071221</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-yellow-200 text-lg">
                    <span className="font-semibold text-yellow-300">
                      Hameem
                    </span>
                    <br />
                    <span className="text-yellow-400">6374776339</span>
                  </p>
                </div>
              </div>

              {/* Large screen view (inline) */}
              <div className="hidden lg:flex justify-center text-center gap-6 font-nikkyou text-yellow-200 text-lg">
                <p>
                  <span className="font-semibold text-yellow-300">
                    Hemanthraj S
                  </span>
                  <br />
                  <span className="text-yellow-400">9791071221</span>
                </p>
                <p>
                  <span className="font-semibold text-yellow-300">Hameem</span>
                  <br />
                  <span className="text-yellow-400">6374776339</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    </div>
  );
};

export default Lootopoly;
