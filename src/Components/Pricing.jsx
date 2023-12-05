import Pricingbox from './Pricingbox';
import { Link } from 'react-router-dom';
import './pricing.css';
import Pdata from './Pdata';

export default function Pricing() {
    return (
        <>
            <section className="bg-black w-screen h-auto flex justify-center items-center">
                <div className="bg-[#FFD93D] my-24 rounded-3xl md:rounded-large flex justify-center items-center h-auto md:h-screen">
                    <div className="flex justify-center items-center my-10 sm:my-20 md:my-40 py-0 bg-[#7F00FF] w-screen h-auto md:h-130 overflow-hidden">
                        <div className='w-screen'>
                        <div className="bg-[url('./assets/img/grid2.png')] rotate-180 bg-cover bg-no-repeat h-12 sm:h-24"></div>
                            <div className="pricing grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-10 sm:px-28 md:px-2 lg:px-16 md:gap-1 my-12 sm:m-12 md:m-0">
                                <div className="flex flex-col p-4 w-11/12 scale-105 bg-white rounded-lg shadow xl:p-6 overflow-hidden z-10">
                                    <div className="flex justify-between items-center">
                                        <div className='w-10/12'>
                                            <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>
                                                Kontent Edit
                                            </h3>
                                        </div>
                                        <div className='popular w-2/12 text-center relative right-20 top-3 md:top-0 md:-left-24 lg:-left-20 lg:top-0 xl:top-3 xl:-left-18'>
                                            <div className="pb-1 w-52 h-6 bg-black rotate-45 text-xl font-bold text-white flex justify-center items-center" style={{ boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>Popular</div>
                                        </div>
                                    </div>
                                    <h1 className="p-2 text-2xl lg:text-3xl text-[#323133] font-extrabold">Go viral with<br /> better branded <br />videos.</h1>
                                    <p className='p-2 text-sm text-slate-500'>Many of these bussiness ideasare home-<br />based. While they may not</p>
                                    <div className='m-1 flex justify-center items-center'>

                                        <button className="h-10 w-96 md:h-14 md:w-96 bg-[#7F00FF] hover:bg-[#6f11cf] text-lg md:text-xl text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                                            <Link to="./Kontentedit">
                                                Subscribe
                                            </Link>
                                        </button>

                                    </div>
                                </div>

                                <Pricingbox hname={Pdata[1].hname} />
                                <Pricingbox hname={Pdata[2].hname} />
                            </div>
                            <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-12 sm:h-24"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
