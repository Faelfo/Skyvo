import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import "../../styles/components/hero.css";
import React from "react";

export function Hero() {
  return (
    <section className="hero-section">
      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Blue glows */}
      <div className="hero-glow-center" />
      <div className="hero-glow-bl" />
      <div className="hero-glow-tr" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/logo.png"
               alt="SKYVO_"
               className="hero-logo-img"   
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-tagline"
        >
          tecnologia para empresas modernas
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-description"
        >
          Organizamos processos, conectamos tecnologia e impulsionamos negócios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contato" className="hero-cta">
            <span>Falar com a SKYVO</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hero-scroll-indicator"
      >
      </motion.div>
    </section>
  );
}
