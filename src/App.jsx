import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SmoothScroll } from './components/ui/SmoothScroll'
import BackgroundSystem from './components/background/BackgroundSystem'
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
  return (
    <SmoothScroll>
      <BackgroundSystem />
      <Navbar />
      <main className="relative z-10 bg-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/ScheduleOfCharges" element={<ScheduleOfCharges />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  )
}
