import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slidercompwild from './Slidercompwild.jsx'
import './sliderwild.css';
// import Video from '../assets/video/video.mp4'
// import iphone from '../assets/img/iphone.png'


import { Autoplay, EffectCoverflow } from 'swiper';

export default function Sliderwild() {
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
                    // pagination={true}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper block md:hidden pt-16"
                >
                    <SwiperSlide>
                        <Slidercompwild/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidercompwild/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidercompwild/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slidercompwild/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
