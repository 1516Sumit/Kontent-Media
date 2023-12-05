// import React from 'react'
import Slider from "./Slider"


function CareerTestimonials() {
  return (
    <>
    <div className="bg-black flex items-center justify-between flex-col md:pt-20">
        <div className="mt-5 mb-7 md:mb-7 text-center">
            <p className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                You are not
                <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> alone.</span>
                The pain
                <br />
                of website
                <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> creation </span>
                is real
            </p>
        </div>

        <Slider />
    </div> 
</>
  )
}

export default CareerTestimonials