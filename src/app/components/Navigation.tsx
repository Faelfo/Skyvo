import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import "../../styles/components/navigation.css";
import React from "react";
import logoImg from "../../assets/logo.png";

const navItems = [
  { name: "Sobre", to: "/sobre" },
  { name: "Serviços", to: "/servicos" },
  { name: "Cases", to: "/cases" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={"nav-root" + (isScrolled ? " scrolled" : "")}
    >
      <div className="nav-inner">
        <div className="nav-bar">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/">
            <img src={logoImg} alt="SKYVO_"
             className="nav-logo-img" />
            </Link>
          </motion.div>

          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Link to="/contato" className="nav-cta">
            Falar conosco
          </Link>

          <button className="nav-mobile-btn" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
