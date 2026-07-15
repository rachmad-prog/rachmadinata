import { motion } from "framer-motion";
import { LayoutTemplate, LayoutDashboard, Globe, Blocks, Database, BrainCircuit } from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description: "High-converting, visually stunning landing pages optimized for performance and SEO.",
    icon: LayoutTemplate,
  },
  {
    title: "SaaS Development",
    description: "End-to-end development of scalable Software as a Service products with multi-tenancy.",
    icon: Blocks,
  },
  {
    title: "Admin Dashboards",
    description: "Complex data visualization and management systems with role-based access control.",
    icon: LayoutDashboard,
  },
  {
    title: "Backend APIs",
    description: "Secure, scalable REST and GraphQL APIs using Node.js, Express, and PostgreSQL.",
    icon: Database,
  },
  {
    title: "AI Integration",
    description: "Integrating LLMs and AI services to automate and enhance business workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Web Apps",
    description: "Tailored web applications solving specific business problems from CRM to ERP systems.",
    icon: Globe,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative h-full glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-primary/50">
                  <service.icon className="text-3xl text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Discuss Project &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
