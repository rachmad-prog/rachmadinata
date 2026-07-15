import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary-bg/50 backdrop-blur-lg pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              Rachmadinata<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building fast, scalable, and modern web applications with a focus on premium UI/UX and clean code architecture.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/rachmad-prog" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rachmadinata-r/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rachmadmap@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">SaaS Applications</li>
              <li className="text-muted-foreground">API Integration</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Rachmadinata. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
