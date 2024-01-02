import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slidercompwild from './Slidercompwild.jsx'
import './sliderwild.css';

import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper';
import Sliderupdown from './Sliderupdown.jsx';
import { useRef } from 'react'

export default function Sliderwild() {
    const swiperRef = useRef(null)
    return (
        <>
            <div
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
                className='w-screen overflow-hidden flex justify-center items-center'>
                <Swiper
                 ref={swiperRef}
                 style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-width": "30px",
                    "--swiper-pagination-bullet-border-radius": "30px",
                }}

                   
                    effect={'coverflow'}
                    grabCursor={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                    }}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 700,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    loop={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                    className="mySwiper block md:hidden pt-16"
                >
                    <SwiperSlide className='w-[350px] h-[450px] mt-4'>
                        <Slidercompwild />
                    </SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[450px] mt-4'>
                        <Sliderupdown />
                    </SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[450px] mt-4'>
                        <Slidercompwild />
                    </SwiperSlide>
                    <SwiperSlide className='w-[350px] h-[450px] mt-4'>
                        <Sliderupdown />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

