import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  {
    title: "Full Stack Web Applications",
    description:
      "Designed and developed end-to-end web applications using ASP.NET Core for backend APIs and React.js for dynamic frontends, serving real users in production.",
  },
  {
    title: "Database Architecture",
    description:
      "Built efficient data models with SQL Server, leveraging Entity Framework and Dapper for optimized queries and data access patterns.",
  },
  {
    title: "Secure Authentication Systems",
    description:
      "Implemented JWT-based authentication and authorization flows, ensuring secure access control across multi-role applications.",
  },
  {
    title: "Clean Architecture & Best Practices",
    description:
      "Applied Clean Architecture principles to maintain separation of concerns, testability, and long-term maintainability across projects.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="text-primary font-mono text-lg">03.</span>
          What I've Built
          <span className="hidden sm:block h-px bg-border flex-1 ml-4" />
        </motion.h2>

        <div className="space-y-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass rounded-xl p-6 border-l-2 border-l-primary hover:bg-secondary/50 transition-colors"
            >
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
