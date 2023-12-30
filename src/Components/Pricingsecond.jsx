import Pricingboxsecond from './Pricingboxsecond.jsx'
// import { Link } from "react-router-dom";
import "./pricingsecond.css";
// import Pdata from "./Pdata.jsx";
// import { useState } from 'react';
import Leverage from "./Levrage";
import Klassic from "./Klassic";
import grid6 from '../assets/img/gridnew2.png';


import '../App.css'

export default function Pricingsecond({ type }) {


  return (
    <>
      <section id='pricingbox' className="fadef bg-black w-screen h-auto flex justify-center items-center">
        <div className="pricingsecond bg-[#FFD93D] my-24 rounded-3xl md:rounded-large flex justify-center items-center h-auto md:h-screen">
          <div className="flex justify-center items-center my-10 sm:my-20 md:my-40 py-0 bg-[#7F00FF] w-screen h-auto md:h-5/6 2xl:h-126 overflow-hidden">
            <div>
              <div className="w-screen relative">
                <img className="w-screen rotate-180 h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
              </div>
              {/* <div className="bg-[url('./assets/img/gird6.png')] rotate-180 bg-cover bg-no-repeat h-20 sm:h-36"></div> */}
              <div className="pricing1 grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-10 md:pl-14 md:gap-1 my-12 sm:m-0 z-10">
               
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentedit" ? " " : "hidden"}>
                  <Klassic hname="Klassic" page={"edit"} />
                </section>
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentedit" ? " " : "hidden"}>
                  <Pricingboxsecond hname="Standard" page={"edit"} />
                </section>
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentedit" ? " " : "hidden"}>
                  <Leverage hname="Leverage" page={"edit"} />
                </section>
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentpod" ? " " : "hidden"}>
                  <Klassic hname="Klassic" page={"pod"} />
                </section>
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentpod" ? " " : "hidden"}>
                  <Pricingboxsecond hname="Standard" page={"pod"} />
                </section>
                <section style={{ width: "100%", zIndex:"10" }} className={type === "kontentpod" ? " " : "hidden"}>
                  <Leverage hname="Leverage" page={"pod"} />
                </section>
               
              </div>
              <div className="w-screen relative">
                <img className="w-screen h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
              </div>
              {/* <div className="bg-[url('./assets/img/gird6.png')] bg-cover bg-no-repeat h-20 sm:h-36"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}