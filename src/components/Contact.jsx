import {
  ArrowUpRight,
  Mail,
  Share2,
  MessageSquare,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contato"
      className="section contact"
    >
      <div className="section-number">
        05 — CONTATO
      </div>

      <motion.div
        className="contact-content"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="eyebrow">
          VAMOS CRIAR JUNTOS?
        </p>

        <h2>
          Tem um projeto
          <br />
          <span>em mente?</span>
        </h2>

        <p className="contact-description">
          Se você precisa de uma identidade visual,
          conteúdo para redes sociais ou uma presença
          digital mais profissional, vamos conversar.
        </p>

        <div className="contact-links">
          {/* E-mail (Atualizado com mailto:) */}
          <a 
            href="mailto:marketingjullya@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={20} />
            marketingjullya@gmail.com
            <ArrowUpRight size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/jrdesign__/"
            target="_blank"
            rel="noreferrer"
          >
            <Share2 size={20} />
            Instagram
            <ArrowUpRight size={18} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5584994238294"
            target="_blank"
            rel="noreferrer"
          >
            <MessageSquare size={20} />
            WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}