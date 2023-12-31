import Pricingbox from './Pricingbox';
import { Link } from 'react-router-dom';
import './pricing.css';
import Pdata from './Pdata';
import '../App.css'
import grid6 from '../assets/img/gridnew2.png';

export default function Pricing() {
    return (
        <>
            <section id="pricing" className="bg-black w-screen h-auto flex justify-center items-center flex-col">
                <div className="fade mt-56 sm:mt-36 md:mt-44 mb-2 md:mb-0 text-center">
                    <p className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                        Pricing
                        <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  Plans  </span>
                        tailored to <br />
                        <span className="self-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Your needs. </span>
                    </p>
                    <p className="my-6 sm:my-10 px-12 lg:my-5 font-Inter font-medium text-white sm:text-sm md:text-base lg:text-lg xl:text-xl sm:px-16 xl:px-48">Custom Plans For different needs , from seamless editing to full-blown <br /> production. Rapidly grow with videos that work.</p>
                </div>
                <div className="fadef bg-[#FFD93D] my-10 sm:my-14 rounded-3xl md:rounded-large flex justify-center items-center h-auto md:h-screen">
                    <div className="flex justify-center items-center my-10 sm:my-20 md:my-40 py-0 bg-[#7F00FF] w-screen h-auto md:h-128 overflow-hidden">
                        <div className='w-screen'>
                            <div className="w-screen relative">
                                <img className="w-screen rotate-180 h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
                            </div>
                            {/* <div className="bg-[url('./assets/img/gird6.png')] rotate-180 bg-cover bg-no-repeat h-12 sm:h-28 md:h-36"></div> */}
                            <div className="pricing grid grid-cols-1 sm:grid-cols-3 justify-items-center items-center gap-10 px-12 sm:px-2 lg:px-16 sm:gap-1 my-12 m-6 sm:m-0 z-10">
                                <div className="grow pricingheight flex flex-col p-2 sm:p-4 justify-center p-4 w-8/12 sm:w-11/12 md:w-10/12 bg-white rounded-2xl shadow xl:p-4 overflow-hidden z-10">
                                    <div className="flex justify-between items-center">
                                        <div className='w-10/12'>
                                            <h3 className="pricingheading px-2 py-1 font-black text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>
                                                Kontent Edit
                                            </h3>
                                        </div>
                                        <div className='popular w-3/12 text-center relative right-20 top-0 sm:top-0 sm:-left-24 lg:-left-28 lg:-top-4 xl:-top-2 xl:-left-20'>
                                            <div className="pop pb-0 sm:pb-1 w-72 h-6 sm:h-4 md:h-6 bg-black rotate-45 text-sm sm:text-sm md:text-xl font-bold text-white flex justify-center items-center" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>Popular</div>
                                        </div>
                                    </div>
                                    <h1 className="px-2 py-1 pricingdesc text-[#323133] font-[750]">Say Goodbye To<br />
                                        The Stress Of Editing. </h1>
                                    <p className='w-11/12 sm:w-auto px-2 py-1 pricingsub text-black opacity-70'>No more sleepless nights and long video editing hours. </p>
                                    <div className='m-1 mt-4 flex justify-center items-center'>

                                        <button className="h-10 w-96 md:h-14 md:w-96 bg-[#7F00FF] hover:bg-[#6f11cf] text-lg md:text-xl text-white font-bold py-0 sm:py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                                            <Link to="/Kontentedit" onClick={() => window.scrollTo(0, 0)}>
                                                Know More
                                            </Link>
                                        </button>

                                    </div>
                                </div>

                                <Pricingbox hname={Pdata[1].hname} heading={Pdata[6].heading} subheading={Pdata[7].subheading} />
                                <Pricingbox hname={Pdata[2].hname} heading={Pdata[8].heading} subheading={Pdata[9].subheading} />
                            </div>
                            <div className="w-screen relative">
                                <img className="w-screen h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
                            </div>
                            {/* <div className="bg-[url('./assets/img/gird6.png')] bg-cover bg-no-repeat h-12 sm:h-28 md:h-36"></div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
