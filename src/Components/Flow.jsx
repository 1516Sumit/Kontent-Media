import "./flow.css"
import '../App.css'


function Flow({ type }) {
    return (
        <>
            <section className="h-auto bg-black w-screen section md:pt-20">
                <div className="bg-black flex justify-center sm:justify-start items-center pt-20">
                    <p className="m-5 sm:m-10 lg:ml-42 xl:ml-40 2xl:ml-44 font-bold text-white text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Archivo' }}>Unveiling Our Impact</p>
                </div>
                <div className="p-2 h-3/4 bg-black flex justify-evenly items-center flex-col sm:flex-row">
                    {/* <div className="grid gap-12 md:grid-cols-3 md:gap-16 "> */}
                    <div className=" mt-10 sm:mt-0 flex justify-center items-center">
                        <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                        <h2>
                            <span className="flex justify-evenly items-center text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                <h2 className="ml-4">
                                    <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold animate-[counter5_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                        <span className="sr-only">10 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                            <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                        </svg> &nbsp;Countries
                                    </span>
                                    <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">No. of views</span>
                                </h2>
                            </span>
                        </h2>
                    </div>
                    <div className=" mt-20 sm:mt-0 flex justify-center items-center">
                        <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                        <h2>
                            <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                <h2 className="ml-4">
                                    <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter6_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                        <span className="sr-only">2600 </span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                            <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                        </svg>&nbsp;Edits
                                    </span>
                                    <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500">No. of hours</span>
                                </h2>
                            </span>
                        </h2>
                    </div>
                    <div className="mt-20 sm:mt-0 flex justify-center items-center">
                        <div className="h-24 text-white border-[#7F00FF] border-t-0 border-l-4 border-r-0 border-b-0"></div>
                        <h2>
                            <span className="flex text-slate-900 text-3xl md:text-5xl font-extrabold mb-2">
                                <h2 className="ml-4">
                                    <span className="flex tabular-nums text-white text-3xl md:text-5xl font-extrabold  animate-[counter7_4s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                                        <span className="sr-only">One Word</span><svg className="mt-3 ml-2 h-4 w-4 sm:h-6 sm:w-6 sm:mt-4 sm:ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                                            <path d="M24.8594 16.5803H15.8049V26.669H9.12534V16.5803H0.0213013V10.5468H9.12534V0.507568H15.8049V10.5468H24.8594V16.5803Z" fill="#FFD93D" />
                                        </svg>
                                    </span>
                                    <span className="inline-flex font-medium text-lg sm:text-xl text-slate-500"> No of followers</span>
                                </h2>
                            </span>
                        </h2>
                    </div>
                    {/* </div> */}
                </div>

                <div className="h-auto lg:h-screen bg-black flex justify-evenly items-center flex-col text-white">
                    <div className="mt-20 flex justify-center items-center">
                        <h2 className="text-4xl lg:text-6xl xl:text-7xl" style={{ fontFamily: 'Archivo' }}>The Process</h2>
                    </div>
                    <div className="p-8 m-4 mt-0 flex justify-center items-center text-center flex-wrap w-screen lg:flex-nowrap flex-col md:flex-row">
                        <div className="flex justify-center items-center flex-col md:flex-row">
                            <div className="flex justify-center items-center flex-col md:flex-row">
                                <div className="flex justify-center items-center flex-col">
                                    <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex justify-center items-center">
                                        <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl">1</h1>
                                    </div>
                                    <div className="p-2">
                                        <section className={type === "kontentedit" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Branding</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll receive the raw footage from you and draft a custom branding for your videos which no one else has on the internet by incorporating your brand colors, fonts, and graphics to create your unique identity.</h4>
                                        </section>
                                        <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Discover</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll meet up, collaborate, and then ideate to put together a narrative that speaks to your audience. </h4>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Discovery</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll meet up, collaborate, and delve deep into your brand, product details, and content goals</h4>
                                        </section>
                                    </div>
                                </div>
                                <svg className="m-14 w-24 md:m-0 md:mb-12 md:w-32 lg:w-40 xl:w-52 rotate-90 md:rotate-0" xmlns="http://www.w3.org/2000/svg" width="209" height="39" viewBox="0 0 209 39" fill="none">
                                    <defs>
                                        <linearGradient id="left-to-right">
                                            <stop offset="0" stopColor="#F2F4F6">
                                                <animate dur="3s" begin="2s;op.end+2s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>
                                            <stop offset="0" stopColor="transparent">
                                                <animate dur="3s" begin="2s;op.end+2s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>

                                        </linearGradient>
                                    </defs>
                                    <path strokeWidth="1" opacity="1" fill="url(#left-to-right)" d="M208.44 23.7654C208.571 23.5226 208.481 23.2191 208.238 23.0875L204.282 20.9434C204.039 20.8118 203.736 20.902 203.604 21.1447C203.472 21.3875 203.563 21.691 203.805 21.8226L207.322 23.7285L205.416 27.2452C205.285 27.488 205.375 27.7915 205.618 27.9231C205.86 28.0546 206.164 27.9645 206.295 27.7217L208.44 23.7654ZM0.636358 1.34317C21.4381 23.3859 91.9493 58.5229 208.142 24.0064L207.858 23.0478C91.9355 57.4839 21.8472 22.3624 1.36364 0.656831L0.636358 1.34317Z" />
                                </svg>
                            </div>

                            <div className="flex justify-center items-center flex-col md:flex-row">
                                <div className="flex justify-center items-center flex-col">
                                    <div className="w-16 h-16 bg-[#7F00FF] text-black rounded-full flex justify-center items-center">
                                        <h1 className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">2</h1>
                                    </div>
                                    <div className="p-2">
                                        <section className={type === "kontentedit" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Editing & Storytelling</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">Our editors will add cuts, transitions, and pacing for the best engagement and  leverage animations and motion graphics to bring the focus to the key moments.</h4>
                                        </section>
                                        <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Create</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll set you up in a top-tier studio where you can have passionate conversations. </h4>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Scripting</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">Our skilled scriptwriters will craft a no-fluff, compelling narrative that captures your brand's voice and drives viewers to action. </h4>
                                        </section>
                                    </div>
                                </div>
                                
                                <svg className="m-14 w-24 md:m-0 md:mt-40 lg:mt-0 lg:mb-24 md:w-32 lg:w-40 xl:w-52 rotate-90 lg:rotate-0" xmlns="http://www.w3.org/2000/svg" width="210" height="32" viewBox="0 0 210 32" fill="none">
                                    <defs>
                                        <linearGradient id="left-to-rights">
                                            <stop offset="0" stopColor="#F2F4F6">
                                                <animate dur="3s" begin="5s;op.end+5s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>
                                            <stop offset="0" stopColor="transparent">
                                                <animate dur="3s" begin="5s;op.end+5s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>

                                        </linearGradient>
                                    </defs>
                                    <path strokeWidth="1" opacity="1" fill="url(#left-to-rights)" d="M209.201 12.7316C209.454 12.6205 209.569 12.3255 209.458 12.0727L207.648 7.95279C207.537 7.69997 207.242 7.58506 206.989 7.69614C206.736 7.80721 206.621 8.10221 206.732 8.35503L208.341 12.0172L204.679 13.6261C204.426 13.7372 204.311 14.0322 204.422 14.285C204.533 14.5378 204.828 14.6527 205.081 14.5417L209.201 12.7316ZM1.20016 31.4582C21.281 22.686 55.7804 11.2168 93.9755 5.33911C132.179 -0.539818 174.018 -0.815432 208.819 12.7397L209.181 11.8079C174.145 -1.83921 132.103 -1.5399 93.8234 4.35075C55.5364 10.2426 20.9539 21.7377 0.799843 30.5418L1.20016 31.4582Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col md:flex-row-reverse lg:flex-row md:mt-20 lg:mt-0">
                            <div className="flex justify-center items-center flex-col md:flex-row-reverse lg:flex-row">
                                <div className="flex justify-center items-center flex-col">
                                    <div className="w-16 h-16 bg-[#FFD93D] text-black rounded-full flex justify-center items-center">
                                        <h1 className="font-bold text-xl lg:text-2xl xl:text-3xl">3</h1>
                                    </div>
                                    <div className="p-2">
                                        <section className={type === "kontentedit" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}> Feedback & Iterations</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll maintain open communication and apply your feedback and suggestions to ensure the final video meets your expectations.</h4>
                                        </section>
                                        <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}> Edit</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">With a captivating episode trailer and eye-catching animations, we’ll create episodes that mesmerize and blow minds.</h4>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}> Casting</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">Choose from a pool of top-tier orators and performers to be the face of your brand and deliver your message with passion and conviction.</h4>
                                        </section>
                                    </div>
                                </div>

                                <svg className="m-14 w-24 md:m-0 md:mt-0 md:mb-12 md:w-32 lg:w-40 xl:w-52 rotate-90 md:rotate-180 lg:rotate-0" xmlns="http://www.w3.org/2000/svg" width="206" height="32" viewBox="0 0 206 32" fill="none">
                                    <defs>
                                        <linearGradient id="left-to-rightsi">
                                            <stop offset="0" stopColor="#F2F4F6">
                                                <animate dur="3s" begin="8s;op.end+8s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>
                                            <stop offset="0" stopColor="transparent">
                                                <animate dur="3s" begin="8s;op.end+8s" attributeName="offset" fill="freeze" from="0" to="1" />
                                                {/* repeatCount="indefinite" */}
                                            </stop>

                                        </linearGradient>
                                    </defs>
                                    <path strokeWidth="1" opacity="1" fill="url(#left-to-rightsi)" d="M205.944 19.7304C206.071 19.4853 205.975 19.1835 205.73 19.0562L201.737 16.9828C201.491 16.8555 201.19 16.9511 201.062 17.1962C200.935 17.4412 201.031 17.7431 201.276 17.8703L204.826 19.7134L202.983 23.2635C202.856 23.5085 202.951 23.8104 203.196 23.9376C203.441 24.0648 203.743 23.9693 203.87 23.7242L205.944 19.7304ZM0.757373 1.43719C32.6699 19.1478 118.281 47.6305 205.651 19.9767L205.349 19.0233C118.319 46.5695 32.9968 18.1855 1.24263 0.562813L0.757373 1.43719Z" />
                                </svg>

                            </div>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center flex-col">
                                    <div className="w-16 h-16 bg-[#7F00FF] text-black rounded-full flex justify-center items-center">
                                        <h1 className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">4</h1>
                                    </div>
                                    <div className="p-2">
                                        <section className={type === "kontentedit" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Delivery & Beyond</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">We’ll seamlessly deliver your final video in various formats optimized for various platforms and distribution channels.</h4>
                                        </section>
                                        <section className={type === "kontentpod" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Share</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">Later, we’ll Identify the most engaging moments, those hidden nuggets that go viral.</h4>
                                        </section>
                                        <section className={type === "kontents2s" ? " " : "hidden"}>
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Production</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">With State-of-the-art studios, top-notch footage, and sound design, we’ll create immersive and premium video content. </h4>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={type === "kontents2s" ? " " : "hidden"}>
                        <div className="p-8 m-4 mt-0 flex justify-center items-center text-center flex-wrap w-screen lg:flex-nowrap flex-row">
                            <div className="flex justify-center items-center flex-col-reverse md:flex-row-reverse lg:flex-row md:mt-20 lg:mt-0">
                                <div className="flex justify-center items-center">
                                    <div className="flex justify-center items-center flex-col">
                                        <div className="w-16 h-16 bg-[#7F00FF] text-black rounded-full flex justify-center items-center">
                                            <h1 className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">6</h1>
                                        </div>
                                        <div className="p-2">
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Production</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">With State-of-the-art studios, top-notch footage, and sound design, we’ll create immersive and premium video content. </h4>
                                        </div>
                                    </div>
                                </div>
                                <svg className="m-14 w-24 md:m-0 md:mt-0 md:mb-12 md:w-32 lg:w-40 xl:w-52 rotate-90 md:rotate-0 lg:rotate-180" xmlns="http://www.w3.org/2000/svg" width="206" height="32" viewBox="0 0 206 32" fill="none">
                                    <defs>
                                        <linearGradient id="left-to-rightsl">
                                            <stop offset="0" stopColor="#F2F4F6">
                                                <animate dur="3s" begin="14s;op.end+14s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>
                                            <stop offset="0" stopColor="transparent">
                                                <animate dur="3s" begin="14s;op.end+14s" attributeName="offset" fill="freeze" from="0" to="1" />
                                                {/* repeatCount="indefinite" */}
                                            </stop>

                                        </linearGradient>
                                    </defs>
                                    <path strokeWidth="1" opacity="1" fill="url(#left-to-rightsl)" d="M205.944 19.7304C206.071 19.4853 205.975 19.1835 205.73 19.0562L201.737 16.9828C201.491 16.8555 201.19 16.9511 201.062 17.1962C200.935 17.4412 201.031 17.7431 201.276 17.8703L204.826 19.7134L202.983 23.2635C202.856 23.5085 202.951 23.8104 203.196 23.9376C203.441 24.0648 203.743 23.9693 203.87 23.7242L205.944 19.7304ZM0.757373 1.43719C32.6699 19.1478 118.281 47.6305 205.651 19.9767L205.349 19.0233C118.319 46.5695 32.9968 18.1855 1.24263 0.562813L0.757373 1.43719Z" />
                                </svg>
                                <div className="flex justify-center items-center">
                                    <div className="flex justify-center items-center flex-col">
                                        <div className="w-16 h-16 bg-[#7F00FF] text-black rounded-full flex justify-center items-center">
                                            <h1 className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">5</h1>
                                        </div>
                                        <div className="p-2">
                                            <h3 className="m-1 text-md lg:text-lg xl:text-xl" style={{ fontFamily: 'Archivo' }}>Production</h3>
                                            <h4 className="text-sm md:text-base text-slate-400">With State-of-the-art studios, top-notch footage, and sound design, we’ll create immersive and premium video content. </h4>
                                        </div>
                                    </div>
                                </div>
                                <svg className="m-14 w-24 md:m-0 md:mb-52 lg:mt-0 lg:mb-32 md:w-32 lg:w-40 xl:w-52 rotate-90 md:rotate-45 lg:rotate-[145deg]" xmlns="http://www.w3.org/2000/svg" width="210" height="32" viewBox="0 0 210 32" fill="none">
                                    <defs>
                                        <linearGradient id="left-to-rightlo">
                                            <stop offset="0" stopColor="#F2F4F6">
                                                <animate dur="3s" begin="11s;op.end+11s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>
                                            <stop offset="0" stopColor="transparent">
                                                <animate dur="3s" begin="11s;op.end+11s" attributeName="offset" fill="freeze" from="0" to="1" />
                                            </stop>

                                        </linearGradient>
                                    </defs>
                                    <path strokeWidth="1" opacity="1" fill="url(#left-to-rightlo)" d="M209.201 12.7316C209.454 12.6205 209.569 12.3255 209.458 12.0727L207.648 7.95279C207.537 7.69997 207.242 7.58506 206.989 7.69614C206.736 7.80721 206.621 8.10221 206.732 8.35503L208.341 12.0172L204.679 13.6261C204.426 13.7372 204.311 14.0322 204.422 14.285C204.533 14.5378 204.828 14.6527 205.081 14.5417L209.201 12.7316ZM1.20016 31.4582C21.281 22.686 55.7804 11.2168 93.9755 5.33911C132.179 -0.539818 174.018 -0.815432 208.819 12.7397L209.181 11.8079C174.145 -1.83921 132.103 -1.5399 93.8234 4.35075C55.5364 10.2426 20.9539 21.7377 0.799843 30.5418L1.20016 31.4582Z" />
                                </svg>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </>
    )
}

export default Flow