import "./star.css";
import Tilt from 'react-parallax-tilt';
import grid6 from '../assets/img/gridnew2.png';
import star from '../assets/img/stargif.gif';
import star2 from '../assets/img/stargifpurple.gif';
import "../App.css"
function Hero({ type }) {
    return (
        <>
            <section className="fade bg-black h-auto w-screen overflow-hidden">
                <div className="bg-black w-screen mt-4 sm:mt-20 lg:mt-4 pt-4 py-8 px-1 text-center lg:pt-8 lg:pb-8 lg:px-1 flex flex-col">
                    <section className={type === "page" ? " " : "hidden"}>
                        <Tilt tiltMaxAngleX={3}
                            tiltMaxAngleY={3}>
                            <h1 className="heroText mt-16 sm:mt-4 mb-0 sm:mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                <img src={star} className="w-5 sm:w-6 md:w-8 relative star1 inline-block" alt="star" />
                                Creating
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Videos </span>
                                That
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative star2 inline-block" alt="star" />
                                </h1>
                            <h1 className="heroText mt-4 lg:my-0 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative star3 inline-block" alt="star" />
                                Stop
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> The Scroll
                                    <img src={star} className="w-5 sm:w-6 md:w-8 relative star4 inline-block" alt="star" /></span></h1>
                        </Tilt>
                        <div className="text-center flex justify-center items-center">
                            <div className="min-[300px]:w-[81%] min-[480px]:w-[75%] md:w-[90%]">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-6 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">A video content powerhouse elevating brands, creators, and<br /> entrepreneurs worldwide through engaging videos.</p>
                                {/* <p className="heroDes px-5 my-6 sm:mt-10 lg:mt-10 font-Inter font-medium text-white text-lg lg:text-xl xl:text-2xl sm:px-16 xl:px-48">A video content powerhouse elevating brands, creators, and
                                    <br /> entrepreneurs worldwide through engaging videos.</p> */}
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center mt-2">
                            <button className="pricebutton h-12 w-36 md:h-14 md:w-56 bg-[#7F00FF] hover:bg-[#6f11cf] text-base md:text-lg text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                <a href="#pricing">Price</a>
                            </button>
                            <div className="w-screen relative">
                                <img className="w-screen h-60 -mt-20 sm:-mt-16 lg:-mt-16 xl:-mt-16 2xl:-mt-16 " src={grid6} />
                            </div>
                        </div>
                        {/* <div className="bg-[url('./assets/img/gird6.png')] bg-cover bg-no-repeat w-screen h-40 -mt-16 sm:h-64 sm:-mt-40 lg:h-96 lg:-mt-40 xl:-mt-56 2xl:-mt-72"></div> */}

                    </section>

                    <section className={type === "kontentedit" ? " " : "hidden"}>
                        <Tilt tiltMaxAngleX={3}
                            tiltMaxAngleY={3}>
                            <div>
                                <h1 className="heroText heroTextedit mt-24 lg:mt-4 sm:mt-6 mb-0 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                    <img src={star} className="w-5 sm:w-6 md:w-8 relative star1 staredit1 inline-block" alt="star" />
                                    Quality video
                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> edits in </span>
                                </h1>
                                <h1 className="heroText heroTextedit mt-2 mb-0 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                    <img src={star2} className="w-5 sm:w-6 md:w-8 relative staredit2 inline-block" alt="star" />
                                    minimal
                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> time </span> with <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>your</span><img src={star2} className="w-5 sm:w-6 md:w-8 relative staredit3 inline-block" alt="star" />
                                </h1>
                                <h1 className="heroText heroTextedit mt-2 sm:mt-0 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>

                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  unique <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>style</span>
                                        <img src={star} className="w-5 sm:w-6 md:w-8 relative staredit4 inline-block" alt="star" /></span>
                                </h1>



                                {/* <h1 className="heroText mt-10 lg:mt-4 mb-0 sm:mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                    <img src="./images/StarFour-yellow.png" className="w-4 sm:w-6 lg:w-12 sm:w-8 md:w-10 relative star1 staredit1 inline-block" alt="star" />
                                    Quality video
                                    <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> edits in </span>
                                    minimal <img src="./images/StarFour-purple.png" className="w-4 sm:w-6 lg:w-12 sm:w-8 md:w-10 relative staredit2 inline-block" alt="star" /></h1>
                                <h1 className="heroText mt-8 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                    <img src="./images/StarFour-purple.png" className="w-4 sm:w-6 lg:w-12 sm:w-8 md:w-10 relative star3 staredit3 inline-block" alt="star" /> time with your
                                    <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  unique style.
                                        <img src="./images/StarFour-yellow.png" className="w-4 sm:w-6 lg:w-12 sm:w-8 md:w-10 relative staredit4 inline-block" alt="star" /></span></h1> */}
                            </div>
                        </Tilt>
                        <div className="text-center flex justify-center items-center">
                            <div className="min-[300px]:w-[81%] min-[480px]:w-[75%] md:w-[90%]">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-4 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">Experience a dedicated Post-production team at your desk. We will edit videos according to  <br />your target consumer psychology, brand identity & user behavior.</p>
                                {/* <p className="heroDes my-10 mt-10 font-Inter text-xs font-medium text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-10 sm:px-8 xl:px-16"> Experience a dedicated Post-production team at your desk. We will edit videos according to  <br />your target consumer psychology, brand identity & user behavior.</p> */}
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            <button className=" h-12 w-36 md:h-14 md:w-56 bg-[#7F00FF] hover:bg-[#6f11cf] text-base md:text-lg text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                <a href="#pricingbox">View Pricing</a>
                            </button>
                        </div>
                        <div className="bg-black h-0 block rotate-180 relative z-0 right-0 top-[45px]">
                            <img className="w-24 sm:w-36 md:w-40" src="./images/Mask groupnewleft.png" />
                        </div>
                    </section>

                    <section className={type === "kontentpod" ? " " : "hidden"}>
                        <Tilt tiltMaxAngleX={3}
                            tiltMaxAngleY={3}>
                            <h1 className="heroTextedit mt-24 lg:mt-4 mb-0 sm:mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star} className="w-5 sm:w-6 md:w-8 relative starpod1 inline-block" alt="star" />
                                End-to-End
                                <span className="heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> services for </span>
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative starpod2 inline-block" alt="star" />
                                </h1>
                            <h1 className="heroTextedit mt-4 sm:mt-6 md:mt-6 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative starpod3 inline-block" alt="star" />
                                growing your
                                <span className="heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> podcast
                                    <img src={star} className="w-5 sm:w-6 md:w-8 relative starpod4 inline-block" alt="star" /></span></h1>
                            <h1 className="heroTextedit mt-4 sm:mt-6 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                by
                                <span className="heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> 10x
                                </span></h1>
                        </Tilt>

                        <div className="text-center flex justify-center items-center">
                            <div className="min-[300px]:w-[81%] min-[480px]:w-[75%] md:w-[90%]">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-10 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">We make it easy to produce branded podcasts that deliver rich short form content <br />consistently. Shooting, editing, distribution - we’ll take care of it all.</p>
                                {/* <p className="heroDes my-10 sm:mt-10 lg:mt-10 font-Inter text-xs font-medium text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-10 sm:px-8 xl:px-16">We make it easy to produce branded podcasts that deliver rich short form content <br />consistently. Shooting, editing, distribution - we’ll take care of it all.
                                </p> */}
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-8">
                            <button className=" h-12 w-36 md:h-14 md:w-56 bg-[#7F00FF] hover:bg-[#6f11cf] text-base md:text-lg text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                <a href="#pricingbox">I’m Interested</a>
                            </button>
                        </div>

                        <div className="bg-black h-0 block rotate-180 relative z-0 right-0 top-[45px]">
                            <img className="w-24 sm:w-36 md:w-40" src="./images/Mask groupnewleft.png" />
                        </div>
                    </section>

                    <section className={type === "kontents2s" ? " " : "hidden"}>
                        <Tilt tiltMaxAngleX={3}
                            tiltMaxAngleY={3}>
                            <h1 className="heroText mt-24 lg:mt-4 mb-0 sm:mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star} className="w-5 sm:w-6 md:w-8 relative stars2s1 inline-block" alt="star" />
                                To
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> goals  </span>
                                through 
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative stars2s2 inline-block" alt="star" />
                                </h1>
                            <h1 className="heroText mt-4 md:mt-8 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative stars2s3 inline-block" alt="star" />
                                premium
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> videos
                                    <img src={star} className="w-5 sm:w-6 md:w-8 relative stars2s4 inline-block" alt="star" /></span></h1>
                        </Tilt>

                        <div className="text-center flex justify-center items-center">
                            <div className="min-[300px]:w-[81%] min-[480px]:w-[75%] md:w-[90%] ">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-10 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">With Kontent Script To Screen(S2S) We create premium videos that align with <br /> your brand goals. From scripting,shoot, storytelling, and editing <br />to everything in between - we take care of it all.</p>
                                {/*<p className="heroDes my-10 mt-10 font-Inter text-xs font-medium text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-10 sm:px-8 xl:px-16">With Kontent Script To Screen(S2S) We create premium videos that align with <br /> your brand goals. From scripting,shoot, storytelling, and editing <br />to everything in between - we take care of it all.
                                </p>*/}
                            </div>
                            {/* <div className="max-[480px]:block hidden w-[75%] min-[520px]:w-auto md:w-[70%] ">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-10 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">With Kontent Script To Screen(S2S) We create premium videos that align with <br /> your brand goals. From scripting,shoot, storytelling, and editing <br />to everything in between - we take care of it all.</p>
                               
                            </div> */}
                        </div>
                        <div className="flex justify-center items-center mt-8">
                            <button className=" h-12 w-36 md:h-14 md:w-56 bg-[#7F00FF] hover:bg-[#6f11cf] text-base md:text-lg text-white font-bold py-2 px-4 border-b-2 border-white-400 hover:border-purple-800 rounded-lg">
                                <a href="#pricingbox">I’m Interested</a>
                            </button>
                        </div>

                        <div className="bg-black h-0 block rotate-180 relative z-0 right-0 top-[45px]">
                            <img className="w-24 sm:w-36 md:w-40" src="./images/Mask groupnewleft.png" />
                        </div>
                    </section>

                    <section className={type === "page2" ? " " : "hidden"}>
                        <Tilt tiltMaxAngleX={3}
                            tiltMaxAngleY={3}>
                            <h1 className="heroTextedit mt-24 lg:mt-24 mb-0 sm:mb-4 font-semibold tracking-tight leading-none sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star} className="w-5 sm:w-6 md:w-8 relative star21 inline-block" alt="star" />
                                Dream.
                                <span className="heroTextedit sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Achieve. </span>
                                Grow
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative star22 inline-block" alt="star" />
                                </h1>
                            <h1 className="heroTextedit mt-4 mb-4 font-semibold tracking-tight leading-none sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                <img src={star2} className="w-5 sm:w-6 md:w-8 relative star23 inline-block" alt="star" />
                                Join the
                                <span className="heroTextedit sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> Squad
                                    <img src={star} className="w-5 sm:w-6 md:w-8 relative star24 inline-block" alt="star" /></span></h1>
                        </Tilt>

                        <div className="text-center flex justify-center items-center">
                            <div className="w-[95%] min-[520px]:w-auto md:w-[70%] ">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-10 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">Experience a flexible, remote-friendly, & collaborative<br />  team culture that brings out the best in you.</p>
                                {/*<p className="heroDes my-10 sm:mt-8 lg:mt-10 font-Inter text-xs font-medium text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl sm:px-16 xl:px-48">Experience a flexible, remote-friendly, & collaborative<br />  team culture that brings out the best in you. </p>*/}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className={type === "page1" ? " " : "hidden"}>
                <div className="bg-black h-0 block relative rotate-180 z-0 right-0" style={{ top: '120px' }}>
                    <img className="w-32 sm:w-36 md:w-40" src="./images/Mask group.svg" />
                </div>
            </section>


            <div className="inline-block z-20 fixed bottom-10 right-4 sm:bottom-20 md:bottom-16 md:right-10 lg:bottom-10 2xl:bottom-20 2xl:right-10">
                <a href="https://whatsapp.com/" target="blank">
                    <svg className="w-[3.2rem] lg:w-12" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <g clipPath="url(#clip0_224_3094)">
                            <path d="M2.11346 49.4016C2.11114 57.8035 4.30237 66.0074 8.46895 73.2384L1.71499 97.9446L26.9512 91.3151C33.9312 95.1221 41.7518 97.117 49.6991 97.1175H49.72C75.9555 97.1175 97.3119 75.7287 97.3231 49.4392C97.3281 36.7 92.3808 24.7209 83.3923 15.7085C74.4053 6.6969 62.453 1.7314 49.7181 1.72559C23.4795 1.72559 2.12468 23.1132 2.11385 49.4016" fill="url(#paint0_linear_224_3094)" />
                            <path d="M0.41395 49.386C0.411242 58.0903 2.681 66.5876 6.99614 74.0775L0 99.6694L26.1411 92.8023C33.3438 96.7368 41.4534 98.8112 49.7053 98.8143H49.7266C76.9034 98.8143 99.0269 76.6562 99.0385 49.4256C99.0431 36.2287 93.9179 23.819 84.6082 14.4837C75.2975 5.14961 62.9177 0.00542636 49.7266 0C22.5452 0 0.424782 22.155 0.41395 49.386ZM15.9816 72.7876L15.0055 71.2353C10.9024 64.6988 8.73666 57.1454 8.73976 49.3891C8.74866 26.7554 27.1342 8.34109 49.7421 8.34109C60.6905 8.34574 70.9796 12.6217 78.7186 20.3798C86.4571 28.1388 90.7154 38.4527 90.7127 49.4225C90.7026 72.0562 72.3166 90.4729 49.7266 90.4729H49.7103C42.3548 90.469 35.1409 88.4899 28.8496 84.75L27.3524 83.8605L11.8397 87.9353L15.9816 72.7872V72.7876Z" fill="url(#paint1_linear_224_3094)" />
                            <path d="M37.4017 28.7395C36.4787 26.6841 35.5072 26.6426 34.6294 26.6066C33.9106 26.5756 33.0889 26.5779 32.268 26.5779C31.4463 26.5779 30.1112 26.8876 28.9827 28.1221C27.853 29.3578 24.6699 32.3438 24.6699 38.4171C24.6699 44.4907 29.0852 50.3601 29.7007 51.1845C30.317 52.0074 38.2246 64.8694 50.7483 69.8175C61.1566 73.9295 63.2747 73.1116 65.5337 72.9054C67.793 72.7 72.8238 69.9202 73.8502 67.0376C74.8773 64.1554 74.8773 61.6849 74.5694 61.1686C74.2614 60.6543 73.4397 60.3454 72.2075 59.7283C70.975 59.1109 64.9174 56.1244 63.7881 55.7124C62.6585 55.3008 61.8371 55.0954 61.0154 56.3314C60.1937 57.5655 57.8342 60.3454 57.115 61.1686C56.3966 61.9938 55.6774 62.0965 54.4456 61.4791C53.2127 60.8597 49.2446 59.5578 44.5367 55.3527C40.8739 52.0806 38.401 48.0399 37.6822 46.8039C36.9634 45.5698 37.6052 44.9008 38.223 44.2857C38.7767 43.7326 39.4556 42.8442 40.0723 42.1237C40.6866 41.4027 40.8917 40.8884 41.3025 40.0651C41.7138 39.2411 41.5079 38.5202 41.2004 37.9027C40.8917 37.2853 38.4973 31.1802 37.4017 28.7395Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_224_3094" x1="4782.12" y1="9623.63" x2="4782.12" y2="1.72559" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1FAF38" />
                                <stop offset="1" stopColor="#60D669" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_224_3094" x1="4951.92" y1="9966.94" x2="4951.92" y2="0" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F9F9F9" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <clipPath id="clip0_224_3094">
                                <rect width="99.0385" height="100" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero;