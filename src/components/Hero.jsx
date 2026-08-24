import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <motion.p
          className="eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
         SEU NEGÓCIO, NOSSA CRIATIVIDADE.
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          É um prazer
          <br />

          <span>ter você aqui!</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          Transformamos ideias em identidades visuais,
          conteúdos e experiências digitais que
          conectam marcas às pessoas.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
        >

          <button
            className="primary-button"
            onClick={() =>
              document
                .getElementById("projetos")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Ver projetos

            <ArrowUpRight size={18} />
          </button>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Instagram
          </a>

        </motion.div>

      </div>

      <div className="hero-visual">
        <Scene3D />
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <ArrowDown size={18} />

        <span>Scroll</span>
      </motion.div>

    </section>
  );
}