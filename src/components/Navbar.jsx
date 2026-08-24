import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
    <div className="logo flex items-center">
  <img 
    src="./favicon.svg" 
    alt="Logo" 
    style={{ height: '56px', width: 'auto' }} 
    className="object-contain" 
  />
</div>
      <nav>
        <button onClick={() => scrollTo("inicio")}>
          Início
        </button>

        <button onClick={() => scrollTo("sobre")}>
          Sobre
        </button>

        <button onClick={() => scrollTo("projetos")}>
          Projetos
        </button>

        <button onClick={() => scrollTo("videos")}>
          Vídeos
        </button>

        <button onClick={() => scrollTo("habilidades")}>
          Habilidades
        </button>

        <button onClick={() => scrollTo("contato")}>
          Contato
        </button>
      </nav>

      {/* Container para agrupar os botões sociais lado a lado */}
      <div className="nav-socials" style={{ display: "flex", gap: "10px" }}>
        <a
          href="https://www.instagram.com/jrdesign__/"
          target="_blank"
          rel="noreferrer"
          className="nav-contact"
        >
          Instagram ↗
        </a>

        <a
          href="https://wa.me/5584994238294"
          target="_blank"
          rel="noreferrer"
          className="nav-contact"
        >
          WhatsApp ↗
        </a>
      </div>
    </motion.header>
  );
}