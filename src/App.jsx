import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import About from "./pages/about"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Services from "./pages/services"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/portfolio" element={<Portfolio/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </>
  )
}

export default App
