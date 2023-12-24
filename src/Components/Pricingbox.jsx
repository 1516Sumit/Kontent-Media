import { Link } from "react-router-dom";
// import Pdata from './Pdata';

export default function Pricingbox(props) {
    return (
        <>
            <div className="grow pricingheight flex flex-col p-2 sm:p-4 justify-evenly p-4 w-10/12 max-[420px]:h-auto h-[23rem] w-10/12 md:w-11/12 bg-white rounded-lg border border-gray-100 shadow xl:p-6 overflow-hidden">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
                            <p style={{ fontFamily: 'Archivo' }}>{props.hname}</p>
                        </h3>
                    </div>
                </div>
                <h1 className="p-1 text-2xl lg:text-3xl text-[#323133] font-extrabold" >{props.heading}</h1>
                <p className='p-2 text-sm text-slate-500'>{props.subheading}</p>
                <div className='m-1 flex justify-center items-center'>
                    <button className="h-10 w-96 md:h-14 md:w-96 bg-[#7F00FF] hover:bg-[#6f11cf] text-lg md:text-xl text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                    {/* <section className={type === "kontents2s" ? " " : "hidden"}></section> */}
                        <Link to={ props.hname === 'Kontent S2S' ? '/Kontents2s' : '/Kontentpod' } onClick={() => window.scrollTo(0, 0)}>
                        Know More
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}