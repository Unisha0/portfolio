import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import TechStack from './components/TechStack'
import Career from './components/Career'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <TechStack />
        <Career />
        <Work />
        <Contact />
      </main>
    </>
  )
}

export default App
