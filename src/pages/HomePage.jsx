import HeroCover from "../components/layouts/HeroCover";
import AboutMe from "./AboutMe";
import ProjectsSection from "../components/layouts/ProjectsSection";
import SkillsSection from "../components/layouts/SkillsSection";
import ReferencesSection from "../components/layouts/ReferencesSection";
import Contact from "./Contact";
import "../styles/homePage.css";

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <HeroCover />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ReferencesSection />
      <Contact />
    </div>
  );
}