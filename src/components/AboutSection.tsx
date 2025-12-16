import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Compass, Shield, Zap, Users, RefreshCcw } from 'lucide-react';

const values = [
  { icon: Shield, label: 'Transparency' },
  { icon: Users, label: 'Reliability' },
  { icon: Zap, label: 'Flexibility' },
  { icon: RefreshCcw, label: 'Dynamic' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Overview & History
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Five Decades of
              <span className="text-gradient-gold block">Transformative Investment</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 1969, Inventure Group is a global private investment firm with a legacy 
                spanning over five decades. With more than <span className="text-foreground font-medium">$20 billion in assets under management</span>, 
                we have built a reputation for pioneering Special Economic Zones, Freezones, Industrial 
                areas, and Logistics Hubs.
              </p>
              <p>
                As a diversified privately held conglomerate, we develop, manage, operate, and invest 
                across sectors including ports, airports, power, renewable energy, healthcare, 
                pharmaceuticals, technology, AI datacenters, fintech, real estate, and more.
              </p>
              <p>
                Our approach blends <span className="text-foreground font-medium">entrepreneurial agility with institutional discipline</span>, 
                allowing us to operate across diverse sectors and geographies with precision and impact.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{value.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Purpose Card */}
            <div className="bg-gradient-card p-8 lg:p-10 border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground">Our Purpose</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To Innovate a Sustainable Future for the Middle East, Africa, and Mediterranean Countries.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-card p-8 lg:p-10 border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building Opportunities and Capabilities Today, For a Better Tomorrow.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-card p-8 lg:p-10 border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                  <Compass className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Define the Culture, Explore Potential Growth Opportunities, Resources and Geographical 
                Location, to create Value for Countries by developing their Local Talent & Human Capital, 
                and Cities into Sustainable, Green, Smart, AI and Technologically Advanced Communities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
