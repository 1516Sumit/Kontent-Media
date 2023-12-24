import '../App.css'
function Keyfeature() {
    return (
        <>
            <div className="fade bg-black flex items-center justify-center flex-col w-screen h-auto md:h-screen">
                <div className="mt-0 sm:mt-56 md:mt-14 mb-2 md:mb-0 text-center">
                    <p className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white" style={{ fontFamily: 'Archivo' }}>
                        Epic Videos.
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]" style={{ fontFamily: 'Archivo' }}>  Solid Branding. </span> <br />
                        Lasting
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]" style={{ fontFamily: 'Archivo' }}> Growth! </span>
                    </p>
                    <p className="my-4 sm:my-10 mx-8 lg:my-5 font-Inter font-medium text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl sm:px-16 xl:px-48">200 Billion+ videos are viewed daily on social media. We help you cut through <br />the noise, reach the right people, and build your brand.
                    </p>
                </div>

                <div className="mx-10 sm:mx-24 md:m-2 lg:m-10 grid grid-cols-1 lg:gap-24 md:grid-cols-3">
                    <div className="flex items-center justify-center flex-col">
                        <img src="./images/Icon-purple.png" className="w-20 m-10 mb-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col text-center">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">Do More in Less Time</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">Content Creation is a tedious process, not anymore.
                                You just have to press record, and we will take care of the rest.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <img src="./images/Icon-yellow.png" className="w-20 m-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col text-center">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">Be a trendsetter</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">We help you create videos that sets you apart from the masses by personalizing branding & content psychology. We don’t  simply help you ride trends, but create them.
                                Why be the next when you can be the first?
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center">
                        <img src="./images/Icon-purple.png" className="w-20 m-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">No More Chaotic Operations</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">Work with a team you can rely on.
                                We personally invest ourselves in every client we take on.
                                Whether it’s going the extra mile or helping you strategize - we’ve got you covered.
                            </p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Keyfeature