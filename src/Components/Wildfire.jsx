// import React from 'react'
// import { useState } from 'react'
import './wildfire.css';
import Hand from '../assets/img/swipehand.gif'
import Scissors from '../assets/img/Scissorsgif.gif'
import Rocket from '../assets/img/rocket.gif'
import dustbin from '../assets/img/dustbingif.gif'
import iphone from '../assets/img/iphone.png'
import '../App.css'
import Sliderwild from './Sliderwild';

function Wildfire() {
      return (
            <div id='portfolio' className='bg-black w-screen pt-16 h-auto'>
                  <h1 className='fade self-center text-center text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white capitalize' style={{ fontFamily: 'Archivo' }}>Supercharge <span style={{ color: '#7F00FF' }}>your growth </span> <br />with videos <span style={{ color: '#FFD93D' }}>that break </span> <br />the <span style={{ color: '#7F00FF' }}> scroll.</span></h1>
                  <img src={Scissors} alt='loading...' className='rotate-180 ceaser w-8 lg:w-14 sm:w-10 md:w-12' />
                        <img src={Rocket} alt="Rocket" className="Rocket w-8 lg:w-14 sm:w-10 md:w-12"/>
                  <img src={dustbin} className='Vector w-8 lg:w-14 sm:w-10 md:w-12' />
                  <img src={Hand} className='Hand w-8 lg:w-14 sm:w-10 md:w-12' />

                  <div className='fade m-8 md:m-14 hidden md:grid justify-items-center items-center grid-cols-1 gap-0 md:grid-cols-3'>
                        <div className='relative flex justify-center items-center'>
                              <img src={iphone} className='iphone1 rotate-0 md:rotate-90 z-1 absolute' />
                              <div className='reldiv flex justify-center items-center'>
                                    <div className='videodiv videodiv1 flex justify-center items-center overflow-hidden rotate-0'>
                                    <iframe className='w-64 sm:w-80 md:w-[8rem] min-[860px]:w-[9rem] min-[980px]:w-[10.5rem] lg:w-40 xl:w-48 md:h-[16rem] min-[860px]:h-[18rem] min-[980px]:h-[20rem] lg:h-[20rem] xl:h-96 z-2 rounded-[30px] lg:rounded-[50px]' src="https://www.youtube.com/embed/kWT6RrttjfE?si=mONtk4MPEKsEzPV-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                              </div>
                        </div>
                        <div className='midvid flex flex-col justify-between md:m-0'>
                              <div className='relative flex justify-center items-center m-12 lg:m-4'>
                                    <img src={iphone} className='iphone1 z-1 absolute' />
                                    <div className='reldiv flex justify-center items-center'>
                                    <div className='videodiv videodiv1 flex justify-center items-center overflow-hidden rotate-0'>
                                    <iframe className='iframe w-64 sm:w-80 md:w-96 md:h-40 lg:h-44 xl:h-48 z-2 rounded-[40px] lg:rounded-[50px]' src="https://www.youtube.com/embed/IUEyGJGLMcM?si=usq1RU6ypEVyFBed" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    </div>
                              </div>
                              <div className='mt-5 relative flex justify-center items-center m-12 lg:m-4'>
                                    <img src={iphone} className='iphone1 z-1 absolute' />
                                    <div className='reldiv flex justify-center items-center'>
                                    <div className='videodiv videodiv1 flex justify-center items-center overflow-hidden rotate-0'>
                                    <iframe className='iframe w-64 sm:w-80 md:w-96 md:h-40 lg:h-44 xl:h-48 z-2 rounded-[40px] lg:rounded-[50px]' src="https://www.youtube.com/embed/iacJorVqSFI?si=YozaspqPipV-YXYl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    </div>
                              </div>
                        </div>
                        <div className='relative flex justify-center items-center'>
                              <img src={iphone} className='iphone1 z-1 absolute rotate-0 md:rotate-90' />
                              <div className='reldiv flex justify-center items-center'>
                                    <div className='videodiv videodiv1 flex justify-center items-center overflow-hidden rotate-0'>
                                    <iframe className='w-64 sm:w-80 md:w-[8rem] min-[860px]:w-[9rem] min-[980px]:w-[10.5rem] lg:w-40 xl:w-48 md:h-[16rem] min-[860px]:h-[18rem] min-[980px]:h-[20rem] lg:h-[20rem] xl:h-96 z-2 rounded-[30px] lg:rounded-[50px]' src="https://www.youtube.com/embed/Uv5grJAidHs?si=Q8taju90ALr77QiT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <Sliderwild />

                  <div className='flex justify-between flex-row'>
                        <img src="./images/Mask groupnewleft.png" className='mask1 w-28 h-56 sm:w-44 sm:h-72' />
                        <img src="./images/Mask groupnew.png" className='mask2 w-28 h-56 sm:w-44 sm:h-72' />
                  </div>
            </div>

      )
}

export default Wildfire