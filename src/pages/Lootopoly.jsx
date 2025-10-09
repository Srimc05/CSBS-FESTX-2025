import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Lootopoly = () => {
  useEffect(() => {
    document.body.classList.add("hide-centered-nav");
    return () => document.body.classList.remove("hide-centered-nav");
  }, []);

  const emitterRef = useRef(null);
  useEffect(() => {
    const host = emitterRef.current;
    if (!host) return;
    const coinParams = [];

    const computeParams = (el) => {
      const styles = getComputedStyle(el);
      const dxStr = styles.getPropertyValue("--dx").trim();
      let dxPx = 0;
      if (dxStr.endsWith("vw"))
        dxPx = (parseFloat(dxStr) / 100) * window.innerWidth;
      else if (dxStr.endsWith("px")) dxPx = parseFloat(dxStr);
      else dxPx = parseFloat(dxStr) || 0;
      const apexStr = styles.getPropertyValue("--apex").trim();
      const apex = apexStr.endsWith("vh")
        ? (parseFloat(apexStr) / 100) * window.innerHeight
        : parseFloat(apexStr) || -160;
      const rot =
        parseFloat(styles.getPropertyValue("--rot")) || Math.random() * 360;
      const sc = parseFloat(styles.getPropertyValue("--sc")) || 1;
      const durStr = styles.getPropertyValue("--dur");
      const dur = parseFloat(durStr) || 2000;
      const delay = parseFloat(el.style.animationDelay) || 0;
      const startTime = performance.now() + delay;
      return { el, dxPx, apex, rot, sc, dur, startTime };
    };

    const spawnWave = () => {
      const count = 16;
      for (let i = 0; i < count; i++) {
        const span = document.createElement("span");
        span.className = "coin--logo";
        const dx = Math.random() * 70 - 35 + "vw";
        const apex = -(18 + Math.random() * 18) + "vh";
        const rot = Math.floor(Math.random() * 360) + "deg";
        const sc = 0.8 + Math.random() * 0.6;
        const dur = 2600 + Math.random() * 1800 + "ms"; // slower coins
        const delay = i * 60 + "ms"; // slower internal staggering
        span.style.cssText = `left:0; top:0; --dx:${dx}; --apex:${apex}; --rot:${rot}; --sc:${sc}; --dur:${dur}; animation-delay:${delay}; opacity:0;`;
        host.appendChild(span);
        coinParams.push(computeParams(span));
      }
    };

    // initial wave and repeating
    spawnWave();
    const interval = setInterval(spawnWave, 2500); // lower frequency

    let raf = 0;
    const tick = (now) => {
      let active = false;
      for (let i = coinParams.length - 1; i >= 0; i--) {
        const c = coinParams[i];
        const t = (now - c.startTime) / c.dur;
        if (t < 0) {
          active = true;
          continue;
        }
        if (t > 1) {
          c.el.remove();
          coinParams.splice(i, 1);
          continue;
        }
        active = true;
        const u = t * (2 - t);
        const x = c.dxPx * u;
        const ascendEnd = 0.35;
        let y;
        if (t <= ascendEnd) {
          const v = t / ascendEnd;
          y = 0 + (c.apex - 0) * v;
        } else {
          const v = (t - ascendEnd) / (1 - ascendEnd);
          const fallTarget = window.innerHeight * 0.95;
          y = c.apex + (fallTarget - c.apex) * v;
        }
        const rot = c.rot + 540 * t;
        c.el.style.opacity = t > 0.93 ? String((1 - t) / 0.07) : "1";
        c.el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rot}deg) scale(${c.sc})`;
      }
      if (active) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
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
          className="relative overflow-visible min-h-screen -mt-28 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="relative text-center z-30">
            <div className="relative inline-block">
              <img
                src="/lootopoly_logo.webp"
                alt="Loot-O-Poly"
                className="mx-auto w-64 md:w-80 logo-glow"
              />
              {/* Erupting coins from the logo */}
              <div
                ref={emitterRef}
                className="pointer-events-none absolute left-1/2 top-0 w-[1px] h-[1px]"
                style={{ zIndex: -50 }}
              >
                {Array.from({ length: 22 }).map((_, i) => {
                  // Spread coins across ~70% of the page width from center
                  const dx = Math.random() * 70 - 35 + "vw";
                  // Apex height in viewport units for consistency
                  const apex = -(18 + Math.random() * 18) + "vh";
                  const rot = Math.floor(Math.random() * 360);
                  const sc = 0.8 + Math.random() * 0.6;
                  const dur = 1800 + Math.random() * 1400;
                  const delay = i * 45;
                  return (
                    <span
                      key={i}
                      className="coin--logo"
                      style={{
                        left: "0px",
                        top: "0px",
                        "--dx": dx,
                        "--apex": apex,
                        "--rot": rot + "deg",
                        "--sc": sc,
                        "--dur": dur + "ms",
                        animationDelay: delay + "ms",
                      }}
                    />
                  );
                })}
              </div>
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
                  Here, questions will confuse you , tasks will embarrass you ,
                  and Monopoly will ruin friendships faster than “who ate my
                  biryani” fights in the hostel.
                </p>
                <p className="text-gray-300">
                  You might end up rich, you might end up broke, or you might
                  end up dancing on the stage because a Chance card told you to.
                  And don’t even ask about the final twist… we promise it’s
                  crazier than your engineering timetable.
                </p>
                <p className="text-gray-300">
                  So buckle up , bring your humor , and get ready to loot,
                  laugh, and lose your dignity in style. LOOT-O-POLY – where the
                  only guarantee is laughter bankruptcy!
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
                    src="/monopoly.webp"
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
                <div className="flex justify-center mb-3">
                  <div className="mystery-card relative w-[100%] md:w-[80%] object-contain rounded-lg h-48 md:h-72 mb-8">
                    <div className="mystery-question absolute inset-0 flex items-center justify-center">
                      ?
                    </div>
                  </div>
                </div>
                <p className="text-center font-money-body text-white text-[1.05rem] md:text-lg leading-7">
                  Suspense round — the twist will be revealed only on the event
                  day 😱
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
                    Hemanthraj S
                  </span>
                  <br />
                  <span className="text-yellow-400">9791071221</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-yellow-200 text-lg">
                  <span className="font-semibold text-yellow-300">Hameem</span>
                  <br />
                  <span className="text-yellow-400">6374776339</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lootopoly;
