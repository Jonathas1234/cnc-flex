import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Localizacao() {
  return (
    <section className="py-24 bg-white" id="contato">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-[60%_40%] gap-12">
          {/* Left Column - Map */}
          <div className="relative">
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{
                height: "500px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-46.6753!3d-23.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI5JzM3LjMiUyA0NsKwNDAnMzEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column - Info */}
          <div>
            <h2
              className="mb-10"
              style={{
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "#0A1628",
                lineHeight: 1.2,
              }}
            >
              Visite Nosso Showroom
            </h2>

            {/* Info Cards */}
            <div className="space-y-4 mb-8">
              {/* Address */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "#F8F9FA",
                  border: "1px solid #E8EAED",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 107, 53, 0.1)" }}
                  >
                    <MapPin size={24} style={{ color: "#FF6B35" }} />
                  </div>
                  <div>
                    <div
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: 600, color: "#0A1628" }}
                    >
                      Endereço
                    </div>
                    <div style={{ fontSize: "14px", color: "#7F8C8D", lineHeight: 1.5 }}>
                      Av. Casa Verde, 3434-C<br />
                      Bairro do Limão<br />
                      São Paulo - SP
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "#F8F9FA",
                  border: "1px solid #E8EAED",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 107, 53, 0.1)" }}
                  >
                    <Phone size={24} style={{ color: "#FF6B35" }} />
                  </div>
                  <div>
                    <div
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: 600, color: "#0A1628" }}
                    >
                      Telefones
                    </div>
                    <div style={{ fontSize: "14px", color: "#7F8C8D", lineHeight: 1.5 }}>
                      (11) 3951-0270<br />
                      (11) 93802-3558
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "#F8F9FA",
                  border: "1px solid #E8EAED",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 107, 53, 0.1)" }}
                  >
                    <Mail size={24} style={{ color: "#FF6B35" }} />
                  </div>
                  <div>
                    <div
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: 600, color: "#0A1628" }}
                    >
                      E-mail
                    </div>
                    <div style={{ fontSize: "14px", color: "#7F8C8D" }}>
                      cncflex@cncflex.com.br
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "#F8F9FA",
                  border: "1px solid #E8EAED",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255, 107, 53, 0.1)" }}
                  >
                    <Clock size={24} style={{ color: "#FF6B35" }} />
                  </div>
                  <div>
                    <div
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: 600, color: "#0A1628" }}
                    >
                      Horário
                    </div>
                    <div style={{ fontSize: "14px", color: "#7F8C8D", lineHeight: 1.5 }}>
                      Seg-Sex: 8h às 18h<br />
                      Sáb: 8h às 13h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5511938023558?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#25D366",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0px 8px 24px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
