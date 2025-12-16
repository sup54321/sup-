import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Investment Pillars', href: '#pillars' },
  { label: 'Global Presence', href: '#global' },
  { label: 'Flagship Projects', href: '#projects' },
  { label: 'Business Units', href: '#business-units' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

const sectors = [
  'Real Estate Development',
  'Investment Banking',
  'Technology & Media',
  'Healthcare & Medical',
  'Ports & Logistics',
  'Energy & Power',
];

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-background border-t border-border/50" ref={ref}>
      {/* Contact CTA Section */}
      <div className="py-20 lg:py-24 border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Let's Build the <span className="text-gradient-gold">Future Together</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you're a government seeking development partners, an investor exploring 
              opportunities, or a business looking to expand, we're here to create value together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@inventuregroup.com"
                className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium
                           hover:bg-primary/90 transition-colors shadow-gold"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-8 py-4 border border-border text-foreground font-medium
                           hover:border-primary hover:text-primary transition-colors"
              >
                Download Brochure
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-xl">I</span>
                </div>
                <div>
                  <span className="font-serif text-lg text-foreground">Inventure</span>
                  <span className="text-primary font-serif text-lg ml-1">Group</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A global private investment firm with over 56 years of legacy, pioneering 
                Special Economic Zones and integrated developments worldwide.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center 
                             hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center 
                             hover:border-primary hover:text-primary transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm hover-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h4 className="font-serif text-foreground mb-6">Sectors</h4>
              <ul className="space-y-3">
                {sectors.map((sector) => (
                  <li key={sector}>
                    <span className="text-muted-foreground text-sm">{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif text-foreground mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Global Headquarters<br />
                    Dubai, UAE
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contact@inventuregroup.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    contact@inventuregroup.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+971585801952" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +971 58 580 1952
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Inventure Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
