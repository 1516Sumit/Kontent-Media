import Hero from "./Hero.jsx";
// import Flow from "./Flow.jsx";
// import Pricingsecond from "./Pricingsecond.jsx";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Faqs from "./Faqs";
import ContactForm from "./ContactForm.jsx";

import '../App.css'
function Kontentedit() {
    return (
        // <div className="full-screen-scroll">
        <>
            <Navbar second={"kontentedit"} />
            <Hero type={"kontentedit"} />
            {/* <Flow type={"kontentedit"} /> */}
            {/* <Pricingsecond type={"kontentedit"} /> */}
            <Faqs type={"kontentedit"}/>
            <ContactForm />
            <Footer type={"kontentedit"} />
        </>
        // </div>
    )
}

export default Kontentedit;