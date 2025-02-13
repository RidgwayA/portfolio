// import './App.css'
import NavbarMain from './componets/navbar/NavbarMain'
import HeroMain from './componets/heroSection/HeroMain'
import HeroBackground from './componets/heroSection/HeroBackground'
import HeroFooter from './componets/heroSection/HeroFooter'
import AboutMeMain from './componets/aboutMeSection/AboutMeMain'

function App() {
  return (
<main className='font-body'>
  <NavbarMain/>
  <HeroMain/>
  <HeroBackground/>
  <HeroFooter/>
  <AboutMeMain/>
</main>
  )
}

export default App
