import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import "./App.css";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Resume />
                <Contact />
            </main>
        </>
    );
}

export default App;