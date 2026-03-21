import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Localizacao() {
  return (
    <section className="py-24 bg-white" id="contato">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid lg:grid-cols-[60%_40%] gap-12">
          {/* Left Column - Map */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{
                height: "500px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                border: '1px solid rgba(0, 0, 0, 0.04)'
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
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(248, 249, 250, 0.8)",
                  backdropFilter: 'blur(10px)',
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  borderColor: 'rgba(255, 107, 53, 0.2)'
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
              </motion.div>

              {/* Phone */}
              <motion.a
                href="tel:+551139510270"
                className="block p-6 rounded-2xl"
                style={{
                  background: "rgba(248, 249, 250, 0.8)",
                  backdropFilter: 'blur(10px)',
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  borderColor: 'rgba(255, 107, 53, 0.2)'
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
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contato@cncflex.com.br"
                className="block p-6 rounded-2xl"
                style={{
                  background: "rgba(248, 249, 250, 0.8)",
                  backdropFilter: 'blur(10px)',
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  borderColor: 'rgba(255, 107, 53, 0.2)'
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
              </motion.a>

              {/* Hours */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(248, 249, 250, 0.8)",
                  backdropFilter: 'blur(10px)',
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)",
                  borderColor: 'rgba(255, 107, 53, 0.2)'
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
              </motion.div>
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/5511938023558?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 rounded-2xl flex items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
              }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 16px 40px rgba(37, 211, 102, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
