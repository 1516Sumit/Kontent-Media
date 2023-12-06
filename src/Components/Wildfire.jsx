// import React from 'react'
import { useState } from 'react'
import './wildfire.css';
import Hand from '../assets/img/HandGrabbing.svg'
import Scissors from '../assets/img/Scissors.svg'
import Rocket from '../assets/img/RocketLaunch.svg'
import Vector from '../assets/img/Trash.svg'
import Video from '../assets/video/video.mp4'
import Mask from '../assets/img/Mask-group.jpeg'
import Mask2 from '../assets/img/Mask-group2.jpeg'
import iphone from '../assets/img/iphone.png'

function Wildfire() {
      const [isHovered, setIsHovered] = useState(false);

      const handleMouseEnter = () => {
            setIsHovered(true);
      };

      const handleMouseLeave = () => {
            setIsHovered(false);
      };
      return (
            <div className='bg-black w-screen pt-2 h-auto'>
                  <h1 className='self-center text-center text-2xl sm:text-3xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white' style={{ fontFamily: 'Archivo' }}>Videos that <span style={{ color: '#7F00FF' }}>Makes</span> <br />your<span style={{ color: '#FFD93D' }}> Brand Spread</span> <br />like<span style={{ color: '#7F00FF' }}> Wildfire.</span></h1>
                  <img src={Scissors} className='ceaser w-6 lg:w-12 sm:w-8 md:w-10' />
                  <div
                        className={`rocket-container ${isHovered ? "animate" : ""}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                  >
                        <img
                              src={Rocket}
                              alt="Rocket"
                              className={`Rocket w-6 lg:w-12 sm:w-8 md:w-10 ${isHovered ? "animate" : ""
                                    }`}
                        />
                  </div>
                  {/* <img src={Rocket} className='Rocket w-6 lg:w-12 sm:w-8 md:w-10'/> */}
                  <img src={Vector} className='Vector w-6 lg:w-12 sm:w-8 md:w-10' />
                  <img src={Hand} className='Hand w-6 lg:w-12 sm:w-8 md:w-10' />

                  <div className='m-14 grid justify-items-center items-center grid-cols-1 gap-0 md:grid-cols-3'>
                        <div>
                              <img src={iphone} className='iphone1 rotate-0 md:rotate-90 z-1 absolute' />
                              <div className='videodiv videodiv1 overflow-hidden rotate-0 md:rotate-90'>
                                    <video className='w-64 sm:w-80 md:w-96 z-2' controls autoPlay muted loop>
                                          <source src={Video} type="video/mp4" />
                                    </video>
                              </div>
                        </div>
                        <div className='midvid flex flex-col justify-between md:m-0'>
                              <div>
                                    <img src={iphone} className='iphone1 z-1 absolute' />
                                    <div className='videodiv videodiv2 overflow-hidden'>
                                          <video className='w-64 sm:w-80 md:w-96 z-2 rotate-0' controls autoPlay muted loop>
                                                <source src={Video} type="video/mp4" />
                                          </video>
                                    </div>
                              </div>
                              <div className='mt-5'>
                                    <img src={iphone} className='iphone1 z-1 absolute' />
                                    <div className='videodiv videodiv2 overflow-hidden'>
                                          <video className='w-64 sm:w-80 md:w-96 rotate-0' controls autoPlay muted loop>
                                                <source src={Video} type="video/mp4" />
                                          </video>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <img src={iphone} className='iphone1 z-1 absolute rotate-0 md:rotate-90' />
                              <div className='videodiv videodiv1 overflow-hidden rotate-0 md:rotate-90'>
                                    <video className='w-64 sm:w-80 md:w-96 z-2' controls autoPlay muted loop>
                                          <source src={Video} type="video/mp4" />
                                    </video>
                              </div>
                        </div>
                  </div>
                  <div className='flex justify-between flex-row'>
                        <img src={Mask} className='mask1 w-28 h-56 sm:w-44 sm:h-72' />
                        <img src={Mask2} className='mask2 w-28 h-56 sm:w-44 sm:h-72' />
                  </div>
            </div>

      )
}

export default Wildfire