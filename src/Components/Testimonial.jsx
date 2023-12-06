import Slider from "./Slider"
import '../App.css'

function Testimonial() {
    return (
        <>
            <div className="bg-black flex items-center justify-center sm:justify-between flex-col w-screen h-auto md:h-screen section">
                <div className="w-screen my-4 mb-8">
                    <div className="h-2 bg-[#7F00FF]"></div>
                    <div className="h-2 bg-[#FFD93D]"></div>
                    <div className="h-2 bg-[#7F00FF]"></div>
                </div>
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


                <div>
                    <p className="self-center text-2xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                        <span className="self-center text-2xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>let’s </span>
                        Case
                        <span className="self-center text-2xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> Study </span>
                    </p>
                </div>

            </div>
            <div className="bg-black grid w-screen">
                <div className="mx-24 my-4 sm:m-14 grid grid-cols-1 gap-0 sm:gap-3 sm:grid-cols-4" style={{ fontFamily: 'Archivo' }}>
                    <div className="h-12 m-2 text-center bg-[#323133] text-white text-sm sm:text-base md:text-xl lg:text-3xl flex justify-center items-center rounded-lg"> Parmita Katkar </div>
                    <div className="h-12 m-2 text-center bg-[#323133] text-white text-sm sm:text-base md:text-xl lg:text-3xl flex justify-center items-center rounded-lg"> Parmita Katkar </div>
                    <div className="h-12 m-2 text-center bg-[#323133] text-white text-sm sm:text-base md:text-xl lg:text-3xl flex justify-center items-center rounded-lg"> Parmita Katkar </div>
                    <div className="h-12 m-2 text-center bg-[#323133] text-white text-sm sm:text-base md:text-xl lg:text-3xl flex justify-center items-center rounded-lg"> Parmita Katkar </div>
                </div>
            </div>
            <div className="bg-black h-0 block relative z-0 left-0" style={{ bottom: '350px' }}>
                <img className="w-32 sm:w-36 md:w-40" src="./images/Mask group.svg" />
            </div>
        </>
    )
}

export default Testimonial