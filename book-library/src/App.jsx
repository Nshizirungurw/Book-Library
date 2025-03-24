import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Register from './components/Register'
import Home from './components/Home'
import Discuss from './components/Discuss'

function App() {

  return (
    <Router>
    <div className='flex justify-center pt-10'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App


