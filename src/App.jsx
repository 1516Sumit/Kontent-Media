import './App.css'
import {Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar.jsx';
import Kontentedit from './Components/Kontentedit.jsx';
import Career from './Components/Career.jsx';
import Landing from './Landing'; 
import Kontentpod from './Components/Kontentpod.jsx';
import Kontents2s from './Components/Kontents2s.jsx';

function App() {

  return (
    <div className="full-screen-scroll">
    
    {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Kontentedit" element={<Kontentedit/>} />
        <Route exact path="/Kontentpod" element={<Kontentpod/>} />
        <Route exact path="/Kontents2s" element={<Kontents2s/>} />
        <Route exact path="/Career" element={<Career/>} />
      </Routes>

    </div>
  )
}

export default App
