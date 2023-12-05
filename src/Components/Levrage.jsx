import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Leverage(props) {
    const [firstClicked, setFirstClicked] = useState(false);
    const [secondClicked, setSecondClicked] = useState(true);
    const [thirdClicked, setThirdClicked] = useState(false);

    return (
        <>
            <div className="box flex flex-col p-3 lg:w-10/12 xl:w-9/12 bg-white rounded-lg border border-gray-100 shadow xl:p-4 2xl:p-6 overflow-hidden standard">
                <div className="flex justify-between items-center">
                    <div className="lev">
                        <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
                            <div className="pro">Pro</div>
                            <p style={{ fontFamily: "Archivo" }}>{props.hname}</p>
                        </h3>
                    </div>
                </div>
                <p className="p-2 text-sm text-slate-500">
                    →Many of these business ideas are home-based.
                    <br />
                    →Many of these business ideas are
                    <br />
                    →Many of these business ideas are home-based.
                    <br />
                    →Many of these business ideas are
                    <br />
                    →Many of these business ideas are home-based.

                </p>
                <p className="text1">Unlimited Reels _100 min Youtube Editing</p>
                <div className="button-container">
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