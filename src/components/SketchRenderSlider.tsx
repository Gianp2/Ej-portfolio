import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Edit3 } from 'lucide-react';

interface SketchRenderSliderProps {
  sketchUrl: string;
  renderUrl: string;
  sketchCaption?: string;
  renderCaption?: string;
  className?: string;
}

export default function SketchRenderSlider({
  sketchUrl,
  renderUrl,
  sketchCaption,
  renderCaption,
  className = '',
}: SketchRenderSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  return (
    <div className={`flex flex-col ${className}`} id="sketch-render-slider">
      {/* Interaction Stage */}
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#0F1115] border border-white/10 shadow-lg select-none cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Sketch Image (Background Base) */}
        <img
          src={sketchUrl}
          alt="Conceptual Sketch"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* Render Image (Foreground overlay with clip-path) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={renderUrl}
            alt="Final Render"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Labels Overlay */}
        <div className="absolute top-4 left-4 flex gap-2 pointer-events-none z-10">
          <span className="flex items-center gap-1.5 bg-[#0F1115]/90 backdrop-blur-xs border border-white/10 text-[9px] sm:text-xs font-mono font-medium text-white/90 px-3 py-1.5 rounded-full shadow-xs">
            <Edit3 className="w-3.5 h-3.5 text-amber-500" />
            BOCETO CONCEPTUAL
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 pointer-events-none z-10">
          <span className="flex items-center gap-1.5 bg-[#121419]/90 backdrop-blur-xs border border-white/15 text-[9px] sm:text-xs font-mono font-medium text-white px-3 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            RENDER FINAL
          </span>
        </div>

        {/* Drag Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-amber-500 cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular handle grip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg border-2 border-[#121419] select-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-4 4 4 4m8 0l4-4-4-4"
              />
            </svg>
          </div>
          {/* Subtle drag prompt on center bottom */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white font-mono text-[9px] px-2 py-0.5 rounded-sm whitespace-nowrap opacity-60 tracking-widest uppercase">
            Deslizar
          </span>
        </div>
      </div>

      {/* Caption display */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-white/60 border-t border-white/10 pt-3">
        {sketchCaption && (
          <div>
            <span className="font-mono font-semibold text-white/80 block uppercase mb-0.5">Idea / Trazo:</span>
            <p>{sketchCaption}</p>
          </div>
        )}
        {renderCaption && (
          <div className="border-l border-white/10 md:pl-4">
            <span className="font-mono font-semibold text-white/80 block uppercase mb-0.5">Materialización / CMF:</span>
            <p>{renderCaption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
