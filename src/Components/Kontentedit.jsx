import Hero from "./Hero.jsx";
import Flow from "./Flow.jsx";
import Pricingsecond from "./Pricingsecond.jsx";
import Footer from './Footer.jsx';
import Navbarsecond from "./Navbarsecond.jsx";
import Faqs from "./Faqs";
import ContactForm from "./ContactForm.jsx";
// import NewestJobs from "./NewestJobs.jsx";

function Kontentedit() {
    return (
        <>
            <Navbarsecond/>
            <Hero type={"page1"} />
            <Flow />
            <Pricingsecond />
            <Faqs/>
            <ContactForm/> 
            {/* <NewestJobs/> */}
            <Footer/>
        </>
    )
}

export default Kontentedit