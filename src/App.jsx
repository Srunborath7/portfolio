<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useTheme } from "./context/ThemeContext";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterLayout from "./components/layouts/MasterLayout";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import SkillsPage from "./components/pages/SkillsPage";
import CVPage from "./components/pages/CVPage";
import AboutMe from "./components/pages/AboutMe";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import WorkExperience from "./components/pages/WorkExperience";
import PageNotFound from "./components/pages/PageNotFound";
>>>>>>> a982dd4 (feet: upgrade version)

function App() {
  const { dark } = useTheme();

  return (
<<<<<<< HEAD
    <div className={dark ? "dark" : "light"}>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
=======
    <BrowserRouter>
      <Routes>
        <Route element={<MasterLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

>>>>>>> a982dd4 (feet: upgrade version)
