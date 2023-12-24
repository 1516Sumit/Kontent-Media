
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
import 'swiper/css/navigation'

import './styles.css';

import { Autoplay, EffectCoverflow, Navigation } from 'swiper';

export default function Slider() {
    return (
        <>
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
                    rotate: 10,
                    stretch: 80,
                    depth: 550,
                    modifier: 1.8,
                    slideShadows: true,
                }}
                loop={true}
                navigation={true}
                // pagination={true}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='slider'>
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="flex flex-col justify-center items-left gap-1">
                            <div className="text-base sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Archivo' }}>
                                Agnes Remi
                            </div>
                            <div className="text-xs sm:text-base md:text-lg">
                                President of marketing
                            </div>
                        </div>
                    </div>
                    <div className="profile-content font-semibold text-sm sm:text-lg md:text-xl tracking-wide p-1 md:pl-20">
                        Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="flex flex-col justify-center items-left gap-1">
                            <div className="text-base sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Archivo' }}>
                                Agnes Remi
                            </div>
                            <div className="text-xs sm:text-base md:text-lg">
                                President of marketing
                            </div>
                        </div>
                    </div>
                    <div className="profile-content font-semibold text-sm sm:text-lg md:text-xl tracking-wide p-1 md:pl-20">
                        Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="flex flex-col justify-center items-left gap-1">
                            <div className="text-base sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Archivo' }}>
                                Agnes Remi
                            </div>
                            <div className="text-xs sm:text-base md:text-lg">
                                President of marketing
                            </div>
                        </div>
                    </div>
                    <div className="profile-content font-semibold text-sm sm:text-lg md:text-xl tracking-wide p-1 md:pl-20">
                        Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="flex flex-col justify-center items-left gap-1">
                            <div className="text-base sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Archivo' }}>
                                Agnes Remi
                            </div>
                            <div className="text-xs sm:text-base md:text-lg">
                                President of marketing
                            </div>
                        </div>
                    </div>
                    <div className="profile-content font-semibold text-sm sm:text-lg md:text-xl tracking-wide p-1 md:pl-20">
                        Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider'>
                <div className="profile-sect">
                    <div className="profile-sec">
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="flex flex-col justify-center items-left gap-1">
                            <div className="text-base sm:text-xl md:text-2xl font-bold" style={{ fontFamily: 'Archivo' }}>
                                Agnes Remi
                            </div>
                            <div className="text-xs sm:text-base md:text-lg">
                                President of marketing
                            </div>
                        </div>
                    </div>
                    <div className="profile-content font-semibold text-sm sm:text-lg md:text-xl tracking-wide p-1 md:pl-20">
                        Dico is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
