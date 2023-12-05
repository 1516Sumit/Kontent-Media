import { Link } from 'react-router-dom';
import './navbarsecond.css'
function Navbarsecond() {
    return (
        <>
            <div className='navbar bg-black flex justify-center w-screen h-10  lg:h-16 z-10 items-center sticky p-9 sm:pt-14 md:pt-10'>
                <nav className="bg-black w-7/12 h-10 lg:h-16 flex justify-center items-center z-20 border-slate-400 rounded-xl border-x-2 border-b-2">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-1 sm:p-2">
                        <div className="items-center flex w-auto order-1" id="navbar-sticky">
                            <ul className="flex justify-around p-0 font-medium border-black rounded-lg flex-row space-x-0 sm:space-x-8 mt-0 md:border-0 bg-black">
                                <li>
                                    <Link to="/Kontentedit" className="Kontent block py-1 text-center text-[#FCFCF9] rounded hover:text-[#7F00FF] px-1 sm:px-3 md:p-0 text-sm md:text-base" aria-current="page" style={{ fontFamily: 'Archivo' }}>Kontent Edit</Link>
                                    
                                </li>
                                <li>
                                    <Link to="#" className="Kontent block py-1 text-center text-[#FCFCF9] rounded hover:text-[#7F00FF] px-1 sm:px-3 md:text-[#FCFCF9] md:p-0 text-sm md:text-base" style={{ fontFamily: 'Archivo' }}>Kontent Pod</Link>
                                </li>
                                <li>
                                    <Link to="#" className="Kontent block py-1 text-center text-[#FCFCF9] rounded hover:text-[#7F00FF] px-2 sm:px-0 md:text-[#FCFCF9] md:p-0 text-sm md:text-base" style={{ fontFamily: 'Archivo' }}>Kontent S2S</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbarsecond