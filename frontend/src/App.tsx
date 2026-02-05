import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from '@/components/HomePage'
import EventsPage from '@/components/Events'
import GetInvolvedPage from '@/components/GetInvolved'
import AboutPage from '@/components/About'
import Contact from '@/components/Contact'
import ResourcesPage from '@/components/Resources'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToHash from '@/components/ScrollToHash'
import SDGPage from '@/components/SDG'
import EventDetailPage from '@/components/EventDetailPage'

function App() {

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-blue-800 max-w-[1920px] mx-auto overflow-x-hidden">
        <Navbar />

        <div className="h-20 bg-[#1A2D52]"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/sdgs' element={<SDGPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App
