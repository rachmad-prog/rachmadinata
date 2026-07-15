import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "../components/ui/Button";

const projects = [
  {
    title: "Clean Wash",
    category: "Laundry Management",
    description: "A complete management system for laundry businesses featuring point-of-sale, order tracking, and customer management.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    github: "#",
    demo: "https://clean-wash-pink.vercel.app/",
  },
  {
    title: "Restaurant Bara",
    category: "Restaurant Website",
    description: "An elegant, high-performance website for a premium restaurant with digital menus and table reservation features.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "https://restaurant-bara.vercel.app/",
  },
  {
    title: "Optik Kayumanis",
    category: "E-Commerce",
    description: "A modern storefront for an optical shop, complete with product catalog, search filtering, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Redux", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    demo: "https://optik-kayumanis-frontend.vercel.app/",
  },
  {
    title: "Klinik Sehat",
    category: "Healthcare SaaS",
    description: "A comprehensive clinic management platform for booking appointments, managing patient records, and doctor schedules.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://klinik-sehat-puce.vercel.app/",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work, showcasing robust architecture, clean code, and premium user experiences.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex whitespace-nowrap">
            View All Projects &rarr;
          </Button>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-sm text-white/80 px-3 py-1 bg-white/5 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-6">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                    <FaGithub size={20} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Projects &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
