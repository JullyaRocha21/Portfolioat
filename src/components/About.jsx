import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="section about">

      <div className="section-number">
        01 — SOBRE NÓS
      </div>

      <div className="about-grid">

        <motion.div
          className="about-image"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <img
            src="./images/JR DESIGN.png"
            alt="Jullya Rocha"
          />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2>
            Criatividade,
            <br />
            estratégia e
            <br />
            <span>propósito.</span>
          </h2>

          <p>
            Somos Jullya e Nyelson, a cara por trás da JR Filmagens e Criação.
            Nossa missão é transformar ideias em conteúdos que valorizam ainda mais o seu segmento, destacam o seu negócio e fortalecem a presença da sua marca no digital.
          </p>

          <p>
           Atuamos com Social Media e Videomaker, unindo estratégia, criatividade e produção audiovisual para mostrar ao seu público aquilo que torna o seu negócio único.

Mais do que criar conteúdo, queremos contar a história da sua marca, gerar conexão e fazer o seu negócio ser visto de uma forma diferente.

Somos a JR Filmagens e Criação. Seu negócio, nossa criatividade.
          </p>

          <div className="about-info">

            <div>
              <strong>Conteúdo</strong>
              <span>Estratégia & Criação</span>
            </div>

            <div>
              <strong>Social</strong>
              <span>Valorização do seu perfil</span>
            </div>

            <div>
              <strong>Digital</strong>
              <span>Impactando sua marca</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}