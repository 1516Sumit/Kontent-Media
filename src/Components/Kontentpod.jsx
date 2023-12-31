import Hero from "./Hero.jsx";
import Flow from "./Flow.jsx";
import Pricingsecond from "./Pricingsecond.jsx";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Faqs from "./Faqs";
import ContactForm from "./ContactForm.jsx";
import '../App.css'
function Kontentpod() {
    return (
        // <div className="full-screen-scroll">
        <>
        <Navbar second={"kontentedit"}/>
            
            <Hero type={"kontentpod"} />
            {/* <Flow type={"kontentpod"}/> */}
            <Pricingsecond type={"kontentpod"}/>
            <Faqs type={"kontentpod"}/>
            <ContactForm/> 
            <Footer type={"kontentedit"}/>
            </>
        // </div>
    )
}

export default Kontentpod;