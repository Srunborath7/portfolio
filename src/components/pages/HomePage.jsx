import React from "react";
import HeroCover from "../layouts/HeroCover";
import AboutMe from "./AboutMe";
import ProjectsSection from "../layouts/ProjectsSection";
import SkillsSection from "../layouts/SkillsSection";
import ReferencesSection from "../layouts/ReferencesSection";
import Contact from "./Contact";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroCover />
      <AboutMe />
      <ProjectsSection />
      <SkillsSection />
      <ReferencesSection />
      <Contact />
    </div>
  );
}