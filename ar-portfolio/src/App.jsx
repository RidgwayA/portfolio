// import './App.css'
import NavbarMain from './componets/navbar/NavbarMain'
import HeroMain from './componets/heroSection/HeroMain'
import HeroBackground from './componets/heroSection/HeroBackground'
import HeroFooter from './componets/heroSection/HeroFooter'
import AboutMeMain from './componets/aboutMeSection/AboutMeMain'
import SkillMain from './componets/skillSection/SkillMain'
import SkillFooter from './componets/skillSection/SkillFooter'
import ExperienceMain from './componets/experienceSection/ExperienceMain'

function App() {
  return (
<main className='font-body'>
  <NavbarMain/>
  <HeroMain/>
  <HeroBackground/>
  <HeroFooter/>
  <AboutMeMain/>
  <SkillMain/>
  <HeroFooter/>
  <ExperienceMain/>
</main>
  )
}

export default App
