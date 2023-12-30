import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Leverage({ hname, page }) {
    const [firstClicked, setFirstClicked] = useState(false);
    const [secondClicked, setSecondClicked] = useState(true);
    const [thirdClicked, setThirdClicked] = useState(false);

    return (
        <>
            <section className={page === "edit" ? " " : "hidden"}>
                <div className="grow box flex flex-col justify-center md:justify-center p-3 w-10/12 md:w-11/12 bg-white rounded-lg shadow xl:p-4 2xl:p-6 overflow-hidden h-[28rem] z-10">
                    <div className="flex justify-between items-center">
                        <div className="lev">
                            <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
                                <div className="pro">Pro</div>
                                <p style={{ fontFamily: "Archivo" }}>{hname}</p>
                            </h3>
                        </div>
                    </div>

                    <p className="p-2 text-base text-black font-semibold opacity-70">
                        → Everything in Standard+
                        <br />
                        → 24/7 Support
                        <br />
                        → Unlimted Reels
                        <br />
                        → Faster Delivery
                        <br />
                        → Bonus Hooks and Templates
                        <br />
                        → Bonus Hooks and Templates
                        <br />
                        → Bonus Hooks and Templates
                        <br />
                        → Bonus Hooks and Templates
                        <br />
                        → Bonus Hooks and Templates
                    </p>

                    <p className="text1">Unlimited Reels _100 min Youtube Editing</p>
                    <div className="button-container w-full md:w-11/12 2xl:h-auto">
                        <div
                            className={`rectangular-button ${firstClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(!firstClicked);
                                setSecondClicked(false);
                                setThirdClicked(false);
                            }}
                        >
                            $ 5,499/- <br />Monthly
                        </div>
                        <div className="line2"></div>
                        <div
                            className={`rectangular-button ${secondClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(false);
                                setSecondClicked(!secondClicked);
                                setThirdClicked(false);
                            }}
                        >
                            $ 5,499/- <br />Quaterly
                        </div> <div className="line2"></div>
                        <div
                            className={`rectangular-button ${thirdClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(false);
                                setSecondClicked(false);
                                setThirdClicked(!thirdClicked);
                            }}
                        >
                            $ 5,499/- <br />Yearly
                        </div>

                    </div>
                    <div className='m-1 mb-2 flex justify-center items-center'>

                        <button className="flex items-center justify-center h-10 h w-96 xl:h-12 2xl:h-14 bg-[#7F00FF] hover:bg-[#6f11cf] text-base xl:text-lg 2xl:text-xl text-white font-bold py-2 px-1 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                            <Link to="./Kontentedit">
                                Subscribe
                            </Link>
                        </button>

                    </div>
                </div>
            </section>

            <section className={page === "pod" ? " " : "hidden"}>
                <div className="grow box flex flex-col justify-center md:justify-center p-3 w-10/12 md:w-10/12 bg-white rounded-lg shadow xl:p-4 2xl:p-6 overflow-hidden h-[20rem] z-10">
                    <div className="flex justify-between items-center">
                        <div className="lev">
                            <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
                                <div className="pro">Pro</div>
                                <p style={{ fontFamily: "Archivo" }}>{hname}</p>
                            </h3>
                        </div>
                    </div>

                    <p className="p-2 text-base text-black font-semibold opacity-70">
                        → Standard Plan With
                        <br />
                        → Production Stuff
                        <br />
                        → Price On Discovery Call
                        <br />
                        → Price On Discovery Call
                    </p>

                    <p className="text1">Unlimited Reels _100 min Youtube Editing</p>
                    <div className="button-container w-full md:w-11/12 2xl:h-auto">
                        <div
                            className={`rectangular-button ${firstClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(!firstClicked);
                                setSecondClicked(false);
                                setThirdClicked(false);
                            }}
                        >
                            $ 5,499/- <br />Monthly
                        </div>
                        <div className="line2"></div>
                        <div
                            className={`rectangular-button ${secondClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(false);
                                setSecondClicked(!secondClicked);
                                setThirdClicked(false);
                            }}
                        >
                            $ 5,499/- <br />Quaterly
                        </div> <div className="line2"></div>
                        <div
                            className={`rectangular-button ${thirdClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFirstClicked(false);
                                setSecondClicked(false);
                                setThirdClicked(!thirdClicked);
                            }}
                        >
                            $ 5,499/- <br />Yearly
                        </div>

                    </div>
                    <div className='m-1 mb-2 flex justify-center items-center'>

                        <button className="flex items-center justify-center h-10 h w-96 xl:h-12 2xl:h-14 bg-[#7F00FF] hover:bg-[#6f11cf] text-base xl:text-lg 2xl:text-xl text-white font-bold py-2 px-1 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                            <Link to="./Kontentedit">
                                Subscribe
                            </Link>
                        </button>

                    </div>
                </div>
            </section>

        </>
    );
}