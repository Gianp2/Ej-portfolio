import { Project } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Edit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
  key?: string;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#121419] rounded-2xl border border-white/10 hover:border-white/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
      onClick={onSelect}
      id={`project-card-${project.id}`}
    >
      {/* Visual Header (Sketch vs Render Hover Toggle) */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0F1115]">
        {/* Sketch (Revealed on hover) */}
        <img
          src={project.sketchUrl}
          alt={`${project.title} Sketch`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Render (Visible by default, fades on hover) */}
        <div className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 opacity-100">
          <img
            src={project.renderUrl}
            alt={`${project.title} Render`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Hover Cue Badge */}
        <div className="absolute bottom-4 left-4 z-10 flex gap-2">
          <span className="flex items-center gap-1 bg-[#0F1115]/90 backdrop-blur-xs text-white text-[9px] font-mono font-medium px-2.5 py-1 rounded-md tracking-wider border border-white/10 group-hover:hidden transition-all">
            <Eye className="w-3 h-3" /> RENDER
          </span>
          <span className="hidden group-hover:flex items-center gap-1 bg-amber-500/90 backdrop-blur-xs text-white text-[9px] font-mono font-medium px-2.5 py-1 rounded-md tracking-wider transition-all animate-pulse">
            <Edit2 className="w-3 h-3" /> VER BOCETO
          </span>
        </div>

        {/* Year Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-[#0F1115]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-md">
            {project.year}
          </span>
        </div>
      </div>

      {/* Metadata Body */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase mb-2 block">
          {project.category}
        </span>
        
        <h3 className="font-display font-light text-lg text-white group-hover:text-amber-400 transition-colors mb-2 leading-tight tracking-wide">
          {project.title}
        </h3>

        <p className="text-white/60 text-xs line-clamp-2 mb-4 font-sans flex-grow leading-relaxed">
          {project.brief}
        </p>

        {/* CMF Preview Dots */}
        <div className="flex items-center gap-2 mb-4 border-t border-white/5 pt-3">
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">CMF:</span>
          <div className="flex gap-1.5">
            {project.cmf.map((material, idx) => (
              <div
                key={idx}
                className="w-3.5 h-3.5 rounded-full border border-white/15 shadow-2xs"
                style={{ backgroundColor: material.colorValue }}
                title={`${material.material} - ${material.colorName}`}
              />
            ))}
          </div>
        </div>

        {/* Tags & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex gap-1.5 flex-wrap max-w-[70%]">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-white/5 text-white/60 text-[9px] font-sans font-medium px-2 py-0.5 rounded-md border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-white/80 group-hover:text-amber-400 group-hover:translate-x-1 transition-all uppercase tracking-wider">
            Detalles <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
