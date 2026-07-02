import { ArrowRight, Compass, PencilRuler, ShieldAlert, Sparkles, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onOpenAbout: () => void;
}

export default function HeroSection({ onScrollToProjects, onOpenAbout }: HeroSectionProps) {
  return (
    <section className="relative bg-[#0F1115] border-b border-white/10 overflow-hidden py-16 sm:py-24 lg:py-32" id="hero-section">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Blueprint Circle */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-96 h-96 rounded-full border border-white/10 pointer-events-none hidden lg:block">
        <div className="absolute inset-4 rounded-full border border-dashed border-white/5" />
        <div className="absolute inset-16 rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Headline Texts */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-500/5 border border-amber-500/20 px-3.5 py-1.5 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider uppercase">
                Proceso Completo: Del Trazo al Producto
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6"
            >
              De la Idea a la Materia:<br />
              <span className="text-amber-400 font-normal relative inline-block">
                Diseño Físico
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-amber-500/25 rounded-full" />
              </span> con Sentido.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-white/60 font-sans max-w-xl mb-10 leading-relaxed"
            >
              Especializado en el diseño industrial de productos de consumo. Este espacio explora el puente entre el <strong className="text-white font-medium">boceto de concepto analógico</strong> y el <strong className="text-white font-medium">render de alta fidelidad</strong>, detallando decisiones de CMF, ergonomía física y factibilidad manufacturera.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={onScrollToProjects}
                className="flex items-center justify-center gap-2.5 bg-white text-black px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-white/90 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5 transition-all cursor-pointer"
                id="hero-cta-portfolio"
              >
                Ver Portafolio Activo
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenAbout}
                className="flex items-center justify-center gap-2 border border-white/20 bg-transparent text-white px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-white/5 hover:border-white/30 transition-all cursor-pointer"
                id="hero-cta-about"
              >
                Mi Filosofía de Diseño
              </button>
            </motion.div>

            {/* Technical stats bento */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 border-t border-white/10 pt-8 w-full max-w-lg"
            >
              <div>
                <span className="font-display font-light text-2xl sm:text-3xl text-white block leading-none mb-1">6+</span>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Años de Exp.</span>
              </div>
              <div className="border-l border-white/10 pl-6 sm:pl-8">
                <span className="font-display font-light text-2xl sm:text-3xl text-white block leading-none mb-1">30+</span>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Modelos 3D CAD</span>
              </div>
              <div className="border-l border-white/10 pl-6 sm:pl-8">
                <span className="font-display font-light text-2xl sm:text-3xl text-white block leading-none mb-1">100%</span>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest block">Foco Sostenible</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Visual Showcase Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#121419] rounded-3xl p-6 border border-white/10 shadow-2xl max-w-sm w-full relative"
            >
              {/* Card top branding */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Estudio de Caso</span>
                </div>
                <span className="font-mono text-[9px] text-white/40 font-bold">2026_01</span>
              </div>

              {/* Wireframe mockup element representing an industrial drawing */}
              <div className="aspect-square w-full rounded-2xl bg-[#0F1115] border border-white/10 flex flex-col justify-between p-6 overflow-hidden relative group shadow-inner">
                {/* Vector circular blueprints behind */}
                <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border border-dashed border-white flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full border border-white flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-dashed border-white" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <Layers className="w-6 h-6 text-amber-500" />
                  <span className="text-[9px] font-mono text-emerald-400 border border-emerald-400/40 px-2 py-0.5 rounded-md">
                    CAD COMPILADO
                  </span>
                </div>

                <div className="relative z-10 text-white">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-1">PRODUCTO DEMO</span>
                  <h4 className="font-display font-light text-base leading-snug tracking-wider">
                    Optimización ergonómica y espacial para hardware
                  </h4>
                </div>

                <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-gradient-to-tr from-amber-600/20 to-amber-400/5 rounded-full filter blur-xl pointer-events-none" />
              </div>

              {/* Specs checklist under the card */}
              <div className="mt-6 space-y-3.5 border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                    <PencilRuler className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-white/60 font-sans">
                    Geometría optimizada para inyección de plástico
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-white/60 font-sans">
                    Análisis de texturas táctiles y acabados mate
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
