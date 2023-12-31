import Hero from "./Hero.jsx";
import Flow from "./Flow.jsx";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Faqs from "./Faqs";
import ContactForm from "./ContactForm.jsx";
import '../App.css'
function Kontents2s() {
    return (
        // <div className="full-screen-scroll">
        <>
            <Navbar second={"kontentedit"} />

            <Hero type={"kontents2s"} />
            {/* <Flow type={"kontents2s"} /> */}
            <Faqs type={"kontents2s"}/>
            <ContactForm />
            <Footer type={"kontentedit"} />
        </>
        // </div>
    )
}

export default Kontents2s;