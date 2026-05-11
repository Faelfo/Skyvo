import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import "../../styles/components/about.css";
import React from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="about-section">
      <div className="about-glow-tl" />
      <div className="about-glow-br" />
      <div className="about-inner">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-label">Sobre</span>
          <p className="about-heading">
            A SKYVO_ nasceu da união entre{" "}
            <span className="accent">criatividade, estratégia e tecnologia.</span>
          </p>
          <p className="about-body">
            Somos uma marca criada para transformar ideias em soluções digitais reais, funcionais e bem estruturadas — conectando comunicação, identidade e desenvolvimento em um só lugar.
            <br />
            Acreditamos que boas ideias precisam de direção, propósito e estrutura para realmente funcionar. por isso, cada projeto é pensado de forma estratégica, buscando unir estética, performance e experiência.
            <br />
            Atuamos com criação de marcas, identidade visual, gestão de redes sociais, desenvolvimento de sites, sistemas e soluções digitais personalizadas, sempre com foco em clareza, usabilidade e resultados.
            <br />
            <span className="highlight"> Mais do que entregar serviços, a Skyvo existe para construir experiências digitais que façam sentido — </span>
            <span className="accent2">visualmente, estrategicamente e tecnicamente.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
