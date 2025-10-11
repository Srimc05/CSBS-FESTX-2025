import React, { useRef, useEffect } from "react";
import "./GBUbackground.css";

// Enhanced canvas particle background with simple physics + mouse interaction
const GBUBackground = ({ particleCount = 120, hue = 40 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pointer = useRef({ x: -9999, y: -9999, down: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fireColors = [
      `hsl(${hue}, 100%, 55%)`,
      `hsl(${hue + 20}, 100%, 50%)`,
      `hsl(${hue - 10}, 100%, 45%)`,
      `#FF6347`,
      `#FFB74D`,
    ];

    // layered particle groups for depth
    const layers = [0.3, 0.6, 1.0];
    const particles = [];

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createParticle(layer) {
      const speed = rand(0.15, 0.8) * layer;
      const size = rand(1, 4) * (1 / layer);
      return {
        x: Math.random() * width,
        y: Math.random() * height + height * 0.1,
        vx: (Math.random() - 0.5) * speed,
        vy: -Math.abs(rand(0.05, 0.6) * layer),
        size,
        baseSize: size,
        hue: fireColors[Math.floor(Math.random() * fireColors.length)],
        life: rand(12, 28),
        age: rand(0, 28),
        layer,
      };
    }

    layers.forEach((l) => {
      const count = Math.round(
        particleCount * (l / layers.reduce((a, b) => a + b))
      );
      for (let i = 0; i < count; i++) particles.push(createParticle(l));
    });

    // handle resize
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // pointer events for interaction
    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = e.clientX - rect.left;
      pointer.current.y = e.clientY - rect.top;
    };
    const onPointerDown = () => (pointer.current.down = true);
    const onPointerUp = () => {
      pointer.current.down = false;
      pointer.current.x = -9999;
      pointer.current.y = -9999;
    };
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);

    // touch support
    const onTouch = (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        pointer.current.x = t.clientX;
        pointer.current.y = t.clientY;
      }
    };
    window.addEventListener("touchmove", onTouch, { passive: true });

    function render(dt) {
      ctx.clearRect(0, 0, width, height);

      // subtle background gradient
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "rgba(20,8,0,0.0)");
      g.addColorStop(0.4, "rgba(30,12,2,0.08)");
      g.addColorStop(1, "rgba(6,2,1,0.15)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        // aging and reset
        p.age += dt * 0.002;
        if (p.age > p.life) {
          Object.assign(p, createParticle(p.layer));
          p.y = height + Math.random() * 30;
        }

        // wind and drift
        p.vx += Math.sin((p.y + p.x) * 0.002) * 0.001 * p.layer;
        p.vy += -0.0005 * p.layer; // gentle rise

        // pointer repulse/attract
        const dx = pointer.current.x - p.x;
        const dy = pointer.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        if (dist < 120 && pointer.current.x > -9999) {
          const force =
            (1 - dist / 120) * 0.06 * (pointer.current.down ? -1.5 : -0.85);
          p.vx += (dx / dist) * force * (1 / p.layer);
          p.vy += (dy / dist) * force * (1 / p.layer);
        }

        // integrate
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;

        // subtle size/pulse
        const pulse = Math.sin((p.age / p.life) * Math.PI * 2) * 0.35 + 0.8;
        const drawSize = Math.max(0.3, p.size * pulse);

        // glow effect
        ctx.beginPath();
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          drawSize * 6
        );
        grad.addColorStop(0, p.hue);
        grad.addColorStop(0.2, p.hue + "33");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(
          p.x - drawSize * 6,
          p.y - drawSize * 6,
          drawSize * 12,
          drawSize * 12
        );

        // core
        ctx.beginPath();
        ctx.fillStyle = p.hue;
        ctx.globalCompositeOperation = "lighter";
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      });
    }

    let last = performance.now();
    function frame(t) {
      const dt = t - last;
      last = t;
      render(dt);
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(rafRef.current);
    };
  }, [particleCount, hue]);

  return (
    <div
      className="gabu-bg-root fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <canvas ref={canvasRef} className="gabu-canvas" />

      {/* keep the original sparkle elements as a low-cost visual fallback for non-canvas contexts */}
      <div className="gold-nebula" />
    </div>
  );
};

export default GBUBackground;
