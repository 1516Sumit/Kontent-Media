import './App.css'
import {Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import Kontentedit from './Components/Kontentedit.jsx';
import Career from './Components/Career.jsx';
import Landing from './Landing'; 

function App() {

  return (
    <div className="full-screen-scroll">
    
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Kontentedit" element={<Kontentedit   type={"page1"}/>} />
        <Route exact path="/Career" element={<Career  type={"page1"}/>} />
      </Routes>

    </div>
  )
}

export default App
