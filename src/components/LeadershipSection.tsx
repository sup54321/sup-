import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-card border border-border/50 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%),
                                    linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
                                    linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%),
                                    linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)`,
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                }} />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 bg-gradient-to-t from-background via-background/80 to-transparent">
                <span className="text-primary text-xs tracking-[0.2em] uppercase mb-2">Chairman & CEO</span>
                <h3 className="font-serif text-3xl lg:text-4xl text-foreground mb-2">Karim Nakhle</h3>
                <p className="text-muted-foreground text-sm">Inventure Group</p>
              </div>

              {/* Decorative Frame */}
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Visionary <span className="text-gradient-gold">Leadership</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-8">
              <p>
                Mr. Karim Nakhle is the Chairman & CEO of Inventure Group, a serial entrepreneur 
                and investor with a passion for building economies and developing countries through 
                infrastructure, ports, and digital e-government initiatives.
              </p>
              <p>
                He is responsible for directing all aspects of the acquisition, financing, and 
                management of the company's diverse portfolio spanning investment banking, hospitality, 
                retail brands, media, technology, and the medical sector.
              </p>
              <p>
                Mr. Nakhle serves as Board Member and Advisor to several Blue-Chip companies and 
                financial institutions, working with governments across the Middle East, Africa, 
                and CIS regions on economic affairs, PPP projects, privatization, and infrastructure development.
              </p>
            </div>

            {/* Roles */}
            <div className="space-y-3 mb-8 pt-6 border-t border-border/50">
              <h4 className="text-sm font-medium text-foreground mb-4">Key Positions</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="text-muted-foreground">• Secretary General, Egyptian Lebanese African Union</div>
                <div className="text-muted-foreground">• Director, Egyptian European Business Council</div>
                <div className="text-muted-foreground">• President, Turkish-Egyptian Investment Board</div>
                <div className="text-muted-foreground">• Director, Chinese African Business Council</div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium 
                           hover:bg-primary/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-border flex items-center justify-center 
                           hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
