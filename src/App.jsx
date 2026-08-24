import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Videos from "./components/Videos";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Videos />
        <Skills />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Jullya Rocha. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;