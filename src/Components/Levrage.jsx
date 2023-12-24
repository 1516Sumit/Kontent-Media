import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Leverage({ hname, page }) {
    const [firstClicked, setFirstClicked] = useState(false);
    const [secondClicked, setSecondClicked] = useState(true);
    const [thirdClicked, setThirdClicked] = useState(false);

    return (
        <>
            <div className="grow box flex flex-col justify-evenly md:justify-center p-3 w-10/12 md:w-11/12 bg-white rounded-lg border border-gray-100 shadow xl:p-4 2xl:p-6 overflow-hidden standard">
                <div className="flex justify-between items-center">
                    <div className="lev">
                        <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
                            <div className="pro">Pro</div>
                            <p style={{ fontFamily: "Archivo" }}>{hname}</p>
                        </h3>
                    </div>
                </div>
                <section className={page === "edit" ? " " : "hidden"}>
                    <p className="p-2 text-sm text-slate-500">
                        → Everything in Standard+
                        <br />
                        → 24/7 Support
                        <br />
                        → Unlimted Reels
                        <br />
                        → Faster Delivery
                        <br />
                        → Bonus Hooks and Templates

                    </p>
                </section>
                <section className={page === "pod" ? " " : "hidden"}>
                    <p className="p-2 text-sm text-slate-500">
                        → Standard Plan With
                        <br />
                        → Production Stuff
                        <br />
                        → Price On Discovery Call
                    </p>
                </section>
                <section className={page === "s2s" ? " " : "hidden"}>
                <p className="p-2 text-sm text-slate-500">
                        → Standard Plan With
                        <br />
                        → Production Stuff
                        <br />
                        → Price On Discovery Call
                    </p>
                </section>
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
                <div className='m-1 flex justify-center items-center'>

                    <button className="flex justify-center items-center m-1 mt-2 h-10 w-96 md:h-14 md:w-96 bg-[#7F00FF] hover:bg-[#6f11cf] text-lg md:text-xl text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg" style={{ fontFamily: 'Archivo' }}>
                        <Link to="./Kontentedit">
                            Subscribe
                        </Link>
                    </button>

                </div>
            </div>

        </>
    );
}