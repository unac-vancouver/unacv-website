import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-background"> 
      <Router>
        <Routes>
          <Route path="/" element={<div>Homepage</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
