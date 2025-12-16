import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

const projects = [
  {
    name: 'North West Gate Gargoub SEZ',
    location: 'Egypt',
    value: '$50B+',
    type: 'IDD',
    description: 'Egypt\'s largest FDI project - a world-class coastal city spanning 1684.2 sq km on the Mediterranean. Total Project Value exceeding €500 Billion, planned to host 5 Million residents within 10 years.',
    featured: true,
  },
  {
    name: 'Damascus Gate',
    location: 'Syria',
    value: '$4B',
    type: 'IDD',
    description: 'Landmark mixed-use community on historic Umayyad Square featuring luxury residences, five-star hotels, Damascus Healthcare City, Education City, Syrian Business & Financial Center, and AI Datacenter.',
    featured: true,
  },
  {
    name: 'Levant Gate Latakia',
    location: 'Syria',
    value: '$4B',
    type: 'IDD',
    description: 'Green sustainable coastal city on 1.5M sqm featuring touristic marina, cruise terminal, Formula City, Pixel Park, El Khail City, Surf City, and AI Knowledge & Datacenter.',
    featured: false,
  },
  {
    name: 'South West Gate',
    location: 'Sierra Leone',
    value: '$3B',
    type: 'IDD',
    description: 'Port-centric Special Economic Zone integrating business, lifestyle, tourism, finance, and infrastructure development.',
    featured: false,
  },
  {
    name: 'South East Gate',
    location: 'Ghana',
    value: '$3B',
    type: 'IDD',
    description: 'Regional logistics and energy hub with mixed-use developments integrating business, tourism, and infrastructure.',
    featured: false,
  },
  {
    name: 'EuroMed Gate',
    location: 'Greece',
    value: '$3B',
    type: 'IDD',
    description: 'Port-centric Special Economic Zone serving as a gateway between Europe and the Mediterranean.',
    featured: false,
  },
  {
    name: 'East West Gate',
    location: 'Montenegro',
    value: '$2B',
    type: 'IDD',
    description: 'Gateway between Europe and the Middle East with mixed-use developments integrating business, lifestyle, and tourism.',
    featured: false,
  },
  {
    name: 'Golden Triangle',
    location: 'Egypt',
    value: '$2B+',
    type: 'IIP',
    description: 'Strategic industrial corridor focusing on Mining & Minerals in the Red Sea Area.',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Flagship Projects
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Transforming <span className="text-gradient-gold">Regions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Multi-billion dollar developments creating integrated destinations 
            across strategic locations worldwide.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-gradient-card border border-border/50 p-8 lg:p-10
                         hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Value Badge */}
              <div className="absolute top-6 right-6">
                <span className="text-2xl lg:text-3xl font-serif text-primary">{project.value}</span>
              </div>

              {/* Type Badge */}
              <span className="inline-block px-3 py-1 text-xs tracking-wider bg-primary/10 text-primary mb-4">
                {project.type}
              </span>

              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{project.location}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group bg-card border border-border/50 p-6 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs tracking-wider text-primary">{project.type}</span>
                <span className="text-lg font-serif text-primary">{project.value}</span>
              </div>
              <h4 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="w-3 h-3" />
                <span>{project.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Additional projects: <span className="text-foreground">Gulf Gate (KSA)</span> • 
            <span className="text-foreground"> East West Gate (Montenegro)</span> • 
            <span className="text-foreground"> Libya Gate</span> • 
            <span className="text-foreground"> Khartoum Gate (Sudan)</span> • 
            <span className="text-foreground"> Port Sudan Gate</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
