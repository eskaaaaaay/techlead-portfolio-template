import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LeadershipPillars from './components/LeadershipPillars'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="min-h-screen bg-surface w-full overflow-x-hidden relative selection:bg-primary/30 selection:text-white">
      {/* Desktop ambient particle constellation */}
      <ParticleBackground />
      
      <Navbar />
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <LeadershipPillars />
        <About />
        <Experience />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
