import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import Register from './components/Register'
import Home from './components/Home'

function App() {

  return (
    <Router>
    <div className='flex justify-center pt-32'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App


