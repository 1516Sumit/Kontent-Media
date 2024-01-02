import Marquee from "react-fast-marquee";
import globe from '../assets/img/globe.gif'
import growth from '../assets/img/video.gif'
import gradient from '../assets/img/gradient.png'
import gradientright from '../assets/img/gradientright.png'

import Marquees from './Marquees'

import './trustby.css'
import '../App.css'

export default function Trustby() {

    return (
        <>
            <section className="fade bg-black w-screen h-auto lg:h-screen pt-20">
                <div className="flex flex-col justify-center align-center bg-black w-screen text-center">
                    
                    <p className="trustText self-center text-3xl leading-[2.2rem] sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white z-10" style={{ fontFamily: 'Archivo' }}>Our Clients <span className="trustText text-[#7F00FF]">Rocking With
                    </span> Crazy <br /><img className="w-8 relative inline-block" src={growth} /> Videos <span className="trustText text-[#FFD93D]">Across The Globe <img className="w-10 -left-0 top-0 relative inline-block" src={globe} /></span>
                    </p>
                    <p className="my-1 sm:my-2 font-Inter font-medium text-white text-[1.15rem] md:text-[2.3rem] sm:px-16 xl:px-48 z-10 capitalize">You can be the next </p>
                </div>

                <div className="flex flex-row">
                    <img className="absolute z-10 w-12 sm:w-40 lg:w-56 h-full" src={gradient} />
                    <div className="fade text-white pt-6 sm:pt-16 w-screen flex flex-col justify-center items-center h-auto">
                        <Marquee pauseOnHover autoFill={true} speed={50}>
                            <Marquees />
                            <Marquees />
                            <Marquees />
                        </Marquee>
                        <Marquee pauseOnHover autoFill={true} direction="right" speed={50}>
                            <Marquees />
                            <Marquees />
                            <Marquees />
                        </Marquee>
                        <Marquee pauseOnHover autoFill={true} speed={50}>
                            <Marquees />
                            <Marquees />
                            <Marquees />
                        </Marquee>
                    </div>
                    <img className="absolute z-10 -right-1 w-12 sm:w-40 lg:w-56 h-full" src={gradientright} />
                </div>

                <div className='flex justify-between flex-row masks'>
                    <img src="./images/Mask groupnewleft.png" className='mask3 w-28 h-56 sm:w-44 sm:h-72' />
                    <img src="./images/Mask groupnew.png" className='mask4 w-28 h-56 sm:w-44 sm:h-72' />
                </div>
            </section>
        </>
    )
}


