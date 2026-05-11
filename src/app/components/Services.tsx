import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, TrendingUp, Sparkles } from "lucide-react";
import "../../styles/components/services.css";
import React from "react";

const services = [
  {
    Icon: Code2,
    title: "Tecnologia & Sistemas",
    items: "ERP • automações • suporte • desenvolvimento",
  },
  {
    Icon: TrendingUp,
    title: "Gestão & Estratégia",
    items: "processos • organização • performance",
  },
  {
    Icon: Sparkles,
    title: "Marketing & Presença Digital",
    items: "branding • redes sociais • posicionamento",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="services-section">
      <div className="services-glow" />
      <div className="services-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <span className="services-label">Serviços</span>
          <p className="services-heading">Soluções completas para o seu negócio</p>
        </motion.div>

        <div className="services-grid">
          {services.map(({ Icon, title, items }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="service-card"
            >
              <div className="service-card-glow" />
              <div className="service-card-content">
                <div className="service-icon-wrap">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{title}</h3>
                <p className="service-items">{items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
