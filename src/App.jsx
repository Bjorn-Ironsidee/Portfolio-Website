
import { useState } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'

import '../src/styles/App.css'

function App() {

  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const handleProjectsClick = () => {
    setShowHome(false);
    setShowAbout(false);
    setShowProjects(true);
  };

  const handleAboutClick = () => {
    setShowHome(false);
    setShowAbout(true);
    setShowProjects(false);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setShowAbout(false);
    setShowProjects(false);
  };

  return (
    <>
      <div>
      <Header
        onProjectsClick={handleProjectsClick}
        onAboutClick={handleAboutClick}
        onHomeClick={handleHomeClick}
      />
      {showHome && <Home />}
      {showAbout && <About />}
      {showProjects && <Projects />}
      <Footer />
      </div>
      
    </>
  )
  
}

export default App
