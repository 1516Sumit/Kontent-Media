function Unveiling({ type }) {
    return (
        <>
            <section className="fade flex flex-col justify-center items-center">
                <div className="w-10/12">
                    <div className="m-1 bg-black flex justify-center sm:justify-start items-center">
                        <p className="mb-6 font-bold text-white text-[1.8rem] md:text-3xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Unveiling Our Impact</p>
                    </div>
                    <div className="flex justify-center items-center sm:block" >
                        <div className="p-2 h-3/4 bg-black flex justify-between items-start sm:items-center flex-col sm:flex-row">
                            {/* <div className="grid gap-12 md:grid-cols-3 md:gap-16 "> */}
                            <div className="pl-2 sm:pl-0 mt-10 sm:mt-0 flex justify-center items-center">
                                <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                <h2>
                                    <span className="flex justify-evenly items-center text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                        <h2 className="ml-4">
                                            {/* <section className={type === "landing" ? " " : "hidden"}> */}
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter8_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                <span className="sr-only">100 </span>&nbsp;M<svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                    <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                </svg>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">Organic Views</span>
                                            {/* </section> */}
                                        </h2>
                                    </span>
                                </h2>
                            </div>
                            <div className="pl-2 sm:pl-0 mt-20 sm:mt-0 flex justify-center items-center">
                                <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                <h2>
                                    <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                        <h2 className="ml-4">
                                            {/* <section className={type === "landing" ? " " : "hidden"}> */}
                                            <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold ">$
                                                <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter9_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                    <span className="sr-only">2</span>M<svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                        <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500 sm:px-0">Revenue Generated for clients</span>
                                            {/* </section> */}
                                        </h2>
                                    </span>
                                </h2>
                            </div>
                            <div className="pl-2 sm:pl-0 mt-20 sm:mt-0 flex justify-center items-center">
                                <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                                <h2>
                                    <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                        <h2 className="ml-4">
                                            <section className={type === "landing" ? " " : "hidden"}>
                                                <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold animate-[counter5_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                                    <span className="sr-only">10 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                                        <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                                    </svg>
                                                </span>
                                                <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">Countries</span>
                                            </section>
                                        </h2>
                                    </span>
                                </h2>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Unveiling;