import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511938023558"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group shadow-lg"
      style={{ background: "#25D366" }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      <MessageCircle size={20} className="text-white sm:hidden" />
      <MessageCircle size={22} className="text-white hidden sm:block" />
      <div className="absolute right-full mr-3 px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A3C6E] text-white/80 text-[11px] font-medium rounded-sm pointer-events-none shadow-lg hidden sm:block">
        Fale Conosco
      </div>
    </motion.a>
  );
}
