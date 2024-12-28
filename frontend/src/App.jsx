
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home.jsx'

function App() {
  

  return (
    <>
    <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      
    </Routes>
      
    </>
  )
}

export default App
