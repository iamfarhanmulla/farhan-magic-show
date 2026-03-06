import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";
import { StarHeader } from "../../shared/star-header";

const displayedSkills = [
  "Software Engineer",
  "Full Stack Developer",
  "Blockchain Builder",
  "Systems Thinker",
];

const HeroSection = ({ splashDone }) => {
  const nameRef = useRef(null);

  useEffect(() => {
    if (!splashDone || !nameRef.current) return undefined;

    const split = splitText(nameRef.current, { words: false, chars: true });

    const animation = animate(split.chars, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: stagger(50),
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: false,
    });

    return () => {
      animation?.pause?.();
      split?.revert?.();
    };
  }, [splashDone]);

  return (
    <StarHeader>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"> */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-2xl sm:text-5xl md:text-6xl leading-tight mb-4 text-foreground flex items-center gap-4"
          >
            Hi There!
            <motion.span
              aria-hidden="true"
              animate={{ rotate: [0, 18, -8, 18, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </motion.p>

          <motion.h1
            ref={nameRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-muted-foreground mb-8 tracking-wide"
          >
            I'M{" "}
            <span className="text-primary font-semibold">
              FARHAN MULLA
            </span>
          </motion.h1>
          {/* <Typewriter backspace="word">Farhan Mulla.</Typewriter> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-6"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
          >
            Full Stack Developer with <span className="text-primary font-semibold">3 years</span> of experience
            building robust web applications with ASP.NET Core, React.js, and SQL Server.
            Passionate about clean architecture and scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </div>
        {/* </div> */}
      </section>
    </StarHeader>

  );
};

export default HeroSection;
