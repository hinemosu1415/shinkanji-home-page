import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Precinct from './pages/Precinct/Precinct'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precinct" element={<Precinct />} />
      </Routes>
    </Router>
  )
}

export default App
