import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const EXPERIENCES = [
  {
    date: "2026",
    role: "Front-End Developer (Personal Project)",
    company: "Website Road Run Rental",
    desc: "Road Run Rental is a modern front-end vehicle rental web application built using ReactJS, Tailwind CSS, and JavaScript. This project aims to simulate a seamless, user-centric vehicle browsing and booking system.",
    type: "project",
    links: {
      github: "https://github.com/rachmad-prog/reactjs-tailwindcss-road-run-rental",
      live: "https://reactjs-tailwindcss-road-run-rental.vercel.app/",
    },
  },
  {
    date: "2026",
    role: "Front-End Developer (Personal Project)",
    company: "Website Tour & Travel Zone",
    desc: "Tour & Travel Zone is a modern front-end web application project for a travel agency, built using ReactJS, Tailwind CSS, and JavaScript. This project aims to simulate a dynamic, user-oriented destination exploration and browsing system.",
    type: "project",
    links: {
      github: "https://github.com/rachmad-prog/reactjs-tailwindcss-travel-zone",
      live: "https://reactjs-tailwindcss-travel-zone.vercel.app/",
    },
  },
  {
    date: "2026",
    role: "Front-End Developer (Personal Project)",
    company: "Website Restaurant",
    desc: "This project is a modern, responsive restaurant web application engineered using ReactJS, Tailwind CSS, and JavaScript. Designed with a user-centric approach, the platform simulates an immersive digital dining experience, featuring interactive food menus and a seamless online booking system.",
    type: "project",
    links: {
      github: "https://github.com/rachmad-prog/reactjs-tailwindcss-restaurant",
      live: "https://reactjs-tailwindcss-restaurant.vercel.app/",
    },
  },
  {
    date: "2024",
    role: "Front-End (HTML5, CSS3, & Javascript)",
    company: "Optik Kayumanis",
    desc: "Optik Kayumanis is a trusted eye care center dedicated to providing the best vision solutions for you and your family. We combine accurate eye examinations, friendly customer service, and a high-quality selection of lenses and frames from leading brands. Focusing on comfort and style, we are here to help you see the world more clearly and confidently.",
    type: "project",
    links: {
      github: "https://github.com/rachmad-prog/reactjs-tailwindcss-optikkayumanis",
      live: "https://reactjs-tailwindcss-optikkayumanis.vercel.app/",
    },
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional experience and projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((item, i) => {
              const Icon = item.type === "project" ? Code : Briefcase;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-background border-4 border-primary z-10 md:-translate-x-1/2 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Icon size={20} />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                    <div className="glass-card p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-primary text-sm font-medium mb-4">
                        {item.date}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.role}</h3>
                      <h4 className="text-lg text-muted-foreground font-medium mb-4">{item.company}</h4>
                      <p className="text-white/70 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      
                      {item.links && (
                        <div className={`flex items-center gap-4 ${i % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}`}>
                          {item.links.github && (
                            <a href={item.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-primary transition-colors">
                              <FaGithub size={16} /> Source Code
                            </a>
                          )}
                          {item.links.live && (
                            <a href={item.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-accent transition-colors">
                              <FaExternalLinkAlt size={16} /> Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
