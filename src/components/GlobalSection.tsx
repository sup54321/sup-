import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, MapPin } from 'lucide-react';

const regions = [
  {
    name: 'Middle East & North Africa',
    countries: ['Egypt', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Lebanon', 'Syria', 'Jordan', 'Iraq', 'Morocco', 'Tunisia', 'Libya'],
    highlight: true,
  },
  {
    name: 'Europe',
    countries: ['France', 'UK', 'Switzerland', 'Poland', 'Romania', 'Montenegro', 'Georgia', 'Turkey', 'Greece', 'Cyprus'],
    highlight: false,
  },
  {
    name: 'Africa',
    countries: ['Ivory Coast', 'Sierra Leone', 'Ghana', 'Cameroon', 'Mali', 'Uganda', 'Ethiopia', 'Burkina Faso', 'Guinea Conakry'],
    highlight: false,
  },
  {
    name: 'Asia & Americas',
    countries: ['China', 'Hong Kong', 'USA'],
    highlight: false,
  },
];

export const GlobalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="global" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-primary" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Global Footprint
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Active in <span className="text-gradient-gold">33+ Countries</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our global reach enables us to navigate complex regulatory environments, 
              leverage local expertise, and deliver regionally tailored solutions across 
              four continents.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="font-serif text-4xl text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">Continents</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-primary mb-2">33+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-primary mb-2">$50B+</div>
                <div className="text-sm text-muted-foreground">Flagship Project Value</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-primary mb-2">5M+</div>
                <div className="text-sm text-muted-foreground">Projected Residents</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Regions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`p-6 border ${region.highlight ? 'border-primary/50 bg-primary/5' : 'border-border/50 bg-card/50'} 
                           transition-all duration-300 hover:border-primary/30`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className={`w-5 h-5 ${region.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <h3 className="font-serif text-lg text-foreground">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-sm"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
