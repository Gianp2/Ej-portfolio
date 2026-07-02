import React from 'react';
import { motion } from 'motion/react';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export default function Header({ activeSection, setActiveSection, onOpenAbout, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'projects', label: 'Proyectos' },
    { id: 'process', label: 'Proceso de Diseño' },
    { id: 'about', label: 'Sobre Mí', action: onOpenAbout },
    { id: 'contact', label: 'Contacto', action: onOpenContact },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.action) {
      item.action();
    } else {
      setActiveSection(item.id);
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F1115]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" id="header-logo-btn">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-amber-600 group-hover:border-amber-600">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-light text-lg tracking-[0.2em] text-white block leading-none">
              GIANLUCA PASQUINELLI
            </span>
            <span className="font-sans text-[9px] tracking-[0.4em] text-white/40 uppercase font-medium mt-1 block">
              DISEÑO INDUSTRIAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isSectionActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`relative py-2 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer ${
                  isSectionActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isSectionActive && !item.action && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 border border-white/20 bg-transparent text-white px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-all cursor-pointer"
            id="nav-cta-contact"
          >
            Comenzar Proyecto
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/60 hover:text-white focus:outline-none"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-[#121419] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-xl md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="text-left py-2.5 text-sm uppercase tracking-wider font-medium text-white/80 hover:text-amber-500 transition-colors border-b border-white/5"
              id={`mobile-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white py-3 rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-colors mt-2"
            id="mobile-nav-cta"
          >
            Comenzar Proyecto
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </header>
  );
}
