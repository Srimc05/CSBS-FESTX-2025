import React, { useState, useEffect } from "react";

const TARGET_DATE = new Date("2025-10-27T00:00:00").getTime();

export function CountdownBanner({ inline = false }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (inline) return;
    const onScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop || 0;
      setShow(top < 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [inline]);

  if (!inline && !show) return null;

  if (inline) {
    return (
      <div className="mt-7 text-white font-fell-english text-center">
        <div className="text-lg md:text-xl">Join Our Heist in</div>
        <div className="mt-1 inline-flex items-baseline gap-3 bg-black/30 px-3 py-2 rounded-md">
          <span className="text-5xl md:text-7xl font-extrabold text-yellow-200">
            {timeLeft.days}
          </span>
          <span className="text-2xl md:text-4xl opacity-80">d</span>
          <span className="text-2xl md:text-4xl opacity-70">:</span>
          <span className="text-5xl md:text-7xl font-extrabold text-yellow-200">
            {timeLeft.hours}
          </span>
          <span className="text-2xl md:text-4xl opacity-80">h</span>
          <span className="text-2xl md:text-4xl opacity-70">:</span>
          <span className="text-5xl md:text-7xl font-extrabold text-yellow-200">
            {timeLeft.minutes}
          </span>
          <span className="text-2xl md:text-4xl opacity-80">m</span>
          <span className="text-2xl md:text-4xl opacity-70">:</span>
          <span className="text-5xl md:text-7xl font-extrabold text-yellow-200">
            {timeLeft.seconds}
          </span>
          <span className="text-2xl md:text-4xl opacity-80">s</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#ffd35a] via-[#ffbf2b] to-[#d89b16] text-[#1a1207] px-6 py-2 text-center text-sm font-bold z-[60] shadow-md">
      <span>Join Our Heist in</span>
      <span className="ml-2 bg-black/10 px-2 py-1 rounded-md">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </span>
    </div>
  );
}
