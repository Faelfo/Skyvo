import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import "../../styles/components/cases.css";
import React from "react";

const caseItems = [
  { title: "Projetos", desc: "Soluções completas desenvolvidas" },
  { title: "Artes", desc: "Identidades visuais criadas" },
  { title: "Dashboards", desc: "Sistemas de gestão implementados" },
  { title: "Processos", desc: "Fluxos otimizados e automatizados" },
  { title: "Marcas", desc: "Posicionamentos estratégicos" },
  { title: "Layouts", desc: "Interfaces modernas e eficientes" },
];

export function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="cases-section">
      <div className="cases-glow" />
      <div className="cases-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="cases-header"
        >
          <span className="cases-label">Cases & Resultados</span>
          <p className="cases-heading">Tudo que criamos, conta.</p>
          <p className="cases-sub">Cada projeto é uma oportunidade de entregar excelência</p>
        </motion.div>

        <div className="cases-grid">
          {caseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="case-card"
            >
              <div className="case-card-overlay" />
              <div className="case-card-inner">
                <div className="case-dot" />
                <h3 className="case-title">{item.title}</h3>
                <p className="case-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
