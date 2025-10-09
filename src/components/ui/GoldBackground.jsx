import React from 'react';

const GoldBackground = () => {
  return (
    <div className="pirate-ai-background">
      {/* Mystical AI orbs - Reduced and better spaced */}
      <div className="ai-orbs">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`ai-orb orb-${i + 1}`}
            style={{
              '--delay': `${i * 2}s`,
              '--duration': `${18 + (i % 2) * 6}s`,
              '--size': `${35 + i * 15}px`,
              left: `${15 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      {/* Pirate treasure coins - Reduced and better spaced */}
      <div className="treasure-coins">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`treasure-coin coin-${i + 1}`}
            style={{
              '--delay': `${i * 1.2}s`,
              '--duration': `${12 + (i % 3) * 3}s`,
              '--size': `${10 + (i % 3) * 4}px`,
              '--rotation': `${i * 60}deg`,
              left: `${20 + (i % 4) * 20}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Mystical sparkles - Reduced and better spaced */}
      <div className="mystical-sparkles">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`sparkle sparkle-${i + 1}`}
            style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${8 + (i % 3) * 2}s`,
              '--size': `${3 + (i % 2) * 2}px`,
              left: `${10 + (i % 6) * 15}%`,
              top: `${10 + Math.floor(i / 6) * 40}%`,
            }}
          />
        ))}
      </div>

      {/* Floating question marks - Reduced and better spaced */}
      <div className="question-marks">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`question-mark qm-${i + 1}`}
            style={{
              '--delay': `${i * 2.5}s`,
              '--duration': `${20 + (i % 2) * 5}s`,
              '--size': `${18 + i * 4}px`,
              left: `${25 + i * 15}%`,
              top: `${30 + (i % 2) * 25}%`,
            }}
          >
            ?
          </div>
        ))}
      </div>

      {/* Floating X marks */}
      <div className="x-marks">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`x-mark xm-${i + 1}`}
            style={{
              '--delay': `${i * 1.8}s`,
              '--duration': `${22 + (i % 3) * 4}s`,
              '--size': `${16 + i * 3}px`,
              left: `${15 + (i % 3) * 28}%`,
              top: `${25 + Math.floor(i / 3) * 35}%`,
            }}
          >
            ✕
          </div>
        ))}
      </div>

      {/* Circuit board patterns */}
      <div className="circuit-patterns">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`circuit-pattern circuit-${i + 1}`}
            style={{
              '--delay': `${i * 1.5}s`,
              '--duration': `${20 + (i % 3) * 5}s`,
              '--size': `${100 + (i % 2) * 50}px`,
              left: `${i % 2 === 0 ? 0 : 85}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Neon glow orbs */}
      <div className="neon-orbs">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`neon-orb orb-${i + 1}`}
            style={{
              '--delay': `${i * 2}s`,
              '--duration': `${15 + (i % 3) * 3}s`,
              '--size': `${30 + (i % 2) * 20}px`,
              left: `${15 + (i % 3) * 25}%`,
              top: `${10 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      {/* Among Us crewmates */}
      <div className="crewmates">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`crewmate crewmate-${i + 1}`}
            style={{
              '--delay': `${i * 3}s`,
              '--duration': `${25 + (i % 2) * 5}s`,
              '--size': `${20 + (i % 2) * 10}px`,
              left: `${10 + (i % 2) * 80}%`,
              top: `${15 + Math.floor(i / 2) * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Reflective surface */}
      <div className="reflective-surface" />

      {/* Gradient overlays */}
      <div className="digital-gradient-overlay" />
      <div className="cyber-radial-overlay" />
      <div className="data-veil" />
    </div>
  );
};

export default GoldBackground;
