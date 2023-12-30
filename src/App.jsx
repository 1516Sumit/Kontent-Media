import './App.css'
import { Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar.jsx';
import Kontentedit from './Components/Kontentedit.jsx';
import Career from './Components/Career.jsx';
import Landing from './Landing';
import Kontentpod from './Components/Kontentpod.jsx';
import Kontents2s from './Components/Kontents2s.jsx';
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import Refund from './pages/Refund.jsx';

function App() {

  return (
    // <div className="full-screen-scroll">
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Kontentedit" element={<Kontentedit />} />
        <Route exact path="/Kontentpod" element={<Kontentpod />} />
        <Route exact path="/Kontents2s" element={<Kontents2s />} />
        <Route exact path="/Career" element={<Career />} />
        <Route exact path="/Terms" element={<Terms />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/Refund" element={<Refund />} />
      </Routes>
    </>
    // </div>
  )
}

export default App
