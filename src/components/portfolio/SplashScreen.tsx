import { useEffect, useState } from "react";
import { animate } from "animejs";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate each letter
    animate(".splash-letter", {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: (_el: Element, i: number) => 80 * i,
      duration: 600,
      ease: "outExpo",
    });

    // Animate the role subtitle
    animate(".splash-role", {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 900,
      duration: 500,
      ease: "outExpo",
    });

    // Animate the line
    animate(".splash-line", {
      scaleX: [0, 1],
      delay: 600,
      duration: 700,
      ease: "outExpo",
    });

    // Fade out the whole splash
    const timer = setTimeout(() => {
      animate(".splash-container", {
        opacity: [1, 0],
        scale: [1, 0.95],
        duration: 500,
        ease: "inOutQuad",
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  const name = "Farhan Mulla";

  return (
    <div className="splash-container fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary/40 splash-dot" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/30 splash-dot" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 rounded-full bg-primary/50 splash-dot" />
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 rounded-full bg-primary/40 splash-dot" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight flex overflow-hidden">
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="splash-letter inline-block opacity-0"
              style={{ minWidth: char === " " ? "0.3em" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Line */}
        <div className="splash-line h-px w-32 md:w-48 bg-primary mt-5 mb-4 origin-left" style={{ transform: "scaleX(0)" }} />

        {/* Role */}
        <p className="splash-role opacity-0 text-primary font-mono text-sm md:text-base tracking-widest uppercase">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
