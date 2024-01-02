import "./flow.css"
import '../App.css'
import road from '../assets/img/road.png'
// import Unveiling from "./Unveiling.jsx";

function Flow({ type }) {

    return (
        <>
            <section className="h-auto bg-black w-screen">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10/12">
                        <div className="fade m-1 bg-black flex justify-center sm:justify-start items-center">
                            <p className="mt-12 sm:mt-12 mb-6 font-bold text-white text-[1.8rem] md:text-3xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Unveiling Our Impact</p>
                        </div>
                        <div className="flex justify-center items-center sm:block" >
                            <div className="fade px-0 sm:p-2 h-3/4 bg-black flex justify-between items-start sm:items-center flex-col sm:flex-row">
                                {/* <div className="grid gap-12 md:grid-cols-3 md:gap-16 "> */}
                                <div className=" mt-10 sm:mt-0 flex justify-center items-center">
                                    <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                    <h2>
                                        <span className="flex justify-evenly items-center text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                            <h2 className="ml-4">
                                                {/* <section className={type === "kontentedit" ? " " : "hidden"}> */}
                                                <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold animate-[counter8_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                    <span className="sr-only">100 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                        <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                    </svg>
                                                </span>
                                                <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">Custom Videos</span>
                                                {/* </section> */}
                                                {/* <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold animate-[counter5_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">10 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">Countries</span>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold animate-[counter5_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">10 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">Countries</span>
                                        </section> */}
                                            </h2>
                                        </span>
                                    </h2>
                                </div>
                                <div className=" mt-20 sm:mt-0 flex justify-center items-center">
                                    <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                    <h2>
                                        <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                            <h2 className="ml-4">
                                                {/* <section className={type === "kontentedit" ? " " : "hidden"}> */}
                                                <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter6_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                    <span className="sr-only">500
                                                    </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                        <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                    </svg>
                                                </span>
                                                <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">YouTube Edits</span>
                                                {/* </section> */}
                                                {/* <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter6_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">2600 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>&nbsp;Edits
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">No. of hours</span>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter6_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">2600 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>&nbsp;Edits
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">No. of hours</span>
                                        </section> */}
                                            </h2>
                                        </span>
                                    </h2>
                                </div>
                                <div className="mt-20 sm:mt-0 flex justify-center items-center">
                                    <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                    <h2>
                                        <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                            <h2 className="ml-4">
                                                {/* <section className={type === "kontentedit" ? " " : "hidden"}> */}
                                                <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter7_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                    <span className="sr-only">2500</span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                        <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                    </svg>
                                                </span>
                                                <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500"> Reel Edits</span>
                                                {/* </section> */}
                                                {/* <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter7_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">One Word</span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500"> No of followers</span>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter7_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">One Word</span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500"> No of followers</span>
                                        </section> */}
                                            </h2>
                                        </span>
                                    </h2>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className={type === "kontentedit" ? " " : "hidden"}> */}
                <div className="h-auto bg-black flex justify-evenly items-center flex-col text-white">
                    <div className="fade mt-20 sm:mb-10 flex justify-center items-center">
                        <h2 className="text-4xl lg:text-6xl xl:text-7xl" style={{ fontFamily: 'Archivo' }}>The Process</h2>
                    </div>
                </div>
                <div className="h-[96rem] flex flex-col justify-evenly items-center m-o sm:m-10">
                    <div className="-mt-16 sm:mt-24 flex flex-row justify-center items-center text-white">
                        
                        <div className="road roadhead sm:m-10 sm:mr-28 z-10 w-[35%] sm:w-3/12 flex justify-end">
                            <section className={type === "kontentedit" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Branding</h3>
                                </button>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Discover</h3>
                                </button>


                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Discovery</h3>
                                </button>
                            </section>
                        </div>
                        <div className="absolute mt-[62rem]">
                            <img src={road} className="road h-[96rem] sm:w-[7rem]" />
                        </div>

                        <div className="roadcon fade sm:m-10 sm:ml-28 z-10 w-[35%] sm:w-3/12">
                            <section className={type === "kontentedit" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll receive the raw footage from you and draft a custom branding for your videos which no one else has on the internet by incorporating your brand colors, fonts, and graphics to create your unique identity.</h4>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll meet up, collaborate, and then ideate to put together a narrative that speaks to your audience. </h4>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll meet up, collaborate, and delve deep into your brand, product details, and content goals</h4>
                            </section>
                        </div>
                    </div>
                    <div className=" flex flex-row justify-center items-center text-white">
                        
                        <div className="road roadhead sm:m-10 sm:mr-28 z-10 w-[35%] sm:w-3/12 flex justify-end">
                            <section className={type === "kontentedit" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Editing & Storytelling</h3>
                                </button>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Setup &
                                        Shoot</h3>
                                </button>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Scripting</h3>
                                </button>
                            </section>
                        </div>
                        {/* <div>
                            <img src={road}/>
                        </div> */}
                        {/* <div className="absolute h-[20rem] text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0 z-0 flex justify-center items-center">
                            <div className=" absolute w-5 h-5 bg-[#FFD93D] text-black rounded-full flex justify-center items-center">
                                <div className="relative">
                                    <div className="sticky font-bold text-xl lg:text-2xl xl:text-3xl"></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="roadcon fade sm:m-10 sm:ml-28 z-10 w-[35%] sm:w-3/12">
                            <section className={type === "kontentedit" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">Our editors will add cuts, transitions, and pacing for the best engagement and  leverage animations and motion graphics to bring the focus to the key moments.</h4>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll set you up in a top-tier studio where you can have passionate conversations. </h4>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">Our skilled scriptwriters will craft a no-fluff, compelling narrative that captures your brand's voice and drives viewers to action.</h4>
                            </section>
                        </div>
                    </div>
                    <div className=" flex flex-row justify-center items-center text-white">
                        
                        <div className="road roadhead sm:m-10 sm:mr-28 z-10 w-[35%] sm:w-3/12 flex justify-end">
                            <section className={type === "kontentedit" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Feedback & Iterations</h3>
                                </button>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Edit</h3>
                                </button>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Casting</h3>
                                </button>
                            </section>
                        </div>
                        {/* <div>
                            <img src={road}/>
                        </div> */}
                        {/* <div className="absolute h-[20rem] text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0 z-0 flex justify-center items-center">
                            <div className=" absolute w-5 h-5 bg-[#FFD93D] text-black rounded-full flex justify-center items-center">
                                <div className="relative">
                                    <div className="sticky font-bold text-xl lg:text-2xl xl:text-3xl"></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="roadcon fade sm:m-10 sm:ml-28 z-10 w-[35%] sm:w-3/12">
                            <section className={type === "kontentedit" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll maintain open communication and apply your feedback and suggestions to ensure the final video meets your expectations..</h4>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">With a captivating episode trailer and eye-catching animations, we’ll create episodes that mesmerize and blow minds.</h4>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">Choose from a pool of top-tier orators and performers to be the face of your brand and deliver your message with passion and conviction.</h4>
                            </section>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center text-white">
                        <div className="road roadhead sm:m-10 sm:mr-28 z-10 w-[35%] sm:w-3/12 flex justify-end">
                            <section className={type === "kontentedit" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Delivery & Beyond</h3>
                                </button>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Produce & Distribute</h3>
                                </button>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>
                                <button className="roadfadeani h-auto w-auto text-base md:text-lg font-bold flex justify-center items-center px-2">
                                    <h3 className="m-1 text-xl sm:text-2xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Production</h3>
                                </button>
                            </section>
                        </div>
                        {/* <div>
                            <img src={road}/>
                        </div> */}
                        {/* <div className="absolute h-[20rem] text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0 z-0 flex justify-center items-center">
                            <div className=" absolute w-5 h-5 bg-[#FFD93D] text-black rounded-full flex justify-center items-center">
                                <div className="relative">
                                    <div className="sticky font-bold text-xl lg:text-2xl xl:text-3xl"></div>
                                </div>
                            </div>
                        </div> */}
                        <div className="roadcon fade sm:m-10 sm:ml-28 z-10 w-[35%] sm:w-3/12">
                            <section className={type === "kontentedit" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll receive the raw footage from you and draft a custom branding for your videos which no one else has on the internet by incorporating your brand colors, fonts, and graphics to create your unique identity.</h4>
                            </section>
                            <section className={type === "kontentpod" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll meet up, collaborate, and then ideate to put together a narrative that speaks to your audience. </h4>
                            </section>
                            <section className={type === "kontents2s" ? " " : "hidden"}>

                                <h4 className="text-sm md:text-xl text-white">We’ll meet up, collaborate, and delve deep into your brand, product details, and content goals</h4>
                            </section>
                        </div>
                    </div>
                </div>
            </section>


            {/* </section> */}
        </>
    )
}

export default Flow