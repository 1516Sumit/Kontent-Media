import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom'
import Circle from '../assets/img/circle.png'
import '../App.css'
import grid6 from '../assets/img/gridnew2.png';
function BookACall() {
  return (
    <>
      <div id="letstalk" className='fade flex justify-center items-center flex-col h-auto' style={{ fontFamily: 'Archivo' }} >
        <div className=" flex justify-center items-center flex-col bg-[#FFD93D] w-screen h-auto lg:h-screen">
          <div className='w-screen flex justify-between flex-col overflow-hidden'>
            <div className="w-screen relative">
              <img className="w-screen rotate-180 h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
            </div>
            {/* <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat rotate-180 h-16 sm:h-28 lg:h-44"></div> */}
            <div className='w-screen  flex justify-center items-center flex-col'>
              <div className="-mt-12 flex justify-evenly items-center flex-col bg-[#7F00FF] rounded-lg shadow w-10/12 h-[30rem] overflow-hidden p-6">
                <div className='mt-4'>
                  <p className=" text-lg lg:text-xl xl:text-2xl text-white text-center capitalize">Take your brand to the next level</p>
                </div>
                <div className='mt-4'>
                  <h5 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center tracking-tight text-white capitalize" >Have some questions? <br />Feel free to book a call with us.</h5>
                </div>
                <div className='mt-6'>
                  <Link href="#" className="inline-flex items-center justify-center w-56 lg:w-72 px-3 py-2 ext-base lg:text-xl font-medium text-center text-black bg-[#FFD93D] rounded-lg hover:bg-[#f5c70a]">
                    Book A Call
                  </Link>
                </div>
                <div className="bg-black h-0 block relative z-0 right-[190px] bottom-10 sm:right-[280px] sm:bottom-26 md:right-[340px] lg:right-[410px] xl:right-[490px] 2xl:right-[565px] md:bottom-36">
                  <img src={Circle} className="w-32 sm:w-36 md:w-64 lg:w-64" />
                </div>
              </div>
            </div>
            <div className="w-screen relative">
              <div className="absolute top-4 sm:top-20 lg:top-6">
                <Marquee pauseOnHover autoFill={true} speed={50}><span className="m-4">Visuals 60,000X impact than text.</span></Marquee>
              </div>
            </div>
            <div className="w-screen relative">
              <img className="w-screen h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
            </div>
            {/* <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-16 sm:h-28 lg:h-44"> */}

            {/* <div className="mt-16">
                <Marquee pauseOnHover autoFill={true} speed={50}><span className="m-24">Visuals 60,000X impact than text.</span></Marquee>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default BookACall