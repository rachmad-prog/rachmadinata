import { motion } from "framer-motion";
import { Code, Users, Award, Briefcase } from "lucide-react";


const stats = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Completed Projects", value: "30+", icon: Code },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Awards Won", value: "4", icon: Award },
];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I am a passionate Full Stack Developer with a strong design sensibility. 
            I specialize in bridging the gap between elegant design and robust technical architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative rounded-3xl overflow-hidden glass-card p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="object-cover w-full h-full rounded-2xl relative z-10 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in software development started with a curiosity about how things work on the web. 
              Over the years, I've transformed that curiosity into a career, building scalable applications for startups and enterprise clients.
              I thrive on challenges that require both creative problem-solving and technical expertise.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4 hover-tilt"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
