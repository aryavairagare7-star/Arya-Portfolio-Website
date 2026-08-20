import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import "./App.css";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";

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

                <section id="resume">
                    <h1>Resume</h1>
                </section>

                <section id="contact">
                    <h1>Contact</h1>
                </section>

            </main>
        </>
    );
}

export default App;