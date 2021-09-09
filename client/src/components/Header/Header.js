import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <motion.h2
          className="logo"
          initial={{ x: 10000 }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
        >
          GlueGuy
        </motion.h2>
      </Link>
      <motion.a
        className="players"
        href="#players"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Players
      </motion.a>
      <Link to="/glossary">
        <motion.p
          className="glossary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Glossary
        </motion.p>
      </Link>
    </header>
  );
}
