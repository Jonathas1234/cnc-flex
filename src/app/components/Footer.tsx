import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1a2b4a] to-[#000814]" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="text-3xl tracking-tight" style={{ fontWeight: 800 }}>
                <span style={{ color: "white" }}>CNC</span>
                <span style={{ 
                  background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Flex</span>
              </div>
            </div>
            <p
              className="mb-8"
              style={{
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.65)",
                lineHeight: 1.7,
              }}
            >
              Há mais de 20 anos desenvolvendo soluções em usinagem de precisão com tecnologia nacional.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl flex items-center justify-center group"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{ 
                    y: -4,
                    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
                    borderColor: "transparent",
                    boxShadow: "0 12px 32px rgba(255, 107, 53, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Links Rápidos */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Navegação
            </h3>
            <ul className="space-y-3">
              {["Início", "Produtos", "Serviços", "Sobre Nós", "Contato", "Blog", "Feiras e Eventos"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="transition-colors duration-300 hover:text-orange-400"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3 - Produtos */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Equipamentos
            </h3>
            <ul className="space-y-3">
              {["Alliance", "Artist 3D", "Joalheiro 4/5 Eixos", "Modelo 5D Pro", "Ver Todos"].map(
                (produto) => (
                  <li key={produto}>
                    <a
                      href="#produtos"
                      className="transition-colors duration-300 hover:text-orange-400"
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {produto}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div>
            <h3
              className="mb-6"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Fale Conosco
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} style={{ color: "#FF6B35", flexShrink: 0, marginTop: "2px" }} />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.5,
                  }}
                >
                  Av. Casa Verde, 3434-C<br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} style={{ color: "#FF6B35", flexShrink: 0 }} />
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                  (11) 3951-0270<br />
                  (11) 93802-3558
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} style={{ color: "#FF6B35", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>
                  cncflex@cncflex.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>
            © {currentYear} CNC Flex - Todos os direitos reservados
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-orange-400"
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-orange-400"
              style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
