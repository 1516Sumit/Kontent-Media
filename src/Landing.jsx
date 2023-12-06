import React from "react";
import Hero from './Components/Hero';
import Keyfeature from './Components/Keyfeatures.jsx';
import Testimonial from './Components/Testimonial.jsx';
import Footer from './Components/Footer.jsx';
import Wildfire from './Components/Wildfire.jsx';
import Pricing from './Components/Pricing.jsx';
import BookACall from './Components/BookACall.jsx';
import Trustby from './Components/Trustby.jsx'
// import Navbar from './Components/Navbar.jsx';
import './App.css'

function Landing() {
    return (
        <div className="full-screen-scroll">
            {/* <Navbar/> */}
            <Hero type={"page"}/>
            <Trustby />
            <Keyfeature />
            <Pricing/>
            <Wildfire />
            <Testimonial />
            <BookACall/>
            <Footer />
            
        </div>
    )
}

export default Landing