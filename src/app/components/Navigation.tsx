import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import "../../styles/components/navigation.css";
import React from "react";
import logoImg from "../../assets/logo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Sobre", to: "/sobre" },
  { name: "Serviços", to: "/servicos" },
  { name: "Cases", to: "/cases" },
  { name: "Contato", to: "/contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={"nav-root" + (isScrolled ? " scrolled" : "")}
      >
        <div className="nav-inner">
          <div className="nav-bar">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/">
                <img src={logoImg} alt="SKYVO_" className="nav-logo-img" />
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

            <button
              className="nav-mobile-btn"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-mobile-menu"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  "nav-mobile-link" + (isActive ? " active" : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}