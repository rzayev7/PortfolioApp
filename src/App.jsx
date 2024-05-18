import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Technologies from "./components/technologies.jsx";
import Projects from "./components/projects.jsx";
function App() {
  return (
    <div className="relative h-screen">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
    </div>
  );
}

export default App;
