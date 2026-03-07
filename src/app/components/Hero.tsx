import { Clock, Users, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text */}
          <div className="text-white">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="text-sm">✓ Há mais de 20 anos no mercado</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Máquinas CNC de{" "}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#FFB380] bg-clip-text text-transparent">
                Alta Precisão
              </span>
              {" "}para Joalheria
            </h1>

            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Equipamentos 100% nacionais com tecnologia de 5 eixos simultâneos.
              Do protótipo 3D à produção final com precisão milimétrica.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#produtos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Conhecer Equipamentos
              </a>
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Falar com Especialista
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Máquina CNC"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Clock, number: "20+", text: "Anos de Experiência" },
            { icon: Zap, number: "5 Eixos", text: "Precisão Simultânea" },
            { icon: Users, number: "1000+", text: "Clientes Atendidos" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Icon className="w-8 h-8 text-[#FF6B35] mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
