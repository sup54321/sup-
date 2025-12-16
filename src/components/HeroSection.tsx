import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '56+', label: 'Years of Legacy' },
  { value: '$20B+', label: 'Assets Under Management' },
  { value: '33+', label: 'Countries' },
  { value: '4', label: 'Strategic Pillars' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-primary/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
              Est. 1969 • Global Investment Firm
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8"
          >
            <span className="text-foreground">Building</span>
            <br />
            <span className="text-gradient-gold">Tomorrow's</span>
            <br />
            <span className="text-foreground">Economies</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Pioneering Special Economic Zones, Industrial Platforms, Logistics Hubs, 
            and AI-Driven Data Centers across the Middle East, Africa, and Mediterranean.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide 
                         hover:bg-primary/90 transition-all duration-300 shadow-gold"
            >
              Explore Our Projects
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide
                         hover:border-primary hover:text-primary transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-border/50"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
