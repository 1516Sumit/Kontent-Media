import Hero from './Components/Hero';
import Keyfeature from './Components/Keyfeatures.jsx';
import Testimonial from './Components/Testimonial.jsx';
import Footer from './Components/Footer.jsx';
import Wildfire from './Components/Wildfire.jsx';
import Pricing from './Components/Pricing.jsx';
import BookACall from './Components/BookACall.jsx';
import Trustby from './Components/Trustby.jsx'
// import Navbar from './Components/Navbar.jsx';


function Landing() {
    return (
        <>
            {/* <Navbar/> */}
            <Hero type={"page"}/>
            <Trustby />
            <Keyfeature />
            <Pricing/>
            <Wildfire />
            <Testimonial />
            <BookACall/>
            <Footer />
            
        </>
    )
}

export default Landing