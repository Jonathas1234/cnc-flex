import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a href="https://wa.me/5511938023558" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center group shadow-lg"
      style={{background:"#25D366"}}
      whileHover={{scale:1.08}} whileTap={{scale:0.95}} animate={{scale:[1,1.04,1]}} transition={{duration:2.5,repeat:Infinity}}>
      <MessageCircle size={22} className="text-white"/>
      <div className="absolute right-full mr-3 px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#0f1419]/60 text-[11px] font-medium border border-[#0f1419]/[0.06] rounded-sm pointer-events-none shadow-lg">Fale Conosco</div>
    </motion.a>
  );
}
