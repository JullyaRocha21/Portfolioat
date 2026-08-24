import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Implasverde",
    category: "Social Media • Branding",
    video: "./videos/implasverde.mp4",
    description:
      "Criação de conteúdo, campanhas e comunicação visual para a marca.",
  },
  {
    number: "02",
    title: "Pousada Serra do Torreão",
    category: "Social Media • Turismo",
    video: "./videos/pousada.mp4",
    description:
      "Estratégia de conteúdo para fortalecer a presença digital da pousada.",
  },
  {
    number: "03",
    title: "Ferrovia Restaurante",
    category: "Social Media • Gastronomia",
    video: "./videos/ferrovia.mp4",
    description:
      "Conteúdo visual e campanhas para comunicação gastronômica.",
  },
  {
    number: "04",
    title: "Restaurante Estação",
    category: "Social Media • Gastronomia",
    video: "./videos/estacao.mp4",
    description:
      "Conteúdo visual e campanhas para comunicação gastronômica.",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="section-number">
        02 — PROJETOS
      </div>

      <div className="projects-heading">
        <h2>
          Alguns dos nossos
          <br />
          <span>trabalhos.</span>
        </h2>

        <p>
          Uma seleção de projetos que representam
          nossa forma de pensar, criar e comunicar.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <div className="project-image">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="project-overlay">
                <ArrowUpRight size={40} />
              </div>
            </div>

            <div className="project-info">
              <span>{project.number}</span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>

                <small>
                  {project.description}
                </small>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}