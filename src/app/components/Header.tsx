import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span style={{ color: "#0A1628" }}>CNC</span>
            <span style={{ color: "#FF6B35" }}>Flex</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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
                }}
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#2C3E50",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#FF6B35"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#2C3E50"}
              >
                {item.label}
              </a>
            ))}          
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5511938023558"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
                color: "white",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Solicitar Orçamento
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              style={{ color: "#2C3E50" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 gap-2">
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
                style={{
                  padding: "12px 16px",
                  fontSize: "15px",
                  color: "#2C3E50",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
