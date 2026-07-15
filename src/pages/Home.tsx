import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
