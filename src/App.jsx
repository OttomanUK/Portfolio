import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/heroSection";
import { AboutSection } from "./components/aboutSection";
import { ProjectsSection } from "./components/projectSection";
import { SkillsSection } from "./components/skillsSection";
import { ExperienceSection } from "./components/experienceSection";
import { ContactSection } from "./components/contactSection";
// import { MatrixBackground } from "./components/matrixBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MatrixBackground /> */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

export default App;
