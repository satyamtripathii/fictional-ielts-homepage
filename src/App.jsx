import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <Navbar />
      <main id="home" className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
