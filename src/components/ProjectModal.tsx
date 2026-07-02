import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Sliders, ShieldCheck, Scale, Ruler } from 'lucide-react';
import SketchRenderSlider from './SketchRenderSlider';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto" id={`project-modal-${project.id}`}>
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-md"
        />

        {/* Modal content shell */}
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-[#121419] w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] lg:max-h-none border border-white/10 z-10"
          >
            {/* Header / Close action */}
            <div className="absolute top-6 right-6 z-30">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none shadow-md border border-white/10 cursor-pointer"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable grid wrapper */}
            <div className="overflow-y-auto max-h-[90vh] lg:max-h-[85vh] p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* LEFT SIDE: Visual Interactive Stage (Takes 7/12 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase">
                      Interactúa arrastrando el control deslizante central
                    </span>
                    <h2 className="font-display font-light text-2xl sm:text-3xl text-white tracking-wide mt-1">
                      {project.title}
                    </h2>
                  </div>

                  {/* Slider Component */}
                  <SketchRenderSlider
                    sketchUrl={project.sketchUrl}
                    renderUrl={project.renderUrl}
                    sketchCaption={project.sketchCaption}
                    renderCaption={project.renderCaption}
                    className="w-full border border-white/10 rounded-2xl overflow-hidden"
                  />
                  
                  {/* Quick stats panel */}
                  <div className="grid grid-cols-3 gap-4 bg-[#0F1115] p-4 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shadow-3xs">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-white/40 block uppercase">Año</span>
                        <span className="text-xs font-sans font-semibold text-white/90">{project.year}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shadow-3xs">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-white/40 block uppercase">Cliente</span>
                        <span className="text-xs font-sans font-semibold text-white/90 truncate block max-w-[100px]">{project.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shadow-3xs">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-white/40 block uppercase">Fase</span>
                        <span className="text-xs font-sans font-semibold text-white/90">C2 / CMF Completado</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Narrative and Specifications (Takes 5/12 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-8 justify-start text-white">
                  
                  {/* Design narrative section */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2">
                        01 / Concepto & Desafío
                      </h4>
                      <p className="text-xs font-sans text-white/70 leading-relaxed mt-3">
                        <strong className="text-white font-medium">El Encargo: </strong> {project.brief}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                      <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
                        <span className="text-[9px] font-mono font-bold text-amber-400 block uppercase mb-1">
                          El Problema
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-sans">
                          {project.problem}
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <span className="text-[9px] font-mono font-bold text-white/60 block uppercase mb-1">
                          La Solución
                        </span>
                        <p className="text-xs text-white/70 leading-relaxed font-sans">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CMF Spec Board */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                      02 / Especificaciones CMF (Color, Material, Finish)
                    </h4>
                    <div className="flex flex-col gap-3">
                      {project.cmf.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-[#0F1115] hover:bg-[#15181F] rounded-xl border border-white/5 transition-colors"
                        >
                          <div
                            className="w-8 h-8 rounded-lg shadow-sm border border-white/20 flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: item.colorValue }}
                          />
                          <div className="flex-grow">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-sans font-bold text-white/95">
                                {item.colorName}
                              </span>
                              <span className="text-[9px] font-mono text-white/40">
                                {item.colorValue}
                              </span>
                            </div>
                            <span className="text-xs font-sans text-white/60 block mt-0.5">
                              <span className="font-semibold text-white/80">Material:</span> {item.material}
                            </span>
                            <span className="text-[11px] font-sans text-white/50 block">
                              <span className="font-semibold text-white/70">Acabado:</span> {item.finish}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Physical Properties (Dimensions) */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                      03 / Parámetros Físicos
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10">
                        <div className="text-amber-400">
                          <Ruler className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-white/40 block uppercase leading-none">Dimensiones</span>
                          <span className="text-xs font-sans font-bold text-white/90 mt-1 block">
                            {project.dimensions.width} × {project.dimensions.height} × {project.dimensions.depth}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10">
                        <div className="text-amber-400">
                          <Scale className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-white/40 block uppercase leading-none">Peso Neto</span>
                          <span className="text-xs font-sans font-bold text-white/90 mt-1 block">
                            {project.dimensions.weight}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Engineering Features */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-4">
                      04 / Atributos Funcionales Clave
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs font-sans text-white/70 leading-relaxed">
                          <div className="text-emerald-400 bg-emerald-500/10 rounded-full p-0.5 mt-0.5 flex-shrink-0">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
