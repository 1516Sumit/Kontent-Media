import "./star.css";
import Tilt from 'react-parallax-tilt';
import grid6 from '../assets/img/gridnew2.png';
import star from '../assets/img/stargif.gif';
import star2 from '../assets/img/stargif(1).gif';
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
                                {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative star1 inline-block" alt="star" /> */}
                                Creating
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Videos </span>
                                That
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative star2 inline-block" alt="star" /> */}
                                </h1>
                            <h1 className="heroText mt-4 lg:my-0 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative star3 inline-block" alt="star" /> */}
                                Stop
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> The Scroll
                                    {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative star4 inline-block" alt="star" /> */}
                                    </span></h1>
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
                                    {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative star1 staredit1 inline-block" alt="star" /> */}
                                    Quality video
                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> edits in </span>
                                </h1>
                                <h1 className="heroText heroTextedit mt-2 mb-0 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                    {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative staredit2 inline-block" alt="star" /> */}
                                    minimal
                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> time </span> with <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>your</span>
                                    {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative staredit3 inline-block" alt="star" /> */}
                                </h1>
                                <h1 className="heroText heroTextedit mt-2 sm:mt-0 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>

                                    <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  unique <span className="heroText heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}>style</span>
                                        {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative staredit4 inline-block" alt="star" /> */}
                                        </span>
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
                                {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative starpod1 inline-block" alt="star" /> */}
                                End-to-End
                                <span className="heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> services for </span>
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative starpod2 inline-block" alt="star" /> */}
                                </h1>
                            <h1 className="heroTextedit mt-4 sm:mt-6 md:mt-6 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative starpod3 inline-block" alt="star" /> */}
                                growing your
                                <span className="heroTextedit sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> podcast
                                    {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative starpod4 inline-block" alt="star" /> */}
                                    </span></h1>
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
                                {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative stars2s1 inline-block" alt="star" /> */}
                                To
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> goals  </span>
                                through 
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative stars2s2 inline-block" alt="star" /> */}
                                </h1>
                            <h1 className="heroText mt-4 md:mt-8 mb-4 font-semibold tracking-tight leading-none sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative stars2s3 inline-block" alt="star" /> */}
                                premium
                                <span className="heroText sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> videos
                                    {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative stars2s4 inline-block" alt="star" /> */}
                                    </span></h1>
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
                                {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative star21 inline-block" alt="star" /> */}
                                Dream.
                                <span className="heroTextedit sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Achieve. </span>
                                Grow
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative star22 inline-block" alt="star" /> */}
                                </h1>
                            <h1 className="heroTextedit mt-4 mb-4 font-semibold tracking-tight leading-none sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap text-white capitalize" style={{ fontFamily: 'Archivo' }}>
                                {/* <img src={star2} className="w-5 sm:w-6 md:w-8 relative star23 inline-block" alt="star" /> */}
                                Join the
                                <span className="heroTextedit sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}> Squad
                                    {/* <img src={star} className="w-5 sm:w-6 md:w-8 relative star24 inline-block" alt="star" /> */}
                                    </span></h1>
                        </Tilt>

                        <div className="text-center flex justify-center items-center">
                            <div className="w-[95%] min-[520px]:w-auto md:w-[70%] ">
                                <p className="mt-3 sm:mt-6 mb-6 sm:mt-10 lg:mt-10 font-Inter font-medium leading-6 text-white text-[1.25rem] lg:text-xl xl:text-2xl">Experience a flexible, remote-friendly, & collaborative<br />  team culture that brings out the best in you.</p>
                                {/*<p className="heroDes my-10 sm:mt-8 lg:mt-10 font-Inter text-xs font-medium text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl sm:px-16 xl:px-48">Experience a flexible, remote-friendly, & collaborative<br />  team culture that brings out the best in you. </p>*/}
                            </div>
                        </div>
                    </section>

                    {/* <section className={type === "page" ? " " : "hidden"}>
                        <div>
                            <div className="bg-[url('./assets/img/grid2.png')] bg-cover bg-no-repeat h-40 lg:h-28"></div>
                            <div className="h-auto xl:mx-10 -mt-12 flex justify-center lg:justify-between items-center flex-col md:flex-row lg:flex-nowrap">

                                <div className="p-2 m-2 h-14 w-40 sm:w-56 xl:h-14 xl:w-54 2xl:h-16 2xl:w-56 flex justify-evenly items-center bg-[#FFFFFF] text-black font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 36 24" fill="none">
                                        <path d="M35.8964 11.514C35.8439 11.3955 34.5734 8.577 31.7489 5.7525C27.9854 1.989 23.2319 0 17.9999 0C12.7679 0 8.01436 1.989 4.25086 5.7525C1.42636 8.577 0.149864 11.4 0.103364 11.514C0.0351333 11.6675 -0.00012207 11.8335 -0.00012207 12.0015C-0.00012207 12.1695 0.0351333 12.3355 0.103364 12.489C0.155864 12.6075 1.42636 15.4245 4.25086 18.249C8.01436 22.011 12.7679 24 17.9999 24C23.2319 24 27.9854 22.011 31.7489 18.249C34.5734 15.4245 35.8439 12.6075 35.8964 12.489C35.9646 12.3355 35.9999 12.1695 35.9999 12.0015C35.9999 11.8335 35.9646 11.6675 35.8964 11.514ZM17.9999 21.6C13.3829 21.6 9.34936 19.9215 6.01036 16.6125C4.64033 15.25 3.47475 13.6964 2.54986 12C3.4745 10.3034 4.64011 8.74977 6.01036 7.3875C9.34936 4.0785 13.3829 2.4 17.9999 2.4C22.6169 2.4 26.6504 4.0785 29.9894 7.3875C31.3621 8.74944 32.5302 10.3031 33.4574 12C32.3759 14.019 27.6644 21.6 17.9999 21.6ZM17.9999 4.8C16.5758 4.8 15.1838 5.22227 13.9998 6.01342C12.8157 6.80457 11.8929 7.92905 11.3479 9.24468C10.803 10.5603 10.6604 12.008 10.9382 13.4047C11.216 14.8013 11.9018 16.0842 12.9087 17.0912C13.9156 18.0981 15.1986 18.7838 16.5952 19.0617C17.9919 19.3395 19.4396 19.1969 20.7552 18.6519C22.0708 18.107 23.1953 17.1841 23.9864 16.0001C24.7776 14.8161 25.1999 13.424 25.1999 12C25.1979 10.0911 24.4387 8.26086 23.0888 6.91102C21.739 5.56119 19.9088 4.80199 17.9999 4.8ZM17.9999 16.8C17.0505 16.8 16.1225 16.5185 15.3331 15.9911C14.5438 15.4636 13.9285 14.714 13.5652 13.8369C13.2019 12.9598 13.1069 11.9947 13.2921 11.0636C13.4773 10.1325 13.9345 9.27718 14.6058 8.60589C15.277 7.9346 16.1323 7.47744 17.0634 7.29223C17.9945 7.10702 18.9597 7.20208 19.8367 7.56538C20.7138 7.92868 21.4635 8.54391 21.9909 9.33326C22.5183 10.1226 22.7999 11.0507 22.7999 12C22.7999 13.273 22.2942 14.4939 21.394 15.3941C20.4938 16.2943 19.2729 16.8 17.9999 16.8Z" fill="#0E0C12" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter1_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>organic views</p>
                                    </div>
                                </div>
                                <div className="p-2 m-2 h-14 w-40 sm:w-56 xl:h-14 xl:w-54 2xl:h-16 2xl:w-56 flex justify-evenly items-center bg-[#7F00FF] text-white font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 33 24" fill="none">
                                        <path d="M32.2393 13.94C32.1249 14.0258 31.9947 14.0883 31.8561 14.1238C31.7176 14.1593 31.5734 14.1671 31.4318 14.1469C31.2902 14.1267 31.154 14.0788 31.0309 14.0059C30.9078 13.933 30.8003 13.8366 30.7145 13.7222C30.058 12.8398 29.2036 12.1238 28.2199 11.632C27.2361 11.1401 26.1507 10.8861 25.0509 10.8904C24.8367 10.8904 24.6273 10.8272 24.4488 10.7088C24.2704 10.5904 24.1308 10.422 24.0475 10.2246C23.991 10.0906 23.9618 9.94668 23.9618 9.80124C23.9618 9.6558 23.991 9.51183 24.0475 9.37783C24.1308 9.1805 24.2704 9.01209 24.4488 8.89368C24.6273 8.77527 24.8367 8.7121 25.0509 8.71208C25.662 8.71203 26.2609 8.54059 26.7794 8.21725C27.298 7.89391 27.7155 7.43162 27.9845 6.8829C28.2535 6.33417 28.3632 5.721 28.3012 5.11304C28.2392 4.50508 28.0079 3.9267 27.6337 3.44359C27.2594 2.96047 26.7572 2.592 26.184 2.38002C25.6109 2.16803 24.9897 2.12104 24.3912 2.24437C23.7926 2.3677 23.2407 2.65642 22.798 3.07772C22.3553 3.49903 22.0397 4.03603 21.8869 4.62774C21.8511 4.7663 21.7884 4.89646 21.7024 5.01079C21.6163 5.12512 21.5086 5.22138 21.3853 5.29407C21.2621 5.36677 21.1257 5.41447 20.984 5.43446C20.8423 5.45445 20.698 5.44633 20.5595 5.41057C20.4209 5.37481 20.2908 5.31212 20.1764 5.22606C20.0621 5.14 19.9658 5.03226 19.8932 4.909C19.8205 4.78574 19.7728 4.64936 19.7528 4.50767C19.7328 4.36597 19.7409 4.22172 19.7767 4.08316C19.9887 3.26264 20.3893 2.50293 20.9467 1.86448C21.504 1.22604 22.2026 0.72648 22.987 0.405557C23.7714 0.0846339 24.6198 -0.0487959 25.4648 0.0158844C26.3098 0.0805647 27.1281 0.34157 27.8545 0.778132C28.5809 1.21469 29.1953 1.81476 29.649 2.53059C30.1027 3.24642 30.383 4.05826 30.4677 4.9015C30.5524 5.74474 30.4392 6.59611 30.1369 7.38787C29.8347 8.17963 29.3518 8.88992 28.7268 9.46224C30.2078 10.1035 31.4952 11.121 32.4612 12.4139C32.5471 12.5286 32.6094 12.6591 32.6447 12.7979C32.68 12.9368 32.6875 13.0812 32.6669 13.223C32.6463 13.3648 32.5979 13.5011 32.5246 13.6241C32.4512 13.7471 32.3543 13.8545 32.2393 13.94ZM24.9039 22.3265C24.9827 22.4505 25.0356 22.5891 25.0594 22.7341C25.0833 22.879 25.0775 23.0273 25.0426 23.17C25.0076 23.3126 24.9442 23.4468 24.8561 23.5643C24.7679 23.6818 24.6569 23.7803 24.5298 23.8538C24.4026 23.9273 24.2619 23.9743 24.116 23.9921C23.9702 24.0098 23.8223 23.9978 23.6812 23.9569C23.5402 23.9159 23.4088 23.8469 23.2951 23.7539C23.1814 23.6609 23.0877 23.5459 23.0196 23.4157C22.3335 22.2539 21.3564 21.2911 20.1846 20.6223C19.0128 19.9534 17.6869 19.6017 16.3376 19.6017C14.9884 19.6017 13.6625 19.9534 12.4907 20.6223C11.3189 21.2911 10.3418 22.2539 9.65567 23.4157C9.58758 23.5459 9.49386 23.6609 9.38016 23.7539C9.26646 23.8469 9.13512 23.9159 8.99404 23.9569C8.85297 23.9978 8.70507 24.0098 8.55925 23.9921C8.41343 23.9743 8.27269 23.9273 8.14552 23.8538C8.01834 23.7803 7.90735 23.6818 7.81922 23.5643C7.73109 23.4468 7.66764 23.3126 7.6327 23.17C7.59775 23.0273 7.59202 22.879 7.61586 22.7341C7.63971 22.5891 7.69262 22.4505 7.77142 22.3265C8.82736 20.5122 10.4374 19.0845 12.3649 18.2531C11.2803 17.4227 10.4832 16.2732 10.0856 14.9663C9.68803 13.6594 9.70999 12.2608 10.1484 10.967C10.5868 9.67328 11.4196 8.54943 12.5298 7.75345C13.6399 6.95748 14.9716 6.5294 16.3376 6.5294C17.7037 6.5294 19.0354 6.95748 20.1455 7.75345C21.2557 8.54943 22.0885 9.67328 22.5269 10.967C22.9653 12.2608 22.9873 13.6594 22.5897 14.9663C22.1921 16.2732 21.395 17.4227 20.3103 18.2531C22.2379 19.0845 23.8479 20.5122 24.9039 22.3265ZM16.3376 17.4253C17.1993 17.4253 18.0416 17.1698 18.7581 16.6911C19.4745 16.2124 20.0329 15.532 20.3626 14.7359C20.6924 13.9398 20.7787 13.0639 20.6106 12.2188C20.4425 11.3737 20.0275 10.5974 19.4182 9.98811C18.809 9.37882 18.0327 8.96389 17.1876 8.79579C16.3425 8.62769 15.4665 8.71396 14.6704 9.04371C13.8744 9.37345 13.194 9.93185 12.7152 10.6483C12.2365 11.3647 11.981 12.207 11.981 13.0687C11.981 14.2242 12.44 15.3323 13.257 16.1493C14.0741 16.9663 15.1822 17.4253 16.3376 17.4253ZM8.71354 9.80124C8.71354 9.51237 8.59879 9.23534 8.39454 9.03109C8.19028 8.82683 7.91325 8.71208 7.62439 8.71208C7.01327 8.71203 6.41442 8.54059 5.89585 8.21725C5.37729 7.89391 4.95979 7.43162 4.69079 6.8829C4.42178 6.33417 4.31206 5.721 4.37407 5.11304C4.43608 4.50508 4.66735 3.9267 5.0416 3.44359C5.41585 2.96047 5.91809 2.592 6.49126 2.38002C7.06443 2.16803 7.68556 2.12104 8.2841 2.24437C8.88264 2.3677 9.4346 2.65642 9.87728 3.07772C10.32 3.49903 10.6356 4.03603 10.7884 4.62774C10.8606 4.90758 11.041 5.14726 11.29 5.29407C11.5389 5.44088 11.836 5.48279 12.1158 5.41057C12.3956 5.33836 12.6353 5.15793 12.7821 4.909C12.9289 4.66006 12.9708 4.363 12.8986 4.08316C12.6866 3.26264 12.2859 2.50293 11.7286 1.86448C11.1713 1.22604 10.4726 0.72648 9.68828 0.405557C8.90391 0.0846339 8.05546 -0.0487959 7.21045 0.0158844C6.36544 0.0805647 5.54719 0.34157 4.8208 0.778132C4.09441 1.21469 3.47994 1.81476 3.02627 2.53059C2.5726 3.24642 2.29226 4.05826 2.20756 4.9015C2.12286 5.74474 2.23613 6.59611 2.53836 7.38787C2.84059 8.17963 3.32344 8.88992 3.94848 9.46224C2.46898 10.1041 1.183 11.1216 0.218122 12.4139C0.0446245 12.6449 -0.0299675 12.9355 0.0107562 13.2216C0.0514798 13.5077 0.204183 13.7659 0.435273 13.9394C0.666363 14.1128 0.95691 14.1874 1.243 14.1467C1.52908 14.106 1.78728 13.9533 1.96077 13.7222C2.61724 12.8398 3.47172 12.1238 4.45543 11.632C5.43913 11.1401 6.52458 10.8861 7.62439 10.8904C7.91325 10.8904 8.19028 10.7756 8.39454 10.5714C8.59879 10.3671 8.71354 10.0901 8.71354 9.80124Z" fill="white" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter1_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>followers</p>
                                    </div>
                                </div>
                                <div className="p-0 m-2 h-14 w-40 sm:w-56 md:w-36 xl:h-14 xl:w-36 2xl:h-16 2xl:w-44 m-0 flex justify-evenly items-center bg-[#FFD93D] text-black font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 29 32" fill="none">
                                        <path d="M14.4283 4.57143C11.7159 4.57143 9.06433 5.37576 6.80903 6.8827C4.55373 8.38965 2.79593 10.5315 1.75793 13.0375C0.719931 15.5434 0.448343 18.3009 0.977512 20.9612C1.50668 23.6215 2.81284 26.0652 4.73082 27.9832C6.64879 29.9012 9.09245 31.2073 11.7528 31.7365C14.4131 32.2656 17.1706 31.9941 19.6765 30.9561C22.1825 29.9181 24.3243 28.1603 25.8313 25.905C27.3382 23.6497 28.1426 20.9981 28.1426 18.2857C28.1384 14.6497 26.6922 11.1639 24.1212 8.59284C21.5501 6.02182 18.0643 4.57559 14.4283 4.57143ZM14.4283 29.7143C12.1679 29.7143 9.95833 29.044 8.07891 27.7882C6.19949 26.5324 4.73466 24.7475 3.86966 22.6592C3.00466 20.5709 2.77833 18.273 3.21931 16.0561C3.66028 13.8392 4.74875 11.8028 6.34706 10.2045C7.94537 8.60618 9.98175 7.51771 12.1987 7.07674C14.4156 6.63576 16.7135 6.86209 18.8018 7.72709C20.8901 8.59209 22.675 10.0569 23.9308 11.9363C25.1866 13.8158 25.8569 16.0254 25.8569 18.2857C25.8534 21.3157 24.6483 24.2206 22.5057 26.3632C20.3632 28.5057 17.4583 29.7109 14.4283 29.7143ZM20.9511 11.7629C21.0574 11.869 21.1417 11.995 21.1992 12.1338C21.2567 12.2725 21.2863 12.4212 21.2863 12.5714C21.2863 12.7216 21.2567 12.8703 21.1992 13.0091C21.1417 13.1478 21.0574 13.2739 20.9511 13.38L15.2369 19.0943C15.1307 19.2005 15.0046 19.2847 14.8659 19.3422C14.7271 19.3996 14.5784 19.4292 14.4283 19.4292C14.2781 19.4292 14.1294 19.3996 13.9907 19.3422C13.8519 19.2847 13.7259 19.2005 13.6197 19.0943C13.5135 18.9881 13.4293 18.862 13.3718 18.7233C13.3144 18.5846 13.2848 18.4359 13.2848 18.2857C13.2848 18.1355 13.3144 17.9869 13.3718 17.8481C13.4293 17.7094 13.5135 17.5833 13.6197 17.4771L19.334 11.7629C19.4401 11.6566 19.5662 11.5723 19.7049 11.5148C19.8437 11.4573 19.9924 11.4277 20.1426 11.4277C20.2928 11.4277 20.4415 11.4573 20.5802 11.5148C20.719 11.5723 20.845 11.6566 20.9511 11.7629ZM9.85685 1.14286C9.85685 0.839752 9.97726 0.549062 10.1916 0.334735C10.4059 0.120408 10.6966 0 10.9997 0H17.8569C18.16 0 18.4506 0.120408 18.665 0.334735C18.8793 0.549062 18.9997 0.839752 18.9997 1.14286C18.9997 1.44596 18.8793 1.73665 18.665 1.95098C18.4506 2.16531 18.16 2.28571 17.8569 2.28571H10.9997C10.6966 2.28571 10.4059 2.16531 10.1916 1.95098C9.97726 1.73665 9.85685 1.44596 9.85685 1.14286Z" fill="#0E0C12" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter4_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>+
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>Editing hrs</p>
                                    </div>
                                </div>
                                <div className="p-2 m-2 h-14 w-56 xl:h-14 xl:w-54 2xl:h-16 2xl:w-56 hidden lg:flex justify-evenly items-center bg-[#FFFFFF] text-black font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 36 24" fill="none">
                                        <path d="M35.8964 11.514C35.8439 11.3955 34.5734 8.577 31.7489 5.7525C27.9854 1.989 23.2319 0 17.9999 0C12.7679 0 8.01436 1.989 4.25086 5.7525C1.42636 8.577 0.149864 11.4 0.103364 11.514C0.0351333 11.6675 -0.00012207 11.8335 -0.00012207 12.0015C-0.00012207 12.1695 0.0351333 12.3355 0.103364 12.489C0.155864 12.6075 1.42636 15.4245 4.25086 18.249C8.01436 22.011 12.7679 24 17.9999 24C23.2319 24 27.9854 22.011 31.7489 18.249C34.5734 15.4245 35.8439 12.6075 35.8964 12.489C35.9646 12.3355 35.9999 12.1695 35.9999 12.0015C35.9999 11.8335 35.9646 11.6675 35.8964 11.514ZM17.9999 21.6C13.3829 21.6 9.34936 19.9215 6.01036 16.6125C4.64033 15.25 3.47475 13.6964 2.54986 12C3.4745 10.3034 4.64011 8.74977 6.01036 7.3875C9.34936 4.0785 13.3829 2.4 17.9999 2.4C22.6169 2.4 26.6504 4.0785 29.9894 7.3875C31.3621 8.74944 32.5302 10.3031 33.4574 12C32.3759 14.019 27.6644 21.6 17.9999 21.6ZM17.9999 4.8C16.5758 4.8 15.1838 5.22227 13.9998 6.01342C12.8157 6.80457 11.8929 7.92905 11.3479 9.24468C10.803 10.5603 10.6604 12.008 10.9382 13.4047C11.216 14.8013 11.9018 16.0842 12.9087 17.0912C13.9156 18.0981 15.1986 18.7838 16.5952 19.0617C17.9919 19.3395 19.4396 19.1969 20.7552 18.6519C22.0708 18.107 23.1953 17.1841 23.9864 16.0001C24.7776 14.8161 25.1999 13.424 25.1999 12C25.1979 10.0911 24.4387 8.26086 23.0888 6.91102C21.739 5.56119 19.9088 4.80199 17.9999 4.8ZM17.9999 16.8C17.0505 16.8 16.1225 16.5185 15.3331 15.9911C14.5438 15.4636 13.9285 14.714 13.5652 13.8369C13.2019 12.9598 13.1069 11.9947 13.2921 11.0636C13.4773 10.1325 13.9345 9.27718 14.6058 8.60589C15.277 7.9346 16.1323 7.47744 17.0634 7.29223C17.9945 7.10702 18.9597 7.20208 19.8367 7.56538C20.7138 7.92868 21.4635 8.54391 21.9909 9.33326C22.5183 10.1226 22.7999 11.0507 22.7999 12C22.7999 13.273 22.2942 14.4939 21.394 15.3941C20.4938 16.2943 19.2729 16.8 17.9999 16.8Z" fill="#0E0C12" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter1_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>organic views</p>
                                    </div>
                                </div>
                                <div className=" p-2 m-2 h-14 w-56 xl:h-14 xl:w-54 2xl:h-16 2xl:w-56 hidden lg:flex justify-evenly items-center bg-[#7F00FF] text-white font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 33 24" fill="none">
                                        <path d="M32.2393 13.94C32.1249 14.0258 31.9947 14.0883 31.8561 14.1238C31.7176 14.1593 31.5734 14.1671 31.4318 14.1469C31.2902 14.1267 31.154 14.0788 31.0309 14.0059C30.9078 13.933 30.8003 13.8366 30.7145 13.7222C30.058 12.8398 29.2036 12.1238 28.2199 11.632C27.2361 11.1401 26.1507 10.8861 25.0509 10.8904C24.8367 10.8904 24.6273 10.8272 24.4488 10.7088C24.2704 10.5904 24.1308 10.422 24.0475 10.2246C23.991 10.0906 23.9618 9.94668 23.9618 9.80124C23.9618 9.6558 23.991 9.51183 24.0475 9.37783C24.1308 9.1805 24.2704 9.01209 24.4488 8.89368C24.6273 8.77527 24.8367 8.7121 25.0509 8.71208C25.662 8.71203 26.2609 8.54059 26.7794 8.21725C27.298 7.89391 27.7155 7.43162 27.9845 6.8829C28.2535 6.33417 28.3632 5.721 28.3012 5.11304C28.2392 4.50508 28.0079 3.9267 27.6337 3.44359C27.2594 2.96047 26.7572 2.592 26.184 2.38002C25.6109 2.16803 24.9897 2.12104 24.3912 2.24437C23.7926 2.3677 23.2407 2.65642 22.798 3.07772C22.3553 3.49903 22.0397 4.03603 21.8869 4.62774C21.8511 4.7663 21.7884 4.89646 21.7024 5.01079C21.6163 5.12512 21.5086 5.22138 21.3853 5.29407C21.2621 5.36677 21.1257 5.41447 20.984 5.43446C20.8423 5.45445 20.698 5.44633 20.5595 5.41057C20.4209 5.37481 20.2908 5.31212 20.1764 5.22606C20.0621 5.14 19.9658 5.03226 19.8932 4.909C19.8205 4.78574 19.7728 4.64936 19.7528 4.50767C19.7328 4.36597 19.7409 4.22172 19.7767 4.08316C19.9887 3.26264 20.3893 2.50293 20.9467 1.86448C21.504 1.22604 22.2026 0.72648 22.987 0.405557C23.7714 0.0846339 24.6198 -0.0487959 25.4648 0.0158844C26.3098 0.0805647 27.1281 0.34157 27.8545 0.778132C28.5809 1.21469 29.1953 1.81476 29.649 2.53059C30.1027 3.24642 30.383 4.05826 30.4677 4.9015C30.5524 5.74474 30.4392 6.59611 30.1369 7.38787C29.8347 8.17963 29.3518 8.88992 28.7268 9.46224C30.2078 10.1035 31.4952 11.121 32.4612 12.4139C32.5471 12.5286 32.6094 12.6591 32.6447 12.7979C32.68 12.9368 32.6875 13.0812 32.6669 13.223C32.6463 13.3648 32.5979 13.5011 32.5246 13.6241C32.4512 13.7471 32.3543 13.8545 32.2393 13.94ZM24.9039 22.3265C24.9827 22.4505 25.0356 22.5891 25.0594 22.7341C25.0833 22.879 25.0775 23.0273 25.0426 23.17C25.0076 23.3126 24.9442 23.4468 24.8561 23.5643C24.7679 23.6818 24.6569 23.7803 24.5298 23.8538C24.4026 23.9273 24.2619 23.9743 24.116 23.9921C23.9702 24.0098 23.8223 23.9978 23.6812 23.9569C23.5402 23.9159 23.4088 23.8469 23.2951 23.7539C23.1814 23.6609 23.0877 23.5459 23.0196 23.4157C22.3335 22.2539 21.3564 21.2911 20.1846 20.6223C19.0128 19.9534 17.6869 19.6017 16.3376 19.6017C14.9884 19.6017 13.6625 19.9534 12.4907 20.6223C11.3189 21.2911 10.3418 22.2539 9.65567 23.4157C9.58758 23.5459 9.49386 23.6609 9.38016 23.7539C9.26646 23.8469 9.13512 23.9159 8.99404 23.9569C8.85297 23.9978 8.70507 24.0098 8.55925 23.9921C8.41343 23.9743 8.27269 23.9273 8.14552 23.8538C8.01834 23.7803 7.90735 23.6818 7.81922 23.5643C7.73109 23.4468 7.66764 23.3126 7.6327 23.17C7.59775 23.0273 7.59202 22.879 7.61586 22.7341C7.63971 22.5891 7.69262 22.4505 7.77142 22.3265C8.82736 20.5122 10.4374 19.0845 12.3649 18.2531C11.2803 17.4227 10.4832 16.2732 10.0856 14.9663C9.68803 13.6594 9.70999 12.2608 10.1484 10.967C10.5868 9.67328 11.4196 8.54943 12.5298 7.75345C13.6399 6.95748 14.9716 6.5294 16.3376 6.5294C17.7037 6.5294 19.0354 6.95748 20.1455 7.75345C21.2557 8.54943 22.0885 9.67328 22.5269 10.967C22.9653 12.2608 22.9873 13.6594 22.5897 14.9663C22.1921 16.2732 21.395 17.4227 20.3103 18.2531C22.2379 19.0845 23.8479 20.5122 24.9039 22.3265ZM16.3376 17.4253C17.1993 17.4253 18.0416 17.1698 18.7581 16.6911C19.4745 16.2124 20.0329 15.532 20.3626 14.7359C20.6924 13.9398 20.7787 13.0639 20.6106 12.2188C20.4425 11.3737 20.0275 10.5974 19.4182 9.98811C18.809 9.37882 18.0327 8.96389 17.1876 8.79579C16.3425 8.62769 15.4665 8.71396 14.6704 9.04371C13.8744 9.37345 13.194 9.93185 12.7152 10.6483C12.2365 11.3647 11.981 12.207 11.981 13.0687C11.981 14.2242 12.44 15.3323 13.257 16.1493C14.0741 16.9663 15.1822 17.4253 16.3376 17.4253ZM8.71354 9.80124C8.71354 9.51237 8.59879 9.23534 8.39454 9.03109C8.19028 8.82683 7.91325 8.71208 7.62439 8.71208C7.01327 8.71203 6.41442 8.54059 5.89585 8.21725C5.37729 7.89391 4.95979 7.43162 4.69079 6.8829C4.42178 6.33417 4.31206 5.721 4.37407 5.11304C4.43608 4.50508 4.66735 3.9267 5.0416 3.44359C5.41585 2.96047 5.91809 2.592 6.49126 2.38002C7.06443 2.16803 7.68556 2.12104 8.2841 2.24437C8.88264 2.3677 9.4346 2.65642 9.87728 3.07772C10.32 3.49903 10.6356 4.03603 10.7884 4.62774C10.8606 4.90758 11.041 5.14726 11.29 5.29407C11.5389 5.44088 11.836 5.48279 12.1158 5.41057C12.3956 5.33836 12.6353 5.15793 12.7821 4.909C12.9289 4.66006 12.9708 4.363 12.8986 4.08316C12.6866 3.26264 12.2859 2.50293 11.7286 1.86448C11.1713 1.22604 10.4726 0.72648 9.68828 0.405557C8.90391 0.0846339 8.05546 -0.0487959 7.21045 0.0158844C6.36544 0.0805647 5.54719 0.34157 4.8208 0.778132C4.09441 1.21469 3.47994 1.81476 3.02627 2.53059C2.5726 3.24642 2.29226 4.05826 2.20756 4.9015C2.12286 5.74474 2.23613 6.59611 2.53836 7.38787C2.84059 8.17963 3.32344 8.88992 3.94848 9.46224C2.46898 10.1041 1.183 11.1216 0.218122 12.4139C0.0446245 12.6449 -0.0299675 12.9355 0.0107562 13.2216C0.0514798 13.5077 0.204183 13.7659 0.435273 13.9394C0.666363 14.1128 0.95691 14.1874 1.243 14.1467C1.52908 14.106 1.78728 13.9533 1.96077 13.7222C2.61724 12.8398 3.47172 12.1238 4.45543 11.632C5.43913 11.1401 6.52458 10.8861 7.62439 10.8904C7.91325 10.8904 8.19028 10.7756 8.39454 10.5714C8.59879 10.3671 8.71354 10.0901 8.71354 9.80124Z" fill="white" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter1_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>followers</p>
                                    </div>
                                </div>
                                <div className="p-2 m-2 h-14 w-36 xl:h-14 xl:w-36 2xl:h-16 2xl:w-44 m-0 hidden lg:flex justify-evenly items-center bg-[#FFD93D] text-black font-bold rounded-lg z-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 29 32" fill="none">
                                        <path d="M14.4283 4.57143C11.7159 4.57143 9.06433 5.37576 6.80903 6.8827C4.55373 8.38965 2.79593 10.5315 1.75793 13.0375C0.719931 15.5434 0.448343 18.3009 0.977512 20.9612C1.50668 23.6215 2.81284 26.0652 4.73082 27.9832C6.64879 29.9012 9.09245 31.2073 11.7528 31.7365C14.4131 32.2656 17.1706 31.9941 19.6765 30.9561C22.1825 29.9181 24.3243 28.1603 25.8313 25.905C27.3382 23.6497 28.1426 20.9981 28.1426 18.2857C28.1384 14.6497 26.6922 11.1639 24.1212 8.59284C21.5501 6.02182 18.0643 4.57559 14.4283 4.57143ZM14.4283 29.7143C12.1679 29.7143 9.95833 29.044 8.07891 27.7882C6.19949 26.5324 4.73466 24.7475 3.86966 22.6592C3.00466 20.5709 2.77833 18.273 3.21931 16.0561C3.66028 13.8392 4.74875 11.8028 6.34706 10.2045C7.94537 8.60618 9.98175 7.51771 12.1987 7.07674C14.4156 6.63576 16.7135 6.86209 18.8018 7.72709C20.8901 8.59209 22.675 10.0569 23.9308 11.9363C25.1866 13.8158 25.8569 16.0254 25.8569 18.2857C25.8534 21.3157 24.6483 24.2206 22.5057 26.3632C20.3632 28.5057 17.4583 29.7109 14.4283 29.7143ZM20.9511 11.7629C21.0574 11.869 21.1417 11.995 21.1992 12.1338C21.2567 12.2725 21.2863 12.4212 21.2863 12.5714C21.2863 12.7216 21.2567 12.8703 21.1992 13.0091C21.1417 13.1478 21.0574 13.2739 20.9511 13.38L15.2369 19.0943C15.1307 19.2005 15.0046 19.2847 14.8659 19.3422C14.7271 19.3996 14.5784 19.4292 14.4283 19.4292C14.2781 19.4292 14.1294 19.3996 13.9907 19.3422C13.8519 19.2847 13.7259 19.2005 13.6197 19.0943C13.5135 18.9881 13.4293 18.862 13.3718 18.7233C13.3144 18.5846 13.2848 18.4359 13.2848 18.2857C13.2848 18.1355 13.3144 17.9869 13.3718 17.8481C13.4293 17.7094 13.5135 17.5833 13.6197 17.4771L19.334 11.7629C19.4401 11.6566 19.5662 11.5723 19.7049 11.5148C19.8437 11.4573 19.9924 11.4277 20.1426 11.4277C20.2928 11.4277 20.4415 11.4573 20.5802 11.5148C20.719 11.5723 20.845 11.6566 20.9511 11.7629ZM9.85685 1.14286C9.85685 0.839752 9.97726 0.549062 10.1916 0.334735C10.4059 0.120408 10.6966 0 10.9997 0H17.8569C18.16 0 18.4506 0.120408 18.665 0.334735C18.8793 0.549062 18.9997 0.839752 18.9997 1.14286C18.9997 1.44596 18.8793 1.73665 18.665 1.95098C18.4506 2.16531 18.16 2.28571 17.8569 2.28571H10.9997C10.6966 2.28571 10.4059 2.16531 10.1916 1.95098C9.97726 1.73665 9.85685 1.44596 9.85685 1.14286Z" fill="#0E0C12" />
                                    </svg>
                                    <div>
                                        <h1 className="text-lg xl:text-xl 2xl:text-2xl" style={{ fontFamily: 'Archivo' }}>
                                            <span className="tabular-nums animate-[counter4_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                            </span>+
                                        </h1>
                                        <p className="text-sm xl:text-base 2xl:text-lg" style={{ fontFamily: 'Archivo' }}>Editing hrs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </section>

            <section className={type === "page1" ? " " : "hidden"}>
                <div className="bg-black h-0 block relative rotate-180 z-0 right-0" style={{ top: '120px' }}>
                    <img className="w-32 sm:w-36 md:w-40" src="./images/Mask group.svg" />
                </div>
            </section>


            <div className="inline-block z-20 fixed bottom-10 right-4 sm:bottom-20 md:bottom-16 md:right-10 lg:bottom-10 2xl:bottom-20 2xl:right-10">
                <a href="https://whatsapp.com/" target="blank">
                    <svg className="w-8 md:w-10 lg:w-12" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
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