import HeroCover from "../layouts/HeroCover";
import AboutMe from "./AboutMe";
import ProjectsSection from "../layouts/ProjectsSection";
import SkillsSection from "../layouts/SkillsSection";
import ReferencesSection from "../layouts/ReferencesSection";
import Contact from "./Contact";
import "../../styles/homePage.css";

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