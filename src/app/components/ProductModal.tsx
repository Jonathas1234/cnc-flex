import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    specs: string[];
    fullDescription: string;
    technicalSpecs: string[];
  };
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              <div className="grid lg:grid-cols-2 gap-0 min-h-full">
                {/* Image Side */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 p-8 lg:p-12 flex items-center justify-center">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>

                {/* Info Side */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <div>
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block px-4 py-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-sm font-bold mb-4"
                    >
                      EQUIPAMENTO PROFISSIONAL
                    </motion.div>

                    <motion.h2
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4"
                    >
                      {product.name}
                    </motion.h2>

                    <motion.p
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-gray-600 mb-8"
                    >
                      {product.description}
                    </motion.p>

                    <motion.p
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      className="text-base text-gray-700 leading-relaxed mb-8"
                    >
                      {product.fullDescription}
                    </motion.p>

                    {/* Technical Specs */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-8"
                    >
                      <h3 className="text-xl font-bold text-[#0A1628] mb-4">
                        Especificações Técnicas:
                      </h3>
                      <div className="space-y-3">
                        {product.technicalSpecs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl"
                          >
                            <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="mt-auto flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href={`https://wa.me/5511938023558?text=${encodeURIComponent(`Olá! Gostaria de mais informações sobre a máquina ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-8 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-xl font-semibold text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                    >
                      Solicitar Orçamento via WhatsApp
                    </a>
                    <button
                      onClick={onClose}
                      className="sm:flex-none px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Fechar
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
