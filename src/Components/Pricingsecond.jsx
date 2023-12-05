import Pricingboxsecond from './Pricingboxsecond.jsx'
import { Link } from "react-router-dom";
import "./pricingsecond.css";
import Pdata from "./Pdata.jsx";
import { useState } from 'react';
import Leverage from "./Levrage";

import '../App.css'

export default function Pricingsecond() {
  const [eigthClicked, seteightClicked] = useState(false);
  const [tenthClicked, setTenthClicked] = useState(false);
  const [twelveClicked, setTwelveClicked] = useState(false);
  const [fifteenClicked, setFifteenClicked] = useState(true);
  const [twentyClicked, setTwentyClicked] = useState(false);
  const [thirtyClicked, setThirtyClicked] = useState(false);
  const [price, setPrice] = useState("$ 1,999 /-")

  return (
    <>
      <section className="bg-black w-screen h-auto flex justify-center items-center section">
        <div className="bg-[#FFD93D] my-24 rounded-3xl md:rounded-large flex justify-center items-center h-auto md:h-screen">
          <div className="flex justify-center items-center my-10 sm:my-20 md:my-40 py-0 bg-[#7F00FF] w-screen h-auto md:h-5/6 2xl:h-126 overflow-hidden">
            <div className="w-screen">
              <div className="bg-[url('./assets/img/grid2.png')] rotate-180 bg-cover bg-no-repeat h-12 sm:h-24"></div>
              <div className="pricing1 grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-10 sm:px-28 md:px-2 lg:px-16 md:gap-1 my-12 sm:m-12 md:m-0">
                <div className="box flex flex-col p-3 lg:w-10/12 xl:w-9/12 scale-105 bg-white rounded-lg xl:p-4 2xl:p-6 overflow-hidden z-5 h-auto">
                  <div className="flex justify-between items-center">
                    <div className="w-10/12">
                      <h3
                        className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]"
                        style={{ fontFamily: "Archivo" }}
                      >
                        Klassic
                      </h3>
                    </div>

                    <div className="popular w-2/12 text-center relative right-20 top-3 md:top-0 md:-left-24 sm:bottom-0 lg:-left-20 lg:top-0 xl:top-3 xl:-left-18">
                      <div className="pb-1 w-52 h-6 bg-black rotate-45 text-xl font-bold text-white flex justify-center items-center" style={{ boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
                        Popular
                      </div>
                    </div>
                  </div>
                  <p className="p-2 text-sm text-slate-500">
                    {" "}
                    →Many of these business ideas are home-based.
                    <br />
                    →Many of these business ideas are
                    <br />
                    →Many of these business ideas are home-based.
                    <br />
                    →Many of these business ideas are
                    <br />
                    →Many of these business ideas are home-based.
                    <br />
                    →Many of these business ideas are
                  </p>
                  <div style={{ textAlign: "right", width: "95%" }}>
                    <p style={{ color: "#7F00FF" }}>Videos</p>
                  </div>
                  <div className="button-container w-full md:w-11/12 2xl:h-auto">
                    <div
                      className={`circular-button ${eigthClicked ? 'clicked' : ''}`}
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
                      className={`circular-button ${tenthClicked ? 'clicked' : ''}`}
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
                      className={`circular-button ${twelveClicked ? 'clicked' : ''}`}
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
                      className={`circular-button ${fifteenClicked ? 'clicked' : ''}`}
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
                      className={`circular-button ${twentyClicked ? 'clicked' : ''}`}
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
                      className={`circular-button ${thirtyClicked ? 'clicked' : ''}`}
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

                <Pricingboxsecond hname={Pdata[4].hname} />
                <Leverage hname={Pdata[5].hname} />

              </div>
              <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-12 sm:h-24"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}