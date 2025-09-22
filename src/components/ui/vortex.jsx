import { cn } from "../../lib/utils";


import React, { useEffect, useRef, useMemo } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

export const Vortex = (props) => {
  
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameId = useRef();

  const particleCount = props.particleCount || 500; // reduced for perf
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;

  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;

  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";

  let tick = 0;
  const noise3D = useMemo(() => createNoise3D(), []);
  let particleProps = new Float32Array(particlePropsLength);
  let center = [0, 0];

  // Math helpers
  const TAU = 2 * Math.PI;
  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  // Particle system setup
  const setup = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    resize(canvas);
    initParticles();
    draw(canvas, ctx);
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x = rand(canvas.width);
    let y = center[1] + randRange(rangeY);
    let vx = 0,
      vy = 0,
      life = 0;
    let ttl = baseTTL + rand(rangeTTL);
    let speed = baseSpeed + rand(rangeSpeed);
    let radius = baseRadius + rand(rangeRadius);
    let hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const draw = (canvas, ctx) => {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);

    animationFrameId.current = requestAnimationFrame(() => draw(canvas, ctx));
  };

  const drawParticles = (ctx) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i, ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x = particleProps[i];
    let y = particleProps[i + 1];
    let n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    let vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
    let vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
    let life = particleProps[i + 4];
    let ttl = particleProps[i + 5];
    let speed = particleProps[i + 6];
    let x2 = x + vx * speed;
    let y2 = y + vy * speed;
    let radius = particleProps[i + 7];
    let hue = particleProps[i + 8];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
    life++;

    particleProps.set([x2, y2, vx, vy, life], i);

    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height || life > ttl) {
      initParticle(i);
    }
  };

  const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const resize = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center = [canvas.width * 0.5, canvas.height * 0.5];
  };

  const renderGlow = (canvas, ctx) => {
    ctx.save();
    ctx.filter = "blur(6px) brightness(180%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  useEffect(() => {
    setup();
    window.addEventListener("resize", () => resize(canvasRef.current));

    return () => {
      window.removeEventListener("resize", () => resize(canvasRef.current));
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      {/* Foreground content */}
      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  );
};
