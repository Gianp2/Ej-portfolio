import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Mail, Award, CheckCircle, Cpu, Compass, Layers, Github, Linkedin, Clipboard } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { projects, designerProfile } from './data/projects';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  
  // Filtering & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const categories = ['Todos', 'Hardware de Consumo', 'Electrodomésticos', 'Sustentable'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'Todos' || 
                            project.category === selectedCategory || 
                            (selectedCategory === 'Sustentable' && project.tags.includes('Sustentable'));

    return matchesSearch && matchesCategory;
  });

  // Track scrolling to update active header nav item
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const processSection = document.getElementById('process');
      const scrollPos = window.scrollY + 120;

      if (processSection && scrollPos >= processSection.offsetTop) {
        setActiveSection('process');
      } else if (projectsSection && scrollPos >= projectsSection.offsetTop) {
        setActiveSection('projects');
      } else {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('gianpasquinelli24@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E0E0E0] font-sans antialiased flex flex-col selection:bg-amber-500/25 selection:text-amber-200">
      
      {/* Universal Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Hero Showcase Block */}
      <HeroSection
        onScrollToProjects={handleScrollToProjects}
        onOpenAbout={() => setAboutOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* PROJECTS SHOWCASE SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-6" id="projects">
          {/* Section title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase">
                Casos de Estudio Seleccionados
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-wide mt-1.5">
                Portafolio de Productos
              </h2>
            </div>

            {/* Category selection pill controls */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-white text-black shadow-lg shadow-white/5'
                      : 'bg-[#121419] text-white/60 hover:text-white border border-white/10'
                  }`}
                  id={`filter-category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar filter bar */}
          <div className="relative mb-10 max-w-md">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Buscar por tag, material o palabra clave..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121419] border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl pl-11 pr-4 py-3.5 text-xs text-white outline-none transition-colors placeholder-white/30"
              id="search-projects-input"
            />
          </div>

          {/* Grid Layout of Cards */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-[#121419] rounded-2xl border border-dashed border-white/10"
              >
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">No se encontraron proyectos</p>
                <p className="text-xs text-white/60 max-w-xs mx-auto">Prueba buscando otra palabra clave o cambiando el filtro de categoría.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* INDUSTRIAL DESIGN PROCESS PIPELINE SECTION */}
        <section className="bg-[#0A0C0F] text-white py-24 border-t border-white/10" id="process">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase">
                Metodología Tridimensional
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-white tracking-wide mt-1.5">
                El Proceso de Diseño Industrial
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-sans mt-3.5 leading-relaxed">
                Cada proyecto sigue una rigurosa ruta de desarrollo desde el planteamiento ergonómico inicial hasta la validación de materiales listos para inyección o mecanizado.
              </p>
            </div>

            {/* Pipeline Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector lines behind on desktop */}
              <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-white/10 pointer-events-none z-0" />

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative z-10 group" id="process-step-1">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-amber-500 flex items-center justify-center shadow-lg group-hover:border-amber-500/50 group-hover:bg-white/10 transition-all duration-300 mb-6">
                  <Compass className="w-8 h-8" />
                </div>
                <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">Paso 01</span>
                <h3 className="font-display font-light text-base text-white mb-2 tracking-wide">Investigación</h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-xs">
                  Análisis antropométrico de usuarios, estudios de agarre físico y definición de tolerancias ergonómicas clave.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative z-10 group" id="process-step-2">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-amber-500 flex items-center justify-center shadow-lg group-hover:border-amber-500/50 group-hover:bg-white/10 transition-all duration-300 mb-6">
                  <Layers className="w-8 h-8" />
                </div>
                <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">Paso 02</span>
                <h3 className="font-display font-light text-base text-white mb-2 tracking-wide">Bocetado Rápido</h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-xs">
                  Ideación analógica a lápiz y marcador digital, explorando siluetas, simetrías y despieces iniciales de componentes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative z-10 group" id="process-step-3">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-amber-500 flex items-center justify-center shadow-lg group-hover:border-amber-500/50 group-hover:bg-white/10 transition-all duration-300 mb-6">
                  <Cpu className="w-8 h-8" />
                </div>
                <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">Paso 03</span>
                <h3 className="font-display font-light text-base text-white mb-2 tracking-wide">CAD de Ingeniería</h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-xs">
                  Modelado sólido paramétrico de alta precisión para fabricar moldes, ensamble mecánico 3D y análisis de espesores.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center relative z-10 group" id="process-step-4">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-amber-500 flex items-center justify-center shadow-lg group-hover:border-amber-500/50 group-hover:bg-white/10 transition-all duration-300 mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <span className="font-mono text-[9px] text-amber-500 font-bold uppercase tracking-widest block mb-1">Paso 04</span>
                <h3 className="font-display font-light text-base text-white mb-2 tracking-wide">Renderizado & CMF</h3>
                <p className="text-xs text-white/60 leading-relaxed font-sans max-w-xs">
                  Afinación de Color, Material y Acabado (CMF). Iluminación física fotorrealista para validar texturas y reflejos comerciales.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER & BRANDING */}
      <footer className="bg-[#0A0C0F] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Branding col */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <span className="font-display font-light text-base tracking-[0.2em] text-white uppercase">
                  Gianluca Pasquinelli
                </span>
              </div>
              <p className="text-xs font-sans text-white/60 max-w-sm leading-relaxed">
                Diseño industrial de vanguardia que eleva el hardware de consumo mediante la interacción impecable de texturas, ergonomía estructural y materiales circulares.
              </p>
            </div>

            {/* Direct contact and clipboard */}
            <div className="md:col-span-4 flex flex-col items-start md:border-l md:border-white/10 md:pl-10">
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block mb-3">Contacto Directo</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 bg-[#121419] border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold text-white/95 transition-all cursor-pointer shadow-3xs"
                id="copy-email-btn"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                gianpasquinelli24@gmail.com
                <Clipboard className={`w-3.5 h-3.5 ml-1 transition-colors ${copiedEmail ? 'text-emerald-400' : 'text-white/40'}`} />
              </button>
              {copiedEmail && (
                <span className="text-[10px] font-sans text-emerald-400 font-bold block mt-1.5">
                  ¡Copiado al portapapeles!
                </span>
              )}
            </div>

            {/* Social credentials */}
            <div className="md:col-span-3 flex justify-start md:justify-end gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5"
                id="footer-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center text-white/60 hover:text-white transition-all bg-white/5"
                id="footer-social-github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-white/10">
            <span className="text-[10px] font-sans text-white/40 font-medium">
              © {new Date().getFullYear()} Gianluca Pasquinelli. Todos los derechos reservados.
            </span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Estilo y Estructura por Gianluca Pasquinelli ID
            </span>
          </div>
        </div>
      </footer>

      {/* SECTORAL MODALS STATE MACHINES */}

      {/* Project Details Modal with Slider inside */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* About Drawer Modal */}
      <AboutSection
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        profile={designerProfile}
      />

      {/* Contact Inquiry Modal */}
      <ContactSection
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </div>
  );
}
