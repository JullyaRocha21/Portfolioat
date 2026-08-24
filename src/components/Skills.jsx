import { motion } from "framer-motion";
import equipeImg from "/images/equipe.png";
<motion.div
            className="skills-image"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ width: "200px", margin: "10px 0 0 0" }}
          >
            <img src="/images/equipe.png" alt="Equipe" />
            <img
          
              src={equipeImg}
              alt="Jullya e Nyelson - JR Filmagens e Criação"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </motion.div>

const skills = [
  "Design Gráfico",
  "Social Media",
  "Identidade Visual",
  "CorelDRAW",
  "Criação de Conteúdo",
  "Estratégia Digital",
  "Filmagens",
  "Edição de vídeos",
];

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="section-number">
        04 — HABILIDADES
      </div>

      <div className="skills-content">
        
        {/* Coluna da Esquerda: Agrupa o Título e a Imagem logo abaixo */}
        <div className="skills-left-column">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            O que nós
            <br />
            <span>fazemos.</span>
          </motion.h2>

          <motion.div
            className="skills-image"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={equipeImg}
              alt="Jullya e Nyelson - JR Filmagens e Criação"
            />
          </motion.div>
        </div>

        {/* Coluna da Direita: Lista de Habilidades */}
        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              className="skill"
              key={skill}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{skill}</strong>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}