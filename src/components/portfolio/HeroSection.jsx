import { motion } from "framer-motion";
const HeroSection = () => {
    return (<section className="min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-primary font-mono text-sm md:text-base mb-4">
          Hi, my name is
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
          Farhan Mulla.
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
          I build things for the web.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          Full Stack Developer with <span className="text-primary font-semibold">3 years</span> of experience
          building robust web applications with ASP.NET Core, React.js, and SQL Server.
          Passionate about clean architecture and scalable solutions.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Get In Touch
          </a>
          <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
            View My Work
          </a>
        </motion.div>
      </div>
    </section>);
};
export default HeroSection;
