import { useMemo } from "react";

const StarBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 170 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 0.8}px`,
        opacity: 0.3 + Math.random() * 0.7,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 4}s`,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#1a1d49_0%,#08081f_40%,#050514_100%)]">
      <div className="absolute inset-0 star-drift-layer opacity-30" />
      <div className="absolute inset-0 star-drift-layer-reverse opacity-20" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
