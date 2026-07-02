import { DesignerProfile } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { X, Briefcase, Award, PenTool, CheckCircle, Cpu } from 'lucide-react';

interface AboutSectionProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DesignerProfile;
}

export default function AboutSection({ isOpen, onClose, profile }: AboutSectionProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto" id="about-modal">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-md"
        />

        {/* Modal shell */}
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-[#121419] w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] lg:max-h-none border border-white/10 z-10"
          >
            {/* Close action */}
            <div className="absolute top-6 right-6 z-30">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none shadow-md border border-white/10 cursor-pointer"
                id="close-about-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable container */}
            <div className="overflow-y-auto max-h-[90vh] lg:max-h-[85vh] p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* LEFT COLUMN: Profile info, philosophy and Tools (Takes 5/12 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase">
                      Sobre el Diseñador
                    </span>
                    <h2 className="font-display font-light text-2xl sm:text-3xl text-white tracking-wide mt-1">
                      {profile.name}
                    </h2>
                    <span className="text-xs font-mono font-semibold text-white/40 block mt-1">
                      {profile.title}
                    </span>
                  </div>

                  <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed">
                    {profile.aboutText}
                  </p>

                  {/* Software tools bento box */}
                  <div className="bg-[#0F1115] p-6 rounded-2xl border border-white/5">
                    <h3 className="text-[10px] font-mono font-bold text-white/80 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-400" />
                      Herramientas y Software CAD
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.tools.map((tool) => (
                        <span
                          key={tool}
                          className="bg-white/5 text-white/90 text-[10px] font-mono font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-2xs hover:bg-white/10 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core philosophy quote */}
                  <div className="border-l-4 border-amber-500 pl-4 py-1 italic text-white/80 text-xs sm:text-sm font-sans">
                    "El gran diseño industrial no añade ruido; esculpe la utilidad esencial para crear objetos que envejecen con dignidad física."
                  </div>
                </div>

                {/* RIGHT COLUMN: Experience & Skills checklist (Takes 7/12 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                  
                  {/* Experience Timeline */}
                  <div>
                    <h3 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-6 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-amber-500" />
                      Trayectoria Profesional
                    </h3>
                    
                    <div className="flex flex-col gap-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                      {profile.experience.map((job, idx) => (
                        <div key={idx} className="flex gap-4 relative pl-8">
                          {/* Timeline node */}
                          <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full bg-amber-500 border-4 border-[#121419] ring-2 ring-amber-500/20 flex-shrink-0" />
                          
                          <div className="flex-grow text-white">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                              <h4 className="font-sans font-bold text-white/95 text-xs sm:text-sm">
                                {job.role}
                              </h4>
                              <span className="text-[9px] font-mono text-amber-400 bg-amber-500/5 px-2.5 py-0.5 rounded-full border border-amber-500/25 font-bold self-start uppercase tracking-wider">
                                {job.period}
                              </span>
                            </div>
                            
                            <span className="text-[11px] font-mono text-white/40 block mb-2 font-medium">
                              {job.company}
                            </span>
                            
                            <p className="text-xs text-white/60 leading-relaxed font-sans">
                              {job.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Checklist */}
                  <div>
                    <h3 className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      Habilidades e Ideación de Diseño
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {profile.skills.map((skill) => (
                        <div key={skill} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-xs font-sans text-white/80 font-medium leading-tight">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
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
