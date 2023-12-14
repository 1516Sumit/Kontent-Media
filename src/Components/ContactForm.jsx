// import React from 'react'
import Fb from "../assets/img/fb.png";
import Ig from "../assets/img/ig.png";
import Ln from "../assets/img/ln.png";
import Tw from "../assets/img/tw.png";

import '../App.css'
function ContactForm() {
  return (
    <div id="contactform" className="flex justify-center items-center flex-col bg-[#FFD93D] w-screen section md:pt-12 ">
      <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat rotate-180 h-16 sm:h-28 lg:h-33 w-screen"></div>
      <div className="bg-black shadow w-10/12 h-auto overflow-hidden rounded-xl" >
        <div className='h-1 top-0 md:pt-8' style={{backgroundColor:'#7F00FF'}}></div>
        <div className="grid md:grid-cols-2 ">

        <div className="text-gray-50 mx-auto my-auto py-16 ">
          <h1
            className="px-12 sm:px-0 mb-4 text-4xl leading-none tracking-tight md:text-4xl lg:text-5xl xs:ml-8 xxs:ml-3"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Let us discuss your <br />
            marketing strategy!{" "}
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
            style={{
              marginTop: 35,
              width: 210,
              height: 160,
              textAlign: "left",
              color: "gray",
            }}
            className="xs:ml-8 xxs:ml-3 px-12 sm:px-0"
          >
            Org.nr:559264-1871 <br />
            Lunar Holding LDA <br />
            info@lunarstrategy.com +467-20458390
            <br />
          </div>
          <div
            style={{
              width: 162,
              height: 24,
              display: "flex",
              justifyContent: "space-between",
            }}
            className="xs:ml-8 xxs:ml-3 ml-12 sm:ml-0"
          >
            <img src={Fb} style={{ height: 24, width: 24 }} />
            <img src={Tw} style={{ height: 24, width: 24 }} />
            <img src={Ln} style={{ height: 24, width: 24 }} />
            <img src={Ig} style={{ height: 24, width: 24 }} />
          </div>

          <button
            className=" w-9/12 sm:w-11/12 my-10 h-14 ml-12 sm:ml-0 xs:w-56 xs:ml-8 xxs:ml-4 xxs:w-52"
            style={{
              border: "1px solid #7F00FF",
              color: "#7F00FF",
              borderRadius: 15,
            }}
          >
            Book a free consultation
          </button>
        </div>
        <div className="max-h-498.18 max-w-452.14 mx-auto my-auto py-5" style={{width:'70%'}}>
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
                placeholder="Name"
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
                placeholder="Email"
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
                placeholder="Subject"
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
                placeholder="Message"
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
              Send
            </button>
          </form>
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-16 sm:h-28 lg:h-36 w-screen"></div>
    </div>
    
  );
}

export default ContactForm;