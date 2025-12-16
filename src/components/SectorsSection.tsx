import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building, 
  Banknote, 
  Cpu, 
  Zap, 
  Heart, 
  GraduationCap, 
  Hotel, 
  Shirt,
  Radio,
  Anchor,
  Gem,
  Pickaxe
} from 'lucide-react';

const sectors = [
  { icon: Building, name: 'Real Estate Development', description: 'Residential, commercial, hospitality & mixed-use' },
  { icon: Banknote, name: 'Investment Banking', description: 'Advisory, asset management & capital markets' },
  { icon: Cpu, name: 'Technology & Media', description: 'AI, fintech, telecom, e-sports & digital' },
  { icon: Zap, name: 'Power & Energy', description: 'Renewable energy, oil & gas infrastructure' },
  { icon: Heart, name: 'Healthcare & Medical', description: 'Hospitals, clinics & medical tourism' },
  { icon: GraduationCap, name: 'Education', description: 'Academies, universities & technical colleges' },
  { icon: Hotel, name: 'Tourism & Hospitality', description: 'Hotels, resorts & lifestyle destinations' },
  { icon: Shirt, name: 'Fashion & Retail', description: 'Luxury brands & e-commerce platforms' },
  { icon: Radio, name: 'Media & Communications', description: 'Advertising, digital media & broadcasting' },
  { icon: Anchor, name: 'Ports & Logistics', description: 'Commercial ports, airports & logistics hubs' },
  { icon: Gem, name: 'Insurance & Reinsurance', description: 'Insurance brokerage, TPA & insurtech' },
  { icon: Pickaxe, name: 'Mining & Commodities', description: 'Minerals, multi-commodities & trading' },
];

export const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sectors" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Investment Verticals
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Diversified <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our integrated development philosophy spans across diverse sectors, 
            creating synergies that amplify value and impact.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group bg-card border border-border/50 p-6 hover:border-primary/50 
                         hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0
                                group-hover:bg-primary transition-colors">
                  <sector.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-serif text-base text-foreground mb-1 group-hover:text-primary transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
