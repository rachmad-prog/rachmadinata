import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Buka tab kosong secara langsung agar tidak diblokir oleh popup blocker browser
    const waWindow = window.open('', '_blank');

    try {
      // Kirim email secara otomatis di background menggunakan FormSubmit
      await fetch("https://formsubmit.co/ajax/rachmadmap@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message,
            _subject: `New Message from ${formState.name} on Portfolio`
        })
      });
      
      // Arahkan tab kosong tadi ke WhatsApp
      if (waWindow) {
        const waText = encodeURIComponent(`Hello, my name is ${formState.name}.\n\n${formState.message}`);
        waWindow.location.href = `https://wa.me/6285162701391?text=${waText}`;
      }
    } catch (error) {
      console.error(error);
      if (waWindow) waWindow.close();
      alert("Gagal mengirim pesan, silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-secondary-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm currently available for new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rachmadmap@gmail.com" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                        rachmadmap@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                      <a href="https://wa.me/6285162701391" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-accent transition-colors">
                        +62 851-6270-1391
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-medium">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="w-full h-48 rounded-2xl overflow-hidden bg-white/5 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.338881864662!2d106.81150077453647!3d-6.604743264563497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c50a4d6618cd%3A0x1c220570ac5580c4!2sDapoer%20Toeti%20%7C%20Catering%20Box%20%26%20Nasi%20Rumahan%20di%20Bogor!5e0!3m2!1sen!2sid!4v1784120757609!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(85%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
