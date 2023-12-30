// import React from 'react'
import Slider from "./Slider"
import '../App.css'

function CareerTestimonials() {
  return (
    <>
     <div className="fade bg-black pt-12 md:pt-24">
        <div className="bg-black h-0 block relative z-0 left-0" style={{ top: '60px' }}>
          <img className="w-32 sm:w-36 md:w-40" src="./images/Mask groupnewleft.png" />
        </div>
        <div className="bg-black flex items-center justify-between flex-col md:pt-20">
          <div className="mt-5 mb-7 md:mb-7 text-center">
            <p className="py-4 self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
              You are not
              <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> alone.</span>
              
              <br />
              Success
              <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> Edit Story </span>
             
            </p>
          </div>

          <Slider />
        </div>
      </div>
</>
  )
}

export default CareerTestimonials