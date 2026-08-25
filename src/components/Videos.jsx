import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Ideal Terapias",
    category: "Reels • Animado",
    description:
      "Conteúdo produzido para informar sobre Prompt na Fonoaudiologia.",
    video: "/Portfolioat/videos/prompt.mp4",
  },

  {
    id: 2,
    title: "Pousada Serra do Torreão",
    category: "Reels • Turismo",
    description:
      "Vídeo desenvolvido para apresentar a experiência da pousada com o café da manhã.",
    video: "/Portfolioat/videos/cafe-da-manha.mp4",
  },

  {
    id: 3,
    title: "Ideal Terapias",
    category: "Reels • Animado",
    description:
      "Conteúdo produzido para informar sobre avaliação psicológica.",
    video: "/Portfolioat/videos/avaliacao-psicologica.mp4",
  },

  {
    id: 4,
    title: "Ferrovia Restaurante",
    category: "Reels • After",
    description:
      "Produção desenvolvida do after da OAB Mato Grande no Restaurante.",
    video: "/Portfolioat/videos/jantar-oab-ferrovia.mp4",
  },
];

export default function Videos() {
  const videoRefs = useRef([]);
  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    setPlayingVideo(index);
  };

  const handlePause = (index) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    }
  };

  return (
    <section id="videos" className="section videos">

      <div className="section-number">
        03 — VÍDEOS
      </div>

      <div className="videos-heading">

        <div>
          <p className="eyebrow">
            PRODUÇÃO AUDIOVISUAL
          </p>

          <h2>
            Vídeos que
            <br />
            <span>contam histórias.</span>
          </h2>
        </div>

        <p>
          Uma seleção de conteúdos produzidos para
          redes sociais, campanhas e comunicação
          de marcas.
        </p>

      </div>

      <div className="videos-grid">

        {videos.map((item, index) => (
          <motion.article
            className={`video-card ${
              playingVideo === index
                ? "is-playing"
                : ""
            }`}
            key={item.id}
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
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >

            <div className="video-wrapper">

              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                src={item.video}
                controls
                playsInline
                preload="metadata"
                onPlay={() => handlePlay(index)}
                onPause={() => handlePause(index)}
              />

              {playingVideo !== index && (
                <div className="video-play-icon">
                  <Play
                    size={28}
                    fill="currentColor"
                  />
                </div>
              )}

            </div>

            <div className="video-info">

              <span className="video-number">
                {String(item.id).padStart(2, "0")}
              </span>

              <div>

                <h3>{item.title}</h3>

                <p>{item.category}</p>

                <small>
                  {item.description}
                </small>

              </div>

            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}