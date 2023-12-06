import Collage from "./Collage"
import Hero from "./Hero"
import NewestJobs from "./NewestJobs"
import CareerFooter from "./CareerFooter"
import CareerTestimonials from "./CareerTestimonials"
import '../App.css'
function Career() {
    return (
        <div className="full-screen-scroll">
            <Hero />
            <Collage/>
            <NewestJobs/>
            <CareerTestimonials/>
            <CareerFooter/>
        </div>
    )
}

export default Career