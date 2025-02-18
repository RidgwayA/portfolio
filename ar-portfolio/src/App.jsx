// import './App.css'
import NavbarMain from "./componets/navbar/NavbarMain";
import HeroMain from "./componets/heroSection/HeroMain";
import HeroBackground from "./componets/heroSection/HeroBackground";
import AboutMeMain from "./componets/aboutMeSection/AboutMeMain";
import SkillMain from "./componets/skillSection/SkillMain";
import ExperienceMain from "./componets/experienceSection/ExperienceMain";
import ProjectsMain from "./componets/projectsSection/ProjectsMain";
import ContactMain from "./componets/contactSection/ContactMain";
import SectionFooter from "./componets/footer/SectionFooter";
import FinalFooter from "./componets/footer/FinalFooter";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="font-body">
      <HeroBackground />
      <NavbarMain />
      <HeroMain />
      <SectionFooter />
      <AboutMeMain />
      <SkillMain />
      <SectionFooter />
      <ExperienceMain />
      <SectionFooter />
      <ProjectsMain />
      <SectionFooter />
      <ContactMain />
      <FinalFooter />

      <Analytics />
    </main>
  );
}

export default App;
