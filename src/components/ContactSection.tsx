import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquare, Briefcase, Mail } from 'lucide-react';

interface ContactSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSection({ isOpen, onClose }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Hardware de Consumo',
    timeline: '1-3 meses',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        // Reset state
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          category: 'Hardware de Consumo',
          timeline: '1-3 meses',
          message: '',
        });
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto" id="contact-modal">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F1115]/95 backdrop-blur-md"
        />

        {/* Modal content wrapper */}
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-[#121419] w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 z-10 p-6 sm:p-8 lg:p-10"
          >
            {/* Close button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors focus:outline-none border border-white/10 cursor-pointer"
                id="close-contact-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-white">
              {/* Header */}
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-500 tracking-widest uppercase">
                  Colaboraciones & Consultorías
                </span>
                <h2 className="font-display font-light text-2xl sm:text-3xl text-white tracking-wide mt-1">
                  Iniciar un Encargo
                </h2>
                <p className="text-xs font-sans text-white/60 mt-2">
                  Cuéntame un poco sobre tu idea de hardware o producto. Te responderé en menos de 48 horas con una propuesta de proceso de bocetado y pre-CAD.
                </p>
              </div>

              {/* Form State machine */}
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shadow-inner mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-xs font-sans text-white/60 max-w-xs">
                    Gracias por ponerte en contacto. Gianluca revisará tus requerimientos CMF y de diseño técnico en breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1.5">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Ej. Sofía Valenzuela"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0F1115] hover:bg-[#15181F] focus:bg-[#0F1115] text-xs font-sans border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3.5 transition-all text-white outline-none"
                        id="contact-name-input"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1.5">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0F1115] hover:bg-[#15181F] focus:bg-[#0F1115] text-xs font-sans border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3.5 transition-all text-white outline-none"
                        id="contact-email-input"
                      />
                    </div>
                  </div>

                  {/* Two columns: Category & Timeline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1.5">
                        Categoría
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-[#0F1115] hover:bg-[#15181F] focus:bg-[#0F1115] text-xs font-sans border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-3 py-3.5 transition-all text-white outline-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                        id="contact-category-select"
                      >
                        <option className="bg-[#121419]">Hardware de Consumo</option>
                        <option className="bg-[#121419]">Electrodomésticos</option>
                        <option className="bg-[#121419]">Mobiliario / Lifestyle</option>
                        <option className="bg-[#121419]">Otro Concepto</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1.5">
                        Plazo Estimado
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-[#0F1115] hover:bg-[#15181F] focus:bg-[#0F1115] text-xs font-sans border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-3 py-3.5 transition-all text-white outline-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                        id="contact-timeline-select"
                      >
                        <option className="bg-[#121419]">1-3 meses</option>
                        <option className="bg-[#121419]">3-6 meses</option>
                        <option className="bg-[#121419]">Inmediato (Urgente)</option>
                        <option className="bg-[#121419]">Flexible / Sin definir</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1.5">
                      Mensaje / Requerimientos de Diseño
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe la idea, las metas de materiales o CMF, y cualquier boceto técnico previo..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0F1115] hover:bg-[#15181F] focus:bg-[#0F1115] text-xs font-sans border border-white/10 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3.5 transition-all text-white outline-none resize-none"
                      id="contact-message-input"
                    />
                  </div>

                  {/* Action button */}
                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 bg-white text-black py-4 rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-white/90 hover:shadow-lg transition-all cursor-pointer"
                    id="submit-contact-form"
                  >
                    Enviar Requerimientos
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
