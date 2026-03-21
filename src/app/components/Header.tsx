import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-4">
      <motion.header 
        className="max-w-7xl mx-auto rounded-2xl transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)' 
            : '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.6)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="h-20 flex items-center justify-between px-6">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span style={{ color: "#0A1628", fontWeight: 800 }}>CNC</span>
            <span style={{ 
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 800
            }}>Flex</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Produtos", href: "#produtos" },
              { label: "Serviços", href: "#servicos" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative px-4 py-2 text-[15px] font-medium text-[#2C3E50] hover:text-[#FF6B35] transition-colors duration-200 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </motion.a>
            ))}          
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://wa.me/5511938023558"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-6 py-3 rounded-xl text-white text-[15px] font-semibold transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,107,53,0.3)] hover:scale-105 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -2 }}
            >
              <span className="relative z-10">Solicitar Orçamento</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C42] to-[#FFB380] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              style={{ color: "#2C3E50" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden border-t mt-4"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.05)',
              borderRadius: '0 0 16px 16px',
              marginTop: 0,
              paddingTop: '16px'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col p-4 gap-1">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Produtos", href: "#produtos" },
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre", href: "#sobre" },
                { label: "Contato", href: "#contato" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-3 text-[15px] font-medium text-[#2C3E50] hover:text-[#FF6B35] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511938023558"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 rounded-xl text-white text-center text-[15px] font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                }}
              >
                Solicitar Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
}
