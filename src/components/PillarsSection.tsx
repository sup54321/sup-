import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Factory, Truck, Brain } from 'lucide-react';

const pillars = [
  {
    icon: Building2,
    code: 'IDD',
    title: 'Integrated Destinations Development',
    description: 'Creating world-class cities and multi-sector development zones in partnership with governments and sovereign wealth funds. Including residential, hospitality, healthcare, education districts, and business centers.',
    features: ['Smart Cities', 'Business Centers', 'Healthcare Cities', 'Education Hubs'],
  },
  {
    icon: Factory,
    code: 'IIP',
    title: 'Integrated Industrial Platforms',
    description: 'Strategic industrial corridors and free zones designed for manufacturing, processing, and export. Featuring state-of-the-art infrastructure and investment incentives to attract global players.',
    features: ['Free Zones', 'Manufacturing Hubs', 'Mining Operations', 'Processing Centers'],
  },
  {
    icon: Truck,
    code: 'ILH',
    title: 'Integrated Logistics Hubs',
    description: 'Port-centric logistics ecosystems including commercial ports, dry ports, warehousing complexes, and multimodal transport facilities connecting regional and global markets.',
    features: ['Commercial Ports', 'Dry Ports', 'Warehousing', 'Transport Networks'],
  },
  {
    icon: Brain,
    code: 'AI.DC',
    title: 'AI Knowledge Datacenters',
    description: 'Cutting-edge AI knowledge centers and crypto mining hubs powered by renewable energy. Driving digital transformation with high-capacity data facilities and innovation labs.',
    features: ['AI Centers', 'Data Centers', 'Crypto Mining', 'Tech Innovation'],
  },
];

export const PillarsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Strategic Pillars
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Four Pillars of <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our integrated approach creates self-sustaining ecosystems that transform 
            regional economies and attract foreign direct investment.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.code}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gradient-card border border-border/50 p-8 lg:p-10 
                         hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full 
                              group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Code Badge */}
              <div className="absolute top-6 right-6 text-xs tracking-widest text-primary/60 font-medium">
                {pillar.code}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center mb-6
                              group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                <pillar.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {pillar.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-sm
                               group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
