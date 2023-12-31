// import React from 'react'
import Marquee from "react-fast-marquee";
// import logos from "../assets/img/8_1sasa11.jpg";
// import aven from "../assets/img/aven.png";
// import circllogo from "../assets/img/circle logo.png";
// import company from "../assets/img/company.avif";
// import pakshi from "../assets/img/pakshi.jpg";
import grid6 from '../assets/img/gridnew2.png';

import '../App.css'
function ContactForm() {
  return (
    <div id="contacform" className="fade flex justify-center items-center flex-col bg-[#FFD93D] w-screen overflow-hidden">
      <div className="w-screen relative">
        <img className="w-screen rotate-180 h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
      </div>
      {/* <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat rotate-180 h-16 sm:h-28 lg:h-33 w-screen"></div> */}
      <div className="bg-black shadow flex flex-col justify-between w-11/12 h-auto overflow-hidden rounded-xl" >
        <div className='h-1 top-0 md:pt-2' style={{ backgroundColor: '#7F00FF' }}></div>
        <div className="grid md:grid-cols-2 ">

          <div className="text-gray-50 mx-auto my-auto pt-16 pb-8 md:pb-16">
            <h1
              className="px-12 sm:px-0 mb-4 leading-none tracking-tight text-4xl md:text-3xl lg:text-3xl xl:text-4xl xs:ml-8 xxs:ml-3"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              Tell us where you are and <br />
              where you want to be. {" "}
            </h1>
            <hr
              style={{
                borderColor: "#7F00FF",
                borderWidth: 1.7,
                width: 89,
                marginTop: 19,
              }}
              className="xs:ml-8 xxs:ml-3 mx-12 sm:mx-0"
            />
            <div
              style={{ textAlign: "left" }}>
              <p className="contactDes px-12 sm:px-0 pt-4 lg:my-5 font-Inter font-medium text-white text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl ">We’ll help you get there.</p>
              <p className="py-4 px-12 sm:px-0 pt-4 lg:my-5 font-Inter font-medium text-white text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">You’re in good company:
              </p>
            </div>

            {/* <div className="flex justify-start md:justify-between items-start flex-row sm:flex-col gap-10 ml-14 sm:ml-2 md:ml-1">
              <div className="flex flex-col sm:flex-row items-center justify-evenly gap-10">
                <img src={company} className="w-20" />
                <img src={aven} className="w-20" />
                <img src={circllogo} className="w-20" />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-evenly gap-10">
                <img src={circllogo} className="w-20" />
                <img src={logos} className="w-20" />
                <img src={pakshi} className="w-20" />
              </div>
            </div> */}
          </div>
          <div className="max-h-498.18 max-w-452.14 mx-auto my-auto py-6 pl-8 pr-0 md:pr-4 md:pr-0 w-11/12 sm:w-[70%]">
            <p
              style={{
                color: "white",
                textAlign: "left",
                marginBottom: "2.5%",
              }}
              className="xs:ml-2"
            >
              Or you can also contact us here
            </p>
            <form >
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 h-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:ml-2"
                  placeholder="FIRST NAME"
                  required
                  style={{
                    border: "1px solid gray",
                    backgroundColor: "black"
                  }}
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 h-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:ml-2"
                  placeholder="LAST NAME"
                  required
                  style={{
                    border: "1px solid gray",
                    backgroundColor: "black"
                  }}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-11/12 h-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:ml-2"
                  placeholder="COMPANY EMAIL"
                  required
                  style={{
                    border: "1px solid gray",
                    backgroundColor: "black"
                  }}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="repeat-password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-11/12 h-14 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:ml-2"
                  placeholder="MONTHLY BUDGET"
                  required
                  style={{
                    border: "1px solid gray",
                    backgroundColor: "black",
                  }}
                />
              </div>
              <div className="mb-2 ">
                <textarea
                  type="text"
                  id="large-input"
                  placeholder="YOUR MESSAGE"
                  className="block h-28 p-2.5  w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 xs:ml-2"
                  style={{
                    resize: "none",
                    borderRadius: 10,
                    border: "1px solid gray",
                    backgroundColor: "black"
                  }}
                />
              </div>
              <button
                type="submit"
                className="text-white  w-11/12 bg-blue-700 hover:bg-blue-800 focus:ring-4 h-14 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 xs:ml-2 xxs:ml-2"
                style={{
                  backgroundColor: "#7F00FF",
                  color: "white",
                  fontStyle: "italic",
                  fontWeight: 100,
                }}
              >
                Let’s go!
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-screen relative">
        <div className="absolute top-4 sm:top-20">
          <Marquee pauseOnHover autoFill={true} speed={50}><span className="m-4">Visuals 60,000X impact than text.</span></Marquee>
        </div>
      </div>
      <div className="w-screen relative">
        <img className="w-screen h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
      </div>
      {/* <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-16 sm:h-28 lg:h-36 w-screen"></div> */}
    </div>

  );
}

export default ContactForm;