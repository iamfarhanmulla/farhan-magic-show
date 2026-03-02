import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="hidden sm:block h-px bg-border flex-1 ml-4" />
          </h2>

          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Full Stack Developer who enjoys building reliable, high-performance web applications.
              My journey started with a curiosity for how things work on the internet, and over the past
              3 years I've had the privilege of working across the full technology stack.
            </p>
            <p>
              My main focus is on building scalable backend systems with{" "}
              <span className="text-primary">ASP.NET Core</span> and{" "}
              <span className="text-primary">C#</span>, paired with modern frontend experiences using{" "}
              <span className="text-primary">React.js</span>. I'm passionate about clean architecture,
              writing maintainable code, and creating seamless user experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              developer communities, or diving deeper into system design and software architecture patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
