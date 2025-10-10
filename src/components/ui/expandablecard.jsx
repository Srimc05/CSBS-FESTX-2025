"use client";

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ExpandableCardDemo() {
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    const routeMap = {
      "code-heist": "/code-heist",
      gbu: "/gbu",
      "pitchers-gold": "/pitchers-gold",
      "stellar-quest": "/stellar-quest",
      unlockx: "/unlockx",
      "wolf-gambit": "/wolf-gambit",
      anonymous: "/anonymous",
      lootopoly: "/lootopoly",
      "the-last-zone": "/event9",
    };
    const route = routeMap[card.title];
    if (route) navigate(route);
  };

  const [opened, setOpened] = useState(new Set());
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetEl = entry.target;
          const idxAttr =
            targetEl && targetEl.getAttribute
              ? targetEl.getAttribute("data-index")
              : null;
          const idx = Number(idxAttr || -1);
          if (idx < 0) return;
          if (entry.isIntersecting) {
            setOpened((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          } else {
            setOpened((prev) => {
              if (!prev.has(idx)) return prev;
              const next = new Set(prev);
              next.delete(idx);
              return next;
            });
          }
        });
      },
      { threshold: [0.1], rootMargin: "0px" }
    );

    const snapshot = refs.current.slice();
    const raf = requestAnimationFrame(() => {
      snapshot.forEach((el) => el && observer.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      snapshot.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4">
      {(() => {
        const technical = cards
          .slice(0, 6)
          .map((card, i) => ({ card, index: i }));
        const nonTechnical = cards
          .slice(6)
          .map((card, i) => ({ card, index: i + 6 }));

        return (
          <>
            <h2 className="relative text-4xl font-semibold text-gray-200 mb-8 text-center font-fell-english">
              Technical Events
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 mb-8">
              {technical.map(({ card, index }) => (
                <li
                  key={card.title}
                  data-index={index}
                  ref={(el) => (refs.current[index] = el)}
                  className="relative h-[430px] sm:h-[500px] lg:h-[480px] perspective-1000"
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      opened.has(index) ? "rotate-y-180" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-black rounded-xl border-2 border-yellow-400 shadow-2xl" />
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-yellow-400 shadow-2xl overflow-hidden">
                      <img
                        src={card.src}
                        alt={card.title}
                        className="block w-full h-full object-cover sm:object-contain object-center"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="relative text-4xl font-semibold text-gray-200 mt-40 mb-8 text-center font-fell-english">
              Non Technical Events
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
              {nonTechnical.map(({ card, index }) => (
                <li
                  key={card.title}
                  data-index={index}
                  ref={(el) => (refs.current[index] = el)}
                  className="relative h-[430px] sm:h-[500px] lg:h-[480px] perspective-1000"
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                      opened.has(index) ? "rotate-y-180" : ""
                    }`}
                    onClick={() => handleCardClick(card)}
                  >
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-black rounded-xl border-2 border-yellow-400 shadow-2xl" />
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border-2 border-yellow-400 shadow-2xl overflow-hidden">
                      <img
                        src={card.src}
                        alt={card.title}
                        className="block w-full h-full object-cover sm:object-contain object-center"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <div className="relative max-w-md mx-auto">
                <div className="bg-black/70 backdrop-blur-md font-fell-english border border-yellow-400 text-white rounded-xl shadow-2xl p-6 hover:scale-105 transform transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                    General Instructions
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>SEC and SIT not allowed</li>
                    <li>One team should participate in one event only</li>
                    <li>Food and snacks will be provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        );
      })()}
    </div>
  );
}

const cards = [
  { title: "code-heist", src: "/code_heist.webp" },
  { title: "gbu", src: "/gbu-post.webp" },
  { title: "pitchers-gold", src: "/pitchers_gold.webp" },
  { title: "stellar-quest", src: "/stellar_quest.webp" },
  { title: "unlockx", src: "/unlockx-post.webp" },
  { title: "wolf-gambit", src: "/wolf_gambit.webp" },
  { title: "anonymous", src: "/anonymous.webp" },
  { title: "lootopoly", src: "/lootopoly.webp" },
  { title: "the-last-zone", src: "/the_last_zone.webp" },
];
