import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import HomePage from '@/components/HomePage'

function App() {

  return (
    <div className="min-h-screen bg-background"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
