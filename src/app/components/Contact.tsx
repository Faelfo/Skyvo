import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Instagram, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import "../../styles/components/contact.css";
import React from "react";

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_16yx3bd",
        "template_j9nd37m",
        formRef.current,
        "pciO3-nRGYAzQ9BkK"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section ref={ref} className="contact-section">
      <div className="contact-glow-tr" />
      <div className="contact-glow-bc" />
      <div className="contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <span className="contact-label">Contato</span>
          <p className="contact-heading">Vamos conversar?</p>
          <p className="contact-sub">
            Entre em contato e descubra como podemos transformar seu negócio
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="contact-field">
              <label>Nome</label>
              <input
                type="text"
                name="from_name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="contact-input"
                placeholder="Seu nome"
              />
            </div>
            <div className="contact-field">
              <label>Email</label>
              <input
                type="email"
                name="from_email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="contact-input"
                placeholder="seu@email.com"
              />
            </div>
            <div className="contact-field">
              <label>Mensagem</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="contact-textarea"
                placeholder="Como podemos ajudar?"
              />
            </div>

            {/* Feedback de status */}
            {status === "success" && (
              <div className="contact-feedback contact-feedback--success">
                ✓ Mensagem enviada com sucesso!
              </div>
            )}
            {status === "error" && (
              <div className="contact-feedback contact-feedback--error">
                ✗ Erro ao enviar. Tente novamente.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              className="contact-submit"
            >
              <span>{status === "sending" ? "Enviando..." : "Enviar mensagem"}</span>
              <Send size={16} />
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-info-card">
              <h3 className="contact-info-title">Conecte-se conosco</h3>
              <div className="contact-channels">
                <a href="https://wa.me/5554999145613" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-channel-label">WhatsApp</div>
                    <div className="contact-channel-sub">Fale conosco</div>
                  </div>
                </a>
                <a href="https://instagram.com/skyvo___" target="_blank" rel="noopener noreferrer" className="contact-channel">
                  <div className="contact-channel-icon">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Instagram</div>
                    <div className="contact-channel-sub">@skyvo_</div>
                  </div>
                </a>
                <a href="mailto:contato.skyvo@gmail.com" className="contact-channel">
                  <div className="contact-channel-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="contact-channel-label">Email</div>
                    <div className="contact-channel-sub">contato.skyvo@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-cta-card">
              <p>
                Estamos prontos para transformar seu negócio com tecnologia, estratégia e presença digital de alto nível.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}