import React from 'react';

const TreasureBackground = () => {
  // You can adjust the number of sparkles
  const sparkleCount = 50;

  const sparkles = Array.from({ length: sparkleCount }).map((_, index) => {
    const size = Math.random() * 5 + 2; // Sparkle size between 2px and 7px
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`, // Random horizontal position
      animationDuration: `${Math.random() * 3 + 2}s`, // Random duration between 2s and 5s
      animationDelay: `${Math.random() * 4}s`, // Random start delay up to 4s
    };
    return <div key={index} className="sparkle" style={style} />;
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-900 overflow-hidden">
      {sparkles}
    </div>
  );
};

export default TreasureBackground;