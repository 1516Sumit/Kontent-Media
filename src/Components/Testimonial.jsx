import Slider from "./Slider"
import '../App.css'

import dustbin from '../assets/img/shieldtickgif.gif'

function Testimonial() {
    return (
        <>
            <div className="fade pt-12 bg-black flex items-center justify-between flex-col w-screen h-auto">
                <div className="mt-5 mb-12 md:mb-12 text-center">
                    <p className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                        They

                        <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Trusted, </span>
                        They
                        <br />

                        <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  Transformed </span>
                    </p>
                        <img src={dustbin} className="w-12 md:w-16 -mt-20 md:-mt-24 -ml-64 md:-ml-96 inline-block" alt="star" />
                </div>

                <Slider />


                {/* <div>
                    <p className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white mt-12" style={{ fontFamily: 'Archivo' }}>
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>Our  </span>
                        Kreators  Who
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> Went Big →</span>
                    </p>
                </div> */}

                <button type="button" className="self-center my-10 sm:m-16 w-56 sm:w-72 h-16 text-black bg-[#FFD93D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-lg text-center border-b-2 border-white-400 hover:border-purple-800" style={{ fontFamily: 'Archivo' }}><a href='#contactform'>Our Kreators who went big →</a></button>
            </div>
            <div className="bg-black h-0 block relative z-0 left-0 bottom-[180px] sm:bottom-[350px]">
                <img className="w-24 sm:w-36 md:w-40" src="./images/Mask groupnewleft.png" />
            </div>
        </>
    )
}

export default Testimonial