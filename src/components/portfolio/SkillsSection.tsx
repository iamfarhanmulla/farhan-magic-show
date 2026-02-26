import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend",
    skills: ["ASP.NET Core", "C#", "SQL Server", "REST APIs", "Entity Framework", "Dapper"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "JWT Authentication", "Clean Architecture", "Agile", "CI/CD"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="text-primary font-mono text-lg">02.</span>
          Skills & Technologies
          <span className="hidden sm:block h-px bg-border flex-1 ml-4" />
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-primary font-mono text-sm mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="text-primary text-xs">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
