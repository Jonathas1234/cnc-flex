import { Check, Play } from "lucide-react";
import { useState } from "react";

export function Tecnologia() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    "Visualização 3D antes da produção",
    "Precisão de 0.01mm",
    "5 eixos simultâneos",
    "Software CAD/CAM incluído",
    "Biblioteca de designs pré-programados",
    "Suporte técnico especializado",
  ];

  return (
    <section
      id="servicos"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)",
      }}
    >
      {/* Circuit Pattern Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(255, 107, 53, 0.2)",
                color: "#FF8C42",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              NOSSA TECNOLOGIA
            </div>

            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              Do Protótipo 3D à Peça Final
            </h2>

            <p
              className="mb-10"
              style={{
                fontSize: "18px",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.6,
              }}
            >
              Nossos equipamentos possuem até cinco eixos simultâneos de fresagem e sexto eixo
              para usinagem interna de anéis. Permite trabalho preciso mesmo em peças de pequeno
              porte, com visualização digital do produto em 3D sem necessidade de criação do
              protótipo físico.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#27AE60" }}
                  >
                    <Check size={14} style={{ color: "white" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.9)",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src="https://images.unsplash.com/photo-1742971366169-6efb57949d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5lJTIwcHJlY2lzaW9uJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzI3MjcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Máquina CNC em funcionamento"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(10, 22, 40, 0.4)" }}
                >
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center transition-transform duration-300 hover:scale-110"
                    style={{ boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)" }}
                  >
                    <Play size={32} style={{ color: "#FF6B35", marginLeft: "4px" }} />
                  </button>
                </div>
              )}
            </div>

            {/* Decorative shadow */}
            <div
              className="absolute -inset-4 rounded-3xl -z-10 blur-2xl"
              style={{ background: "rgba(255, 107, 53, 0.2)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
