import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './sliderwild.css';
import Video from '../assets/video/video.mp4'
import iphone from '../assets/img/iphone.png'


import { EffectCoverflow, Pagination } from 'swiper';

export default function App() {
    return (
        <>
            <div className='w-screen overflow-hidden flex justify-center items-center'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 550,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper block md:hidden pt-20"
                >
                    <SwiperSlide>
                        <div className='relative flex justify-center items-center rotate-0'>
                            <img src={iphone} className='iphone2 rotate-0 md:rotate-90 z-1 absolute' />
                            <div className='reldiv flex justify-center items-center'>
                                <div className='videodiv videodiv4 overflow-hidden rotate-0 md:rotate-90'>
                                    <video className='w-64 sm:w-80 md:w-96 z-2' controls muted>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative flex justify-center items-center rotate-0'>
                            <img src={iphone} className='iphone2 z-1 absolute' />
                            <div className='reldiv flex justify-center items-center'>
                                <div className='videodiv videodiv4 overflow-hidden'>
                                    <video className='w-64 sm:w-80 md:w-96 z-2 rotate-0' controls muted>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mt-5 relative flex justify-center items-center rotate-0'>
                            <img src={iphone} className='iphone2 z-1 absolute' />
                            <div className='reldiv flex justify-center items-center'>
                                <div className='videodiv videodiv4 overflow-hidden'>
                                    <video className='w-64 sm:w-80 md:w-96 rotate-0' controls muted>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative flex justify-center items-center rotate-0'>
                            <img src={iphone} className='iphone2 z-1 absolute rotate-0 md:rotate-90' />
                            <div className='reldiv flex justify-center items-center'>
                                <div className='videodiv videodiv4 overflow-hidden rotate-0 md:rotate-90'>
                                    <video className='w-64 sm:w-80 md:w-96 z-2' controls muted>
                                        <source src={Video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
