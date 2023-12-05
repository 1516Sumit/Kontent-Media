function Keyfeature() {
    return (
        <>
            <div className="bg-black flex items-center justify-center flex-col w-screen h-auto md:h-screen">
                <div className="mt-0 sm:mt-56 md:mt-14 mb-2 md:mb-0 text-center">
                    <p className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-white"  style={{fontFamily: 'Archivo'}}>
                        Key features to
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#FFD93D]"  style={{fontFamily: 'Archivo'}}> add <br />value </span>
                        to your
                        <span className="self-center text-2xl sm:text-4xl md:text-5xl tracking-tight font-semibold whitespace-nowrap text-[#7F00FF]"  style={{fontFamily: 'Archivo'}}> business.</span>
                    </p>
                </div>

                <div className="m-14 sm:m-24 md:m-2 lg:m-10 grid grid-cols-1 lg:gap-24 md:grid-cols-3">
                    <div className="flex items-center justify-center flex-col">
                        <img src="./images/Icon-purple.png" className="w-20 m-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col text-center">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">Get Rid of Unreliable Freelancers</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">Many of these business ideas are home-based. While they may not make you a billionaire</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <img src="./images/Icon-yellow.png" className="w-20 m-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col text-center">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">Best Turnaround Time</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">Many of these business ideas are home-based. While they may not make you a billionaire</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col text-center">
                        <img src="./images/Icon-purple.png" className="w-20 m-14" />
                        <div className="h-12 m-2 p-3 pb-5 flex justify-center items-center flex-col">
                            <h1 className="mb-5 text-white text-sm md:text-lg lg:text-xl">Seamless Communication</h1>
                            <p className="text-slate-400 text-sm md:text-sm lg:text-base">Many of these business ideas are home-based. While they may not make you a billionaire</p>
                        </div>
                    </div>
                   

                </div>
                
            </div>
        </>
    )
}

export default Keyfeature