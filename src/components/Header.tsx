import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Global', href: '#global' },
  { label: 'Projects', href: '#projects' },
  { label: 'Business Units', href: '#business-units' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elevated' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-sm bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl lg:text-2xl">I</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg lg:text-xl text-foreground tracking-wide">Inventure</span>
              <span className="text-primary font-serif text-lg lg:text-xl ml-1">Group</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 hover-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm font-medium 
                       hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-center font-medium"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
