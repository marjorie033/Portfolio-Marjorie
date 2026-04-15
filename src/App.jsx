import { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './widgets/header-bar.jsx'
import AboutMeSection from './pages/about-me.jsx'
import './App.css'
import Home from "./pages/home.jsx";
import './theme/index.css'
import Footer from './widgets/footer.jsx'
import ProjectsHero from './pages/projects-hero.jsx'
import ProjectView1 from './pages/project-pages/project1.jsx'
import ProjectView2 from './pages/project-pages/project2-htsyf.jsx'
import ProjectView3 from './pages/project-pages/project3-anito.jsx'

import ContactPage from './pages/contact-me.jsx'
import LoadingScreen from './pages/loading-screen.jsx'
import { TransitionProvider } from './theme/page-transition.jsx'




function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <>
      {/* Loading screen — unmounts after animation */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      {/* <div style={{ visibility: isLoading ? "hidden" : "visible" }}> */}
      <div style={{ visibility: "visible" }}>
      <ScrollToTop />
      <TransitionProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/projects" element={<ProjectsHero />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/know-your-trash" element={<ProjectView1 />} />
        <Route path="/project/how-to-swim-your-fish" element={<ProjectView2 />} />
        <Route path="/project/anito" element={<ProjectView3 />} />
      </Routes>
      <Footer />
      </TransitionProvider>
      </div>
    </>
  )
}