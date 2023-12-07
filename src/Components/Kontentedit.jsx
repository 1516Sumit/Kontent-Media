import Hero from "./Hero.jsx";
import Flow from "./Flow.jsx";
import Pricingsecond from "./Pricingsecond.jsx";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Faqs from "./Faqs";
import ContactForm from "./ContactForm.jsx";
// import NewestJobs from "./NewestJobs.jsx";
import '../App.css'
function Kontentedit() {
    return (
        <div className="full-screen-scroll">
        <Navbar second={"kontentedit"}/>
            
            <Hero type={"page1"} />
            <Flow />
            <Pricingsecond />
            <Faqs/>
            <ContactForm/> 
            {/* <NewestJobs/> */}
            <Footer/>
        </div>
    )
}

export default Kontentedit