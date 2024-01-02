import { Link } from 'react-router-dom'
import Frame from '../assets/img/Frame.png'
import { useState } from "react";
import "./Menu.css";

function Navbar({ second }) {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      {hamburger ? (

        <div className="sidebar text-center visible z-20">
          <li className="x">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setHamburger(!hamburger);
              }}
            >
              <span className="sr-only">Open main menu</span>X
            </button>
          </li>
          <section className={second === "kontentedit" ? "hidden" : ""}>
            <li>
              {" "}
              <Link to="#" className='hover:text-xl'>About Us</Link>
              {" "}
            </li>
            <li>
              {" "}
              <Link to="#" className='hover:text-xl'>Portfolio</Link>

            </li>
            <li>
              <Link to="#" className='hover:text-xl'>Our Services</Link>
            </li>

            <button type="button" className="m-2 mt-20 w-32 h-10 text-black bg-[#FFD93D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-0  border-b-2 border-white-400 hover:border-purple-800" style={{ fontFamily: 'Archivo' }}><Link to='/#contactform'>Let’s Talk</Link></button>
          </section>
          <section className={second === "kontentedit" ? " " : "hidden"}>
            <li>
              {" "}
              <Link to="/Kontentedit" className='hover:text-xl'>Kontent Edit</Link>
              {" "}
            </li>
            <li>
              {" "}
              <Link to="/Kontentpod" className='hover:text-xl'>Kontent Pod</Link>

            </li>
            <li>
              <Link to="/Kontents2s" className='hover:text-xl'>Kontent S2S</Link>
            </li>
           
            <button type="button" className="m-2 mt-20 w-32 h-10 text-black bg-[#FFD93D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-0 border-b-2 border-white-400 hover:border-purple-800" style={{ fontFamily: 'Archivo' }}>
            {" "}
            <a href='#contactform'>Let’s Talk</a>
            </button>
          </section>
        </div>
      ) : (
        <div className='bg-black flex flex-col justify-center w-screen z-20 items-center sticky top-0'>
          <nav className="bg-black mt-4 w-10/12 z-20 border-[#262121] rounded-xl border-x-2 border-b-2">
            <section className={second === "kontentedit" ? "hidden" : ""}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-8">
                <Link to="/" className="flex items-center">
                  <img src={Frame} className="h-10 lg:h-16 w-128 mr-3" alt="Kontent Media Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => {
                  setHamburger(!hamburger);
                }}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-default">
                  <ul className="flex sm:justify-around flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black md:bg-black">
                    <li>
                      <Link to="#" className="block py-2 pl-1 pr-2 lg:pl-3 lg:pr-4 text-gray-400 text-[0.9rem] lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" aria-current="page" style={{ fontFamily: 'Archivo' }}>About Us</Link>
                    </li>
                    <li>
                      <a href="#portfolio" className="block py-2 pl-1 pr-2 lg:pl-3 lg:pr-4 text-gray-400 text-[0.9rem] lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" style={{ fontFamily: 'Archivo' }}>Portfolio</a>
                    </li>
                    <li>
                      <Link to="#" className="block py-2 pl-1 pr-2 lg:pl-3 lg:pr-4 text-gray-400 text-[0.9rem] lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" style={{ fontFamily: 'Archivo' }}>Our Services</Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:flex md:order-2">
                  <button type="button" className="m-2 lg:w-32 lg:h-10 text-white bg-[#7F00FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:focus:ring-blue-800  border-b-2 border-white-400 hover:border-purple-800" style={{ fontFamily: 'Archivo' }}><a href='#letstalk'>Let’s Talk</a></button>
                </div>
              </div>
            </section>

            <section className={second === "kontentedit" ? " " : "hidden"}>
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-8">
                <Link to="/" className="flex items-center">
                  <img src={Frame} className="h-10 lg:h-16 w-128 mr-3" alt="Kontent Media Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => {
                  setHamburger(!hamburger);
                }}>
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-default">
                  <ul className="flex sm:justify-around flex-col p-4 md:p-0 mt-4 font-medium border border-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black md:bg-black">
                    <li>
                      <Link to="/Kontentedit" className="block py-2 pl-1 lg:pl-8 text-gray-400 text-base lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" aria-current="page" style={{ fontFamily: 'Archivo' }}>Kontent Edit</Link>
                    </li>
                    <li>
                      <Link to="/Kontentpod" className="block py-2 pl-1 lg:pl-3 text-gray-400 text-base lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" style={{ fontFamily: 'Archivo' }}>Kontent Pod</Link>
                    </li>
                    <li>
                      <Link to="/Kontents2s" className="block py-2 pl-1 lg:pl-3 text-gray-400 text-base lg:text-xl rounded md:hover:text-[#7F00FF] md:p-0 md:p-0" style={{ fontFamily: 'Archivo' }}>Kontent S2S</Link>
                    </li>
                  </ul>
                </div>
                <div className="hidden md:flex md:order-2">
                  <button type="button" className="m-2 lg:w-32 lg:h-10 text-white bg-[#7F00FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:focus:ring-blue-800  border-b-2 border-white-400 hover:border-purple-800" style={{ fontFamily: 'Archivo' }}><a href='#contacform'>Let’s Talk</a></button>
                </div>
              </div>
            </section>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar