import { Link } from "react-router-dom";
// import Pdata from './Pdata';

export default function Pricingbox(props) {
    return (
        <>
            <div className="grow pricingheight flex flex-col p-2 sm:p-4 justify-center p-4 w-8/12 sm:w-11/12 md:w-10/12 bg-white rounded-2xl border border-gray-100 shadow xl:p-4 overflow-hidden z-10">
                <div className="flex justify-between items-center">
                    <div className="w-10/12">
                        <h3 className="pricingheading px-2 py-1 font-black text-[#7F00FF]">
                            <p style={{ fontFamily: 'Archivo' }}>{props.hname}</p>
                        </h3>
                    </div>
                    <div className="w-3/12">
                        <p className="text-transparent popular w-3/12 text-center">nbnbj</p>
                    </div>
                </div>
                <h1 className="px-[0.6rem] py-1 pricingdesc text-[#323133] font-[750]" style={{ whiteSpace: "pre-line" }}>{props.heading}</h1>
                <p className='w-12/12 sm:w-auto px-2 py-1 pricingsub text-black opacity-70'>{props.subheading}</p>
                <div className='m-1 mt-4 flex justify-center items-center'>
                    <button className="h-10 w-96 md:h-14 md:w-96 bg-[#7F00FF] hover:bg-[#6f11cf] text-lg md:text-xl text-white font-bold py-0 sm:py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                        {/* <section className={type === "kontents2s" ? " " : "hidden"}></section> */}
                        <Link to={props.hname === 'Kontent S2S' ? '/Kontents2s' : '/Kontentpod'} onClick={() => window.scrollTo(0, 0)}>
                            Know More
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}