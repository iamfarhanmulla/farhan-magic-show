import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { animate, stagger } from "animejs";
const skills = [
    { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Entity Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
    { name: "Dapper", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original.svg" },
];
const SkillsSection = () => {
    const ref = useRef(null);
    const gridRef = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const hasAnimated = useRef(false);
    useEffect(() => {
        if (inView && gridRef.current && !hasAnimated.current) {
            hasAnimated.current = true;
            animate(".skill-card", {
                opacity: [0, 1],
                translateY: [40, 0],
                scale: [0.85, 1],
                delay: stagger(60, { from: "center" }),
                duration: 600,
                ease: "outExpo",
            });
            animate(".skill-icon", {
                rotate: ["-45deg", "0deg"],
                scale: [0, 1],
                delay: stagger(60, { from: "center", start: 200 }),
                duration: 800,
                ease: "outElastic(1, .6)",
            });
        }
    }, [inView]);
    return (<section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-2xl md:text-3xl font-bold mb-14 flex items-center gap-3">
          <span className="text-primary font-mono text-lg">02.</span>
          Skills & Technologies
          <span className="hidden sm:block h-px bg-border flex-1 ml-4"/>
        </motion.h2>

        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill) => (<div key={skill.name} className="skill-card opacity-0 glass rounded-xl p-4 md:p-5 flex flex-col items-center gap-3 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 group cursor-default">
              <img src={skill.icon} alt={skill.name} className="skill-icon w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300"/>
              <span className="text-muted-foreground text-[11px] md:text-xs text-center font-medium leading-tight group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>))}
        </div>
      </div>
    </section>);
};
export default SkillsSection;
