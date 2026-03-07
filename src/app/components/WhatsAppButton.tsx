import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5511938023558"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center group"
      style={{
        background: "#25D366",
        boxShadow: "0px 8px 24px rgba(37, 211, 102, 0.4)",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <MessageCircle size={28} style={{ color: "white" }} />
      
      {/* Tooltip */}
      <div
        className="absolute right-full mr-3 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "#0A1628",
          color: "white",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Fale Conosco
      </div>
    </motion.a>
  );
}
