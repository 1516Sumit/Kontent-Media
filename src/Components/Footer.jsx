import { Link } from 'react-router-dom';
// import Fb from "../assets/img/fb.png";
import Ig from "../assets/img/ig.png";
import Ln from "../assets/img/ln.png";
// import Tw from "../assets/img/tw.png";

function Footer({ type }) {
    return (
        <>
            <footer className="fadef bg-[#FFD93D] w-screen h-auto">
                <div className=" bg-[url('./assets/img/BG.png')] bg-cover">
                    {/* <div className=" bg-black clip-path-mypolygon"> */}
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between mt-24">
                            <div className="mb-2 md:mb-0">
                                <section className={type === "kontentedit" ? "hidden" : ""}>
                                    <p className="my-4 mt-10 font-Inter font-medium text-white text-xl sm:text-2xl">Tell us where you are and where <br />you want to be.</p>

                                    <p className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                        We’ll
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> help you </span>
                                        <br />
                                        get
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  there. </span>
                                    </p>
                                </section>
                                <section className={type === "kontentedit" ? "" : "hidden"}>
                                    <p className="hidden min-[395px]:block self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                        Create your
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> unfair </span>
                                        <br /> advantage with
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> videos <br />that work </span>
                                    </p>
                                    <p className="block min-[395px]:hidden self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                        Create your
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> unfair </span>
                                        <br /> advantage 
                                        <span className="self-center text-4xl sm:text-5xl tracking-tight font-semibold font-Archivo whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> with <br />videos</span> that work 
                                    </p>
                                </section>

                                <div style={{ width: 162, height: 24, display: "flex", justifyContent: "flex-start" }} className="xs:ml-8 xxs:ml-3 mt-6">
                                    <a target='blank' href='https://www.instagram.com/kontentmedia_in/'>
                                        <img src={Ln} style={{ height: 24, width: 24 }} />
                                    </a>
                                    <a target='blank' href='https://www.instagram.com/kontentmedia_in/'>                                      <img src={Ig} style={{ height: 24, width: 24, marginLeft: 15 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-rows-1 md:items-end md:justify-items-end">
                                <div className="mt-5 grid grid-cols-1 gap-8 sm:gap-4 sm:grid-rows-2  md:items-end md:justify-items-end mb-5 md:mb-14">
                                    <button className="h-14 w-48 md:w-36 bg-[#7F00FF] hover:bg-[#6f11cf] text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                        <a href='#letstalk'>Let’s Talk</a></button>

                                    <button className="h-14 w-48 md:w-52 flex justify-center items-center bg-[#7F00FF] hover:bg-[#6f11cf] text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 relative right-3"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        Whatsapp Now
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 gap-0 sm:gap-6 sm:grid-cols-3">
                                    <div>
                                        <ul className="text-sm text-slate-200 font-medium font-Inter">
                                            <li className="mb-2">
                                                <Link href="https://flowbite.com/" className="hover:underline">Blog</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="text-sm text-slate-200 font-medium font-Inter">
                                            <li className="mb-2">
                                                <Link to="/Career" onClick={() => window.scrollTo(0, 0)} className="hover:underline">Career</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="text-sm text-slate-200 font-medium font-Inter">
                                            <li className="mb-2">
                                                <Link href="#" className="hover:underline"> email now</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-2 border-white-800 sm:mx-auto lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between mb-12">
                            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                                <a href="#" className="text-sm text-slate-200 dark:hover:text-white font-Inter">
                                    Terms & Conditions
                                </a>
                                <a href="#" className="text-sm text-slate-200 dark:hover:text-white font-Inter">
                                    Privacy Policy
                                </a>
                            </div>
                            <span className="text-sm text-slate-200 sm:text-center font-Inter">© Copyright 2022 <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer