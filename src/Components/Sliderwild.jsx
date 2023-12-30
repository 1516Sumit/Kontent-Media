import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slidercompwild from './Slidercompwild.jsx'
import './sliderwild.css';
// import Video from '../assets/video/video.mp4'
// import iphone from '../assets/img/iphone.png'


import { Pagination, EffectCoverflow } from 'swiper';
import Sliderupdown from './Sliderupdown.jsx';

export default function Sliderwild() {
    return (
        <>
            <div className='w-screen overflow-hidden flex justify-center items-center'>
                <Swiper style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-width": "30px",
                    "--swiper-pagination-bullet-border-radius": "30px",
                }}
                    effect={'coverflow'}
                    grabCursor={true}
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
                    pagination={true}
                    modules={[Pagination, EffectCoverflow]}
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
