import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Fique Por Dentro das Novidades
          </h2>
          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.6,
            }}
          >
            Receba dicas, tutoriais e lançamentos diretamente no seu e-mail
          </p>

          {/* Email Form */}
          <div className="max-w-2xl mx-auto">
            <div
              className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl"
              style={{
                background: "white",
                boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex-1 flex items-center gap-3 px-4">
                <Mail size={20} style={{ color: "#7F8C8D" }} />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 py-3 bg-transparent border-none outline-none"
                  style={{
                    fontSize: "16px",
                    color: "#2C3E50",
                  }}
                />
              </div>
              <button
                className="px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#0A1628",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Cadastrar
              </button>
            </div>

            <p
              className="mt-4"
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
