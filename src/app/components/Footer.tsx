import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: "linear-gradient(180deg, #0A1628 0%, #000814 100%)" }}>
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6B35] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="mb-6">
              <div className="text-2xl tracking-tight" style={{ fontWeight: 700 }}>
                <span style={{ color: "white" }}>CNC</span>
                <span style={{ color: "#FF6B35" }}>Flex</span>
              </div>
            </div>
            <p
              className="mb-8"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
              }}
            >
              Há mais de 20 anos desenvolvendo soluções em usinagem de precisão.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF6B35] group"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <social.icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

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
