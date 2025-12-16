import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Partner With Us to
              <span className="text-gradient-gold block">Build Tomorrow</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a government seeking development partnerships, an investor looking for 
              opportunities, or a corporation exploring strategic alliances, Inventure Group is ready 
              to collaborate on transformative projects.
            </p>

            {/* Quick Links */}
            <div className="space-y-4 mb-10">
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>Explore Our Flagship Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('business-units')}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>View Our Business Units</span>
              </button>
              <button 
                onClick={() => scrollToSection('global')}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                <span>Our Global Presence</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                  <a href="mailto:info@inventuregroup.com" className="text-foreground hover:text-primary transition-colors">
                    info@inventuregroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                  <p className="text-foreground">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Partnership Types */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                title: 'Governments & Sovereign Funds',
                description: 'Strategic partnerships for national development projects, SEZs, and infrastructure initiatives.',
              },
              {
                title: 'Institutional Investors',
                description: 'Investment opportunities across our diversified portfolio of real estate, energy, and technology ventures.',
              },
              {
                title: 'EPC Contractors & Operators',
                description: 'Collaboration on ports, airports, energy projects, and smart city developments.',
              },
              {
                title: 'Tech & Innovation Partners',
                description: 'Joint ventures in AI datacenters, fintech, digital infrastructure, and smart solutions.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group bg-gradient-card border border-border/50 p-6 
                           hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
