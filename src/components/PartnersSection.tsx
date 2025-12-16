import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Handshake, Building2, Globe } from 'lucide-react';

const partnerCategories = [
  {
    icon: Building2,
    title: 'Governments & Sovereign Funds',
    description: 'Strategic partnerships with national governments and sovereign wealth funds across 33+ countries.',
  },
  {
    icon: Handshake,
    title: 'Development Banks & Financial Institutions',
    description: 'Collaboration with multilateral agencies, export credit agencies, and commercial banks.',
  },
  {
    icon: Users,
    title: 'EPC Contractors & Operators',
    description: 'World-class partners in ports, airports, energy, and smart city development.',
  },
  {
    icon: Globe,
    title: 'Tech & Innovation Partners',
    description: 'Leading technology firms for digital infrastructure, AI, and datacenter solutions.',
  },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Strategic Alliance
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Powered by <span className="text-gradient-gold">Partnerships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our shareholders, investors, and strategic partners are the key to our success 
            in delivering complex, multi-sector projects worldwide.
          </p>
        </motion.div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 bg-card border border-border/50"
            >
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-border/50"
        >
          <p className="text-center text-muted-foreground text-sm mb-8">
            Partnered with industry leaders across 8 core divisions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['ABB', 'Mitsubishi', 'Trane', 'LG', 'Fujitec', 'York'].map((partner, index) => (
              <div
                key={partner}
                className="h-16 flex items-center justify-center bg-card border border-border/30 
                           text-muted-foreground/50 font-medium text-sm tracking-wider"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
