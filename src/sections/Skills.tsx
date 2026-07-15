import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiPrisma, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const frontendSkills = [
  { name: "HTML5", icon: FaHtml5, level: 95 },
  { name: "React & Next.js", icon: SiNextdotjs, level: 95 },
  { name: "TypeScript", icon: SiTypescript, level: 90 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 95 },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, level: 90 },
  { name: "Express.js", icon: SiExpress, level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
  { name: "Prisma ORM", icon: SiPrisma, level: 88 },
];

const tools = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscVscode },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of technologies I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaReact className="text-primary" /> Frontend
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <skill.icon className="text-muted-foreground group-hover:text-primary transition-colors" />
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaNodeJs className="text-success" /> Backend
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="flex items-center gap-2">
                      <skill.icon className="text-muted-foreground group-hover:text-success transition-colors" />
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-gradient-to-r from-secondary to-success rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-3xl md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6">Tools & Workflow</h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <tool.icon className="text-xl text-primary" />
                  <span className="font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
              <h4 className="font-bold mb-2">Clean Code Advocate</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I strongly believe in writing scalable, maintainable, and well-documented code using SOLID principles and Clean Architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
