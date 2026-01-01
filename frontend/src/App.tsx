import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import HomePage from '@/components/HomePage'
import EventsPage from '@/components/Events'

function App() {

  return (
    <div className="min-h-screen bg-blue-800 max-w-[1920px] mx-auto"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
