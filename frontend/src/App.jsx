
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home.jsx'
import Programs from './Pages/Programs.jsx'
import Locations from './Pages/Locations.jsx'
import Contact from './Pages/Contact.jsx'
function App() {
  

  return (
    <>
    <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      <Route path="/programs" element={<Programs/>}></Route>
      <Route path="/locations" element={<Locations/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
