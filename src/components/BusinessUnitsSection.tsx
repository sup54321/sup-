import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, 
  Fuel, 
  Stethoscope, 
  Anchor, 
  Tv, 
  Cpu, 
  GraduationCap,
  Sparkles
} from 'lucide-react';

const businessUnits = [
  {
    icon: Briefcase,
    name: 'Inventure Capital',
    tagline: 'Investment Banking & Advisory',
    description: 'Founded in 2008 by former KPMG Advisory Directors, one of the most awarded investment banking, strategy, and consulting firms in the Middle East & Africa with 31 international awards.',
    services: ['Corporate Finance', 'Financial Advisory', 'Strategy Consulting', 'Private Funds'],
  },
  {
    icon: Fuel,
    name: 'Inventure Energies',
    tagline: 'Power & Renewable Energy',
    description: 'Active for nearly 20 years in the petroleum industry, providing turnkey services in Solar Plants, Renewable Energy, Wind, and Oil & Gas sector.',
    services: ['Solar & Wind Energy', 'Oil & Gas Operations', 'Petrol Stations (MyWay)', 'EV Charging'],
  },
  {
    icon: Stethoscope,
    name: 'IIG Investments',
    tagline: 'Healthcare & Insurance',
    description: 'In partnership with HDH, Saudi Binladin Group, PIF, and ISTIDAMAH, transforming insurance, reinsurance, and healthcare through innovative solutions.',
    services: ['Insurance & Reinsurance', 'Insurtech & Fintech', 'Healthcare Distribution', 'Medical Tourism'],
  },
  {
    icon: Anchor,
    name: 'InterPorts',
    tagline: 'Port & Industrial Zone Solutions',
    description: 'Solution-centric team providing services in designing, developing and operating sea and inland ports, transshipment terminals, and free industrial zones.',
    services: ['Port Planning & Engineering', 'Freezone Development', 'Logistics Operations', 'Dredging & Reclamation'],
  },
  {
    icon: Tv,
    name: 'Inventure Media Group',
    tagline: 'Media & Communications',
    description: 'Leading Media Group in Middle East & Africa with 140+ digital publications & channels, including Publirizk & M&C Saatchi Network.',
    services: ['Digital Publications', 'Talent Management', 'Media Intelligence', 'Influencer Network'],
  },
  {
    icon: Cpu,
    name: 'Inventure Digital',
    tagline: 'Technology & AI Solutions',
    description: 'Partnered with international suppliers for IT, E-Government, Cyber Security, Digital Infrastructure, Smart City and AI Operations.',
    services: ['AI Knowledge Centers', 'Datacenters', 'Fintech & Payment', 'Gaming & Esports'],
  },
  {
    icon: GraduationCap,
    name: 'Inventure Education',
    tagline: 'Academies & Technical Colleges',
    description: 'Pioneering a network of Academies and Technical Colleges, driving sustainable human and economic development through ESG principles.',
    services: ['Technical Colleges', 'Online Programs', 'Career Training', 'International Certifications'],
  },
  {
    icon: Sparkles,
    name: 'Elite Fashion Group',
    tagline: 'Luxury Retail & Lifestyle',
    description: 'OTTO Mare - First Luxury Department Store dedicated to Seaside and Beach Luxury Concept Store appealing to Class A target audience.',
    services: ['Luxury Fashion', 'Beauty & Accessories', 'Lifestyle Brands', 'Beach Concept Stores'],
  },
];

export const BusinessUnitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="business-units" className="py-24 lg:py-32 bg-secondary relative">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Group Companies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Strategic <span className="text-gradient-gold">Business Units</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each unit operates with its own leadership, investment strategy, and operational 
            framework, allowing for focused execution and success.
          </p>
        </motion.div>

        {/* Business Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessUnits.map((unit, index) => (
            <motion.div
              key={unit.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="group bg-gradient-card border border-border/50 p-6 
                         hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-4
                              group-hover:bg-primary group-hover:shadow-gold transition-all duration-300">
                <unit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {unit.name}
              </h3>
              <p className="text-xs text-primary mb-3">{unit.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {unit.description}
              </p>

              {/* Services */}
              <div className="flex flex-wrap gap-1.5">
                {unit.services.slice(0, 3).map((service) => (
                  <span
                    key={service}
                    className="px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded-sm"
                  >
                    {service}
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
