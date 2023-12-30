// import Pricingboxsecond from './Pricingboxsecond.jsx'
import { Link } from "react-router-dom";
// import "./pricingsecond.css";
// import Pdata from "./Pdata.jsx";
import { useState } from 'react';
// import Leverage from "./Levrage";
// import grid6 from '../assets/img/gridnew2.png';


import '../App.css'

export default function Klassic({ hname, page }) {
    const [eigthClicked, seteightClicked] = useState(false);
    const [tenthClicked, setTenthClicked] = useState(false);
    const [twelveClicked, setTwelveClicked] = useState(false);
    const [fifteenClicked, setFifteenClicked] = useState(true);
    const [twentyClicked, setTwentyClicked] = useState(false);
    const [thirtyClicked, setThirtyClicked] = useState(false);
    const [price, setPrice] = useState("$ 1,999 /-")
    return (
        <>
            <section style={{ width: "100%" }} className={page === "edit" ? " " : "hidden"}>
                <div className="grow box flex flex-col justify-center md:justify-center p-3 w-10/12 md:w-11/12 bg-white rounded-lg xl:p-4 2xl:p-6 overflow-hidden h-[28rem] z-10">
                    <div className="flex justify-between items-center">
                        <div className="w-10/12">
                            <h3
                                className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]"
                                style={{ fontFamily: "Archivo" }}
                            >
                                <p style={{ fontFamily: "Archivo" }}>{hname}</p>
                            </h3>
                        </div>

                        <div className="popular1 w-2/12 text-center relative right-20 top-3 md:top-0 md:-left-24 sm:bottom-0 lg:-left-20 lg:top-0 xl:top-3 xl:-left-18">
                            <div className="pb-1 w-52 h-6 bg-black rotate-45 text-xl font-bold text-white flex justify-center items-center" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                                Popular
                            </div>
                        </div>
                    </div>

                    <p className="px-2 py-1 text-base text-black font-semibold opacity-70">
                        {" "}
                        → Best For Reels / Shorts
                        <br />
                        → Custom Thumbnails
                        <br />
                        → Dedicated Team
                        <br />
                        → Content Consultation Calls
                        <br />
                        → Unique Edits - Change
                        <br />
                        → 2X Revisions
                        <br />
                        → X- Distribution
                        <br />
                        → X - Personal Manager
                        <br />
                        → X - Long Form Video Editing
                    </p>


                    <div style={{ textAlign: "right", width: "95%" }}>
                        <p style={{ color: "#7F00FF" }}>Videos</p>
                    </div>
                    <div className="button-containerKlassic text-black w-full md:w-11/12 2xl:h-auto">
                        <div
                            className={`rectangular-buttonKlasic ${eigthClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                seteightClicked(!eigthClicked);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 999 /-');
                            }}
                        >
                            8
                        </div>
                        <div className="line"></div>

                        <div
                            className={`rectangular-buttonKlasic ${tenthClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTenthClicked(!tenthClicked);
                                seteightClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 2,999 /-');
                            }}
                        >
                            10
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${twelveClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTwelveClicked(!twelveClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 3,999 /-');
                            }}
                        >
                            12
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${fifteenClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFifteenClicked(!fifteenClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 1,999 /-');
                            }}
                        >
                            15
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${twentyClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTwentyClicked(!twentyClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 5,999 /-');
                            }}
                        >
                            20
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${thirtyClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setThirtyClicked(!thirtyClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setPrice('$ 6,999 /-');
                            }}
                        >
                            30
                        </div>
                    </div>
                    <div className="m-1 flex justify-center items-center">
                        <p className="price">
                            {price}
                        </p>
                        <button
                            className="flex items-center justify-center h-10 w-2/4 xl:h-12 2xl:h-14 md:w-2/4 bg-[#7F00FF] hover:bg-[#6f11cf] text-base xl:text-lg 2xl:text-xl text-white font-bold py-2 px-1 border-b-2 border-white-400 hover:border-purple-800 rounded-lg"
                            style={{ fontFamily: "Archivo" }}
                        >
                            <Link to="./Kontentedit">Subscribe</Link>
                        </button>
                    </div>
                </div>
            </section>
            <section className={page === "pod" ? " " : "hidden"}>
                <div className="grow box flex flex-col justify-center md:justify-center p-3 w-10/12 md:w-10/12 bg-white rounded-lg xl:p-4 2xl:p-6 overflow-hidden h-[20rem] z-10">
                    <div className="flex justify-between items-center">
                        <div className="w-10/12">
                            <h3
                                className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]"
                                style={{ fontFamily: "Archivo" }}
                            >
                               <p style={{ fontFamily: "Archivo" }}>{hname}</p>
                            </h3>
                        </div>

                        <div className="popular1 w-2/12 text-center relative right-20 top-3 md:top-0 md:-left-24 sm:bottom-0 lg:-left-20 lg:top-0 xl:top-3 xl:-left-18">
                            <div className="pb-1 w-52 h-6 bg-black rotate-45 text-xl font-bold text-white flex justify-center items-center" style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                                Popular
                            </div>
                        </div>
                    </div>
                    <p className="p-2 text-base text-black font-semibold opacity-70">
                        {" "}
                        → No Distribution
                        <br />
                        → No Thumbnails
                        <br />
                        → Limited Revisions
                        <br />
                        → Podcast Trailer
                    </p>


                    <div style={{ textAlign: "right", width: "95%" }}>
                        <p style={{ color: "#7F00FF" }}>Videos</p>
                    </div>
                    <div className="button-containerKlassic text-black w-full md:w-11/12 2xl:h-auto">
                        <div
                            className={`rectangular-buttonKlasic ${eigthClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                seteightClicked(!eigthClicked);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 999 /-');
                            }}
                        >
                            8
                        </div>
                        <div className="line"></div>

                        <div
                            className={`rectangular-buttonKlasic ${tenthClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTenthClicked(!tenthClicked);
                                seteightClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 2,999 /-');
                            }}
                        >
                            10
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${twelveClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTwelveClicked(!twelveClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 3,999 /-');
                            }}
                        >
                            12
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${fifteenClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setFifteenClicked(!fifteenClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setTwentyClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 1,999 /-');
                            }}
                        >
                            15
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${twentyClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setTwentyClicked(!twentyClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setThirtyClicked(false);
                                setPrice('$ 5,999 /-');
                            }}
                        >
                            20
                        </div>
                        <div className="line"></div>
                        <div
                            className={`rectangular-buttonKlasic ${thirtyClicked ? 'clicked' : ''}`}
                            onClick={() => {
                                setThirtyClicked(!thirtyClicked);
                                seteightClicked(false);
                                setTenthClicked(false);
                                setTwelveClicked(false);
                                setFifteenClicked(false);
                                setTwentyClicked(false);
                                setPrice('$ 6,999 /-');
                            }}
                        >
                            30
                        </div>
                    </div>
                    <div className="m-1 flex justify-center items-center">
                        <p className="price">
                            {price}
                        </p>
                        <button
                            className="flex items-center justify-center h-10 w-2/4 xl:h-12 2xl:h-14 md:w-2/4 bg-[#7F00FF] hover:bg-[#6f11cf] text-base xl:text-lg 2xl:text-xl text-white font-bold py-2 px-1 border-b-2 border-white-400 hover:border-purple-800 rounded-lg"
                            style={{ fontFamily: "Archivo" }}
                        >
                            <Link to="./Kontentedit">Subscribe</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}