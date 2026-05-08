import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Methodology from './pages/Methodology'
import ScheduleOfCharges from './pages/ScheduleOfCharges'
import LearnMore from './pages/LearnMore'
import ContactUs from './pages/ContactUs'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/charges" element={<ScheduleOfCharges />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
