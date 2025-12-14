
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home.jsx'
import Programs from './Pages/Programs.jsx'
import Locations from './Pages/Locations.jsx'
import Contact from './Pages/Contact.jsx'
import AboutUs from './Pages/About.jsx'
import SchoolTraining from './Pages/SchoolTraining.jsx'
import SportsGen from './Pages/SportsGen.jsx'
import PersonalTraining from './Pages/PersonalTraining.jsx'
import InfraDev from './Pages/InfraDev.jsx'
import EventManagement from './Pages/EventManagement.jsx'
import SportsEquipment from './Pages/SportsEquipment.jsx'
function App() {
  

  return (
    <>
    <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      <Route path="/programs" element={<Programs/>}></Route>
      <Route path="/programs/academies" element={<Locations/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/programs/schoolTraining" element={<SchoolTraining/>}></Route>
      <Route path="/programs/sportsgen" element={<SportsGen/>}></Route>
      <Route path="/programs/privateTraining" element={<PersonalTraining/>}></Route>
      <Route path="/programs/infrastructureDevelopment" element={<InfraDev/>}></Route>
      <Route path="/programs/eventManagement" element={<EventManagement/>}></Route>
      <Route path="/programs/sportsEquipment" element={<SportsEquipment/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
